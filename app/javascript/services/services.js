import httpp from "./httpp";

const getJobData = () => httpp.get("/jobs");

export default getJobData;
