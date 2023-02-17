import Chart from 'react-google-charts';
// import styles from './style.module.scss';

function PieChart(props) {
  return (
    <Chart
      chartType="PieChart"
      data={props.chartData}
      options={props.pieOptions}
      width="100%"
      height="220px"
      legend_toggle
      loader={<div>Loading Chart...</div>}
    />
  );
}

export default PieChart;
