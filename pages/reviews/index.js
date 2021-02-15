import Link from "next/link";
import GaWrapper from "../../components/gawrapper";
import Footer from "../../components/footer";
import Nav from "../../components/nav";

import matter from "gray-matter";

import fs from "fs";
import path from "path";
import { useEffect, useState } from "react";
import Seo from "../../components/seo";

function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

export default function Reviews({ articlesPaths }) {
  return (
    <GaWrapper>
      <Seo
        title="Обзори, статті та Тести нових авто"
        description="Обзори, статті та Тести авто на сайті Автоволодіння"
        currentPath="reviews"
      />
      <Nav />
      <div className="xl:container mx-auto px-5">
        <div className="-mx-5 flex flex-wrap justify-center">
          <div className="w-auto px-5">
            <h1 className="text-center text-3xl sm:text-4xl relative z-10 font-bold my-6 leading-tight">
              Обзори, статті та Тести нових авто
            </h1>
          </div>
        </div>
        <div className="-mx-5 flex flex-wrap justify-center">
          {articlesPaths.sort((a, b) => b.date - a.date).map((i, idx) => {
            return (
              <div key={idx} className="px-5 w-full lg:w-4/12 mb-6">
                <Link href={`/reviews/${i.data.slug}/`} >
                  <a className="text-blue-600 hover:opacity-75 transition-opacity duration-200 relative block w-full shadow-lg">
                    <div
                      className="relative w-full overflow-hidden"
                      style={{
                        paddingTop: "50%",
                      }}
                    >
                      <img
                        alt={i.data.title}
                        className="w-full absolute inset-x-0 bottom-0 object-cover object-center "
                        src={`${i.data.image}?nf_resize=fit&w=320&h=160`}
                      ></img>
                    </div>
                    <div className="absolute top-0 w-auto z-10 left-1 bg-white text-gray-700 text-xs px-1">
                      {i.data.date}
                    </div>
                    <div 
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8 )'
                      }}
                      className="absolute bottom-0 z-10 inset-x-1 text-base lg:text-lg m-1 px-1">
                      {i.data.heading}
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </GaWrapper>
  );
}

// This also gets called at build time
export async function getStaticProps() {
  const articleDirectory = path.join(process.cwd(), "reviews");
  const filenames = fs.readdirSync(articleDirectory);
  const relativeDir = "reviews";
  // Get the paths we want to pre-render based on posts
  const articlesPaths = filenames
    .filter((i) => i.indexOf(".DS_Store") === -1)
    .map((x) => {
      const pathToFile = `${relativeDir}/${x}`;
      const fileContents = fs.readFileSync(pathToFile);
      const rawData = matter(fileContents).data;
      const data = {...rawData, dateProc: String(new Date(rawData.date))};
      return {
        data
      };
    })
    
    articlesPaths.sort((a,b) => Date.parse(b.data.dateProc) - Date.parse(a.data.dateProc))
  return {
    props: {
      articlesPaths,
    },
  };
}
