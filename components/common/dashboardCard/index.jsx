import { Card, Col, Row, DropdownButton, Dropdown } from 'react-bootstrap';
import { TbTrendingUp } from 'react-icons/tb';
import styles from './style.module.scss';

export default function DashboardCard(props) {
  return (
    <Row>
      <Col xxl={3} lg={6} md={6}>
        <Card className={styles.dashboardCardMain}>
          <div className={`${styles.cardBody} ${styles.bgRed} py-2`}>
            <div className={`${styles.cardHead}`}>
              <div className="d-flex justify-content-between">
                <h2>
                  {props.title1} <br /> {props.titleBr}
                </h2>
                {props.dropdown && (
                  <DropdownButton
                    className={styles.dashboardDropdown}
                    id="dropdown-basic-button"
                    title="1 Month"
                  >
                    <Dropdown.Item href="#/action-1">Month 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Month 3</Dropdown.Item>
                  </DropdownButton>
                )}
              </div>
              <p>{props.description1}</p>
            </div>
            <div className={`${styles.divider} w-100`} />
            <div className={`${styles.cardFooter} pt-2 w-100`}>
              <h3>{props.bottomDescription1}</h3>
              <div>
                <span className="mx-2">12%</span>
                <TbTrendingUp className={styles.customIcon} size={15} />
              </div>
            </div>
          </div>
        </Card>
      </Col>

      <Col xxl={3} lg={6} md={6}>
        <Card className={styles.dashboardCardMain}>
          <div className={`${styles.cardBody} ${styles.bgBlack} py-2`}>
            <div className={`${styles.cardHead}`}>
              <div className="d-flex justify-content-between">
                <h2>{props.title2}</h2>
                {props.Dropdown && (
                  <DropdownButton
                    className={styles.dashboardDropdown}
                    id="dropdown-basic-button"
                    title="1 Month"
                  >
                    <Dropdown.Item href="#/action-1">Month 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Month 3</Dropdown.Item>
                  </DropdownButton>
                )}
              </div>

              <p>{props.description2}</p>
            </div>
            <div className={`${styles.dividerDark} w-100`} />
            <div className={`${styles.cardFooter} pt-2 w-100`}>
              <h3>{props.bottomDescription2}</h3>
              <div>
                <span className="mx-2">8</span>
              </div>
            </div>
          </div>
        </Card>
      </Col>

      <Col xxl={3} lg={6} md={6}>
        <Card className={styles.dashboardCardMain}>
          <div className={`${styles.cardBody} ${styles.bgDarkGray} py-2`}>
            <div className={`${styles.cardHead}`}>
              <div className="d-flex justify-content-between">
                <h2>{props.title3}</h2>
                {props.Dropdown && (
                  <DropdownButton
                    className={styles.dashboardDropdown}
                    id="dropdown-basic-button"
                    title="1 Month"
                  >
                    <Dropdown.Item href="#/action-1">Month 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Month 3</Dropdown.Item>
                  </DropdownButton>
                )}
              </div>

              <p>{props.description3}</p>
            </div>
          </div>
        </Card>
      </Col>

      <Col xxl={3} lg={6} md={6}>
        <Card className={styles.dashboardCardMain}>
          <div className={`${styles.cardBody} ${styles.bgBlack} py-2`}>
            <div className={`${styles.cardHead}`}>
              <div className="d-flex justify-content-between">
                <h2>{props.title4}</h2>
                {props.Dropdown && (
                  <DropdownButton
                    className={styles.dashboardDropdown}
                    id="dropdown-basic-button"
                    title="1 Month"
                  >
                    <Dropdown.Item href="#/action-1">Month 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Month 3</Dropdown.Item>
                  </DropdownButton>
                )}
              </div>

              <p>{props.description4}</p>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
}
