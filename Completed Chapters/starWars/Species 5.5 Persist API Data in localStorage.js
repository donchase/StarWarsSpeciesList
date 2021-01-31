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
        const savedSpecies = localStorage.getItem(`oneSpecies-${id}`)

        if (savedSpecies) {
            this.setState({
                oneSpecies: JSON.parse(savedSpecies)
            })
            return
        }

        fetch(`https://swapi.dev/api/species/${id}/ `)
            .then(response => response.json())
            .then(jsondata => {
                this.setState({ oneSpecies: jsondata })
                localStorage.setItem(`oneSpecies-${id}`, JSON.stringify(jsondata))
            })
    }

    componentDidUpdate(prevProps, prevState) {
        const prevPropsString = JSON.stringify(prevProps.match.params.speciesID)
        const updatedPropsString = JSON.stringify(this.props.match.params.speciesID)

        if (prevPropsString !== updatedPropsString) {
            // Fetch species specific jsondata from API
            const id = this.props.match.params.speciesID
            const savedSpecies = localStorage.getItem(`oneSpecies-${id}`)

            if (savedSpecies) {
                this.setState({
                    oneSpecies: JSON.parse(savedSpecies)
                })
                return
            }

            fetch(`https://swapi.dev/api/species/${id}/ `)
                .then(response => response.json())
                .then(jsondata => {
                    this.setState({ oneSpecies: jsondata })
                    localStorage.setItem(`oneSpecies-${id}`, JSON.stringify(jsondata))
                })

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