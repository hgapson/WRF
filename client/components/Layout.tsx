import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './HomePage/Header'
import Footer from './HomePage/Footer'
// Adjust the path as per your project structure

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
