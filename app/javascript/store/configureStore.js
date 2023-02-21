import { configureStore } from "@reduxjs/toolkit";
const url = "api/v1/jobs";

const initialState = {
    jobs: [],
    applied: false,
};



export const fetchJobs = async() => {

    await fetch(url)
        .then((res) => res.json())
        .then((data) => {
            data.map((job) => {
                initialState.jobs.push({
                    id: job.id,
                    photo: job.photo,
                    company: job.company_name,
                    description: job.company_description,
                    employees: job.employees,
                    title: job.job_title,
                    skills: job.skills,
                    salary: job.salary,
                });
            });
        });
    return initialState;
};

fetchJobs();
console.log("from initialstate", initialState)


const jobReducer = (state = initialState, action) => {
    
  return state;
};

const store = configureStore({
    reducer: jobReducer,
});

export default store;