import ActiveBikeCard from './ActiveBikeCard';
import CloseBikeCard from './CloseBikeCard';
import SellerBikeCard from './SellerBikeCard';
import UpcomingBikeCard from './UpcomingBikeCard';
import ViewAll from 'common/viewAllComp';

export default function BiddingBikeCard() {
  return (
    <div>
        <ViewAll viewallLink="/bidding-portal/upcoming-bids" title="Upcoming Bids" />
        <UpcomingBikeCard />
        <div className="bottom-white-border" />
        <ViewAll viewallLink="/bidding-portal/active-bids" title="Active Bids" />
        <ActiveBikeCard />
        <div className="bottom-white-border" />
        <ViewAll viewallLink="/bidding-portal/closed-bids" title="Closed Bids" />
        <CloseBikeCard />
        <div className="bottom-white-border" />
        <ViewAll viewallLink="/bidding-portal/seller-portal" title="Seller Portal" />
        <SellerBikeCard />
    </div>
  );
}
