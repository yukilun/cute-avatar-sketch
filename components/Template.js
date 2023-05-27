import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Template({children, isHomePage}) {
  return (
    <main className="min-h-screen w-full flex flex-col justify-between">
      <Navbar isHomePage={isHomePage}/>
        {children}    
      <Footer />
    </main>
  )
}
