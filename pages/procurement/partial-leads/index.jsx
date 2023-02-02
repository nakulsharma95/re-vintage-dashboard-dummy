import Breadcrumb from 'common/breadCrumb';
import DetailCard from 'common/detailCard';
import DetailPagination from 'common/detailPagination';
import Filters from 'common/filters';
import TabPrimary from 'common/tabPrimary';

export default function PartialLeads() {
  return (
    <div className="">
      <Breadcrumb />
      <Filters />
      <TabPrimary />
      <DetailCard />
      <DetailPagination />
    </div>
  );
}
