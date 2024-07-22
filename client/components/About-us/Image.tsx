import React from 'react'
import about from '../public/about.jpg'

const BackgroundSection = () => {
  return (
    <section className="h-screen bg-cover bg-center">
      <img src={about} alt="about" className=" h-full w-full" />
    </section>
  )
}

export default BackgroundSection
