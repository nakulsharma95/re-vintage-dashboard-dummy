import React from 'react';
import Table from 'react-bootstrap/Table';
import Link from 'next/link';
import PieBig from '../pieBig';

import styles from './style.module.scss';

function NonReLeadSection() {
  return (
    <div className={styles.nonLeadSection}>
      <h4>Non-Re Lead</h4>
      <div className={styles.nonLeadtop}>
        <PieBig />
        <div className={`${styles.nonleadTable}  dashboardTable`}>
          <Table striped bordered variant="dark" className={styles.tableStyle}>
            <thead>
              <tr>
                <th colSpan={5}>Non-RE VDMP Enquiries</th>
              </tr>
              <tr>
                <th>Refrence</th>
                <th>Brand</th>
                <th>Modal</th>
                <th>Year</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link href="/">FB29FH9212</Link>
                </td>
                <td>Bajaj</td>
                <td>pulsar 180</td>
                <td>2017</td>
                <td>
                  Rishbh singh <br />
                  +91987654320
                </td>
              </tr>
              <tr>
                <td>
                  <Link href="/">FB29FH9212</Link>
                </td>
                <td>Bajaj</td>
                <td>pulsar 180</td>
                <td>2017</td>
                <td>
                  Rishbh singh <br />
                  +91987654320
                </td>
              </tr>
              <tr>
                <td>
                  <Link href="/">FB29FH9212</Link>
                </td>
                <td>Bajaj</td>
                <td>pulsar 180</td>
                <td>2017</td>
                <td>
                  Rishbh singh <br />
                  +91987654320
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className={styles.nonLeadBottom}>
        <PieBig />
        <div className={styles.nonLeadGraph} />
      </div>
    </div>
  );
}

export default NonReLeadSection;
