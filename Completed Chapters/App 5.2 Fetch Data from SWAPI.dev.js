import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './Default.css';

import Home from './components/Home'
import Error from './components/Error'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      species: []
    }
  }

  componentDidMount() {
    // API Fetch list of species from SWAPI.dev (or people from SWAPI.tech)
    fetch('https://swapi.dev/api/species/')
      .then(response => response.json())
      .then(data => this.setState({ species: data.results }))
  }

  render() {
    return (
      <div className="App">
        <h1>Star Wars Species</h1>
        <Router>
          <ul>
            <li><Link to="/" >Home</Link></li>
          </ul>
          <hr />

          <ul>
            {this.state.species.map((species, index) => {
              // species.url: https://swapi.dev/api/species/3/
              const urlID = species.url.split('/')[5]
              return (
                <li key={index}>
                  <Link to={`/species/${urlID}`}>
                    {species.name}
                  </Link>
                </li>
              )
            })}
          </ul>

          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/species/:speciesID" render={({ match }) => {
              return (
                <h2>Species ID: {match.params.speciesID} </h2>
              )
            }} />

            <Route component={Error} />
          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
