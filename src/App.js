import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './Default.css';

import Home from './components/Home'
import NavChallenge from './starWars/NavChallenge'
import Species from './starWars/Species'
import Error from './components/Error'

class App extends Component {
  // constructor method removed as App is no longer keeping state.
  /*
  constructor(props) {
    super(props)

    this.state = {
      species: []
    }
  }
  */

  // Removed because separate <NavChallenge/> component makes it redundant.
  /*
  componentDidMount() {
    // API Fetch list of species from SWAPI.dev (or people from SWAPI.tech)
    fetch('https://swapi.dev/api/species/')
      .then(response => response.json())
      .then(data => this.setState({ species: data.results }))
  }
  */

  render() {
    return (
      <div className="App">
        <h1>Star Wars Species List</h1>
        <Router>
          <ul>
            <li><Link to="/" >Home.</Link></li>
          </ul>
          <hr />

          <NavChallenge />

          <hr />

          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/species/:speciesID" component={Species} />

            <Route component={Error} />
          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
