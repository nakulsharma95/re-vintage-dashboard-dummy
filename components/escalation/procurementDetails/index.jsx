import React from 'react';
import ArrowButton from '../../common/buttons/ArrowButton';
import style from './style.module.scss';

function ProcurementDetails() {
  return (
    <div className={style.procurementDetails}>
      <h5>Escalation Issue</h5>
      <p>Issue mentioned by CRE</p>

      <h6>Remark</h6>
      <div className="position-relative d-flex">
        <div className={style.remark_text}>
          <p>Remark by Supervisor</p>
        </div>
        <div className={style.remark_btn}>
          <ArrowButton
            detailLink="/escalation/procuredMotorcycle"
            title="SUBMIT"
          />
        </div>
      </div>
    </div>
  );
}

export default ProcurementDetails;
