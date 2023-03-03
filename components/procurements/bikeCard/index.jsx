import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { BiRupee } from 'react-icons/bi';
import styles from './style.module.scss';
import ArrowButton from '~/components/common/buttons/ArrowButton';

function BikeCard(props) {
  const { data } = props;
  return (
    <Card className={`${styles.bikeCardMain} mb-4`}>
      <Card.Img variant="top" src={props.imageUrl} />
      {props.isEvalTag && (
        <div>
          {data.evalTag && (
            <div className={`${styles.bikeCardTag}`}>{data?.evalTag}</div>
          )}
        </div>
      )}
      <Card.Body className="px-0">
        <Card.Title className={styles.bkeName}>
          {props.bikeModal}
          <span> {props.bikeRc}</span>
        </Card.Title>

        {props.isKmData && (
          <Row className={`${styles.bikeDetail} mx-0 ${props.className}`}>
            <Col className={styles.detailTxt}>
              <div className={styles.iconXsView}>
                <Image src="/images/icons/road.svg" alt="not found" />
              </div>
              {props.bikekm} km
            </Col>
            <Col className={styles.detailTxt}>
              <div className={styles.iconXsView}>
                <Image src="/images/icons/user.svg" alt="not found" />
              </div>
              {props.bikeOwner} Owner
            </Col>
            <Col className={styles.detailTxt}>
              <div className={styles.iconXsView}>
                <Image src="/images/icons/engine.svg" alt="not found" />
              </div>
              {props.bikeCc} CC
            </Col>
          </Row>
        )}

        {props.isPriceData && (
          <div className={`${styles.bikePrice} ${props.className}`}>
            <h5 className={styles.priceTitle}>{props.priceTitle}</h5>
            <h4 className={styles.price}>
              <BiRupee size={21} />
              {props.bikekm}
            </h4>
          </div>
        )}
        {props.isestimatedPrice && (
          <div className={styles.estimatedPrice}>
            <h5 className={styles.pricetitle}>{props.smPriceTitle}</h5>
            <div className={styles.estPrice}>
              <BiRupee size={21} /> {props.price} - <BiRupee size={21} />
              {props.priceTwo}
            </div>
          </div>
        )}
        <div className="d-flex align-items-center mx-3">
          <h4 className={styles.source}>{props.source}</h4>
          <h5 className={styles.priceTitle}>{props.sourceTitle}</h5>
        </div>
        {props.isEstBtn && (
          <div className={styles.smailBtn}>
            <ArrowButton title="CONTACT SAMIL" />
          </div>
        )}
        {props.isViewBtn && (
          <div className={styles.cardBtnCols}>
            <ArrowButton title="VIEW DETAIL" />
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default BikeCard;
