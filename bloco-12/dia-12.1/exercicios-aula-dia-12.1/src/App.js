import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }
  
  // a requisição pode ser feita diretamente dentro do componenteDidMount
    // componentDidMount() {
    //   fetch('https://rickandmortyapi.com/api/character')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({characters: data.results})
    //   })
    // }

  fetchCharacters() {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
    this.setState({characters: data.results})
    })
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className='body'>
          {characters.map(({name, image}) => {
            return (
              <div key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name} />  
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
