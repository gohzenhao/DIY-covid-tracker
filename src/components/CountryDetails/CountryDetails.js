import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { CountryDailyStats } from './components/CountryDailyStats';



class CountryDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            country: [],
            isLoading: true,
            name: '',
        }
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
                    {/* <Row>
                     {this.state.country.map((cases) => (
                        <Card>
                            <CardBody>
                                <CardTitle><h2>cases.Active</h2></CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            </CardBody>
                        </Card>
                     ))}
                     </Row> */}
                     </div>
                )}
            </div>
            );
    }
};

export default CountryDetails;
