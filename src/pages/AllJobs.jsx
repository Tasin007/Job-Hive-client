import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AllJobsHero from "../components/AllJobsHero";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with your authentication logic

  const handleViewDetails = (job) => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      // Logic to handle viewing details for logged-in users
      // Replace with your logic to navigate to the job details page
    }
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('job-hive-server-side.vercel.app/api/v1/jobs'); // Replace with your actual API endpoint
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    return job.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <AllJobsHero />
      <h1 className='text-center text-5xl'>All Jobs</h1>
      <input
        type="text"
        placeholder="Search by Job Title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job Title</th>
            <th>Job Posting Date</th>
            <th>Application Deadline</th>
            <th>Salary Range</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredJobs.map((job, index) => (
            <tr key={index}>
              <td>{job.postedBy}</td>
              <td>{job.title}</td>
              <td>{job.postingDate}</td>
              <td>{job.applicationDeadline}</td>
              <td>{job.salary}</td>
              <td>
                <button onClick={() => handleViewDetails(job)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllJobs;
