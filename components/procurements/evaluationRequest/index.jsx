import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap/';
import Button from 'react-bootstrap/Button';
import { FaRegCalendar, FaPlus } from 'react-icons/fa';
import { BiRupee } from 'react-icons/bi';
import CancelModal from '../../modals/cancelModal';
import RescheduleModal from '../../modals/rescheduleModal';
import SelectRescheduleDate from '../../modals/selectRescheduleDate';
import styles from './style.module.scss';

function EvaluationRequestDetailCard(props) {
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

  const { data } = props;
  return (
    <>
      <Card className={styles.bikeDetailCardMain}>
        <Card.Header className={`${styles.bikeDetailCardHeader} px-0`}>
          <div className="d-flex align-items-center">
            <h4 className={styles.bikeName}>
              {props.bikeName} <span>- {props.bikeNumber}</span>
              <span className={styles.bikeCode}>- {props.bikeCode}</span>
              {props.requestTag && (
                <p className={styles.bikeRequest}>
                  Request by: <span>{props.requestTag}</span>
                </p>
              )}
            </h4>
          </div>
          <div className="d-flex align-items-end">
            <p className={styles.priceTag}>Estimate Price</p>
            <h3 className={styles.priceText}><BiRupee /> {props.priceOne} - <BiRupee /> {props.priceTwo}</h3>
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
                  <p className={`${styles.bikeCardBodyText} mb-0`}>{props.location}</p>
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
              <h2 className={styles.bikeCardBodyTitle}>Evaluation Details</h2>
              <Row className="mb-3">
                <Col>
                  <h6 className={styles.bikeCardBodySubTitle}>
                    Name
                  </h6>
                  <p className={styles.bikeCardBodyText}>{props.supplierName}</p>
                </Col>
                <Col>
                  <h6 className={styles.bikeCardBodySubTitle}>Contact No.</h6>
                  <p className={styles.bikeCardBodyText}>{props.supplierContact}</p>
                </Col>
                <Col>
                  <h6 className={styles.bikeCardBodySubTitle}>
                    Evaluation Date & time
                  </h6>
                  <p className={styles.bikeCardBodyText}>
                    {props.evaluationDateTime}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <h6 className={styles.bikeCardBodySubTitle}>
                    Evaluation Location
                  </h6>
                  <p className={`${styles.bikeCardBodyText} mb-0`}>
                    {props.evaluationLocation}
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className={`${styles.bikeCardFooter} px-0`}>
          <div className={styles.statusBox}>
            <p className={styles.statusBoxText}>
              SAMIL Status: <span>{props.samilStatus}</span>
            </p>
            <p className={styles.statusBoxText}>
              Technical Response: <span>{props.technicalResponse}</span>
            </p>
            <p className={styles.statusBoxText}>
              Reschedule: <span>{props.reschedule}</span>
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
    </>
  );
}

export default EvaluationRequestDetailCard;
