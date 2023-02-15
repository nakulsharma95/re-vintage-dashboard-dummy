import style from './style.module.scss';
import Filters from '../../components/common/filters';
import DashboardCard from '../../components/common/dashboardCard';
import DashboardBigCard from '../../components/common/dashboardBigCard';

export default function Homepage() {
  return (
    <div className={style.homepageStyle}>
      <Filters
        title="Welcome to Your Inventory Dashboard"
        subTitle="Here you will see the most latest update"
      />
      <DashboardCard />
      <DashboardBigCard />
    </div>
  );
}
