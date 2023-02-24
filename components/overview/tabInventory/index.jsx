import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CrePerformanceMatrix from '../../../components/cre-management/crePerformanceMatrix';
import Table from 'react-bootstrap/Table';
import Link from 'next/link';

import styles from './style.module.scss';

function InventoryTab() {
  return (
    <div>
      {/* <Row>
        <Col xxl={12} lg={12} md={12}>
          <CrePerformanceMatrix
            title1="Under Refurbishment (12)"
            title2="Pending Evaluation (31)"
            title3="Pending Content Upload (25)"
            title4="Pending Admin Approval (5)"
            creTitle="Inventory"
          />
        </Col>
      </Row> */}
      <div className={`${styles.inventoryTabTable}  dashboardTable`}>
        <Table striped bordered variant="dark">         
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
              <td> <Link href="/"> View details</Link></td>
            </tr>
            <tr>
              <td>FB29FH9219HR1</td>
              <td>Thu, 19 Nov at 08:30AM</td>
              <td>Classic 350</td>
              <td>₹1,25,000.00 - ₹1,30,000.00</td>
              <td> <Link href="/"> View details</Link></td>
            </tr>
            <tr>
              <td>FB29FH9219HR1</td>
              <td>Thu, 19 Nov at 08:30AM</td>
              <td>Classic 350</td>
              <td>₹1,25,000.00 - ₹1,30,000.00</td>
              <td> <Link href="/"> View details</Link></td>
            </tr>
            <tr>
              <td>FB29FH9219HR1</td>
              <td>Thu, 19 Nov at 08:30AM</td>
              <td>Classic 350</td>
              <td>₹1,25,000.00 - ₹1,30,000.00</td>
              <td> <Link href="/"> View details</Link></td>
            </tr>
            
          </tbody>
        </Table>
      </div>

      <div className={styles.graphCards}>
       <Row>
        <Col lg={4}>
        <div className={styles.graphCard}>
          
        </div>
        </Col>
        <Col lg={4}>
        <div className={styles.graphCard}>
          
        </div>
        </Col>
        <Col lg={4}>
        <div className={styles.graphCard}>
          
        </div>
        </Col>

       </Row>
      </div>
    </div>
  );
}

export default InventoryTab;
