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
            <h1 className="text-center mb-3">Hasil Kuesioner - Score {location.state.score.benar - location.state.score.salah}</h1>
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
                        {item.options.find(
                            (option) => option.correct && option.selected === option.correct
                        ) ? (
                            <div className="text-success">
                                Jawaban Anda: {item.options.find(item => item.correct).title}
                            </div>
                        ) : 
                            <>
                            <div className="text-danger">
                                Jawaban Anda: {item.options.find(item => item.selected)?.title ?? "Kamu Gak Jawab"}
                            </div>
                            <div className="text-success">
                                Jawaban Benar: {item.options.find((item) => item.correct).title}
                            </div>
                            </>
                        }
                    </CardFooter>
                </Card>
            ))}
            
        </div>
    )
}

// source: https://stackoverflow.com/a/56849895
export default withRouter(Result);