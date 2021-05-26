import React, { useEffect } from 'react'
import {  withRouter, useHistory } from 'react-router-dom';

const Result = ({location}) => {
    const history = useHistory();

    useEffect(() => {
        if(!location.state) history.push('/')
    },[])

    return (
        <div>
            {JSON.stringify(location.state)}
        </div>
    )
}

// source: https://stackoverflow.com/a/56849895
export default withRouter(Result);