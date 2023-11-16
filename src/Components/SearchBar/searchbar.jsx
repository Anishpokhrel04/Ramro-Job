import { useState } from "react";

function SearchBar(props) {
  const [jobcrieteria, setJobCrieteria] = useState({
    title: "",
    location: "",
    experience: "",
    type: "",
  });

  const handleChange = (e) => {
    setJobCrieteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(jobcrieteria);
  const search = async () => {
    
    await props.fetchJobsCustom(jobcrieteria);
  };

  return (
    <div className="flex my-10 rounded-md gap-4 justify-center">
      <select
        onChange={handleChange}
        name="title"
        value={jobcrieteria.title}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="" disabled hidden selected>
          Job role
        </option>
        <option value="ios Developer">ios Developer</option>
        <option value="FrontEnd Developer">FrontEnd Developer</option>
        <option value="BackEnd Developer">BackEnd Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Developer Advocate">Developer Advocate</option>
      </select>

      <select
        onChange={handleChange}
        name="type"
        value={jobcrieteria.type}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="" disabled hidden selected>
          Job Type
        </option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>

      <select
        onChange={handleChange}
        name="location"
        value={jobcrieteria.location}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="" disabled hidden selected>
          Location
        </option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-Office</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <select
        onChange={handleChange}
        name="experience"
        value={jobcrieteria.experience}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="" disabled hidden selected>
          Experienced
        </option>
        <option value="None">None</option>
        <option value="Junior">Junior</option>
        <option value="Mid">Mid</option>
        <option value="Senior">Senior</option>
        <option value="Developer Advocate">Developer Advocate</option>
      </select>
      <button
        onClick={search}
        className="bg-blue-500 py-3 text-white w-64 font-bold rounded-md"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
