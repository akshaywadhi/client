import React, {useState} from 'react'
import { axiosInstance } from '../utils/axiosInstance';
import { toast } from 'react-toastify';

export default function Addjob({setShowForm, fetchJobs}) {

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
        [e.target.name] : e.target.value 
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {

        const data = await axiosInstance.post('/api/jobs', form)
        console.log(form);
        setShowForm(false); 
        toast.success('job added successfully');
        fetchJobs()
      } catch (error) {
        console.log(error)
      }

      
 
    };
  
  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className="modal-header">
            <h5 className="modal-title">Add New Job</h5>
            <button type="button" className="btn-close" onClick={() => setShowForm(false)}></button>
          </div>
          <div className="modal-body my-2">
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
              className="form-control"
              name="description"
              placeholder="Description"
              rows="3"
              value={form.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-success">Submit</button>
            <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
