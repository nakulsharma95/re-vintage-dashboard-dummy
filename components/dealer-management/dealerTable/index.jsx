import React from 'react'
import Link from 'next/link';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

import style from './style.module.scss';

function dealerTable() {
  return (
	<div className={`${style.dealerTable}  dealerTable`}>
		<Table bordered variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Dealer Code</th>
          <th>Mobile No.</th>
          <th>Email</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Link href="/dealer-management/dealership-details">Neel Motors</Link></td>
          <td>H2N8XS94JU</td>
          <td>+91 98996 98654</td>
          <td>johndoe@gmail.com</td>
          <td>No F 29/2, Phase 2, Okhla <br/> Industrial Area, New Delhi -110020</td>
          <td><Form.Check className={style.tableCheckbox} type="checkbox" label="Enabled" checked /> </td>
        </tr>
        <tr>
          <td><Link href="/">Neel Motors</Link></td>
          <td>H2N8XS94JU</td>
          <td>+91 98996 98654</td>
          <td>johndoe@gmail.com</td>
          <td>No F 29/2, Phase 2, Okhla <br/> Industrial Area, New Delhi -110020</td>
          <td><Form.Check className={style.tableCheckbox} type="checkbox" label="Enabled" /> </td>
        </tr>
		<tr>
          <td><Link href="/dealer-management/dealership-details">Neel Motors</Link></td>
          <td>H2N8XS94JU</td>
          <td>+91 98996 98654</td>
          <td>johndoe@gmail.com</td>
          <td>No F 29/2, Phase 2, Okhla <br/> Industrial Area, New Delhi -110020</td>
          <td><Form.Check className={style.tableCheckbox} type="checkbox" label="Enabled" checked /> </td>
        </tr>
		<tr>
          <td><Link href="/dealer-management/dealership-details">Neel Motors</Link></td>
          <td>H2N8XS94JU</td>
          <td>+91 98996 98654</td>
          <td>johndoe@gmail.com</td>
          <td>No F 29/2, Phase 2, Okhla <br/> Industrial Area, New Delhi -110020</td>
          <td><Form.Check className={style.tableCheckbox} type="checkbox" label="Enabled" checked /> </td>
        </tr>
		<tr>
          <td><Link href="/">Neel Motors</Link></td>
          <td>H2N8XS94JU</td>
          <td>+91 98996 98654</td>
          <td>johndoe@gmail.com</td>
          <td>No F 29/2, Phase 2, Okhla <br/> Industrial Area, New Delhi -110020</td>
          <td><Form.Check className={style.tableCheckbox} type="checkbox" label="Enabled" /> </td>
        </tr>
		<tr>
          <td><Link href="/">Neel Motors</Link></td>
          <td>H2N8XS94JU</td>
          <td>+91 98996 98654</td>
          <td>johndoe@gmail.com</td>
          <td>No F 29/2, Phase 2, Okhla <br/> Industrial Area, New Delhi -110020</td>
          <td><Form.Check className={style.tableCheckbox} type="checkbox" label="Enabled" /> </td>
        </tr>
		<tr>
          <td><Link href="/dealer-management/dealership-details">Neel Motors</Link></td>
          <td>H2N8XS94JU</td>
          <td>+91 98996 98654</td>
          <td>johndoe@gmail.com</td>
          <td>No F 29/2, Phase 2, Okhla <br/> Industrial Area, New Delhi -110020</td>
          <td><Form.Check className={style.tableCheckbox} type="checkbox" label="Enabled" checked /> </td>
        </tr>
		<tr>
          <td><Link href="/dealer-management/dealership-details">Neel Motors</Link></td>
          <td>H2N8XS94JU</td>
          <td>+91 98996 98654</td>
          <td>johndoe@gmail.com</td>
          <td>No F 29/2, Phase 2, Okhla <br/> Industrial Area, New Delhi -110020</td>
          <td><Form.Check className={style.tableCheckbox} type="checkbox" label="Enabled" checked /> </td>
        </tr>
		<tr>
          <td><Link href="/">Neel Motors</Link></td>
          <td>H2N8XS94JU</td>
          <td>+91 98996 98654</td>
          <td>johndoe@gmail.com</td>
          <td>No F 29/2, Phase 2, Okhla <br/> Industrial Area, New Delhi -110020</td>
          <td><Form.Check className={style.tableCheckbox} type="checkbox" label="Enabled" /> </td>
        </tr>
      </tbody>
    </Table>
	</div>
  )
}

export default dealerTable