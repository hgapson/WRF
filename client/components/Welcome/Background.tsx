import React from 'react'

const Background = () => {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <div
        className="absolute left-0 h-96 w-72 bg-cover bg-center"
        style={{
          backgroundImage: "url('/cover.png')",
          borderRadius: '50% 50% 50% 50%',
        }}
      >
        {/* Empty div to apply the egg shape */}
      </div>
      <div className="animated-text text-center text-2xl font-bold decoration-fuchsia-50 sm:text-3xl md:text-4xl lg:text-5xl">
        Welcome to Waikato Refugee Forum
      </div>
    </div>
  )
}

export default Background
