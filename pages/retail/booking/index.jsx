import { Row, Col,Tab,Tabs } from "react-bootstrap";
import { RiShareBoxFill } from "react-icons/ri";
import BikeCard from "../../../components/procurements/bikeCard";
import Breadcrumb from "../../../components/common/breadcrumbPrimary";
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

      <div className="custom-tab-style">
        <Tabs
          className="mb-3"
          defaultActiveKey="title3"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="title1" title="Booked (4)">
          <DealFilter singleTitle="4 Leads" />
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
              sellingPrice="1,25,000.00"
              source="Source:"
              sourceTitle="VDMP"
              imageUrl={item.imageUrl}
            />
          </Col>
        ))}
      </Row>
          </Tab>
          <Tab eventKey="title2" title="Sold">
              <DealFilter singleTitle="4 Leads" />
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
              sellingPrice="1,25,000.00"
              source="Source:"
              sourceTitle="VDMP"
              imageUrl={item.imageUrl}
            />
          </Col>
        ))}
      </Row>
          </Tab>
          <Tab eventKey="title3" title="Returned (12)">
              <DealFilter singleTitle="4 Leads" />
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
              sellingPrice="1,25,000.00"
              source="Source:"
              sourceTitle="VDMP"
              imageUrl={item.imageUrl}
            />
          </Col>
        ))}
      </Row>
          </Tab>
        
        </Tabs>
      </div>
   
    </div>
  );
}
