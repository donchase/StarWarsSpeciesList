import React, { Component } from 'react';
import logo from './logo.svg';

class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "Janie Chase",
            initials: "JC",
            info: [
                { title: "Birthday", text: "July 8, 1968" },
                { title: "Address", text: "8206 Providence Road" },
                { title: "Phone", text: "813-672-1654" },
                { title: "Email", text: "janie@gmail.com" }
            ]
        }
    }
    render() {
        const {
            firstName,
            initials,
            info
        } = this.state;
        return (
            <React.Fragment>
                <section className="card-container">
                    <header className="card-header">
                        <span initials={initials}></span>
                        <h2>{firstName}</h2>
                        <img src={logo} className="App-logo" alt="logo" />
                    </header>

                    <main>
                        <ul>
                            {info.map((row, index) => {
                                return (
                                    <li key={index}>
                                        <span>{row.title}</span>
                                        {row.text ? row.text : "n/a"}
                                    </li>
                                )
                            })}
                        </ul>
                    </main>
                </section>
            </React.Fragment>

        )
    }
}

export default Card;