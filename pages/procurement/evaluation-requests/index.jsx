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
      bikeNumber:'DL 6T AL 7314',
      code:'FB29FH9219HR1',
      requestBadge:'Dealer',
      priceOne:'1,19,300',
      priceTwo:'1,26,600',
      ownerDetail:'1st',
      km:'35,150',
      mileage:'43.6',
      color:'Red, Chrome',
      location:'Delhi',
      date:'25/08/2022',
      supplierName:'Neel Motors',
      supplierContact:'+91 98765 43219',
      evaluationDateTime:'Thu, 19 Nov at 08:30AM',
      evaluationLocation:'No F 26, 4, Pocket D, Okhla Phase II, New Delhi, 110020',
      samilStatus:'Pending',
      technicalResponse:'Pending',
      reschedule:'none',
    },
    {
      bikeName: '2015 Hunter 350',
      bikeNumber:'DL 6T AL 7314',
      code:'FB29FH9219HR1',
      requestBadge:'Dealer',
      priceOne:'1,19,300',
      priceTwo:'1,26,600',
      ownerDetail:'2nd',
      km:'35,150',
      mileage:'43.6',
      color:'Red, Chrome',
      location:'Delhi',
      date:'25/08/2022',
      supplierName:'Neel Motors',
      supplierContact:'+91 98765 43219',
      evaluationDateTime:'Thu, 19 Nov at 08:30AM',
      evaluationLocation:'No F 26, 4, Pocket D, Okhla Phase II, New Delhi, 110020',
      samilStatus:'Pending',
      technicalResponse:'Pending',
      reschedule:'none',
    },
    {
      bikeName: '2015 Electra 350',
      bikeNumber:'DL 6T AL 7314',
      code:'FB29FH9219HR1',
      requestBadge:'Dealer',
      priceOne:'1,19,300',
      priceTwo:'1,26,600',
      ownerDetail:'2nd',
      km:'35,150',
      mileage:'43.6',
      color:'Red, Chrome',
      location:'Delhi',
      date:'25/08/2022',
      supplierName:'Neel Motors',
      supplierContact:'+91 98765 43219',
      evaluationDateTime:'Thu, 19 Nov at 08:30AM',
      evaluationLocation:'No F 26, 4, Pocket D, Okhla Phase II, New Delhi, 110020',
      samilStatus:'Pending',
      technicalResponse:'Pending',
      reschedule:'none',
    },
  ];
  return (
    <>
      <Breadcrumb title="Procurement" addmoretitle="Evaluation Requests" />
      <Filters title="Evaluation Requests" export filterInput filterButton />
      <TabPrimary title1="Open" title2="Cancelled (12)" title3="Dropped (12)" />
      <ViewAllInnerTab />

      {motorCycleDetail.map((item) => (
        <MotorcycleDetailCard 
          bikeName={item.bikeName}
          bikeNumber={item.bikeNumber}
          bikeCode={item.code}
          requestTag={item.requestBadge}
          priceOne={item.priceOne}
          priceTwo={item.priceTwo}
          owner={item.ownerDetail}
          kmDrive={item.km}
          mileage={item.mileage}
          bikeColor={item.color}
          location={item.location}
          postedDate={item.date}
          supplierName={item.supplierName}
          supplierContact={item.supplierContact}
          evaluationDateTime={item.evaluationDateTime}
          evaluationLocation={item.evaluationLocation}
          samilStatus={item.samilStatus}
          technicalResponse={item.technicalResponse}
          reschedule={item.reschedule}
        />
      ))}

      <DetailPagination />
    </>
  );
}

export default EvaluationRequest;
