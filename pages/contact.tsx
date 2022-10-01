import Head from 'next/head';
import Link from 'next/link';
import React from 'react'
import Navbar from '../components/Navbar'
import BlogBanner from "../Components/BlogBanner"
import ContactComp from "../Components/ContactComp"
import Footer from '../components/Footer';


function Contact() {
  return (
    <div>
         <Head>
          <title>La Laundry - Contact</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/img/laundry-logo-white-small.png" />

        </Head>

        <Navbar navLogo='/img/Lalundry-logo-white.png'  headerBGColor="transparent" headerTextColor="white" />



        <ContactComp />
        
        <Footer />

    </div>
  )
}

export default Contact

