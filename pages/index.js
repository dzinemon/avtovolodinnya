import Seo from '../components/seo'

import Hero from '../components/home/hero'
import Breadcrumbs from '../components/breadcrumbs'
import Footer from '../components/footer'

function Home() {
  return (
    <>
      <Seo />
      <Breadcrumbs />
      <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-36 xl:py-20 flex flex-wrap">
        <Hero/>
      </main>
      <Footer />
    </>
  )
}

export default Home;