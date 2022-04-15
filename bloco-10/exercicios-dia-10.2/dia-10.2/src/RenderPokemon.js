import React from 'react';
import ApplyPokemon from './ApplyPokemon';
import PropTypes from 'prop-types'

class RenderPokemon extends React.Component {
  render() {
    const {dataPokemon} = this.props;
    return (
      <div className='RenderPokemon'>
        {dataPokemon.map((pokemon) => <ApplyPokemon key={pokemon.id} speciePokemon={pokemon} /> )}
      </div>
    );
  }
}

RenderPokemon.propTypes = {
  dataPokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.object,
    })
  ).isRequired,
}

export default RenderPokemon;