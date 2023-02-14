import React, { useState } from 'react';
import { AiOutlineCalendar, AiOutlineClose } from 'react-icons/ai';
import CancelModal from '../../modals/cancelModal';
import RescheduleModal from '../../modals/rescheduleModal';
import SelectRescheduleDate from '../../modals/selectRescheduleDate';
import styles from './style.module.scss';

export default function DetailDropCard() {
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
  return (
    <>
      <div className={styles.dropCardBg}>
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
            onClick={dateToggleModal}
          >
            <AiOutlineCalendar className={`${styles.dropIcon}`} size={18} />
            <span className="ml-2">Reschedule</span>
          </div>
          <div
            className={`${styles.dropCardFooter} pe-3`}
            onClick={cancelToggleModal}
          >
            <AiOutlineClose className={`${styles.dropIcon}`} size={18} />
            <span>Drop</span>
          </div>
        </div>
      </div>
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
