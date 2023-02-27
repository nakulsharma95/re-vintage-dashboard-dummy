import React from 'react';
import { Button, Table } from 'react-bootstrap';
import styles from "./style.module.scss";
import Dropdown from 'react-bootstrap/Dropdown';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiFlag } from 'react-icons/fi';
import { MdOutlineClose } from 'react-icons/md';


function DemandPrimaryTable(props) {
	const demandData = [
		{
			sno: '01',
			name: 'John Doe',
			contact: '+91 9899698654',
			email: 'johndoe@gmail.com',
			city: 'Delhi',
			bikeName: 'Himalayan 350',
		},
		{
			sno: '02',
			name: 'John Doe',
			contact: '+91 9899698654',
			email: 'johndoe@gmail.com',
			city: 'Delhi',
			bikeName: 'Himalayan 350',
		},
		{
			sno: '03',
			name: 'John Doe',
			contact: '+91 9899698654',
			email: 'johndoe@gmail.com',
			city: 'Delhi',
			bikeName: 'Himalayan 350',
		},
		{
			sno: '04',
			name: 'John Doe',
			contact: '+91 9899698654',
			email: 'johndoe@gmail.com',
			city: 'Delhi',
			bikeName: 'Himalayan 350',
		},
		{
			sno: '05',
			name: 'John Doe',
			contact: '+91 9899698654',
			email: 'johndoe@gmail.com',
			city: 'Delhi',
			bikeName: 'Himalayan 350',
		},
	];
	return (
		<>
			<Table bordered className={styles.demandTableMain}>
				<thead>
					<tr>
						<th>S. No.</th>
						<th>Name</th>
						<th>Mobile No.</th>
						<th>Email</th>
						<th>State</th>
						<th>Request model</th>
						{props.isAction && (
							<th>Action</th>
						)}
					</tr>
				</thead>
				<tbody>
					{demandData.map((item) => (
						<tr>
							<td>{item.sno}</td>
							<td>{item.name}</td>
							<td>{item.contact}</td>
							<td>{item.email}</td>
							<td>{item.city}</td>
							<td>{item.bikeName}</td>
							{props.isActionTd && (
								<td>
									<div className={styles.actionTd}>
										<Button variant="" className={styles.flagBtn}><FiFlag /></Button>
										<Dropdown>
											<Dropdown.Toggle variant="" id="dropdown-basic" className={styles.dropdownToggle}>
												<BsThreeDotsVertical />
											</Dropdown.Toggle>

											<Dropdown.Menu className={styles.dropdownMenu}>
												<span className={styles.closeDropdown}><MdOutlineClose /></span>
												<Dropdown.Item href="#">Send to Customer</Dropdown.Item>
												<Dropdown.Item href="#">Preview Link</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</div>
								</td>
							)}
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
}

export default DemandPrimaryTable;
