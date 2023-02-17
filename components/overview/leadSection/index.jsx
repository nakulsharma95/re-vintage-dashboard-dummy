import React from 'react';
import Table from 'react-bootstrap/Table';
import Link from 'next/link';
import { AiOutlineDownload } from 'react-icons/ai';
import PieBig from '../pieBig';
import PieSmall from '../pieSmall';
import styles from './style.module.scss';

function LeadSection() {
  return (
    <div className={styles.leads}>
      <div className={styles.leadsTop}>
        <PieSmall withouticon />
        <div className={`${styles.leadTable}  dashboardTable`}>
          <Table striped variant="dark">
            <tbody>
              <tr>
                <td className={styles.BoldHead}>
                  Procurement
                  <AiOutlineDownload className={styles.BoldHeadIcon} />
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
          </Table>
        </div>
      </div>
      <div className={styles.leadsMiddle}>
        <div className={`${styles.leadMidTable} dashboardTable leadTable`}>
          <Table striped bordered variant="dark">
            <thead>
              <tr>
                <th rowSpan={2}>Deal Clouser</th>
                <th colSpan={2}>Dealer</th>
                <th colSpan={2}>Sealler</th>
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

        <PieSmall icon />
        <PieSmall icon />
      </div>
      <div className={styles.leadsBottom}>
        <PieBig />
      </div>
    </div>
  );
}

export default LeadSection;
