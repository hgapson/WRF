import React from 'react'
import { Link } from 'react-router-dom'
import cover from '../public/about-cover.jpg'
import how1 from '../public/working-hard.jpg'
import classes from '../public/classes.jpg'
import legal from '../public/legal.jpg'
import sport from '../public/sport.jpg'

const WhyWeHelp = () => {
  return (
    <section className="mt-4 bg-blue-950 px-4 py-14 text-gray-800 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Transparent Cover Image with Title */}
        <div className="relative mb-12">
          <img
            src={cover}
            alt="Cover"
            className="h-64 w-full rounded-lg object-cover shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-4xl font-semibold text-white">
              Why We Do What We Do
            </h1>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-gray-100">
            Empowering Refugees in Waikato
          </h2>
          <p className="mx-auto max-w-2xl text-gray-100">
            At Waikato Refugee Forum, we are dedicated to supporting former
            refugees as they rebuild their lives and thrive in their new
            communities. Our programs are designed to address the unique
            challenges they face and provide them with the tools they need to
            succeed.
          </p>
        </div>

        {/* Impact Statistics */}
        {/* Impact Statistics */}
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-gray-100">
            Our Impact
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-blue-900 p-6 text-center text-white shadow-lg">
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="text-lg">Refugees Supported</p>
            </div>
            <div className="rounded-lg bg-blue-900 p-6 text-center text-white shadow-lg">
              <h3 className="text-4xl font-bold">200+</h3>
              <p className="text-lg">Jobs Secured</p>
            </div>
            <div className="rounded-lg bg-blue-900 p-6 text-center text-white shadow-lg">
              <h3 className="text-4xl font-bold">95%</h3>
              <p className="text-lg">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        {/* challenges faced by refugee */}
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-gray-100">
            Our Impact
          </h2>
          <div className="2lg:grid-cols-3 grid gap-8 md:grid-cols-2">
            {/* Program 1 */}
            <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-xl transition-all hover:shadow-2xl">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-blue-900">
                Community Forums
              </h3>
              <p className="text-gray-600">
                Former refugee communities often lack a unified platform to
                voice their concerns and address settlement issues collectively.
              </p>
            </div>

            {/* Program 2 */}
            <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-xl transition-all hover:shadow-2xl">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-blue-900">
                Policy Advocacy
              </h3>
              <p className="text-gray-600">
                Refugee communities are often excluded from local and national
                discussions about resettlement policies and programs.
              </p>
            </div>

            {/* Program 3 */}
            <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-xl transition-all hover:shadow-2xl">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-blue-900">
                Stakeholder Connections
              </h3>
              <p className="text-gray-600">
                Refugee communities may feel isolated and disconnected from key
                stakeholders, limiting their access to resources and support.
              </p>
            </div>

            {/* Program 4 */}
            <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-xl transition-all hover:shadow-2xl">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-blue-900">
                Community Empowerment
              </h3>
              <p className="text-gray-600">
                Many refugees struggle with feelings of disempowerment, which
                can hinder their ability to integrate and thrive in their new
                communities.
              </p>
            </div>

            {/* Program 5 */}
            <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-xl transition-all hover:shadow-2xl">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-blue-900">
                Cultural Integration
              </h3>
              <p className="text-gray-600">
                Refugees may face challenges understanding and integrating into
                New Zealand cultural and legal frameworks, including Treaty of
                Waitangi principles.
              </p>
            </div>

            {/* Program 6 */}
            <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-xl transition-all hover:shadow-2xl">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-blue-900">
                Coordinated Solutions
              </h3>
              <p className="text-gray-600">
                Addressing the lack of coordinated efforts among stakeholders to
                effectively resolve refugee resettlement issues.
              </p>
            </div>
          </div>
        </div>

        {/* How We Help */}
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-gray-100">
            How We Help
          </h2>
          <div className="2lg:grid-cols-3 grid gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center rounded-lg bg-blue-900 p-6 text-center text-white shadow-lg">
              <img
                src={how1}
                alt="Program 1"
                className="h-34 mb-4 w-full rounded-lg object-cover"
              />
              <p className="text-lg">
                We provide regular forum meetings for the represenatives of the
                former refugee communities to address collectively key
                settlement issues in the Waikato region.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-blue-900 p-6 text-center text-white shadow-lg">
              <img
                src={classes}
                alt="Program 2"
                className="h-34 mb-4 w-full rounded-lg object-cover"
              />
              <p className="text-lg">
                WRF provides a voice for the refugee communities by
                participating in the local and national resettlement discussions
                and forums.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-blue-900 p-6 text-center text-white shadow-lg">
              <img
                src={legal}
                alt="Program 3"
                className="h-34 mb-4 w-full rounded-lg object-cover"
              />
              <p className="text-lg">
                We share ideas, exchange information and network with key
                stakeholders on refugee resettlement issues.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-blue-900 p-6 text-center text-white shadow-lg">
              <img
                src={sport}
                alt="Program 4"
                className="h-34 mb-4 w-full rounded-lg object-cover"
              />
              <p className="text-lg">
                We collaborate with key stakeholders in programmes aimed at
                enhancing positive resettlement outcomes for the refugee
                communities.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-blue-900 p-6 text-center text-white shadow-lg">
              <img
                src={how1}
                alt="Program 5"
                className="h-34 mb-4 w-full rounded-lg object-cover"
              />
              <p className="text-lg">
                WRF supports the empowerement of refugee communities.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-blue-900 p-6 text-center text-white shadow-lg">
              <img
                src={sport}
                alt="Program 6"
                className="h-34 mb-4 w-full rounded-lg object-cover"
              />
              <p className="text-lg">
                We build the capacity to make ideas happen, aknowlwdge and
                uphold the principles of the Treaty of Waitangi.
              </p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Cards */}
        {/* Call-to-Action Cards */}
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-gray-100">
            Make a Difference
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-blue-900 p-6 text-center text-white shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold">Volunteer</h3>
              <p className="mb-4">
                Join our team and help make a difference in the lives of former
                refugees.
              </p>
              <Link to="/vacancies">
                <button className="rounded bg-white px-4 py-2 text-blue-900 transition-colors duration-300 hover:bg-gray-200">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="rounded-lg bg-blue-900 p-6 text-center text-white shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold">Partners</h3>
              <p className="mb-4">
                Your partnership can help us provide essential services to
                former refugees.
              </p>
              <Link to="/contact">
                <button className="rounded bg-white px-4 py-2 text-blue-900 transition-colors duration-300 hover:bg-gray-200">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Get Involved */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-gray-200">
            Get Involved
          </h2>
          <p className="text-gray-100">
            There are many ways you can support our cause. Whether through
            volunteering, or advocacy, your involvement makes a difference.
          </p>
          <Link to="/get-involved">
            <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600">
              Get Involved
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WhyWeHelp
