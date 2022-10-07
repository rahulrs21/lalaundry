import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import ReactPlayer from "react-player";
import Footer from "./Footer";
import AccordionAbout from "./AccordionAbout"

function HeroAbout() {
  const [showPlayer, setShowPlayer] = useState(false);

  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <Navbar
        navLogo="/img/laundry-logo.png"   
        // navLogo="/img/Lalundry-logo-white.png"   
        headerBGColor="transparent"
        headerTextColor="white"
      />

      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div>
              <div className="relative px-4 pt-12 sm:px-6 lg:px-8"></div>

              {/* <!--
          Mobile menu, show/hide based on menu open state.

          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        --> */}
            </div>

            <main className="mx-auto mt-12 max-w-7xl px-4 sm:mt-14 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  {/* <span className="block xl:inline">Data to enrich your</span> */}
                  <span className="block text-blue-600 xl:inline pt-5 ">
                    About Us
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 font-medium sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  LaLaundry delivers the quickest, easiest to use, and most
                  reliable professional laundry and dry cleaning service that
                  completely adjusts to your needs.
                </p>
                <p className="mt-3 text-base text-gray-500 font-light sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  We collect, clean, and deliver your laundry to your doorstep.
                  When and where you need us, we will be there. 98.7% of all
                  standard laundry and dry cleaning is delivered the next day.
                </p>

                <span className="inline-block h-1 w-24  rounded bg-blue-500 mt-8 mb-6"></span>


                {/* <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                      onClick={() => setShowPlayer(true)}
                    >
                      Get started
                    </button>
                  </div>

                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-100 px-8 py-3 text-base font-medium text-blue-700 hover:bg-blue-200 md:py-4 md:px-10 md:text-lg"
                    >
                      Live demo
                    </a>
                  </div>
                </div> */}

              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute z-0 lg:inset-y-0 lg:right-0 lg:w-1/2">
          <a>
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full hover:bg-blue-300/50"
              src="/img/aboutBanner.jpg"
              alt=""
            />
          </a>
        </div>
      </div>

      {/* ABout 2 */}
      <div className="container flex mx-auto px-auto py-12 max-w-7xl md:py-24 md:flex-row md:justify-between flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex flex-col items-center ">
          <img
            className="object-cover object-center rounded cursor-pointer hover:scale-105 transition ease-in duration-150 hover:bg-black/70"
            alt="hero"
            src="/img/aboutBanner2.jpg"
            onClick={() => setShowPlayer(true)}
          />
        </div>

        <div className="lg:flex-grow md:w-1/2 lg:pl-20 md:pl-24 flex flex-col my-2 px-8 md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Who we are?
            <br className="hidden lg:inline-block" />
            {/* Why choose the Mesothelioma Center? */}
          </h1>
          <p className="mt-3 text-base text-gray-500 font-light sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            perspiciatis repellendus eaque explicabo nobis culpa dolores, quo
            sunt eos harum nihil tempora laudantium temporibus sit voluptatum
            dolorum. Provident ipsa debitis voluptatibus magnam maxime fugiat,
            unde nesciunt quas consequatur dolore velit.
          </p>

          <div>
            <button
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
              onClick={() => setShowPlayer(true)}
            >
              Watch Video
            </button>
          </div>
        </div>
      </div>




      {/* About - 3 */}
      <div className="max-w-7xl mx-auto my-20 px-5">

            <h3 className="text-2xl font-bold px-3 underline">FAQ : </h3>
        
            <AccordionAbout />

      </div>

      {/* Bg Overlay */}
      {showPlayer && (
        <div className="fixed inset-0 bg-black opacity-50 h-full w-full z-50" onClick={() => setShowPlayer(false)} />
      )}

      <div
        className={`fixed top-24 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-100 ${
          showPlayer ? "opacity-100 z-50" : "opacity-0 "} transform translate-y-1/2 sm:translate-y-0`}
      >
        <div className="flex items-center justify-between bg-blue-800 text-white p-3.5 ">
          <span className="font-semibold">About Us</span>
          <div
            className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]"
            onClick={() => setShowPlayer(false)}
          >
            <CloseIcon className="h-5" />
          </div>
        </div>

        <div className={showPlayer == false ? `-z-10` : `relative pt-[56.25%] z-10`}>
          {hasWindow && (
            <ReactPlayer
              url={`http://www.youtube.com/watch?v=Vyor8kv9YiI`}
              // url={`http://www.youtube.com/watch?v=dCGAJHwJfgw`}
              width="100%"
              height="100%"
              style={{ position: "absolute", top: "0", left: "0" }}
              controls={true}
              playing={showPlayer}
              
            />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HeroAbout;
