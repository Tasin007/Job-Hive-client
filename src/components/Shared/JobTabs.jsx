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
        const response = await axios.get('http://localhost:3000/api/v1/jobs'); // Replace with your actual API endpoint
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