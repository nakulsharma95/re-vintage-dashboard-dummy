import React from 'react';
import PieChart from '../../charts/pieChart';

import styles from './style.module.scss';

function PieBig() {
  // Pie Chart Here
  const pieOptions = {
    title: '',
    backgroundColor: 'transparent',
    pieHole: 0.5,
    pieSliceText: 'none',
    slices: [
      {
        color: '#DA291C',
      },
      {
        color: '#E8B016',
      },
      {
        color: '#F28823',
      },
      {
        color: '#D2635B',
      },
      {
        color: '#403E3E',
      },
    ],
    pieSliceBorderColor: 'transparent',
    legend: {
      position: 'right',
      alignment: 'left',
      textStyle: {
        color: 'white',
        fontSize: 14,
      },
    },
    tooltip: {
      showColorCode: true,
    },
    fontSize: 12,
  };

  const pieData = [
    ['Item', 'Numbers'],
    ['From Web 1507', 10000],
    ['MIY 74', 6000],
    ['Instore 10', 10000],
    ['VDMP 20', 6000],
    ['From App 2', 10000],
  ];
  return (
    <div className={styles.pieContainer}>
      <h5>Bidding Overview</h5>
      <div className="d-flex">
        <PieChart chartData={pieData} pieOptions={pieOptions} />
      </div>
    </div>
  );
}

export default PieBig;
