import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CovidTracker from './components/CovidTracker/CovidTracker';
import { BrowserRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import { Spinner } from 'reactstrap';
import CountryDetails from './components/CountryDetails/CountryDetails';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        isLoading: true,
        worldData: [],
        countryData: [],
    }
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
    console.log("hi");
}

  render() {
    return (
      <div className="App bg-dark">
          {this.state.isLoading ? (
            <div className="App-header">
            <Spinner/>
            <h4>Loading...</h4>
            </div>
          ) : (
            <div>
                <BrowserRouter>
                <Switch>
                  <Route exact path='/covidTracker' component={() => <CovidTracker countryData={this.state.countryData} worldData={this.state.worldData}/>}/>
                  <Route path='/covidTracker/:slug' component={({match}) => <CountryDetails match={match} countrySlug={match.params.slug} countryData={this.state.countryData}/>}/>
                  <Redirect to='/covidTracker'/>
                </Switch>
                </BrowserRouter>
            </div>
          )}
      </div>
    );
  }
}

export default App;
