import React from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
    const company = useSelector(state => state.company);
    const dispatch = useDispatch();

    return (
        <div>
            <p>{company}</p>
        </div>
    )
};

export default App;




