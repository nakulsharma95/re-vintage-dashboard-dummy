import React from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import Breadcrumb from "../../components/common/breadcrumbPrimary";
import CreDetailCard from "../../components/cre-management/creDetailCard";
import DealFilter from "../../components/dealClosure/dealFilter";
import CrePerformanceCard from "../../components/cre-management/crePerformanceCard";
import CrePerformanceMatrix from "../../components/cre-management/crePerformanceMatrix";
import ButtonPrimary from "../../components/common/buttons/ButtonPrimary";
import HeaderPrimary from "../../components/common/headerPrimary";
import SearchPrimary from "../../components/common/searchPrimary";

import styles from "./style.module.scss";
import ThemeDropdown from "~/components/common/themeDropdown";

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
  const performanceCardData = [
    {
      cardBodyBg: "bgGray18",
    },
    {
      cardBodyBg: "bgGray28",
    },
    {
      cardBodyBg: "bgblack40",
    },
    {
      cardBodyBg: "bgGray18",
    },
  ];

  return (
    <>
      <Breadcrumb title="CRE Management" addmoretitle="CRE Management" />

      <HeaderPrimary title="CRE Management" subTitle="CRE Management module">
        <SearchPrimary />
        <ThemeDropdown
          dropDownTitle="Delhi"
          dropItem1="Puna"
          dropItem2="Mumbai"
          dropItem3="Hayrana"
        />
        <ThemeDropdown
          dropDownTitle="Zone"
          dropItem1="Zone1"
          dropItem2="Zone2"
          dropItem3="Zone3"
        />
        <ButtonPrimary
          buttonLink="cre-management/add-cre"
          iconLeft={<FiPlus />}
          title="Add cre"
          white
        />
      </HeaderPrimary>

      <div className="bottom-white-border mt-3 mb-3" />
      <DealFilter title="Available CRE(s)" droptitle="Top Performer" isViewBy />
      <Row>
        {cardData.map((item) => (
          <Col xxl={3} xl={4} lg={6}>
            <CreDetailCard
              name="Bob Vishwas"
              jobPost="(Senior CRE)"
              location="Gurugram, Haryana"
              phoneNo="Gurugram, Haryana"
              emailID="bobvishwas@royalenfield.com"
              creDetailData={item}
            />
          </Col>
        ))}

        <div>
          <h2 className={styles.heading}>Cumulative Performance</h2>
          <Row>
            {performanceCardData.map((item) => (
              <Col xxl={3} lg={6} md={6}>
                <CrePerformanceCard cardBodyStyle={item.cardBodyBg} />
              </Col>
            ))}
          </Row>
        </div>
        <Col xxl={12} lg={12} md={12}>
          <CrePerformanceMatrix
            title1="Procurement Lead Management"
            title2="Bidding / First Offer"
            title3="Deal Closure"
            title4="General Query Response"
            creTitle="Cumulative CRE Performance Matrix"
          />
        </Col>
      </Row>
    </>
  );
}

export default CreManagement;
