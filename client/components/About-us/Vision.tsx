import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLightbulb,
  faBullseye,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons'

const VisionMissionValues = () => {
  return (
    <section className="mx-auto max-w-6xl bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Vision */}
          <div className="text-center">
            <FontAwesomeIcon
              icon={faLightbulb}
              className="mx-auto h-12 w-12 text-blue-500"
            />
            <h3 className="mt-4 text-xl font-semibold">Vision</h3>
            <p className="mt-2 text-gray-700">
              A brief description of your long-term goals and aspirations.
            </p>
          </div>

          {/* Mission */}
          <div className="text-center">
            <FontAwesomeIcon
              icon={faBullseye}
              className="mx-auto h-12 w-12 text-green-500"
            />
            <h3 className="mt-4 text-xl font-semibold">Mission</h3>
            <p className="mt-2 text-gray-700">
              A clear statement outlining your organizations purpose and
              objectives.
            </p>
          </div>

          {/* Values */}
          <div className="text-center">
            <FontAwesomeIcon
              icon={faHandshake}
              className="mx-auto h-12 w-12 text-purple-500"
            />
            <h3 className="mt-4 text-xl font-semibold">Values</h3>
            <p className="mt-2 text-gray-700">
              A list of core values with brief descriptions for each.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMissionValues
