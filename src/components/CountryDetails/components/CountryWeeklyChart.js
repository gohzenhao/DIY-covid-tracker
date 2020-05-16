import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ReferenceLine, Label, ResponsiveContainer } from 'recharts';
import {Row, Col } from 'reactstrap';



export const CountryWeeklyChart = ({country, date}) => {
    const updatedDetails =  date === null ? country : country.filter(d => new Date(d.Date) > date)

    const customToolTip = (props) =>
        (props.active &&
        <div className="m-5 p-5">
            <p>{props.label}</p>
            <p>Confirmed: {props.payload[0].value}</p>
            <p>Deaths: {props.payload[1].value}</p>
            <p>Recovered: {props.payload[2].value}</p>
        </div>
        );
    return (
        <Row className="m-5 justify-content-center">
            <Col sm={12}>
            <h4>Cases over the past 7 days</h4>
            </Col>
            <Col sm={12}>
            <ResponsiveContainer width="100%" height={300}>
            <LineChart data={updatedDetails}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey={country[0].Province ? "Province" : "Date"}/>
                <YAxis />
                <Legend/>
                 <Tooltip content={customToolTip}/>
                <Line type="monotone" dataKey="Confirmed" stroke="yellow"/>
                <Line type="monotone" dataKey="Deaths" stroke="red"/>
                <Line type="monotone" dataKey="Recovered" stroke="green" />
            </LineChart>
            </ResponsiveContainer>
         </Col>
        </Row>
    );
}
