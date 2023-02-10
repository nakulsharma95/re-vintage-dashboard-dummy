import BikeCard from '~/components/procurements/bikeCard';
import Breadcrumb from '~/components/common/breadcrumbPrimary';
import DetailCard from '~/components/procurements/detailCard';
import Filters from '~/components/common/filters';

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
