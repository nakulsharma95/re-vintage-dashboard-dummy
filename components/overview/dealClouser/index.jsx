import React from 'react';
import Table from 'react-bootstrap/Table';
import styles from './style.module.scss';

function DealClouser() {
  return (
    <div className={`${styles.leadMidTable} dashboardTable leadTable`}>
      <Table striped bordered variant="dark" className={styles.tableStyle}>
        <thead>
          <tr>
            <th rowSpan={2} className="pb-4">
              Deal Clouser
            </th>
            <th colSpan={2}>Dealer</th>
            <th colSpan={2}>Seller Portal</th>
          </tr>
          <tr>
            <th>open</th>
            <th>Droped</th>
            <th>open</th>
            <th>Draoped</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Price Acceptance</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Price Acceptance</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Price Acceptance</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Price Acceptance</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Price Acceptance</td>
            <td>-</td>
            <td>Na</td>
            <td>-</td>
            <td>Na</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default DealClouser;
