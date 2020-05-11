import React, { Component } from 'react';



class CountryDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            country: [],
        }
    }

    componentDidMount() {

    }
    render() {
        return (
            <h1>Hi <span>{this.props.countryCode}</span></h1>
            );
    }
};

export default CountryDetails;
