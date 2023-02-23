import React from "react";
import { Card, Badge } from "react-bootstrap";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import styles from "./style.module.scss";

function NotificationCard({
  heading,
  subHeading,
  days,
  badgeSpan,
  isBadgeVisible,
  isCheckIconVisible,
  isCloseIconVisible,
}) {
  return (
    <Card className={styles.NotificationCard}>
      <Card.Body className={styles.NotificationBody}>
        <div className={styles.NotificationData}>
          <div>
            <h2>{heading}</h2>
            <div className="d-flex align-items-center">
              {isCheckIconVisible && (
                <AiOutlineCheck className={styles.IconTick} size={15} />
              )}
              {isCloseIconVisible && (
                <AiOutlineClose className={styles.IconClose} size={15} />
              )}
              <h3>{subHeading}</h3>
            </div>
            <span>{days}</span>
          </div>
          <h5>
            {isBadgeVisible && (
              <Badge className={styles.notificationBage}>{badgeSpan}</Badge>
            )}
          </h5>
        </div>
      </Card.Body>
    </Card>
  );
}

export default NotificationCard;
