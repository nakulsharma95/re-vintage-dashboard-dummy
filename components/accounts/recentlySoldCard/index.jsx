import { Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';
import Table from 'react-bootstrap/Table';
import OutlineDropdown from '../../common/buttons/OutlineDropdown';
import styles from './style.module.scss';

export default function RecentlySoldCard(props) {
  return (
    <Row>
      <Col xxl={12}>
        <Card className={styles.soldCard}>
          <Card.Body className={styles.soldCardBody}>
            <div className={styles.dataFilter}>
              <h2>Recently sold</h2>
              <div className="d-flex align-items-center">
                <OutlineDropdown
                  dropdownTitle="This Week"
                  options={['Next Week', 'Next Week', 'Next Week']}
                />
                <Link href="/" className="whiteBtn">
                  {props.TitleBtn}
                </Link>
              </div>
            </div>
            <div className="bottom-white-border mt-4 mb-2" />
            <Table className={styles.soldTable} responsive="sm">
              <thead>
                <tr className={styles.soldTableTr}>
                  <th>Motorcycle name</th>
                  <th>Order ID</th>
                  <th>Procurement Price</th>
                  <th>Selling price</th>
                  <th>Vintage warranty</th>
                  <th>Source of Sales</th>
                  <th>Selling date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hunter 350</td>
                  <td>#719261</td>
                  <td>₹1,8000</td>
                  <td>₹1,20000.</td>
                  <td>Yes</td>
                  <td>VDMP</td>
                  <td>25 Sep, 2022</td>
                </tr>
                <tr>
                  <td>Classic 350</td>
                  <td>#564897</td>
                  <td>₹2,5000.</td>
                  <td>₹2,50,000.</td>
                  <td>No</td>
                  <td>VDMP</td>
                  <td>10 Sep, 2022l</td>
                </tr>
                <tr>
                  <td>Continental GT 650</td>
                  <td>#123458</td>
                  <td>₹1,8000.</td>
                  <td>₹1,20000.</td>
                  <td>Yes</td>
                  <td>Self</td>
                  <td>5 Sep, 2022</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
