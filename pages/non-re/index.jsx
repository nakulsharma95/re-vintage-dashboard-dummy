import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import NonReDetailCard from '../../components/non-re/nonReDetailCard';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import SortTabs from '../../components/common/sortTabs';
import SearchPrimary from '../../components/common/searchPrimary';
import HeaderPrimary from '../../components/common/headerPrimary';
import OutlineButton from '../../components/common/buttons/OutlineButton';
import VerticalBarChart from '../../components/charts/verticalBarChart';
import styles from './style.module.scss';
import DoughnutChart from '../../components/charts/doughnutChart';

function NonRe() {
  const nonReData = [
    {
      bikeName: '2020 Pulsar NS',
      bikeNumber: 'DL6TAL7314',
      price: '1,25,000.00',
      dealerRef: 'C2N0RJ20FC2N',
      dealerAddress: 'Neel Motors, Lajpat Nagar, Delhi',
      creUserName: 'John Watson',
      creUserNumber: '9876543210',
    },
    {
      bikeName: '2015 Avenger',
      bikeNumber: 'DL6TAL7314',
      price: '1,25,000.00',
      dealerRef: 'C2N0RJ20FC2M',
      dealerAddress: 'Neel Motors, Lajpat Nagar, Delhi',
      creUserName: 'Danim Watson',
      creUserNumber: '9876543210',
    },
    {
      bikeName: '2021 TVS Ronin',
      bikeNumber: 'DL6TAL7314',
      price: '1,25,000.00',
      dealerRef: 'C2N0RJ20FC6M',
      dealerAddress: 'Neel Motors, Lajpat Nagar, Delhi',
      creUserName: 'Constanza',
      creUserNumber: '9876543210',
    },
    {
      bikeName: '2021 TVS Ronin',
      bikeNumber: 'DL6TAL7314',
      price: '1,25,000.00',
      dealerRef: 'C2N0RJ20FC6M',
      dealerAddress: 'Neel Motors, Lajpat Nagar, Delhi',
      creUserName: 'John Maxlome',
      creUserNumber: '9876543210',
    },
    {
      bikeName: '2020 Pulsar NS',
      bikeNumber: 'DL6TAL7314',
      price: '1,25,000.00',
      dealerRef: 'C2N0RJ20FC6M',
      dealerAddress: 'Neel Motors, Lajpat Nagar, Delhi',
      creUserName: 'John Watson',
      creUserNumber: '9876543210',
    },
    {
      bikeName: '2015 Avenger',
      bikeNumber: 'DL6TAL7314',
      price: '1,25,000.00',
      dealerRef: 'C2N0RJ20FC6P',
      dealerAddress: 'Neel Motors, Lajpat Nagar, Delhi',
      creUserName: 'John Watson',
      creUserNumber: '9876543210',
    },
    {
      bikeName: '2021 TVS Ronin',
      bikeNumber: 'DL6TAL7314',
      price: '1,25,000.00',
      dealerRef: 'C2N0RJ20FC6S',
      dealerAddress: 'Neel Motors, Lajpat Nagar, Delhi',
      creUserName: 'John Watson',
      creUserNumber: '9876543210',
    },
    {
      bikeName: '2021 TVS Ronin',
      bikeNumber: 'DL6TAL7314',
      price: '1,25,000.00',
      dealerRef: 'C2N0RJ20FC6L',
      dealerAddress: 'Neel Motors, Lajpat Nagar, Delhi',
      creUserName: 'John Watson',
      creUserNumber: '9876543210',
    },
  ];

  const optionsDoughnut = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          fontSize: 20,
          color: 'white',
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 15,
        },
      },
    },
  };

  const doughnutChartData = {
    labels: [
      'Upcoming Bids',
      'Active Bids',
      'Closed Bids',
      'No Bids',
      'Seller Portal',
    ],
    datasets: [
      {
        label: 'My First Dataset',
        data: [100, 300, 100, 80, 50],
        backgroundColor: [
          '#F1DF67',
          '#D2635B',
          '#403E3E',
          '#DA291C',
          '#F28823',
        ],
        borderColor: ['#686868'],
        hoverOffset: 4,
        borderWidth: 0.2,
      },
    ],
  };

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

  const labels = ['Bajaj', 'TVS', 'Honda', 'Hero', 'Others'];

  const barData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [500, 420, 390, 380, 320],
        backgroundColor: [
          '#EE0000',
          '#F2AE00',
          '#FF8200',
          '#E25B56',
          '#403E3E',
        ],
      },
    ],
  };
  return (
    <>
      <Breadcrumb title="Retail" addmoretitle="Non-RE" />
      <HeaderPrimary headerClass="mb-2" title="Non-RE">
        <OutlineButton title="Export Data" rightIcon={<RiShareBoxFill />} />
        <SearchPrimary placeholder="Search Name, Location, Reference ID" />
      </HeaderPrimary>

      <div className="bottom-white-border mt-3 mb-3" />
      <SortTabs selectAllCheck isSortTabBox />
      <Row className="mb-4">
        <Col md={6}>
          <div className={styles.enquireDoughnutChart}>
            <h4 className="mb-4">Non-RE Exchange Enquiries</h4>
            <div className={styles.barChart}>
              <DoughnutChart
                size={210}
                options={optionsDoughnut}
                data={doughnutChartData}
              />
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className={styles.enquireBarChart}>
            <h4 className="mb-4">Non-RE Exchange Enquiries</h4>
            <div className={styles.barChart}>
              <VerticalBarChart
                size={270}
                data={barData}
                options={barChartOptions}
              />
            </div>
          </div>
        </Col>
      </Row>
      <div className={styles.nonReDetailCard}>
        {nonReData.map((item) => (
          <NonReDetailCard
            bikeName={item.bikeName}
            bikeNumber={item.bikeNumber}
            reData={item}
            price={item.price}
            dealerRef={item.dealerRef}
            dealerAddress={item.dealerAddress}
            creUserName={item.creUserName}
            creUserNumber={item.creUserNumber}
          />
        ))}
      </div>
    </>
  );
}

export default NonRe;
