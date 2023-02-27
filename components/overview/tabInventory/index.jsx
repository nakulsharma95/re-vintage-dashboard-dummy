import React from 'react';
import { Row, Col, Card, Tabs, Tab } from 'react-bootstrap';
import Link from 'next/link';

import { AiOutlineDownload } from 'react-icons/ai';
import styles from './style.module.scss';
import DoughnutChart from '../../charts/doughnutChart';
import DownloadButton from '../../common/buttons/downloadButton';

function InventoryTab() {
  const optionsDoughnut = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontSize: 20,
          color: 'white',
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 15,
        },
      },
    },
  };
  const labels = [
    'Listed (Active+Inactive+OLX)',
    'Under Refurbishment',
    'Pending Evaluation',
    'Pending Content Upload',
    'Pending Approval',
  ];
  const doughnutChartData = {
    labels,
    datasets: [
      {
        label: 'My First Dataset',
        data: [100, 300, 100, 80, 120],
        backgroundColor: [
          '#DA291C',
          '#D2635B',
          '#F1DF67',
          '#7D7D7D',
          '#E59740',
        ],
        hoverOffset: 4,
        borderColor: ['#686868'],
        borderWidth: 0.2,
      },
    ],
  };
  return (
    <div>
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
              <Tab eventKey="contentUpload" title="Under Refurbishment (12)">
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
              <Tab eventKey="underApproval " title="Pending Evaluation (31)">
                <h4>No data found</h4>
              </Tab>
              <Tab eventKey="activeListing" title="Pending Content Upload (25)">
                <h4>No data found</h4>
              </Tab>
              <Tab
                eventKey="inactiveListing"
                title="Pending Admin Approval (5)"
              >
                <h4>No data found</h4>
              </Tab>
            </Tabs>
          </Card>
        </Col>
      </Row>

      <div className={styles.graphCards}>
        <div className={styles.graphCard}>
          <div className="d-flex justify-content-between mb-3">
            <h5>Total Inventory</h5>
            <DownloadButton
              buttonLink="/dummy.pdf"
              iconUrl={<AiOutlineDownload className={styles.cardIcon} />}
            />
          </div>
          <DoughnutChart
            options={optionsDoughnut}
            data={doughnutChartData}
            size={200}
          />
        </div>

        <div className={styles.graphCard}>
          <div className="d-flex justify-content-between mb-3">
            <h5>Total Inventory</h5>
            <DownloadButton
              buttonLink="/dummy.pdf"
              iconUrl={<AiOutlineDownload className={styles.cardIcon} />}
            />
          </div>
          <DoughnutChart
            options={optionsDoughnut}
            data={doughnutChartData}
            size={200}
          />
        </div>

        <div className={styles.graphCard}>
          <div className="d-flex justify-content-between mb-3">
            <h5>Total Listed</h5>
            <DownloadButton
              buttonLink="/dummy.pdf"
              iconUrl={<AiOutlineDownload className={styles.cardIcon} />}
            />
          </div>
          <DoughnutChart
            options={optionsDoughnut}
            data={doughnutChartData}
            size={200}
          />
        </div>
      </div>
    </div>
  );
}

export default InventoryTab;
