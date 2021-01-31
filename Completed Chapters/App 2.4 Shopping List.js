import React, { Component } from 'react';

import ShoppingList from './shoppingList/ShoppingList'
import './shoppingList/ShoppingList.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingList />
      </div>
    );
  }
}

export default App;
