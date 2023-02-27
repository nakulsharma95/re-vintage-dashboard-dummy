import React from 'react';
import { Row, Col, Card, Tabs, Tab } from 'react-bootstrap';
import Link from 'next/link';

import { AiOutlineDownload } from 'react-icons/ai';
import styles from './style.module.scss';

function InventoryTab() {
  return (
    <div>
      <Row>
        <Col xxl={12} lg={12} md={12}>
          <Card className="dark-card-style mt-3">
            <div className="heading">
              <h3 className="title3">Retail Motorcycle</h3>
              <AiOutlineDownload className="downloadIcon" size={26} />
            </div>
            <Tabs
              className="default-tab-style mb-3 mt-3"
              defaultActiveKey="contentUpload"
              id="fill-tab-example"
              fill
            >
              <Tab eventKey="contentUpload" title="Content Upload (12)">
                <div className={`${styles.inventoryTabTable}  dashboardTable`}>
                  <table className={`${styles.tableStyle} table table-odd`}>
                    <tbody>
                      <tr>
                        <th>Reference ID</th>
                        <th>Started on</th>
                        <th>Model</th>
                        <th>Estimated Price</th>
                        <th>Actions</th>
                      </tr>
                      <tr>
                        <td>FB29FH9219HR1</td>
                        <td>Thu, 19 Nov at 08:30AM</td>
                        <td>Classic 350</td>
                        <td>₹1,25,000.00 - ₹1,30,000.00</td>
                        <td>
                          {' '}
                          <Link href="/"> View details</Link>
                        </td>
                      </tr>
                      <tr>
                        <td>FB29FH9219HR1</td>
                        <td>Thu, 19 Nov at 08:30AM</td>
                        <td>Classic 350</td>
                        <td>₹1,25,000.00 - ₹1,30,000.00</td>
                        <td>
                          {' '}
                          <Link href="/"> View details</Link>
                        </td>
                      </tr>
                      <tr>
                        <td>FB29FH9219HR1</td>
                        <td>Thu, 19 Nov at 08:30AM</td>
                        <td>Classic 350</td>
                        <td>₹1,25,000.00 - ₹1,30,000.00</td>
                        <td>
                          {' '}
                          <Link href="/"> View details</Link>
                        </td>
                      </tr>
                      <tr>
                        <td>FB29FH9219HR1</td>
                        <td>Thu, 19 Nov at 08:30AM</td>
                        <td>Classic 350</td>
                        <td>₹1,25,000.00 - ₹1,30,000.00</td>
                        <td>
                          {' '}
                          <Link href="/"> View details</Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Tab>
              <Tab eventKey="underApproval " title="Under Approval (31)" />
              <Tab eventKey="activeListing" title="Active Listing (25)" />
              <Tab eventKey="inactiveListing" title="Inactive Listing (5)" />
            </Tabs>
          </Card>
        </Col>
      </Row>

      <div className={styles.graphCards}>
        <Row>
          <Col lg={4}>
            <div className={styles.graphCard} />
          </Col>
          <Col lg={4}>
            <div className={styles.graphCard} />
          </Col>
          <Col lg={4}>
            <div className={styles.graphCard} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default InventoryTab;
