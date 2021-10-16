import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDemoJson } from '../store/actions/JsonActionCreators';

const ReduxComponent = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState(1);

    useEffect(() => {
        const action = fetchDemoJson("test");
        dispatch();
    }, []);

    const handleButtonClick = async () => {
        setValue(value + 1);
    }

    return (
        <div>
            <button
                type="button"
                onClick={handleButtonClick}
            >
                Fetch data from id (value)
            </button>
        </div>
    )
}