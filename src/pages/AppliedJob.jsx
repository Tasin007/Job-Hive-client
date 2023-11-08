import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";



const AppliedJob = () => {
    const data = useLoaderData();
    const [jobs, setJobs] = useState([]);

    const {user} = useContext(AuthContext );
    const userEmail = user?.email;

    useEffect(()=> {
        const filter = data.filter(job => job.email === userEmail);
        setJobs(filter);
    },[data, userEmail])
    console.log(jobs);



    return (
        <div>

            <section className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold underline text-center text-gray-500 mb-10">
          {" "}
          My Jobs{" "}
        </h1>
        {jobs.length > 0 ? (
          <div>

            <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="border rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead>
                        <tr className="divide-x divide-gray-500">
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase dark:text-white"
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase dark:text-white"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase dark:text-white"
                          >
                            JobId
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase dark:text-white"
                          >
                            Resume Link
                          </th>

                        </tr>
                      </thead>

                      <tbody className="text-center divide-y divide-gray-500">
                        {jobs.map((job) => (
                          // Display booked service details here
                         
                            <tr  className="border-t divide-x border-gray-200" key={job._id}>
                              <td className="flex justify-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">
                                
                              {job.email}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-white">
                                {job.name}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-white">
                                {job.jobId}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-white">
                                {job.resumeLink}
                              </td>
                            </tr>
                         
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto col-span-3">
            <h1 className="text-2xl text-gray-500 text-center mb-14 mt-10">
              No jobs booked yet.
            </h1>
            <img
              className="mx-auto"
              src="https://i.ibb.co/4NCks3s/icon-not-found.png"
              alt=""
            />
          </div>
        )}
      </section>
        </div>
    );
};

export default AppliedJob;