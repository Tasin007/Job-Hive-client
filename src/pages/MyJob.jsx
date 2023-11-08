import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyJob = () => {
    const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  
  useEffect(() => {
        fetch('http://localhost:3000/api/v1/jobs')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setJobs(data);
        })
  },[])

  const jobFilter = jobs.filter(job => job.providerMail === user.email);
  console.log(jobFilter);
  const handleDelete = (title) => {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    })
    .then((result) =>{
        if (result.isConfirmed) {
            fetch(`http://localhost:3000/api/v1/jobs/${title}`, {
        method: "DELETE",
    })
        .then((res) => res.json())
        .then((result) => {
            // console.log("Success:", result);
            if (result.deletedCount > 0) {
            Swal.fire(
                "Deleted!",
                "Your file has been deleted.",
                "success"
            );
            const remainingJobs = jobs.filter(
                (job) => job.title !== title

            );
            setJobs(remainingJobs);
            
        }
    } )

 
}

});
};


   

    return (
        <div>
            <section>
        <h1 className="underline text-2xl text-gray-500 text-center mb-14 mt-10">
          Your Jobs
        </h1>
        <div className="max-w-7xl mx-auto">
          {
            jobFilter.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            {jobFilter.map((job) => (
              
               
             
             
                <div  key={jobs._id} className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
                  <div className="">
                    <img
                      className="object-cover h-80 w-full"
                      src={job.banner}
                      alt="Image Description"
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-2xl text-start font-semibold text-gray-500">
                      {job.title}
                    </h3>
                    <p className="mt-3 text-start text-gray-500 text-lg">
                      {job.description}
                    </p>
                    <span className="block text-start mb-1 text-base font-semibold uppercase text-[#4D96B3]">
                      Price: {job.salary}
                    </span>
                    <h3 className="mb-3 text-start text-gray-500">
                      <span className="font-semibold">
                        Service Provider Name:
                      </span>{" "}
                      {job.providerMail}
                    </h3>
                    <h3 className="mb-3 text-start text-gray-500">
                      <span className="font-semibold">
                        Category:
                      </span>{" "}
                      {job.category}
                    </h3>
                    <h3 className="mb-3 text-start text-gray-500">
                      <span className="font-semibold">
                        Application Deadline:
                      </span>{" "}
                      {job.applicationDeadline}
                    </h3>

                    <div className="flex">
                      <img
                        className="inline-block h-[2.875rem] w-[2.875rem] rounded-full"
                        src={job.logo}
                      />
                    </div>
                  </div>
                  <div className="mt-auto justify-center flex border-t border-gray-200 divide-x divide-gray-200">
                    {/* className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-[#4D96B3] text-white shadow-sm disabled:opacity-50 hover:bg-[#1e6a88] hover:text-white" */}
                    <div className="flex  gap-10">
                      <Link to={`/update-jobs/${job._id}`}>
                        <button className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium  bg-[#4D96B3] text-white shadow-sm disabled:opacity-50 hover:bg-[#0f1e24] hover:text-white">
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(job.title)}
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium  bg-[#4D96B3] text-white shadow-sm disabled:opacity-50 hover:bg-[#1e6a88] hover:text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              
            ))}
          </div>
            )
            :
            (
              <div className="max-w-7xl mx-auto col-span-3">
                <h1 className="text-2xl text-gray-500 text-center mb-14 mt-10">
                  You have not added any jobs yet.
                </h1>
                <img className="mx-auto" src="https://i.ibb.co/4NCks3s/icon-not-found.png" alt="" />
              </div>
            )
          }
        </div>
      </section>
        </div>
    );
};

export default MyJob;