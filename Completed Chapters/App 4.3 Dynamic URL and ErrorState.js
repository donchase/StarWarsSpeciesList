import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './Default.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hola Don!!</h1>
        <Router>
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/about/Don" >About Don</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
          </ul>

          <Switch>
            <Route exact path="/" render={() => {
              return <h2>Home Page</h2>
            }} />

            <Route path="/about/:userId" render={({ match }) => {
              return <h2>About {match.params.userId}</h2>
            }} />

            <Route path="/about" render={() => {
              return <h2>About Page</h2>
            }} />

            <Route path="/contact" render={() => {
              return <h2>Contact Page</h2>
            }} />

            <Route render={() => {
              return <h2>404 Error! No Page</h2>
            }} />
          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
