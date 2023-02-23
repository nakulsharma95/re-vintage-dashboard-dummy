import React from 'react';
import DoughnutChart from '../../charts/doughnutChart';

import styles from './style.module.scss';

function PieBig() {
  const optionsDoughnut = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          fontSize: 20,
          color: 'white',
        },
      },
    },
  };
  const labels = [
    'Upcoming Bids',
    'Active Bids',
    'Closed Bids',
    'No Bids',
    'Seller Portal',
  ];
  const doughnutChartData = {
    labels,
    datasets: [
      {
        label: 'My First Dataset',
        data: [100, 300, 100, 80, 50],
        backgroundColor: [
          '#F1DF67',
          '#D2635B',
          '#403E3E',
          '#DA291C',
          '#F28823',
        ],
        borderColor: ['#686868'],
        hoverOffset: 4,
        borderWidth: 0.2,
      },
    ],
  };
  return (
    <div className={styles.pieContainer}>
      <h5>Bidding Overview</h5>
      <DoughnutChart options={optionsDoughnut} data={doughnutChartData} />
    </div>
  );
}

export default PieBig;
