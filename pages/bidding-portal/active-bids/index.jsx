import ActiveBikeCard from '../../../components/biddingPortal/biddingPrimaryCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailPagination from '../../../components/common/paginationPrimary';
import Filters from '../../../components/common/filters';
import BiddingTimer from '../../../components/biddingPortal/biddingTimer';
import { Row, Col } from 'react-bootstrap';

export default function ActiveBids() {
  const upcomingBikeData = [
    {
      imageUrl: '/images/bikeImage.png',
      bidPrice: '1,25,000',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      bidPrice: '1,35,000',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      bidPrice: '1,45,000',
    },
    {
      imageUrl: '/images/bikeImage4.png',
      bidPrice: '1,56,000',
    },
  ];
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <Breadcrumb title="Bidding Portal" addmoretitle="Active Bids" />
        <BiddingTimer title="Bidding is active now!" timer="02 : 23 : 36" />
      </div>

      <Filters
        filterInput
        filterButton
        title="Active Bids"
        subTitle="Please find all the necessary details"
        export
        refresh
      />

      <div className="bottom-white-border mt-3 mb-3" />
      <div className="mb-3">25 Bids Available</div>
      <Row className="mb-3">
        {upcomingBikeData.map((item) => (
          <Col md={3}>
            <ActiveBikeCard 
              highestBid 
              arrowBtn 
              imageUrl={item.imageUrl}
              highestBidPrice={item.bidPrice}
            />
          </Col>
        ))}
      </Row>
      <DetailPagination className="mt-3" />
    </div>
  );
}
