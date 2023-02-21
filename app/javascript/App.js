import React from "react";
import { useSelector } from "react-redux";


const App = () => {
    const jobs = useSelector((state) => state.jobs);
    console.log("from app", jobs);

    return (
        <div>
            <h1>Jobs</h1>
            {jobs.map((job) => (
                <div key={job.id}>
                    <h2>{job.title}</h2>
                    <p>{job.description}</p>
                    <p>{job.salary}</p>
                    <p>{job.location}</p>
                </div>
            ))}
        </div>
       
    );
    
};  

export default App;
