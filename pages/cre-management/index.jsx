import React from "react";
import { Row, Col } from "react-bootstrap";
import Breadcrumb from "../../components/common/breadcrumbPrimary";
import Filters from "../../components/common/filters";
import CreDetailCard from "../../components/cre-management/creDetailCard";
import DealFilter from "../../components/dealClosure/dealFilter";
import CrePerformanceCard from "../../components/cre-management/crePerformanceCard";
import CrePerformanceMatrix from "~/components/cre-management/crePerformanceMatrix";

function CreManagement() {
  const cardData = [
    {
      imageUrl: "/images/bob-Vishwas.png",
      overDue: "evolutionOver",
      bikeStatus: "Upload Content",
    },
    {
      imageUrl: "/images/bob-Vishwas1.png",
      overDue: "evolutionOver",
      bikeStatus: "Upload Content",
    },
    {
      imageUrl: "/images/bob-Vishwas2.png",
      overDue: "evolutionOver",
      bikeStatus: "Upload Content",
    },
    {
      imageUrl: "/images/bob-Vishwas3.png",
      overDue: "evolutionOver",
      bikeStatus: "Upload Content",
    },
  ];

  return (
    <>
      <Breadcrumb title="CRE Management" addmoretitle="CRE Management" />
      <Filters filterInput title="CRE Management" subTitle="CRE Management module" />
      <div className="bottom-white-border mt-3 mb-3" />
      <DealFilter title="Available CRE(s)" droptitle="Top Performer" isViewBy />
      <Row>
        {cardData.map((item,index) => (
          <Col xxl={3} xl={4} lg={6} key={index}>
            <CreDetailCard creDetailData={item} />
          </Col>
        ))}
        <CrePerformanceCard />
        <CrePerformanceMatrix />
       
       
      </Row>
    </>
  );
}

export default CreManagement;
