import React, { Component } from 'react';
import { CountryTable } from './components/CountryTable';
import { WorldData } from './components/WorldData';
import { Row, Col, Form, FormGroup, Input, Button, Spinner, InputGroup, InputGroupAddon } from 'reactstrap';
import './covidtracker.css';

class CovidTracker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '',
            filtered: [],
            filterCode: 'All',
        }
        this.getCountry = this.getCountry.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.filterCountryCode = this.filterCountryCode.bind(this);
    }
    // componentDidMount() {
    //     fetch("https://api.covid19api.com/summary")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         this.setState({
    //             worldData: data.Global,
    //             countryData: data.Countries,
    //             isLoading: false,
    //         })
    //     })
    //     .catch(console.log);
    //     console.log(this.state);
    // }

    getCountry = (e) => {
        e.preventDefault();

        if(this.state.search === '') {
            this.setState({
                filtered: []
            })
        } else {
            this.setState({
                filtered: this.props.countryData.filter( country => country.Country.includes(this.state.search)),
            })
    }
}

    handleOnChange = (e) => {
        this.setState({
            search: e.target.value,
        })
    }

    filterCountryCode = (e) => {
        this.setState({
            filterCode: e.target.value,
        })
    }

    render() {
        return (
                <div>
                    <WorldData worldData={this.props.worldData}/>
                    <Row className="mt-3 ml-5 mr-5">
                        <Col>
                            <Form onSubmit={this.getCountry} >
                                <FormGroup>
                                    <InputGroup>
                                    <Input type="text" name="search" id="searchbar" placeholder="Enter country name" value={this.state.search} onChange={this.handleOnChange}/>
                                    <InputGroupAddon addonType="append"><Button>Search</Button></InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col>
                        <FormGroup>
                            <Input type="select" name="countryCode" id="countryCode" onChange={this.filterCountryCode}>
                            <option value='All'>All</option>
                            <option value='A'>A</option>
                            <option value='B'>B</option>
                            <option value='C'>C</option>
                            </Input>
                        </FormGroup>
                        </Col>
                    </Row>
                    <h2 className="mb-3">Covid cases by countries</h2>
                    <Row>
                        <Col>
                            <CountryTable countries={this.props.countryData} filtered={this.state.filtered} countryCode={this.state.filterCode}/>
                        </Col>
                    </Row>
                </div>
            );
        }

};

export default CovidTracker;
