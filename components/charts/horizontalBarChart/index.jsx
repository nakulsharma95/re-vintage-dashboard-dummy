/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import styles from './style.module.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function HorizontalBarChart(props) {
  return (
    <div className={`${styles.graphStyle} ${props.containerClassName}`}>
      <Bar
        height={props.height}
        width={props.width}
        options={props.options}
        data={props.data}
      />
    </div>
  );
}

export default HorizontalBarChart;
