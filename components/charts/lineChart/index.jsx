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

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      borderColor: '#C93B2B',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      data: [65, 59, 80, 81, 56, 55, 40, 81, 56, 55, 40, 81, 56, 55, 40],
    },
    {
      label: 'Dataset 2',
      borderColor: '#52AF3C',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      data: [45, 69, 20, 91, 106, 55, 20, 45, 69, 20, 91, 106, 55, 20],
    },
    {
      label: 'Dataset 3',
      borderColor: '#46a2da',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      data: [15, 29, 10, 11, 30, 25, 80, 15, 29, 10, 11, 30, 25, 80],
    },
  ],
};

function LineChart() {
  return (
    <div className={styles.lineChart}>
      <Line options={options} data={data} width="100%" />
    </div>
  );
}

export default LineChart;
