import React from "react";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import { RiShareBoxFill } from "react-icons/ri";
import CloserBikeCard from "../../../components/dealClosure/closerCard";
import Breadcrumb from "../../../components/common/breadcrumbPrimary";
import SearchPrimary from "../../../components/common/searchPrimary";
import FilterButton from "../../../components/common/filterButton";
import HeaderPrimary from "../../../components/common/headerPrimary";
import OutlineButton from "../../../components/common/buttons/OutlineButton";
import SortTabs from "~/components/common/sortTabs";

function PaymentsPending() {
  const cardData = [
    {
      imageUrl: "/images/bikeImage.png",
      overDue: "evolutionOver",
      bikeStatus: "Upload Content",
    },
    {
      imageUrl: "/images/bikeImage2.png",
      bikeStatus: "Under Refurbishment",
    },
    {
      imageUrl: "/images/bikeImage3.png",
      bikeStatus: "Under Approval",
    },
    {
      imageUrl: "/images/bikeImage4.png",
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
          defaultActiveKey="title3"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="title1" title="Dealer (25)">
            <Row>
              <SortTabs selectAllCheck sortTabTitle="8 Leads" />
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
              <SortTabs selectAllCheck sortTabTitle="8 Leads" />
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
