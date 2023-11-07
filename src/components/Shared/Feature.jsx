const Feature = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold text-center sm:text-5xl dark:text-gray-50">
              Find Your Dream Job
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
              Explore thousands of job listings from top companies and apply
              with just a few clicks.
            </p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl dark:text-gray-50">
                Easy and Quick Application
              </h3>
              <p className="mt-3 text-lg dark:text-gray-400">
                Apply to multiple jobs with one profile. No more filling out
                lengthy applications for every job.
              </p>
              <div className="mt-12 space-y-12">
                {/* Feature 1 */}
                <div className="flex">
                  {/* Icon Placeholder */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      {/* Replace with relevant icon */}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium dark:text-gray-50">
                      One-Click Apply
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Use your saved profile to apply for jobs with a single
                      click.
                    </p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="flex">
                  {/* Icon Placeholder */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      {/* Replace with relevant icon */}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium dark:text-gray-50">
                      Job Alerts
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Get notified as soon as jobs matching your profile are
                      posted.
                    </p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="flex">
                  {/* Icon Placeholder */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      {/* Replace with relevant icon */}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium dark:text-gray-50">
                      Resume Builder
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Create a professional resume with our easy-to-use builder.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Job search"
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold sm:text-3xl dark:text-gray-50">
                  Create a Professional Profile
                </h3>
                <p className="mt-3 text-lg dark:text-gray-400">
                  Build a profile that stands out and makes employers notice
                  you. Showcase your skills and experience.
                </p>
                <div className="mt-12 space-y-12">
                  {/* Feature 1 */}
                  <div className="flex">
                    {/* Icon Placeholder */}
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        {/* Replace with relevant icon */}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium dark:text-gray-50">
                        Skill Assessments
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Take assessments to show off your skills to potential
                        employers.
                      </p>
                    </div>
                  </div>
                  {/* Feature 2 */}
                  <div className="flex">
                    {/* Icon Placeholder */}
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        {/* Replace with relevant icon */}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium dark:text-gray-50">
                        Personalized Job Matches
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        We will match you with jobs that align with your
                        experience and preferences.
                      </p>
                    </div>
                  </div>
                  {/* Feature 3 */}
                  <div className="flex">
                    {/* Icon Placeholder */}
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        {/* Replace with relevant icon */}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium dark:text-gray-50">
                        Career Advice
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Get tips and advice to further your career and ace your
                        interviews.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <img
                  src="https://source.unsplash.com/random/361x481?career"
                  alt="Career growth"
                  className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
