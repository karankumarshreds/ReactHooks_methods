import React, {useState} from 'react';

function Hooks() {

    /********************************************************
     * useState(value) : sets initial value for arg1
     * arg1 : key of the state you want
     * arg2 : function used to change the value of the state 
     */
    const[count, setCount] = useState(0);

    return (
        <div>
            <h1> The count is : {count} </h1>
            <button onClick={() => setCount(count+1)}>ADD</button>
            <button onClick={() => setCount(count-1)}>REDUCE</button>
        </div>
    )
}

export default Hooks;



