import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate'; // eslint-disable-line

const App = () => (
  <div className="App">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
