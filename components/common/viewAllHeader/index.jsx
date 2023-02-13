import React from 'react';
import { Col, Button } from 'react-bootstrap';
import style from './style.module.scss';

const ViewAll = (props) => {
  return (
    <Col md={12}>
      <div className={style.titleViewAllMain}>
        <h5 className={style.titleViewAll}>
          {props.title} <span>{props.leads}</span>
        </h5>
        <div>
          <Button variant="primary" className={style.viewAllBtn}>
            View All
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default ViewAll;
