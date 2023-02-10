import Breadcrumb from '~/components/common/breadcrumbPrimary';
import Filters from '~/components/common/filters';
import DetailMotorcycleCard from '~/components/procurements/detailMotorcycleCard';
import TabPrimary from '~/components/common/tabPrimary/index';

export default function ScheduledEvaluation() {
  return (
    <div className="">
      <Breadcrumb title="Procurement" addmoretitle="Scheduled Evaluation" />
      <Filters />
      <TabPrimary title1="Open" title2="Cancelled (12)" title3="Dropped (12)" />
      <DetailMotorcycleCard />
    </div>
  );
}
