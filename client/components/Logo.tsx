//import React from 'react'
import logo from '../public/logo.jpg'
import '../styles/main.scss'

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img src={logo} alt="Logo" className="h-14 " />
    </div>
  )
}

export default Logo
