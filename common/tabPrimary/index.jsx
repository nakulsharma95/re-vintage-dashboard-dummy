import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./TabPrimary.module.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function TabPrimary() {
  return (
    <Container>
      <Row>
        <div className={styles.TabPrimaryContainer}>
          <Tabs
            className={styles.reTabs}
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
          >
            <Tab className={styles.reNavTab} eventKey="home" title="Home">
              <h1>gvdxfbv</h1>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <h1>gvdxfbv</h1>
            </Tab>
          </Tabs>
        </div>
      </Row>
    </Container>
  );
}
