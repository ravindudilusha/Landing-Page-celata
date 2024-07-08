import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Product from './Product'
import "../styles/Home.css"
import Footer from './Footer'

function Home() {
  return (
    <div>
    <Header/>
    <Hero/>
    <Product/>
    <Footer/>
    </div>
  )
}

export default Home