import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
// import Navbar from '../components/Navbar'
import { useCallback } from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Link from 'next/link';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';



const Navbar = ({navLogo,headerBGColor, headerTextColor}) => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    // Change Nav color
    const [color, setColor] = useState(false)


    const setFun = () => {
        if(window.scrollY >= 90) {
            // console.log("y axis is ",window.scrollY)
            setColor(true)
        } else {
            setColor(false)
        }
    }

    //here starts

    const [scrollY, setScrollY] = useState(0);

    const onScroll = useCallback(event => {
        const { pageYOffset, scrollY } = window;
        // console.log("yOffset", pageYOffset, "scrollY", scrollY);
        setScrollY(window.pageYOffset);
    }, []);
  
    useEffect(() => {
        // window.onbeforeunload = function() {
        //     return true;
        // };

        //add eventlistener to window
        window.addEventListener("scroll", onScroll, { passive: true });
        // remove event on unmount to prevent a memory leak with the cleanup
       

        () => window.removeEventListener("scroll", onScroll, { passive: true });
      }, [])
    


    const closeMenu = () => setClick(false)

    return (
        <>
        <div className={scrollY ? `header bg-[#0a0463e6]  text-white` : `header bg-${headerBGColor} text-${headerTextColor}`} >
            <nav className='navbar'>
                <Link href='/' className='logo'>
                    <div className='flex items-center h-[20px] w-[6rem]'>
                        {scrollY ? (
                            <img src='/img/Lalundry-logo-white.png'  className='object-cover cursor-pointer' alt="" />
                        ) : (
                            <img src={navLogo}  className='object-cover cursor-pointer' alt="" />
                        )}
                        
                        {/* <img src={navLogo}  className='object-cover cursor-pointer' alt="" /> */}
                         {/* <h1 className='text-white font-bold cursor-pointer'>La Laundry</h1>  */}
                    </div>
                    
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active flex items-center" : "nav-menu flex items-center"}>
                    <li className='nav-item'>
                        <Link href='/'><a onClick={closeMenu}>Home</a></Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/about'><a onClick={closeMenu}>About</a></Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/post'><a onClick={closeMenu}>Blogs</a></Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/'><a onClick={closeMenu}>Contact</a></Link>
                    </li>
                    <li className='nav-item'>
                        <button className='p-3 rounded-md bg-blue-600 hover:bg-blue-800 hover:scale-105 duration-200 text-white'><a href='#demo' onClick={closeMenu}><LocalPhoneIcon /> Call Now</a></button>
                    </li>
                </ul>
            </nav>

            <div className={scrollY ? 'inline-block ' : 'hidden'}>
                <div className='fixed z-500 bottom-3 right-3 ursor-pointer'>
                    <div className='h-10 w-10 bg-blue-300 rounded-full text-white flex justify-center items-center'>
                        {/* <button onClick="#"><ArrowUpwardIcon onClick="#" /></button> */}
                        <a href="#"><ArrowUpwardIcon /></a>
                    </div>             
                </div>
            </div>


        </div>
    

        

        </>
    )
}

export default Navbar



{/* <img src={navLogo}  className='object-cover cursor-pointer' alt="" /> */}


