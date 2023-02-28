import React from "react";
import { Row, Col, Button, Tabs, Tab } from "react-bootstrap";
import { BiChevronDown } from "react-icons/bi";
import { RiShareBoxFill } from "react-icons/ri";
import Breadcrumb from "../../../components/common/breadcrumbPrimary";
import styles from "./style.module.scss";
import CloserBikeCard from "../../../components/dealClosure/closerCard";
import DetailPagination from "../../../components/common/paginationPrimary";
import SearchPrimary from "../../../components/common/searchPrimary";
import FilterButton from "../../../components/common/filterButton";
import HeaderPrimary from "../../../components/common/headerPrimary";
import OutlineButton from "../../../components/common/buttons/OutlineButton";

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
      <HeaderPrimary headerClass="mb-2" title="Dropped">
        <OutlineButton title="Export Data" rightIcon={<RiShareBoxFill />} />
        <SearchPrimary placeholder="Search Name, Location, Reference ID" />
        <FilterButton />
      </HeaderPrimary>
      <div className={`${styles.sortByMain} mt-4`}>
        <h5 className={styles.sortByTitle}>3 Leads</h5>
        <div className="d-flex align-items-center">
          <span className={styles.sortByTxt}>Sort By :</span>
          <Button variant="primary" className={styles.sortByBtn}>
            Most Relevant <BiChevronDown />
          </Button>
        </div>
      </div>
      <Row>
        {cardData.map((item) => (
          <Col xxl={3} xl={4} lg={6} md={6}>
            <CloserBikeCard
              data={item}
              isHighestBid="Highest Bid"
              isKmDriven
              contactCSE
              reason
              location
            />
          </Col>
        ))}
      </Row>
      <DetailPagination />
    </>
  );
}

export default PaymentsPending;
