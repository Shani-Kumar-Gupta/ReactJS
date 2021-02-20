import React, { Component } from 'react';

export default class Profile extends Component {
    constructor() {
        super()
    }

    /* Lifecycle Method*/
    componentDidMount() {
        console.log("called componentDIdMount lifecycle");
    }

    render() {
        return (
            <>
                <div className="container">
                    <h1>Profile Component</h1>
                </div>
            </>
        )
    }
}