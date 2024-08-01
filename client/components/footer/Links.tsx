import React, { useState } from 'react'
import { sections } from '../models'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

// Custom hook for media query
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = React.useState(window.matchMedia(query).matches)

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(query)
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches)
    mediaQueryList.addEventListener('change', listener)
    return () => mediaQueryList.removeEventListener('change', listener)
  }, [query])

  return matches
}

function Links() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const isSmallScreen = useMediaQuery('(max-width: 768px)') // Adjust as needed for your breakpoint

  const toggleSection = (section: string) => {
    if (isSmallScreen) {
      setOpenSection(openSection === section ? null : section)
    }
  }

  return (
    <footer className="footer bg-blue-100 p-6">
      <div className="container mx-auto mt-8">
        <div className="flex flex-wrap gap-8">
          <div className="flex w-full flex-wrap gap-4">
            {sections.map((section) => (
              <div
                key={section.title}
                className="mb-6 flex flex-1 flex-col items-start"
              >
                <div
                  className={`flex w-full cursor-pointer items-center justify-between ${isSmallScreen ? 'py-2' : ''}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleSection(section.title)}
                  onKeyDown={(e) =>
                    e.key === 'Enter' || e.key === ' '
                      ? toggleSection(section.title)
                      : null
                  }
                >
                  <h3
                    className={`text-base font-semibold ${isSmallScreen ? 'text-lg' : 'md:text-lg'}`}
                  >
                    {section.title}
                  </h3>
                  {isSmallScreen && (
                    <div className="md:hidden">
                      {openSection === section.title ? (
                        <ChevronUpIcon className="h-4 w-4" />
                      ) : (
                        <ChevronDownIcon className="h-4 w-4" />
                      )}
                    </div>
                  )}
                </div>
                <ul
                  className={`${
                    isSmallScreen
                      ? openSection === section.title
                        ? 'block'
                        : 'hidden'
                      : 'block'
                  } mt-2 w-full border border-gray-200 bg-white shadow-md`}
                >
                  {section.links.map((link) => (
                    <li key={link.href} className="px-2 py-1">
                      <a
                        href={link.href}
                        className="text-sm hover:underline md:text-base"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Links
