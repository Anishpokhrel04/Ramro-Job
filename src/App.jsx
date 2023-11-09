import { useState } from "react";
import Header from "./Components/Header/header";
import JobCard from "./Components/JobCard/jobcard";
import Navbar from "./Components/Navbar/navbar";
import SearchBar from "./Components/SearchBar/searchbar";
import jobData from "./JobsData";

import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";
import { useEffect } from "react";

function App() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postOn", "desc"))
    const req = await getDocs(q);
    req.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
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
      <SearchBar />
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </>
  );
}

export default App;
