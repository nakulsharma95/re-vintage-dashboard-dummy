import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BiRupee } from 'react-icons/bi';
import { FiCopy } from 'react-icons/fi';
import ArrowButton from '../../common/buttons/ArrowButton';
import CustomCheckBox from '../../common/customCheckBox';
import styles from './style.module.scss';

export default function SellerPrimaryCard(props) {
  return (
    <Card className={styles.bikeCardCols}>
      <Card.Img
        className={styles.bikeImg}
        variant="top"
        src={props.imageUrl}
        alt="not-found"
      />
      <div className={styles.selectBoxCheck}>
        <CustomCheckBox />
      </div>
      <Card.Body className={styles.cardPanel}>
        <Card.Title className={styles.bikeName}>
          {props.bikeName}
          <span>
            - {props.bikeNumber} <FiCopy className={styles.copyIcon} />
          </span>
        </Card.Title>
        <div className={styles.priceList}>
          <div className="d-md-flex align-items-center justify-content-between">
            <div className={styles.sbTitle}>Seller Portal ID:</div>
            <div className={styles.sellerIdText}>
              {props.sellerId} <FiCopy className={styles.copyIcon} />
            </div>
          </div>
          <div className={styles.sellerPrice}>
            <div className={styles.sbTitle}>Seller Portal Price</div>
            <div className="d-flex align-items-center justify-content-between">
              <span>
                <BiRupee />
              </span>
              <Form.Control
                type="text"
                defaultValue="1,25,00,000"
                id=""
                name=""
              />
              <Button variant="" className={styles.submitBtn}>
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.addtionalInfo}>
          <div className="d-md-flex justify-content-between">
            <div className={styles.kmModelCols}>
              <span className={styles.infoTitle}>KMs Driven</span>
              <span>{props.kmDrive}</span>
            </div>
            <div className={styles.kmModelCols}>
              <span className={styles.infoTitle}>Model</span>
              <span>{props.modelYear}</span>
            </div>
          </div>
          <div className={styles.locationText}>
            <span>Location</span> {props.location}
          </div>
        </div>
        <div className={styles.cardBtnCols}>
          <ArrowButton detailLink="/bike-details" title="VIEW DETAILS" />
        </div>
      </Card.Body>
    </Card>
  );
}
