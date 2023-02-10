import BiddingCard from './biddingPrimaryCard';
import ViewAll from '../common/viewAllHeader';

export default function BiddingBikeCard() {
  return (
    <div>
      <ViewAll
        viewallLink="/bidding-portal/upcoming-bids"
        title="Upcoming Bids"
      />
      <BiddingCard baseprice arrowBtn />
      <div className="bottom-white-border" />
      <ViewAll viewallLink="/bidding-portal/active-bids" title="Active Bids" />
      <BiddingCard highestBid redBtn />
      <div className="bottom-white-border" />
      <ViewAll viewallLink="/bidding-portal/closed-bids" title="Closed Bids" />
      <BiddingCard highestBid />
      <div className="bottom-white-border" />
      <ViewAll
        viewallLink="/bidding-portal/seller-portal"
        title="Seller Portal"
      />
      <BiddingCard highestBid arrowBtn />
    </div>
  );
}
