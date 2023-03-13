import { BiCheck } from 'react-icons/bi';
import { Tab, Tabs } from 'react-bootstrap';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import MotorcycleDetailCard from '../../../components/procurements/evaluationRequest';
import HeaderPrimary from '../../../components/common/headerPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import FilterButton from '../../../components/common/filterButton';
import CustomCheckBox from '../../../components/common/customCheckBox';
import EmptyState from '../../../components/emptyState';

function PendingEvaluation() {
  const motorCycleDetail = [
    {
      bikeName: '2015 Classic 350',
      bikeNumber: 'DL6TAL7314',
      code: 'FB29FH9219HR1',
      requestBadge: 'Dealer',
      priceOne: '1,26,600',
      ownerDetail: '2st',
      km: '35,150',
      mileage: '43.6',
      color: 'Red, Chrome',
      location: 'Delhi',
      date: '25/08/2022',
      supplierName: 'Neel Motors',
      supplierContact: '+91 98765 43219',
      evaluationDateTime: 'Thu, 19 Nov at 08:30AM',
      evaluationLocation:
        'No F 26, 4, Pocket D, Okhla Phase II, New Delhi, 110020',
      samilStatus: 'Pending',
      technicalResponse: 'Pending',
      reschedule: 'none',
    },
    {
      bikeName: '2015 Hunter 350',
      bikeNumber: 'DL6TAL7314',
      code: 'FB29FH9219HR1',
      priceOne: '1,26,600',
      ownerDetail: '2nd',
      km: '35,150',
      mileage: '43.6',
      color: 'Red, Chrome',
      location: 'Delhi',
      date: '25/08/2022',
      supplierName: 'Neel Motors',
      supplierContact: '+91 98765 43219',
      evaluationDateTime: 'Thu, 19 Nov at 08:30AM',
      evaluationLocation:
        'No F 26, 4, Pocket D, Okhla Phase II, New Delhi, 110020',
      samilStatus: 'Pending',
      technicalResponse: 'Pending',
      reschedule: 'none',
    },
  ];
  return (
    <>
      <Breadcrumb title="Listings" />
      <HeaderPrimary headerClass="mb-2" title="Pending Evaluation">
        <SearchPrimary placeholder="Search Model, Registration No." />
        <FilterButton />
      </HeaderPrimary>

      <div className="custom-tab-style">
        <Tabs
          className="mb-3"
          defaultActiveKey="title1"
          id="uncontrolled-tab-example"
          tabClassName="custom-tab-nav"
        >
          <Tab eventKey="title1" title="Pending (2)">
            <div className="action-list-style my-3">
              <div className="left-sec">
                <h5 className="title3">2 Bids Available</h5>
                <div className="vertical-divider" />
                <div className="d-flex align-items-center">
                  <CustomCheckBox checkTitle="Select all -" className="me-2" />
                  <OutlineButton
                    leftIcon={<BiCheck className="m-0 me-2" />}
                    title="Request Evaluation"
                  />
                </div>
              </div>
            </div>

            {motorCycleDetail.map((item) => (
              <MotorcycleDetailCard
                bikeName={item.bikeName}
                bikeNumber={item.bikeNumber}
                bikeCode={item.code}
                priceOne={item.priceOne}
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
          </Tab>
          <Tab eventKey="title2" title="Scheduled (12)">
            <EmptyState
              title="No Result Found!"
              description="we couldn find what you searched for try something again."
            />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default PendingEvaluation;
