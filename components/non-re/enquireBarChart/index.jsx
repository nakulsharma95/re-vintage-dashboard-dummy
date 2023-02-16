import React from 'react';
import { Chart } from 'react-google-charts';
import styles from './style.module.scss';

const EnquireBarChart = () => {
  const data = [
    ['Year', 'Sales'],
    ['Bajaj', 500],
    ['TVS', 460],
    ['Honda', 300],
    ['Hero', 350],
  ];
  const options = {
    hAxis: {
      title: "xAxis",
      minValue: 0,
    },
  };
  return (
    <>
      <div className={styles.barChartMain}>
        <Chart
          chartType="Bar"
          width="100%"
          height="100%"
          data={data}
          options={options}
        />
      </div>
    </>
  );
};

export default EnquireBarChart;
