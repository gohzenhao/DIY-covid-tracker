import React, { Component } from 'react';
import image from './covid19.png';
import { CountryTable } from './CountryTable';
import { WorldData } from './WorldData';
import { Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';

class CovidTracker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            search: '',
            worldData: [],
            countryData: [],
            filtered: [],
            filterCode: 'All',
        }
        this.getCountry = this.getCountry.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.filterCountryCode = this.filterCountryCode.bind(this);
    }
    componentDidMount() {
        fetch("https://api.covid19api.com/summary")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                worldData: data.Global,
                countryData: data.Countries,
                isLoading: false,
            })
        })
        .catch(console.log);
        console.log(this.state);
    }

    getCountry = (e) => {
        e.preventDefault();

        if(this.state.search === '') {
            this.setState({
                filtered: []
            })
        } else {
            this.setState({
                filtered: this.state.countryData.filter( country => country.Country.includes(this.state.search)),
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
                    {this.state.isLoading ? (
                        <h4>Loading....</h4>
                    ) : (
                        <div>
                        <h1>The world as of now</h1>
                        <WorldData worldData={this.state.worldData}/>
                        <img src={image} height="200px" alt="covid 19"/>
                        <Row>
                            <Col>
                                <Form inline onSubmit={this.getCountry} >
                                    <FormGroup>
                                        <Input type="text" name="search" id="searchbar" placeholder="Enter country name" value={this.state.search} onChange={this.handleOnChange}/>
                                    </FormGroup>
                                    <Button>Search</Button>
                                </Form>
                            </Col>
                            <Col >
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
                        <h2>Covid cases by countries</h2>
                        <CountryTable countries={this.state.countryData} filtered={this.state.filtered} countryCode={this.state.filterCode}/>
                        </div>
                    )}

                    </div>
                )}

};

export default CovidTracker;
