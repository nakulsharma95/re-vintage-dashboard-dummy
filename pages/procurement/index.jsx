import BikeCard from 'common/bikeCard';
import Breadcrumb from 'common/breadCrumb';
import DetailCard from 'common/detailCard';
import Filters from 'common/filters';

export default function Procurement() {
  return (
    <div>
      <Breadcrumb title="Procurement" addmoretitle="Procurement" />
      <Filters title="Procurement Leads" />
      <div className="bottom-white-border" />
      <DetailCard />
      <BikeCard />
    </div>
  );
}
