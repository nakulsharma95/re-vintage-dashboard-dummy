import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./detailCard.module.scss";

export default function DetailCard() {
  return (
    <Container>
      <Row>
        <div className={`${styles.detailCardContainer} `}>
          <Card className={styles.detailCard}>
           
          </Card>
        </div>
      </Row>
    </Container>
  );
}
