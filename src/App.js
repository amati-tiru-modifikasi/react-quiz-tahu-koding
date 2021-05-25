import './App.css';
import { Card, CardHeader, CardBody } from 'reactstrap';

// fake data
import { quiz } from './data/kuis'

function App() {
  return (
    <div className="App">
      <div class="kuis">
        <h2 className="text-center mb-3 mt-3">Quiz Screen</h2>
        <Card>
          <CardHeader>Ini adalah Pertanyaan</CardHeader>
          <CardBody>Ini adalah body</CardBody>
        </Card>
      </div>
    </div>
  );
}

export default App;
