import Chart from 'react-google-charts';

function PieChart() {
  const pieOptions = {
    title: '',
    backgroundColor: '',
    pieHole: 0.5,
    slices: [
      {
        color: '#D2635B',
      },
      {
        color: '#F1DF67',
      },
    ],
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
    fontSize: 20,
  };

  return (
    <Chart
      chartType="PieChart"
      data={[
        ['Item', 'Numbers'],
        ['Item 2', 10000],
        ['Item 3', 6000],
      ]}
      options={pieOptions}
      width="100%"
      height="220px"
      legend_toggle
    />
  );
}

export default PieChart;
