import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import { axiosInstance } from '../utils/axiosInstance';
import { ClipLoader } from "react-spinners";


export default function JobDetails() {
    const { id } = useParams();
    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(true)


   useEffect(() => {
    fetchJob()
  }, [])


  const fetchJob = async () => {
    try {
      const job = await axiosInstance.get(`/api/jobs/${id}`);
      setJob(job.data);
      setLoading(true)
     console.log(job.data)
    } catch (err) {
      console.error(err);

    }finally {
    setLoading(false); 
  }
  }

  const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red"
};

    if (!job) {
    return      <ClipLoader
            color="#0d6efd" 
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />;
  }
  return (
    <div>
      <Navbar/>
        <div className="container my-4">
        <div className="card shadow">
          <img
            src={`https://picsum.photos/seed/${job._id}/600/200`}
            alt="Job Banner"
            className="card-img-top"
            style={{ objectFit: 'cover', height: '200px' }}
          />
          <div className="card-body">
            <h3 className="card-title">{job.title}</h3>
            <p className="card-text"><strong>Company:</strong> {job.company}</p>
            <p className="card-text"><strong>Type:</strong> {job.type}</p>
            <p className="card-text"><strong>Location:</strong> {job.location}</p>
            <p className="card-text"><strong>Description:</strong><br />{job.description}</p>
            <Link to="/" className="btn btn-outline-primary mt-3">Homepage</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
