import React from "react";
import { useSelector } from "react-redux";


const  Job = () => {
    const jobs = useSelector((state) => state.jobs);
    console.log("From Job", jobs)

    return (
              <div>
                
        </div>
    )
};

export default Job;