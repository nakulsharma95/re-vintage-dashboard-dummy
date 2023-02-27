import React from "react";
import Modal from 'react-bootstrap/Modal';
import BikeHistory from "../../../components/biddingPortal/bikeHistory";
import styles from "./style.module.scss";

function PartialLeadsDetail(props) {
	return (
		<Modal
			className="leadsModalMain"
			show={props.isOpen}
			onHide={props.handleClose}
		>
			<Modal.Body className={styles.leadsModalBody}>
				<BikeHistory />
			</Modal.Body>
		</Modal>
	);
}

export default PartialLeadsDetail;
