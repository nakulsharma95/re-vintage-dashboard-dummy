import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import FilterButton from '../../../components/common/filterButton';
import HeaderPrimary from '../../../components/common/headerPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';
import CloserBikeCard from '../../../components/dealClosure/closerCard';

function PaymentsPending() {
  const cardData = [
    {
      imageUrl: '/images/bikeImage.png',
      overDue: 'evolutionOver',
      bikeStatus: 'Upload Content',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      bikeStatus: 'Under Refurbishment',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      bikeStatus: 'Under Approval',
    },
    {
      imageUrl: '/images/bikeImage4.png',
    },
  ];
  return (
    <>
      <Breadcrumb title="Deal Closure" addmoretitle="Payment Pending" />
      <HeaderPrimary headerClass="mb-2" title="Payment Pending">
        <OutlineButton title="Export Data" rightIcon={<RiShareBoxFill />} />
        <SearchPrimary placeholder="Search Name, Location, Reference ID" />
        <FilterButton />
      </HeaderPrimary>
      <div className="custom-tab-style">
        <Tabs
          className="mb-3"
          defaultActiveKey="title1"
          id="uncontrolled-tab-example"
          tabclassname="custom-tab-nav"
        >
          <Tab eventKey="title1" title="Dealer (25)">
            <Row>
              <div className="action-list-style mb-3">
                <div className="left-sec">
                  <h5 className="title3">08 Leads</h5>
                </div>
              </div>
              {cardData.map((item) => (
                <Col xxl={3} xl={4} lg={6} md={6}>
                  <CloserBikeCard
                    data={item}
                    isHighestBid="Evolution Price"
                    isKmDriven
                    dealPrice
                    cardTag
                    location
                  />
                </Col>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="title2" title="Seller Portal (12)">
            <Row>
              <div className="action-list-style mb-3">
                <div className="left-sec">
                  <h5 className="title3">08 Leads</h5>
                </div>
              </div>
              {cardData.map((item) => (
                <Col xxl={3} xl={4} lg={6} md={6}>
                  <CloserBikeCard
                    data={item}
                    isHighestBid="Evolution Price"
                    isKmDriven
                    dealPrice
                    cardTag
                    location
                  />
                </Col>
              ))}
            </Row>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default PaymentsPending;
