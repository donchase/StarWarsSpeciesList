import React, { Component } from 'react'

export default class Species extends Component {
    render() {
        return (
            <h2>Species ID: {this.props.match.params.speciesID} </h2>
        )
    }
}