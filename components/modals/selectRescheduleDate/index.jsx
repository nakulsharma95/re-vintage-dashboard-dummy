import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { IoMdClose } from 'react-icons/io';
import styles from './style.module.scss';

const SelectRescheduleDate = (props) => {
	return (
	  <Modal
		show={props.isOpen}
		onHide={props.handleClose}
		centered
		className={`${styles.cancelModal} modal-style1`}
		backdropClassName="blur-primary"
	  >
		<div className={styles.cancelModalBody}>
		  <button
			type="button"
			onClick={props.handleClose}
			className={`${styles.cancelModalCloseBtn}`}
		  >
			<IoMdClose color="white" size={40} />
		  </button>
  
		</div>
	  </Modal>
	);
  }
  
  export default SelectRescheduleDate;