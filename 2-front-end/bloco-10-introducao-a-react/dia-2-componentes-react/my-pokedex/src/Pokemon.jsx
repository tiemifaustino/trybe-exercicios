import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemonData;
    return (
      <section className='pokemon'>
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
          </div>
          <img src={image} alt={name}></img>
      </section>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.string
  }),
  image: PropTypes.string,
}

export default Pokemon;
