import { useRouter } from 'next/router'
import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from "react-markdown";

import markdownToHtml from '../../../lib/markdownToHtml'

// import { getPostBySlug, getAllPosts } from '../../lib/items-api'

import fs from 'fs'
import path from 'path'

import remark from 'remark'
import html from 'remark-html'


import Seo from "../../../components/seo";

// async function markdownToHtml(markdown) {
//   const result = await remark().use(html).process(markdown)
//   return result.toString()
// }

function ArticleTemplate({meta, content, articleData}) {
  const router = useRouter()
  const { slug } = router.query
  // console.log(meta, content)
  const CustomParagraph = ({ children }) => <p className="text-red-500">{children}</p>

  return (
    <>
    <Seo 
      title={meta.title}
      description={meta.description}
      currentPath={slug}
          />
      Here we'll load
     
      <div
        dangerouslySetInnerHTML={{
          __html: JSON.parse(content)
        }}></div>
      {typeof meta}
    
  
    </>
  )
}

export async function getStaticPaths() {
  const articleDirectory = path.join(process.cwd(), '_reviews')
  const filenames = await fs.readdirSync(articleDirectory);

  // Get the paths we want to pre-render based on posts
  const articlesPaths = filenames
    .filter(i => i.indexOf('.DS_Store') === -1)
    .map(i => i.replace('.md',''))
    .map(x => {
      return {
        params: { 
          slug: `${x}`
        }
      }
    })

    console.log(articlesPaths)

  return { 
    paths: articlesPaths, 
    fallback: false 
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  console.log(params.slug);
  const pathToFile = '_reviews/' + params.slug + '.md'
  const fileContents = fs.readFileSync(pathToFile)
  const articleData = matter(fileContents)
  const content = await markdownToHtml(articleData.content)

  const meta = articleData.data

  return {
    props: {
      meta,
      content: JSON.stringify(content)
    },
    revalidate: 1, // In seconds
  }
}

export default ArticleTemplate