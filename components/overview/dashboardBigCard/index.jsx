import { Card, Col, Row, Table } from 'react-bootstrap';
import { AiFillStar, AiOutlineDownload } from 'react-icons/ai';
import TabDefault from '../../common/tabDefault';
import TabPrimary from '../../common/tabPrimary';

import styles from './style.module.scss';

function dashboardBigCard() {
  return (
    <Row>
      <Col xxl={4} lg={6} md={6}>
        <Card className={styles.card}>
          <div className={styles.cardHead}>
            <h4>Motorcycle Sales</h4>
            <AiOutlineDownload className={styles.cardIcon} />
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
