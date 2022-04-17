import React from 'react'
import Featured from './Featured'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import Signup from './Signup'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Signup />
      <Footer />
    </>
  )
}

export default Home