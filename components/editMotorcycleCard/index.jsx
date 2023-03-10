import React from 'react';
import Image from 'next/image';
import { FiEdit3 } from 'react-icons/fi';
import styles from './style.module.scss';

export default function EditMotorcycleCard(props) {
  return (
    <div className={styles.EditDetailsCard}>
      <div className={styles.editBikeImg}>
        <Image src={props.imageUrl} width="200" height="200" alt="not found" />
        <FiEdit3 className={styles.editIcon} size={30} />
      </div>

      {/* <div className={styles.uploadBox} xxl={2} xl={3} lg={4} md={6}>
            <div className={styles.uploadIcon}>
              <div className={styles.uploadAlign}>
                <FiUpload size={30} />
              </div>
              <span>Upload more</span>
            </div>
          </div> */}
    </div>
  );
}
