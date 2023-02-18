import React from "react";
import Job from "./components/Job";
import { useSelector } from "react-redux";



const App = () => {
    const jobs = useSelector((state) => state.jobs);
    return (
        <div>
            <h1>Jobs</h1>
            {console.log("inside return app", jobs)}
            {JSON.stringify(jobs[0])}
        </div>
       
    );
    
};  

export default App;
