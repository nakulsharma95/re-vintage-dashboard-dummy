import { Tab, Tabs } from 'react-bootstrap';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import FilterButton from '../../components/common/filterButton';
import HeaderPrimary from '../../components/common/headerPrimary';
import SearchPrimary from '../../components/common/searchPrimary';
import CustomerQueries from '../../components/contact/customerQueries';
import Feedbacks from '../../components/contact/feedbacks';
import styles from './style.module.scss';

function ContactPage() {
  const customerQueries = [
    {
      ticketId: '#8718-1313-21',
      status: 'Pending',
      customerName: 'Chetan Singh',
      dateTime: '17 Jan, 2023 at 4:23 PM',
      customerQuery: 'Classic 350 red and silver color availability',
    },
    {
      ticketId: '#8718-1313-21',
      status: 'Pending',
      customerName: 'Chetan Singh',
      dateTime: '17 Jan, 2023 at 4:23 PM',
      customerQuery: 'Classic 350 red and silver color availability',
    },
    {
      ticketId: '#8718-1313-21',
      status: 'Pending',
      customerName: 'Chetan Singh',
      dateTime: '17 Jan, 2023 at 4:23 PM',
      customerQuery: 'Classic 350 red and silver color availability',
    },
  ];
  return (
    <div className={styles.contactPageStyle}>
      <Breadcrumb title="Feedbacks" />
      <HeaderPrimary headerClass="mb-2" title="Contact us">
        <SearchPrimary placeholder="Search feedbacks" />
        <FilterButton />
      </HeaderPrimary>

      <div className="custom-tab-style">
        <Tabs
          className="mb-3"
          defaultActiveKey="title1"
          id="uncontrolled-tab-example"
          tabclassname="custom-tab-nav"
        >
          <Tab eventKey="title1" title="Feedbacks">
            <div className="primary-accordion-style">
              <h5 className="title3 mb-3 text-gray">5 feedbacks found</h5>
              <Feedbacks />
            </div>
          </Tab>
          <Tab eventKey="title2" title="Customer Queries">
            <div className="primary-accordion-style">
              <h5 className="title3 mb-3 text-gray">5 feedbacks found</h5>
              {customerQueries.map((item) => (
                <CustomerQueries
                  ticketId={item.ticketId}
                  status={item.status}
                  customerName={item.customerName}
                  dateTime={item.dateTime}
                  customerQuery={item.customerQuery}
                />
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default ContactPage;
