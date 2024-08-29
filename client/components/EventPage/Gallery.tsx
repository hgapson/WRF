import React from 'react'

interface GalleryProps {
  event: any
}

const Gallery: React.FC<GalleryProps> = ({ event }) => {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Gallery</h2>
      <p className="mb-4 text-gray-700">
        These are photos for {event.title} day celemony
      </p>{' '}
      {/* Description Above Gallery */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {event.galleryImages?.map((image: string, index: number) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="mb-2 h-48 w-full rounded-lg object-cover shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
