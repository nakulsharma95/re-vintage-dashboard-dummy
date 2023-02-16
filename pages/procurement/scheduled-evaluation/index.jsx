import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import Filters from '../../../components/common/filters';
import DetailMotorcycleCard from '../../../components/procurements/detailMotorcycleCard';
import TabPrimary from '../../../components/common/tabPrimary/index';
import DetailPagination from '../../../components/common/paginationPrimary';
import ViewAllInnerTab from '../../../components/procurements/ViewAllInnerTab';

export default function ScheduledEvaluation() {
  const cardItemData = [1, 2, 3];
  return (
    <div className="">
      <Breadcrumb title="Procurement" addmoretitle="Scheduled Evaluation" />
      <Filters title="Scheduled Evaluation" export filterInput filterButton />
      <TabPrimary title1="Open" title2="Cancelled (12)" title3="Dropped (12)" />
      <ViewAllInnerTab />
      {cardItemData.map(() => (
        <DetailMotorcycleCard />
      ))}
      <DetailPagination />
    </div>
  );
}
