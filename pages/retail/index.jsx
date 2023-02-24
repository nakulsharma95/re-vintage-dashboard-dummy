import { Col, Row } from 'react-bootstrap';
import { TbTrendingUp } from 'react-icons/tb';
import { RiShareBoxFill } from 'react-icons/ri';
import BikeCardRadio from '../../components/common/cardCheckbox';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import DashboardCard from '../../components/dashboardCard';
import SortTabs from '../../components/common/sortTabs';
import TabPrimary from '../../components/common/tabPrimary';
import SearchPrimary from '../../components/common/searchPrimary';
import FilterButton from '../../components/common/filterButton';
import HeaderPrimary from '../../components/common/headerPrimary';
import OutlineButton from '../../components/common/buttons/OutlineButton';

export default function Retail() {
  const dashboardCardData = [
    {
      title: 'Total',
      description: '32',
      bottomDescription: 'Overall Growth',
      percentage: '12%',
      icon: <TbTrendingUp color="#13B21F" size={15} />,
      cardBg: '#DA291C',
      dividerColor: 'white',
    },
    {
      title: 'Content Approval Pending',
      description: '12',
      bottomDescription: 'Received This Week',
      percentage: '8',
      cardBg: '#403E3E',
      dividerColor: '#282828',
    },
    {
      title: 'Content Upload Pending',
      description: '08',
      cardBg: '#282828',
    },
    {
      title: 'Under Refurbishment',
      description: '12',
      cardBg: '#282828',
    },
  ];
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
      <Breadcrumb title="Retail" />
      <HeaderPrimary headerClass="mb-2" title="Retail">
        <OutlineButton title="Export Data" rightIcon={<RiShareBoxFill />} />
        <SearchPrimary />
        <FilterButton />
      </HeaderPrimary>
      <div className="dashboard-card">
        {dashboardCardData.map((item) => (
          <DashboardCard
            title={item.title}
            description={item.description}
            bottomDescription={item.bottomDescription}
            divider
            icon={item.icon}
            percentage={item.percentage}
            cardBg={item.cardBg}
            dividerColor={item.dividerColor}
            priceValue={item.priceValue}
          />
        ))}
      </div>
      <TabPrimary
        title1="Content Approval Pending (12)"
        title2="Content Upload Pending (8)"
        title3="Under Refurbishment"
        title4="Pending Evaluation (15)"
      />
      <SortTabs
        selectAllCheck
        approveBtn
        isSortTabBox
        isCheckInput
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
              isCheckBoxVisible={false}
              isButtonVisible={false}
              isBikeChassisVisible={false}
              imageUrl={item.imageUrl}
              dealerLocation={item.dealerLocation}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
