import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import EmptyState from '../../../components/emptyState';
import BikeCard from '../../../components/common/cardCheckbox';
import FilterButton from '../../../components/common/filterButton';
import HeaderPrimary from '../../../components/common/headerPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';

export default function Listing() {
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
      <Breadcrumb title="Listing" />

      <HeaderPrimary headerClass="mb-2" title="Listing">
        <SearchPrimary placeholder="Search Model, State, Registration No." />
        <FilterButton />
      </HeaderPrimary>

      <div className="custom-tab-style">
        <Tabs
          className="mb-3"
          defaultActiveKey="title1"
          id="uncontrolled-tab-example"
          tabClassName="custom-tab-nav"
        >
          <Tab eventKey="title1" title="Active (12)">
            <div className="action-list-style my-3">
              <div className="left-sec">
                <h5 className="title3">12 Result Found</h5>
              </div>
            </div>

            <Row>
              {cardData.map((item) => (
                <Col xxl={3} xl={4} lg={6} key={item.id}>
                  <BikeCard
                    bikeModal="2015 Classic 350"
                    bikeRc="-DL6TAL7314"
                    bikekm="43,384 km"
                    bikeOwner="1st Owner"
                    bikeCc="350 CC"
                    bikePrice="1,25,000.00"
                    creDetail="CRE Detail"
                    creName="John Watson"
                    creNumber="+91 98765 43210"
                    isCardVisible={false}
                    isCheckBoxVisible={false}
                    isBikeTagVisible={false}
                    isOlxTagVisible={false}
                    isBikeChassisVisible={false}
                    imageUrl={item.imageUrl}
                    isCreDetails
                    isDealer={false}
                  />
                </Col>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="title2" title="Inactive (12)">
            <EmptyState
              title="No Result Found!"
              description="we couldn find what you searched for try something again."
            />
          </Tab>
          <Tab eventKey="title3" title="Booked (4)">
            <EmptyState
              title="No Result Found!"
              description="we couldn find what you searched for try something again."
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
