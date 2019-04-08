import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Items from './items/Items';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Checkout this Cool List of Items!</h1>
        </header>
        <main>
          <Route path="/items" component={Login}></Route>   
        </main>
      </div>
    );
  }
}

export default withRouter(App);
