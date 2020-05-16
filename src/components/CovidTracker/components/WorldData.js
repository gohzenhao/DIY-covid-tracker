import React from 'react';
import { Row, Col, Card, CardTitle, CardText, Badge, Jumbotron } from 'reactstrap';
import { DisplayNumber } from '../../DisplayNumber/DisplayNumber';

export const WorldData = (props) => {
    return (
        <Jumbotron fluid className="world-data-header">
                <h1 className="text-white">Covid-19 Tracker</h1>
                <h4 className="text-white">By Jeffrey Goh</h4>
            <Row className="mt-5 ml-5 mr-5 text-white">
                <Col>
                    <Card body className="bg-dark">
                    <CardTitle>
                        <h1 className="display-1 font-weight-bold"><DisplayNumber number={props.worldData.TotalConfirmed}/></h1></CardTitle>
                    <CardText>Confirmed cases</CardText>
                    <Badge color="warning">Yikes</Badge>
                    </Card>
                </Col>
                <Col>
                    <Card body className="bg-dark">
                    <CardTitle><h1 className="display-1 font-weight-bold"><DisplayNumber number={props.worldData.TotalConfirmed}/></h1></CardTitle>
                    <CardText>Total Deaths</CardText>
                    <Badge color="danger">RIP</Badge>
                    </Card>
                </Col>
                <Col>
                    <Card body className="bg-dark">
                    <CardTitle><h1 className="display-1 font-weight-bold"><DisplayNumber number={props.worldData.TotalConfirmed}/></h1></CardTitle>
                    <CardText>Total Recovered</CardText>
                    <Badge color="success">Hope everything goes well</Badge>
                    </Card>
                </Col>
            </Row>

        </Jumbotron>
    );
}
