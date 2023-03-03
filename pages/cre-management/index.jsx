import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FiPlus } from 'react-icons/fi';
import Link from 'next/link';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import CreDetailCard from '../../components/cre-management/creDetailCard';
import CrePerformanceCard from '../../components/cre-management/crePerformanceCard';
import CrePerformanceMatrix from '../../components/cre-management/crePerformanceMatrix';
import HeaderPrimary from '../../components/common/headerPrimary';
import SearchPrimary from '../../components/common/searchPrimary';

import styles from './style.module.scss';
import SortTabs from '../../components/common/sortTabs';
import OutlineDropdown from '../../components/common/buttons/OutlineDropdown';

function CreManagement() {
  const cardData = [
    {
      imageUrl: '/images/bob-Vishwas.png',
      overDue: 'evolutionOver',
      bikeStatus: 'Upload Content',
    },
    {
      imageUrl: '/images/bob-Vishwas1.png',
      overDue: 'evolutionOver',
      bikeStatus: 'Upload Content',
    },
    {
      imageUrl: '/images/bob-Vishwas2.png',
      overDue: 'evolutionOver',
      bikeStatus: 'Upload Content',
    },
    {
      imageUrl: '/images/bob-Vishwas3.png',
      overDue: 'evolutionOver',
      bikeStatus: 'Upload Content',
    },
  ];
  const performanceCardData = [
    {
      cardBodyBg: 'bgGray18',
      title: 'Procurement Lead Management',
      totalNumber: '93/124',
      achievedScore: '75%',
    },
    {
      cardBodyBg: 'bgGray28',
      title: 'Bidding / First Offer',
      totalNumber: '90/93',
      achievedScore: '97%',
    },
    {
      cardBodyBg: 'bgblack40',
      title: 'Deal Closure',
      totalNumber: '72/90',
      achievedScore: '80%',
    },
    {
      cardBodyBg: 'bgGray18',
      title: 'General Query Response',
      totalNumber: '57/80',
      achievedScore: '80%',
    },
  ];

  return (
    <>
      <Breadcrumb title="CRE Management" addmoretitle="CRE Management" />

      <HeaderPrimary title="CRE Management" subTitle="CRE Management module">
        <SearchPrimary placeholder="Search Name, Location, Reference ID" />
        <OutlineDropdown
          dropdownTitle="Zone"
          options={['Zone1', 'Zone2', 'Zone3']}
        />

        <OutlineDropdown
          dropdownTitle="Delhi"
          options={['Pune', 'Mumbai', 'Jaipur']}
        />

        <Link href="cre-management/add-cre" className="addMotorBtn">
          <FiPlus /> Add CRE
        </Link>
      </HeaderPrimary>

      <div className="bottom-white-border mt-3 mb-3" />
      <SortTabs selectAllCheck sortTabTitle="Available CRE(s)" />

      <Row>
        {cardData.map((item) => (
          <Col xxl={3} xl={4} lg={6} md={6}>
            <CreDetailCard
              name="Bob Vishwas"
              jobPost="(Senior CRE)"
              location="Gurugram, Haryana"
              phoneNo="Gurugram, Haryana"
              emailID="bobvishwas@royalenfield.com"
              creDetailData={item}
            />
          </Col>
        ))}

        <div>
          <h2 className={styles.heading}>Cumulative Performance</h2>
          <Row>
            {performanceCardData.map((item) => (
              <Col xxl={3} lg={6} md={6}>
                <CrePerformanceCard
                  cardBodyStyle={item.cardBodyBg}
                  title={item.title}
                  totalNumber={item.totalNumber}
                  achievedScore={item.achievedScore}
                />
              </Col>
            ))}
          </Row>
        </div>
        <Col xxl={12} lg={12} md={12}>
          <CrePerformanceMatrix creTitle="Cumulative CRE Performance Matrix" />
        </Col>
      </Row>
    </>
  );
}

export default CreManagement;
