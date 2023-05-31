import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import TopButton from './TopButton'

export default function Template({children, isHomePage=false}) {
  return (
    <main className="min-h-screen w-full flex flex-col justify-between gap-5">
      <Navbar isHomePage={isHomePage}/>
        {children}    
      <Footer />
      <TopButton />
    </main>
  )
}
