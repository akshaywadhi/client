import React, { useState } from 'react';
import { axiosInstance } from '../utils/axiosInstance';
import { toast } from 'react-toastify';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

export default function Addjob() {
  const [form, setForm] = useState({
    title: '',
    company: '',
    type: '',
    location: '',
    description: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/api/jobs', form);
      toast.success('Job added successfully');
  setForm({
     title: '',
    company: '',
    type: '',
    location: '',
    description: '',
  })
      fetchJobs();
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate()

  return (
    <>
    <Navbar/>
    <div className="d-flex justify-content-center align-items-center w-50 mx-auto px-3">
    <div className="container my-4">
      <h2 className="mb-4 text-center">Add New Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          name="title"
          placeholder="Job Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="form-control mb-3"
          name="company"
          placeholder="Company Name"
          value={form.company}
          onChange={handleChange}
          required
        />
        <select
          className="form-control mb-3"
          name="type"
          value={form.type}
          onChange={handleChange}
          required
        >
          <option value="">Select Job Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>
        <input
          type="text"
          className="form-control mb-3"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
        />
        <textarea
          className="form-control mb-3"
          name="description"
          placeholder="Description"
          rows="4"
          value={form.description}
          onChange={handleChange}
          required
        ></textarea>
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-success">Submit</button>
        <button className='btn btn-outline-primary' onClick={() => navigate('/')}>Homepage</button>
        </div>
    
      </form>
           
    </div>
    </div>
    </>
  );
}
