import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { AiOutlineClose } from 'react-icons/ai';
import { FaRegClipboard } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';
import styles from './style.module.scss';
import ArrowButton from '../../common/buttons/ArrowButton';
import PartialLeadsDetail from '../../modals/partialLeadsModal';

export default function DetailCard(props) {
  const [partialModal, setpartialModal] = useState(false);
  const partialToggleModal = () => {
    setpartialModal(!partialModal);
  };
  return (
    <>
      <Card className={styles.detailCard}>
        <Card.Body>
          <div
            className={`${styles.headerDetail} ${styles.detailsDivide} p-0 border-0 `}
          >
            <h2 className="text-white mb-0">
              Details
              <span className="text-white-50"> {props.detailNumber}</span>
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
                <p className="mb-0 text-white ">{props.contactNo}</p>
              </div>
            </div>
            <div
              className={`${styles.borderStyles} ${styles.detailsDivide}  pb-2 mt-1`}
            >
              <div className={`${styles.detailEmail}`}>
                <span className="text-white-50">Email</span>
                <p className="mb-0 text-white ">{props.emailId}</p>
              </div>
              <div className={`${styles.detailPincode}`}>
                <span className="text-white-50">Pincode</span>
                <p className="mb-0 text-white ">{props.pinCode}</p>
              </div>
            </div>
            {props.isReason && (
              <div
                className={`${styles.borderStyles} ${styles.detailsDivide}  pb-2 mt-1`}
              >
                <div className={`${styles.detailEmail}`}>
                  <span className="text-white-50">Reason</span>
                  <p className="mb-0 text-white ">{props.reason}</p>
                </div>
              </div>
            )}
            {props.isContactBtn && (
              <div className={`${styles.detailsDivide} py-2 `}>
                <ArrowButton
                  onClick={props.detailHandler}
                  title="Contact Customer"
                />
                <div className={`${styles.detailSendForm} text-white`}>
                  <FaRegClipboard className="mx-1" size={16} />
                  <button
                    type="button"
                    className="btn-link text-white"
                    onClick={partialToggleModal}
                  >
                    Send eval. form
                  </button>
                </div>
              </div>
            )}
            {props.isDropLead && (
              <div className={`${styles.detailsDivide} py-2 `}>
                <div className={`${styles.detailSendForm} text-white`}>
                  <MdOutlineClose className="mx-1" size={16} />
                  <span>Drop Lead</span>
                </div>
                <div className={`${styles.detailSendForm} text-white`}>
                  <FaRegClipboard className="mx-1" size={16} />
                  <button
                    type="button"
                    className="btn-link text-white"
                    onClick={partialToggleModal}
                  >
                    Send eval. form
                  </button>
                </div>
              </div>
            )}
          </div>
        </Card.Body>

        {props.isCardFooter && (
          <div className={`${styles.detailCardFooter} card-footer`}>
            {props.isUserDetail && (
              <div className={styles.userDetail}>
                <div className={styles.userlTitle}>CRE Details</div>
                <div className={styles.userFlex}>
                  <div>
                    <span className={styles.smTitle}>Name</span>
                    Rishabh Sharma
                  </div>
                  <div>
                    <span className={styles.smTitle}>Contact No.</span>
                    <Link href="/">+91 98765 43210</Link>
                  </div>
                </div>
              </div>
            )}
            <div className={styles.detailsDivide}>
              <p className="text-white-50 mb-0">
                Prm source:{' '}
                <span className="text-white">{props.prmSource}</span>
              </p>
              <p className="text-white-50 mb-0">
                Sec source:{' '}
                <span className="text-white">{props.secSource}</span>
              </p>
            </div>
          </div>
        )}
      </Card>

      <PartialLeadsDetail
        isOpen={partialModal}
        handleClose={partialToggleModal}
      />
    </>
  );
}
