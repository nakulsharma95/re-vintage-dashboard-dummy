import { Col, Row } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import BikeCardRadio from '../../../components/common/cardCheckbox';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
// import DashboardCard from '../../../components/common/dashboardCard';
import SortTabs from '../../../components/common/sortTabs';
import TabPrimary from '../../../components/common/tabPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';
import FilterButton from '../../../components/common/filterButton';
import HeaderPrimary from '../../../components/common/headerPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';

export default function MarketPlace() {
  const cardData = [
    {
      imageUrl: '/images/bikeImage.png',
      overDue: 'evolutionOver',
      dealerLocation: 'Neel Motors, Lajpat Nagar, Delhi',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      dealerLocation: 'Neel Motors, Rohini Nagar, Delhi',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      dealerLocation: 'Neel Motors, Punjabi Bagh, Delhi',
    },
    {
      imageUrl: '/images/bikeImage4.png',
      dealerLocation: 'Neel Motors, Lajpat Nagar, Delhi',
    },
  ];
  return (
    <div>
      <Breadcrumb title="Retail" addmoretitle="Inventory" />

      <HeaderPrimary headerClass="mb-2" title="MarketPlace">
        <OutlineButton title="Export Data" rightIcon={<RiShareBoxFill />} />
        <SearchPrimary placeholder="Search Name, Location, Reference ID" />
        <FilterButton />
      </HeaderPrimary>

      <DashboardCard
        Dropdown
        title1="Listed (Active + Inactive)"
        description1="1507"
        bottomDescription1="Overall Growth"
        title2="Recent Inventory"
        description2="97"
        bottomDescription2="Received This Week"
        title3="Test Ride Requests"
        description3="12"
        title4="Bookings"
        description4="35"
      />
      <TabPrimary
        title1="Active"
        title2="Inactive (12)"
        title3="OLX Listing (4)"
      />
      <SortTabs
        selectAllCheck
        isCheckInput
        isSubmitBtn
        approveBtn
        moveToOlx
        sortTabTitle="12 Result Found"
      />

      <Row>
        {cardData.map((item) => (
          <Col xxl={3} xl={4} lg={6} key={item.id}>
            <BikeCardRadio
              bikeModal="2015 Classic 350"
              bikeRc="-DL6TAL7314"
              bikekm="43,384 km"
              bikeOwner="1st Owner"
              bikeCc="350 CC"
              bikePrice="1,25,000.00"
              bikeDealer="(C2N0RJ20FC2N)"
              dealerAddress="Neel Motors, Lajpat Nagar, Delhi"
              creDetail="CRE Detail"
              creName="John Watson"
              creNumber="+91 98765 43210"
              isCardVisible
              isCheckBoxVisible
              isBikeTagVisible={false}
              isOlxTagVisible
              isBikeChassisVisible={false}
              imageUrl={item.imageUrl}
              dealerLocation={item.dealerLocation}
              isCreDetails
              isDealer
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
