import React, { Component } from 'react';
import pokemons from './data';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemonData;
    return (
      <section>
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
          </div>
          <div>
              <img src={image} alt='Pokemon'></img>
          </div>
      </section>
    )
  }
}

export default Pokemon;
