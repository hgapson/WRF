export interface Job {
  id: string
  title: string
  location: string
  description: string
  datePosted: string
}

// Example job data
export const jobList: Job[] = [
  {
    id: '1',
    title: 'Software Engineer',
    location: 'New York',
    description: 'Develop and maintain software applications.',
    datePosted: '2024-08-2',
  },
  {
    id: '2',
    title: 'Product Manager',
    location: 'San Francisco',
    description: 'Manage product development lifecycle.',
    datePosted: '2024-08-20',
  },
  {
    id: '3',
    title: 'Designer',
    location: 'Los Angeles',
    description: 'Design user interfaces and experiences.',
    datePosted: '2024-08-15',
  },
  {
    id: '4',
    title: 'ccountant coordinator',
    location: 'Hamilton',
    description: 'Develop and maintain software applications.',
    datePosted: '2024-08-19',
  },
  {
    id: '5',
    title: 'community coordinator',
    location: 'Tauranga',
    description: 'Manage product development lifecycle.',
    datePosted: '2024-08-21',
  },
  {
    id: '6',
    title: 'Human Resource',
    location: 'Taupo',
    description: 'Design user interfaces and experiences.',
    datePosted: '2024-08-22',
  },
  // Add more job objects as needed
]
