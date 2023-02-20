import React from 'react';
import { RiShareBoxFill } from 'react-icons/ri';
import { BiDownload } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import AddPrimaryTable from '../../../components/priceCalculator/addMotorCycle/addPrimaryTable';
import HeaderPrimary from '../../../components/common/headerPrimary';
import styles from './style.module.scss';

export default function AddMotorCycle() {
  return (
    <div>
      <Breadcrumb title="Instant Estimator Configurator" />
      <HeaderPrimary
        headerClass="mb-2"
        lastEdited
        editedTitle="Last edited by"
        editedName="Rohan Joshi"
        title="Instant Estimator Configurator"
        subTitle="Here you will find the Contact details of CRE for active Motorcycle and General Info"
      >
        <OutlineButton leftIcon={<RiShareBoxFill />} title="Export Data" />
        <OutlineButton leftIcon={<BiDownload />} title="Import EXCEL" />
      </HeaderPrimary>
      <div className="mt-4">
        <AddPrimaryTable />
        <Button variant="" className={styles.addRowBtn}>
          Add Row <BsPlusLg />
        </Button>
      </div>
    </div>
  );
}
