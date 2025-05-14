import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Addjob from './Addjob';
import { axiosInstance } from '../utils/axiosInstance';
import { ClipLoader } from "react-spinners";
import { useNavigate } from 'react-router-dom';

export default function Homepage() {

 
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('')
  const [filterJobs, setFilterJobs] = useState([])

const navigate = useNavigate()


  useEffect(() => {
fetchJobs()

  }, [])


  async function fetchJobs(){

      try {
    setLoading(true);
    const jobs = await axiosInstance.get('api/jobs');
    setJobs(jobs.data);
        setFilterJobs(jobs.data); 
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false); 
  }
  }

  
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red"
};



function search(){

 const filtered = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchText.toLowerCase()) ||
    job.location.toLowerCase().includes(searchText.toLowerCase())
  );
  setFilterJobs(filtered);
  console.log(filterJobs)
}

function refresh(){
  window.location.reload()
}


  return (
    <div>
      <Navbar />

      <div className="container my-3">
        <div className="row d-flex justify-content-start">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search By Title Or Location"
                aria-label="Search"
                aria-describedby="search-button"
                value={searchText}
               onChange={(e) => setSearchText(e.target.value)}
              />
              <button className="btn btn-outline-primary" onClick={search} type="button" id="search-button">
                <i className="bi bi-search"></i>
              </button>
          
            </div>

          </div>
      <div className='mt-4'>
      <button className="btn btn-primary" onClick={() => navigate('/add-job')}>Add Job</button>
      <button className='btn btn-danger mx-4' onClick={refresh}>Refresh Page</button>
    </div>
        </div>
      
      </div>

    {
      /* add jobs here */
     }

  


     {
      /* fetch jobs */
     }


     {
      loading ? (
      <ClipLoader
        color="#0d6efd" 
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      ) : (
<div className="container my-4">
  <div className="row">
    {     filterJobs.map((job) => (
      <div className="col-12 col-md-6 col-lg-4 mb-4" key={job._id}>
        <div className="card h-100 shadow-sm">
        <img
            src={`https://picsum.photos/seed/${job._id}/300/120`}
            className="card-img-top"
            alt={`${job.company} logo`}
            style={{ objectFit: 'cover', height: '150px' }}
          />

          <div className="card-body">
            <h5 className="card-title">{job.title}</h5>
            <p className="card-text">
              <strong>Company:</strong> {job.company}<br />
              <strong>Type:</strong> {job.type}<br />
              <strong>Location:</strong> {job.location}
            </p>
            <a href={`/job/${job._id}`} className="btn btn-outline-primary mt-2">
              View Details
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
      )
     }
     


    </div>
  );
}
