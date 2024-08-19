import React from 'react'
import meeting from '../public/meeting.jpg'
import flag from '../public/flags.jpg'

const News = () => {
  return (
    <section className="newsletter-section bg-blue-950 py-16">
      <div className="container mx-auto flex flex-col items-start md:flex-row md:space-x-8">
        {/* First Div: Title and Paragraph */}
        <div className="mb-8 flex-1 text-center md:mb-0 md:text-left">
          <h2 className="text-3xl font-semibold text-gray-100">In The News</h2>
          <p className="mt-4 text-lg text-gray-400">
            Stay updated with our latest news and articles.
          </p>
        </div>

        {/* Second Div: News Card 1 */}
        <div className="news-card mb-8 flex-1 overflow-hidden rounded-lg shadow-lg md:mb-0">
          <div className="relative">
            <img src={flag} alt="News" className="h-48 w-full object-cover" />
            <div className="absolute bottom-0 left-0 rounded-tr-lg bg-blue-600 px-4 py-1 text-white">
              Aug 19, 2024
            </div>
          </div>
          <div className="bg-white p-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Exciting News Article Title
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Published by XYZ News - Aug 19, 2024 - Hamilton, NZ
            </p>
            <p className="mt-4 text-gray-600">
              A brief description or excerpt of the news article goes here to
              entice readers to click and read more.
            </p>
            <a
              href="/news-page-url-1"
              className="mt-6 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Third Div: News Card 2 */}
        <div className="news-card flex-1 overflow-hidden rounded-lg shadow-lg">
          <div className="relative">
            <img
              src={meeting}
              alt="News"
              className="h-48 w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 rounded-tr-lg bg-blue-600 px-4 py-1 text-white">
              Aug 18, 2024
            </div>
          </div>
          <div className="bg-white p-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Another Interesting News Article
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Published by ABC News - Aug 18, 2024 - Auckland, NZ
            </p>
            <p className="mt-4 text-gray-600">
              A brief description or excerpt of the news article goes here to
              entice readers to click and read more.
            </p>
            <a
              href="/news-page-url-2"
              className="mt-6 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News
