import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./style.module.scss";
import { BsArrowLeftShort } from "react-icons/bs";

export default function CustomButton() {
  return (
    <div className={styles.customButtonContainer}>
      <button class={styles.detailCustomBtn}>
        Previous
        <BsArrowLeftShort />
      </button>
    </div>
  );
}
