import { Row } from "react-bootstrap";
import ArrowButton from "../../../components/common/buttons/ArrowButton";
import OutlineButton from "../../../components/common/buttons/OutlineButton";
import DetailBikeCardImg from "../../../components/retails/detailBikeCardImg";
import DetailDealerCard from "../../../components/retails/detailDealerCard";
import HeaderPrimary from "../../../components/common/headerPrimary";

export default function MotorcycleDetails() {
  const detailDealerCard = [
    {
      bikeName: "2015 Classic 350",
      bikeNumber: "DL 6T AL 7314",
      code: "FB29FH9219HR1",
      ownerDetail: "2st",
      km: "35,150",
      mileage: "43.6",
      color: "Red, Chrome",
      location: "Delhi",
      date: "25/08/2022",
      supplierName: "Neel Motors",
      supplierContact: "+91 98765 43219",
      evaluationDateTime: "Thu, 19 Nov at 08:30AM",
      reschedule: "none",
      dealerLocation: "Neel Motors, Lajpat Nagar, Delhi",
    },
  ];
  return (
    <div>
      <HeaderPrimary
        title="Motorcycle Details"
        subTitle="Please find all the necessary details below"
      />

      <Row>
        <DetailBikeCardImg />
      </Row>

      {detailDealerCard.map((item) => (
        <DetailDealerCard
          bikeName={item.bikeName}
          bikeNumber={item.bikeNumber}
          bikeCode={item.code}
          owner={item.ownerDetail}
          kmDrive={item.km}
          mileage={item.mileage}
          bikeColor={item.color}
          location={item.location}
          postedDate={item.date}
          dealerLocation={item.dealerLocation}
        />
      ))}

      <div className="fixed-Footer">
        <div className="mx-3">
          <OutlineButton title="REJECT" className="theme1" />
        </div>
        <div>
          {" "}
          <ArrowButton detailLink="" title="APPROVE" />
        </div>
      </div>
    </div>
  );
}
