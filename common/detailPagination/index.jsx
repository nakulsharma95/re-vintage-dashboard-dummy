import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import styles from "./style.module.scss";

export default function DetailPagination() {
  const active = 2;
  const items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Row>
      <Row>
        <Col className="d-flex align-items-center mb-3" xl={4} lg={4} md={12}>
          <div className={styles.detailPaginationNumber}>
            <h3 className="mb-0">Page 2 of 4</h3>
          </div>
        </Col>

        <Col xl={8} lg={8} md={12}>
          <div className="d-flex justify-content-end">
            <div className="">
              <button type="button" className={styles.detailCustomBtn}>
                <BsChevronLeft className={styles.PaginationArrow} />
                Previous
              </button>
            </div>
            <Pagination className={styles.detailPaginationMain} size="md">
              {items}
            </Pagination>

            <div className="">
              <button type="button" className={styles.detailCustomBtn}>
                Next
                <BsChevronRight className={styles.PaginationArrow} />
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Row>
  );
}
