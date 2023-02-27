import React from "react";
import { FormCheck, Image, Table } from "react-bootstrap";
import CustomCheckBox from "../../../components/common/customCheckBox";
import { BiRupee } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';
import styles from "./style.module.scss";
import Link from "next/link";

export default function TableListView() {
	return (
		<Table responsive className={styles.listViewTable}>
			<thead>
				<tr>
					<th></th>
					<th>Thumbnail</th>
					<th>Model</th>
					<th>Reg No.</th>
					<th>Selling Price</th>
					<th>Dealer Details</th>
					<th>CRE Details</th>
					<th>OLX Status</th>
					<th>Active Status</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<CustomCheckBox />
					</td>
					<td>
						<div className={styles.listImg}>
							<Image src="/images/bikeImage.png" alt="" />
						</div>
					</td>
					<td>
						<span className={styles.modelYear}>2015</span>
						Classic 350
					</td>
					<td>
						<div className={styles.regNo}>DL6TAL7314</div>
					</td>
					<td><BiRupee /> 1,25,000</td>
					<td>
						<Link href="/">Neel Motors, Lajpat Nagar, Delhi</Link>
						<span className={styles.dealerCode}>(C2N0RJ20FC2N)</span>
					</td>
					<td>
						<div className={styles.listContact}><FiUser /> John Watson</div>
						<div className={styles.listContact}><BsTelephone /> +919876543210</div>
					</td>
					<td>
						<div className={styles.statusRadio}>
							<FormCheck
								className={styles.sliderRound}
								id="switchInactive"
								type="switch"
								label="Inactive"
							/>
						</div>
					</td>
					<td>
						<div className={styles.statusRadio}>
							<FormCheck
								className={styles.sliderRound}
								id="switchActive"
								type="switch"
								label="Active"
							/>
						</div>
					</td>
					<td>
						<Link href="/" className={styles.viewLink}>View</Link>
					</td>
				</tr>
				
				<tr>
					<td>
						<CustomCheckBox />
					</td>
					<td>
						<div className={styles.listImg}>
							<Image src="/images/bikeImage.png" alt="" />
						</div>
					</td>
					<td>
						<span className={styles.modelYear}>2015</span>
						Classic 350
					</td>
					<td>
						<div className={styles.regNo}>DL6TAL7314</div>
					</td>
					<td><BiRupee /> 1,25,000</td>
					<td>
						<Link href="/">Neel Motors, Lajpat Nagar, Delhi</Link>
						<span className={styles.dealerCode}>(C2N0RJ20FC2N)</span>
					</td>
					<td>
						<div className={styles.listContact}><FiUser /> John Watson</div>
						<div className={styles.listContact}><BsTelephone /> +919876543210</div>
					</td>
					<td>
						<div className={styles.statusRadio}>
							<FormCheck
								className={styles.sliderRound}
								id="switchInactive"
								type="switch"
								label="Inactive"
							/>
						</div>
					</td>
					<td>
						<div className={styles.statusRadio}>
							<FormCheck
								className={styles.sliderRound}
								id="switchActive"
								type="switch"
								label="Active"
							/>
						</div>
					</td>
					<td>
						<Link href="/" className={styles.viewLink}>View</Link>
					</td>
				</tr>
				
			</tbody>
		</Table>
	);
}
