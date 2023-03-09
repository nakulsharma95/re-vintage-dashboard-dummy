import { Col, Row } from 'react-bootstrap';
import { BiRefresh } from 'react-icons/bi';
import { RiShareBoxFill } from 'react-icons/ri';
import ActiveBikeCard from '../../../components/biddingPortal/biddingPrimaryCard';
import BiddingTimer from '../../../components/biddingPortal/biddingTimer';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import FilterButton from '../../../components/common/filterButton';
import HeaderPrimary from '../../../components/common/headerPrimary';
import DetailPagination from '../../../components/common/paginationPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';

export default function ActiveBids() {
  const activeBikeData = [
    {
      imageUrl: '/images/bikeImage.png',
      name: 'Classic 350',
      number: 'DL6TAL7314',
      km: '48,523',
      year: '2020',
      location: 'Mumbai, Maharashtra',
      highestbidPrice: '1,25,000.00',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      name: 'Classic 350',
      number: 'DL6TAL7215',
      km: '48,523',
      year: '2020',
      location: 'Janakpuri, Delhi',
      highestbidPrice: '1,25,000.00',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      name: 'Classic 350',
      number: 'DL6TAL7016',
      km: '48,523',
      year: '2020',
      location: 'Chandigarh',
      highestbidPrice: '1,25,000.00',
    },
    {
      imageUrl: '/images/bikeImage4.png',
      name: 'Classic 350',
      number: 'DL6TAL7119',
      km: '48,523',
      year: '2020',
      location: 'Noida, Uttar Pradesh',
      highestbidPrice: '1,25,000.00',
    },
  ];
  return (
    <div>
      <div className="d-md-flex align-items-center justify-content-between">
        <Breadcrumb title="Bidding Portal" addmoretitle="Active Bids" />
        <BiddingTimer biddingStartTime={14} biddingEndTime={17} />
      </div>

      <HeaderPrimary
        headerClass="mb-2"
        title="Active Bids"
        subTitle="Please find all the necessary details"
      >
        <OutlineButton title="Export Data" rightIcon={<RiShareBoxFill />} />
        <OutlineButton title="Refresh bids" leftIcon={<BiRefresh />} />
        <SearchPrimary placeholder="Search Name, Location, Reference ID" />
        <FilterButton />
      </HeaderPrimary>

      <div className="bottom-white-border mt-3 mb-3" />
      <div className="action-list-style my-3">
        <div className="left-sec">
          <h5 className="title3">25 Bids Available</h5>
        </div>
      </div>

      <Row className="mb-3">
        {activeBikeData.map((item) => (
          <Col md={3} xs={6} className="p-xs-1">
            <ActiveBikeCard
              bidTitle="Highest Bid"
              highestBidSymbol
              highestBid
              isCardTitle
              arrowBtn
              imageUrl={item.imageUrl}
              bikeName={item.name}
              bikeNumber={item.number}
              kmDrive={item.km}
              modelYear={item.year}
              location={item.location}
              highestBidPrice={item.highestbidPrice}
            />
          </Col>
        ))}
      </Row>
      <DetailPagination className="mt-3" />
    </div>
  );
}
