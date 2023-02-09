import BikeCard from "common/bikeCard";
import Breadcrumb from "common/breadCrumb";
import DetailCard from "common/detailCard";
import Filters from "common/filters";
import SortTabs from "common/sortTabs";
import TabPrimary from "common/tabPrimary";

export default function Booking() {
  return (
    <div>
     <Breadcrumb title="Retail" addmoretitle="Sold" />
      <Filters title="Booking" />
      <TabPrimary 
        title1="Booked (4)" 
        title2="Sold"
        title3="Returned (12)"
      />
      <BikeCard />
    </div>
  );
}
