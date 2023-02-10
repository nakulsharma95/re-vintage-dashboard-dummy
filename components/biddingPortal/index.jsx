import SellerBidBikeCard from './biddingPrimaryCard';
import UpcomingBidBikeCard from './biddingPrimaryCard';
import ActiveBidBikeCard from './biddingPrimaryCard';
import ClosedBidBikeCard from './biddingPrimaryCard';
import ViewAll from '../common/viewAllHeader';

export default function BiddingBikeCard() {
  return (
    <div>
      <ViewAll
        viewallLink="/bidding-portal/upcoming-bids"
        title="Upcoming Bids"
      />
      <UpcomingBidBikeCard baseprice arrowBtn />
      <div className="bottom-white-border" />
      <ViewAll viewallLink="/bidding-portal/active-bids" title="Active Bids" />
      <ActiveBidBikeCard highestBid redBtn />
      <div className="bottom-white-border" />
      <ViewAll viewallLink="/bidding-portal/closed-bids" title="Closed Bids" />
      <ClosedBidBikeCard highestBid />
      <div className="bottom-white-border" />
      <ViewAll
        viewallLink="/bidding-portal/seller-portal"
        title="Seller Portal"
      />
      <SellerBidBikeCard highestBid arrowBtn />
    </div>
  );
}
