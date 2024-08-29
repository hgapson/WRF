import food from '../public/food-sharing.jpg'
import celebration from '../public/celebration.jpg'
import celebration1 from '../public/celebration1.jpg'
import celebration2 from '../public/celebration 2.jpg'
import celebration3 from '../public/celebration 3.jpg'
import celebration4 from '../public/celebration 4.jpg'
import refugeeDay from '../public/43869-RefugeeDay_Trending.png'
import refugeeDay1 from '../public/worldRefugee.jpg'
import refugeeDay2 from '../public/worldRefugee1.jpg'
import refugeeDay3 from '../public/worldRefugee2.jpg'
import refugeeDay4 from '../public/worlRefugee3.jpg'
import refugeeDay5 from '../public/worldRefugee4.jpg'
import refugeeDay6 from '../public/worldRefugee5.jpg'
import culture from '../public/culture.jpg'

export const eventsData = [
  {
    title: 'WORLD REFUGEE DAY',
    date: '2023-05-10',
    description: 'This is a description of a past event.',
    image: refugeeDay,
    link: 'https://example.com',
    galleryImages: [
      refugeeDay1,
      refugeeDay2,
      refugeeDay3,
      refugeeDay4,
      refugeeDay5,
      refugeeDay6,
    ],
    galleryCaptions: ['Caption 1', 'Caption 2'],
  },
  {
    title: 'FOOD SHARING',
    date: '2024-09-15',
    description: 'This is a description of an upcoming event.',
    image: food,
    link: 'https://example.com',
    galleryImages: ['image1.jpg', 'image2.jpg'],
    galleryCaptions: ['Caption 1', 'Caption 2'],
  },
  {
    title: 'CULTURE SHOW UP',
    date: '2024-10-20',
    description: 'This is a description of an upcoming event.',
    image: culture,
    link: 'https://example.com',
    galleryImages: [],
    galleryCaptions: ['Caption 1', 'Caption 2'],
  },
  {
    title: 'ACHIEVEMENT CELEBRATION',
    date: '2024-02-10',
    description: 'This is a description of an upcoming event.',
    image: celebration,
    link: 'https://example.com',
    galleryImages: [
      celebration,
      celebration1,
      celebration2,
      celebration3,
      celebration4,
    ],
    galleryCaptions: ['Caption 1', 'Caption 2'],
  },
]
