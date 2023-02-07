import Breadcrumb from 'common/breadCrumb';
import DetailPagination from 'common/detailPagination';
import Filters from 'common/filters';
import MotorcycleDetailCard from 'common/motorcycleDetailsCard';
import TabPrimary from 'common/tabPrimary';

function EvaluationRequest() {
  return (
    <>
      <Breadcrumb title="Procurement" addmoretitle="Evaluation Requests" />
      <Filters title="Evaluation Requests" export />
      <TabPrimary 
        title1="Open" 
        title2="Cancelled (12)"
        title3="Dropped (12)"
      />
      <MotorcycleDetailCard />
      <DetailPagination />
    </>
  );
}

export default EvaluationRequest;
