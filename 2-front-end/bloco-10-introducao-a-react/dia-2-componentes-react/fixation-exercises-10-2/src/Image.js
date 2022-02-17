import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

// Qual o nome do componente declarado acima?
// O nome do componente é Image

export default Image;