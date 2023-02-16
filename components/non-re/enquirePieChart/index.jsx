import React from 'react';
import { Chart } from 'react-google-charts';
import styles from './style.module.scss';

const EnquirePieChart = () => {
  const data = [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7], // CSS-style declaration
  ];
  const options = {
    pieHole: 0.4,
    is3D: false,
    backgroundColor: '#282828',
    borderRadius: '3px',
    legendTextStyle: { color: '#fff' },
  };
  return (
    <>
      <div className={styles.barChartMain}>
        <Chart
          chartType="PieChart"
          width="100%"
          height="100%"
          data={data}
          options={options}
        />
      </div>
    </>
  );
};

export default EnquirePieChart;
