import './App.css';
import Quote from './components/Quote';
import Todolist from './components/Todolist';



function App() {

  const quoteColors = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown"
  ]

  return (
    <div className="App" style={{backgroundColor:quoteColors[0]}}>
    <Quote colors={quoteColors} />,
    <Todolist/>
    </div>
  )
}

export default App;
