import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { CountryDailyStats } from './components/CountryDailyStats';
import { SpecificCountryTable } from './components/SpecificCountryTable';
import DatePicker from 'react-date-picker';


class CountryDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            country: [],
            isLoading: true,
            name: '',
            date: null,
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
        .catch(console.log)
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
                    <CountryDailyStats country={this.state.country[this.state.country.length - 1]}/>
                    <DatePicker onChange={this.handleDateChange} value={this.state.date}/>
                    <SpecificCountryTable details={this.state.country} date={this.state.date}/>
                     </div>
                )}
            </div>
            );
    }
};

export default CountryDetails;
