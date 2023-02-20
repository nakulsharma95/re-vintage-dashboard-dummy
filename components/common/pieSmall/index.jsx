import React from 'react';
import PieChart from '../../charts/pieChart';

import styles from './style.module.scss';

function pieSmall() {
  const pieOptions = {
    title: '',
    backgroundColor: 'transparent',
    pieHole: 0.5,
    slices: [
      {
        color: '#D2635B',
      },
      {
        color: '#F1DF67',
      },
    ],
    legend: {
      position: 'bottom',
      alignment: 'left',
      textStyle: {
        color: 'white',
        fontSize: 14,
      },
    },
    tooltip: {
      showColorCode: true,
    },
    fontSize: 20,
  };

  const data = [
    ['Item', 'Numbers'],
    ['Item 2', 10000],
    ['Item 3', 6000],
  ];

  return (
    <div className={styles.pieContainer}>
      <h5>Procured</h5>
      <PieChart chartData={data} pieOptions={pieOptions} />
    </div>
  );
}

export default pieSmall;
