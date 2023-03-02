import { Tab, Nav, Row, Col, Button } from 'react-bootstrap';
import { BiDownload } from 'react-icons/bi';
import { IoMdDownload } from 'react-icons/io';
import Image from 'next/image';
import styles from './style.module.scss';
import BodyExteriors from '../bodyExteriors';
import OutlineButton from '../../common/buttons/OutlineButton';

export default function BikeInspection(props) {
  return (
    <div className={styles.bikeInspectionMain}>
      <div className={styles.inspectionTabs}>
        <div className={styles.title}>Condition & Inspection</div>
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
            <Tab.Pane eventKey="tabs_1" className={styles.bidsTabPanel}>
              <Row>
                <Col md={4}>
                  <BodyExteriors />
                </Col>
                <Col md={8}>
                  <div className={styles.bikeOverview}>
                    <Image
                      src="/images/bike.png"
                      width="640"
                      height="355"
                      alt=""
                    />
                  </div>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="tabs_2" className={styles.bidsTabPanel}>
              <Row className="align-items-center">
                <Col md={4}>
                  <BodyExteriors />
                </Col>
                <Col md={8}>
                  <div className={styles.bikeOverview}>
                    <Image
                      src="/images/bike.png"
                      width="640"
                      height="355"
                      alt=""
                    />
                  </div>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="tabs_3" className={styles.bidsTabPanel}>
              <Row className="align-items-center">
                <Col md={4}>
                  <BodyExteriors />
                </Col>
                <Col md={8}>
                  <div className={styles.bikeOverview}>
                    <Image
                      src="/images/bike.png"
                      width="640"
                      height="355"
                      alt=""
                    />
                  </div>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="tabs_4" className={styles.bidsTabPanel}>
              <Row className="align-items-center">
                <Col md={4}>
                  <BodyExteriors />
                </Col>
                <Col md={8}>
                  <div className={styles.bikeOverview}>
                    <Image
                      src="/images/bike.png"
                      width="640"
                      height="355"
                      alt=""
                    />
                  </div>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="tabs_5" className={styles.bidsTabPanel}>
              <Row className="align-items-center">
                <Col md={4}>
                  <BodyExteriors />
                </Col>
                <Col md={8}>
                  <div className={styles.bikeOverview}>
                    <Image
                      src="/images/bike.png"
                      width="640"
                      height="355"
                      alt=""
                    />
                  </div>
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
      <div className="mt-3">
        {props.outlineButton && (
          <OutlineButton
            leftIcon={<BiDownload />}
            title="Download Report"
            className="theme1"
          />
        )}
        {props.noOutlineBtn && (
          <Button className={styles.noOutlineBtn}>
            <IoMdDownload className={styles.noOutlineIcon} />
            Download Insp. Report
          </Button>
        )}
      </div>
    </div>
  );
}
