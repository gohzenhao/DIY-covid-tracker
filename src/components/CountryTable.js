import React from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';


export const CountryTable = (props) => {
    const countries = props.filtered.length === 0 ? props.countries : props.filtered;
    const renderCountries = countries.map((c) => (
            <tr key={c.CountryCode}>
                <td>
                    {c.CountryCode}
                </td>
                <td>
                    {c.Country}
                </td>
                <td>
                    {c.TotalConfirmed}
                </td>
                <td>
                    {c.TotalDeaths}
                </td>
                <td>
                    {c.TotalRecovered}
                </td>
            </tr>
        ));

    return (
        <Table dark>
            <thead>
                <tr>
                    <th>Country Code</th>
                    <th>Country</th>
                    <th>Total confirmed</th>
                    <th>Total deaths</th>
                    <th>Total recovered</th>
                </tr>
            </thead>
            <tbody>
                {renderCountries}
            </tbody>
        </Table>
    )
}
