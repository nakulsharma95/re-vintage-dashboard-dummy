import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CrePerformanceMatrix from '../../../components/cre-management/crePerformanceMatrix';
import Table from 'react-bootstrap/Table';

import styles from './style.module.scss';
import PieSmall from '../pieSmall';

function RetailsTab() {
  return (
    <div>
      <Row>
        <Col xxl={12} lg={12} md={12}>
          <CrePerformanceMatrix
            title1="Content Upload (12)"
            title2="Under Approval (31)"
            title3="Active Listing (25)"
            title4="Inactive Listing (5)"
            creTitle="Retail Motorcycle"
          />
        </Col>
      </Row>

      <div className={styles.retailFooter}>
        <div className={`${styles.tabRetailsTable}  dashboardTable`}>
          <Table striped bordered variant="dark" className={styles.tableStyle}>
            <thead>
              <tr>
                <th colSpan={5}>
                  <div className="d-flex justify-content-between">
                    <span>Test Ride Requests</span>
                    {/* <OutlineDropdown dropdownTitle="1 Month" dropdownMenuTitle="2 Month" /> */}
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
          </Table>
        </div>
        <div className={styles.tabRetailsPie}>
          <PieSmall withouticon />
        </div>
      </div>
    </div>
  );
}

export default RetailsTab;
