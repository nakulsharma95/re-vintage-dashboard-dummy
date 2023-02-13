import React from 'react';
import { Chart } from 'react-google-charts';
import styles from './style.module.scss';

export const data = [
  ['Task', 'Hours per Day'],
  ['Upcoming Bids', 5],
  ['Active Bids', 5],
  ['Closed Bids', 2],
];

export const options = {
  title: '',
  pieHole: 0.4,
  is3D: false,
  backgroundColor: '',
  legendTextStyle: { color: '#FFF' },
};
export default function BiddingOverview() {
  return (
    <div>
      <div className={styles.overviewCardMain}>
        <div className={styles.title}>Bidding Overview</div>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width="100%"
          height="260px"
          className={styles.chartStyle}
        />
      </div>
    </div>
  );
}
