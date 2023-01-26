import React from 'react'
import HomeComponents from '../../Components/HomeComponents'
import Footer from '../../Layouts/Footer'
import Navbar from '../../Layouts/Navbar'
import { Helmet, HelmetProvider } from 'react-helmet-async';

function HomePage() {
  return (
    <HelmetProvider>
     <Helmet>
        <title>
            Home Page
        </title>
     </Helmet>
    <Navbar/>
    <HomeComponents/>
    <Footer/>
    </HelmetProvider>
   
  )
}

export default HomePage