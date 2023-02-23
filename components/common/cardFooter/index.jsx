/* eslint-disable jsx-a11y/heading-has-content */
import styles from './style.module.scss';

const bikeCardFooter = (props) => (
  <div className={styles.completeBikeFooter}>
    <h6 className={styles.bikeFooterTitle}>{props.detailTitle}</h6>
    <div className={styles.cardFooterCols}>
      {props.userTitle && (
        <div>
          <h4 className={styles.bikeFooterSubTitle}>{props.userTitle}</h4>
          <p className={styles.bikeFooterText}>{props.name}</p>
        </div>
      )}
      {props.idTitle && (
        <div>
          <h4 className={styles.bikeFooterSubTitle}>{props.idTitle}</h4>
          <p className={styles.bikeFooterText}>{props.caseId}</p>
        </div>
      )}
      {props.contactText && (
        <div>
          <h4 className={styles.bikeFooterSubTitle}>{props.contactText}</h4>
          <p className={styles.bikeFooterText}>{props.contact}</p>
        </div>
      )}
    </div>
  </div>
);

export default bikeCardFooter;
