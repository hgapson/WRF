import React from 'react'
import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import Home from './components/HomePage/Home'
import Contact from './components/ContactPage/Contact'

export default createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </>,
)
