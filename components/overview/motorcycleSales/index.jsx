import { Card, Col, Row } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import HorizontalBarChart from '../../charts/horizontalBarChart';

import styles from './style.module.scss';

const data = [
  [
    'Element',
    'Density',
    { role: 'style' },
    {
      sourceColumn: 0,
      role: 'annotation',
      type: 'string',
      calc: 'stringify',
    },
  ],
  ['', 100, '#F28823', null],
  ['', 90, '#F0CB2D', null],
  ['', 80, '#F5B82A', null],
  ['', 70, '#403E3E', null],
  ['', 60, '#DA291C', null],
  ['', 21.45, '#AAAAAA', null],
];

const options = {
  title: '',
  bar: { groupWidth: '70%' },
  legend: { position: 'none' },
  backgroundColor: 'transparent',
  hAxis: {
    gridlines: {
      interval: 0,
    },
    title: '',
    titleTextStyle: {
      color: '#fff',
    },
    minorGridlines: {
      color: '#494949',
    },
    textStyle: { color: '#FFF' },
  },
  vAxis: {
    title: '',
    titleTextStyle: {
      color: '#fff',
    },
    gridlines: {
      interval: 0,
    },
    minValue: 0,
    minorGridlines: {
      color: '#494949',
    },
    textStyle: { color: '#FFF' },
  },
};
function MotorcycleSales() {
  return (
    <Card className={styles.card}>
      <div className={`${styles.cardHead} flex-column`}>
        <div className="d-flex justify-content-between">
          <h4>Motorcycle Sales</h4>
          <AiOutlineDownload className={styles.cardIcon} />
        </div>
        <HorizontalBarChart
          data={data}
          options={options}
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
