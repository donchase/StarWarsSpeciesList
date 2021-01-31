import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom';

class NavFullChallenge extends Component {
    constructor(props) {
        super(props)

        this.state = {
            species: []
        }
    }

    componentDidMount() {
        // API Fetch list of species from SWAPI.dev (or people from SWAPI.tech)

        const savedNav = localStorage.getItem(`species-Nav`)

        if (savedNav) {
            this.setState({
                species: JSON.parse(savedNav)
            })
            return
        }

        const fetchAll = () => {
            let resultsData = [];
            let pageNum = 1;
            fetch(`https://swapi.dev/api/species/?page=${pageNum}`)
                .then(response => response.json())
                .then(jsondata => {
                    this.setState({ species: jsondata.results })
                    // localStorage.setItem(`species-Nav`, JSON.stringify(jsondata.results))
                    // navData += JSON.stringify(jsondata.results)
                    resultsData = jsondata.results

                    console.log("resultsData: " + resultsData);
                    // console.log(resultsData);
                    let nextNav = jsondata.next
                    console.log("nextNav: " + nextNav);
                    if (nextNav && (pageNum < 6)) {
                        pageNum++;
                        fetch(`https://swapi.dev/api/species/?page=${pageNum}`)
                            .then(response => response.json())
                            .then(jsondata => {
                                const newData = jsondata.results
                                resultsData = resultsData.concat(newData)
                                console.log("resultsData: " + resultsData);
                                nextNav = jsondata.next
                                console.log("nextNav: " + nextNav);
                            })
                    }
                })

            this.setState({
                species: resultsData
            })

            localStorage.setItem(`species-Nav`, JSON.stringify(resultsData))
            console.log("resultsData: " + resultsData);
            // return resultsData;
            return
        }

        fetchAll();
        // this.setState({ species: allNavData.results })
        // this.setState({
        //     species: JSON.parse(allNavData.results)
        // })
        // localStorage.setItem(`species-Nav`, allNavData)


        // console.log(allNavData)
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

export default NavFullChallenge;
