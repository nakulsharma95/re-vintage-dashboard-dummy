import styles from "./style.module.scss";
import { Form } from "react-bootstrap";
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function FileUploader() {
  return (
    <div className={styles.fileUploaderHead}>
      <Form.Group className={styles.uploadInput} controlId="formFile">
        <Form.Control className={styles.dragFile} type="file" />
        <div className="d-flex justify-content-center align-items-center">
          <div className={styles.uploaderIcon}>
            <AiOutlineCloudUpload className={styles.icon} size={22} />
          </div>

          <div>
            <span>Click to upload or drag and drop</span>
            <Form.Label>SVG, PNG, JPG or GIF (max. 800x400px)</Form.Label>
          </div>
        </div>
      </Form.Group>
    </div>
  );
}
