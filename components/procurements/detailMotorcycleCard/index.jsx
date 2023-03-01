import { Table } from 'react-bootstrap';
import { BiRupee } from 'react-icons/bi';
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
            <span className={`${styles.overdue} ms-2 mb-0`}>
              {props.status}
            </span>
          </h2>

          <h3 className={`${styles.vehicleDetailNumber} mb-3 mb-0`}>
            {props.bikeName}
            <span className={`${styles.vehicleNumber} ms-2`}>
              - {props.bikeNumber}
            </span>
            <span className={`${styles.vehicleId} ms-1`}>
              - {props.bikeCode}
            </span>
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
                  Owner
                  <p className={styles.ownerDescription}>{props.ownerNo}</p>
                </th>
                <th className={styles.ownerdetailHeadTable}>
                  KM<p className={styles.ownerDescription}>{props.kmDrive}</p>
                </th>
                <th className={styles.ownerdetailHeadTable}>
                  Mileage
                  <p className={styles.ownerDescription}>
                    {props.mileage} kmpl
                  </p>
                </th>
              </tr>
            </thead>

            <thead>
              <tr>
                <th className={styles.ownerdetailHeadTable}>
                  Colour
                  <p className={styles.ownerDescription}>{props.bikeColor}</p>
                </th>
                <th className={styles.ownerdetailHeadTable}>
                  Location
                  <p className={styles.ownerDescription}>{props.location}</p>
                </th>
                <th className={styles.ownerdetailHeadTable}>
                  Posting date
                  <p className={styles.ownerDescription}>{props.postingDate}</p>
                </th>
              </tr>
            </thead>
          </Table>

          <div className={styles.Estimatedprice}>
            <span>Estimated Price</span>
            <p className="mb-0">
              <BiRupee /> {props.priceOne} - <BiRupee /> {props.priceTwo}{' '}
            </p>
          </div>
        </div>
        <div className={styles.evaluation}>
          <h5 className="mb-3 text-white-50">Evaluation Details</h5>

          <div className="location eval mb-3">
            <p>Evaluation Location</p>
            <h5>{props.evaluationLocation}</h5>
          </div>
          <div className="owner-name eval mb-3">
            <p>Owner Details</p>
            <h5>{props.ownerDetails}</h5>
          </div>
          <div className="conct eval mb-3">
            <p>Contact No.</p>
            <h5>{props.ownerContact}</h5>
          </div>
          <div className="date-&-time eval mb-3">
            <p>Evaluation Date & time</p>
            <h5>{props.evaluationDateTime}</h5>
          </div>
        </div>
      </div>

      <DetailDropCard />
    </div>
  );
}
