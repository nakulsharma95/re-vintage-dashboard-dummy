import React from 'react';
import { Row, Col, Button, Pagination } from 'react-bootstrap';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import styles from './style.module.scss';

function DetailPagination() {
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
    <div className={`${styles.paginationMain} custom-paginationMain`}>
      <Row className="align-items-center mobFlexPagination">
        <Col className={styles.detailPaginationTitle} xl={4} lg={4} md={12}>
          <h3 className="mb-0">Page 2 of 4</h3>
        </Col>

        <Col xl={8} lg={8} md={12} className={styles.detailPaginationNumber}>
          <div className="d-flex justify-content-end align-items-center">
            <div>
              <Button
                variant="primary"
                className={styles.detailPagePrevNextBtn}
              >
                <BsChevronLeft className={`${styles.paginationArrow} me-1`} />
                <span className={styles.desktopTitle}>Previous</span>
                <span className={styles.mobileTitle}>Prev</span>
              </Button>
            </div>
            <Pagination
              className={`${styles.detailPageNo} custom-pagination`}
              size="md"
            >
              {items}
            </Pagination>
            <div>
              <Button
                variant="primary"
                className={styles.detailPagePrevNextBtn}
              >
                Next
                <BsChevronRight className={`${styles.paginationArrow} ms-1`} />
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default DetailPagination;
