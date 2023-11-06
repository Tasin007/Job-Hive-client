import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div>
      <div className="max-w-[85rem] mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">
              {" "}
              <Typewriter
                className="text-[#4d96b3]"
                cursor
                cursorBlinking
                delaySpeed={1000}
                deleteSpeed={25}
                loop={0}
                typeSpeed={75}
                words={[
                  "Start your career journey with us!",
                  "Welcome to your next opportunity!",
                  "Discover endless job opportunities with us!",
                  "Embark on a new career adventure today!",
                  "Find your dream job with our help!",

                  "Unlock your potential with our job listings!",
                  "Navigate your way to the perfect job with us!",
                  "Take the first step towards your ideal career!",
                  "Expand your horizons with our job search platform!",
                ]}
              />
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
              &quot;Explore a world of professional possibilities!&quot;
            </p>
            <div>
              <label
                htmlFor="hs-trailing-button-add-on-with-icon"
                className="sr-only"
              >
                Label
              </label>
              <div className="flex rounded-md shadow-sm">
                <input
                  type="text"
                  id="hs-trailing-button-add-on-with-icon"
                  name="hs-trailing-button-add-on-with-icon"
                  className="py-3 px-4 block w-full border-gray-600 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
                <button
                  type="button"
                  className="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                >
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <a
                className="inline-flex justify-center items-center gap-x-3 text-center bg-[#4d96b3] border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-green-700-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                href="#"
              >
                Get started
                <svg
                  className="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              <a
                className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                href="#"
              >
                Contacts
              </a>
            </div>
            <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
              <div className="py-5">
                <div className="flex space-x-1">
                  <svg
                    className="h-4 w-4 text-gray-800 dark:text-gray-200"
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.4591 17.3037 17.7584 17.3037 18.0576 17.3037L27.0352 1.6307Z"
                      fill="#FDBC64"
                    />
                  </svg>
                  <span className="text-gray-800"> Support</span>
                </div>
                <p className="mt-2 text-gray-800 dark:text-gray-400">
                  Join a team that thrives on technological innovation!
                </p>
              </div>
              <div className="py-5">
                <div className="flex space-x-1">
                  <svg
                    className="h-4 w-4 text-gray-800 dark:text-gray-200"
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M41.75 46.6667V55.3333H2.91667V0.666664H11.5833V46.6667H41.75Z"
                      fill="#F77E39"
                    />
                    <path
                      d="M41.75 41.75H11.5833V11.5833H41.75V41.75Z"
                      fill="#FFAD61"
                    />
                    <path
                      d="M33.0833 20.25H20.25V33.0833H33.0833V20.25Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-gray-800">Discover a workplace</span>
                </div>
                <p className="mt-2 text-gray-800 dark:text-gray-400">
                  Empowered by the latest tech for seamless job hunting.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-[550px] h-[300px] md:h-[400px] lg:h-[500px] rounded-md shadow-lg"
              src="https://i.ibb.co/47zNWk4/20822846-NA-October-10.jpg"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
