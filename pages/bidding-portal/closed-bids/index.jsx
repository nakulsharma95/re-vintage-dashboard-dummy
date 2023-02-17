import { Row, Col } from 'react-bootstrap';
import ClosedBikeCard from '../../../components/biddingPortal/biddingPrimaryCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailPagination from '../../../components/common/paginationPrimary';
import Filters from '../../../components/common/filters';
import TabPrimary from '../../../components/common/tabPrimary';
import BiddingTimer from '../../../components/biddingPortal/biddingTimer';

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
      <Filters filterInput filterButton title="Closed Bids" export />
      <TabPrimary title1="Bids" title2="No Bids" />
      <div className="mb-3">25 Bids Available</div>
      <Row className="mb-3">
        {closedBikeData.map((item) => (
          <Col md={3}>
            <ClosedBikeCard
              arrowBtn
              closedBid
              imageUrl={item.imageUrl}
              bikeName={item.name}
              bikeNumber={item.number}
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
    </div>
  );
}
