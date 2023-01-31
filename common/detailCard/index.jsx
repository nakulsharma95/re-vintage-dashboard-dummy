import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./style.module.scss";
import { AiOutlineClose } from "react-icons/ai";

export default function DetailCard() {
  return (
    <Container>
      <Row>
        <Col xl={4} md={6}>
          <div className={`${styles.detailCardContainer} mb-4 `}>
            <Card className={styles.detailCard}>
              <Card.Body>
                <div
                  className={`${styles.headerDetail} p-0 border-0 d-flex align-items-center flex-nowrap justify-content-between`}
                >
                  <h2 className="text-white mb-0 text-nowrap">
                    Details{" "}
                    <span className="text-white-50">-FB29FH9219HR1</span>
                  </h2>
                  <div
                    className={`${styles.detailDrop} border-0 shadow-none text-white d-flex align-items-center gap-2 text-nowrap}`}
                  >
                    <i className="fa-solid fa-xmark fs-4"></i>
                    <span className="mb-0">Drop Lead</span>
                  </div>
                </div>
                <div className="mt-2">
                  <div
                    className={`${styles.borderStyles} d-flex input justify-content-between align-items-center  pb-2`}
                  >
                    <div className={`${styles.detailName}`}>
                      <span className="text-white-50">Owner Name</span>
                      <p className="mb-0 text-white ">Rishabh Sharma</p>
                    </div>
                    <div className={`${styles.detailContact}`}>
                      <span className="text-white-50">Contact No.</span>
                      <p className="mb-0 text-white ">+91 9876543219</p>
                    </div>
                  </div>
                  <div
                    className={`${styles.borderStyles} d-flex input justify-content-between align-items-center pb-2 mt-1`}
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

                  <div className="py-2 input d-flex justify-content-between align-items-center">
                    <div
                      className={`${styles.btnthemeOuter} d-flex align-items-center}`}
                    >
                      <div className={`${styles.btnthemeName} p-0 px-2`}>
                        Contact Customer
                      </div>
                      <span
                        className={`${styles.btnthemeIcon} d-flex justify-content-center align-items-center px-2`}
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
                className={`${styles.detailCardFooter} card-footer d-flex justify-content-between align-items-center bg-dark`}
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
      </Row>
    </Container>
  );
}
