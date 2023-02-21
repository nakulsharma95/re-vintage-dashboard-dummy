/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from './style.module.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart(props) {
  return (
    <div className={styles.lineChart}>
      <Line options={props.options} data={props.data} width="100%" />
    </div>
  );
}

export default LineChart;
