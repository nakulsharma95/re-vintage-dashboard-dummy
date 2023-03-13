import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './style.module.scss';

export default function AddDescription() {
  return (
    <Card className={styles.descriptionCard}>
      <div className={styles.descriptionCardBody}>
        <h2>Add Description</h2>
        <div className={styles.descriptionBody}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </Card>
  );
}
