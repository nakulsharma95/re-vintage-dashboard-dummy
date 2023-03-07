import { Card } from 'react-bootstrap';
import styles from './style.module.scss';

function NonReDetailCard(props) {
  return (
    <Card className={styles.nonReCard}>
      <Card.Body>
        <Card.Title className={styles.nonReCardTitle}>
          {props.bikeName} <span>- {props.bikeNumber}</span>
        </Card.Title>
        <Card.Subtitle className={styles.nonReCardSubTitle}>
          FB29FH9219HR1
        </Card.Subtitle>
        <div className={styles.nonReCardInline}>
          <div className={styles.nonReCardInlineText}>43,384 km</div>
          <div className={styles.nonReCardInlineText}>1st Owner</div>
          <div className={styles.nonReCardInlineText}>160 CC</div>
        </div>
        <h3 className={styles.nonReCardPrice}>₹ {props.price}</h3>
        <Card.Text className={styles.dealerCode}>
          Dealer: <span>({props.dealerRef})</span>
        </Card.Text>
        <h6 className={`${styles.dealerAddress} ${styles.addressUnderline}`}>
          {props.dealerAddress}
        </h6>
      </Card.Body>
      <Card.Footer className={styles.nonReCardFooter}>
        <h4 className={styles.footerTitle}>CRE Detail</h4>
        <h4 className={styles.footerSubTitle}>
          Name: <span>{props.creUserName}</span>
        </h4>
        <h4 className={`${styles.footerSubTitle} mb-0`}>
          Number: <span>+91 {props.creUserNumber}</span>
        </h4>
      </Card.Footer>
    </Card>
  );
}

export default NonReDetailCard;
