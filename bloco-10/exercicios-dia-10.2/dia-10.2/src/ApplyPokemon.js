import React from "react";
import RenderPokemon from "./RenderPokemon";

class ApplyPokemon extends React.Component {
  render() {
    const {speciePokemon} = this.props;
    return (
      <div className="ApplyPokemon"> 
        <img src={ speciePokemon.image } alt={ speciePokemon.name } ></img> 
        <li>{ speciePokemon.name }</li>
        <li>{ speciePokemon.type} </li>
        <li>{ speciePokemon.averageWeight.value } {speciePokemon.averageWeight.measurementUnit}</li>
      </div>
    );
  }
}

export default ApplyPokemon;