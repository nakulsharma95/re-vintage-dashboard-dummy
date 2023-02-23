import React from 'react'
import Dealershipdetails from '../../../components/dealer-management/dealershipDetailes';
import HeaderPrimary from '../../../components/common/headerPrimary'
import TabPrimary from '../../../components/common/tabPrimary'
import { Row, Col } from 'react-bootstrap';
// import ActiveBikeCard from '../../../components/biddingPortal/biddingPrimaryCard';
import DetailPagination from '../../../components/common/paginationPrimary';
import Review from '../../../components/dealer-management/reviewSlider';
import BikeCardRadio from '../../../components/common/cardCheckbox';

function DealershipDetails(props) {
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
    },]
  return (
	<div>
		<Dealershipdetails/>
		 <HeaderPrimary
        headerClass="mb-2"
        title="Dealer’s Listings"
      >
      </HeaderPrimary>
	  <TabPrimary title1="Inventory" title2="Marketplace (31)" />
	  <div className="mb-3">37 Listing Found</div>
      <Row className="mb-3">
      {cardData.map((item) => (
          <Col xxl={3} xl={4} lg={6} key={item.id}>
            <BikeCardRadio
              bikeModal="2015 Classic 350"
              bikeRc="-DL6TAL7314"
              bikekm="43,384 km"
              bikeOwner="1st Owner"
              bikeCc="350 CC"
              bikePrice="1,25,000.00"
              bikeDealer="(C2N0RJ20FC2N)"
              dealerAddress="Neel Motors, Lajpat Nagar, Delhi"
              // isCardVisible={false} 
              // isOlxTagVisible={false}
              imageUrl={item.imageUrl}
              dealerLocation={item.dealerLocation}
              isEditButton
              isCreContact
            />
          </Col>
        ))}
       
      </Row>
      <DetailPagination className="mt-3" />
      <Review/>
	</div>
  )
}

export default DealershipDetails