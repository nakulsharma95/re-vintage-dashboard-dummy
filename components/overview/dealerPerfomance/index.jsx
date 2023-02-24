import { Card, Table ,Tabs,Tab } from 'react-bootstrap';
import { AiFillStar, AiOutlineDownload } from 'react-icons/ai';
import TabDefault from '../../common/tabDefault';

import styles from './style.module.scss';

function DealerPerfomance() {
  return (
    <Card className={styles.card}>
      <div className={styles.cardHead}>
        <h4>Dealer Perfomance</h4>
        <AiOutlineDownload className={styles.cardIcon} />
      </div>
      <TabDefault />
      <div className="custom-tab-style">
        <Tabs
          className="mb-3"
          defaultActiveKey="title1"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="title1" title="Highest Rated" >
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
          </Tab>
          <Tab eventKey="title2" title="Lowest Rated" >
          <div className={styles.cardBody}>
        <div className="dashboardTable">
          <Table striped variant="dark" className={styles.tableStyle}>
            <tbody>
              <tr>
                <td>Neel Motors</td>
                <td className="text-end">
                  <AiFillStar className={styles.cardBody_star} /> 2.5
                </td>
              </tr>
              <tr>
                <td>Neel Motors</td>
                <td className="text-end">
                  <AiFillStar className={styles.cardBody_star} /> 3.5
                </td>
              </tr>
              <tr>
                <td>Neel Motors</td>
                <td className="text-end">
                  <AiFillStar className={styles.cardBody_star} /> 1.5
                </td>
              </tr>
              <tr>
                <td>Neel Motors</td>
                <td className="text-end">
                  <AiFillStar className={styles.cardBody_star} /> 2.5
                </td>
              </tr>
              <tr>
                <td>Neel Motors</td>
                <td className="text-end">
                  <AiFillStar className={styles.cardBody_star} /> 3.5
                </td>
              </tr>
             
              
            </tbody>
          </Table>
        </div>
          </div>
          </Tab>
                
        </Tabs>
      </div>

     
    </Card>
  );
}

export default DealerPerfomance;
