import Breadcrumb from 'common/breadCrumb';
import Filters from 'common/filters';
import DetailMotorcycleCard from 'common/detailMotorcycleCard';
import TabPrimary from '../../../common/tabPrimary/index';

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
