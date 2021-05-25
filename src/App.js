import './App.css';
import { Card, CardHeader, CardBody, Button, Container, Row, Col } from 'reactstrap';

// fake data
import { quiz } from './data/kuis'

const App = () => {

  const {id, question, options} = quiz[0];

  return (
    <div className="App">
      <Container fluid={true}>
        <h2 className="text-center mb-3 mt-3">Quiz Screen</h2>
        <Card>
          <CardHeader>{question}</CardHeader>
          <CardBody>
            {options.map(item => (
              <div style={{
                display: 'flex',
                justifyItems: 'center'
              }}><div style={{
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
            <Col><Button outline color="info" >Sebelumnya</Button></Col>
            <Col><Button outline color="primary" >Selanjutnya</Button></Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;
