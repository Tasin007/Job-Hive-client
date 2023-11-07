

const AllJobsHero = () => {
  return (
    <div>
      <div className="p-6 py-12 bg-indigo-600 text-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tight font-bold">
              Find Your
              <br className="sm:hidden" />
              Dream Job
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>
                Join now and get exclusive access to the latest job openings!
              </span>
            </div>
            <a
              href="/alljobs"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-900 text-gray-50 border-gray-600"
            >
              Browse Jobs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJobsHero;
