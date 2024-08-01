export interface Fruit {
  id: number
  name: string
  email: string
  phone: string
}

export interface FruitData {
  name: string
  email: string
  phone: string
}
// Define the Job type
export interface Job {
  id: string
  title: string
  location: string
  description: string
}

// Example job data
export const jobList: Job[] = [
  {
    id: '1',
    title: 'Software Engineer',
    location: 'New York',
    description: 'Develop and maintain software applications.',
  },
  {
    id: '2',
    title: 'Product Manager',
    location: 'San Francisco',
    description: 'Manage product development lifecycle.',
  },
  {
    id: '3',
    title: 'Designer',
    location: 'Los Angeles',
    description: 'Design user interfaces and experiences.',
  },
  {
    id: '4',
    title: 'ccountant coordinator',
    location: 'Hamilton',
    description: 'Develop and maintain software applications.',
  },
  {
    id: '5',
    title: 'community coordinator',
    location: 'Tauranga',
    description: 'Manage product development lifecycle.',
  },
  {
    id: '6',
    title: 'Human Resource',
    location: 'Taupo',
    description: 'Design user interfaces and experiences.',
  },
  // Add more job objects as needed
]
export const sections = [
  {
    title: 'Our Work',
    links: [
      { href: '/job-training', label: 'Job Training' },
      { href: '/placement-services', label: 'Placement Services' },
      { href: '/community-events', label: 'Community Events' },
      { href: '/cultural-exchange', label: 'Cultural Exchange' },
    ],
  },
  {
    title: 'Education',
    links: [
      { href: '/educational-resources', label: 'Educational Resources' },
      { href: '/support-programs', label: 'Support Programs' },
      { href: '/quality-education', label: 'Quality Education Access' },
    ],
  },
  {
    title: 'Healthcare',
    links: [
      { href: '/medical-services', label: 'Medical Services' },
      { href: '/mental-health-support', label: 'Mental Health Support' },
      { href: '/health-programs', label: 'Health Programs' },
    ],
  },
  {
    title: 'Advocacy',
    links: [
      { href: '/community-support', label: 'Community Support' },
      { href: '/policy-advocacy', label: 'Policy Advocacy' },
      { href: '/awareness-campaigns', label: 'Awareness Campaigns' },
    ],
  },
]
