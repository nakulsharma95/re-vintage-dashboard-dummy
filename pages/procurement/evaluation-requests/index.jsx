import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailPagination from '../../../components/common/paginationPrimary';
import Filters from '../../../components/common/filters';
import MotorcycleDetailCard from '../../../components/procurements/evaluationRequest';
import TabPrimary from '../../../components/common/tabPrimary';

function EvaluationRequest() {
  return (
    <>
      <Breadcrumb title="Procurement" addmoretitle="Evaluation Requests" />
      <Filters title="Evaluation Requests" export />
      <TabPrimary title1="Open" title2="Cancelled (12)" title3="Dropped (12)" />
      <MotorcycleDetailCard />
      <DetailPagination />
    </>
  );
}

export default EvaluationRequest;
