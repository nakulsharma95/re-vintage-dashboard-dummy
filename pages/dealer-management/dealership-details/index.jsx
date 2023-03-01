import React from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import Dealershipdetails from '../../../components/dealer-management/dealershipDetailes';
import DetailPagination from '../../../components/common/paginationPrimary';
import Review from '../../../components/dealer-management/reviewSlider';
import BikeCardRadio from '../../../components/common/cardCheckbox';
import DealFilter from '../../../components/dealClosure/dealFilter';
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
          tabClassName="custom-tab-nav"
        >
          <Tab eventKey="title1" title="Inventory">
            <DealFilter title="37 Listing Found" />
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
