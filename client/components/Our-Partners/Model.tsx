import one from '../public/Credu Gapson Graduation Certificate.pdf'
import two from '../public/Credu Gapson NZQA Graduation Certificate..pdf'
import three from '../public/cover letter IT.docx - Google Docs.pdf'
import hms from '../public/hms.png'
import ministry from '../public/ministry of ed.jpg'
import aa from '../public/AA.png'

export const reports = [
  {
    year: '2023',
    file: three,
  },
  {
    year: '2022',
    file: two,
  },
  {
    year: '2021',
    file: one,
  },
]

export const partners = [
  {
    name: 'HMS Trust',
    description: 'Description for Partner 1',
    logo: hms,
    website: 'https://www.hmstrust.org.nz/',
  },
  {
    name: 'AA',
    description: 'Description for Partner 2',
    logo: aa,
    website: 'https://www.aa.co.nz/',
  },
  {
    name: 'Migration',
    description: 'Description for Partner 3',
    logo: ministry,
    website: 'https://www.education.govt.nz/',
  },
]
