import React from 'react';
import Pokedex from './Pokedex';

class Pokemon extends React.Component{
  render() {
    const {pokemonData} = this.props

    return (
      <div className='mainDiv'>
        <div><img src={pokemonData.image} alt={pokemonData.name}></img></div>
        <p>{pokemonData.name}</p>
        <p>{pokemonData.type}</p> 
        <p>Average weight: {pokemonData.averageWeight.value} {pokemonData.averageWeight.measurementUnit}</p>
      </div>
    );
  }
}

export default Pokemon;