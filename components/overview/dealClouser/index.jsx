import React from 'react';
import styles from './style.module.scss';

function DealClouser() {
  return (
    <div className="dashboardTable">
      <table className={`${styles.tableStyle} table table-even m-0`}>
        <tbody>
          <tr className={styles.bgGray28Table}>
            <th rowSpan={2} className="pt-4 align-middle">
              Deal Clouser
            </th>
            <th colSpan={2}>Dealer</th>
            <th colSpan={2}>Seller Portal</th>
          </tr>
          <tr className={styles.bgGray28Table}>
            <td>open</td>
            <td>Droped</td>
            <td>open</td>
            <td>Droped</td>
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
      </table>
    </div>
  );
}

export default DealClouser;
