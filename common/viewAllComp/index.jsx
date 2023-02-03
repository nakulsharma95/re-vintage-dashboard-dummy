import React from 'react';
import style from './style.module.scss';
import { Col, Button } from 'react-bootstrap';

const ViewAll = () => {
  return (
    <>
      <Col md={12}>
        <div className={style.titleViewAllMain}>
          <h5 className={style.titleViewAll}>
            Completed Evaluation <span>(32 Leads)</span>
          </h5>
          <div>
            <Button variant="primary" className={style.viewAllBtn}>
              View All
            </Button>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ViewAll;
