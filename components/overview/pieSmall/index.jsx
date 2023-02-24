import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import DoughnutChart from '../../charts/doughnutChart';

import styles from './style.module.scss';

function PieSmall(props) {
  const optionsDoughnut = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontSize: 20,
          color: 'white',
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 15,
        },
      },
    },
  };
  const labels = ['From Web', 'From OLX'];
  const doughnutChartData = {
    labels,
    datasets: [
      {
        label: 'My First Dataset',
        data: [100, 300],
        backgroundColor: ['#F1DF67', '#D2635B'],
        hoverOffset: 4,
        borderColor: ['#686868'],
        borderWidth: 0.2,
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

      <DoughnutChart options={optionsDoughnut} data={doughnutChartData} />
    </div>
  );
}

export default PieSmall;
