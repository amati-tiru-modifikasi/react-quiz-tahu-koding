import React, { useState } from 'react';
import './App.css';
import { Card, CardHeader, CardBody, Button, Container, Row, Col } from 'reactstrap';

// fake data
import { quiz } from './data/kuis'

const App = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const {id, question, options} = quiz[currentIndex];

  const nextQuestion = () => {
    if(quiz.length - 1 === currentIndex) return;
    setCurrentIndex(currentIndex + 1);
  }

  const prevQuestion = () => {
    if(currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  }

  return (
    <div className="App">
      <Container fluid={true}>
        <h2 className="text-center mb-3 mt-3">Quiz Screen</h2>
        <Card>
          <CardBody style={{ display: 'flex', padding: 10, flexWrap:'wrap' }}>
            {quiz.map( (item, index) => (
              <div 
                className="border border-primary"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40,
                  width: 40,
                  marginRight: 5,
                  marginBottom: 5,
                  borderRadius: 4,
                  cursor: 'pointer',
                  backgroundColor: index === currentIndex ? "greenyellow" : "transparent"
                }}
                onClick={() => setCurrentIndex(index)}
              >{index + 1}</div>
            ))}

          </CardBody>
        </Card>
        <Card>
          <CardHeader>{currentIndex + 1}. {question}</CardHeader>
          <CardBody>
            {options.map(item => (
              <div style={{
                display: 'flex',
                justifyItems: 'center'
              }}
              key={item.id}
              ><div style={{
                  height: 20,
                  width: 20,
                  borderRadius: 100,
                  backgroundColor: "grey",
                  cursor: "pointer",
                  marginRight: 5
              }}/>{item.title}</div>
            ))}
          </CardBody>
        </Card>
        <div style={{
          display: "flex",
          justifyItems: "space-between"
        }}>
          <Row>
            <Col><Button outline color="info" onClick={() => prevQuestion()} disabled={currentIndex === 0 ? true :false}>Sebelumnya</Button></Col>
            <Col><Button outline color="primary" onClick={() => nextQuestion()} disabled={quiz.length - 1 === currentIndex ? true: false}>Selanjutnya</Button></Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;
