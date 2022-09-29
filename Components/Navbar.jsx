import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
// import Navbar from '../components/Navbar'
import { useCallback } from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Link from 'next/link';



const Navbar = ({navLogo, navColor}) => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  

    //here starts

    const [scrollY, setScrollY] = useState(0);

    const onScroll = useCallback(event => {
        const { pageYOffset, scrollY } = window;
        // console.log("yOffset", pageYOffset, "scrollY", scrollY);
        setScrollY(window.pageYOffset);
    }, []);
  
    useEffect(() => {
        //add eventlistener to window
        window.addEventListener("scroll", onScroll, { passive: true });
        // remove event on unmount to prevent a memory leak with the cleanup
       

        () => window.removeEventListener("scroll", onScroll, { passive: true });
      }, [])
    


    const closeMenu = () => setClick(false)

    return (
        <div className={scrollY ? 'header header-bg' : 'header'}>
            <nav className='navbar '>
                <Link href='/' className='logo'>
                    <div className='flex items-center h-[20px] w-[6rem]'>
                        <img src={navLogo}  className='object-cover cursor-pointer' alt="" />
                        {/* <h1 className='text-white font-bold cursor-pointer'>La Laundry</h1> */}
                    </div>
                    
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? `nav-menu active flex items-center` : `nav-menu flex items-center`}>
                    <li className={`nav-item text-${navColor}`}>
                        <Link href='/'><a onClick={closeMenu}>Home</a></Link>
                    </li>
                    <li className={`nav-item text-${navColor}`}>
                        <Link href='/'><a onClick={closeMenu}>About</a></Link>
                    </li>
                    <li className={`nav-item text-${navColor}`}>
                        <Link href='/post'><a onClick={closeMenu}>Blogs</a></Link>
                    </li>
                    <li className={`nav-item text-${navColor}`}>
                        <Link href='/'><a onClick={closeMenu}>Contact</a></Link>
                    </li>
                    
                    <li className='nav-item'>
                        <button className='p-3 rounded-md bg-blue-600 hover:bg-blue-800 hover:scale-105 duration-200 text-white'><a href='#' onClick={closeMenu}><LocalPhoneIcon /> Call Now</a></button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar