import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';
import { FaRegClipboard } from 'react-icons/fa';
import styles from './style.module.scss';
import ArrowButton from '../../common/buttons/ArrowButton';

export default function DetailCard(props) {
  
  return (
    <>
      <Card className={styles.detailCard}>
        <Card.Body>
          <div
            className={`${styles.headerDetail} ${styles.detailsDivide} p-0 border-0 `}
          >
            <h2 className="text-white mb-0">
              Details{' '}
              <span className="text-white-50">-{props.detailNumber}</span>
            </h2>
            <div
              className={`${styles.detailDrop} ${styles.detailsDivide} border-0 shadow-none text-white  gap-1 }`}
            >
              <AiOutlineClose size={18} />
              <span className="mb-0">Drop Lead</span>
            </div>
          </div>
          <div className="mt-2">
            <div
              className={`${styles.borderStyles} ${styles.detailsDivide}   pb-2`}
            >
              <div className={`${styles.detailName}`}>
                <span className="text-white-50">Owner Name</span>
                <p className="mb-0 text-white ">{props.ownerName}</p>
              </div>
              <div className={`${styles.detailContact}`}>
                <span className="text-white-50">Contact No.</span>
                <p className="mb-0 text-white ">+91 9876543219</p>
              </div>
            </div>
            <div
              className={`${styles.borderStyles} ${styles.detailsDivide}  pb-2 mt-1`}
            >
              <div className={`${styles.detailEmail}`}>
                <span className="text-white-50">Email</span>
                <p className="mb-0 text-white ">john@gmail.com</p>
              </div>
              <div className={`${styles.detailPincode}`}>
                <span className="text-white-50">Pincode</span>
                <p className="mb-0 text-white ">110014</p>
              </div>
            </div>

            <div className={`${styles.detailsDivide} py-2 `}>
              <ArrowButton detailLink="/" title="Contact Customer" />
              <div className={`${styles.detailSendForm} text-white`}>
                <FaRegClipboard className="mx-1" size={16} />
                <span>Send eval. form</span>
              </div>
            </div>
          </div>
        </Card.Body>
        <div
          className={`${styles.detailCardFooter} ${styles.detailsDivide}  card-footer bg-dark`}
        >
          <p className="text-white-50 mb-0">
            Prm source: <span className="text-white">MIY</span>
          </p>
          <p className="text-white-50 mb-0">
            Sec source: <span className="text-white">Google</span>
          </p>
        </div>
      </Card>
      <Col md={12}>
        {props.detailCardBtmTxt && (
          <p className={styles.detailCardTxt}>{props.detailCardBtmTxt}</p>
        )}
      </Col>
    </>
  );
}
