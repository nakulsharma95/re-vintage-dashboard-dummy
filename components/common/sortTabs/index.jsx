import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';
import { BiGridAlt, BiListUl, BiCheck, BiChevronDown } from 'react-icons/bi';
import CustomCheckBox from '../customCheckBox';
import styles from './style.module.scss';

function SortTabs(props) {
  return (
    <>
      <Col md={12} className={styles.sortTabMain}>
        {props.selectAllCheck ? (
          <>
            <div className={styles.sortTabCheck}>
              <h5 className={styles.tabCheckTitle}>25 Bids Available</h5>
              <div className="mx-3">
                <CustomCheckBox checkTitle="Select all" />
              </div>

              {props.approveBtn ? (
                <>
                  {props.moveToOlx ? (
                    <>
                      <Button
                        variant="primary"
                        className={styles.submitCheckBBtn}
                      >
                        <BiCheck className={styles.checkBtnIcon} />
                        Move to Olx
                      </Button>
                      <Button
                        variant="primary"
                        className={`${styles.submitCheckBBtn} ms-3`}
                      >
                        <BiCheck className={styles.checkBtnIcon} />
                        Move to Inactive
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="primary"
                      className={styles.submitCheckBBtn}
                    >
                      <BiCheck className={styles.checkBtnIcon} />
                      Approve Selected
                    </Button>
                  )}
                </>
              ) : (
                <Button variant="primary" className={styles.submitCheckBBtn}>
                  <BiCheck className={styles.checkBtnIcon} />
                  Submit Selected
                </Button>
              )}
            </div>
          </>
        ) : (
          <>
            <div className={styles.sortTabFilter}>
              <p className={`${styles.sortTabFilterBtn} ${styles.activeTab}`}>
                All (25)
              </p>
              <p className={styles.sortTabFilterBtn}>
                Price under negotiation (12)
              </p>
              <p className={styles.sortTabFilterBtn}>
                Payment detail pending (8)
              </p>
              <p className={styles.sortTabFilterBtn}>
                Detail sharing pending (7)
              </p>
            </div>
          </>
        )}
        <div className={styles.sortTabBtnBoxMain}>
          {props.isSortTabBox && (
            <div className="d-flex align-items-center">
              <p className={styles.sortText}>Sort by:</p>
              <div>
                <Button variant="primary" className={styles.sortTabBtn}>
                  Self Procure
                  <BiChevronDown size={20}/>
                </Button>
              </div>
            </div>
          )}

          <div className={styles.sortTabBtnBox}>
            <Button variant="primary" className={styles.viewTabBtn}>
              <BiGridAlt />
            </Button>
            <Button variant="primary" className={styles.viewTabBtn}>
              <BiListUl />
            </Button>
          </div>
        </div>
      </Col>
    </>
  );
}

export default SortTabs;
