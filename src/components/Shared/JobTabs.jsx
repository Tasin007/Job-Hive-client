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