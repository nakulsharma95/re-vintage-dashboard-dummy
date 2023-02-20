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
  const bikeDetailData = [
    {
      bikeName: 'HUNTER 350',
      bikeNumber: '- DL6SEP7845',
      chasisNumber: '- B28EG192BR19',
      bikeLocation: 'Mumbai, Maharashtra',
      priceTitle: 'Base Price',
      evaluationPrice: '1,20,000.00',
      evaluationFootPrice: '1,25,000.00',
      highestBidPrice: 'Neel Motors, Lajpat Nagar, Delhi',
    },
  ];
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
          {bikeDetailData.map((item) => (
            <Col md={6}>
              <MotorcycleDetail
                bikeInfo
                detailMenu
                detailLocation
                footerPrice
                bikeName={item.bikeName}
                bikeNumber={item.bikeNumber}
                chasisNumber={item.chasisNumber}
                bikeLocation={item.bikeLocation}
                priceTitle={item.priceTitle}
                evaluationPrice={item.evaluationPrice}
                evaluationFootPrice={item.evaluationFootPrice}
                highestBidPrice={item.highestBidPrice}
              />
            </Col>
          ))}
        </Row>
        <BikeCardFooter creDetails ownerDetails />
      </div>
      <Bids />
      <BikeInspection />
      <BikeHistory />
    </div>
  );
}
