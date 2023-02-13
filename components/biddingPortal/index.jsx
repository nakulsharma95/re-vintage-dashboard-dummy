import BiddingCard from './biddingPrimaryCard';
import ViewAll from '../common/viewAllHeader';

export default function BiddingBikeCard() {
  return (
    <div>
      <ViewAll
        viewallLink="/bidding-portal/upcoming-bids"
        title="Upcoming Bids"
        leadsTitle="(1507 Leads)" 
      />
      <BiddingCard baseprice arrowBtn />
      <div className="bottom-white-border" />
      <ViewAll viewallLink="/bidding-portal/active-bids" title="Active Bids" leadsTitle="(97 Leads)" />
      <BiddingCard highestBid redBtn />
      <div className="bottom-white-border" />
      <ViewAll viewallLink="/bidding-portal/closed-bids" title="Closed Bids" leadsTitle="(12 Leads)" />
      <BiddingCard highestBid />
      <div className="bottom-white-border" />
      <ViewAll
        viewallLink="/bidding-portal/seller-portal"
        title="Seller Portal"
        leadsTitle="(25 Leads)"
      />
      <BiddingCard highestBid arrowBtn />
    </div>
  );
}
