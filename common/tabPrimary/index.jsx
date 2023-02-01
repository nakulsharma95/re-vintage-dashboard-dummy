import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./style.module.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function TabPrimary() {
  return (
    <Container>
      <Row>
        <div>
          <Tabs
            className={`${styles.reTabs} mb-3`}
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
          >
            <Tab className={styles.reNavTab} eventKey="Recent" title="Recent">
              <h4>3 Leads Available</h4>
            </Tab>
            <Tab
              className={styles.reNavTab}
              eventKey="In-progress (4)"
              title="In-progress (4)"
            >
              <h4>3 Leads Available</h4>
            </Tab>

            <Tab
              className={styles.reNavTab}
              eventKey="Dropped (2)"
              title="Dropped (2)"
            >
              <h4>Dropped (2)</h4>
            </Tab>

            <Tab
              className={styles.reNavTab}
              eventKey="Self consume (By dealer)"
              title="Self consume (By dealer)"
            >
              <h4>Self consume (By dealer)</h4>
            </Tab>
          </Tabs>
        </div>
      </Row>
    </Container>
  );
}
