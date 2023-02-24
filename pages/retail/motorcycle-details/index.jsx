import { Row, Col } from "react-bootstrap";
import DetailBikeCardImg from "~/components/retails/detailBikeCardImg";
import HeaderPrimary from "../../../components/common/headerPrimary";

export default function MotorcycleDetails() {
  return (
    <div>
      <HeaderPrimary
        title="Motorcycle Details"
        subTitle="Please find all the necessary details below"
      ></HeaderPrimary>

      <Row>
        <DetailBikeCardImg />
      </Row>
    </div>
  );
}
