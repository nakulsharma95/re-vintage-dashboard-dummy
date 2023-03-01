import { Row, Col, Tab, Tabs } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import SortTabs from '../../../components/common/sortTabs';
import CloserBikeCard from '../../../components/dealClosure/closerCard';
import SearchPrimary from '../../../components/common/searchPrimary';
import FilterButton from '../../../components/common/filterButton';
import HeaderPrimary from '../../../components/common/headerPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';

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
        >
          <Tab eventKey="title1" title="Dealer (25)">
            <Row>
              <SortTabs />
              {cardData.map((item) => (
                <Col xxl={3} xl={4} lg={6} md={6}>
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
              <SortTabs />
              {cardData.map((item) => (
                <Col xxl={3} xl={4} lg={6} md={6}>
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
