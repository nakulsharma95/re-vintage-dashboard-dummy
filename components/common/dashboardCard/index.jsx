import { Card, Col, Row, Form } from 'react-bootstrap';
import { TbTrendingUp } from 'react-icons/tb';
import styles from './style.module.scss';

export default function DashboardCard() {
  return (
    <Row>
      <Col xxl={3} lg={6} md={6}>
        <Card className={styles.dashboardCardMain}>
          <div className={`${styles.cardBody} ${styles.bgRed} py-2`}>
            <div className={`${styles.cardHead}`}>
              <h2>Total</h2>
              <p>32</p>
            </div>
            <div className={`${styles.divider} w-100`} />
            <div className={`${styles.cardFooter} pt-2 w-100`}>
              <h3>Overall Growth</h3>
              <div>
                <span className="mx-2">12%</span>
                <TbTrendingUp className={styles.customIcon} size={15} />
              </div>
            </div>
          </div>
        </Card>
      </Col>

      <Col xxl={3} lg={6} md={6}>
        <Card className={styles.dashboardCardMain}>
          <div className={`${styles.cardBody} ${styles.bgBlack} py-2`}>
            <div className={`${styles.cardHead}`}>
              <div className="d-flex justify-content-between">
                <h2>
                  Content Approval <br /> Pending
                </h2>
                <Form.Group className={styles.dashMonthSelect}>
                  <Form.Select>
                    <option>1 Month</option>
                    <option>2 Month</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <p>12</p>
            </div>
            <div className={`${styles.divider} w-100`} />
            <div className={`${styles.cardFooter} pt-2 w-100`}>
              <h3>Received This Week</h3>
              <div>
                <span className="mx-2">8</span>
              </div>
            </div>
          </div>
        </Card>
      </Col>

      <Col xxl={3} lg={6} md={6}>
        <Card className={styles.dashboardCardMain}>
          <div className={`${styles.cardBody} ${styles.bgDarkGray} py-2`}>
            <div className={`${styles.cardHead}`}>
              <div className="d-flex justify-content-between">
                <h2>
                  Content Upload
                  <br /> Pending
                </h2>
                <Form.Group className={styles.dashMonthSelect}>
                  <Form.Select>
                    <option>1 Month</option>
                    <option>2 Month</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <p>8</p>
            </div>
          </div>
        </Card>
      </Col>

      <Col xxl={3} lg={6} md={6}>
        <Card className={styles.dashboardCardMain}>
          <div className={`${styles.cardBody} ${styles.bgBlack} py-2`}>
            <div className={`${styles.cardHead}`}>
              <div className="d-flex justify-content-between">
                <h2>Under Refurbishment</h2>
                <Form.Group className={styles.dashMonthSelect}>
                  <Form.Select>
                    <option>1 Month</option>
                    <option>2 Month</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <p>12</p>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
}
