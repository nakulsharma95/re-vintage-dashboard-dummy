import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./style.module.scss";
import { AiOutlineClose } from "react-icons/ai";

export default function DetailMotorcycleCard() {
  const cardData = [

  ];
  return (
    <Container>
      <Row className="mt-4 mb-4">
        {cardData.map((item, index) => (
          <Col xl={4} key={index} md={6}>
            <div className="mb-4">
              <Card className={styles}>
                <Card.Body>
               <Row className="gy-5">
                <Col lg={6} md={12} sm={12}>
                  
                </Col>
               </Row>
                 
                </Card.Body>
            
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
