import { Row, Tab, Tabs } from 'react-bootstrap';
import styles from './style.module.scss';

export default function TabPrimary(props) {
  return (
    <div className="custom-tab-style">
      <Row>
        <div>
          <Tabs
            className={`${styles.reTabs} mb-3`}
            defaultActiveKey="title1"
            id="uncontrolled-tab-example"
          >
            <Tab
              className={styles.reNavTab}
              eventKey="title1"
              title={props.title1}
            />
            <Tab
              className={styles.reNavTab}
              eventKey="title2"
              title={props.title2}
            />

            <Tab
              className={styles.reNavTab}
              eventKey="title3"
              title={props.title3}
            />

            <Tab
              className={styles.reNavTab}
              eventKey="title4"
              title={props.title4}
            />
          </Tabs>
        </div>
      </Row>
    </div>
  );
}
