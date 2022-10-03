
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { motion } from "framer-motion"



function Hero() {
  return (
    <section className='w-full h-[calc(60vh-80px)] md:h-[60vh] bg-red-400'>
      <Carousel
        autoPlay 
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >

        <div className='h-full object-cover bg-gradient-to-tr from-gray-700 overflow-x-hidden'>

          
          <img 
              className='hero-slider-img' 
              loading='lazy' 
              src="/img/banner1.jpg" 
              alt="No Img" 
           />
           <motion.div initial={{x:-100, opacity: 0}} whileInView={{x:0, opacity: 1}} transition={{duration:1}} className='absolute top-[30%] left-[10%]'>
            <div className='max-w-sm xl:max-w-lg text-left text-white'>    
              <h1 className='text-2xl text-white font-bold md:text-4xl lg:text-5xl  text-left tracking-wide pb-4'>Solution for Your Dirty Clothes</h1>
              <p>Our experts, with the help of our state of art machinery ensure that your clothes come back looking clean, tidier and fresh every time </p>
              <button className='p-5 bg-blue-800 my-5 hover:bg-blue-900'>Explore Now</button>
            </div>
           </motion.div>

           <div className='bg-gradient-to-t from-blue-300 to-blue-200 h-10 w-full'></div>
        </div>

        <div className='h-full object-cover '>
          <img 
              className='hero-slider-img' 
              loading='lazy' 
              src="/img/banner2.jpg" 
              alt="No Img" 
           />

          <motion.div initial={{x:-100, opacity: 0}} whileInView={{x:0, opacity: 1}} transition={{duration:1}} className='absolute top-[30%] left-[10%]'>
            <div className='max-w-sm xl:max-w-lg text-left text-white'>    
              <h1 className='text-2xl text-white font-bold md:text-4xl lg:text-5xl  text-left tracking-wide pb-4'>Solution for Your Dirty Clothes</h1>
              <p>Our experts, with the help of our state of art machinery ensure that your clothes come back looking clean, tidier and fresh every time </p>
              <button className='p-5 bg-blue-800 my-5 hover:bg-blue-900'>Explore Now</button>
            </div>
           </motion.div>


        </div>

        <div className='h-full object-cover '>
          <img 
              className='hero-slider-img' 
              loading='lazy' 
              src="/img/banner3.jpg" 
              alt="No Img" 
           />

          <motion.div initial={{x:-100, opacity: 0}} whileInView={{x:0, opacity: 1}} transition={{duration:1}} className='absolute top-[30%] left-[10%]'>
            <div className='max-w-sm xl:max-w-lg text-left text-white'>    
              <h1 className='text-2xl text-white font-bold md:text-4xl lg:text-5xl  text-left tracking-wide pb-4'>Solution for Your Dirty Clothes</h1>
              <p>Our experts, with the help of our state of art machinery ensure that your clothes come back looking clean, tidier and fresh every time </p>
              <button className='p-5 bg-blue-800 my-5 hover:bg-blue-900'>Explore Now</button>
            </div>
           </motion.div>
        </div>





      </Carousel>

      
        {/* Shape Divider */}
        {/* <div class="custom-shape-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>

          
        </div> */}






        

    </section>

    


  )
}

export default Hero