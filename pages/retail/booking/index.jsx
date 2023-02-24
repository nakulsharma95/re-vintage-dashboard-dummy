import { Row, Col } from "react-bootstrap";
import { RiShareBoxFill } from "react-icons/ri";
import BikeCard from "../../../components/procurements/bikeCard";
import Breadcrumb from "../../../components/common/breadcrumbPrimary";
import TabPrimary from "../../../components/common/tabPrimary";
import DealFilter from "../../../components/dealClosure/dealFilter";
import SearchPrimary from "../../../components/common/searchPrimary";
import FilterButton from "../../../components/common/filterButton";
import HeaderPrimary from "../../../components/common/headerPrimary";
import OutlineButton from "../../../components/common/buttons/OutlineButton";

export default function Booking() {
  const cardData = [
    {
      imageUrl: "/images/bikeImage.png",
      overDue: "evolutionOver",
      dealerLocation: "Neel Motors, Lajpat Nagar, Delhi",
    },
    {
      imageUrl: "/images/bikeImage2.png",
      dealerLocation: "Neel Motors, Rohini Nagar, Delhi",
    },
    {
      imageUrl: "/images/bikeImage3.png",
      dealerLocation: "Neel Motors, Punjabi Bagh, Delhi",
    },
    {
      imageUrl: "/images/bikeImage4.png",
      dealerLocation: "Neel Motors, Lajpat Nagar, Delhi",
    },
  ];
  return (
    <div>
      <Breadcrumb title="Retail" addmoretitle="Sold" />
      <HeaderPrimary headerClass="mb-2" title="Booking">
        <OutlineButton title="Export Data" rightIcon={<RiShareBoxFill />} />
        <SearchPrimary placeholder="Search Name, Location, Reference ID" />
        <FilterButton />
      </HeaderPrimary>

      <TabPrimary title1="Booked (4)" title2="Sold" title3="Returned (12)" />
      <DealFilter title="4 Leads" />
      <Row>
        {cardData.map((item) => (
          <Col xxl={3} xl={4} lg={6} key={item.id}>
            <BikeCard
              isKmData
              isPriceData
              priceTitle="Selling Price"
              bikeModal="2015 Classic 350"
              bikeRc="DL6TAL7314"
              bikekm="43,384"
              bikeOwner="1st"
              bikeCc="350"
              sellingPrice="1,25,000"
              source="VDMP"
              imageUrl={item.imageUrl}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
