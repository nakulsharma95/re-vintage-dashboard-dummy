import Form from 'react-bootstrap/Form';
import { FaSearch } from 'react-icons/fa';
import styles from './style.module.scss';

function SearchPrimary(props) {
  return (
    <div className={styles.searchPrimary}>
      <Form.Group className={`${styles.formGroup}`}>
        <Form.Control
          type="text"
          placeholder={props.placeholder}
        />
        <FaSearch className={styles.inputSearch} size={15} />
      </Form.Group>
    </div>
  );
}

export default SearchPrimary;
