/* eslint-disable @next/next/no-img-element */
import { Button, Modal } from 'react-bootstrap';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import { IoMdClose } from 'react-icons/io';
import { FiCopy } from 'react-icons/fi';
import { BiDownload } from 'react-icons/bi';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import OutlineButton from '../../common/buttons/OutlineButton';
import FileUploader from '../../common/fileUploader';
import styles from './style.module.scss';

function PreviewModal(props) {
  return (
    <Modal
      show={props.isOpen}
      onHide={props.handleClose}
      centered
      className="previewViaModal"
      backdropClassName="blur-primary"
    >
      <div className={styles.previewModalBody}>
        <div className={styles.headerStyle}>
          <div className={styles.title}>{props.title}</div>
          <button
            type="button"
            onClick={props.handleClose}
            className={`${styles.previewModalCloseBtn}`}
          >
            <IoMdClose color="white" size={40} />
          </button>
        </div>
        {props.isPreviewModal && (
          <div className={styles.previewCols}>
            <Form.Control
              type="text"
              defaultValue="https://royalenfield.com/vintage/FHJN2r2nw2"
            />
            <Link href="/">
              <FiCopy />
            </Link>
            <div className={styles.sbBtn}>
              <Button variant="">
                Submit <MdOutlineArrowForwardIos />
              </Button>
            </div>
          </div>
        )}

        {props.isAddBikeModal && (
          <div className={styles.addBikeMain}>
            <Form>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Motorcycle Name</Form.Label>
                <Form.Control type="text" placeholder="Motorcycle Name" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Upload Picture</Form.Label>
                <FileUploader />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Download Layout</Form.Label>
                <OutlineButton
                  title="Download Layout"
                  leftIcon={<BiDownload />}
                />
              </Form.Group>
              <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label>Upload Excel</Form.Label>
                <FileUploader />
              </Form.Group>
              <div className={styles.sbBtn}>
                <Button variant="">
                  Submit <MdOutlineArrowForwardIos />
                </Button>
              </div>
            </Form>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default PreviewModal;
