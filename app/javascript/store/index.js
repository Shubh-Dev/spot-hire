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
    return {
        company: state.company
    }

};

export default jobReducer;