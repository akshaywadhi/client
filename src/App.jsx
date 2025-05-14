import Addjob from "./Components/Addjob";
import Homepage from "./Components/Homepage"
import { Routes, Route } from 'react-router-dom';
import JobDetails from "./Components/JobDetails";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {


  return (
    <>
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/add-job" element={<Addjob/>}/>
    <Route path="/job/:id" element={<JobDetails/>}/>
   </Routes>
   <ToastContainer position="top-right" autoClose={3000} />
   </>
  )
}

export default App
