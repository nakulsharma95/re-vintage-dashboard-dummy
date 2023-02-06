import Breadcrumb from 'common/breadCrumb';
import DetailPagination from 'common/detailPagination';
import Filters from 'common/filters';
import MotorcycleDetailCard from 'common/motorcycleDetailsCard';
import TabPrimary from 'common/tabPrimary';

function EvaluationRequest() {
  return (
    <>
      <Breadcrumb />
      <Filters title="Evaluation Requests" export />
      <TabPrimary />
      <MotorcycleDetailCard />
      <DetailPagination />
    </>
  );
}

export default EvaluationRequest;
