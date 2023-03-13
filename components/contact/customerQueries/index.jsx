import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import OutlineButton from '../../common/buttons/OutlineButton';
import ArrowButton from '../../common/buttons/ArrowButton';

import style from './style.module.scss';

function CustomerQueries(props) {
  return (
    <div className={style.customerQueriesCard}>
      <div className={style.cardTopRow}>
        <div className={style.topCol}>
          <div className={style.textHead}>Ticket ID:</div>
          <div className={style.textLight}> {props.ticketId}</div>
        </div>
        <div className={style.verticalDivider} />
        <div className="d-flex align-items-center">
          <div className={`${style.statusCircle} status-circle danger me-2 `} />
          <div className={style.topCol}>
            <div className={style.textHead}>Status:</div>
            <div className={style.textLight}>{props.status}</div>
          </div>
        </div>
      </div>

      <div className={style.bottomRow}>
        <div className={style.columsStyle}>
          <div>
            <div className={style.textLight}>Customer Name</div>
            <div className={style.textHead}>{props.customerName}</div>
          </div>
          <div>
            <div className={style.textLight}>Date and Time</div>
            <div className={style.textHead}>{props.dateTime}</div>
          </div>
          <div>
            <div className={style.textLight}>Customer Query</div>
            <div className={style.textHead}>{props.customerQuery}</div>
          </div>
        </div>

        <div className={style.buttonSection}>
          <ArrowButton
            detailLink="/escalation/procuredMotorcycle"
            title="Contact"
          />
          <OutlineButton
            title="Export Logs"
            className="theme1"
            leftIcon={<BsCheckLg size={10} />}
          />
        </div>
      </div>
    </div>
  );
}

export default CustomerQueries;
