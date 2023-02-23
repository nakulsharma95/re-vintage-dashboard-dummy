import React from 'react';
import Table from 'react-bootstrap/Table';
import styles from './style.module.scss';

function DealClouser() {
  return (
    <div className={`${styles.leadMidTable} dashboardTable dealClouser leadTable`}>
      <Table striped bordered variant="dark" className={styles.tableStyle}>
        {/* <thead>
          <tr>
            <th rowSpan={2} className="pb-4">
              Deal Clouser
            </th>
            <th colSpan={2}>Dealer</th>
            <th colSpan={2}>Seller Portal</th>
          </tr>
          <tr>
            <td>open</td>
            <td>Droped</td>
            <td>open</td>
            <td>Draoped</td>
          </tr>
        </thead> */}
        <tbody>
        <tr>
            <th rowSpan={2} className="pt-4">
              Deal Clouser
            </th>
            <th colSpan={2}>Dealer</th>
            <th colSpan={2}>Seller Portal</th>
          </tr>
          <tr>
            <td>open</td>
            <td>Droped</td>
            <td>open</td>
            <td>Draoped</td>
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
