import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import FilterButton from '../../../components/common/filterButton';
import HeaderPrimary from '../../../components/common/headerPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';
import ToggleView from '../../../components/common/toggleView';
import CloserBikeCard from '../../../components/dealClosure/closerCard';

function UnderNegotiation() {
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
      <Breadcrumb title="Deal Closure" addmoretitle="Under Negotiation" />
      <HeaderPrimary headerClass="mb-2" title="Under Negotiation">
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
                  <ul className="horizontal-list">
                    <li className="list active">All (25)</li>
                    <li className="list">Price under negotiation (12)</li>
                    <li className="list">Payment detail pending (8)</li>
                    <li className="list">Detail sharing pending (7)</li>
                  </ul>
                </div>

                <div className="right-sec">
                  <ToggleView />
                </div>
              </div>

              {cardData.map((item) => (
                <Col xxl={3} xl={4} lg={6} md={6} xs={6} className="p-xs-1">
                  <CloserBikeCard
                    data={item}
                    location
                    status
                    contactCSE
                    isHighestBid="Highest Bid"
                    isKmDriven
                  />
                </Col>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="title2" title="Seller Portal (12)">
            <Row>
              <div className="action-list-style mb-3">
                <div className="left-sec">
                  <ul className="horizontal-list">
                    <li className="list active">All (25)</li>
                    <li className="list">Price under negotiation (12)</li>
                    <li className="list">Payment detail pending (8)</li>
                    <li className="list">Detail sharing pending (7)</li>
                  </ul>
                </div>

                <div className="right-sec">
                  <ToggleView />
                </div>
              </div>
              {cardData.map((item) => (
                <Col xxl={3} xl={4} lg={6} md={6} xs={6} className="p-xs-1">
                  <CloserBikeCard
                    data={item}
                    location
                    status
                    contactCSE
                    isHighestBid="Highest Bid"
                    isKmDriven
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

export default UnderNegotiation;
