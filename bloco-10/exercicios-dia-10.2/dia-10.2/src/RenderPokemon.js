import React from 'react';
import ApplyPokemon from './ApplyPokemon';

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

export default RenderPokemon;