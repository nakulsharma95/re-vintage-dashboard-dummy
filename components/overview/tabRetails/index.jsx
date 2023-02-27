import React from 'react';
import { Row, Col, Card, Tabs, Tab } from 'react-bootstrap';
import Link from 'next/link';
import { AiOutlineDownload } from 'react-icons/ai';
import PieSmall from '../pieSmall';
import DownloadButton from '../../common/buttons/downloadButton';

import styles from './style.module.scss';

function RetailsTab() {
  return (
    <div className={styles.retailTable}>
      <Row>
        <Col xxl={12} lg={12} md={12}>
          <Card className="dark-card-style mt-3">
            <div className="heading">
              <h3 className="title3">Retail Motorcycle</h3>
              <DownloadButton
                buttonLink="/dummy.pdf"
                iconUrl={
                  <AiOutlineDownload className="downloadIcon" size={26} />
                }
              />
            </div>
            <Tabs
              className="default-tab-style mb-3 mt-3"
              defaultActiveKey="contentUpload"
              fill
            >
              <Tab eventKey="contentUpload" title="Content Upload (12)">
                <div className={`${styles.inventoryTabTable}  dashboardTable`}>
                  <table className={`${styles.tableStyle} table table-odd`}>
                    <tbody>
                      <tr>
                        <td>Hunter 350</td>
                        <td>- CNCQCF01291H8</td>
                        <td align="right" width="65%">
                          <Link href="/"> View details</Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Scram 411</td>
                        <td>- CNCQCF01291H8</td>
                        <td align="right" width="65%">
                          <Link href="/"> View details</Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Himalayan</td>
                        <td>- CNCQCF01291H8</td>
                        <td align="right" width="65%">
                          <Link href="/"> View details</Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Standard 500</td>
                        <td>- CNCQCF01291H8</td>
                        <td align="right" width="65%">
                          <Link href="/"> View details</Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Hunter 350</td>
                        <td>- CNCQCF01291H8</td>
                        <td align="right" width="65%">
                          <Link href="/"> View details</Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Scram 411</td>
                        <td>- CNCQCF01291H8</td>
                        <td align="right" width="65%">
                          <Link href="/"> View details</Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Himalayan</td>
                        <td>- CNCQCF01291H8</td>
                        <td align="right" width="65%">
                          <Link href="/"> View details</Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Standard 500</td>
                        <td>- CNCQCF01291H8</td>
                        <td align="right" width="65%">
                          <Link href="/"> View details</Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Tab>
              <Tab eventKey="underApproval " title="Under Approval (31)">
                <h4>No data found</h4>
              </Tab>
              <Tab eventKey="activeListing" title="Active Listing (25)">
                <h4>No data found</h4>
              </Tab>
              <Tab eventKey="inactiveListing" title="Inactive Listing (5)">
                <h4>No data found</h4>
              </Tab>
            </Tabs>
          </Card>
        </Col>
      </Row>

      <div className={styles.retailFooter}>
        <Row>
          <Col lg={8}>
            <div className={`${styles.tabRetailsTable} dashboardTable`}>
              <table className={`${styles.tableStyle} table table-even`}>
                <thead>
                  <tr>
                    <th colSpan={5}>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between">
                          <span>Test Ride Requests</span>
                        </div>
                        <DownloadButton
                          buttonLink="/dummy.pdf"
                          iconUrl={
                            <AiOutlineDownload
                              className="downloadIcon"
                              size={26}
                            />
                          }
                        />
                      </div>
                    </th>
                  </tr>
                  <tr>
                    <th>Reference ID</th>
                    <th>Date & Time</th>
                    <th>Model</th>
                    <th>Name</th>
                    <th>Contact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>FB29FH9219HR1</td>
                    <td>Thu, 19 Nov at 08:30AM</td>
                    <td>Classic 350</td>
                    <td>Rishbh singh</td>
                    <td>+91987654320</td>
                  </tr>
                  <tr>
                    <td>FB29FH9219HR1</td>
                    <td>Thu, 19 Nov at 08:30AM</td>
                    <td>Classic 350</td>
                    <td>Rishbh singh</td>
                    <td>+91987654320</td>
                  </tr>
                  <tr>
                    <td>FB29FH9219HR1</td>
                    <td>Thu, 19 Nov at 08:30AM</td>
                    <td>Classic 350</td>
                    <td>Rishbh singh</td>
                    <td>+91987654320</td>
                  </tr>
                  <tr>
                    <td>FB29FH9219HR1</td>
                    <td>Thu, 19 Nov at 08:30AM</td>
                    <td>Classic 350</td>
                    <td>Rishbh singh</td>
                    <td>+91987654320</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>

          <Col lg={4}>
            <PieSmall
              containerStyle={styles.containerPieStyle}
              title="Sold & Booked"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default RetailsTab;
