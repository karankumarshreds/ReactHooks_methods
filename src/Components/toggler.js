import React, {useState} from 'react';
import useToggle from './useToggle';

function Toggle() {
    const [isHappy, setIsHappy] = useToggle(true); 
    const [isHotdog, setHotdog] = useToggle(true);   
    return(
        <div>
            <h1>{ isHappy ? "happy" : "sad" }</h1>   
            <button onClick={setIsHappy}>change mood</button>             
            
            <h1>{ isHotdog ? "hotdog" : "not hotdog" }</h1>      
            <button onClick={setHotdog}>make hotdog</button> 
        </div>
    )
}

export default Toggle;


