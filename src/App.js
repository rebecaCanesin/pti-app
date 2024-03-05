import './App.css';
import json from './data.json'
import ArticleCard from './components/articleCard';

function App() {
  const cardData = json;
  const { cards, data } = cardData;

  return (
    <div className="App">
      <ArticleCard data={data} cards={cards} />
    </div>
  );
}

export default App;
