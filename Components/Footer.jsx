// import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "next/link";

function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-blue-200">
      <div className="container  px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-around md:text-left text-center -mb-10 -mx-4">

          <div className="w-1/2  lg:w-1/6 md:w-1/2  px-4">
            <nav className="list-none mb-10">
              <img src="/img/laundry-logo.png" alt="" />
            </nav>
          </div>

          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              USEFULL LINKS
            </h2>
            <nav className="list-none mb-10">
              <div className="text-gray-600 hover:text-white cursor-pointer">
                    <Link href='/'>Home</Link>
              </div>
              <div className="text-gray-600 hover:text-white cursor-pointer">
                    <Link href='/'>About</Link>
              </div>
              <div className="text-gray-600 hover:text-white cursor-pointer">
                <Link href='/post'>Blog</Link>
              </div>
              <div className="text-gray-600 hover:text-white cursor-pointer">
                <Link href='/'>Contact</Link>
              </div>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <div>
                <a className="text-gray-600 hover:text-white cursor-pointer">First Link</a>
              </div>
              <div>
                <a className="text-gray-600 hover:text-white cursor-pointer">Second Link</a>
              </div>
              <div>
                <a className="text-gray-600 hover:text-white cursor-pointer">Third Link</a>
              </div>
              <div>
                <a className="text-gray-600 hover:text-white cursor-pointer">Fourth Link</a>
              </div>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              ADDRESS
            </h2>
            <nav className="list-none mb-10">
              <div className="flex flex-col space-y-1 ">
                <a href="#" className="hover:text-white" target="_blank">Business Bay, Dubai</a>
                <a href="#" className="hover:text-white" target="_blank">United Arab Emirates</a>
                <a href="#" className="hover:text-white" target="_blank">info@lalaundry.ae</a>
              
              </div>
            </nav>
          </div>
          
        </div>
      </div>

      <div className="bg-[#121472]">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white text-sm text-center sm:text-left">
            © {new Date().getFullYear()} copyright —
            <a
              href="https://propixel.ae"
              className="text-white ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              ProPixel
            </a>
          </p>


              <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
                <a
                  href="#"
                  className="text-white ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                </a>

                <a
                  href="#"
                  className="text-white ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </a>

                <a
                  href="#"
                  className="text-white ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </a>
            
              </span>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
