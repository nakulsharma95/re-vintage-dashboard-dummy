import React from 'react';
import styles from './style.module.scss';
import Table from 'react-bootstrap/Table';
import { BsPencil } from 'react-icons/bs';
import Link from 'next/link';

export default function AddPrimaryTable() {
  return (
	<Table bordered hover className={styles.addPrimaryTable}>
		<thead>
			<tr>
				<th></th>
				<th>Ageing</th>
				<th>Model</th>
				<th>Engine CC</th>
				<th>Year</th>
				<th>Combination ID</th>
				<th>Ex Showroom Price</th>
				<th>Standard Dep</th>
				<th>Secondary Dep</th>
				<th>Total Dep</th>
				<th>Resale Value %</th>
				<th>Base Mileage</th>
				<th>MPCF</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>01</td>
				<td>1 Yr</td>
				<td>Meteor Supernova</td>
				<td>350</td>
				<td>2022</td>
				<td>Classic J 2022350</td>
				<td>210,000</td>
				<td>10%</td>
				<td>8%</td>
				<td>18%</td>
				<td>82%</td>
				<td>4,000</td>
				<td>100</td>
				<td>
					<Link href="/price-calculator/evalute" className={styles.editLink}>Edit <BsPencil /></Link>
				</td>
			</tr>

			<tr>
				<td>02</td>
				<td>1 Yr</td>
				<td>Meteor Supernova</td>
				<td>350</td>
				<td>2022</td>
				<td>Classic J 2022350</td>
				<td>210,000</td>
				<td>10%</td>
				<td>8%</td>
				<td>18%</td>
				<td>82%</td>
				<td>4,000</td>
				<td>100</td>
				<td>
					<Link href="/price-calculator/evalute" className={styles.editLink}>Edit <BsPencil /></Link>
				</td>
			</tr>

			<tr>
				<td>03</td>
				<td>1 Yr</td>
				<td>Meteor Supernova</td>
				<td>350</td>
				<td>2022</td>
				<td>Classic J 2022350</td>
				<td>210,000</td>
				<td>10%</td>
				<td>8%</td>
				<td>18%</td>
				<td>82%</td>
				<td>4,000</td>
				<td>100</td>
				<td>
					<Link href="/price-calculator/evalute" className={styles.editLink}>Edit <BsPencil /></Link>
				</td>
			</tr>

		</tbody>
	</Table>
  );
}
