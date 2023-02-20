import { Card, Table } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import TabDefault from '../../common/tabDefault';
import TabPrimary from '../../common/tabPrimary';

import styles from './style.module.scss';

function RegionalAnalytics() {
  return (
    <Card className={styles.card}>
      <div className={styles.cardHead}>
        <h4>Motorcycle Sales</h4>
        <AiOutlineDownload className={styles.cardIcon} />
      </div>
      <TabDefault />
      <TabPrimary title1="Highest Rated" title2="Lowest Rated" />
      <div className={styles.cardBody}>
        <div className="dashboardTable">
          <Table striped variant="dark">
            <tbody>
              <tr>
                <td>Neel Motors</td>
                <td className="text-end">4512</td>
              </tr>
              <tr>
                <td>Neel Motors</td>
                <td className="text-end"> 321</td>
              </tr>
              <tr>
                <td>Neel Motors</td>
                <td className="text-end"> 789</td>
              </tr>
              <tr>
                <td>Neel Motors</td>
                <td className="text-end">465</td>
              </tr>
              <tr>
                <td>Neel Motors</td>
                <td className="text-end">72</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </Card>
  );
}

export default RegionalAnalytics;
