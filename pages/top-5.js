import Link from "next/link";

import Seo from "../components/seo";
import Nav from "../components/nav";

import GaWrapper from "../components/gawrapper";
import Footer from "../components/footer";

import CarEntity from '../components/top-5-enity'

function TopFive() {
  return (
    <GaWrapper>
      <Seo />
      <Nav />

      <div className="xl:container mx-auto">
        <section
          className="relative overflow-hidden"
          style={{ paddingTop: "40%" }}
        >
          <div className="absolute inset-0 z-0">
            <img
              className="object-cover object-center w-full"
              src="/image/section-image_1.jpg"
            />
            <div className="absolute inset-0 z-0"></div>
          </div>
          <div className="absolute inset-0">
            <div className="xl:container mx-auto my-4 px-4">
              <h1 className="text-3xl sm:text-5xl relative z-10 font-bold py-4 sm:py-10">
                <span
                  style={{ backgroundColor: "rgba(49, 130, 206, 0.65)" }}
                  className="text-white px-4 py-2"
                >
                  Топ 5 авто under 25000 USD
                </span>
              </h1>
            </div>
          </div>
        </section>
      </div>
      <div className="xl:container mx-auto my-4 px-4">
        <div className="sm:text-xs text-sm">
          <a className="text-gray-700 hover:text-gray-500" href="/">
            Головна
          </a>
          <span className="text-gray-400"> / </span>
          <a className="text-gray-700 hover:text-gray-500 capitalize" href="">
            Топ 5 обзоры
          </a>
          <span className="text-gray-400"> / </span>
          <span className="text-gray-700 capitalize">Топ 5 авто under 25000 USD</span>
        </div>
      </div>
      <div className="xl:container mx-auto my-4 px-4 sm:text-xs text-sm">
        Опубликовано: <strong>Avtovolodinnya</strong> | <strong>12/12/2020</strong> 
      </div>
      <main className="my-6 sm:my-10">
        <div className="xl:container mx-auto my-4 px-4 flex flex-wrap">
          <div className="sm:w-8/12">
          <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames. A cras semper auctor neque vitae tempus. Viverra ipsum nunc aliquet bibendum. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Risus ultricies tristique nulla aliquet enim tortor. Eros donec ac odio tempor orci dapibus ultrices. Egestas congue quisque egestas diam in.</p>
          <p className="my-4">Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Elit eget gravida cum sociis natoque penatibus et. Nibh mauris cursus mattis molestie a iaculis. Gravida arcu ac tortor dignissim convallis aenean et. A lacus vestibulum sed arcu non odio euismod lacinia at. Quisque non tellus orci ac auctor. Venenatis cras sed felis eget velit. Purus viverra accumsan in nisl. Non nisi est sit amet facilisis magna etiam tempor orci. .</p>
          {
            [1,2,3,4,5]
              .sort( (a,b) => b-a)
              .map((i, idx) => {
                return (
                  <CarEntity pos={i} />
                )
              })
          }

          </div>
          <div className="sm:w-4/12 my-4 pl-10">
            <p>
              <strong>Contact us</strong>
            </p>
          </div>

          
        </div>
      </main>

      <Footer />
    </GaWrapper>
  );
}

export default TopFive;
