import Breadcrumb from 'common/breadCrumb';
import DetailCard from 'common/detailCard';
import DetailPagination from 'common/detailPagination';
import Filters from 'common/filters';
import TabPrimary from 'common/tabPrimary';

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
