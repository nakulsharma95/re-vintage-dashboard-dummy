import { Table } from 'react-bootstrap';
import styles from './style.module.scss';
import DetailDropCard from '../detailDropCard';

export default function DetailMotorcycleCard(props) {
  return (
    <div className={styles.vehicleCardContainer}>
      <div className={styles.vehicleCard}>
        <div className={styles.vehicleDetail}>
          <h2 className={`${styles.vehicleDetailStatus} mb-3 mb-0`}>
            Motorcycle details
            <span className={`${styles.status} ms-4 mb-0`}>Status:</span>
            <span className={`${styles.overdue} ms-2 mb-0`}>{props.status}</span>
          </h2>

          <h3 className={`${styles.vehicleDetailNumber} mb-3 mb-0`}>
            {props.bikeName}
            <span className={`${styles.vehicleNumber} ms-2`}>
              - {props.bikeNumber}
            </span>
            <span className={`${styles.vehicleId} ms-1`}>- {props.bikeCode}</span>
          </h3>

          <h4 className={`${styles.vehicleRideDetails} mb-3 mb-0`}>
            <span className={`${styles.vehicleKm} ${styles.DividerRight}`}>
              {props.kmDrive} km
            </span>
            <span className={`${styles.vehicleOwner} ${styles.DividerRight}`}>
              {props.owner}
            </span>
            <span className={`${styles.vehicleCc}`}>{props.bikeCC} CC</span>
          </h4>

          <Table className={`${styles.ownerBikeDetail}`} responsive="sm">
            <thead>
              <tr>
                <th className={styles.ownerdetailHeadTable}>
                  Owner<p className={styles.ownerDescription}>2nd</p>
                </th>
                <th className={styles.ownerdetailHeadTable}>
                  KM<p className={styles.ownerDescription}>35150</p>
                </th>
                <th className={styles.ownerdetailHeadTable}>
                  Mileage
                  <p className={styles.ownerDescription}>43.6 kmpl</p>
                </th>
              </tr>
            </thead>

            <thead>
              <tr>
                <th className={styles.ownerdetailHeadTable}>
                  Colour
                  <p className={styles.ownerDescription}>Red, Chrome</p>
                </th>
                <th className={styles.ownerdetailHeadTable}>
                  Location
                  <p className={styles.ownerDescription}>Delhi</p>
                </th>
                <th className={styles.ownerdetailHeadTable}>
                  Posting date
                  <p className={styles.ownerDescription}>25/08/2022</p>
                </th>
              </tr>
            </thead>
          </Table>

          <div className={styles.Estimatedprice}>
            <span>Estimated Price</span>
            <p className="mb-0">₹ 1,19,300 - ₹ 1,26,600 </p>
          </div>
        </div>
        <div className={styles.evaluation}>
          <h5 className="mb-3 text-white-50">Evaluation Details</h5>

          <div className="location eval mb-3">
            <p>Evaluation Location</p>
            <h5>Neel Motors, Lajpat Nagar, Delhi</h5>
          </div>
          <div className="owner-name eval mb-3">
            <p>Owner Details</p>
            <h5>Rishab Sharma</h5>
          </div>
          <div className="conct eval mb-3">
            <p>Contact No.</p>
            <h5>+91 98765 43219</h5>
          </div>
          <div className="date-&-time eval mb-3">
            <p>Contact No.</p>
            <h5>Thu, 19 Nov at 08:30 AM</h5>
          </div>
        </div>
      </div>

      <DetailDropCard />
    </div>
  );
}
