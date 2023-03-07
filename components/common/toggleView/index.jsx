import { Button } from 'react-bootstrap';
import { BiGridAlt, BiListUl } from 'react-icons/bi';
import styles from './style.module.scss';

function ToggleView(props) {
  return (
    <div className={styles.sortTabBtnBox}>
      <Button
        variant="primary"
        className={styles.viewTabBtn}
        onClick={props.gridHandler}
      >
        <BiGridAlt />
      </Button>
      <Button
        variant="primary"
        className={styles.viewTabBtn}
        onClick={props.listHandler}
      >
        <BiListUl size={25} />
      </Button>
    </div>
  );
}

export default ToggleView;
