import { Button } from 'react-bootstrap';
import { BsChevronRight } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import styles from './style.module.scss';
import Tags from '../../common/tags';

export default function ManaualEntry() {
  return (
    <div className={styles.addManaulMain}>
      <div>Add manual entry here</div>
      <div className={styles.addManaulCols}>
        <div className="d-flex mb-2">
          <Tags title="Evaluation" bgColor="#B8382F" />
          <Tags title="CRE" bgColor="#2F6AB8" />
          <Tags title="SAMIL" bgColor="#E8B016" />
          <Tags title="Customer" bgColor="#2FB858" />
          <Tags title="Bidding" bgColor="#B8812F" />
          <Tags title="Negotiation" bgColor="#2FB8B3" />
        </div>
        <Form.Control type="text" placeholder="Primary Comment" />
        <Form.Control as="textarea" placeholder="Secondary Comment" rows={3} />
      </div>
      <div className={styles.submitBtn}>
        <Button variant="">
          Submit{' '}
          <span>
            <BsChevronRight />
          </span>
        </Button>
      </div>
    </div>
  );
}
