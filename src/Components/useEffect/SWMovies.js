import React, {useState, useEffect} from 'react';
import axios from 'axios';

function SWMovies() {
    const url = "https://swapi.dev/api/films/" ;
    const [movieNum, changeMovieNum] = useState(1);
    const [data, changeData] = useState("")
    useEffect(() => {
        const fetchData = async() => {
            const res = await axios.get(`${url}${movieNum}/`);
            changeData(res.data);
        }
        fetchData();
    }, [movieNum])  //this makes runs the FIRST TIME 
                    //and further only if movieNum changes
    /********************************************************************
     * This is IMPORTANT to note because: 
     * Suppose we don't mention this second argument, changeData() would
     * have changed the state 'data' which would have re-renders this 
     * Component which would have re-initiated useEffect() as it runs every
     * time the Component is mounted. So it would have gotten stuck in an 
     * infinite loop. Therefore we need to provide it a reason to trigger.
     */
    return (
        <div>
            <h1>{data.title}</h1>
            <select onChange={(e) => changeMovieNum(e.target.value)}>
                <option value="1" >1</option>
                <option value="2" >2</option>
                <option value="3" >3</option>
            </select>
        </div>
    );
}

export default SWMovies;

