import { RiShareBoxFill } from 'react-icons/ri';
import { Tab, Tabs } from 'react-bootstrap';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailMotorcycleCard from '../../../components/procurements/detailMotorcycleCard';
import DetailPagination from '../../../components/common/paginationPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import HeaderPrimary from '../../../components/common/headerPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';
import FilterButton from '../../../components/common/filterButton';
import ViewAll from '../../../components/common/viewAllHeader';

export default function ScheduledEvaluation() {
  const cardItemData = [
    {
      status: 'Overdue',
      bikeName: '2015 Classic 350',
      bikeNumber: 'DL6TAL7314',
      bikeCode: 'F293RB29RF82',
      kmDrive: '43,384',
      owner: '1st',
      bikeCC: '350',
      ownerNo: '2nd',
      kmDetail: '35150',
      mileage: '43.6',
      bikeColor: 'Red, Chrome',
      location: 'Delhi',
      postingDate: '25/08/2022',
      priceOne: '1,19,300',
      priceTwo: '1,26,300',
      evaluationLocation: 'Neel Motors, Lajpat Nagar, Delhi',
      ownerDetails: 'Rishabh Sharma',
      ownerContact: '+91 9876543219',
      evaluationDateTime: 'Thu, 19 Nov at 08:30AM',
    },
    {
      status: 'Overdue',
      bikeName: '2015 Classic 350',
      bikeNumber: 'DL6TAL7314',
      bikeCode: 'F293RB29RF82',
      kmDrive: '43,384',
      owner: '1st',
      bikeCC: '350',
      ownerNo: '2nd',
      kmDetail: '35150',
      mileage: '43.6',
      bikeColor: 'Red, Chrome',
      location: 'Delhi',
      postingDate: '25/08/2022',
      priceOne: '1,19,300',
      priceTwo: '1,26,300',
      evaluationLocation: 'Neel Motors, Lajpat Nagar, Delhi',
      ownerDetails: 'Rishabh Sharma',
      ownerContact: '+91 9876543219',
      evaluationDateTime: 'Thu, 19 Nov at 08:30AM',
    },
    {
      status: 'Overdue',
      bikeName: '2015 Classic 350',
      bikeNumber: 'DL6TAL7314',
      bikeCode: 'F293RB29RF82',
      kmDrive: '43,384',
      owner: '1st',
      bikeCC: '350',
      ownerNo: '2nd',
      kmDetail: '35150',
      mileage: '43.6',
      bikeColor: 'Red, Chrome',
      location: 'Delhi',
      postingDate: '25/08/2022',
      priceOne: '1,19,300',
      priceTwo: '1,26,300',
      evaluationLocation: 'Neel Motors, Lajpat Nagar, Delhi',
      ownerDetails: 'Rishabh Sharma',
      ownerContact: '+91 9876543219',
      evaluationDateTime: 'Thu, 19 Nov at 08:30AM',
    },
  ];
  return (
    <div className="">
      <Breadcrumb title="Procurement" addmoretitle="Scheduled Evaluation" />
      <HeaderPrimary headerClass="mb-2" title="Scheduled Evaluation">
        <OutlineButton
          title="Export Data"
          rightIcon={<RiShareBoxFill />}
          className="mr-2"
        />
        <SearchPrimary placeholder="Search Name, Location, Reference ID" />
        <FilterButton />
      </HeaderPrimary>

      <div className="custom-tab-style">
        <Tabs
          className="mb-3"
          defaultActiveKey="title1"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="title1" title="Open">
            <ViewAll
              title="3 Leads Available"
              viewAllList
              viewAllClass="mb-4"
            />
            {cardItemData.map((item) => (
              <DetailMotorcycleCard
                status={item.status}
                bikeName={item.bikeName}
                bikeNumber={item.bikeNumber}
                bikeCode={item.bikeCode}
                kmDrive={item.kmDrive}
                owner={item.owner}
                bikeCC={item.bikeCC}
                ownerNo={item.ownerNo}
                kmDetail={item.kmDrive}
                mileage={item.mileage}
                bikeColor={item.bikeColor}
                location={item.location}
                postingDate={item.postingDate}
                priceOne={item.priceOne}
                priceTwo={item.priceTwo}
                evaluationLocation={item.evaluationLocation}
                ownerDetails={item.ownerDetails}
                ownerContact={item.ownerContact}
                evaluationDateTime={item.evaluationDateTime}
              />
            ))}
          </Tab>
          <Tab eventKey="title2" title="Cancelled (12)">
            <ViewAll
              title="3 Leads Available"
              viewAllList
              viewAllClass="mb-4"
            />
            {cardItemData.map((item) => (
              <DetailMotorcycleCard
                status={item.status}
                bikeName={item.bikeName}
                bikeNumber={item.bikeNumber}
                bikeCode={item.bikeCode}
                kmDrive={item.kmDrive}
                owner={item.owner}
                bikeCC={item.bikeCC}
                ownerNo={item.ownerNo}
                kmDetail={item.kmDrive}
                mileage={item.mileage}
                bikeColor={item.bikeColor}
                location={item.location}
                postingDate={item.postingDate}
                priceOne={item.priceOne}
                priceTwo={item.priceTwo}
                evaluationLocation={item.evaluationLocation}
                ownerDetails={item.ownerDetails}
                ownerContact={item.ownerContact}
                evaluationDateTime={item.evaluationDateTime}
              />
            ))}
          </Tab>
          <Tab eventKey="title3" title="Dropped (12)">
            <ViewAll
              title="3 Leads Available"
              viewAllList
              viewAllClass="mb-4"
            />
            {cardItemData.map((item) => (
              <DetailMotorcycleCard
                status={item.status}
                bikeName={item.bikeName}
                bikeNumber={item.bikeNumber}
                bikeCode={item.bikeCode}
                kmDrive={item.kmDrive}
                owner={item.owner}
                bikeCC={item.bikeCC}
                ownerNo={item.ownerNo}
                kmDetail={item.kmDrive}
                mileage={item.mileage}
                bikeColor={item.bikeColor}
                location={item.location}
                postingDate={item.postingDate}
                priceOne={item.priceOne}
                priceTwo={item.priceTwo}
                evaluationLocation={item.evaluationLocation}
                ownerDetails={item.ownerDetails}
                ownerContact={item.ownerContact}
                evaluationDateTime={item.evaluationDateTime}
              />
            ))}
          </Tab>
        </Tabs>
      </div>
      <DetailPagination />
    </div>
  );
}
