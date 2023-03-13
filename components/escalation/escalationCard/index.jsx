import React from 'react';
import ArrowButton from '../../common/buttons/ArrowButton';

import style from './style.module.scss';

function EscalationCard(props) {
  return (
    <div className={style.escalationCard}>
      <div className={style.escalationCardHead}>
        <div className={style.escalationCardTopRow}>
          <div className={style.escalationCarTopCol}>
            <h6>
              Escalation ID <span>{props.id} </span>
            </h6>
          </div>

          <div className={style.escalationCardTopCol}>
            <h6>
              Escalation Issue: <span>{props.issue}</span>
            </h6>
          </div>

          <div className={style.escalationCard_topCol}>
            <h6>
              Escalated By: <span>{props.escalatedBy}</span>
            </h6>
          </div>

          <div className={`${style.escalationCardTopCol}`}>
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
        <div className={style.escalationCardBottomRow}>
          <div className={style.escalationCardColums}>
            <div className={style.escalationCardBottomCol}>
              <p>
                Escalation Stage <br /> <span>{props.stage} </span>
              </p>
            </div>

            <div className={style.escalationCardBottomCol}>
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
      <div className={style.escalationCardBody} />
    </div>
  );
}

export default EscalationCard;
