import { Card, Col,Tabs,Tab } from "react-bootstrap";
import styles from "./style.module.scss";
import { AiOutlineDownload } from "react-icons/ai";

export default function CrePerformanceMatrix() {
  return (
    <>
      <Col xxl={12} lg={6} md={6}>
        <Card className={`${styles.crePerformanceMatrix} mt-3`}>

		<div className={styles.MatrixHeading}>
			<h2>Cumulative CRE Performance Matrix</h2>
			<AiOutlineDownload className={styles.downloadIcon} size={26} />
		</div>
		<Tabs className={`${styles.tabCre} mb-3 mt-3`}
      defaultActiveKey="profile"
      id="fill-tab-example"
      fill
    >
      <Tab eventKey="Procurement Lead Management" title="Procurement Lead Management">
      </Tab>
      <Tab eventKey="Bidding / First Offer" title="Bidding / First Offer">
      </Tab>
      <Tab eventKey="Deal Closure" title="Deal Closure">
      </Tab>
      <Tab eventKey="General Query Response" title="General Query Response">
      </Tab>
    </Tabs>
		</Card>
      </Col>
    </>
  );
}
