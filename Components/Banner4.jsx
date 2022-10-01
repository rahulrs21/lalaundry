import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import {motion} from 'framer-motion'


function Banner4() {
  return (
    <div className='h-[75vh] max-w-full mx-42 mt-16  mx-auto overflow-x-hidden scrollbar-hide'>
        <div>
            <motion.img initial={{y: -200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration: 1}}  src="/img/clothes-shop.jpg" className='rounded-lg h-64 w-96 md:w-[70rem] md:h-[36rem] object-cover mx-auto' alt="" />

        </div>


        <motion.div initial={{y: 100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration: 1}} className='max-w-xl py-12 relative top-10 md:-top-72  md:left-64 bg-gray-100  rounded-lg mx-auto shadow-lg scrollbar-hide'>
            <div className='flex flex-col justify-center items-start px-10 space-y-6'>
                <h2 className='text-3xl font-bold'> Easy Dry premier Laundry Experience!</h2>
                <p className='text-sm md:text-lg'>We are always looking for ways to make laundry and dry cleaning more convienient. We are available 24/7 by providing you a great experience</p>
                <div>
                    <ul className='flex space-x-4 items-center'>
                        <li><SendIcon className='text-blue-500' /></li>
                        <li><p className='text-sm md:text-normal tracking-wider'> Free Pick Delivery</p></li>
                    </ul>
                    <ul className='flex space-x-4 items-center'>
                        <li><SendIcon className='text-blue-500' /></li>
                        <li><p className='text-sm md:text-normal tracking-wider'> 24/7 Service</p></li>
                    </ul>
                    <ul className='flex space-x-4 items-center'>
                        <li><SendIcon className='text-blue-500' /></li>
                        <li><p className='text-sm md:text-normal tracking-wider'> One Day Dry Cleaning</p></li>
                    </ul>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Banner4