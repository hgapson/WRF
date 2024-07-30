import {
  AcademicCapIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'

function Paragraphs() {
  return (
    <div className="mx-auto max-w-6xl bg-gray-100 p-2">
      <h2 className="mb-8 text-center text-2xl font-semibold md:text-3xl">
        Lasting Solutions For Refugees
      </h2>
      <div className="-mx-3 flex flex-wrap">
        {/* Economic Empowerment */}
        <div className="mb-6 w-full px-3 md:w-1/2">
          <div className="flex items-start space-x-4 rounded-lg bg-white p-4 shadow-md">
            <BriefcaseIcon className="h-16 w-16 text-blue-500" />
            <div>
              <h3 className="text-lg font-semibold md:text-xl">
                Economic Empowerment
              </h3>
              <p className="text-sm md:text-base">
                We provide job training and placement services to help refugees
                gain sustainable employment and achieve economic independence.
              </p>
            </div>
          </div>
        </div>
        {/* Education Support */}
        <div className="mb-6 w-full px-3 md:w-1/2">
          <div className="flex items-start space-x-4 rounded-lg bg-white p-4 shadow-md">
            <AcademicCapIcon className="h-20 w-20 text-blue-500" />
            <div>
              <h3 className="text-lg font-semibold md:text-xl">
                Education Support
              </h3>
              <p className="text-sm md:text-base">
                Our programs offer educational resources and support to help
                refugees and their families access quality education and improve
                their lives.
              </p>
            </div>
          </div>
        </div>
        {/* Community Integration */}
        <div className="mb-6 w-full px-3 md:w-1/2">
          <div className="flex items-start space-x-4 rounded-lg bg-white p-4 shadow-md">
            <GlobeAltIcon className="h-20 w-20 text-blue-500" />
            <div>
              <h3 className="text-lg font-semibold md:text-xl">
                Community Integration
              </h3>
              <p className="text-sm md:text-base">
                We facilitate community integration by organizing social events
                and cultural exchange programs to build strong, supportive
                communities.
              </p>
            </div>
          </div>
        </div>
        {/* Healthcare Services */}
        <div className="mb-6 w-full px-3 md:w-1/2">
          <div className="flex items-start space-x-4 rounded-lg bg-white p-4 shadow-md">
            <HeartIcon className="h-20 w-20 text-blue-500" />
            <div>
              <h3 className="text-lg font-semibold md:text-xl">
                Healthcare Services
              </h3>
              <p className="text-sm md:text-base">
                Our healthcare programs ensure that refugees have access to
                essential medical services and mental health support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Paragraphs
