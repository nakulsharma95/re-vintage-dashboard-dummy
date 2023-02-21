import { Card, Table } from 'react-bootstrap';
import { AiFillStar, AiOutlineDownload } from 'react-icons/ai';
import TabDefault from '../../common/tabDefault';
import TabPrimary from '../../common/tabPrimary';

import styles from './style.module.scss';

function DealerPerfomance() {
  return (
    <Card className={styles.card}>
      <div className={styles.cardHead}>
        <h4>Dealer Perfomance</h4>
        <AiOutlineDownload className={styles.cardIcon} />
      </div>
      <TabDefault />
      <TabPrimary title1="Highest Rated" title2="Lowest Rated" />

      <div className={styles.cardBody}>
        <div className="dashboardTable">
          <Table striped variant="dark" className={styles.tableStyle}>
            <tbody>
              <tr>
                <td>Neel Motors</td>
                <td className="text-end">
                  <AiFillStar className={styles.cardBody_star} /> 4.5
                </td>
              </tr>
              <tr>
                <td>Neel Motors</td>
                <td className="text-end">
                  <AiFillStar className={styles.cardBody_star} /> 4.5
                </td>
              </tr>
              <tr>
                <td>Neel Motors</td>
                <td className="text-end">
                  <AiFillStar className={styles.cardBody_star} /> 4.5
                </td>
              </tr>
              <tr>
                <td>Neel Motors</td>
                <td className="text-end">
                  <AiFillStar className={styles.cardBody_star} /> 4.5
                </td>
              </tr>
              <tr>
                <td>Neel Motors</td>
                <td className="text-end">
                  <AiFillStar className={styles.cardBody_star} /> 4.5
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </Card>
  );
}

export default DealerPerfomance;
