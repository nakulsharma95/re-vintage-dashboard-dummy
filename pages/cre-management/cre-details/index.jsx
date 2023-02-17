import React from "react";
import { Row, Col } from "react-bootstrap";
import Breadcrumb from "~/components/common/breadcrumbPrimary";
import Filters from "~/components/common/filters";
import CreBikeInfoCard from "~/components/cre-management/creBikeInfoCard";
import CreProfileCard from "~/components/cre-management/creProfileCard";
import TabPrimary from "../../../components/common/tabPrimary";

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
      <Filters title="CRE Details" />
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
      </Row>
    </>
  );
}

export default CreDetails;
