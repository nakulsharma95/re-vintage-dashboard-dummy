import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import { BiCheck } from 'react-icons/bi';
import { RiShareBoxFill } from 'react-icons/ri';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import CustomCheckBox from '../../../components/common/customCheckBox';
import FilterButton from '../../../components/common/filterButton';
import HeaderPrimary from '../../../components/common/headerPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';
import ToggleView from '../../../components/common/toggleView';
import DealCheckCard from '../../../components/dealClosure/dealCheckCard';

function MotorcyclePickup() {
  const cardData = [
    {
      key: '0',
      imageUrl: '/images/bikeImage.png',
      overDue: 'evolutionOver',
      cardTag: 'Upload Content',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      cardTag: 'Under Refurbishment',
      key: '1',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      cardTag: 'Under Approval',
      key: '2',
    },
    {
      imageUrl: '/images/bikeImage4.png',
      key: '3',
    },
  ];
  return (
    <>
      <Breadcrumb title="Deal Closure" addmoretitle="Motorcycle Pickup" />
      <HeaderPrimary headerClass="mb-2" title="Motorcycle Pickup">
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
                  <h5 className="title3">25 Result Found</h5>
                  <div className="vertical-divider" />
                  <div className="d-flex align-items-center">
                    <CustomCheckBox
                      checkTitle="Select all -"
                      className="me-2"
                    />
                    <OutlineButton
                      leftIcon={<BiCheck className="m-0 me-2" />}
                      title="Submit Selected"
                    />
                  </div>
                </div>

                <div className="right-sec">
                  <ToggleView />
                </div>
              </div>

              {cardData.map((item) => (
                <Col xxl={3} xl={4} lg={6} md={6} xs={6} className="p-xs-1">
                  <DealCheckCard
                    data={item}
                    isCheckBoxVisible
                    acceptPrice
                    pickupCheck
                  />
                </Col>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="title2" title="Seller Portal (12)">
            <Row>
              <div className="action-list-style mb-3">
                <div className="left-sec">
                  <h5 className="title3">25 Result Found</h5>
                  <div className="vertical-divider" />
                  <div className="d-flex align-items-center">
                    <CustomCheckBox
                      checkTitle="Select all -"
                      className="me-2"
                    />
                    <OutlineButton
                      leftIcon={<BiCheck className="m-0 me-2" />}
                      title="Submit Selected"
                    />
                  </div>
                </div>

                <div className="right-sec">
                  <ToggleView />
                </div>
              </div>
              {cardData.map((item) => (
                <Col xxl={3} xl={4} lg={6} md={6} xs={6} className="p-xs-1">
                  <DealCheckCard
                    data={item}
                    isCheckBoxVisible
                    acceptPrice
                    pickupCheck
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

export default MotorcyclePickup;
