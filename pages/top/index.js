import Link from "next/link";
import GaWrapper from "../../components/gawrapper";
import Footer from "../../components/footer";
import Nav from "../../components/nav";

import matter from "gray-matter";

import fs from "fs";
import path from "path";
import { useEffect, useState } from "react";
import Seo from "../../components/seo";

export default function Reviews({ articlesPaths }) {
  return (
    <GaWrapper>
      <Seo
        title="Рейтенги авто українського ринку"
        description="Рейтенги авто українського ринку на сайті Автоволодіння"
        currentPath="top"
      />
      <Nav />
      <div className="xl:container mx-auto px-5">
        <div className="-mx-5 flex flex-wrap justify-center">
          <div className="w-auto px-5">
            <h1 className="text-center text-3xl sm:text-4xl relative z-10 font-bold my-6">
              Рейтенги авто українського ринку
            </h1>
          </div>
        </div>
        <div className="-mx-5 flex flex-wrap justify-center">
          {articlesPaths.map((i, idx) => {
            return (
              <div key={idx} className="px-5 w-full lg:w-4/12">
                <Link href={`/top/${i.data.slug}/`} >
                  <a className="text-blue-600 hover:opacity-75 transition-opacity duration-200 relative block w-full">
                    <div
                      className="relative w-full overflow-hidden"
                      style={{
                        paddingTop: "50%",
                      }}
                    >
                      <img
                        alt={i.data.title}
                        className="w-full absolute inset-0 object-contain object-center"
                        src={`${i.data.image}?nf_resize=fit&w=320&h=160`}
                      ></img>
                    </div>
                    <div className="absolute top-1 w-auto z-10 left-1 bg-white text-gray-700 text-xs px-1">
                      {i.data.date}
                    </div>
                    <div 
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8 )'
                      }}
                      className="absolute bottom-1 z-10 inset-x-1 text-base lg:text-lg from-transparent to-white m-1 px-1">
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
  const articleDirectory = path.join(process.cwd(), "top");
  const filenames = fs.readdirSync(articleDirectory);
  const relativeDir = "top";
  // Get the paths we want to pre-render based on posts
  const articlesPaths = filenames
    .filter((i) => i.indexOf(".DS_Store") === -1)
    // .map((i) => i.replace(".md", ""))
    .map((x) => {
      const pathToFile = `${relativeDir}/${x}`;
      const fileContents = fs.readFileSync(pathToFile);
      const data = matter(fileContents).data;
      return {
        data,
      };
    });
  return {
    props: {
      articlesPaths,
    },
  };
}
