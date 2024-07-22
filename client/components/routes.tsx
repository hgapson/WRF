// src/components/routes.tsx

import { createBrowserRouter, RouteObject } from 'react-router-dom'
import Layout from './Layout' // Adjust the path as needed
import Home from './HomePage/Home' // Adjust the path as needed
import Contact from './ContactPage/Contact' // Adjust the path as needed
import EventsPage from './EventPage/AllEvents' // Adjust the path as needed
import About from './About-us/About'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'contact', element: <Contact /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'about-us', element: <About /> },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
