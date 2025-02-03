import React from 'react'
import { Link } from 'react-router-dom'
import cover from '../public/about-cover.jpg'
import hard from '../public/hard.jpg'
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

        {/* Expanded Challenges Faced by Refugees */}
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-gray-100">
            Challenges Faced by Refugees
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Challenge 1: Lack of Collective Representation */}
            <div className="rounded-lg bg-blue-900 p-6 text-white shadow-lg">
              <img
                src={legal}
                alt="Program 1"
                className="h-34 mb-4 w-full rounded-lg object-cover"
              />
              <h3 className="mb-4 text-2xl font-semibold">
                Lack of Collective Representation
              </h3>
              <p className="text-lg">
                Former refugee communities often lack a unified platform to
                voice their concerns and address settlement issues collectively.
              </p>
            </div>

            {/* Challenge 2: Limited Participation in Resettlement Discussions */}
            <div className="rounded-lg bg-blue-900 p-6 text-white shadow-lg">
              <img
                src={classes}
                alt="Program 1"
                className="h-34 mb-4 w-full rounded-lg object-cover"
              />
              <h3 className="mb-4 text-2xl font-semibold">
                Limited Participation in Resettlement Discussions
              </h3>
              <p className="text-lg ">
                Refugee communities are often excluded from local and national
                discussions about resettlement policies and programs.
              </p>
            </div>

            {/* Challenge 3: Isolation from Key Stakeholders */}
            <div className="rounded-lg bg-blue-900 p-6 text-white shadow-lg">
              <img
                src={sport}
                alt="Program 4"
                className="h-34 mb-4 w-full rounded-lg object-cover"
              />
              <h3 className="mb-4 text-2xl font-semibold">
                Isolation from Key Stakeholders
              </h3>
              <p className="text-lg">
                Refugee communities may feel isolated and disconnected from key
                stakeholders, limiting their access to resources and support.
              </p>
            </div>

            {/* Challenge 4: Fragmented Collaboration */}
            <div className="rounded-lg bg-blue-900 p-6 text-white shadow-lg">
              <img
                src={classes}
                alt="Program 4"
                className="h-34 mb-4 w-full rounded-lg object-cover"
              />
              <h3 className="mb-4 text-2xl font-semibold">
                Fragmented Collaboration
              </h3>
              <p className="text-lg">
                There is often a lack of coordinated efforts among stakeholders
                to address refugee resettlement issues effectively.
              </p>
            </div>

            {/* Challenge 5: Lack of Empowerment */}
            <div className="rounded-lg bg-blue-900 p-6 text-white shadow-lg">
              <img
                src={how1}
                alt="Program 1"
                className="h-34 mb-4 w-full rounded-lg object-cover"
              />
              <h3 className="mb-4 text-2xl font-semibold">
                Lack of Empowerment
              </h3>
              <p className="text-lg">
                Many refugees struggle with feelings of disempowerment, which
                can hinder their ability to integrate and thrive in their new
                communities.
              </p>
            </div>

            {/* Challenge 6: Cultural and Treaty Awareness */}
            <div className="rounded-lg bg-blue-900 p-6 text-white shadow-lg">
              <img
                src={sport}
                alt="Program 4"
                className="h-34 mb-4 w-full rounded-lg object-cover"
              />
              <h3 className="mb-4 text-2xl font-semibold">
                Cultural and Treaty Awareness
              </h3>
              <p className="text-lg">
                Refugees may face challenges understanding and integrating into
                New Zealand’s cultural and legal frameworks, including the
                principles of the Treaty of Waitangi.
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
              <Link to="/volunteer">
                <button className="rounded bg-white px-4 py-2 text-blue-900 transition-colors duration-300 hover:bg-gray-200">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="rounded-lg bg-blue-900 p-6 text-center text-white shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold">Donate</h3>
              <p className="mb-4">
                Your donation can help us provide essential services to former
                refugees.
              </p>
              <Link to="/donate">
                <button className="rounded bg-white px-4 py-2 text-blue-900 transition-colors duration-300 hover:bg-gray-200">
                  Donate Now
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
