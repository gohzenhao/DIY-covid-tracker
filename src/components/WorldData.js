import React from 'react';
import { Row, Col, Card, CardTitle, CardText, Badge } from 'reactstrap';
export const WorldData = (props) => {
    return (
        <Row>
        <Col>
            <Card body>
            <CardTitle><h1>{props.worldData.TotalConfirmed}</h1></CardTitle>
            <CardText>Confirmed cases</CardText>
            <Badge color="warning">Yikes</Badge>
            </Card>
        </Col>
        <Col>
            <Card body>
            <CardTitle><h1>{props.worldData.TotalDeaths}</h1></CardTitle>
            <CardText>Total Deaths</CardText>
            <Badge color="danger">RIP</Badge>
            </Card>
        </Col>
        <Col>
            <Card body>
            <CardTitle><h1>{props.worldData.TotalRecovered}</h1></CardTitle>
            <CardText>Total Recovered</CardText>
            <Badge color="success">Hope everything goes well</Badge>
            </Card>
        </Col>
    </Row>
    );
}
