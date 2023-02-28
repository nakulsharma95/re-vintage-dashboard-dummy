import React from "react";
import { Row, Col,Tabs,Tab } from "react-bootstrap";
import { RiShareBoxFill } from "react-icons/ri";
import Breadcrumb from "../../../components/common/breadcrumbPrimary";
import SortTabs from "../../../components/common/sortTabs";
import DealCheckCard from "../../../components/dealClosure/dealCheckCard";
import SearchPrimary from "../../../components/common/searchPrimary";
import FilterButton from "../../../components/common/filterButton";
import HeaderPrimary from "../../../components/common/headerPrimary";
import OutlineButton from "../../../components/common/buttons/OutlineButton";

function MotorcyclePickup() {
  const cardData = [
    {
      key: "0",
      imageUrl: "/images/bikeImage.png",
      overDue: "evolutionOver",
      cardTag: "Upload Content",
    },
    {
      imageUrl: "/images/bikeImage2.png",
      cardTag: "Under Refurbishment",
      key: "1",
    },
    {
      imageUrl: "/images/bikeImage3.png",
      cardTag: "Under Approval",
      key: "2",
    },
    {
      imageUrl: "/images/bikeImage4.png",
      key: "3",
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
          defaultActiveKey="title3"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="title1" title="Dealer (25)" />
          <Tab eventKey="title2" title="Seller Portal (12)" />
        </Tabs>
      </div>
      <SortTabs
        selectAllCheck
        approveBtn
        isCheckInput
        sortTabTitle="25 Result Found"
      />
      <Row>
        {cardData.map((item) => (
          <Col xxl={3} xl={4} lg={6}  md={6}>
            <DealCheckCard
              data={item}
              isCheckBoxVisible
              acceptPrice
              pickupCheck
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default MotorcyclePickup;
