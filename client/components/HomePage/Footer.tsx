//import React, { useState } from 'react'
import SubscriptionForm from '../footer/Subscribe'
import SocialMediaLinks from '../footer/Social'
import '../main.scss'
import Links from '../footer/Links'

function Footer() {
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <SubscriptionForm />
        <div className="mt-4 flex justify-center">
          <SocialMediaLinks />
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <Links />
      </div>
    </section>
  )
}
export default Footer
