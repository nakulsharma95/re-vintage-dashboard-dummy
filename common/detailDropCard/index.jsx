import Card from 'react-bootstrap/Card';
import { AiOutlineCalendar, AiOutlineClose } from 'react-icons/ai';
import styles from './style.module.scss';

export default function DetailDropCard() {
  return (
    <Card className={styles.DropCardBg}>
      <Card.Body>
        <div className={`${styles.dropCardInner} mb-5`}>
          <h3 className="mb-3">SAMIL Details</h3>
          <div className="mb-3">
            <h3>SAMIL Case ID</h3>
            <p>ASHS45125</p>
          </div>

          <div className="mb-3">
            <h3>Contact No.</h3>
            <p className={styles.dropContact}>+91 98996 45875</p>
          </div>
        </div>

        <div
          className={`${styles.borderTopCustom} w-100 pb-1 pt-2 d-flex justify-content-between px-2 align-items-center`}
        >
          <div
            className={`${styles.borderRightCustom} ${styles.dropCardFooter} pe-3`}
          >
            <AiOutlineCalendar className={`${styles.dropIcon}`} size={18} />
            <span className="ml-2">Reschedule</span>
          </div>
          <div className={`${styles.dropCardFooter} pe-3`}>
            <AiOutlineClose className={`${styles.dropIcon}`} size={18} />
            <span>Drop</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
