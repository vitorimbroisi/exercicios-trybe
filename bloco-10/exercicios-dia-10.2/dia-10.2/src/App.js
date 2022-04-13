import './App.css';
import RenderPokemon from './RenderPokemon';
import dataPokemon from './data';

function App() {
  return (
    <div className="App">
      <RenderPokemon dataPokemon={ dataPokemon } />
    </div>
  );
}

export default App;
