import logo from './logo.svg';
import './App.css';
import WoJSX from './component/wojsx';
import WithJSX from './component/withjsx';
import Exercise3 from './component/exercise3';
import Exercise4 from './component/exercise4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WoJSX/>
        <WithJSX/>
        <Exercise3/>
        <Exercise4/>
      </header>
    </div>
  );
}

export default App;
