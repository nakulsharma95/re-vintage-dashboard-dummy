import React from 'react';
import { RiShareBoxFill } from 'react-icons/ri';
import { BiDownload } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import OutlineButton from '~/components/common/buttons/OutlineButton';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import Filters from '../../../components/common/filters';
import AddPrimaryTable from '../../../components/priceCalculator/addMotorCycle/addPrimaryTable';
import styles from './style.module.scss';

export default function AddMotorCycle() {
  return (
    <div>
      <Breadcrumb title="Instant Estimator Configurator" />
      <div className="d-md-flex align-items-center justify-content-between">
        <Filters
          lastEdited
          editedTitle="Last edited by"
          editedName="Rohan Joshi"
          title="Instant Estimator Configurator"
          subTitle="Here you will find the Contact details of CRE for active Motorcycle and General Info"
        />
        <div className="d-flex">
          <div className="me-3">
            <OutlineButton leftIcon={<RiShareBoxFill />} title="Export Data" />
          </div>
          <OutlineButton leftIcon={<BiDownload />} title="Import EXCEL" />
        </div>
      </div>
      <div className="mt-4">
        <AddPrimaryTable />
        <Button variant="" className={styles.addRowBtn}>
          Add Row <BsPlusLg />
        </Button>
      </div>
    </div>
  );
}
