import { Card, Tabs, Tab } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import DownloadButton from '../../common/buttons/downloadButton';

import styles from './style.module.scss';

function RegionalAnalytics() {
  return (
    <Card className={styles.card}>
      <div className={styles.cardHead}>
        <h4>Regional Analytics</h4>
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
              tabClassName="custom-tab-nav"
            >
              <Tab eventKey="title1" title="Highest Rated">
                <div className={styles.cardBody}>
                  <div className="dashboardTable">
                    <table className="table table-odd">
                      <tbody>
                        <tr>
                          <td>Delhi</td>
                          <td className="text-end">4512</td>
                        </tr>
                        <tr>
                          <td>Rajasthan</td>
                          <td className="text-end"> 321</td>
                        </tr>
                        <tr>
                          <td>Goa</td>
                          <td className="text-end"> 789</td>
                        </tr>
                        <tr>
                          <td>Kerala</td>
                          <td className="text-end">465</td>
                        </tr>
                        <tr>
                          <td>Maharashtra</td>
                          <td className="text-end">72</td>
                        </tr>
                        <tr>
                          <td>Tamil Nadu</td>
                          <td className="text-end">63</td>
                        </tr>
                        <tr>
                          <td>Haryana</td>
                          <td className="text-end">24</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="title2" title="Lowest Rated">
                <div className={styles.cardBody}>
                  <div className="dashboardTable">
                    <table className="table table-odd">
                      <tbody>
                        <tr>
                          <td>Delhi</td>
                          <td className="text-end">512</td>
                        </tr>
                        <tr>
                          <td>Rajasthan</td>
                          <td className="text-end"> 21</td>
                        </tr>
                        <tr>
                          <td>Goa</td>
                          <td className="text-end"> 79</td>
                        </tr>
                        <tr>
                          <td>Kerala</td>
                          <td className="text-end">46</td>
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

export default RegionalAnalytics;
