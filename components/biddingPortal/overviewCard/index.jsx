import React from 'react';
import DoughnutChart from '../../charts/doughnutChart';
import styles from './style.module.scss';

const optionsDoughnut = {
  responsive: true,
  maintainAspectRatio: false,
  centerText: {
    display: true,
    text: `90%sasassassa`,
  },
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

const doughnutChartData = {
  labels: [
    'Upcoming Bids',
    'Active Bids',
    'Closed Bids',
    'No Bids',
    'Seller Portal',
  ],
  datasets: [
    {
      label: 'My First Dataset',
      data: [100, 300, 100, 80, 50],
      backgroundColor: ['#F1DF67', '#D2635B', '#403E3E', '#DA291C', '#F28823'],
      borderColor: ['#686868'],
      hoverOffset: 4,
      borderWidth: 0.2,
    },
  ],
};
export default function BiddingOverview() {
  return (
    <div className={styles.overviewCardMain}>
      <div className={styles.title}>Bidding Overview</div>
      <DoughnutChart options={optionsDoughnut} data={doughnutChartData} />
    </div>
  );
}
