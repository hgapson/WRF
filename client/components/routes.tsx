// src/components/routes.tsx

import { createBrowserRouter, RouteObject } from 'react-router-dom'
import Layout from './Layout' // Adjust the path as needed
import Home from './HomePage/Home' // Adjust the path as needed
import Contact from './ContactPage/Contact' // Adjust the path as needed
import EventsPage from './EventPage/AllEvents' // Adjust the path as needed
import About from './About-us/About'
import OurPrograms from './Our-programs/OurPrograms'
import Partners from './Our-Partners/Partners'
import GetInvolved from './GetInvolved/GetInvolved'
import Vacancies from './GetInvolved/vacancies'
import JobDetail from './GetInvolved/JobDetail'
import WhyWeHelp from './Why/WhyWeHelp'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'contact', element: <Contact /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'about-us', element: <About /> },
      { path: 'our-programs', element: <OurPrograms /> },
      { path: 'our-partners', element: <Partners /> },
      { path: 'get-involved', element: <GetInvolved /> },
      { path: 'vacancies', element: <Vacancies /> },
      { path: 'vacancies/:id', element: <JobDetail /> },
      { path: 'why-we-help', element: <WhyWeHelp /> },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
