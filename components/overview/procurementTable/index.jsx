import React from 'react';
import Link from 'next/link';
import { FiDownload } from 'react-icons/fi';

import styles from './style.module.scss';

function ProcurementTable() {
  return (
    <div className={`${styles.leadTable} dashboardTable`}>
      <table className={`${styles.tableStyle} table table-odd`}>
        <tbody>
          <tr>
            <td className={styles.boldHead}>
              Procurement
              <FiDownload className={styles.boldHeadIcon} />
            </td>
            <td>Open</td>
            <td>Cancelled</td>
            <td>Dropped</td>
            <td>Total</td>
            <td>Action</td>
          </tr>
          <tr>
            <td>Pratial Lead</td>
            <td>5</td>
            <td>NA</td>
            <td>6</td>
            <td>7</td>
            <td>
              <Link href="/">View all</Link>
            </td>
          </tr>
          <tr>
            <td>Pratial Lead</td>
            <td>5</td>
            <td>NA</td>
            <td>6</td>
            <td>7</td>
            <td>
              <Link href="/">View all</Link>
            </td>
          </tr>
          <tr>
            <td>Pratial Lead</td>
            <td>5</td>
            <td>NA</td>
            <td>6</td>
            <td>7</td>
            <td>
              <Link href="/">View all</Link>
            </td>
          </tr>
          <tr>
            <td>Pratial Lead</td>
            <td>5</td>
            <td>NA</td>
            <td>6</td>
            <td>7</td>
            <td>
              <Link href="/">View all</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProcurementTable;
