import React from "react";
import { Row, Col } from "react-bootstrap";
import Breadcrumb from "../../../components/common/breadcrumbPrimary";
import CreAddressDetailCard from "~/components/cre-management/creAddressDetailCard";
import CreBikeInfoCard from "../../../components/cre-management/creBikeInfoCard";
import CrePrimaryCard from "../../../components/cre-management/crePrimaryCard";
import CreProfileCard from "../../../components/cre-management/creProfileCard";
import CreTrainingCard from "../../../components/cre-management/creTrainingCard";
import TabPrimary from "../../../components/common/tabPrimary";
import HeaderPrimary from "../../../components/common/headerPrimary";
import SearchPrimary from "../../../components/common/searchPrimary";

function CreDetails() {
  const cardData = [
    {
      dealerLocation: "Neel Motors, Lajpat Nagar, Delhi",
    },
    {
      dealerLocation: "Neel Motors, Rohini Nagar, Delhi",
    },
    {
      dealerLocation: "Neel Motors, Punjabi Bagh, Delhi",
    },
    {
      dealerLocation: "Neel Motors, Lajpat Nagar, Delhi",
    },
  ];
  return (
    <>
      <Breadcrumb title="CRE Management" addmoretitle="CRE Details" />

      <HeaderPrimary title="CRE Details">
        <SearchPrimary />
      </HeaderPrimary>

      <Row>
        <CreProfileCard />

        <TabPrimary title1="Basic Details" title2="Performance Management" />
        <div className="mb-2 mt-2">Allocated Leads</div>
        <TabPrimary
          title1="Active Leads"
          title2="Closed Leads"
          title3="Pending leads"
        />
        {cardData.map((item) => (
          <Col xxl={3} xl={4} lg={6} key={item.id}>
            <CreBikeInfoCard />
          </Col>
        ))}
        <Col xxl={6} xl={6} lg={6} md={12}>
          <CrePrimaryCard
            cardHeading="Primary Details"
            firstName="Adesh"
            lastName="Goyal"
            gender="Male"
            birthDate="26 - Jan - 1994"
            matrial="Single"
            handicapped="No"
          />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12}>
          <CreAddressDetailCard
            cardHeading="Address Details"
            currentAddress="1236/2 D-Block, West Guru Angad Nagar, Laxmi Nagar, New Delhi Delhi - 110066"
            permanentAddress="1236/2 D-Block, West Guru Angad Nagar, Laxmi Nagar, New Delhi, Delhi - 110066"
          />
        </Col>

        <Col xxl={6} xl={6} lg={6} md={12}>
          <CreTrainingCard
            cardHeading="Trainings Attended"
            trainingName="Name of the training"
            completeOn="13th April, 2022"
          />
        </Col>
      </Row>
    </>
  );
}

export default CreDetails;
