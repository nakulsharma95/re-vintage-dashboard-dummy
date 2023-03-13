import { Tab, Nav } from 'react-bootstrap';
import Image from 'next/image';
import styles from './style.module.scss';
import InspectionConditionData from '../../inspectionConditionData';
import EmptyState from '../../emptyState';

export default function ImgTabs() {
  return (
    <div className={styles.imgTabsMain}>
      <div className={styles.imgTabs}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="tabs_1">
          <Nav variant="" className={styles.navTabs}>
            <Nav.Item className={styles.navItem}>
              <Nav.Link eventKey="tabs_1" className="navBidsLink">
                <span>
                  <Image
                    src="/images/motorcycle.svg"
                    width="15"
                    height="15"
                    alt="not found"
                  />
                </span>
                Body & Exteriors
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.navItem}>
              <Nav.Link eventKey="tabs_2" className="navBidsLink">
                <span>
                  <Image
                    src="/images/engine.svg"
                    width="15"
                    height="15"
                    alt="not found"
                  />
                </span>
                Engine & Transmission
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.navItem}>
              <Nav.Link eventKey="tabs_3" className="navBidsLink">
                <span>
                  <Image
                    src="/images/suspension.svg"
                    width="15"
                    height="15"
                    alt="not found"
                  />
                </span>
                Chassis & Suspension
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.navItem}>
              <Nav.Link eventKey="tabs_4" className="navBidsLink">
                <span>
                  <Image
                    src="/images/battery.svg"
                    width="15"
                    height="15"
                    alt="not found"
                  />
                </span>
                Battery & Electricals
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.navItem}>
              <Nav.Link eventKey="tabs_5" className="navBidsLink">
                <span>
                  <Image
                    src="/images/brake.svg"
                    width="15"
                    height="15"
                    alt="not found"
                  />
                </span>
                Tyres & Brakes
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="tabs_1" className={styles.imgTabPanel}>
              <InspectionConditionData />
            </Tab.Pane>
            <Tab.Pane eventKey="tabs_2" className={styles.imgTabPanel}>
              <EmptyState
                title="No Result Found!"
                description="we couldn find what you searched for try something again."
              />
            </Tab.Pane>
            <Tab.Pane eventKey="tabs_3" className={styles.imgTabPanel}>
              <EmptyState
                title="No Result Found!"
                description="we couldn find what you searched for try something again."
              />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
}
