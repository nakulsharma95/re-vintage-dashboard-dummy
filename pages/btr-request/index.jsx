import { Tab, Tabs } from 'react-bootstrap';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import FilterButton from '../../components/common/filterButton';
import HeaderPrimary from '../../components/common/headerPrimary';
import CompleteBikeDetail from '../../components/procurements/completeEvalutationCard';
import EmptyState from '../../components/emptyState';

export default function BtrRequest() {
  return (
    <div>
      <Breadcrumb title="Test Ride Requests" />
      <HeaderPrimary headerClass="mb-2" title="Test Rider Requests">
        <FilterButton />
      </HeaderPrimary>

      <div className="custom-tab-style">
        <Tabs
          className="mb-3"
          defaultActiveKey="title2"
          id="uncontrolled-tab-example"
          tabClassName="custom-tab-nav"
        >
          <Tab eventKey="title1" title="From Web (4)">
            <EmptyState
              title="No Result Found!"
              description="we couldn find what you searched for try something again."
            />
          </Tab>
          <Tab eventKey="title2" title="From OLX">
            <div className="action-list-style my-3">
              <div className="left-sec">
                <h5 className="title3">12 Result Found</h5>
              </div>
            </div>
            <CompleteBikeDetail
              isEvalBtnVisible={false}
              isCallerBtnVisible
              isSlider
              isEnquiryNumVisible
            />
          </Tab>
          <Tab eventKey="title3" title="Completed (4)">
            <EmptyState
              title="No Result Found!"
              description="we couldn find what you searched for try something again."
            />
          </Tab>
          <Tab eventKey="title4" title="Dropped (4)">
            <EmptyState
              title="No Result Found!"
              description="we couldn find what you searched for try something again."
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
