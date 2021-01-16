import Link from 'next/link'
import Layout from "../../components/layout";
import GaWrapper from "../../components/gawrapper";

import ModelHeader from "../../components/model/header";

import fs from "fs";
import path from "path";
import { useEffect, useState } from "react";
import Seo from "../../components/seo";

export default function Reviews({ articlesPaths }) {
  return (
    <GaWrapper>
      <Layout>
        <Seo title="REVIEWS" description="REVIEWS" />
        <div>
          {articlesPaths.map((i, idx) => {
            return <div key={idx} className="text-blue-600">
              <Link href={`/reviews/${i}/`}>
                {i}
              </Link>
              </div>;
          })}
        </div>
        <div>FLUID</div>
      </Layout>
    </GaWrapper>
  );
}

// This also gets called at build time
export async function getStaticProps() {
  const articleDirectory = path.join(process.cwd(), "reviews");
  const filenames = fs.readdirSync(articleDirectory);

  // Get the paths we want to pre-render based on posts
  const articlesPaths = filenames
    .filter((i) => i.indexOf(".DS_Store") === -1)
    .map((i) => i.replace(".md", ""))
    .map((x) => {
      return x;
    });

  console.log(articlesPaths);
  return {
    props: {
      articlesPaths,
    },
  };
}
