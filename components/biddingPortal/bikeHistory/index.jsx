import { Image } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import { FiClock } from 'react-icons/fi';
import Link from 'next/link';
import BikeDetailTitle from '../../common/detailHeader';
import Tags from '../../common/tags';
import styles from './style.module.scss';
import ManaualEntry from '../manualentry';
import OutlineButton from '../../common/buttons/OutlineButton';

export default function BikeHistory() {
  return (
    <div className={styles.bikeHistoryMain}>
      <div className="d-flex align-items-center justify-content-between">
        <BikeDetailTitle title="History / Background" />
        <OutlineButton
          rightIcon={<RiShareBoxFill />}
          title="Export Logs"
          className="theme1"
        />
      </div>
      <div className={styles.bikeHistoryCols}>
        <div className={styles.title}>This Week</div>
        <div className={styles.bikeHistoryList}>
          <span className={styles.arrowMark} />
          <div className={styles.bgBodyList}>
            <div className={styles.timeHead}>
              <div className={styles.time}>Thu, 19 Nov | 11:30AM</div>
              <div className={styles.historyTags}>
                <Tags title="Evaluation" bgColor="#B8382F" />
                <Tags title="SAMIL" bgColor="#E8B016" />
              </div>
            </div>
            <p>
              <strong>Evaluation completed by the SAMIL</strong>
            </p>
            <Link href="/">Check SAMIL detail</Link>
            <div className="d-flex align-items-center mt-2">
              <div className={styles.userInfo}>
                <FiClock />
              </div>
              <p className={styles.dangerText}>Scheduled activity</p>
            </div>
          </div>
        </div>

        <div className={styles.bikeHistoryList}>
          <span className={styles.arrowMark} />
          <div className={styles.bgBodyList}>
            <div className={styles.timeHead}>
              <div className={styles.time}>Thu, 19 Nov | 11:30AM</div>
              <div className={styles.historyTags}>
                <Tags title="CRE" bgColor="#2F6AB8" />
                <Tags title="Customer" bgColor="#2FB858" />
              </div>
            </div>
            <p>
              <strong>Accidental motorcycle</strong>
            </p>
            <Link href="/">Motorcycle chassis is cracked</Link>
            <div className="d-flex align-items-center mt-2">
              <div className={styles.userInfo}>
                <Image src="/images/profile-2.png" alt="not found" />
                <span>John d.</span>
              </div>
              <p className={styles.dangerText}>Manual entry</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bikeHistoryCols}>
        <div className={styles.title}>Last Week</div>
        <div className={styles.bikeHistoryList}>
          <span className={styles.arrowMark} />
          <div className={styles.bgBodyList}>
            <div className={styles.timeHead}>
              <div className={styles.time}>Thu, 19 Nov | 11:30AM</div>
              <div className={styles.historyTags}>
                <Tags title="Evaluation" bgColor="#B8382F" />
                <Tags title="SAMIL" bgColor="#E8B016" />
              </div>
            </div>
            <p>
              <strong>Evaluation completed by the SAMIL</strong>
            </p>
            <Link href="/">Check SAMIL detail</Link>
            <div className="d-flex align-items-center mt-2">
              <div className={styles.userInfo}>
                <FiClock />
              </div>
              <p className={styles.dangerText}>Manual entry</p>
            </div>
          </div>
        </div>

        <div className={styles.bikeHistoryList}>
          <span className={styles.arrowMark} />
          <div className={styles.bgBodyList}>
            <div className={styles.timeHead}>
              <div className={styles.time}>Thu, 19 Nov | 11:30AM</div>
              <div className={styles.historyTags}>
                <Tags title="CRE" bgColor="#2F6AB8" />
                <Tags title="Customer" bgColor="#2FB858" />
              </div>
            </div>
            <p>
              <strong>Accidental motorcycle</strong>
            </p>
            <Link href="/">Motorcycle chassis is cracked</Link>
            <div className="d-flex align-items-center mt-2">
              <div className={styles.userInfo}>
                <Image src="/images/profile-2.png" alt="not found" />
                <span>John d.</span>
              </div>
              <p className={styles.dangerText}>Supervisor action</p>
            </div>
          </div>
        </div>
      </div>

      <ManaualEntry />
    </div>
  );
}
