//import React from 'react'
import SubscriptionForm from './Subscribe' // Adjust the path as per your project structure
import SocialMediaLinks from './Social' // Assuming you have this component as well

function Footer() {
  return (
    <footer className="bg-gray-100 p-6">
      <div className="container mx-auto flex flex-col items-center justify-center md:flex-row">
        {/* First Section with SubscriptionForm */}
        <SubscriptionForm />

        {/* Second Section with SocialMediaLinks */}
        <div className="mt-4 flex justify-center">
          <SocialMediaLinks />
        </div>
      </div>
    </footer>
  )
}

export default Footer
