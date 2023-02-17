import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailPagination from '../../../components/common/paginationPrimary';
import Filters from '../../../components/common/filters';
import MotorcycleDetailCard from '../../../components/procurements/evaluationRequest';
import TabPrimary from '../../../components/common/tabPrimary';
import ViewAllInnerTab from '../../../components/procurements/ViewAllInnerTab';

function EvaluationRequest() {
  const motorCycleDetail = [
    {
      bikeName: '2015 Classic 350',
      requestTag: 'Dealer',
    },
    {
      bikeName: '2015 Hunter 350',
    },
    {
      bikeName: '2015 Electra 350',
    },
  ];
  return (
    <>
      <Breadcrumb title="Procurement" addmoretitle="Evaluation Requests" />
      <Filters title="Evaluation Requests" export filterInput filterButton />
      <TabPrimary title1="Open" title2="Cancelled (12)" title3="Dropped (12)" />
      <ViewAllInnerTab />
      {motorCycleDetail.map((item, index) => (
        <MotorcycleDetailCard key={index} data={item} />
      ))}

      <DetailPagination />
    </>
  );
}

export default EvaluationRequest;
