import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [userProfile, setUserProfile] = useState(null);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("User Logout successfully");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    setUserProfile({
      name: user?.displayName,
      photo: user?.photoURL,
    });
  }, [user?.displayName, user?.photoURL]);

  return (
    <div>
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 lg:px-8" aria-label="Global">
          <div className="flex justify-between items-center py-6 md:justify-start space-x-20 lg:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <NavLink to="/" aria-label="Home">
                <span className="sr-only">JobHive</span>
                <img className="h-8 w-auto sm:h-10" src="https://i.ibb.co/vJvNy0V/job-offer.png" alt="JobHive Logo" />
                <h1 className="font-mono text-xl inline-block ml-2">JobHive</h1>
              </NavLink>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                {/* Icon for menu button */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">

              <NavLink to="/" className="whitespace-nowrap text-xs lg:text-base font-medium text-gray-500 hover:text-gray-900">
                Home
              </NavLink>
              <NavLink to="/alljobs" className="ml-8 whitespace-nowrap text-xs lg:text-base font-medium text-gray-500 hover:text-gray-900">
                All Jobs
              </NavLink>
              <NavLink to="/blogs" className="ml-8 whitespace-nowrap text-xs lg:text-base font-medium text-gray-500 hover:text-gray-900">
                Blogs
              </NavLink>
              <NavLink to="/addjob" className="ml-8 whitespace-nowrap text-xs lg:text-base font-medium text-gray-500 hover:text-gray-900">
                Add A Job
              </NavLink>
              <NavLink to="/myjobs" className="ml-8 whitespace-nowrap text-xs lg:text-base font-medium text-gray-500 hover:text-gray-900">
                My Jobs
              </NavLink>
              <NavLink to="/appliedjob" className="ml-8 whitespace-nowrap text-xs lg:text-base font-medium text-gray-500 hover:text-gray-900">
                Applied Jobs
              </NavLink>
              {
                  user?.email ? (
                    <div>
                      <h1 
                      className="block px-3 py-2 rounded-md text-xs lg:text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
                      onClick={handleLogOut}>
                        LogOut
                      </h1>
                    </div>
                  ) : (
                    <NavLink to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                  Login
                </NavLink>
                  )
                }
                <div className="">
                {user?.email && (
                <h1 className="text-lg p-1 rounded-md ">
                  {" "}
                  {userProfile?.name}{" "}
                </h1>
              )}

              {user?.email && (
                <>
                  <div className="relative inline-block">
                    <img
                      className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white dark:ring-gray-800"
                      src={userProfile?.photo}
                      alt="Image Description"
                    />
                    <span className="absolute top-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
                  </div>
                </>
              )}
                </div>
                
            </div>
          </div>

          {/* Mobile menu, show/hide based on menu state. */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}>
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="https://i.ibb.co/vJvNy0V/job-offer.png" alt="JobHive Logo" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Icon for closing menu */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Mobile menu items */}
                {user?.email && (
                <h1 className="text-lg p-1 rounded-md">
                  {" "}
                  {userProfile?.name}{" "}
                </h1>
              )}

              {user?.email && (
                <>
                  <div className="relative inline-block">
                    <img
                      className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white dark:ring-gray-800"
                      src={userProfile?.photo}
                      alt="Image Description"
                    />
                    <span className="absolute top-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
                  </div>
                </>
              )}
                <NavLink to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                  Home
                </NavLink>
                <NavLink to="/alljobs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                  All Jobs
                </NavLink>
                <NavLink to="/blogs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                  Blogs
                </NavLink>
                <NavLink to="/addjob" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                  Add A Job
                </NavLink>
                <NavLink to="/myjobs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                  My Jobs
                </NavLink>
                <NavLink to="/appliedjob" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                  Applied Jobs
                </NavLink>
                {
                  user?.email ? (
                    <div>
                      <h1 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      onClick={handleLogOut}>
                        Log Out
                      </h1>
                    </div>
                  ) : (
                    <NavLink to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                  Login
                </NavLink>
                  )
                }
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
