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
        title="Обзори, статті та Тести нових авто"
        description="Обзори, статті та Тести авто на сайті Автоволодіння"
        currentPath="reviews"
      />
      <Nav />
      <div className="xl:container mx-auto px-5">
        <div className="-mx-5 flex flex-wrap justify-center">
          <div className="w-auto px-5">
            <h1 className="text-center text-3xl sm:text-4xl relative z-10 font-bold my-6">
              Обзори, статті та Тести нових авто
            </h1>
          </div>
        </div>
        <div className="-mx-5 flex flex-wrap justify-center">
          {/* {JSON.stringify(articlesPaths)} */}

          {articlesPaths.map((i, idx) => {
            return (
              <div key={idx} className="px-5 md:w-4/12 lg:w-4/12 ">
                <Link href={`/reviews/${i.data.slug}/`}>
                  <a className="text-blue-600 hover:opacity-75 transition-opacity duration-200 relative block">
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
                    <div className="absolute bottom-0 w-full z-10 inset-x-0 bg-white text-lg">
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
    // .map((i) => i.replace(".md", ""))
    .map((x) => {
      const pathToFile = `${relativeDir}/${x}`;
      const fileContents = fs.readFileSync(pathToFile);
      const data = matter(fileContents).data;
      return {
        data,
      };
    });

  console.log(articlesPaths);
  return {
    props: {
      articlesPaths,
    },
  };
}
