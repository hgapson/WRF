import {
  AcademicCapIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'

function Paragraphs() {
  return (
    <div className="bg-gray-100 p-0">
      <h2 className="mb-6 text-center text-3xl font-semibold">
        Lasting Solutions For Refugees
      </h2>
      <div className="-mx-3 flex flex-wrap">
        <div className="mb-6 w-full px-3 md:w-1/2">
          <div className="flex items-start space-x-4 rounded-lg bg-white p-4 shadow-md">
            <BriefcaseIcon className="h-30 w-40 text-blue-500" />
            <div>
              <h3 className="text-xl font-semibold">Economic Empowerment</h3>
              <p>
                We provide job training and placement services to help refugees
                gain sustainable employment and achieve economic independence.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-6 w-full px-3 md:w-1/2">
          <div className="flex items-start space-x-4 rounded-lg bg-white p-4 shadow-md">
            <AcademicCapIcon className="h-30 w-40 text-blue-500" />
            <div>
              <h3 className="text-xl font-semibold">Education Support</h3>
              <p>
                Our programs offer educational resources and support to help
                refugees and their families access quality education and improve
                their lives.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-6 w-full px-3 md:w-1/2">
          <div className="flex items-start space-x-4 rounded-lg bg-white p-4 shadow-md">
            <GlobeAltIcon className="h-30 w-40 text-blue-500" />
            <div>
              <h3 className="text-xl font-semibold">Community Integration</h3>
              <p>
                We facilitate community integration by organizing social events
                and cultural exchange programs to build strong, supportive
                communities.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-6 w-full px-3 md:w-1/2">
          <div className="flex items-start space-x-4 rounded-lg bg-white p-4 shadow-md">
            <HeartIcon className="h-30 w-40 text-blue-500" />
            <div>
              <h3 className="text-xl font-semibold">Healthcare Services</h3>
              <p>
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
