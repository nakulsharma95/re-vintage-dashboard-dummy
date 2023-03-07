import { Col, Row } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFilter } from 'react-icons/bs';
import SortByDropdown from '../../components/common/sortByDropdown';
import DoughnutChart from '../../components/charts/doughnutChart';
import VerticalBarChart from '../../components/charts/verticalBarChart';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import OutlineButton from '../../components/common/buttons/OutlineButton';
import HeaderPrimary from '../../components/common/headerPrimary';
import SearchPrimary from '../../components/common/searchPrimary';
import ToggleView from '../../components/common/toggleView';
import NonReDetailCard from '../../components/non-re/nonReDetailCard';
import useMediaQuery from '../../components/common/useMedia';
import BottomActionBar from '../../components/common/bottomActionBar';

import styles from './style.module.scss';

function NonRe() {
  const isSmallScreen = useMediaQuery(767);
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
        position: !isSmallScreen ? 'right' : 'bottom',
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
    <div className={styles.nonReStyle}>
      <Breadcrumb title="Retail" addmoretitle="Non-RE" />
      <HeaderPrimary headerClass="mb-2" title="Non-RE">
        {!isSmallScreen && (
          <>
            <OutlineButton title="Export Data" rightIcon={<RiShareBoxFill />} />
            <SearchPrimary placeholder="Search Name, Location, Reference ID" />
          </>
        )}
      </HeaderPrimary>

      <div className="bottom-white-border mt-3 mb-3" />
      <div className="action-list-style my-3">
        <div className="left-sec">
          <h5 className="title3">25 Bids Available</h5>
        </div>

        <div className="right-sec">
          <SortByDropdown
            droptitle="Status"
            options={['Pending', 'Complete', 'Waiting']}
          />
          <ToggleView />
        </div>
      </div>
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

      {isSmallScreen && (
        <BottomActionBar>
          <button type="button">
            Export Data <RiShareBoxFill />
          </button>
          <button type="button">
            Search <AiOutlineSearch />
          </button>
          <button type="button">
            Filter <BsFilter />
          </button>
        </BottomActionBar>
      )}
    </div>
  );
}

export default NonRe;
