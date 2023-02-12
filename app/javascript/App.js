import React from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
    const jobs = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
            <p>{jobs}</p>
        </div>
    )
};

export default App;




