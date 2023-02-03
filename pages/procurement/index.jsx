import BikeCard from 'common/bikeCard';
import Breadcrumb from 'common/breadCrumb';
import Filters from 'common/filters';

export default function Procurement() {
  return (
    <div>
      <Breadcrumb />
      <Filters title="Procurement Leads"/>
      <div className="bottom-white-border"></div>
      <BikeCard />
    </div>
  );
}
