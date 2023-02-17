import { RiShareBoxFill } from 'react-icons/ri';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailPagination from '../../../components/common/paginationPrimary';
import MotorcycleDetailCard from '../../../components/procurements/evaluationRequest';
import TabPrimary from '../../../components/common/tabPrimary';
import ViewAllInnerTab from '../../../components/procurements/ViewAllInnerTab';
import HeaderPrimary from '../../../components/common/headerPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';

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
      <HeaderPrimary headerClass="mb-2" title="Evaluation Requests">
        <OutlineButton
          title="Export data"
          rightIcon={<RiShareBoxFill />}
          className="mr-2"
        />
        <SearchPrimary />
      </HeaderPrimary>

      <TabPrimary title1="Open" title2="Cancelled (12)" title3="Dropped (12)" />
      <ViewAllInnerTab />
      {motorCycleDetail.map((item) => (
        <MotorcycleDetailCard data={item} />
      ))}

      <DetailPagination />
    </>
  );
}

export default EvaluationRequest;
