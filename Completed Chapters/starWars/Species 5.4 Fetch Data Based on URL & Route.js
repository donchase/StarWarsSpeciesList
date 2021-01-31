import React, { Component } from 'react'

class Species extends Component {
    constructor(props) {
        super(props)

        this.state = {
            oneSpecies: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.speciesID
        fetch(`https://swapi.dev/api/species/${id}/ `)
            .then(response => response.json())
            .then(data => this.setState({ oneSpecies: data }))
    }

    componentDidUpdate(prevProps, prevState) {
        const prevPropsString = JSON.stringify(prevProps.match.params.speciesID)
        const updatedPropsString = JSON.stringify(this.props.match.params.speciesID)

        if (prevPropsString !== updatedPropsString) {
            // Fetch species specific data from API
            const id = this.props.match.params.speciesID
            fetch(`https://swapi.dev/api/species/${id}/ `)
                .then(response => response.json())
                .then(data => this.setState({ oneSpecies: data }))

        }
    }

    render() {
        const { oneSpecies } = this.state
        return (
            <>
                <h3>Name: {oneSpecies.name}</h3>
                <p>Classification: {oneSpecies.classification}</p>
                <p>Designation: {oneSpecies.designation}</p>
                <p>Average Lifespan: {oneSpecies.average_lifespan}</p>
                <p>URL: {oneSpecies.url}</p>
            </>
        )
    }
}

export default Species