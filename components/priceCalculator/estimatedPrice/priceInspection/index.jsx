import React from 'react';
import { BiRupee } from 'react-icons/bi';
import LineChart from '../../../charts/lineChart';
import styles from './style.module.scss';

export default function PriceInspection(props) {
  // LIne CHart
  const optionLineChart = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          border: {
            dash: [2, 1],
          },
          color: '#575757',
        },
        ticks: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const lineChartData = {
    labels: ['Average', 'Good', 'Excellent'],
    datasets: [
      {
        label: 'Dataset 1',
        borderColor: '#C93B2B',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        data: [20, 80, 100],
      },
    ],
  };

  return (
    <div className={styles.priceInspectionMain}>
      <div className={styles.title}>{props.headingTitle}</div>
      <div className={styles.performanceTitle}>
        <p>Average</p>
        <p>Good</p>
        <p>Excellent</p>
      </div>

      <div className={styles.graphSection}>
        <LineChart
          options={optionLineChart}
          data={lineChartData}
          graphClass={styles.graphStyle}
        />
      </div>

      <div className={styles.estimatedPrice}>
        <h3>
          <span>
            <BiRupee />
            {props.priceOne}
          </span>{' '}
          -{' '}
          <span>
            <BiRupee />
            {props.priceTwo}
          </span>
        </h3>
        <p>You may get a better price upon inspection</p>
      </div>
    </div>
  );
}
