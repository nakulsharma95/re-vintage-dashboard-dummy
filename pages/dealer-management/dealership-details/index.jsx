import React from 'react'
import Dealershipdetails from '../../../components/dealer-management/dealershipDetailes';
import HeaderPrimary from '../../../components/common/headerPrimary'
import TabPrimary from '../../../components/common/tabPrimary'
import { Row, Col } from 'react-bootstrap';
import ActiveBikeCard from '../../../components/biddingPortal/biddingPrimaryCard';
import DetailPagination from '../../../components/common/paginationPrimary';
import Review from '../../../components/dealer-management/reviewSlider';


function DealershipDetails() {
	const activeBikeData = [
		{
		  imageUrl: '/images/bikeImage.png',
		  name: 'Classic 350',
		  number: 'DL6TAL7314',
		  km: '48,523',
		  year: '2020',
		  location: 'Mumbai, Maharashtra',
		  highestbidPrice: '1,25,000.00',
		},
		{
		  imageUrl: '/images/bikeImage2.png',
		  name: 'Classic 350',
		  number: 'DL6TAL7215',
		  km: '48,523',
		  year: '2020',
		  location: 'Janakpuri, Delhi',
		  highestbidPrice: '1,25,000.00',
		},
		{
		  imageUrl: '/images/bikeImage3.png',
		  name: 'Classic 350',
		  number: 'DL6TAL7016',
		  km: '48,523',
		  year: '2020',
		  location: 'Chandigarh',
		  highestbidPrice: '1,25,000.00',
		},
		{
		  imageUrl: '/images/bikeImage4.png',
		  name: 'Classic 350',
		  number: 'DL6TAL7119',
		  km: '48,523',
		  year: '2020',
		  location: 'Noida, Uttar Pradesh',
		  highestbidPrice: '1,25,000.00',
		},
	  ];
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
        {activeBikeData.map((item) => (
          <Col md={3}>
            <ActiveBikeCard
              highestBid
              arrowBtn
              imageUrl={item.imageUrl}
              bikeName={item.name}
              bikeNumber={item.number}
              kmDrive={item.km}
              modelYear={item.year}
              location={item.location}
              highestBidPrice={item.highestbidPrice}
            />
          </Col>
        ))}
        {activeBikeData.map((item) => (
          <Col md={3}>
            <ActiveBikeCard
              highestBid
              arrowBtn
              imageUrl={item.imageUrl}
              bikeName={item.name}
              bikeNumber={item.number}
              kmDrive={item.km}
              modelYear={item.year}
              location={item.location}
              highestBidPrice={item.highestbidPrice}
            />
          </Col>
        ))}
        {activeBikeData.map((item) => (
          <Col md={3}>
            <ActiveBikeCard
              highestBid
              arrowBtn
              imageUrl={item.imageUrl}
              bikeName={item.name}
              bikeNumber={item.number}
              kmDrive={item.km}
              modelYear={item.year}
              location={item.location}
              highestBidPrice={item.highestbidPrice}
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