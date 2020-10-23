import Head from 'next/head'

// import '../styles/index.css'

import Hero from '../components/home/hero'

function Home() {
  return (
    <>
      <Head>
        <title>{`Вартість нових авто та повний перелік витрат при володінні`}</title>
        <meta name="description" content={`Вартість нових авто та повний перелік витрати на володіння будь-яким авто`} />
        <meta name="theme-color" content="#008f68" />
      </Head>
      <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-36 xl:py-20 flex flex-wrap">
        <Hero/>
      </main>
    </>
  )
}

export default Home;