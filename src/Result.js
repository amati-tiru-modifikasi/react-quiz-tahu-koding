import React, { useEffect } from 'react'
import {  withRouter, useHistory } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter } from 'reactstrap';


const Result = ({location}) => {
    const history = useHistory();

    useEffect(() => {
        if(!location.state) history.push('/')
    },[])

    return !location.state ? false : (
        <div className="mt-3">
            <h1 className="text-center mb-3">Hasil Kuesioner</h1>
            {location.state.quiz.map((item,index) => (
                <Card  className="mb-3" key={index}>
                    <CardHeader>
                        <div>No.{index + 1}</div> {item.question}
                    </CardHeader>
                    <CardBody>
                    {item.options.map((item,index) => (
                        <div style={{
                            display: 'flex',
                            justifyItems: 'center'
                        }}
                        key={index}
                        ><div style={{
                            height: 20,
                            width: 20,
                            borderRadius: 100,
                            backgroundColor: item?.selected ? "greenyellow" : "grey",
                            marginRight: 5,
                            fontSize: 18
                        }}
                        />{item.title}</div>
                    ))}
                    </CardBody>
                    <CardFooter>
                        Benar salah
                    </CardFooter>
                </Card>
            ))}
            
        </div>
    )
}

// source: https://stackoverflow.com/a/56849895
export default withRouter(Result);