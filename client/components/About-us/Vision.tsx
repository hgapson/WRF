import { LightBulbIcon, TagIcon } from '@heroicons/react/24/outline'

const VisionMissionValues = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Vision */}
          <div className="text-center">
            <LightBulbIcon className="mx-auto h-12 w-12 text-blue-500" />
            <h3 className="mt-4 text-xl font-semibold">Vision</h3>
            <p className="mt-2 text-gray-700">
              A brief description of your long-term goals and aspirations.
            </p>
          </div>

          {/* Mission */}
          <div className="text-center">
            <TagIcon className="mx-auto h-12 w-12 text-green-500" />
            <h3 className="mt-4 text-xl font-semibold">Mission</h3>
            <p className="mt-2 text-gray-700">
              A clear statement outlining your organizations purpose and
              objectives.
            </p>
          </div>

          {/* Values */}
        </div>
      </div>
    </section>
  )
}

export default VisionMissionValues
