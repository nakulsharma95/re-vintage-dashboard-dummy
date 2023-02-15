import { Row, Col } from 'react-bootstrap';
import BiddingOverview from '../../components/biddingPortal/overviewCard';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import Filters from '../../components/common/filters';
import NumberCard from '../../components/biddingPortal/numberCard';
import BiddingBikeCard from '../../components/biddingPortal';
import BiddingTimer from '../../components/biddingPortal/biddingTimer';

export default function Procurement() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <Breadcrumb title="Bidding Portal" addmoretitle="Bidding Portal" />
        <BiddingTimer title="Bidding is active now!" timer="02 : 23 : 36" />
      </div>
      <Filters
        filterInput
        filterButton
        title="Bidding Portal" 
      />
      <Row>
        <Col md={6}>
          <NumberCard />
        </Col>
        <Col md={6}>
          <BiddingOverview />
        </Col>
      </Row>
      <BiddingBikeCard />
    </div>
  );
}
