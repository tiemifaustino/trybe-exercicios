import React, { Component } from 'react';
import './App.css';
// import Image from './Image';
import Order from './Order';

class App extends Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return (
      <div className="App">
        {/* <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText="Cute cat staring" /> */}
        <h1> Orders recently created </h1>
        <Order order={headphone} />
        <Order order={energyDrink} />
      </div>
    );
  }
}

// 1. O que o componente App é em relação a Order ?
// Resposta: App é o componente pai e Order é o componente filho

export default App;
