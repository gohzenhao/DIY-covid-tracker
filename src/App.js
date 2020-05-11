import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CovidTracker from './components/CovidTracker';
import { BrowserRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { Nav, NavItem, Navbar, Row, Col } from 'reactstrap';
import CountryDetails from './components/CountryDetails';

class App extends Component {


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Covid tracking app</h1>
          <h2>By yours truly: Jeffrey Goh</h2>
        </header>
        <div>
          <BrowserRouter>
          <Row>
            <Nav style={{width: '100%'}}>
              <Col>
              <NavItem>
                <NavLink className="nav-link" to="/home">Home</NavLink>
              </NavItem>
              </Col>
              <Col>
              <NavItem>
                <NavLink className="nav-link" to="/covidTracker">Covid Tracker</NavLink>
              </NavItem>
              </Col>
            </Nav>
          </Row>
          <Switch>
            <Route exact path='/home' component={MainPage}/>
            <Route exact path='/covidTracker' component={CovidTracker}/>
            <Route path='/covidTracker/:countryCode' component={({match}) => <CountryDetails countryCode={match.params.countryCode}/>}/>
            <Redirect to='/home'/>
          </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
