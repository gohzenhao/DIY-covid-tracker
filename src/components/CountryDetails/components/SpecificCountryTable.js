import React, { Component } from 'react';
import { Table } from 'reactstrap';



export const SpecificCountryTable = ({details, date}) => {
        const haveProvince = details[0].Province ? true : false;
        const updatedDetails =  date === null ? details : details.filter(d => new Date(d.Date) > date)
        const renderDetails = updatedDetails.map((c) => (
            <tr>
                <td>
                    {c.Date.split("T")[0]}
                </td>
                {haveProvince && (
                    <td>
                        {c.Province}
                    </td>
                )}
                <td>
                    {c.Confirmed}
                </td>
                <td>
                    {c.Recovered}
                </td>
                <td>
                    {c.Deaths}
                </td>
            </tr>
        ));
        return(
            <Table dark>
                <thead>
                    <tr>
                        <th>Date</th>
                        {haveProvince && (
                            <th>Province</th>
                        )}
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                    </tr>
                </thead>
                <tbody>
                {renderDetails}
                </tbody>
            </Table>
        )
};
