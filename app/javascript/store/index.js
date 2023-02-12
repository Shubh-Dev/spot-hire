const job = {
    company: "Infoteck",
    description: "Software Company",
    Employees: 200,
    jobTitle: "Backedn Developer",
    salary: "20L",
    skills: "Ruby on rails/Node.js"
}

const initialState = job;

const jobReducer = (state = initialState, action) => {
    if (action.type = 'display') {
        return {
            jobs: state
        }
    }

};

export default jobReducer;