import React from 'react'

const Background = () => {
  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/cover.jpg')" }}
    >
      <div className="animated-text text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
        Welcome to Our Website
      </div>
    </div>
  )
}

export default Background
