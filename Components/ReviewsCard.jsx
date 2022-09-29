import { Opacity } from '@mui/icons-material'
import React from 'react'
import { motion } from "framer-motion"


function ReviewsCard() {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[300px] md:w-[500px] xl:w-[700px] snap-center bg-gray-100 p-10 cursor-pointer overflow-hidden shadow-md'>
        <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-blue-500"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
        </svg>

        <div className='px-0 text-center md:px-10'>
            <p className='font-normal text-sm md:text-md pt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quisquam, reprehenderit aspernatur magni dolor vitae repellat consequuntur, maxime, et exercitationem porro incidunt architecto repudiandae quidem quaerat ipsum ducimus omnis saepe?</p>
        </div>

        <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-8 mb-6"></span>

        <motion.img 
            initial={{y:100, opacity:0}}
            transition={{duration: 1.2}}
            whileInView={{opacity:1, y:0}}
            // viewport={{once: true}}
            src="/img/avatar.png" className='w-20 h-20 md:rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center' alt="" 
        />

        <div className='px-0 text-center md:px-10'>
            <h2 className='text-2xl font-semibold'>John Doe</h2>
            <h4 className='text-md md:text-xl text-gray-500 font-normal '>Senior Product Manager</h4>
        </div>


        
        

    </article>
  )
}

export default ReviewsCard