import { Row, Col, Card } from 'react-bootstrap';
import OutlineDropdown from '../../common/buttons/OutlineDropdown';
import styles from './style.module.scss';

export default function OverallDataCard() {
  return (
    <>
      <div className={styles.dataFilter}>
        <h2>Overall Data</h2>
        <div className="d-flex align-items-center">
          <span className="mx-2">Filter By:</span>
          <OutlineDropdown
            dropdownTitle="This year"
            options={['Next year', 'Next year', 'Next year']}
          />
        </div>
      </div>
      <Row>
        <Col xxl={8} xl={8}>
          <Card className={styles.OverallCard}>
            <Card.Body className={styles.OverallCardBody}>
              <h3>Revenue vs Orders</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={4} xl={4}>
          <Card className={styles.OverallCard}>
            <Card.Body className={styles.OverallCardBody}>
              <h3>Yearly sale by model</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
