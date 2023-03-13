import React from 'react';
import ArrowButton from '../../common/buttons/ArrowButton';

import style from './style.module.scss';

function EscalationCard(props) {
  return (
    <div className={style.escalationCard}>
      <div className={style.escalationCard_head}>
        <div className={style.escalationCard_topRow}>
          <div className={style.escalationCard_topCol}>
            <h6>
              Escalation ID <span>{props.id} </span>
            </h6>
          </div>

          <div className={style.escalationCard_topCol}>
            <h6>
              Escalation Issue: <span>{props.issue}</span>
            </h6>
          </div>

          <div className={style.escalationCard_topCol}>
            <h6>
              Escalated By: <span>{props.escalatedBy}</span>
            </h6>
          </div>

          <div className={`${style.escalationCard_topCol}`}>
            <div className="d-flex align-items-center">
              <div
                className={`${style.statusCircle} status-circle danger me-2 `}
              />
              <h6>
                Status:<span> {props.status}</span>
              </h6>
            </div>
          </div>
        </div>
        <div className={style.escalationCard_bottomRow}>
          <div className={style.escalationCard_Colums}>
            <div className={style.escalationCard_bottomCol}>
              <p>
                Escalation Stage <br /> <span>{props.stage} </span>
              </p>
            </div>

            <div className={style.escalationCard_bottomCol}>
              <p>
                VDMP ID <br /> <span>{props.vdmpId}</span>
              </p>
            </div>

            <p>
              Description <br /> <span>{props.description} </span>
            </p>

            <p>
              Date and Time of escalation <br />
              <span>{props.dateAndTime} </span>
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
