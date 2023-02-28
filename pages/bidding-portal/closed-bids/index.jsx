import { Row, Col, Tab, Tabs } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import ClosedBikeCard from '../../../components/biddingPortal/biddingPrimaryCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailPagination from '../../../components/common/paginationPrimary';
import BiddingTimer from '../../../components/biddingPortal/biddingTimer';
import HeaderPrimary from '../../../components/common/headerPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import FilterButton from '../../../components/common/filterButton';
import SortTabs from '../../../components/common/sortTabs';

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
      <div className="d-flex align-items-center justify-content-between">
        <Breadcrumb title="Bidding Portal" addmoretitle="Closed Bids" />
        <BiddingTimer title="Bidding is active now!" timer="02 : 23 : 36" />
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
        >
          <Tab eventKey="title1" title="Bids">
            <SortTabs
              selectAllCheck
              sortTabTitle="25 Bids Available"
            />
            <Row className="mb-3">
              {closedBikeData.map((item) => (
                <Col md={3}>
                  <ClosedBikeCard
                    className="img-shadow"
                    highestBidSymbol
                    arrowBtn
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
            <SortTabs
              selectAllCheck
              sortTabTitle="25 Bids Available"
            />
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
