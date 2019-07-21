import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import './App.css';
import Login from './login/Login';
import ItemsList from './itemsList/ItemsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to="/login">Login</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/items">Items</NavLink>
            &nbsp;|&nbsp;
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>
        <main>
          <Route path="/login" component={Login}></Route>  
          <Route path="/items" component={ItemsList}></Route>  
        </main>
      </div>
    );
  }

  logout = () => {
    localStorage.removeItem('jwt');

    this.props.history.push('/login');
  }
}

export default withRouter(App);

