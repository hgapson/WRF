// import React from 'react'
import meeting from '../public/meeting.jpg'
import flag from '../public/flags.jpg'

export const newsArticles = [
  {
    id: 1,
    title: 'Exciting News Article Title',
    image: flag,
    date: 'Aug 10, 2024',
    publisher: 'XYZ News',
    location: 'Hamilton, NZ',
    excerpt:
      'A brief description or excerpt of the news article goes here to entice readers to click and read more.',
    description: 'Full description of Article 1.',
  },
  {
    id: 2,
    title: 'Another Interesting News Article',
    image: meeting,
    date: 'Aug 15, 2024',
    publisher: 'ABC News',
    location: 'Auckland, NZ',
    excerpt:
      'A brief description or excerpt of the news article goes here to entice readers to click and read more.',
    description: 'Full description of Article 1.',
  },
  {
    id: 3,
    title: 'Exciting News Article Title',
    image: flag,
    date: 'Aug 17, 2024',
    publisher: 'XYZ News',
    location: 'Hamilton, NZ',
    excerpt:
      'A brief description or excerpt of the news article goes here to entice readers to click and read more.',
    description: 'Full description of Article 1.',
  },
  {
    id: 4,
    title: 'Another Interesting News Article',
    image: meeting,
    date: 'Aug 18, 2024',
    publisher: 'ABC News',
    location: 'Auckland, NZ',
    excerpt:
      'A brief description or excerpt of the news article goes here to entice readers to click and read more.',
    description: 'Full description of Article 1.',
  },
  {
    id: 5,
    title: 'Exciting News Article Title',
    image: flag,
    date: 'Aug 19, 2024',
    publisher: 'XYZ News',
    location: 'Hamilton, NZ',
    excerpt:
      'A brief description or excerpt of the news article goes here to entice readers to click and read more.',
    description: 'Full description of Article 1.',
  },
  {
    id: 6,
    title: 'Another Interesting News Article',
    image: meeting,
    date: 'Aug 2, 2024',
    publisher: 'ABC News',
    location: 'Auckland, NZ',
    excerpt:
      'A brief description or excerpt of the news article goes here to entice readers to click and read more.',
    description: 'Full description of Article 1.',
  },
  {
    id: 7,
    title: 'Exciting News Article Title',
    image: flag,
    date: 'Aug 11, 2024',
    publisher: 'XYZ News',
    location: 'Hamilton, NZ',
    excerpt:
      'A brief description or excerpt of the news article goes here to entice readers to click and read more.',
    description: 'Full description of Article 1.',
  },
  // Add more articles as needed
]
export type Article = {
  id: number
  title: string
  image: string
  date: string
  publisher: string
  location: string
  excerpt: string
  description: string
}
