import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import ClosedBikeCard from '../../../components/biddingPortal/biddingPrimaryCard';
import BiddingTimer from '../../../components/biddingPortal/biddingTimer';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import FilterButton from '../../../components/common/filterButton';
import HeaderPrimary from '../../../components/common/headerPrimary';
import DetailPagination from '../../../components/common/paginationPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';

export default function ClosedBids() {
  const closedBikeData = [
    {
      imageUrl: '/images/bikeImage.png',
      name: 'Classic 350',
      number: 'DL6TAL7314',
      km: '48,523',
      year: '2020',
      location: 'Mumbai, Maharashtra',
      highestbidPrice: '1,25,000.00',
      bidByName: 'Neel motors',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      name: 'Classic 350',
      number: 'DL6TAL7215',
      km: '48,523',
      year: '2020',
      location: 'Janakpuri, Delhi',
      highestbidPrice: '1,25,000.00',
      bidByName: 'Neel motors',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      name: 'Classic 350',
      number: 'DL6TAL7016',
      km: '48,523',
      year: '2020',
      location: 'Chandigarh',
      highestbidPrice: '1,25,000.00',
      bidByName: 'Neel motors',
    },
    {
      imageUrl: '/images/bikeImage4.png',
      name: 'Classic 350',
      number: 'DL6TAL7119',
      km: '48,523',
      year: '2020',
      location: 'Noida, Uttar Pradesh',
      highestbidPrice: '1,25,000.00',
      bidByName: 'Neel motors',
    },
  ];
  return (
    <div>
      <div className="d-md-flex align-items-center justify-content-between">
        <Breadcrumb title="Bidding Portal" addmoretitle="Closed Bids" />
        <BiddingTimer biddingStartTime={14} biddingEndTime={17} />
      </div>
      <HeaderPrimary headerClass="mb-2" title="Closed Bids">
        <OutlineButton title="Export Data" rightIcon={<RiShareBoxFill />} />
        <SearchPrimary placeholder="Search Name, Location, Reference ID" />
        <FilterButton />
      </HeaderPrimary>

      <div className="custom-tab-style">
        <Tabs
          className="mb-3"
          defaultActiveKey="title1"
          id="uncontrolled-tab-example"
          tabclassname="custom-tab-nav"
        >
          <Tab eventKey="title1" title="Bids">
            <div className="action-list-style my-3">
              <div className="left-sec">
                <h5 className="title3">25 Bids Available</h5>
              </div>
            </div>
            <Row className="mb-3">
              {closedBikeData.map((item) => (
                <Col md={3} xs={6} className="p-xs-1">
                  <ClosedBikeCard
                    className="img-shadow"
                    highestBidSymbol
                    arrowBtn
                    bidTitle="Highest Bid"
                    isClosedTitle
                    closedBid
                    imageUrl={item.imageUrl}
                    closedBikeName={item.name}
                    closedBikeNumber={item.number}
                    kmDrive={item.km}
                    modelYear={item.year}
                    location={item.location}
                    highestClosedBidPrice={item.highestbidPrice}
                    motorShopName={item.bidByName}
                  />
                </Col>
              ))}
            </Row>
            <DetailPagination className="mt-3" />
          </Tab>
          <Tab eventKey="title2" title="No Bids">
            <div className="action-list-style my-3">
              <div className="left-sec">
                <h5 className="title3">25 Bids Available</h5>
              </div>
            </div>
            <Row className="mb-3">
              {closedBikeData.map((item) => (
                <Col md={3}>
                  <ClosedBikeCard
                    className="img-shadow"
                    bidTitle="No bidding on this motorcycle."
                    isCheckbox
                    arrowBtn
                    isClosedTitle
                    highestBid
                    imageUrl={item.imageUrl}
                    closedBikeName={item.name}
                    closedBikeNumber={item.number}
                    kmDrive={item.km}
                    modelYear={item.year}
                    location={item.location}
                  />
                </Col>
              ))}
            </Row>
            <DetailPagination className="mt-3" />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
