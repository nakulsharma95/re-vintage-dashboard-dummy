import { Col, Row } from 'react-bootstrap';
import BikeCardFooter from '../../components/common/cardFooter';
import Bids from '../../components/biddingPortal/bids';
import BikeDetailTitle from '../../components/common/detailHeader';
import BikeHistory from '../../components/biddingPortal/bikeHistory';
import BikeInspection from '../../components/biddingPortal/bikeInspection';
import styles from './style.module.scss';
import BackButton from '../../components/common/buttons/BackButton';
import BikeSlider from '../../components/common/thumbnailSlider';
import MotorcycleDetail from '../../components/procurements/motorcycleDetail';

export default function BiddingDetails() {
  return (
    <div>
      <BackButton backLink="/bidding-portal" title="Back" />
      <BikeDetailTitle
        title="Motorcycle Details"
        smtitle="Please find all the necessary details below"
        statusTitle="Up for bid"
        bidStatus
      />
      <div className={styles.bikeDetailContainer}>
        <Row>
          <Col md={6}>
            <BikeSlider />
          </Col>
          <Col md={6}>
            <MotorcycleDetail
              bikeInfo
              detailMenu
              detailLocation
              footerPrice
              bikePriceTitle="Base Price"
              bikeNumber="- DL6SEP7845"
              bikeName="HUNTER 350"
              chasisNumber="- FB29FH9219HR1"
            />
          </Col>
        </Row>
        <BikeCardFooter creDetails ownerDetails />
      </div>
      <Bids />
      <BikeInspection />
      <BikeHistory />
    </div>
  );
}
