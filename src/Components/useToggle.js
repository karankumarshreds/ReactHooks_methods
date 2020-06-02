import {useState} from 'react';

function useToggle(initialValue) {
    
    //initial value will be passed by the component
    const [state, setState] = useState(initialValue);
    const toggle = () => {
        setState(!state);
    };
    //returns updated state and a function to toggle it
    return [state, toggle];
    /**
     * The toggle mentioned here is sent back to the 
     * component and is saved as an ARG2!!
     */
}

export default useToggle;

