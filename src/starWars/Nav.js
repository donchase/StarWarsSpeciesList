import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom';

class Nav extends Component {
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
            <ul>
                {this.state.species.map((species, index) => {
                    // species.url: https://swapi.dev/api/species/3/
                    const urlID = species.url.split('/')[5]
                    return (
                        <li key={index}>
                            <NavLink activeStyle={{ fontWeight: 'bold' }} to={`/species/${urlID}`}>
                                {species.name}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default Nav;
