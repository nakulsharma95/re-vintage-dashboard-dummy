import React, { useState } from 'react';
import Link from 'next/link';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import CancelModal from '../../modals/cancelModal';

import style from './style.module.scss';

function DealerTable() {
  const [cancelModal, setCancelModal] = useState(false);
  const [rescheduleModal, setRescheduleModal] = useState(false);

  const cancelToggleModal = () => {
    setCancelModal(!cancelModal);
  };
  const rescheduleToggleModal = () => {
    setRescheduleModal(!rescheduleModal);
    setCancelModal(false);
  };
  return (
    <div className={`${style.dealerTable}  dealerTable`}>
      <Table bordered responsive variant="dark">
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
            <td>
              <div className="d-flex">
                <div className="status-circle success mt-2" />
                <Link href="/dealer-management/dealership-details">
                  Neel Motors
                </Link>
              </div>
            </td>
            <td>H2N8XS94JU</td>
            <td>+91 98996 98654</td>
            <td>johndoe@gmail.com</td>
            <td>
              No F 29/2, Phase 2, Okhla <br /> Industrial Area, New Delhi
              -110020
            </td>
            <td>
              <Form.Check
                className={style.tableCheckbox}
                type="checkbox"
                label="Enabled"
                onClick={cancelToggleModal}
                checked
              />
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex">
                <div className="status-circle danger mt-2" />
                <Link href="/">Neel Motors</Link>
              </div>
            </td>
            <td>H2N8XS94JU</td>
            <td>+91 98996 98654</td>
            <td>johndoe@gmail.com</td>
            <td>
              No F 29/2, Phase 2, Okhla <br /> Industrial Area, New Delhi
              -110020
            </td>
            <td>
              <Form.Check
                className={style.tableCheckbox}
                type="checkbox"
                label="Enabled"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex">
                <div className="status-circle danger mt-2" />
                <Link href="/">Neel Motors</Link>
              </div>
            </td>
            <td>H2N8XS94JU</td>
            <td>+91 98996 98654</td>
            <td>johndoe@gmail.com</td>
            <td>
              No F 29/2, Phase 2, Okhla <br /> Industrial Area, New Delhi
              -110020
            </td>
            <td>
              <Form.Check
                className={style.tableCheckbox}
                type="checkbox"
                label="Enabled"
              />{' '}
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex">
                <div className="status-circle success mt-2" />
                <Link href="/dealer-management/dealership-details">
                  Neel Motors
                </Link>
              </div>
            </td>
            <td>H2N8XS94JU</td>
            <td>+91 98996 98654</td>
            <td>johndoe@gmail.com</td>
            <td>
              No F 29/2, Phase 2, Okhla <br /> Industrial Area, New Delhi
              -110020
            </td>
            <td>
              <Form.Check
                className={style.tableCheckbox}
                type="checkbox"
                label="Enabled"
                onClick={cancelToggleModal}
                checked
              />
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex">
                <div className="status-circle success mt-2" />
                <Link href="/dealer-management/dealership-details">
                  Neel Motors
                </Link>
              </div>
            </td>
            <td>H2N8XS94JU</td>
            <td>+91 98996 98654</td>
            <td>johndoe@gmail.com</td>
            <td>
              No F 29/2, Phase 2, Okhla <br /> Industrial Area, New Delhi
              -110020
            </td>
            <td>
              <Form.Check
                className={style.tableCheckbox}
                type="checkbox"
                label="Enabled"
                checked
                onClick={cancelToggleModal}
              />
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex">
                <div className="status-circle danger mt-2" />
                <Link href="/">Neel Motors</Link>
              </div>
            </td>
            <td>H2N8XS94JU</td>
            <td>+91 98996 98654</td>
            <td>johndoe@gmail.com</td>
            <td>
              No F 29/2, Phase 2, Okhla <br /> Industrial Area, New Delhi
              -110020
            </td>
            <td>
              <Form.Check
                className={style.tableCheckbox}
                type="checkbox"
                label="Enabled"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex">
                <div className="status-circle danger mt-2" />
                <Link href="/">Neel Motors</Link>
              </div>
            </td>
            <td>H2N8XS94JU</td>
            <td>+91 98996 98654</td>
            <td>johndoe@gmail.com</td>
            <td>
              No F 29/2, Phase 2, Okhla <br /> Industrial Area, New Delhi
              -110020
            </td>
            <td>
              <Form.Check
                className={style.tableCheckbox}
                type="checkbox"
                label="Enabled"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex">
                <div className="status-circle success mt-2" />
                <Link href="/dealer-management/dealership-details">
                  Neel Motors
                </Link>
              </div>
            </td>
            <td>H2N8XS94JU</td>
            <td>+91 98996 98654</td>
            <td>johndoe@gmail.com</td>
            <td>
              No F 29/2, Phase 2, Okhla <br /> Industrial Area, New Delhi
              -110020
            </td>
            <td>
              <Form.Check
                className={style.tableCheckbox}
                type="checkbox"
                label="Enabled"
                checked
                onClick={cancelToggleModal}
              />
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex">
                <div className="status-circle success mt-2" />
                <Link href="/dealer-management/dealership-details">
                  Neel Motors
                </Link>
              </div>
            </td>
            <td>H2N8XS94JU</td>
            <td>+91 98996 98654</td>
            <td>johndoe@gmail.com</td>
            <td>
              No F 29/2, Phase 2, Okhla <br /> Industrial Area, New Delhi
              -110020
            </td>
            <td>
              <Form.Check
                className={style.tableCheckbox}
                type="checkbox"
                label="Enabled"
                onClick={cancelToggleModal}
                checked
              />{' '}
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex">
                <div className="status-circle danger mt-2" />
                <Link href="/">Neel Motors</Link>
              </div>
            </td>
            <td>H2N8XS94JU</td>
            <td>+91 98996 98654</td>
            <td>johndoe@gmail.com</td>
            <td>
              No F 29/2, Phase 2, Okhla <br /> Industrial Area, New Delhi
              -110020
            </td>
            <td>
              <Form.Check
                className={style.tableCheckbox}
                type="checkbox"
                label="Enabled"
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <CancelModal
        isOpen={cancelModal}
        handleClose={cancelToggleModal}
        icon={<AiOutlineInfoCircle size={48} color="#DA291C" />}
        handleYes={rescheduleToggleModal}
      >
        <h4 className={style.cancelModalTitle}>
          Are you sure you want to disable the dealer from the
          <span className="font-weight-bold"> Portal</span> ?
        </h4>
      </CancelModal>
    </div>
  );
}

export default DealerTable;
