import React from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { DisplayNumber } from '../../DisplayNumber/DisplayNumber';



export const CountryTable = (props) => {
    const countries = props.filtered.length === 0 ? props.countries : props.filtered;
    const countries2 = props.countryCode === 'All' ? countries : countries.filter(country => country.CountryCode.includes(props.countryCode));
    const countries3 = countries2.sort((a, b) => a.TotalConfirmed > b.TotalConfirmed ? -1 : 1);
    const renderCountries = countries3.map((c) => (
            <tr key={c.CountryCode} className="table-row">
                <td>
                    {c.CountryCode}
                </td>
                <td>
                <Link to={`/covidTracker/${c.Slug}`} >
                        {c.Country}
                </Link>
                </td>
                <td>
                    <DisplayNumber number={c.TotalConfirmed}/>
                </td>
                <td>
                <DisplayNumber number={c.TotalDeaths}/>
                </td>
                <td>
                <DisplayNumber number={c.TotalRecovered}/>
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
