import React, { useState } from 'react'
import { sections } from '../models'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <footer className="footer bg-blue-100 p-6">
      <div className="container mx-auto mt-8 grid grid-cols-1 gap-8 md:grid-cols-5">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-lg font-semibold md:text-xl">About Us</h2>
          <p className="text-sm md:text-base">
            We are dedicated to helping refugees integrate into their new
            communities and achieve economic independence.
          </p>
        </div>
        {sections.map((section) => (
          <div key={section.title} className="col-span-1 md:col-span-1">
            <div
              className="flex items-center justify-between md:justify-start"
              role="button"
              tabIndex={0}
              onClick={() => toggleSection(section.title)}
              onKeyDown={(e) =>
                e.key === 'Enter' || e.key === ' '
                  ? toggleSection(section.title)
                  : null
              }
            >
              <h3 className="cursor-pointer text-base font-semibold md:cursor-default md:text-lg">
                {section.title}
              </h3>
              <div className="md:hidden">
                {openSection === section.title ? (
                  <ChevronUpIcon className="h-4 w-4" />
                ) : (
                  <ChevronDownIcon className="h-4 w-4" />
                )}
              </div>
            </div>
            <ul
              className={`${
                openSection === section.title ? 'block' : 'hidden'
              } md:block`}
            >
              {section.links.map((link) => (
                <li key={link.href}>
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
    </footer>
  )
}

export default Footer
