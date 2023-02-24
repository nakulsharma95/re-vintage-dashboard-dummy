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
import DemandPrimaryTable from '../../components/demand/demandPrimaryTable';
import DetailPagination from '../../components/common/paginationPrimary';

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

  const barData = {
    labels: [
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
    ],
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

  // LIne CHart
  const optionLineChart = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          border: {
            dash: [2, 1],
          },
          color: '#575757',
        },
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const lineChartData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Dataset 1',
        borderColor: '#C93B2B',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        data: [65, 59, 80, 81, 56, 55, 40, 81, 56, 55, 40, 81, 56, 55, 40],
      },
      {
        label: 'Dataset 2',
        borderColor: '#52AF3C',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        data: [45, 69, 20, 91, 106, 55, 20, 45, 69, 20, 91, 106, 55, 20],
      },
      {
        label: 'Dataset 3',
        borderColor: '#46a2da',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        data: [15, 29, 10, 11, 30, 25, 80, 15, 29, 10, 11, 30, 25, 80],
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
          <div className={styles.stageTitle}>
            
          </div>
        </div>

        <div className={styles.dummyGraphBox}>
          <LineChart
            options={optionLineChart}
            data={lineChartData}
            graphClass={styles.graphStyle}
          />
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
      <DemandPrimaryTable />
      <DetailPagination />
    </>
  );
}

export default Demand;
