import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import BikeCardRadio from '../../../components/common/cardCheckbox';
import DetailPagination from '../../../components/common/paginationPrimary';
import Dealershipdetails from '../../../components/dealer-management/dealershipDetailes';
import Review from '../../../components/dealer-management/reviewSlider';
import EmptyState from '../../../components/emptyState';
import styles from './style.module.scss';

function DealershipDetails() {
  const cardData = [
    {
      imageUrl: '/images/bikeImage.png',
      overDue: 'evolutionOver',
      dealerLocation: 'Neel Motors, Lajpat Nagar, Delhi',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      dealerLocation: 'Neel Motors, Rohini Nagar, Delhi',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      dealerLocation: 'Neel Motors, Punjabi Bagh, Delhi',
    },
    {
      imageUrl: '/images/bikeImage4.png',
      dealerLocation: 'Neel Motors, Lajpat Nagar, Delhi',
    },
  ];
  return (
    <div>
      <Dealershipdetails />
      <h4 className={styles.dealerTitle}>Dealer’s Listings</h4>
      <div className="custom-tab-style">
        <Tabs
          className="mb-3"
          defaultActiveKey="title1"
          id="uncontrolled-tab-example"
          tabclassname="custom-tab-nav"
        >
          <Tab eventKey="title1" title="Inventory">
            <div className="action-list-style my-3">
              <div className="left-sec">
                <h5 className="title3">37 Listing Found</h5>
              </div>
            </div>
            <Row className="mb-3 mt-3">
              {cardData.map((item) => (
                <Col xxl={3} xl={4} lg={6} key={item.id}>
                  <BikeCardRadio
                    bikeModal="2015 Classic 350"
                    bikeRc="-DL6TAL7314"
                    bikekm="43,384 km"
                    bikeOwner="1st Owner"
                    bikeCc="350 CC"
                    bikePrice="1,25,000.00"
                    bikeDealer="(C2N0RJ20FC2N)"
                    dealerAddress="Neel Motors, Lajpat Nagar, Delhi"
                    imageUrl={item.imageUrl}
                    dealerLocation={item.dealerLocation}
                    isEditButton
                    isCreContact
                  />
                </Col>
              ))}
            </Row>
            <Row className="mb-3">
              {cardData.map((item) => (
                <Col xxl={3} xl={4} lg={6} key={item.id}>
                  <BikeCardRadio
                    bikeModal="2015 Classic 350"
                    bikeRc="-DL6TAL7314"
                    bikekm="43,384 km"
                    bikeOwner="1st Owner"
                    bikeCc="350 CC"
                    bikePrice="1,25,000.00"
                    bikeDealer="(C2N0RJ20FC2N)"
                    dealerAddress="Neel Motors, Lajpat Nagar, Delhi"
                    imageUrl={item.imageUrl}
                    dealerLocation={item.dealerLocation}
                    isEditButton
                    isCreContact
                  />
                </Col>
              ))}
            </Row>
            <Row className="mb-3">
              {cardData.map((item) => (
                <Col xxl={3} xl={4} lg={6} key={item.id}>
                  <BikeCardRadio
                    bikeModal="2015 Classic 350"
                    bikeRc="-DL6TAL7314"
                    bikekm="43,384 km"
                    bikeOwner="1st Owner"
                    bikeCc="350 CC"
                    bikePrice="1,25,000.00"
                    bikeDealer="(C2N0RJ20FC2N)"
                    dealerAddress="Neel Motors, Lajpat Nagar, Delhi"
                    imageUrl={item.imageUrl}
                    dealerLocation={item.dealerLocation}
                    isEditButton
                    isCreContact
                  />
                </Col>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="title2" title="Marketplace (31)">
            <EmptyState
              title="No Result Found!"
              description="we couldn find what you searched for try something again."
            />
          </Tab>
        </Tabs>
      </div>

      <DetailPagination className="mt-3" />
      <Review />
    </div>
  );
}

export default DealershipDetails;
