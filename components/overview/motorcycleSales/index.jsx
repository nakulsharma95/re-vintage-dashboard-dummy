import { Card, Col, Row } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import HorizontalBarChart from '../../charts/horizontalBarChart';

import styles from './style.module.scss';

function MotorcycleSales() {
  const horizontalOptions = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
    responsive: true,
    scales: {
      // to remove the labels
      x: {
        ticks: {
          display: false,
          beginAtZero: true,
        },

        // to remove the x-axis grid
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      // to remove the y-axis labels
      y: {
        ticks: {
          display: false,
          beginAtZero: true,
        },
        // to remove the y-axis grid
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: 'right',
        display: false,
      },
      title: {
        display: false,
        text: '',
      },
    },
  };

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];

  const horizontalBarChartData = {
    labels,
    datasets: [
      {
        label: '',
        data: [200, 180, 150, 120, 90, 50],
        backgroundColor: [
          '#F28823',
          '#F0CB2D',
          '#F5B82A',
          '#403E3E',
          '#DA291C',
          '#AAAAAA',
        ],
      },
    ],
  };

  return (
    <Card className={styles.card}>
      <div className={`${styles.cardHead} flex-column`}>
        <div className="d-flex justify-content-between">
          <h4>Motorcycle Sales</h4>
          <AiOutlineDownload className={styles.cardIcon} />
        </div>
        <HorizontalBarChart
          data={horizontalBarChartData}
          options={horizontalOptions}
          containerClassName={styles.horizontalChartStyle}
        />
      </div>
      <div className={`${styles.cardProgress} overviewProgress`} />
      <hr />
      <Row>
        <Col className="my-2" xxl={6} lg={6} md={6}>
          <div className={`${styles.cardBar} ${styles.bar1}`} />
          Meteor
        </Col>
        <Col className="my-2" xxl={6} lg={6} md={6}>
          <div className={`${styles.cardBar} ${styles.bar2}`} />
          Hunter
        </Col>
        <Col className="my-2" xxl={6} lg={6} md={6}>
          <div className={`${styles.cardBar} ${styles.bar3}`} />
          Continental GT
        </Col>
        <Col className="my-2" xxl={6} lg={6} md={6}>
          <div className={`${styles.cardBar} ${styles.bar4}`} />
          Himalayan
        </Col>
        <Col className="my-2" xxl={6} lg={6} md={6}>
          <div className={`${styles.cardBar} ${styles.bar5}`} />
          Himalayan
        </Col>
        <Col className="my-2" xxl={6} lg={6} md={6}>
          <div className={`${styles.cardBar} ${styles.bar6}`} />
          Himalayan
        </Col>
      </Row>
    </Card>
  );
}

export default MotorcycleSales;
