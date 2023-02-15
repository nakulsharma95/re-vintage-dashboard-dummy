/* eslint-disable @next/next/no-img-element */
import { Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import CustomCheckBox from '../customCheckBox';
import styles from './style.module.scss';

function BikeCardRadio({
  isCheckBoxVisible,
  imageUrl,
  isBikeTagVisible,
  isOlxTagVisible,
  isBikeChassisVisible,
  dealerLocation,
}) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Last Listed on: 22 Dec
    </Tooltip>
  );

  return (
    <Card className={styles.bikeCardMain}>
      <div className={styles.ChassisImage}>
        <Card.Img variant="top" src={imageUrl} />
        {isBikeChassisVisible && (
          <div className={`${styles.bikeChassisTag}`}>FB29FH9219HR1</div>
        )}
      </div>

      {isCheckBoxVisible && (
        <div className={`${styles.bikeCardCheck}`}>
          <CustomCheckBox />
        </div>
      )}
      {isBikeTagVisible && (
        <div className={`${styles.bikeCardTag}`}>Self Procured</div>
      )}

      {isOlxTagVisible && (
        <div className={`${styles.bikeCardTagOlx}`}>
          Listed on
          <img src="/images/olx.png" className={styles.olxImage} alt="" />
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
            className="d-inline-flex align-items-center"
          >
            <Button>2</Button>
          </OverlayTrigger>
        </div>
      )}
      <Card.Body className="px-0">
        <Card.Title className={styles.bkeName}>
          2015 Classic 350 <span>- DL 6T AL 7314</span>
        </Card.Title>
        <Row className={`${styles.bikeDetail} mx-0`}>
          <Col className={styles.detailTxt}>43,384 km</Col>
          <Col className={styles.detailTxt}>1st Owner</Col>
          <Col className={styles.detailTxt}>350 CC</Col>
        </Row>
        <h4 className={styles.price}>₹1,15,000 - ₹1,25,000</h4>
        <p className={styles.dealer}>
          Dealer: <span>(C2N0RJ20FC2N)</span>
        </p>
        <span className={styles.dealerLocation}>{dealerLocation}</span>
      </Card.Body>
    </Card>
  );
}

export default BikeCardRadio;
