import OutlineDropdown from '../common/buttons/OutlineDropdown';
import styles from './style.module.scss';

export default function DashboardCard(props) {
  return (
    <div
      className={`${styles.dashboardCard} ${props.theme && styles.light} py-2`}
      style={{ background: props.cardBg }}
    >
      <div className={`${styles.cardHead}`}>
        <div className="d-flex justify-content-between align-items-center">
          <h3 className={styles.title}>
            {props.title} <br /> {props.titleBr}
          </h3>
          {props.dropdown && (
            <OutlineDropdown
              dropdownTitle="1 Month"
              options={['2 Month', '3 Month', '4 Month']}
            />
          )}
        </div>
        <div className={styles.numbers}>{props.description}</div>
      </div>

      {!props.isFooterHide && (
        <div>
          {props.divider && (
            <div
              className={`${styles.divider} w-100`}
              style={{ borderColor: props.dividerColor }}
            />
          )}
          <div className={`${styles.cardFooter} pt-2 w-100`}>
            {props.priceValue ? (
              <div className={styles.title2}>{props.priceValue}</div>
            ) : (
              <>
                <h3>{props.bottomDescription}</h3>
                <div>
                  <span className="mx-2">{props.percentage}</span>
                  {props.icon && <span>{props.icon}</span>}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
