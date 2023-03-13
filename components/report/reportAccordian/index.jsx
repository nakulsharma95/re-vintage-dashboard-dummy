/* eslint-disable react/no-array-index-key */
import React from 'react';
import Image from 'next/image';
import { Accordion } from 'react-bootstrap';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating';
import styles from './style.module.scss';

function ReportAccordian() {
  const accordianData = [
    {
      name: 'Rakesh Verma',
      ratingTitle: 'Lorem Ipsum Dolor Sit Amet.',
      description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      initialRating: 3,
      imgUrl: '/images/profile.png',
    },
    {
      name: 'Neha Dotania',
      ratingTitle: 'Lorem Ipsum Dolor Sit Amet.',
      description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      initialRating: 4,
      imgUrl: '/images/profile-2.png',
    },
    {
      name: 'Mitesh Rawat',
      ratingTitle: 'Lorem Ipsum Dolor Sit Amet.',
      description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      initialRating: 2,
      imgUrl: '/images/profile-3.png',
    },
    {
      name: 'Mitesh Rawat',
      ratingTitle: 'Lorem Ipsum Dolor Sit Amet.',
      description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      initialRating: 5,
      imgUrl: '/images/profile-4.png',
    },
  ];
  return (
    <div className={`${styles.reportAccordian} primary-accordion-style pt-3`}>
      <Accordion defaultActiveKey="0">
        {accordianData.map((item) => (
          <Accordion.Item key={item} eventKey={item}>
            <Accordion.Header>
              <div className={styles.accordianHead}>
                <div className="d-flex align-items-center my-2 ">
                  <Image
                    className={styles.profileIcon}
                    src={item.imgUrl}
                    alt="profil-img"
                    width="32"
                    height="32"
                  />
                  <h6 className={styles.accordianHeadName}>{item.name}</h6>
                  <span className="status-circle gray ms-3 mb-1" />
                  <p>4 Feb, 2023</p>
                </div>
                <div className="d-md-flex align-items-center mt-3">
                  <Rating
                    initialRating={item.initialRating}
                    emptySymbol={<AiOutlineStar size={20} color="#D17D39" />}
                    fullSymbol={<AiFillStar size={20} color="#F2A742" />}
                  />
                  <h6 className={styles.ratingTitle}>{item.ratingTitle}</h6>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body className={styles.description}>
              {item.description}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default ReportAccordian;
