import { Row, Col, Dropdown, Form, Tab, Tabs } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import { FiSettings } from 'react-icons/fi';
import UpcomingBikeCard from '../../../components/biddingPortal/biddingPrimaryCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailPagination from '../../../components/common/paginationPrimary';
import BiddingTimer from '../../../components/biddingPortal/biddingTimer';
import HeaderPrimary from '../../../components/common/headerPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import FilterButton from '../../../components/common/filterButton';
import ButtonPrimary from '../../../components/common/buttons/ButtonPrimary';
import SortTabs from '../../../components/common/sortTabs';
// Style here
import styles from './style.module.scss';
import Link from 'next/link';

export default function UpcomingBids() {
  const upcomingBikeData = [
    {
      imageUrl: '/images/bikeImage.png',
      name: 'Classic 350',
      number: 'DL6TAL7314',
      km: '48,523',
      year: '2020',
      location: 'Mumbai, Maharashtra',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      name: 'Classic 350',
      bidPrice: '1,35,000',
      number: 'DL6TAL7215',
      km: '48,523',
      year: '2020',
      location: 'Janakpuri, Delhi',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      name: 'Classic 350',
      bidPrice: '1,45,000',
      number: 'DL6TAL7016',
      km: '48,523',
      year: '2020',
      location: 'Chandigarh',
    },
    {
      imageUrl: '/images/bikeImage4.png',
      name: 'Classic 350',
      bidPrice: '1,56,000',
      number: 'DL6TAL7119',
      km: '48,523',
      year: '2020',
      location: 'Noida, Uttar Pradesh',
    },
  ];
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <Breadcrumb title="Bidding Portal" addmoretitle="Upcoming Bids" />
        <BiddingTimer title="Bidding is active now!" timer="02 : 23 : 36" />
      </div>
      <HeaderPrimary headerClass="mb-2" title="Upcoming Bids">
        <div>
          <Dropdown className={styles.bidPricDropdown}>
            <Dropdown.Toggle
              variant=""
              id="dropdown-basic"
              className={styles.dropdownToggle}
            >
              Bid Price Logic <FiSettings />
            </Dropdown.Toggle>

            <Dropdown.Menu className={styles.bidPriceDropdownMenu}>
              <div className={styles.bidPriceValue}>
                <div className={styles.title}>
                  Base Price <span>X</span>
                </div>
                <div>
                  <Form.Control type="text" placeholder="Enter a value" />
                </div>
                <div className={styles.title}>%</div>
              </div>
              <div className={styles.lastEdited}>Last edited by: <Link href="/">Rahul Sharma</Link></div>
              <div className={styles.bidPricebtn}>
                <ButtonPrimary title="Apply" />
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <OutlineButton
          title="Scheduled Evaluation"
          rightIcon={<RiShareBoxFill />}
        />
        <SearchPrimary placeholder="Search Name, Location, Reference ID" />
        <FilterButton />
      </HeaderPrimary>

      <div className="custom-tab-style">
        <Tabs
          className="mb-3"
          defaultActiveKey="title1"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="title1" title="Today">
            <SortTabs
              selectAllCheck
              sortTabTitle="25 Bids Available"
            />
            <Row className="mb-3">
              {upcomingBikeData.map((item) => (
                <Col md={3}>
                  <UpcomingBikeCard
                    isCardTitle
                    baseprice
                    arrowBtn
                    imageUrl={item.imageUrl}
                    bikeName={item.name}
                    bikeNumber={item.number}
                    kmDrive={item.km}
                    modelYear={item.year}
                    location={item.location}
                  />
                </Col>
              ))}
            </Row>
            <DetailPagination className="mt-3" />
          </Tab>
          <Tab eventKey="title2" title="Next Bidding (31 Dec)" />
        </Tabs>
      </div>
    </div>
  );
}
