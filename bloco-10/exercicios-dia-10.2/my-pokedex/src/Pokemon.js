import React from 'react';
import Pokedex from './Pokedex';
import PropTypes from 'prop-types'

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

pokemon.PropTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.shape({
    measurementUnit: PropTypes.string,
    value: PropTypes.number,
  })
}

export default Pokemon;