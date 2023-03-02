import React from 'react';
import { Accordion } from 'react-bootstrap';
import Rating from '@mui/material/Rating';

import styles from './style.module.scss';
import Image from 'next/image';

function ReportAccordian() {
  return (
    <div className={`${styles.reportAccordian} primary-accordion-style pt-3`}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className={styles.accordianHead}>
              <div className="d-flex align-items-center my-2 ">
                <Image
                  className={styles.profileIcon}
                  src="/images/profile.png"
                  alt="profil-img"
                />
                <h6 className={styles.accordianHeadName}>Rakesh Verma</h6>
                <span className="status-circle gray ms-3 mb-1"></span>
                <p>4 Feb, 2023</p>
              </div>
              <div className="d-flex align-items-center mt-2 ">
                <Rating name="size-medium" defaultValue={3} />
                <h6 className={styles.ratingTitle}>
                  Lorem Ipsum Dolor Sit Amet.
                </h6>
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className={styles.accordianHead}>
              <div className="d-flex align-items-center my-2 ">
                <Image
                  className={styles.profileIcon}
                  src="/images/profile-2.png"
                  alt="profil-img"
                />
                <h6 className={styles.accordianHeadName}>Neha Dotania</h6>
                <span className="status-circle gray ms-3 mb-1"></span>
                <p>4 Feb, 2023</p>
              </div>
              <div className="d-flex align-items-center mt-2 ">
                <Rating name="size-medium" defaultValue={5} />
                <h6 className={styles.ratingTitle}>Ut Enim Ad Minim Veniam.</h6>
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <div className={styles.accordianHead}>
              <div className="d-flex align-items-center my-2 ">
                <Image
                  className={styles.profileIcon}
                  src="/images/profile-3.png"
                  alt="profil-img"
                />
                <h6 className={styles.accordianHeadName}>Rakesh Verma</h6>
                <span className="status-circle gray ms-3 mb-1"></span>
                <p>4 Feb, 2023</p>
              </div>
              <div className="d-flex align-items-center mt-2 ">
                <Rating name="size-medium" defaultValue={3} />
                <h6 className={styles.ratingTitle}>
                  Lorem Ipsum Dolor Sit Amet.
                </h6>
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <div className={styles.accordianHead}>
              <div className="d-flex align-items-center my-2 ">
                <Image
                  className={styles.profileIcon}
                  src="/images/profile-4.png"
                  alt="profil-img"
                />
                <h6 className={styles.accordianHeadName}>Rakesh Verma</h6>
                <span className="status-circle gray ms-3 mb-1"></span>
                <p>4 Feb, 2023</p>
              </div>
              <div className="d-flex align-items-center mt-2 ">
                <Rating name="size-medium" defaultValue={2} />
                <h6 className={styles.ratingTitle}>
                  Lorem Ipsum Dolor Sit Amet.
                </h6>
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <div className={styles.accordianHead}>
              <div className="d-flex align-items-center my-2 ">
                <Image
                  className={styles.profileIcon}
                  src="/images/profile-5.png"
                  alt="profil-img"
                />
                <h6 className={styles.accordianHeadName}>Rakesh Verma</h6>
                <span className="status-circle gray ms-3 mb-1"></span>
                <p>4 Feb, 2023</p>
              </div>
              <div className="d-flex align-items-center mt-2 ">
                <Rating name="size-medium" defaultValue={4} />
                <h6 className={styles.ratingTitle}>
                  Lorem Ipsum Dolor Sit Amet.
                </h6>
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default ReportAccordian;
