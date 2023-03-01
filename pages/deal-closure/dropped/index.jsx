import { Col, Row } from "react-bootstrap";
import { RiShareBoxFill } from "react-icons/ri";
import SortTabs from "~/components/common/sortTabs";
import Breadcrumb from "../../../components/common/breadcrumbPrimary";
import OutlineButton from "../../../components/common/buttons/OutlineButton";
import FilterButton from "../../../components/common/filterButton";
import HeaderPrimary from "../../../components/common/headerPrimary";
import SearchPrimary from "../../../components/common/searchPrimary";
import CloserBikeCard from "../../../components/dealClosure/closerCard";

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
      <div className="mb-4 mt-4">
        <SortTabs selectAllCheck sortTabTitle="3 Leads" />
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
    </>
  );
}

export default PaymentsPending;
