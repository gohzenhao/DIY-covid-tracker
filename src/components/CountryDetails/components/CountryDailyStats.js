import React from 'react';
import { Row, Col, Card, CardBody, CardSubtitle, CardTitle, CardText, Button, Badge, CardHeader } from 'reactstrap';
import { NavLink, Route} from 'react-router-dom';
import { LearnMoreChart } from './LearnMoreChart';

export const CountryDailyStats = ({match, country, details}) => {

    return (
        <React.Fragment>
        <Row className="text-left ml-3 mr-3">
        <Col>
            <Card className="bg-dark text-white">
                <CardBody>
                    <CardTitle><h1 className="display-1 font-weight-bold">{country.TotalConfirmed}<span className="lead font-weight-bold">cases</span></h1></CardTitle>
                    <CardSubtitle><h4><Badge color="warning text-white">Confirmed</Badge></h4></CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <NavLink to={`${match.url}/confirmed`}><Button color="info">Learn more</Button></NavLink>
                </CardBody>
            </Card>
        </Col>
        <Col>
            <Card className="bg-dark text-white">
                <CardBody>
                    <CardTitle><h1 className="display-1 font-weight-bold">{country.TotalRecovered}<span className="lead font-weight-bold">cases</span></h1></CardTitle>
                    <CardSubtitle><h4><Badge color="success text-white">Recovered</Badge></h4></CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <NavLink to={`${match.url}/recovered`}><Button color="info">Learn more</Button></NavLink>
                </CardBody>
            </Card>
        </Col>
        <Col>
            <Card className="bg-dark text-white">
                <CardBody>
                    <CardTitle><h1 className="display-1 font-weight-bold">{country.TotalDeaths}<span className="lead font-weight-bold">cases</span></h1></CardTitle>
                    <CardSubtitle><h4><Badge color="danger text-white">Deaths</Badge></h4></CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <NavLink to={`${match.url}/deaths`}><Button color="info">Learn more</Button></NavLink>
                </CardBody>
            </Card>
        </Col>
    </Row>
    <Route path={`${match.path}/:type`} component={({match}) => <LearnMoreChart country={details} match={match}/>} />
    </React.Fragment>
    );
}
