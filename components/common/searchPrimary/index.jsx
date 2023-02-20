import Form from 'react-bootstrap/Form';
import { FaSearch } from 'react-icons/fa';
import styles from './style.module.scss';

function SearchPrimary() {
  return (
    <div className={styles.searchPrimary}>
      <Form.Group className={`${styles.formGroup}`}>
        <Form.Control
          type="text"
          placeholder="Search Name, Location, Reference ID"
        />
        <FaSearch className={styles.inputSearch} size={15} />
      </Form.Group>
    </div>
  );
}

export default SearchPrimary;
