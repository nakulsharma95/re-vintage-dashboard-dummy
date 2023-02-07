import Breadcrumb from 'common/breadCrumb';
import Filters from 'common/filters';
import DetailMotorcycleCard from 'common/detailMotorcycleCard';
import TabPrimary from 'common/tabPrimary/index';

export default function ScheduledEvaluation() {
  return (
    <div className="">
      <Breadcrumb title="Procurement" addmoretitle="Scheduled Evaluation" />
      <Filters />
      <TabPrimary 
        title1="Open" 
        title2="Cancelled (12)"
        title3="Dropped (12)"
      />
      <DetailMotorcycleCard />
    </div>
  );
}
