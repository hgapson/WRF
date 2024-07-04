//import React from 'react'
import cover from '../public/cover.jpg'

const Background = () => {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <div className="h-120 absolute left-5 w-40 bg-cover bg-center">
        <img src={cover} alt="Logo" className="h-15"></img>
        <div className="animated-text text-center text-2xl font-bold decoration-fuchsia-50 sm:text-3xl md:text-4xl lg:text-5xl">
          Welcome to Waikato Refugee Forum
        </div>
      </div>
    </div>
  )
}

export default Background
