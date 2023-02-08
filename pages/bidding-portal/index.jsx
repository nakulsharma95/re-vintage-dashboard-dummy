import { Row, Col } from 'react-bootstrap';
import BiddingOverview from 'common/overviewCard';
import Breadcrumb from 'common/breadCrumb';
import Filters from 'common/filters';
import NumberCard from 'common/numberCard';
import BiddingBikeCard from 'common/biddingBikeCard';
import BiddingTimer from 'common/biddingtimer';

export default function Procurement() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <Breadcrumb title="Bidding Portal" addmoretitle="Bidding Portal" />
        <BiddingTimer title="Bidding is active now!" timer="02 : 23 : 36" />
      </div>
      <Filters title="Bidding Portal" />
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
