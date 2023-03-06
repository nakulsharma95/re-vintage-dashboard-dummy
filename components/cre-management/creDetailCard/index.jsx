import { Card } from 'react-bootstrap';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import ArrowButton from '../../common/buttons/ArrowButton';
import styles from './style.module.scss';

function CreDetailCard(props) {
  const { creDetailData } = props;
  return (
    <>
      <Card className={styles.bikeCardMain}>
        <div className={styles.ChassisImage}>
          <Card.Img variant="top" src={creDetailData.imageUrl} />
        </div>

        <p className={styles.bikeCardTag}>Available</p>

        <Card.Body>
          <Card.Title className={styles.headingName}>
            <h3>{props.name}</h3>
            <span className="mx-2">{props.jobPost}</span>
          </Card.Title>

          <div className={styles.location}>
            <FiMapPin size={13} />
            <h4>{props.location}</h4>
          </div>

          <ArrowButton
            detailLink="/cre-management/cre-details"
            title="VIEW DETAILS"
            buttonStyle="w-full"
          />
        </Card.Body>
      </Card>

      <Card className={styles.creContactInfo}>
        <Card.Body>
          <div className={styles.contactTitle}>
            <h3>Contact Info</h3>
            <div className={styles.divider} />

            <p className={`${styles.creDetail} mb-0`}>
              <FiPhone size={13} />
              <span>{props.phoneNo}</span>
            </p>

            <p className={`${styles.creDetail} mb-0`}>
              <FiMail size={13} />
              <span>{props.emailID}</span>
            </p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CreDetailCard;
