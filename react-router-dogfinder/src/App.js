import './App.css';
import Nav from './components/Nav';
import DogRoutes from './routes/DogRoutes'
import dogsData from './data/db.json'

function App() {
  return (
    <div className="App">
      <Nav dogs={dogsData.dogs} />
      <DogRoutes dogs={dogsData.dogs}/>
    </div>
  );
}

export default App;
