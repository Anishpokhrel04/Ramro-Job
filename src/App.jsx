import { useState } from "react";
import Header from "./Components/Header/header";
import JobCard from "./Components/JobCard/jobcard";
import Navbar from "./Components/Navbar/navbar";
import SearchBar from "./Components/SearchBar/searchbar";
import jobData from "./JobsData";

import { collection, query, orderBy, getDocs, where } from "firebase/firestore";
import { db } from "./firebase.config";
import { useEffect } from "react";

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postOn", "desc"));
    const req = await getDocs(q);
    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postOn: job.data().postOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  const fetchJobsCustom = async (jobsCrieteria) => {
    setCustomSearch(true);
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(
      jobsRef,
      where("type", "==", jobsCrieteria.type),
      where("title", "==", jobsCrieteria.title),
      where("location", "==", jobsCrieteria.location),
      where("experience", "==", jobsCrieteria.experience),
      orderBy("postOn", "desc")
    );
    const req = await getDocs(q);
    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postOn: job.data().postOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom} fetchJobs={fetchJobs} />
      {customSearch && (
        <button onClick={fetchJobs} className="pl-[1250px] mb-2">
          {" "}
          <p className="bg-blue-500 px-10 py-2 rounded-md text-white">
            Clear Filter
          </p>
        </button>
      )}
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </>
  );
}

export default App;
