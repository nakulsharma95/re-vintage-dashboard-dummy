import { Tab, Tabs } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import FilterButton from '../../../components/common/filterButton';
import HeaderPrimary from '../../../components/common/headerPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';
import DealFilter from '../../../components/dealClosure/dealFilter';
import CompleteBikeDetail from '../../../components/procurements/completeEvalutationCard';

export default function TestRiderRequests() {
  return (
    <div>
      <Breadcrumb title="Retail" addmoretitle="Test Ride Requests" />
      <HeaderPrimary headerClass="mb-2" title="Test Rider Requests">
        <OutlineButton title="Export Data" rightIcon={<RiShareBoxFill />} />
        <SearchPrimary placeholder="Search Name, Location, Reference ID" />
        <FilterButton />
      </HeaderPrimary>

      <div className="custom-tab-style">
        <Tabs
          className="mb-3"
          defaultActiveKey="title1"
          id="uncontrolled-tab-example"
          tabClassName="custom-tab-nav"
        >
          <Tab eventKey="title1" title="From Web (4)">
            <div className="action-list-style my-3">
              <div className="left-sec">
                <h5 className="title3">12 Result Found</h5>
              </div>

              <div className="right-sec">
                <DealFilter
                  title="Sort By"
                  isViewBy
                  isNonRe
                  droptitle="Pending"
                />
              </div>
            </div>

            <CompleteBikeDetail
              isEvalBtnVisible={false}
              isCallerBtnVisible
              isEnquiryNumVisible
              isSlider
            />
          </Tab>
          <Tab eventKey="title2" title="From OLX">
            <div className="action-list-style my-3">
              <div className="left-sec">
                <h5 className="title3">12 Result Found</h5>
              </div>

              <div className="right-sec">
                <DealFilter
                  title="Sort By"
                  isViewBy
                  isNonRe
                  droptitle="Pending"
                />
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
            <div className="action-list-style my-3">
              <div className="left-sec">
                <h5 className="title3">12 Result Found</h5>
              </div>

              <div className="right-sec">
                <DealFilter
                  title="Sort By"
                  isViewBy
                  isNonRe
                  droptitle="Pending"
                />
              </div>
            </div>
            <CompleteBikeDetail
              isEvalBtnVisible={false}
              isCallerBtnVisible
              isSlider
              isEnquiryNumVisible
            />
          </Tab>
          <Tab eventKey="title4" title="Dropped (4)">
            <div className="action-list-style my-3">
              <div className="left-sec">
                <h5 className="title3">12 Result Found</h5>
              </div>

              <div className="right-sec">
                <DealFilter
                  title="Sort By"
                  isViewBy
                  isNonRe
                  droptitle="Pending"
                />
              </div>
            </div>
            <CompleteBikeDetail
              isEvalBtnVisible={false}
              isCallerBtnVisible
              isSlider
              isEnquiryNumVisible
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
