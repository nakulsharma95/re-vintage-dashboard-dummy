import React from "react";
import { Row, Col } from "react-bootstrap";
import { RiShareBoxFill } from "react-icons/ri";
import Breadcrumb from "../../../components/common/breadcrumbPrimary";
import TabPrimary from "../../../components/common/tabPrimary";
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
      <TabPrimary title1="Dealer" title2="Seller Portal (12)" />
      <SortTabs
        selectAllCheck
        approveBtn
        isCheckInput
        sortTabTitle="25 Result Found"
      />
      <Row>
        {cardData.map((item) => (
          <Col md={3}>
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
