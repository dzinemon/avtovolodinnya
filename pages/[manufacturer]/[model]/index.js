import dynamic from "next/dynamic";

// import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from '../../../components/layout'
import GaWrapper from '../../../components/gawrapper'

import ModelHeader from '../../../components/model/header'

const ModelDynamic = dynamic(() => import("../../../components/model/dynamic"), { ssr: false });

import fs from 'fs'
import path from 'path'
import { useEffect, useState } from "react";
import Seo from "../../../components/seo";

function Model({data}) {

  const [currentData, setCurrentData] = useState([])

  useEffect(() => {
    setCurrentData(data)
  },[]);

  const router = useRouter();
  const {model, manufacturer} = router.query;

  const image = `/manufacturers/${manufacturer}/images/${manufacturer}_${model.toUpperCase()}_0.jpg`
  return (
    <GaWrapper>
      <Layout>
          <Seo 
            title={`Актуальна ціна та вартість вододіння ${manufacturer.toUpperCase()} ${model.toUpperCase()} `}
            description={`Всі витрати при володінні та Актуальна ціна ${manufacturer.toUpperCase()} ${model.toUpperCase()} доступні всі комплектації`}
            currentPath={`${manufacturer.toLocaleLowerCase()}/${model.toLocaleLowerCase()}`} 
          />
          <ModelHeader data={currentData} model={model} manufacturer={manufacturer}/>
          <ModelDynamic data={currentData} model={model} manufacturer={manufacturer} image={image}/>
      </Layout>
    </GaWrapper>
  )
}

export async function getStaticPaths() {
  // Manufacturers 
  const currentAllManufacturerPath = path.join(process.cwd(), 'public', 'manufacturers')

  // Get the array of all manufactureres 
  const manufacturersFileNames = fs.readdirSync(currentAllManufacturerPath)

  const manufacturersFilteredNames = manufacturersFileNames.filter(i => i.indexOf('.DS_Store') === -1)
  

  let finalPaths = []
  // loop through each manufacturer
  manufacturersFilteredNames.map(i => {
    const currentManufacturerPath = path.join(process.cwd(), 'public', 'manufacturers', i)
    const modelFileNames = fs.readdirSync(currentManufacturerPath) 

    const availableCurrentModels = modelFileNames
      .filter(i => i.indexOf('.DS_Store') === -1)
      .filter(i => i.includes('json'))
      .map(cur => {
        cur = encodeURIComponent(cur.trim())
        return cur
      })
      .map((filename) => ({model: filename.replace('.json', '').toLowerCase().replace(`${i}_`, '')}))
  

    const availableCurrentModelsValues = Object.values(availableCurrentModels)  
    const addCurrentManufacturer = availableCurrentModelsValues.map(el => {


      el.manufacturer = i
      return el
    })


    const availableCurrentModelsPaths = addCurrentManufacturer.map(elem => (Object.assign({}, {'params': elem})))

    finalPaths = finalPaths.concat(availableCurrentModelsPaths)
    
  })

  return { 
    paths: finalPaths, 
    fallback: false }
}

export async function getStaticProps({params}) {
  const { manufacturer, model } = params
  const reqUrl = `public/manufacturers/${manufacturer}/${manufacturer.toUpperCase()}_${model.toUpperCase()}.json`
  const rawData = fs.readFileSync(reqUrl)
  const data = JSON.parse(rawData);

  return {props: {data} }
}

export default Model