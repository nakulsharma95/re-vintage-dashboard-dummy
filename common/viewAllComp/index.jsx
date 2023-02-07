import React from 'react';
import { Col } from 'react-bootstrap';
import style from './style.module.scss';

function ViewAll(props) {
  return (
    <Col md={12}>
      <div className={style.titleViewAllMain}>
        <h5 className={style.titleViewAll}>
          {props.title} <span>(32 Leads)</span>
        </h5>
        <div>
          <a href={props.viewallLink} className={style.viewAllBtn}>
            View All
          </a>
        </div>
      </div>
    </Col>
  );
}

export default ViewAll;
