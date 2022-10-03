import React from 'react'
import {motion} from 'framer-motion'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import MasksIcon from '@mui/icons-material/Masks';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

function Banner3() {
  return (
    <div className='pb-8'>
            <motion.div 
            initial={{opacity: 0}} whileInView={{opacity:1}} transition={{duration: 1.2}}
            className='relative h-screen flex flex-col -top-24 md:top-0 text-center md:text-left md:flex-row max-w-7xl 2xl:max-w-full px-10 justify-evenly mx-auto items-center overflow-x-hidden '
            >
                
            <div className='space-y-4 md:space-y-6 2xl:space-y-16 mt-20 px-0 md:px-24'>
                <h4 className='text-xl pb-5 lg:my-0 md:text-md lg:text-3xl relative top-7 md:top-0 font-bold'>Laundry is <span className='underline decoration-[#3547a3]/50'>Easier</span> with Dependable Cleaners</h4>
                <p className='text-sm md:text-md lg:text-lg'>Dependable Cleaners makes laundry & dry cleaning more convienient than ever.</p>
                <div>
                    <ul className='flex flex-col space-y-2 relative  sm:left-8  justify-center items-start md:text-left md:space-y-5'>
                        <li className='flex space-x-3 items-center'>
                            <LocalLaundryServiceIcon className="w-10 h-10 p-2 rounded-full  bg-blue-400 text-white" />
                            <h4 className='text-xs text-left md:text-lg lg:text-xl font-bold text-gray-600'>Free Pickup and Delivery | Dry Cleaning & Laundry</h4>
                        </li>
                        <li className='flex space-x-3 items-center'>
                            <MasksIcon className="w-10 h-10 p-2 rounded-full  bg-blue-400 text-white" />
                            <h4 className='text-xs text-left md:text-lg lg:text-xl font-bold text-gray-600'>Free Mask Cleaning with Dry Cleaning Order</h4>
                        </li>
                        <li className='flex space-x-3 items-center'>
                            <WatchLaterIcon className="w-10 h-10 p-2 rounded-full  bg-blue-400 text-white" />
                            <h4 className='text-xs text-left md:text-lg lg:text-xl font-bold text-gray-600'>Free Mask Cleaning with Dry Cleaning Order</h4>
                        </li>
                    </ul>
                </div>
                <button className='py-4 px-6 rounded-md bg-blue-600 hover:bg-blue-800 hover:scale-105 duration-200 text-white'><a href='#demo' ><PlayCircleFilledIcon /> Get Started</a></button>

            </div>

            
            <div>

                <motion.img  
                    src='https://prod-cdn.laundryheap.com/assets/landing/benefits/2_2x-525b9e1898bb7bbbdf329aead2f52721a74611f01cd6181b32365c9f69a12237.jpg'
                    initial={{x: -200, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}

                    transition={{duration: 1.2}}
                    className="-mb-5 md:mb-0 py-2 flex-shrink-0 w-72 object-contain rounded-lg md:w-80 lg:mt-16 lg:w-[400px] xl:w-[600px] 2xl:w-[850px] scrollbar-hide"

                />
            </div>



            </motion.div>
        {/* <hr className='max-w-7xl mx-auto text-blue-900'/> */}
    </div>
  )
}

export default Banner3

