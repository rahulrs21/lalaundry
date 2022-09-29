import Link from "next/link";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Close from "@mui/icons-material/Close";
import {useRouter} from 'next/router'

function Header() {

  const router = useRouter();

  console.log(router)

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [active, setActive] = useState();

  const navLink = ({active}) => {
    return {
      fontWeight: active ? setActive(fontWeight ='bold') : setActive(fontWeight ='normal') ,
    }
  }

  return (
    <>
    <div className=" flex sticky top-0 justify-between z-50 items-center h-[72px] px-6 bg-gradient-to-br from-blue-500 shadow-lg">
    
        <div>
          <Link href="/">
            <img
              className="cursor-pointer"
              src="/img/laundry-logo.png" 
              width={70}
              height={60}
              alt="LOGO"
            />
          </Link>
        </div>
        <div
          className=" flex justify-between items-center z-90 space-x-5 px-3 text-xl "
        >
         
            <ul className="hidden sm:flex justify-between items-center space-x-5">
              <li>
                <Link style={navLink} onClick={active} className="p-4" href="/">
                  <span className={router.pathname == '/' ? "cursor-pointer" : "text-white hover:text-blue-600 cursor-pointer"}>Home</span> 
                </Link>
              </li>
              <li>
                <Link className="p-4" href="/about">
                <span className={router.pathname == '/about' ? "cursor-pointer" : "text-white hover:text-gray-900  cursor-pointer"} >About</span> 
                </Link>
              </li>
              <li>
                <Link className="p-4" href="/post">
                  <span className={router.pathname == '/post' ? " cursor-pointer" : "text-white hover:text-gray-900 cursor-pointer"} >Blogs</span> 
                </Link>
              </li>
            </ul>
         
          
        </div>

        <div className="hidden sm:flex space-x-2 px-3 p-3 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer">
          <Link href="/">Call Now</Link>
        </div>


        {/* mbl */}
        

        <div onClick={handleNav} className='block sm:hidden z-30'>
          {nav ? (
            <CloseIcon className="z-90" />
          ) : (
            <MenuIcon  />
          )}
        </div>

      </div>

      
          <div
            className={
              nav
                ? 'sm:hidden absolute top-0 left-0 right-0 z-20 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
                : 'sm:hidden absolute top-0 left-[-100%] right-0 z-20 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
            }
          >
            <ul>
              <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                <Link href='/'>Home</Link>
              </li>
              <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                <Link href='/about'>About</Link>
              </li>
              <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                <Link href='/post'>Blogs</Link>
              </li>
              <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                <Link href='/contact'>Contact</Link>
              </li>
              <li onClick={handleNav} className='p-4 my-5 text-4xl  bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer'>
                <Link href="/">Call Now</Link>
              </li>
            </ul>

        </div>



      </>
    
  );
}

export default Header;



