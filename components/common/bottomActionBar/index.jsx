import { AiOutlineSearch } from 'react-icons/ai';
import { BsFilter } from 'react-icons/bs';
import styles from './style.module.scss';

function BottomActionBar(props) {
  return (
    <div className={styles.filterBar}>
      <button type="button" onClick={props.searchHandler}>
        Search <AiOutlineSearch />
      </button>
      <button type="button" onClick={props.filterHandler}>
        Filter <BsFilter />
      </button>
    </div>
  );
}

export default BottomActionBar;
