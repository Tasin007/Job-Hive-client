import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SingleJobDetails = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useContext(AuthContext);
  const loader = useLoaderData();
  const navigate  = useNavigate();
  const { logo, title, banner, description, salary, applicantsNumber, _id, applicationDeadline
  } =
    loader;
  
    const isDeadlinePassed = Date.now() > new Date(applicationDeadline
        );

    const handleApplicationSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const name = form.get('name');
        const resumeLink = form.get('resumeLink');
        

        const application = {
            email,
            name,
            resumeLink,
            jobId: _id,
        };
        console.log(application);
        fetch("job-hive-server-side.vercel.app/api/v1/applications", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(application),
        })
            .then((res) => res.json())
            .then((data) => {
            console.log(data);
            if (data.insertedId) {
                toast.success("Application Submitted Successfully");
                navigate('/')
            } else {
                toast.error("Application Failed");
            }
            })
            .catch((err) => {
            console.log(err);
            });
    }

  return (
    <div>
      {/* card */}
      <section className="max-w-7xl mx-auto flex justify-center mt-36">
        <div className="border rounded-md w-[1000px]">
          <div>
            <div className="">
              <img className="w-[1000px]" src={banner} />
            </div>
            <div className=" px-5">
              <img className="h-20 w-20" src={logo} alt="" />
            </div>
          </div>
          <div className="px-5 py-4">
            <h1 ><span className="text-xl font-medium">Job Title:</span> {title}</h1>
            <h3><span className="text-xl font-medium">Description:</span> {description}</h3>
            <h4><span className="text-xl font-medium">Salary Range: </span> {salary}</h4>
            <h5><span className="text-xl font-medium">No of Applicants:</span> {applicantsNumber}
            </h5>
            <div className="text-center">
            {
                isDeadlinePassed ? (
                    <p>The deadline for this job has passed. Applications are closed.</p>
        ) : (
            <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-modal-signin"
              >
                Apply
              </button>
                )
            }
     
            </div>

            <div
              id="hs-modal-signin"
              className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto"
            >
              <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-4 sm:p-7">
       

                    <div className="mt-5">
                     


                      <form onSubmit={handleApplicationSubmit}>
                        <div className="grid gap-y-4">
                          <div>
                            <label className="block text-sm mb-2 dark:text-white">
                              User Email
                            </label>
                            <div className="relative">
                              <input
                                type="email"
                                name="email"
                                defaultValue={user?.email}
                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm mb-2 dark:text-white">
                              User Name
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                id="email"
                                name="name"
                                defaultValue={user?.displayName}
                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm mb-2 dark:text-white">
                              Resume Link
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                name="resumeLink"
                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                required
                              />
                            </div>
                          </div>


                          <button
                            type="submit"
                            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            Submit Application
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleJobDetails;
