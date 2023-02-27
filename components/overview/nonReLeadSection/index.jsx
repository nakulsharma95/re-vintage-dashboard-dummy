import React from 'react';
import Link from 'next/link';
import PieBig from '../pieBig';
import LineChart from '../../charts/lineChart';
import OutlineDropdown from '../../common/buttons/OutlineDropdown';

import styles from './style.module.scss';

function NonReLeadSection() {
  // LIne CHart
  const optionLineChart = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          border: {
            dash: [2, 1],
          },
          color: '#575757',
        },
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const labels = ['From Web', 'MIY', 'Instore', 'VDMP', 'From App'];

  const lineChartData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        borderColor: '#C93B2B',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        data: [205, 59, 80, 81, 56, 55, 40, 81, 56, 55],
      },
      {
        label: 'Dataset 2',
        borderColor: '#52AF3C',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        data: [195, 69, 20, 91, 106, 55, 20, 45, 69, 20],
      },
    ],
  };
  return (
    <div className={styles.nonLeadSection}>
      <h4>Non-Re Lead</h4>
      <div className={styles.nonLeadtop}>
        <PieBig title="Non-RE Number of Enquiries" />
        <div className="dashboardTable w-full">
          <table className="table m-0">
            <thead>
              <tr>
                <th colSpan={5}>
                  <div className="d-flex justify-content-between">
                    <span>Non-RE VDMP Enquiries</span>
                    <OutlineDropdown
                      dropdownTitle="1 Month"
                      dropdownMenuTitle="2 Month"
                    />
                  </div>
                </th>
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
          </table>
        </div>
      </div>
      <div className={styles.nonLeadBottom}>
        <PieBig title="Non-RE Exchange Enquiries" />
        <div className={styles.nonLeadGraph}>
          <h5>Non-RE Exchange Enquiries</h5>
          <LineChart options={optionLineChart} data={lineChartData} />
        </div>
      </div>
    </div>
  );
}

export default NonReLeadSection;
