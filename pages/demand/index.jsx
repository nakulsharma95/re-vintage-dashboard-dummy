import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import { BiDownload } from 'react-icons/bi';
import OutlineDropdown from '../../components/common/buttons/OutlineDropdown';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import styles from './style.module.scss';
import DemandNav from '../../components/demand/demandNav';
import DemandPrimaryCard from '../../components/demand/demandPrimaryCard';
import OutlineButton from '../../components/common/buttons/OutlineButton';
import VerticalBarChart from '../../components/charts/verticalBarChart';
import LineChart from '../../components/charts/lineChart';

function Demand() {
  // bar Chart Here
  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      title: {
        display: false,
        text: '',
      },
    },
  };

  const labels = [
    'Hunter 350',
    'Classic 350',
    'Scram 411',
    'Meteor',
    'Interceptor',
    'Continental GT',
    'Himalayan',
    'Bullet 350',
    'Bullet 350 ES',
    'Meteor Fireball',
  ];

  const barData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [500, 420, 390, 380, 320, 280, 260, 200, 160, 140],
        backgroundColor: [
          '#F1DF67',
          '#F1DF67',
          '#F2AE00',
          '#F1DF67',
          '#F1DF67',
          '#F1DF67',
          '#F1DF67',
          '#F1DF67',
          '#F1DF67',
        ],
      },
    ],
  };

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

        <div className={styles.wishListedGraphBox}>
          <VerticalBarChart data={barData} options={barChartOptions} />
        </div>
      </div>

      <div className={styles.demandTitle}>Total Leads</div>
      <div className={styles.demandContainer}>
        <div className={styles.demandHead}>
          <div className={styles.title}>Total Leads</div>
        </div>

        <div className={styles.dummyGraphBox}>
          <LineChart />
        </div>
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
