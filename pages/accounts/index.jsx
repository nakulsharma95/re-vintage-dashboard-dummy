import { Row, Col } from 'react-bootstrap';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';
import AccountDashboardCard from '../../components/accounts/accountDashboardCard';
import OutlineDropdown from '../../components/common/buttons/OutlineDropdown';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import HeaderPrimary from '../../components/common/headerPrimary';
import OverallDataCard from '../../components/accounts/overallDataCard';
import RecentlySoldCard from '../../components/accounts/recentlySoldCard';
import TotalCard from '../../components/accounts/totalCard';

export default function Accounts() {
  const accountdashboardCardData = [
    {
      title: 'Total Sales',
      description: '₹10,55,550.00',
      bottomDescription: '+8.45% this month',
      percentage: '10.5%',
      imageUrl: '/images/key.svg',
      icon: <FiArrowUpRight color="#13B21F" size={15} />,
      cardBg: '#DA291C',
    },
    {
      title: 'Recently added',
      description: '07',
      bottomDescription: '-8.45% this month',
      percentage: '10.5%',
      imageUrl: '/images/key.svg',
      icon: <FiArrowDownRight color="#DA291C" size={15} />,
      cardBg: '#4A4A4A',
    },
    {
      title: 'Inventory in Hand',
      description: '15',
      bottomDescription: '-8.45% this month',
      percentage: '10.5%',
      imageUrl: '/images/key.svg',
      icon: <FiArrowDownRight color="#DA291C" size={15} />,
      cardBg: '#4A4A4A',
    },
    {
      title: 'Sold',
      description: '07',
      bottomDescription: '-8.45% this month',
      percentage: '10.5%',
      imageUrl: '/images/key.svg',
      icon: <FiArrowDownRight color="#DA291C" size={15} />,
      cardBg: '#4A4A4A',
    },
  ];

  const totalCardData = [
    {
      cardtitle: 'Total Procured',
    },
    {
      cardtitle: 'Total sales',
    },
    {
      cardtitle: 'Total Inventory',
    },
  ];

  return (
    <div>
      <Breadcrumb title="Account Details" />

      <HeaderPrimary headerClass="mb-2" title="Welcome To Your Account">
        <div className="d-flex align-items-center">
          <span className="mx-2 filterTitle">Filter By:</span>
          <OutlineDropdown
            dropdownTitle="This year"
            options={['Next year', 'Next year', 'Next year']}
          />
        </div>
      </HeaderPrimary>
      <div className="accounts-dashboard-card">
        {accountdashboardCardData.map((item) => (
          <AccountDashboardCard
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            bottomDescription={item.bottomDescription}
            divider
            icon={item.icon}
            percentage={item.percentage}
            cardBg={item.cardBg}
            priceValue={item.priceValue}
          />
        ))}
      </div>
      <Row>
        {totalCardData.map((item) => (
          <Col xxl={4} xl={4} lg={6}>
            <TotalCard cardtitle={item.cardtitle} />
          </Col>
        ))}
      </Row>
      <RecentlySoldCard TitleBtn="View all" />
      <div className="bottom-white-border mt-3 mb-3" />
      <OverallDataCard />
    </div>
  );
}
