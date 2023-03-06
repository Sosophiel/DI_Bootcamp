import logo from './logo.svg';
import './App.css';
import Car from './components/car';
import Garage from './components/Garage';
import Events from './components/Events';
import Phone from './components/Phone';
import Color from './components/Color';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Car/>
        <Garage/>
        <Events/>
        <Phone />
        <Color/>

      </header>
    </div>
  );
}

export default App;
