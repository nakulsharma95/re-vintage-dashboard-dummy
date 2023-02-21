/* eslint-disable import/no-extraneous-dependencies */
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from './style.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart(props) {
  return (
    <div className={styles.pieChart}>
      <Doughnut options={props.options} data={props.data} width="100%" />
    </div>
  );
}

export default DoughnutChart;
