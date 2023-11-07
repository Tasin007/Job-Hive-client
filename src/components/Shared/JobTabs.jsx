import { useState, useEffect } from 'react';
import axios from 'axios';

const JobTabs = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [jobs, setJobs] = useState([]);
  const [isLoggedIn] = useState(false); 

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

  const handleViewDetails = () => {
    if (!isLoggedIn) {
      // Notify the user and redirect to the login page
      alert('You have to log in first to view details');
      // Redirect to the login page, replace '/login' with your login route
      window.location.href = '/login';
    } else {
      // Logic to handle viewing details for logged-in users
      // Add your own logic for viewing job details here
    }
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/jobs'); // Replace with your actual API endpoint
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []);

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
                  <button className="mt-3 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={handleViewDetails}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default JobTabs;
