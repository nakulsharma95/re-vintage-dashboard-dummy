import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap/';
import Button from 'react-bootstrap/Button';
import { FaRegCalendar, FaPlus } from 'react-icons/fa';
import CancelModal from '../../modals/cancelModal';
import RescheduleModal from '../../modals/rescheduleModal';
import SelectRescheduleDate from '../../modals/selectRescheduleDate';
import styles from './style.module.scss';

function EvaluationRequestDetailCard() {
  const [cancelModal, setCancelModal] = useState(false);
  const [rescheduleModal, setRescheduleModal] = useState(false);
  const [selectRescheduleDate, setSelectRescheduleDate] = useState(false);

  const cancelToggleModal = () => {
    setCancelModal(!cancelModal);
  };
  const dateToggleModal = () => {
    setSelectRescheduleDate(!selectRescheduleDate);
  };
  const rescheduleToggleModal = () => {
    setRescheduleModal(!rescheduleModal);
    setCancelModal(false);
  };

  const motorCycleDetail = [
    {
      bikeName: '2015 Classic 350',
    },
    {
      bikeName: '2015 Hunter 350',
    },
    {
      bikeName: '2015 Electra 350',
    },
  ];
  return (
    <div>
      <div className={styles.topHeader}>
        <p className={styles.topHeaderTxt}>3 Leads Available</p>
        <div className={styles.topHeaderBtnBox}>
          <p className={styles.viewText}>View:</p>
          <Button
            variant="primary"
            className={`${styles.topHeaderBtn} ${styles.activeBtn}`}
          >
            All
          </Button>
          <Button variant="primary" className={`${styles.topHeaderBtn}`}>
            Dealer
          </Button>
        </div>
      </div>
      {motorCycleDetail.map((item) => (
        <Card className={styles.bikeDetailCardMain}>
          <Card.Header className={`${styles.bikeDetailCardHeader} px-0`}>
            <div className="d-flex align-items-center">
              <h4 className={styles.bikeName}>
                {item.bikeName} <span>- DL 6T AL 7314</span>
                <span className={styles.bikeCode}>- FB29FH9219HR1</span>
              </h4>
            </div>
            <div className="d-flex align-items-end">
              <p className={styles.priceTag}>Estimate Price</p>
              <h3 className={styles.priceText}>₹ 1,19,300 - ₹ 1,26,600</h3>
            </div>
          </Card.Header>
          <Card.Body className={`${styles.bikeCardBody} px-0`}>
            <Row>
              <Col md={5} className={styles.cardBodyBorderRight}>
                <h2 className={styles.bikeCardBodyTitle}>Motorcycle details</h2>
                <Row className="mb-3">
                  <Col>
                    <h6 className={styles.bikeCardBodySubTitle}>Owner</h6>
                    <p className={styles.bikeCardBodyText}>2nd</p>
                  </Col>
                  <Col>
                    <h6 className={styles.bikeCardBodySubTitle}>KM</h6>
                    <p className={styles.bikeCardBodyText}>35,150</p>
                  </Col>
                  <Col>
                    <h6 className={styles.bikeCardBodySubTitle}>Mileage</h6>
                    <p className={styles.bikeCardBodyText}>43.6 kmpl</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6 className={styles.bikeCardBodySubTitle}>Colour</h6>
                    <p className={`${styles.bikeCardBodyText} mb-0`}>
                      Red, Chrome
                    </p>
                  </Col>
                  <Col>
                    <h6 className={styles.bikeCardBodySubTitle}>Location</h6>
                    <p className={`${styles.bikeCardBodyText} mb-0`}>Delhi</p>
                  </Col>
                  <Col>
                    <h6 className={styles.bikeCardBodySubTitle}>
                      Posting date
                    </h6>
                    <p className={`${styles.bikeCardBodyText} mb-0`}>
                      25/08/2022
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md={7} className="ps-5">
                <h2 className={styles.bikeCardBodyTitle}>Evaluation Details</h2>
                <Row className="mb-3">
                  <Col>
                    <h6 className={styles.bikeCardBodySubTitle}>
                      +91 98765 43219
                    </h6>
                    <p className={styles.bikeCardBodyText}>Neel Motors</p>
                  </Col>
                  <Col>
                    <h6 className={styles.bikeCardBodySubTitle}>Contact No.</h6>
                    <p className={styles.bikeCardBodyText}>+91 98765 43219</p>
                  </Col>
                  <Col>
                    <h6 className={styles.bikeCardBodySubTitle}>
                      Evaluation Date & time
                    </h6>
                    <p className={styles.bikeCardBodyText}>
                      Thu, 19 Nov at 08:30AM
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <h6 className={styles.bikeCardBodySubTitle}>
                      Evaluation Location
                    </h6>
                    <p className={`${styles.bikeCardBodyText} mb-0`}>
                      No F 26, 4, Pocket D, Okhla Phase II, New Delhi, 110020
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className={`${styles.bikeCardFooter} px-0`}>
            <div className={styles.statusBox}>
              <p className={styles.statusBoxText}>
                SAMIL Status: <span>Pending</span>
              </p>
              <p className={styles.statusBoxText}>
                Technical Response: <span>Pending</span>
              </p>
              <p className={styles.statusBoxText}>
                Reschedule: <span>none</span>
              </p>
            </div>
            <div className={styles.statusBtnBox}>
              <Button
                variant="primary"
                onClick={dateToggleModal}
                className={styles.statusBtn}
              >
                <FaRegCalendar className={styles.statusBtnIcn} />
                Reschedule
              </Button>
              <Button variant="primary" className={styles.statusBtn}>
                <FaPlus
                  className={`${styles.statusBtnIcn} ${styles.closeBtnIcn}`}
                />
                Cancel
              </Button>
              <Button
                variant="primary"
                className={styles.statusBtn}
                onClick={cancelToggleModal}
              >
                <FaPlus
                  className={`${styles.statusBtnIcn} ${styles.closeBtnIcn}`}
                />
                Drop
              </Button>
            </div>
          </Card.Footer>
        </Card>
      ))}

      <CancelModal
        isOpen={cancelModal}
        handleClose={cancelToggleModal}
        title="Are you sure you want to reschedule the lead?"
        handleYes={rescheduleToggleModal}
      />
      <RescheduleModal
        isOpen={rescheduleModal}
        handleClose={rescheduleToggleModal}
      />
      <SelectRescheduleDate
        isOpen={selectRescheduleDate}
        handleClose={dateToggleModal}
      />
    </div>
  );
}

export default EvaluationRequestDetailCard;
