import React from "react";
import Job from "./components/Job";
import { useSelector } from "react-redux";



const App = () => {
    const jobs = useSelector((state) => state.jobs);
    return (
       
    );
    
};  

export default App;
