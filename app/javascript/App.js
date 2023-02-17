import React from "react";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";


const App = () => {
    // const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobs);
    console.log(jobs)

    return (
        <div>
            <h1>Jobs</h1>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        <h2>{job.title}</h2>
                        <p>{job.company}</p>
                        <p>{job.description}</p>
                        <p>{job.employees}</p>
                        <p>{job.skills}</p>
                        <p>{job.salary}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};  

export default App;
