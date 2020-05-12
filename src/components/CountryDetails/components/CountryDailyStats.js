import React from 'react';
import { Row, Col, Card, CardBody, CardSubtitle, CardTitle, CardText, Button, Badge, CardHeader } from 'reactstrap';

export const CountryDailyStats = ({country}) => {
    return (
        <Row className="text-left ml-3 mr-3">
        <Col>
            <Card className="bg-dark text-white">
                <CardBody>
                    <CardTitle><h1 className="display-1 font-weight-bold">{country.Active}<span className="lead font-weight-bold">cases</span></h1></CardTitle>
                    <CardSubtitle><h4><Badge color="warning text-white">Active</Badge></h4></CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button color="info">Learn more</Button>
                </CardBody>
            </Card>
        </Col>
        <Col>
            <Card className="bg-dark text-white">
                <CardBody>
                    <CardTitle><h1 className="display-1 font-weight-bold">{country.Recovered}<span className="lead font-weight-bold">cases</span></h1></CardTitle>
                    <CardSubtitle><h4><Badge color="success text-white">Recovered</Badge></h4></CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button color="info">Learn more</Button>
                </CardBody>
            </Card>
        </Col>
        <Col>
            <Card className="bg-dark text-white">
                <CardBody>
                    <CardTitle><h1 className="display-1 font-weight-bold">{country.Deaths}<span className="lead font-weight-bold">cases</span></h1></CardTitle>
                    <CardSubtitle><h4><Badge color="danger text-white">Deaths</Badge></h4></CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button color="info">Learn more</Button>
                </CardBody>
            </Card>
        </Col>
    </Row>
    );
}
