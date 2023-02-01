import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./style.module.scss";
import Pagination from "react-bootstrap/Pagination";
import CustomButton from "common/customButton";

export default function DetailPagination() {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Container>
      <Row>
        <div className={styles.detailPaginationContainer}>
          <Row>
            <Col className="d-flex align-items-center mb-3" md={4}>
              <div className={styles.detailPaginationNumber}>
                <h3 className="mb-0">Page 2 of 4</h3>
              </div>
            </Col>

            <Col md={8}>
              <div className="d-flex justify-content-end">
                <Pagination className={styles.detailPaginationMain} size="md">
                  {items}
                </Pagination>
              </div>
            </Col>
          </Row>
        </div>
      </Row>
    </Container>
  );
}
