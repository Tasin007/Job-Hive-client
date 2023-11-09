import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const JobTabs = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [jobs, setJobs] = useState([]);

  const tabs = [
    { name: 'all', label: 'All Jobs' },
    { name: 'onsite', label: 'On Site Job' },
    { name: 'remote', label: 'Remote Job' },
    { name: 'hybrid', label: 'Hybrid' },
    { name: 'parttime', label: 'Part Time' },
  ];

  const handleClick = (e, name) => {
    e.preventDefault();
    setActiveTab(name);
  };


  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://job-hive-server-side.vercel.app/api/v1/jobs'); // Replace with your actual API endpoint
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []);

  const onsiteJobs = jobs.filter(job => job.category === 'onsite');
  
  const remoteJobs = jobs.filter(job => job.category === 'remote');
  
  const hybridJobs = jobs.filter(job => job.category === 'hybrid');

  const parttimeJobs = jobs.filter(job => job.category === 'parttime');


  return (
    <div className='mt-5'>
      <div className="flex flex-wrap justify-center -mb-px">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            role="tab"
            aria-selected={activeTab === tab.name}
            className={`tab tab-bordered md:tab-lg ${activeTab === tab.name ? 'tab-active' : ''}`}
            onClick={(e) => handleClick(e, tab.name)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {activeTab === 'all' &&
          jobs.map((job, index) => (
            <div key={index} className="border rounded-xl shadow-sm p-6 dark:bg-slate-900 dark:border-gray-700">
              <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <div className="bg-gray-100 border-b rounded-t-xl pt-3 px-4 md:pt-4 md:px-5 dark:bg-slate-800 dark:border-gray-700">
                  {/* Content here */}
                </div>
                <div className="p-4 text-center md:py-7 md:px-5">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {job.title}
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Posted By: {job.postedBy}
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Job Posting Date: {job.postingDate}
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Application Deadline: {job.applicationDeadline}
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Salary Range: {job.salary}
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Job Applicants Number: {job.applicantsNumber}
                  </p>
                  <Link
                  to={`/jobs/${job._id}`}
                  >
                  <button className="mt-3 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
                    View Details
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="mt-4">
        {activeTab === 'onsite' &&
        onsiteJobs.map((job, index) => (
            <div key={index} className="border rounded-xl shadow-sm p-6 dark:bg-slate-900 dark:border-gray-700">
              <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <div className="bg-gray-100 border-b rounded-t-xl pt-3 px-4 md:pt-4 md:px-5 dark:bg-slate-800 dark:border-gray-700">
                  {/* Content here */}
                </div>
                <div className="p-4 text-center md:py-7 md:px-5">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {job.title}
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Posted By: {job.postedBy}
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Job Posting Date: {job.postingDate}
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Application Deadline: {job.applicationDeadline}
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Salary Range: {job.salary}
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Job Applicants Number: {job.applicantsNumber}
                  </p>
                  <Link
                  to={`/jobs/${job._id}`}
                  >
                  <button className="mt-3 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
                    View Details
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="mt-4">
        {activeTab === 'remote' &&
        remoteJobs.map((job, index) => (
            <div key={index} className="border rounded-xl shadow-sm p-6 dark:bg-slate-900 dark:border-gray-700">
              <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <div className="bg-gray-100 border-b rounded-t-xl pt-3 px-4 md:pt-4 md:px-5 dark:bg-slate-800 dark:border-gray-700">
                  {/* Content here */}
                </div>
                <div className="p-4 text-center md:py-7 md:px-5">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {job.title}
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Posted By: {job.postedBy}
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Job Posting Date: {job.postingDate}
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Application Deadline: {job.applicationDeadline}
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Salary Range: {job.salary}
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Job Applicants Number: {job.applicantsNumber}
                  </p>
                  <Link
                  to={`/jobs/${job._id}`}
                  >
                  <button className="mt-3 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
                    View Details
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="mt-4">
        {activeTab === 'hybrid' &&
        hybridJobs.map((job, index) => (
            <div key={index} className="border rounded-xl shadow-sm p-6 dark:bg-slate-900 dark:border-gray-700">
              <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <div className="bg-gray-100 border-b rounded-t-xl pt-3 px-4 md:pt-4 md:px-5 dark:bg-slate-800 dark:border-gray-700">
                  {/* Content here */}
                </div>
                <div className="p-4 text-center md:py-7 md:px-5">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {job.title}
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Posted By: {job.postedBy}
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Job Posting Date: {job.postingDate}
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Application Deadline: {job.applicationDeadline}
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Salary Range: {job.salary}
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Job Applicants Number: {job.applicantsNumber}
                  </p>
                  <Link
                  to={`/jobs/${job._id}`}
                  >
                  <button className="mt-3 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
                    View Details
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="mt-4">
        {activeTab === 'parttime' &&
        parttimeJobs.map((job, index) => (
            <div key={index} className="border rounded-xl shadow-sm p-6 dark:bg-slate-900 dark:border-gray-700">
              <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <div className="bg-gray-100 border-b rounded-t-xl pt-3 px-4 md:pt-4 md:px-5 dark:bg-slate-800 dark:border-gray-700">
                  {/* Content here */}
                </div>
                <div className="p-4 text-center md:py-7 md:px-5">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {job.title}
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Posted By: {job.postedBy}
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Job Posting Date: {job.postingDate}
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Application Deadline: {job.applicationDeadline}
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Salary Range: {job.salary}
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Job Applicants Number: {job.applicantsNumber}
                  </p>
                  <Link
                  to={`/jobs/${job._id}`}
                  >
                  <button className="mt-3 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
                    View Details
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default JobTabs;
