import { Card, Tab, Tabs } from 'react-bootstrap';
import { AiFillStar, AiOutlineDownload } from 'react-icons/ai';
import DownloadButton from '../../common/buttons/downloadButton';

import styles from './style.module.scss';

function DealerPerfomance() {
  return (
    <Card className={styles.card}>
      <div className={styles.cardHead}>
        <h4>Dealer Perfomance</h4>
        <DownloadButton
          buttonLink="/dummy.pdf"
          iconUrl={<AiOutlineDownload className={styles.cardIcon} />}
        />
      </div>
      <Tabs
        className="default-tab-style mb-3 mt-3"
        defaultActiveKey="retail"
        id="fill-tab-example"
        fill
      >
        <Tab eventKey="retail" title="Retail">
          <div className="custom-tab-style">
            <Tabs
              className="mb-3"
              defaultActiveKey="title1"
              id="uncontrolled-tab-example"
              tabclassname="custom-tab-nav"
            >
              <Tab eventKey="title1" title="Highest Rated">
                <div className={styles.cardBody}>
                  <div className="dashboardTable">
                    <table className={`${styles.tableStyle} table table-odd`}>
                      <tbody>
                        <tr>
                          <td>Neel Motors</td>
                          <td className="text-end">
                            <AiFillStar className={styles.cardBodyStar} /> 4.5
                          </td>
                        </tr>
                        <tr>
                          <td>Neel Motors</td>
                          <td className="text-end">
                            <AiFillStar className={styles.cardBodyStar} /> 4.5
                          </td>
                        </tr>
                        <tr>
                          <td>Neel Motors</td>
                          <td className="text-end">
                            <AiFillStar className={styles.cardBodyStar} /> 4.5
                          </td>
                        </tr>
                        <tr>
                          <td>Neel Motors</td>
                          <td className="text-end">
                            <AiFillStar className={styles.cardBodyStar} /> 4.5
                          </td>
                        </tr>
                        <tr>
                          <td>Neel Motors</td>
                          <td className="text-end">
                            <AiFillStar className={styles.cardBodystar} /> 4.5
                          </td>
                        </tr>
                        <tr>
                          <td>Neel Motors</td>
                          <td className="text-end">
                            <AiFillStar className={styles.cardBodyStar} /> 4.5
                          </td>
                        </tr>
                        <tr>
                          <td>Neel Motors</td>
                          <td className="text-end">
                            <AiFillStar className={styles.cardBodyStar} /> 4.5
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="title2" title="Lowest Rated">
                <div className={styles.cardBody}>
                  <div className="dashboardTable">
                    <table className={`${styles.tableStyle} table table-odd`}>
                      <tbody>
                        <tr>
                          <td>Neel Motors</td>
                          <td className="text-end">
                            <AiFillStar className={styles.cardBodystar} /> 2.5
                          </td>
                        </tr>
                        <tr>
                          <td>Neel Motors</td>
                          <td className="text-end">
                            <AiFillStar className={styles.cardBodystar} /> 3.5
                          </td>
                        </tr>
                        <tr>
                          <td>Neel Motors</td>
                          <td className="text-end">
                            <AiFillStar className={styles.cardBodystar} /> 1.5
                          </td>
                        </tr>
                        <tr>
                          <td>Neel Motors</td>
                          <td className="text-end">
                            <AiFillStar className={styles.cardBodystar} /> 2.5
                          </td>
                        </tr>
                        <tr>
                          <td>Neel Motors</td>
                          <td className="text-end">
                            <AiFillStar className={styles.cardBodystar} /> 3.5
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Tab>
        <Tab eventKey="inventory" title="Inventory" />
        <Tab eventKey="revenue" title="Revenue" />
      </Tabs>
    </Card>
  );
}

export default DealerPerfomance;
