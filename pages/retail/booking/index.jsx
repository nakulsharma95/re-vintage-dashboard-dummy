import BikeCard from '../../../components/procurements/bikeCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import Filters from '../../../components/common/filters';
import TabPrimary from '../../../components/common/tabPrimary';

export default function Booking() {
  return (
    <div>
      <Breadcrumb title="Retail" addmoretitle="Sold" />
      <Filters title="Booking" />
      <TabPrimary title1="Booked (4)" title2="Sold" title3="Returned (12)" />
      <BikeCard />
    </div>
  );
}
