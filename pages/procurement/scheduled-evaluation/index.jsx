import TabPrimary from '../../../common/tabPrimary/index';
import Breadcrumb from 'common/breadCrumb';
import Filters from 'common/filters';
import DetailMotorcycleCard from 'common/detailMotorcycleCard';

export default function ScheduledEvaluation() {
  return (
    <div className="">
      <Breadcrumb />
      <Filters />
      <TabPrimary />
      <DetailMotorcycleCard />
    </div>
  );
}
