import Link from 'next/link';
import { Col, Dropdown, Form, Row, Tab, Tabs } from 'react-bootstrap';
import { FiSettings } from 'react-icons/fi';
import { RiShareBoxFill } from 'react-icons/ri';
import UpcomingBikeCard from '../../../components/biddingPortal/biddingPrimaryCard';
import BiddingTimer from '../../../components/biddingPortal/biddingTimer';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import ButtonPrimary from '../../../components/common/buttons/ButtonPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import FilterButton from '../../../components/common/filterButton';
import HeaderPrimary from '../../../components/common/headerPrimary';
import DetailPagination from '../../../components/common/paginationPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';
import EmptyState from '../../../components/emptyState';

// Style here
import styles from './style.module.scss';

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
        <BiddingTimer biddingStartTime={14} biddingEndTime={17} />
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
              <div className={styles.lastEdited}>
                Last edited by: <Link href="/">Rahul Sharma</Link>
              </div>
              <div className={styles.bidPricebtn}>
                <ButtonPrimary title="Apply" />
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <OutlineButton title="Esport Data" rightIcon={<RiShareBoxFill />} />
        <SearchPrimary placeholder="Search Model, State, Registration No." />
        <FilterButton />
      </HeaderPrimary>

      <div className="custom-tab-style">
        <Tabs
          className="mb-3"
          defaultActiveKey="title1"
          id="uncontrolled-tab-example"
          tabClassName="custom-tab-nav"
        >
          <Tab eventKey="title1" title="Today">
            <div className="action-list-style my-3">
              <div className="left-sec">
                <h5 className="title3">25 Bids Available</h5>
              </div>
            </div>

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
          <Tab eventKey="title2" title="Next Bidding (31 Dec)">
            <EmptyState
              title="No Result Found!"
              description="we couldn find what you searched for try something again."
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
