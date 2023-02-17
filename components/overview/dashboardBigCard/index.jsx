import { Card, Col, Row, Table } from 'react-bootstrap';
import { AiFillStar, AiOutlineDownload } from 'react-icons/ai';
import HorizontalBarChart from '../../charts/horizontalBarChart';
import TabDefault from '../../common/tabDefault';
import TabPrimary from '../../common/tabPrimary';

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
function dashboardBigCard() {
  return (
    <Row>
      <Col xxl={4} lg={6} md={6}>
        <Card className={styles.card}>
          <div className={`${styles.cardHead} flex-column`}>
            <div className="d-flex justify-content-between">
              <h4>Motorcycle Sales</h4>
              <AiOutlineDownload className={styles.cardIcon} />
            </div>
            <HorizontalBarChart data={data} options={options} />
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
      </Col>
      <Col xxl={4} lg={6} md={6}>
        <Card className={styles.card}>
          <div className={styles.cardHead}>
            <h4>Dealer Perfomance</h4>
            <AiOutlineDownload className={styles.cardIcon} />
          </div>
          <TabDefault />
          <TabPrimary title1="Highest Rated" title2="Lowest Rated" />

          <div className={styles.cardBody}>
            <div className="dashboardTable">
              <Table striped variant="dark">
                <tbody>
                  <tr>
                    <td>Neel Motors</td>
                    <td className="text-end">
                      <AiFillStar className={styles.cardBody_star} /> 4.5
                    </td>
                  </tr>
                  <tr>
                    <td>Neel Motors</td>
                    <td className="text-end">
                      <AiFillStar className={styles.cardBody_star} /> 4.5
                    </td>
                  </tr>
                  <tr>
                    <td>Neel Motors</td>
                    <td className="text-end">
                      <AiFillStar className={styles.cardBody_star} /> 4.5
                    </td>
                  </tr>
                  <tr>
                    <td>Neel Motors</td>
                    <td className="text-end">
                      <AiFillStar className={styles.cardBody_star} /> 4.5
                    </td>
                  </tr>
                  <tr>
                    <td>Neel Motors</td>
                    <td className="text-end">
                      <AiFillStar className={styles.cardBody_star} /> 4.5
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Card>
      </Col>
      <Col xxl={4} lg={6} md={6}>
        <Card className={styles.card}>
          <div className={styles.cardHead}>
            <h4>Motorcycle Sales</h4>

            <AiOutlineDownload className={styles.cardIcon} />
          </div>
          <TabDefault />
          <TabPrimary title1="Highest Rated" title2="Lowest Rated" />
          <div className={styles.cardBody}>
            <div className="dashboardTable">
              <Table striped variant="dark">
                <tbody>
                  <tr>
                    <td>Neel Motors</td>
                    <td className="text-end">4512</td>
                  </tr>
                  <tr>
                    <td>Neel Motors</td>
                    <td className="text-end"> 321</td>
                  </tr>
                  <tr>
                    <td>Neel Motors</td>
                    <td className="text-end"> 789</td>
                  </tr>
                  <tr>
                    <td>Neel Motors</td>
                    <td className="text-end">465</td>
                  </tr>
                  <tr>
                    <td>Neel Motors</td>
                    <td className="text-end">72</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
}

export default dashboardBigCard;
