import { Row, Tab, Tabs } from "react-bootstrap";
import styles from "./style.module.scss";

export default function TabPrimary() {
  return (
    <div>
      <Row>
        <div>
          <Tabs
            className={`${styles.reTabs} mb-3`}
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
          >
            <Tab
              className={styles.reNavTab}
              eventKey="Recent"
              title="Recent"
            ></Tab>
            <Tab
              className={styles.reNavTab}
              eventKey="In-progress (4)"
              title="In-progress (4)"
            >
            </Tab>

            <Tab
              className={styles.reNavTab}
              eventKey="Dropped (2)"
              title="Dropped (2)"
            ></Tab>

            <Tab
              className={styles.reNavTab}
              eventKey="Self consume (By dealer)"
              title="Self consume (By dealer)"
            ></Tab>
          </Tabs>
        </div>
      </Row>
    </div>
  );
}
