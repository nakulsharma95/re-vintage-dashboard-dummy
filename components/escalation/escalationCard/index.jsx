import React from 'react';
import ArrowButton from '../../common/buttons/ArrowButton';

import style from './style.module.scss';

function EscalationCard() {
  return (
    <div className={style.escalationCard}>
      <div className={style.escalationCard_head}>
        <div className={style.escalationCard_topRow}>
          <div className={style.escalationCard_topCol}>
            <h6>
              Escalation ID <span>- CSCB29E2B1</span>
            </h6>
          </div>

          <div className={style.escalationCard_topCol}>
            <h6>
              Escalation Issue: <span>Customer</span>
            </h6>
          </div>

          <div className={style.escalationCard_topCol}>
            <h6>
              Escalated By: <span>CRE</span>
            </h6>
          </div>

          <div className={`${style.escalationCard_topCol}`}>
            <div className="d-flex align-items-center">
              <div className="status-circle danger me-2" />
              <h6>
                Status:<span> Unresolved</span>
              </h6>
            </div>
          </div>
        </div>
        <div className={style.escalationCard_bottomRow}>
          <div className={style.escalationCard_Colums}>
            <div className={style.escalationCard_bottomCol}>
              <p>
                Escalation Stage <br /> <span>Procurement</span>
              </p>
            </div>

            <div className={style.escalationCard_bottomCol}>
              <p>
                VDMP ID <br /> <span>CNNASA0R2R1</span>
              </p>
            </div>

            <p>
              Description <br /> <span>Reason for escalation of this lead</span>
            </p>

            <p>
              Date and Time of escalation <br />
              <span>17 Jan, 2023 at 4:23 PM</span>
            </p>
          </div>

          <div className={style.viewDetailBtn}>
            <ArrowButton
              detailLink="/escalation/procuredMotorcycle"
              title="View Details"
            />
          </div>
        </div>
      </div>
      <div className={style.escalationCard_body} />
    </div>
  );
}

export default EscalationCard;
