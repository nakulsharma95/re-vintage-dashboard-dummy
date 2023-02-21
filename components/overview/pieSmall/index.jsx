import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import DoughnutChart from '../../charts/doughnutChart';

import styles from './style.module.scss';

function PieSmall(props) {
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
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

  const chartData = {
    labels: ['From Web', 'From OLX'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50],
        backgroundColor: ['#F1DF67', '#D2635B'],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className={styles.pieContainer}>
      {props.withouticon && <h5>Source</h5>}
      {props.icon && (
        <h5>
          Procured <IoIosArrowForward />
        </h5>
      )}

      {/* <DoughnutChart options={options} chartData={chartData} /> */}
    </div>
  );
}

export default PieSmall;
