import React from 'react';
import { Table } from 'react-bootstrap';
import styles from "./style.module.scss";

function DemandPrimaryTable() {
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
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
}

export default DemandPrimaryTable;
