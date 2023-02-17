import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import PieChart from '../../charts/pieChart';

import styles from './style.module.scss';

function PieSmall(props) {
  // Pie Chart Here
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
    pieSliceBorderColor: 'transparent',
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
    fontSize: 12,
  };

  const pieData = [
    ['Item', 'Numbers'],
    ['From Web 1507', 10000],
    ['MIY 74', 6000],
  ];
  return (
    <div className={styles.pieContainer}>
      {props.withouticon && <h5>Source</h5>}
      {props.icon && (
        <h5>
          Procured <IoIosArrowForward />{' '}
        </h5>
      )}

      <PieChart chartData={pieData} pieOptions={pieOptions} />
    </div>
  );
}

export default PieSmall;
