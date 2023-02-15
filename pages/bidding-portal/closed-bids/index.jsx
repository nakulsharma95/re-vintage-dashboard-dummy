import ClosedBikeCard from '../../../components/biddingPortal/biddingPrimaryCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailPagination from '../../../components/common/paginationPrimary';
import Filters from '../../../components/common/filters';
import TabPrimary from '../../../components/common/tabPrimary';
import BiddingTimer from '../../../components/biddingPortal/biddingTimer';
import { Row, Col } from 'react-bootstrap';

export default function ClosedBids() {
  const closedBikeData = [
    {
      imageUrl: '/images/bikeImage.png',
      bidPrice: '1,25,000',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      bidPrice: '1,35,000'
    },
    {
      imageUrl: '/images/bikeImage3.png',
      bidPrice: '1,45,000'
    },
    {
      imageUrl: '/images/bikeImage4.png',
      bidPrice: '1,56,000'
    },
  ];
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <Breadcrumb title="Bidding Portal" addmoretitle="Closed Bids" />
        <BiddingTimer title="Bidding is active now!" timer="02 : 23 : 36" />
      </div>
      <Filters filterInput filterButton title="Closed Bids" export />
      <TabPrimary title1="Bids" title2="No Bids" />
      <div className="mb-3">25 Bids Available</div>
      <Row className="mb-3">
      {closedBikeData.map((item) => (
        <Col md={3}>
          <ClosedBikeCard
            closedBid
            arrowBtn
            imageUrl={item.imageUrl}
          />
        </Col>
      ))}
      </Row>
      <DetailPagination className="mt-3" />
    </div>
  );
}
