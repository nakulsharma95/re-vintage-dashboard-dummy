import UpcomingBikeCard from '../../../components/biddingPortal/biddingPrimaryCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailPagination from '../../../components/common/paginationPrimary';
import Filters from '../../../components/common/filters';
import TabPrimary from '../../../components/common/tabPrimary';
import BiddingTimer from '../../../components/biddingPortal/biddingTimer';
import { Row, Col } from 'react-bootstrap';

export default function UpcomingBids() {
  const upcomingBikeData = [
    {
      imageUrl: '/images/bikeImage.png',
      name:'Classic 350',
      number:'DL6TAL7314',
      km:'48,523',
      year:'2020',
      location:'Mumbai, Maharashtra',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      name:'Classic 350',
      bidPrice: '1,35,000',
      number:'DL6TAL7215',
      km:'48,523',
      year:'2020',
      location:'Janakpuri, Delhi',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      name:'Classic 350',
      bidPrice: '1,45,000',
      number:'DL6TAL7016',
      km:'48,523',
      year:'2020',
      location:'Chandigarh',
    },
    {
      imageUrl: '/images/bikeImage4.png',
      name:'Classic 350',
      bidPrice: '1,56,000',
      number:'DL6TAL7119',
      km:'48,523',
      year:'2020',
      location:'Noida, Uttar Pradesh',
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
        {upcomingBikeData.map((item) => (
          <Col md={3}>
            <UpcomingBikeCard 
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
    </div>
  );
}
