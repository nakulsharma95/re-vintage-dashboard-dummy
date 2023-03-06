import Image from 'next/image';
import styles from './style.module.scss';

export default function AccountDashboardCard(props) {
  return (
    <div
      className={`${styles.dashboardCard} py-2`}
      style={{ background: props.cardBg }}
    >
      <div className={`${styles.cardHead}`}>
        <div className="d-flex align-items-center">
          <div className={styles.imgIcon}>
            <Image
              src={props.imageUrl}
              width="14"
              height="14"
              alt="not found"
            />
          </div>
          <h3 className={styles.title}>
            {props.title} <br /> {props.titleBr}
          </h3>
        </div>
        <div className={styles.numbers}>{props.description}</div>
      </div>

      <div>
        <div className={`${styles.cardFooter} pt-2 w-100`}>
          {props.priceValue ? (
            <div className={styles.title2}>{props.priceValue}</div>
          ) : (
            <>
              <div>
                {props.icon && <span>{props.icon}</span>}
                <span className="mx-2">{props.percentage}</span>
              </div>
              <h3>{props.bottomDescription}</h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
