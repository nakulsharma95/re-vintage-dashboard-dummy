import React from 'react';
import { Chart } from 'react-google-charts';

function HorizontalBarChart(props) {
  return (
    <Chart
      width="100%"
      data={props.data}
      options={props.options}
      chartType="BarChart"
      loader={<div>Loading Chart...</div>}
    />
  );
}

export default HorizontalBarChart;
