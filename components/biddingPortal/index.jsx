import BiddingCard from './biddingPrimaryCard';
import ViewAll from '../common/viewAllHeader';
import { Row, Col } from 'react-bootstrap';

export default function BiddingBikeCard() {
  const upcomingBikeData = [
    {
      imageUrl: '/images/bikeImage.png',
      name:'Classic 350',
      number:'DL6TAL7314',
      km:'48,523',
      year:'2020',
      location:'Mumbai, Maharashtra',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      name:'Classic 350',
      bidPrice: '1,35,000',
      number:'DL6TAL7215',
      km:'48,523',
      year:'2020',
      location:'Janakpuri, Delhi',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      name:'Classic 350',
      bidPrice: '1,45,000',
      number:'DL6TAL7016',
      km:'48,523',
      year:'2020',
      location:'Chandigarh',
    },
    {
      imageUrl: '/images/bikeImage4.png',
      name:'Classic 350',
      bidPrice: '1,56,000',
      number:'DL6TAL7119',
      km:'48,523',
      year:'2020',
      location:'Noida, Uttar Pradesh',
    },
  ];
  
  const activeBikeData = [
    {
      imageUrl: '/images/bikeImage.png',
      name:'Classic 350',
      number:'DL6TAL7314',
      km:'48,523',
      year:'2020',
      location:'Mumbai, Maharashtra',
      highestbidPrice:'1,25,000.00',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      name:'Classic 350',
      number:'DL6TAL7215',
      km:'48,523',
      year:'2020',
      location:'Janakpuri, Delhi',
      highestbidPrice:'1,25,000.00',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      name:'Classic 350',
      number:'DL6TAL7016',
      km:'48,523',
      year:'2020',
      location:'Chandigarh',
      highestbidPrice:'1,25,000.00',
    },
    {
      imageUrl: '/images/bikeImage4.png',
      name:'Classic 350',
      number:'DL6TAL7119',
      km:'48,523',
      year:'2020',
      location:'Noida, Uttar Pradesh',
      highestbidPrice:'1,25,000.00',
    },
  ];

  const closedBikeData = [
    {
      imageUrl: '/images/bikeImage.png',
      name:'Classic 350',
      number:'DL6TAL7314',
      km:'48,523',
      year:'2020',
      location:'Mumbai, Maharashtra',
      highestbidPrice:'1,25,000.00',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      name:'Classic 350',
      number:'DL6TAL7215',
      km:'48,523',
      year:'2020',
      location:'Janakpuri, Delhi',
      highestbidPrice:'1,25,000.00',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      name:'Classic 350',
      number:'DL6TAL7016',
      km:'48,523',
      year:'2020',
      location:'Chandigarh',
      highestbidPrice:'1,25,000.00',
    },
    {
      imageUrl: '/images/bikeImage4.png',
      name:'Classic 350',
      number:'DL6TAL7119',
      km:'48,523',
      year:'2020',
      location:'Noida, Uttar Pradesh',
      highestbidPrice:'1,25,000.00',
    },
  ];

  const sellerBikeData = [
    {
      imageUrl: '/images/bikeImage.png',
      name:'Classic 350',
      number:'DL6TAL7314',
      km:'48,523',
      year:'2020',
      location:'Mumbai, Maharashtra',
      highestbidPrice:'1,25,000.00',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      name:'Classic 350',
      number:'DL6TAL7215',
      km:'48,523',
      year:'2020',
      location:'Janakpuri, Delhi',
      highestbidPrice:'1,25,000.00',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      name:'Classic 350',
      number:'DL6TAL7016',
      km:'48,523',
      year:'2020',
      location:'Chandigarh',
      highestbidPrice:'1,25,000.00',
    },
    {
      imageUrl: '/images/bikeImage4.png',
      name:'Classic 350',
      number:'DL6TAL7119',
      km:'48,523',
      year:'2020',
      location:'Noida, Uttar Pradesh',
      highestbidPrice:'1,25,000.00',
    },
  ];

  return (
    <div>
      <ViewAll
        viewallLink="/bidding-portal/upcoming-bids"
        title="Upcoming Bids"
        leadsTitle="(1507 Leads)" 
      />
      <Row>
        {upcomingBikeData.map((item) => (
          <Col md={3}>
            <BiddingCard 
              baseprice 
              arrowBtn 
              imageUrl={item.imageUrl}
              bikeName={item.name}
              bikeNumber={item.number}
              kmDrive={item.km}
              modelYear={item.year}
              location={item.location}
            />
          </Col>
        ))}
      </Row>
      
      <div className="bottom-white-border" />
      <ViewAll 
        viewallLink="/bidding-portal/active-bids" 
        title="Active Bids" 
        leadsTitle="(97 Leads)" 
      />
      <Row>
        {activeBikeData.map((item) => (
          <Col md={3}>
            <BiddingCard 
              highestBid 
              redBtn 
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
      <div className="bottom-white-border" />
      <ViewAll 
        viewallLink="/bidding-portal/closed-bids" 
        title="Closed Bids" 
        leadsTitle="(12 Leads)"
      />
      <Row>
        {closedBikeData.map((item) => (
          <Col md={3}>
            <BiddingCard 
              highestBid 
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
      <div className="bottom-white-border" />
      <ViewAll
        viewallLink="/bidding-portal/seller-portal"
        title="Seller Portal"
        leadsTitle="(25 Leads)"
      />
       <Row>
        {closedBikeData.map((item) => (
          <Col md={3}>
            <BiddingCard 
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
    </div>
  );
}
