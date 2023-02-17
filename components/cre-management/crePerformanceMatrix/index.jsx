import { Card, Col, Tabs, Tab, Table } from "react-bootstrap";
import styles from "./style.module.scss";
import { AiOutlineDownload } from "react-icons/ai";

export default function CrePerformanceMatrix(props) {
  return (
    <>
      <Col xxl={12} lg={12} md={12}>
        <Card className={`${styles.crePerformanceMatrix} mt-3`}>
          <div className={styles.matrixHeading}>
            <h2>{props.creTitle}</h2>
            <AiOutlineDownload className={styles.downloadIcon} size={26} />
          </div>
          <Tabs
            className={`${styles.tabCre} mb-3 mt-3`}
            defaultActiveKey="profile"
            id="fill-tab-example"
            fill
          >
            <Tab
              eventKey="Procurement Lead Management"
              title="Procurement Lead Management"
            ></Tab>
            <Tab
              eventKey="Bidding / First Offer"
              title="Bidding / First Offer"
            ></Tab>
            <Tab eventKey="Deal Closure" title="Deal Closure"></Tab>
            <Tab
              eventKey="General Query Response"
              title="General Query Response"
            ></Tab>
          </Tabs>
        </Card>
        <div className={styles.partialLead}>
          <div className={styles.leadTransform}>Partial Lead</div>
          <Table className={styles.tableBase} responsive>
            <thead>
              <tr>
                <th className={styles.textActivity}>Activity</th>
                <th>
                  Leads Evaluated <br />
                  CRE 1
                </th>
                <th>
                  Leads Evaluated <br />
                  CRE 2
                </th>
                <th>
                  Leads Evaluated <br />
                  CRE 3
                </th>
                <th>
                  Total Leads <br />
                  Allocated
                </th>
                <th>Score Achieved</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.matixTable}>
                <td className={styles.textActivity}>Direct Lead - VDMP Lead</td>
                <td>124</td>
                <td>116</td>
                <td>116</td>
                <td>124</td>
                <td className={styles.scoreAchieved}>100%</td>
              </tr>
              <tr>
                <td className={styles.textActivity}>
                  <div className={styles.tablePl}>
                    {" "}
                    (a) Contact Partial leads
                  </div>
                </td>
                <td>116</td>
                <td>100</td>
                <td>100</td>
                <td>116</td>
                <td className={styles.scoreAchieved}>94%</td>
              </tr>
              <tr className={styles.matixTable}>
                <td className={styles.textActivity}>
                  <div className={styles.tablePl}>
                    {" "}
                    (b) Send Sell Form:<span>65% of (a)</span>
                  </div>
                </td>
                <td>100</td>
                <td>79</td>
                <td>79</td>
                <td>100</td>
                <td className={styles.scoreAchieved}>87%</td>
              </tr>

              <tr>
                <td className={styles.textActivity}>
                  <div className={styles.tablePl}>
                    {" "}
                    (c) Converted to evaluation request: <br />
                    <span>25% of (b)</span>
                  </div>
                </td>
                <td>79</td>
                <td>49</td>
                <td>49</td>
                <td>79</td>
                <td className={styles.scoreAchieved}>79%</td>
              </tr>

              <tr className={styles.matixTable}>
                <td className={styles.textActivity}>
                  <div className={styles.tablePl}>
                    Partial Lead to Evaluation request generation
                  </div>
                </td>
                <td>43</td>
                <td>38</td>
                <td>38</td>
                <td>43</td>
                <td className={styles.scoreAchieved}>55%</td>
              </tr>

              <tr>
                <td className={styles.textActivity}>Completed Evaluation</td>
                <td>38</td>
                <td>32</td>
                <td>32</td>
                <td>38</td>
                <td className={styles.scoreAchieved}>88%</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Col>
    </>
  );
}
