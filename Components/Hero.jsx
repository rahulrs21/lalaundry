



// import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { motion } from "framer-motion"
import AcUnitIcon from '@mui/icons-material/AcUnit';

import { useTypewriter, Cursor } from 'react-simple-typewriter'



function Hero() {

  // const [text, setText] = useTypewriter({
  //   words: ["Dry Cleaning", "Wet cleaning","Laundry", "Iron Clothes", "Wash & Fold"], 
  //   loop: true,
  //   delaySpeed: 2000
  // });

  return (
    <section className='w-full relative h-[calc(70vh-80px)] md:h-[60vh] bg-blue-400'>
      <Carousel
        autoPlay 
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >

        <div className='h-full object-cover bg-gradient-to-tr from-gray-900 relative z-50'> 
          <img 
              className='hero-slider-img' 
              loading='lazy' 
              src='/img/main-banner.jpg'
              alt="No Img" 
           />
           <motion.div initial={{x:-100, opacity: 0}} whileInView={{x:0, opacity: 1}} transition={{duration:1}} className='absolute top-[30%] left-[5%] md:left-[10%]'>
            <div className='max-w-sm md:max-w-md  xl:max-w-3xl text-left text-white'>    
              <h1 className='text-2xl text-white font-bold md:text-4xl lg:text-5xl  text-left tracking-wide pb-4'>Solution for Your Dirty Clothes</h1>
              <p>Our experts, with the help of our state of art machinery ensure that your clothes come back looking clean, tidier and fresh every time </p>
              <button className='p-5 bg-blue-800 my-5 hover:bg-blue-900'>Explore Now</button>
            </div>
           </motion.div>

        </div>


        <div className='h-full object-cover bg-gradient-to-tr from-gray-900  relative z-40'>
            <img 
                className='hero-slider-img' 
                loading='lazy' 
                src='/img/SliderBanner2.jpg'
                alt="No Img" 
            />

           <motion.div initial={{x:-100, opacity: 0}} whileInView={{x:0, opacity: 1}} transition={{duration:1}} className='absolute top-[30%] left-[5%] md:left-[10%]'>
            <div className='max-w-sm md:max-w-md  xl:max-w-3xl text-left text-white'>    
              <h1 className='text-2xl text-white font-bold md:text-4xl lg:text-5xl  text-left tracking-wide pb-4'>Solution for Your Dirty Clothes</h1>
              <p>Our experts, with the help of our state of art machinery ensure that your clothes come back looking clean, tidier and fresh every time </p>
              <button className='p-5 bg-blue-800 my-5 hover:bg-blue-900'>Explore Now</button>
            </div>
           </motion.div>

        </div>




        <div className='h-full object-cover '>
          <div className='hero-slider-img bg-blue-300 '>
            <AcUnitIcon className='text-white relative h-20 w-20 top-72 left-32 animate-spin transition-transform duration-200 z-10'/>
          </div>
            <div className='flex justify-around '>
              <motion.div initial={{x:-100, opacity: 0}} whileInView={{x:0, opacity: 1}} transition={{duration:1}} className='absolute top-[30%] left-[5%] md:left-[10%]'>
                <div className='max-w-[18rem] md:max-w-md xl:max-w-4xl text-left text-white relative z-10'>    
                  <h1 className='text-2xl text-white font-bold md:text-4xl lg:text-5xl  text-left tracking-wide pb-4'>Plan your day with ease</h1>
                  <p className=''>We take care about cleanliness of your cloth. </p>
                  <button className='p-5 bg-blue-800 my-5 hover:bg-blue-900'>Explore Now</button>
                </div>
              </motion.div>

              <motion.img initial={{y:100, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration:1.7}} src="/img/girl.png" className='hidden h-[320px] top-44 object-contain absolute md:top-52 left-40 lg:h-[500px] 2xl:h-[600px] 2xl:top-40 2xl:left-96 lg:left-64  z-1 hero-img-3' alt="" />
            </div>
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