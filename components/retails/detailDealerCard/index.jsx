import { Row, Col, Card } from 'react-bootstrap/';
import Button from 'react-bootstrap/Button';
import { FiPhoneCall, FiTrash2 } from 'react-icons/fi';
import { BiRupee } from 'react-icons/bi';
import { ImHammer2 } from 'react-icons/im';
import styles from './style.module.scss';

function DetailDealerCard(props) {
  return (
    <Card className={`${styles.bikeDetailCardMain} mb-5`}>
      <Card.Header className={`${styles.bikeDetailCardHeader} px-0`}>
        <div className="d-flex align-items-center">
          <h4 className={styles.bikeName}>
            {props.bikeName} <span>- {props.bikeNumber}</span>
            <span className={styles.bikeCode}>- {props.bikeCode}</span>
          </h4>
        </div>
        <div className="d-flex align-items-end">
          <p className={styles.priceTag}>Selling price</p>
          <div className={styles.bikePrice}>
            <span>
              <BiRupee />
            </span>
            <input type="text" value="1,25,000.00" name="" id="" />

            <Button className={styles.submitBtn}>EDIT</Button>
          </div>
        </div>
      </Card.Header>
      <Card.Body className={`${styles.bikeCardBody} px-0`}>
        <Row>
          <Col md={5} className={styles.cardBodyBorderRight}>
            <h2 className={styles.bikeCardBodyTitle}>Motorcycle details</h2>
            <Row className="mb-3">
              <Col>
                <h6 className={styles.bikeCardBodySubTitle}>Owner</h6>
                <p className={styles.bikeCardBodyText}>{props.owner}</p>
              </Col>
              <Col>
                <h6 className={styles.bikeCardBodySubTitle}>KM</h6>
                <p className={styles.bikeCardBodyText}>{props.kmDrive}</p>
              </Col>
              <Col>
                <h6 className={styles.bikeCardBodySubTitle}>Mileage</h6>
                <p className={styles.bikeCardBodyText}>{props.mileage} kmpl</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6 className={styles.bikeCardBodySubTitle}>Colour</h6>
                <p className={`${styles.bikeCardBodyText} mb-0`}>
                  {props.bikeColor}
                </p>
              </Col>
              <Col>
                <h6 className={styles.bikeCardBodySubTitle}>Location</h6>
                <p className={`${styles.bikeCardBodyText} mb-0`}>
                  {props.location}
                </p>
              </Col>
              <Col>
                <h6 className={styles.bikeCardBodySubTitle}>Posting date</h6>
                <p className={`${styles.bikeCardBodyText} mb-0`}>
                  {props.postedDate}
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={7} className="ps-5">
            <h2 className={styles.bikeCardBodyTitle}>
              Dealer:
              <span className={styles.dealerLocation}>
                {props.dealerLocation}
              </span>
            </h2>

            <Row>
              <Col md={12}>
                <h6 className={styles.dealerSubTitleText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore sed do eiusmod tempor
                  incididunt ut labore et dolore.
                </h6>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className={`${styles.bikeCardFooter} px-0`}>
        <div className={styles.statusBtnBox}>
          <Button variant="primary" className={styles.statusBtn}>
            <ImHammer2 className={styles.statusBtnIcn} />
            Bid Details
          </Button>
          <Button variant="primary" className={styles.statusBtn}>
            <FiPhoneCall
              className={`${styles.statusBtnIcn} ${styles.closeBtnIcn}`}
            />
            Call Dealer
          </Button>
          <Button variant="primary" className={styles.statusBtn}>
            <FiTrash2
              className={`${styles.statusBtnIcn} ${styles.closeBtnIcn}`}
            />
            Deactivate
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default DetailDealerCard;
