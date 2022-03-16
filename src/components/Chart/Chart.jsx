import React from 'react';

import './Chart.css';
import ChartBar from './ChartBar';


const Chart = (props) => {
    const valuesArray = props.dataPoints.map(dataPoint => dataPoint.value)
    const total = [...valuesArray].reduce((partialSum, a) => partialSum + a, 0);
    console.log(total)
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => {
                return <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={total} label={dataPoint.label} />
            })}
        </div>
    );
};

export default Chart;
