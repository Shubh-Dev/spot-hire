import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { jobActions } from "./store/job";



const App = () => {
    const jobs = useSelector((state) => state.job.jobs);
    const isLoading = useSelector((state) => state.job.isLoading)
    console.log(jobs)
    const dispatch = useDispatch();
    const loadHandler = () => {
        dispatch(jobActions.loading())
    }
    return (
        <div>
            <h1>Jobs</h1>
            {!isLoading && jobs}
            
            <button onClick={loadHandler}>load</button>
            
        </div>
       
    );
    
};  

export default App;
