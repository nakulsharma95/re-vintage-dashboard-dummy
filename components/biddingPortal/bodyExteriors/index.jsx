import { Tab, Nav } from 'react-bootstrap';
import { BsCheckCircle } from 'react-icons/bs';
import { ImBlocked } from 'react-icons/im';
import { MdOutlineErrorOutline } from 'react-icons/md';
import styles from './style.module.scss';

export default function BodyExteriors() {
  const allExteriorsData = [
    {
      listTitle: 'Front Mudguard',
      iconName: <BsCheckCircle />,
    },
    {
      listTitle: 'Rear Mudguard - slightly broken',
      iconName: <MdOutlineErrorOutline className={styles.waringIcon} />,
    },
    {
      listTitle: 'Leg Guard',
      iconName: <BsCheckCircle />,
    },
    {
      listTitle: 'Headlights',
      iconName: <BsCheckCircle />,
    },
    {
      listTitle: 'Side Mirrors',
      iconName: <BsCheckCircle />,
    },
    {
      listTitle: 'Rear Indicators',
      iconName: <BsCheckCircle />,
    },
    {
      listTitle: 'Tail lamp - Broken',
      iconName: <BsCheckCircle />,
    },
    {
      listTitle: 'Front Mudguard',
      iconName: <ImBlocked className={styles.blockedIcon} />,
    },
    {
      listTitle: 'Rear Mudguard - slightly broken',
      iconName: <MdOutlineErrorOutline className={styles.waringIcon} />,
    },
    {
      listTitle: 'Leg Guard',
      iconName: <BsCheckCircle />,
    },
    {
      listTitle: 'Headlights',
      iconName: <BsCheckCircle />,
    },
    {
      listTitle: 'Side Mirrors',
      iconName: <ImBlocked className={styles.blockedIcon} />,
    },
    {
      listTitle: 'Rear Indicators',
      iconName: <BsCheckCircle />,
    },
    {
      listTitle: 'Tail lamp - Broken',
      iconName: <BsCheckCircle />,
    },
  ];
  return (
    <div className={styles.bodyExtMain}>
      <div className={styles.title}>
        <span>Body & Exteriors</span>
      </div>

      <div className={styles.bodyExtTabs}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="tabs_1">
          <Nav variant="" className={styles.bodyExtNav}>
            <Nav.Item>
              <Nav.Link eventKey="tabs_1" className="bodyExtNavItem">
                All
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tabs_2" className="bodyExtNavItem">
                Defects
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="tabs_1">
              <div className={styles.bodyExtTabPanel}>
                {allExteriorsData.map(({ iconName, index, listTitle }) => (
                  <li key={index}>
                    {iconName} {listTitle}
                  </li>
                ))}
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="tabs_2">
              <div className={styles.bodyExtTabPanel}>
                {allExteriorsData.map(({ iconName, index, listTitle }) => (
                  <li key={index}>
                    {iconName} {listTitle}
                  </li>
                ))}
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
}
