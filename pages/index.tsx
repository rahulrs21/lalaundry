import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero' 
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Banner2 from '../components/Banner2'
import Banner3 from '../components/Banner3'
import Banner4 from '../components/Banner4'
import Banner5 from '../components/Banner5'
import Pricing from '../components/Pricing'
// import Testimonials from '../components/Testimonials'
import ReviewsCard from '../components/ReviewsCard'
import Footer from '../components/Footer'
import StarIcon from '@mui/icons-material/Star';


const Home: NextPage = () => {
  return (
    <div className="scrollbar scrollbar-track-white scrollbar-thumb-blue-400">
      <Head>
        <title>La Laundry - Home</title>
        <link rel="icon" href="/img/laundry-logo-white-small.png" />
      </Head>


      {/* {(typeof window !== 'undefined') &&
        <Navbar/>
      } */}
      <Navbar navLogo='/img/laundry-logo-white-small.png' navColor='white'  />
      <main className="">
        <section className='snap-start'>
          <Hero />
        </section>

        <section>
          <Card />
        </section>

        <section id="" className='snap-center'>
          <Banner2 />
          
        </section>

        <section id="" className='snap-center'>
          <Banner3 />
        </section>

        <section id="" className='snap-center'>
          <Banner4 />
          
        </section>

        <section id="" className='snap-center'>
          <Banner5 />
        </section>

        <section>
          <Pricing />
        </section>

          
        <section className='py-32'>
          {/* <Testimonials /> */}
          <div className='text-center space-y-4'>
            <h2 className='text-3xl  font-bold'>Our happy customers</h2>
            <div className='text-yellow-500'>
              <StarIcon />  
              <StarIcon />  
              <StarIcon />  
              <StarIcon />  
              <StarIcon />  
              </div>
          </div>

          <div className='w-7xl flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thumb-blue-400 scrollbar-track-white'>
              <ReviewsCard /> 
              <ReviewsCard /> 
              <ReviewsCard /> 
              <ReviewsCard /> 
              <ReviewsCard /> 
          </div>
        </section>

        <Footer />
        

      </main>

      
    </div>
  )
}

export default Home
