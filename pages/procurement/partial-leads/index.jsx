import Breadcrumb from '~/components/common/breadcrumbPrimary';
import DetailCard from '~/components/procurements/detailCard';
import DetailPagination from '~/components/common/paginationPrimary';
import Filters from '~/components/common/filters';
import TabPrimary from '~/components/common/tabPrimary';

export default function PartialLeads() {
  return (
    <div className="">
      <Breadcrumb title="Procurement" addmoretitle="Partial Leads" />
      <Filters />
      <TabPrimary 
        title1="Recent" 
        title2="In-progress (4)"
        title3="Dropped (2)"
        title4="Self consume(By dealer)"
      />
      <DetailCard />
      <DetailPagination />
    </div>
  );
}
