import { Row, Col } from 'react-bootstrap';
import UpcomingBikeCard from '../../../components/biddingPortal/biddingPrimaryCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailPagination from '../../../components/common/paginationPrimary';
import Filters from '../../../components/common/filters';
import TabPrimary from '../../../components/common/tabPrimary';
import BiddingTimer from '../../../components/biddingPortal/biddingTimer';

export default function UpcomingBids() {
  const UpcomingBikeData = [
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
        <Breadcrumb title="Bidding Portal" addmoretitle="Upcoming Bids" />
        <BiddingTimer title="Bidding is active now!" timer="02 : 23 : 36" />
      </div>
      <Filters filterInput filterButton title="Upcoming Bids" export bidPrice />
      <TabPrimary title1="Today" title2="Next Bidding (31 Dec)" />
      <div className="mb-3">25 Bids Available</div>
      <Row className="mb-3">
        {UpcomingBikeData.map((item) => (
          <Col md={3}>
            <UpcomingBikeCard baseprice arrowBtn imageUrl={item.imageUrl} />
          </Col>
        ))}
      </Row>
      <DetailPagination className="mt-3" />
    </div>
  );
}
