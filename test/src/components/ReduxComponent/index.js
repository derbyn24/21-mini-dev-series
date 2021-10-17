import React, {useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDemoJson} from '../../store/actions/demoJsonActionCreators';
import axios from 'axios';

const ReduxComponent = () => {
    const dispatch = useDispatch();


    const demoJson = useSelector((store) => store.demoJson.data);
    const [value, setValue] = useState(1);

    useEffect(() => {
        const action = fetchDemoJson({title: "Hello!", body: "click the button for cool stuff!"});
        dispatch(action);
    // eslint-disable-next-line
    },[]);


    const handleButtonClick = async () => {
        const result = await axios({
            method: "GET",
            url: `https://jsonplaceholder.typicode.com/posts/${value}`
        },[]);
        
        setValue(value+1);
        dispatch(fetchDemoJson(result.data));
        console.log(result.data);
    }

    return (

        <div>
            <h2>{demoJson?.title}</h2>
            <p>{demoJson?.body}</p> 
            <button type="button" onClick={handleButtonClick}>
                Fetch data from id {value}
            </button>
        </div>
    );
}

export default ReduxComponent;