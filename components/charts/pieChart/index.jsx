import Chart from 'react-google-charts';
import styles from './style.module.scss';

function PieChart(props) {
  return (
    <div className={styles.pieChart}>
      {props.defaultValue && (
        <div
          className={styles.centerValue}
          style={{ left: props.defaultValueTextAlign }}
        >
          <h4 className={styles.title4}>{props.defaultValue || 28}</h4>
        </div>
      )}
      <Chart
        chartType="PieChart"
        data={props.chartData}
        options={props.pieOptions}
        legend_toggle
        loader={<div>Loading Chart...</div>}
      />
    </div>
  );
}

export default PieChart;
