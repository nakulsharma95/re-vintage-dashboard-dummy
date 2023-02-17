import { RiShareBoxFill } from 'react-icons/ri';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailMotorcycleCard from '../../../components/procurements/detailMotorcycleCard';
import TabPrimary from '../../../components/common/tabPrimary/index';
import DetailPagination from '../../../components/common/paginationPrimary';
import ViewAllInnerTab from '../../../components/procurements/ViewAllInnerTab';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import HeaderPrimary from '../../../components/common/headerPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';

export default function ScheduledEvaluation() {
  const cardItemData = [1, 2, 3];
  return (
    <div className="">
      <Breadcrumb title="Procurement" addmoretitle="Scheduled Evaluation" />
      <HeaderPrimary headerClass="mb-2" title="Scheduled Evaluation">
        <OutlineButton
          title="Scheduled Evaluation"
          rightIcon={<RiShareBoxFill />}
          className="mr-2"
        />
        <SearchPrimary />
      </HeaderPrimary>

      <TabPrimary title1="Open" title2="Cancelled (12)" title3="Dropped (12)" />
      <ViewAllInnerTab />
      {cardItemData.map(() => (
        <DetailMotorcycleCard />
      ))}
      <DetailPagination />
    </div>
  );
}
