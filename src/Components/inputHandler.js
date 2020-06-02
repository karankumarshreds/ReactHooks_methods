import React, {useState} from 'react';

function InputHandler(defaultVal) {
    const [state, changeState] = useState(defaultVal);
    const setState = (event) => {
        changeState(event.target.value);
    }
    return [state, setState];
}

export default InputHandler;
