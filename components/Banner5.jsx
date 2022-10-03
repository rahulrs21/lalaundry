
import {motion} from 'framer-motion'


function Banner5() {
  return (
    <section className="body-font overflow-x-hidden relative xl:-top-4 2xl:-top-20">
      <div className="container max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

        <motion.div initial={{x:-100, opacity: 0}} whileInView={{x:0, opacity: 1}} transition={{duration:1}} className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src="/img/laundrybanner5.png" />
        </motion.div>



        <motion.div initial={{x:300, opacity: 0}} whileInView={{x:0, opacity: 1}} transition={{duration:2}}
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">We’re here for you
          </h1>
          <p className="mb-8 leading-relaxed">Any change in delivery times or date, or if something goes wrong, we are here. Our online customer support team will assist you day and night.</p>
          <div className="flex justify-center">
            <button className="inline-flex border-2 text-blue-700 border-blue-600 py-2 px-6 focus:outline-none hover:bg-blue-500 hover:text-white hover:border-white rounded text-lg">Call Us Now</button>
          </div>
        </motion.div>


      </div>

  
    </section>
  )
}

export default Banner5