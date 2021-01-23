import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'
import matter from 'gray-matter'

import GaWrapper from "../../../components/gawrapper";
import Footer from "../../../components/footer";

import mdToHtmlTop from '../../../lib/mdToHtmlTop'

import fs from 'fs'
import path from 'path'

import Seo from "../../../components/seo";
import Nav from "../../../components/nav";

function ArticleTemplate({meta, content, excerpt}) {
  const router = useRouter()
  const { slug } = router.query

  return (
    <GaWrapper>
    <Seo 
      title={meta.title}
      description={meta.description}
      currentPath={`top/${slug}`}
          />

      <Nav/>

      <div className="xl:container mx-auto my-4 px-5">
        <div className="-mx-5 flex flex-wrap">
          <div className="sm:text-xs text-sm px-5">
            <Link href="/">
              <a className="text-gray-700 hover:text-gray-500">
                Головна
              </a>
            </Link>
            <span className="text-gray-400"> / </span>
            <Link href="/top">
              <a className="text-gray-700 hover:text-gray-500 capitalize">
                Статті
              </a>
            </Link>
            <span className="text-gray-400"> / </span>
            <span className="text-gray-700 capitalize">{meta.title}</span>
          </div>
        </div>
      </div>

      <div className="xl:container mx-auto px-5">
        <div className="-mx-5 flex flex-wrap">
          <div className="px-5 w-full sm:w-8/12 ">
            <h1 className="text-3xl sm:text-4xl relative z-10 font-bold my-6">
              {meta.heading}
            </h1>
            <div className="relative overflow-hidden my-6" style={{
              paddingTop: '50%'
            }}>
              <img src={meta.image} className="inset-0 w-full absolute object-contain object-center" width="608" height="342"/>
            </div>

            <div className="border-t-2 border-b border-gray-300 flex flex-row flex-wrap justify-start items-center">
              <div>
                <img src="/logo@3x.png" alt="Автоволодіння" className="w-8 h-8 mr-2"/>
              </div>
                <div className="text-sm">
                  Опубліковано: <strong>{meta.author}</strong> | <strong>{meta.date}</strong> 
                </div>
            </div>

            <div className="px-3 py-2 my-6 text-2xl lg:text-3xl font-light text-gray-800 rounded-md bg-gray-100">
              <p>
                { excerpt }
              </p>
            </div>

            <div
              dangerouslySetInnerHTML={{
                __html: JSON.parse(content)
              }}></div>
          </div>
        </div>
      </div>
    
      <Footer/>
    </GaWrapper>
  )
}

export async function getStaticPaths() {
  const articleDirectory = path.join(process.cwd(), 'top')
  const filenames = await fs.readdirSync(articleDirectory);

  const relativeDir = 'top'

  // Get the paths we want to pre-render based on posts
  const articlesPaths = filenames
    .filter(i => i.indexOf('.DS_Store') === -1)
    // .map(i => i.replace('.md',''))
    .map(x => {
      const pathToFile = `${relativeDir}/${x}`
      const fileContents = fs.readFileSync(pathToFile)
      const slug = matter(fileContents).data.slug
      return {
        params: { 
          slug,
          path: x
        }
      }
    })
  return { 
    paths: articlesPaths, 
    fallback: false 
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  
  const articleDirectory = path.join(process.cwd(), 'top')
  const filenames = await fs.readdirSync(articleDirectory);

  const relativeDir = 'top'

  // Get the paths we want to pre-render based on posts
  const articleData = filenames
    .filter(i => i.indexOf('.DS_Store') === -1)
    // .map(i => i.replace('.md',''))
    .map(x => {
      const pathToFile = `${relativeDir}/${x}`
      const fileContents = fs.readFileSync(pathToFile)
      const slug = matter(fileContents).data.slug
      
      if (slug === params.slug) {
        return (
          matter(fileContents, { 
            excerpt: true,
            excerpt_separator: '<!-- sep -->'
            })
        )
      }
      
    })[0];

  let rawContent = articleData.content;
  let excerpt = ''
  
  if (articleData.excerpt !== '') {
    rawContent = articleData.content.replace(articleData.excerpt, '')
    excerpt = articleData.excerpt
  }

  const content = await mdToHtmlTop(rawContent)

  const meta = articleData.data

  return {
    props: {
      meta,
      content: JSON.stringify(content),
      excerpt
    },
    revalidate: 1, // In seconds
  }
}

export default ArticleTemplate