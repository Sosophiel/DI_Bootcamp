
import './App.css';
import Card from './components/Card';

const cards = [
  {
    title : 'Points',
    value : '3000',
    icon : ''
  },
  {
    title : 'Lightnings',
    value : '6540',
    icon : ''
  },
  {
    title : 'Shakas',
    value : '337010',
    icon : ''
  },
  {
    title : 'Diamonds',
    value : '93661',
    icon : ''
  },
]

function App() {
  return (
    <div className="App">
      {
        cards.map((card, index) => {
          return(
            <Card title={card.title} value={card.value} key={index}/>
          )
        })
      }
      
    </div>
  );
}

export default App;
