import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./style.module.scss";
import { AiOutlineClose } from "react-icons/ai";

export default function DetailCard() {
  const cardData = [
    {
      ownerName: "Rishab Sharma",
    },
    {
      ownerName: "Rishab kumar",
    },
    {
      ownerName: "Rishab Sharma",
    },
  ];
  return (
    <Container>
      <Row className="mt-4 mb-4">
        {cardData.map((item, index) => (
          <Col xl={4} key={index} md={6}>
            <div className={`${styles.detailCardContainer} mb-4 `}>
              <Card className={styles.detailCard}>
                <Card.Body>
                  <div
                    className={`${styles.headerDetail} ${styles.detailsDivide} p-0 border-0 `}
                  >
                    <h2 className="text-white mb-0">
                      Details{" "}
                      <span className="text-white-50">-FB29FH9219HR1</span>
                    </h2>
                    <div
                      className={`${styles.detailDrop} ${styles.detailsDivide} border-0 shadow-none text-white  gap-2 }`}
                    >
                      <i className="fa-solid fa-xmark fs-4"></i>
                      <span className="mb-0">Drop Lead</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div
                      className={`${styles.borderStyles} ${styles.detailsDivide}   pb-2`}
                    >
                      <div className={`${styles.detailName}`}>
                        <span className="text-white-50">Owner Name</span>
                        <p className="mb-0 text-white ">{item.ownerName}</p>
                      </div>
                      <div className={`${styles.detailContact}`}>
                        <span className="text-white-50">Contact No.</span>
                        <p className="mb-0 text-white ">+91 9876543219</p>
                      </div>
                    </div>
                    <div
                      className={`${styles.borderStyles} ${styles.detailsDivide}  pb-2 mt-1`}
                    >
                      <div className={`${styles.detailEmail}`}>
                        <span className="text-white-50">Email</span>
                        <p class="mb-0 text-white ">john@gmail.com</p>
                      </div>
                      <div className={`${styles.detailPincode}`}>
                        <span className="text-white-50">Pincode</span>
                        <p className="mb-0 text-white ">110014</p>
                      </div>
                    </div>

                    <div className={`${styles.detailsDivide} py-2 `}>
                      <div
                        className={`${styles.btnthemeOuter} d-flex align-items-center}`}
                      >
                        <div className={`${styles.btnthemeName} p-0 px-2`}>
                          Contact Customer
                        </div>
                        <span
                          className={`${styles.btnthemeIcon} ${styles.detailsDivide}  px-2`}
                        >
                          {" "}
                          <i className="fa-solid fa-angle-right"></i>
                        </span>
                      </div>
                      <div className={`${styles.detailSendForm} text-white`}>
                        <i className="fa-regular fa-calendar me-2"></i>
                        <span>Send eval. form</span>
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <div
                  className={`${styles.detailCardFooter} ${styles.detailsDivide}  card-footer bg-dark`}
                >
                  <p className="text-white-50 mb-0">
                    Prm source: <span class="text-white">MIY</span>
                  </p>
                  <p className="text-white-50 mb-0">
                    Sec source: <span class="text-white">Google</span>
                  </p>
                </div>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
