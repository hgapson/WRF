import React from 'react'
import NavLinks from './Navbar' // Adjust the path as per your project structure
import Logo from './Logo' // Adjust the path as per your project structure

function Header() {
  return (
    <header className="bg-blue-950 p-4 shadow-md">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        {/* Logo */}
        <Logo />

        {/* Navigation Links */}
        <NavLinks />
      </div>
    </header>
  )
}

export default Header
