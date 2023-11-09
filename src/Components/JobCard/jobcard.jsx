import dayjs from "dayjs";

const JobCard = (props) => {
  // const skills = ["Javascript", "React", "Python"];
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff(props.postOn, "day");

  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg  hover:border-blue-500 hover:translate-y-1 scale-103">
        <div className="flex flex-col gap-3 items-start">
          <h1 className="text-lg font-semibold">{props.title}-{props.company}</h1>
          <p>{props.type} . {props.experience} . {props.location}</p>
          <div className="flex items-center gap-2">
            {props.skills.map((skill) => (
              <p
                key={skill}
                className="text-gray-500 px-2 py-1 rounded-md border border-black"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
        {}
        <div className="flex items-center gap-4">
          <p className=" text-gray-500">Posted {diffInDays>1? `${diffInDays} days ` :`${diffInDays} day`} ago</p>
          <a href={props.jobs_link}>
            <button className="text-blue-500 border border-blue-500 px-10 py-2 rounded-md">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
