import React from 'react';
import { Chart } from 'react-google-charts';

function VerticalBarChart(props) {
  return (
    <Chart
      width="100%"
      data={props.data}
      chartType="ColumnChart"
      options={props.options}
      loader={<div>Loading Chart...</div>}
    />
  );
}

export default VerticalBarChart;
