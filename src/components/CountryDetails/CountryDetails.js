import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { CountryDailyStats } from './components/CountryDailyStats';
import { SpecificCountryTable } from './components/SpecificCountryTable';
import DatePicker from 'react-date-picker';
import { CountryWeeklyChart } from './components/CountryWeeklyChart';


class CountryDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            country: [],
            isLoading: true,
            name: '',
            date: null,
            summary: [],
        }

        this.handleDateChange = this.handleDateChange.bind(this);
    }
    // https://api.covid19api.com/country/south-africa?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z

    componentDidMount() {
        let api = "https://api.covid19api.com/country/";
        let country = this.props.countrySlug;
        let currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        let lastWeekDate = new Date(currentDate.getTime() - (7 * 24 * 60 * 60 * 1000));
        //Remove milliseconds
        let currentISO = currentDate.toISOString().split('.')[0] + "Z";
        let lastWeekISO = lastWeekDate.toISOString().split('.')[0] + "Z";
        let fullRequest = api + country + "?from=" + lastWeekISO + "&to=" + currentISO;
        console.log(fullRequest);
        fetch(fullRequest)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                isLoading: false,
                country: data,
                name: data[0].Country,
            })
        })
        .catch(console.log);

        console.log(this.props.match);

        const filtered = this.props.countryData.filter((c) => c.Slug === this.props.countrySlug);
        this.setState({
            summary: filtered[0],
        })

    }

    handleDateChange = (e) => {
        this.setState({
            date: e,
        })
    }
    render() {
        const time = new Date();

        return (
            <div>
                {this.state.isLoading ? (
                    <h2>Loading...</h2>
                ) : (
                    <div>
                    <h1>Cases in <span>{this.state.name}</span></h1>
                    <h2>Statistics as of {time.toDateString()}</h2>
                    <CountryDailyStats match={this.props.match} country={this.state.summary} details={this.state.country}/>
                    <CountryWeeklyChart country={this.state.country} date={this.state.date}/>
                    <Row className="m-3 justify-content-center">
                        <h4>Display data from: </h4>
                        <DatePicker onChange={this.handleDateChange} value={this.state.date}/>
                    </Row>
                    <SpecificCountryTable details={this.state.country} date={this.state.date}/>
                     </div>
                )}
            </div>
            );
    }
};

export default CountryDetails;
