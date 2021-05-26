import React from 'react'
import {  withRouter } from 'react-router-dom';


const Result = ({location}) => {

    return (
        <div>
            {JSON.stringify(location.state.score)}
        </div>
    )
}

// source: https://stackoverflow.com/a/56849895
export default withRouter(Result);