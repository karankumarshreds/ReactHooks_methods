import React, {useEffect} from 'react';
import InputHandler from './inputHandler';

/*********************************************
 * A simple hook to handle the state as the 
 * user starts to type inside the input field
 */

function SimpleFormHook() {

    /*********************************************
     * useEffect works like ComponentDidMount and 
     * ComponentWillMount but it has functionality 
     * of both the functions. So basically it runs
     * on every render including very first one.
     */
    useEffect(() => {
        alert('Render')
    })
    const [state, setState ] = InputHandler('some default value');
    return (
        <div>
            <h1> So glad you're typing {state}</h1>
            <input type="text" value={state} onChange={setState}/>
        </div>
    )
 }

 export default SimpleFormHook;


