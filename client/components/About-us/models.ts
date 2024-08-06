import gapson1 from '../public/swas160 gapson-NZ Passport-35x45 mm.jpg'
import gapson2 from '../public/pppp.jpg'
import rock from '../public/the rock.jpg'
import member3 from '../public/member3.jpg'
import member4 from '../public/member4.jpg'
import member5 from '../public/member5.jpg'
// models.ts or wherever your types are defined
export interface TeamMember {
  image: string
  name: string
  position: string
  description: string
  social: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
  }
}

export interface TeamData {
  boardMembers: TeamMember[]
  leadershipTeam: TeamMember[]
}
export const teamData: TeamData = {
  boardMembers: [
    {
      image: gapson1,
      name: 'Credu Gapson',
      position: 'Chairman',
      description:
        'John has over 20 years of experience in leadership and governance.',
      social: {
        facebook: undefined,
        twitter: undefined,
        instagram: undefined,
        linkedin: undefined,
      },
    },
    {
      image: gapson2,
      name: 'Jane Smith',
      position: 'Treasurer',
      description:
        'Jane is an expert in financial management with a background in nonprofit organizations.',
      social: {
        facebook: undefined,
        twitter: undefined,
        instagram: undefined,
        linkedin: undefined,
      },
    },
    {
      image: rock,
      name: 'Jane Smith',
      position: 'Treasurer',
      description:
        'Jane is an expert in financial management with a background in nonprofit organizations.',
      social: {
        facebook: undefined,
        twitter: undefined,
        instagram: undefined,
        linkedin: undefined,
      },
    },
  ],
  leadershipTeam: [
    {
      image: member3,
      name: 'Alice Johnson',
      position: 'Executive Director',
      description:
        'Alice leads the team with a vision for impactful change and strategic planning.',
      social: {
        facebook: undefined,
        twitter: undefined,
        instagram: undefined,
        linkedin: undefined,
      },
    },
    {
      image: member4,
      name: 'Bob Brown',
      position: 'Program Manager',
      description:
        'Bob manages various programs and ensures their successful execution.',
      social: {
        facebook: undefined,
        twitter: undefined,
        instagram: undefined,
        linkedin: undefined,
      },
    },
    {
      image: member5,
      name: 'Jane Smith',
      position: 'Treasurer',
      description:
        'Jane is an expert in financial management with a background in nonprofit organizations.',
      social: {
        facebook: undefined,
        twitter: undefined,
        instagram: undefined,
        linkedin: undefined,
      },
    },
  ],
}
