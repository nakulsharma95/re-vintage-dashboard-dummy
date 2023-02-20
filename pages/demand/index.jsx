import React from 'react';
import OutlineDropdown from '../../components/common/buttons/OutlineDropdown';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import styles from "./style.module.scss";
import DemandNav from '../../components/demand/demandNav';
import DemandPrimaryCard from '~/components/demand/demandPrimaryCard';
import { Col, Row } from 'react-bootstrap';
import OutlineButton from '../../components/common/buttons/OutlineButton';
import { RiShareBoxFill } from 'react-icons/ri';
import { BiDownload } from 'react-icons/bi';

function Demand() {
  const dropdownList = [
    {
      dropdownTitle: 'This Year',
      dropdownMenuTitle: 'Jan 2020',
    },
    {
      dropdownTitle: 'Delhi',
      dropdownMenuTitle: 'Mumbai',
    },
    {
      dropdownTitle: 'City',
      dropdownMenuTitle: 'Delhi',
      dropdownMenuTitle: 'Chennai',
    },
  ];


  const cardList = [
    {
      imgUrl: '/images/bikeImage3.png',
      title: 'Classic J',
      smtitle: '250 Leads',
    },
    {
      imgUrl: '/images/bikeImage2.png',
      title: 'Bullet',
      smtitle: '200 Leads',
    },
    {
      imgUrl: '/images/bikeImage4.png',
      title: 'Bullet X',
      smtitle: '315 Leads',
    },
    {
      imgUrl: '/images/bikeImage.png',
      title: 'Himalayan',
      smtitle: '65 Leads',
    },
  ];

  const favDropdownList = [
    {
      dropdownTitle: 'This week',
      dropdownMenuTitle: 'Week 1',
    },
    {
      dropdownTitle: 'Delhi',
      dropdownMenuTitle: 'Mumbai',
    },
  ];
  return (
    <>
      <Breadcrumb title="Demand" />

      <DemandNav />

      <div className={styles.demandTitle}>Most Wish-Listed Motorcycle</div>
      <div className={styles.demandContainer}>
        <div className={styles.demandHead}>
          <div className={styles.title}>Wish-listed Motorcycles</div>
          <div className="d-flex align-items-center">
            {dropdownList.map((item) => (
              <OutlineDropdown
                dropdownTitle={item.dropdownTitle}
                dropdownMenuTitle={item.dropdownMenuTitle}
              />
            ))}
          </div>
        </div>

        <div className={styles.dummyGraphBox}>Garph Here...</div>
      </div>

      <div className={styles.demandTitle}>Total Leads</div>
      <div className={styles.demandContainer}>
        <div className={styles.demandHead}>
          <div className={styles.title}>Total Leads</div>

        </div>

        <div className={styles.dummyGraphBox}>Garph Here...</div>
      </div>

      <div className={styles.demandTitle}>All Time Favourites</div>
      <Row className="mt-3 mb-5">
        {cardList.map((item) => (
          <Col md={3}>
            <DemandPrimaryCard
              imgUrl={item.imgUrl}
              title={item.title}
              smtitle={item.smtitle}
            />
          </Col>
        ))}
      </Row>

      <div className={styles.demandHead}>
        <div className={styles.demandTitle}>All Time Favourites</div>
        <div className="d-flex align-items-center">
          <div className="me-3">
            <OutlineButton title="Export Data" leftIcon={<RiShareBoxFill />} />
          </div>
          <div className="me-3">
            <OutlineButton title="Import EXCEL" leftIcon={<BiDownload />} />
          </div>
          <span className="sortText">Sort By:</span>
          {favDropdownList.map((item) => (
            <OutlineDropdown
              dropdownTitle={item.dropdownTitle}
              dropdownMenuTitle={item.dropdownMenuTitle}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Demand;
