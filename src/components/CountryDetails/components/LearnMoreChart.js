import React from 'react';


export const LearnMoreChart = ({country, match}) => {
    const a = [];
    var i;
    const renderChart = country.map((c) => (
        <div>
            <h4>c.Confirmed</h4>
        </div>
    ));
    return (
        <div>
        {renderChart}
        </div>
    );
}
