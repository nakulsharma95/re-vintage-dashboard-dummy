import React, { useState } from 'react';
import { BiDownload } from 'react-icons/bi';
import { RiShareBoxFill } from 'react-icons/ri';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DemandPrimaryTable from '../../../components/demand/demandPrimaryTable';
import HeaderPrimary from '../../../components/common/headerPrimary';
import OutlineDropdown from '../../../components/common/buttons/OutlineDropdown';
import styles from './style.module.scss';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import PreviewModal from '../../../components/modals/previewModal';

function RequirementRequest() {
  const [previewViaModal, setpreviewViaModal] = useState(false);

  const previewViaToggleModal = () => {
    setpreviewViaModal(!previewViaModal);
  };
  return (
    <>
      <Breadcrumb title="Demand" />
      <HeaderPrimary headerClass="mb-2" title="Requirement Request">
        <OutlineDropdown dropdownTitle="This week" options={['Week 1']} />
        <OutlineDropdown dropdownTitle="City" options={['Mumbai']} />
      </HeaderPrimary>
      <div className={styles.reqRequestMain}>
        <div className={styles.smTitle}>12 Result Found</div>
        <DemandPrimaryTable
          isAction
          isActionTd
          previewHandler={previewViaToggleModal}
        />
      </div>
      <div className="d-flex mt-4">
        <div className="me-3">
          <OutlineButton title="Export Data" leftIcon={<RiShareBoxFill />} />
        </div>
        <OutlineButton title="Import EXCEL" leftIcon={<BiDownload />} />
      </div>
      <PreviewModal
        isPreviewModal
        title="Preview Link"
        isOpen={previewViaModal}
        handleClose={previewViaToggleModal}
      />
    </>
  );
}

export default RequirementRequest;
