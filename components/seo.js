import Head from 'next/head'
import config from '../src/config'

export default function SEO({ description, title }) {
  const siteTitle = config.title

  const LogoSD = ` {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Avtovolodinnya Logo",
      "url": "https://avtovolodinnya.com",
      "logo": "https://avtovolodinnya.com/logo@3x.png"
    }
    `

  return (
    <Head>
      <title>{title? title : siteTitle}</title>
      <meta name="description" content={description? description : config.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:image" content="https://avtovolodinnya.com/logo@3x.png" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <link href="https://unpkg.com/tailwindcss@1.9.6/dist/tailwind.css" rel="stylesheet"/>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: LogoSD }}/>
    </Head>
  )
}