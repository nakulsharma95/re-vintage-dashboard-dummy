import { Row, Col } from "react-bootstrap";
import NotificationCard from "../../components/common/notificationCard";
import TabPrimary from "../../components/common/tabPrimary";
import Breadcrumb from "../../components/common/breadcrumbPrimary";
import HeaderPrimary from "../../components/common/headerPrimary";

export default function Notification() {
  const obj = [
    {
      heading: "Hunter 350 Marketplace Activation Request",
      subHeading: "Your request has been accepted",
      days: "5 Days ago",
      badgeSpan: "New",
      isBadgeVisible: true,
      isCheckIconVisible: true,
      isCloseIconVisible: false,
    },

    {
      heading: "Classic 350 Marketplace Activation Request",
      subHeading: "Your request has been accepted",
      days: "6 Days ago",
      badgeSpan: "New",
      isBadgeVisible: true,
      isCheckIconVisible: false,
      isCloseIconVisible: true,
    },

    {
      heading: "Payment Received!",
      subHeading: "Payment against BR2200402 has been received successfully.",
      days: "6 Days ago",
      badgeSpan: "New",
      isBadgeVisible: false,
      isCheckIconVisible: false,
      isCloseIconVisible: false,
    },

    {
      heading: "New Bidding Coming Up Soon!",
      subHeading: "This is to notify you that a new bid is coming up soon on the bidding portal, Please keep an eye on that.",
      days: "21 Sept 2022",
      badgeSpan: "New",
      isBadgeVisible: false,
      isCheckIconVisible: false,
      isCloseIconVisible: false,
    },
  ];
  return (
    <div>
      <Breadcrumb title="Notification" />
      <HeaderPrimary headerClass="mb-2" title="Notification"></HeaderPrimary>

      <TabPrimary
        title1="All"
        title2="Bidding"
        title3="Appointment"
        title4="Evaluation"
        title5="Admin Approval"
      />

      <Row>
        {obj.map((data) => (
          <Col xxl={12} xl={12} lg={12}>
            <NotificationCard
              heading={data.heading}
              subHeading={data.subHeading}
              days={data.days}
              badgeSpan={data.badgeSpan}
              isBadgeVisible={data.isBadgeVisible}
              isCheckIconVisible={data.isCheckIconVisible}
              isCloseIconVisible={data.isCloseIconVisible}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
