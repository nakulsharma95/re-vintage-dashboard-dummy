/* eslint-disable import/no-extraneous-dependencies */

import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from './style.module.scss';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function DoughnutChart(props) {
  return (
    <div className={styles.doughnutChart}>
      <Doughnut
        options={props.options}
        data={props.data}
        width="100%"
        height={props.size}
      />
    </div>
  );
}

export default DoughnutChart;
