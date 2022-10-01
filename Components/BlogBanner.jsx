import React from 'react'

function BlogBanner() {
  return (
    <div className=''>
        {/* <div className='h-full object-cover bg-gradient-to-tr from-gray-900  overflow-x-hidden'></div>
       <img 
              className='h-30 md:h-40 xl:h-[30vh]  w-full object-cover mix-blend-overlay' 
              loading='lazy'
              src='/img/blogBanner.jpg'
              alt="No Img" 
           /> */}

            <div className='h-[40vh] bg-blue-400 relative overflow-y-hidden'>
                <div className='flex place-items-center justify-center items-center'>
                    <img src="/img/pattern.png" alt="" className="hidden md:inline-block absolute inset-0 top-20 sm:top-0 w-full h-[80vh] opacity-30" />
                    <h1 className='text-3xl xl:text-5xl font-bold text-white translate-y-52'>Blog</h1>
                </div>    
            </div>
        
    </div>
  )
}

export default BlogBanner