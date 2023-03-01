import { RiShareBoxFill } from "react-icons/ri";
import { Tab, Tabs } from "react-bootstrap";
import Breadcrumb from "../../../components/common/breadcrumbPrimary";
import CompleteBikeDetail from "../../../components/procurements/completeEvalutationCard";
import SearchPrimary from "../../../components/common/searchPrimary";
import FilterButton from "../../../components/common/filterButton";
import HeaderPrimary from "../../../components/common/headerPrimary";
import OutlineButton from "../../../components/common/buttons/OutlineButton";
import SortTabs from "../../../components/common/sortTabs";

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
          defaultActiveKey="title3"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="title1" title="From Web (4)">
            <SortTabs selectAllCheck sortTabTitle="12 Result Found" />

            <CompleteBikeDetail
              isEvalBtnVisible={false}
              isCallerBtnVisible
              isEnquiryNumVisible
              isSlider={true}
            />
          </Tab>
          <Tab eventKey="title2" title="From OLX">
            <SortTabs selectAllCheck sortTabTitle="12 Result Found" />
            <CompleteBikeDetail
              isEvalBtnVisible={false}
              isCallerBtnVisible
              isSlider={true}
              isEnquiryNumVisible
            />
          </Tab>
          <Tab eventKey="title3" title="Completed (4)">
            <SortTabs selectAllCheck sortTabTitle="12 Result Found" />
            <CompleteBikeDetail
              isEvalBtnVisible={false}
              isCallerBtnVisible
              isSlider={true}
              isEnquiryNumVisible
            />
          </Tab>
          <Tab eventKey="title4" title="Dropped (4)">
            <SortTabs selectAllCheck sortTabTitle="12 Result Found" />
            <CompleteBikeDetail
              isEvalBtnVisible={false}
              isCallerBtnVisible
              isSlider={true}
              isEnquiryNumVisible
            
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
