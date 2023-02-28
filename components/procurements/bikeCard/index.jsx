import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import bikeCardStyle from "./style.module.scss";
import { BiRupee } from "react-icons/bi";
import Link from "next/link";
import ButtonPrimary from "../../../components/common/buttons/ButtonPrimary";

function BikeCard(props) {
  const { data } = props;
  return (
    <>
      <Card className={bikeCardStyle.bikeCardMain}>
        <Card.Img variant="top" src={props.imageUrl} />
        {props.isEvalTag && (
          <div>
            {data.evalTag && (
              <div className={`${bikeCardStyle.bikeCardTag}`}>
                {data?.evalTag}
              </div>
            )}
          </div>
        )}
        <Card.Body className="px-0">
          <Card.Title className={bikeCardStyle.bkeName}>
            {props.bikeModal}
            <span> {props.bikeRc}</span>
          </Card.Title>

          {props.isKmData && (
            <Row className={`${bikeCardStyle.bikeDetail} mx-0 ${props.className}`}>
              <Col className={bikeCardStyle.detailTxt}>{props.bikekm} km</Col>
              <Col className={bikeCardStyle.detailTxt}>{props.bikeOwner} Owner</Col>
              <Col className={bikeCardStyle.detailTxt}>{props.bikeCc} CC</Col>
            </Row>
          )}

          {props.isPriceData && (
            <div className={`${bikeCardStyle.bikePrice} ${props.className}`}>
              <h5 className={bikeCardStyle.priceTitle}>{props.priceTitle}</h5>
              <h4 className={bikeCardStyle.price}>
                <BiRupee size={21} />
                {props.bikekm}
              </h4>
            </div>
          )}
          {props.isestimatedPrice && (
            <div className={bikeCardStyle.estimatedPrice}>
              <h5 className={bikeCardStyle.pricetitle}>{props.smPriceTitle}</h5>
              <div className={bikeCardStyle.estPrice}>
                <BiRupee size={21} /> {props.price} - <BiRupee size={21} /> {props.priceTwo}
              </div>
            </div>
          )}
          <div className="d-flex align-items-center mx-3">
          <h4 className={bikeCardStyle.source}>{props.source}</h4>
            <h5 className={bikeCardStyle.priceTitle}>{props.sourceTitle}</h5>
           
          </div>
          {props.isEstBtn && (
            <div className={bikeCardStyle.smailBtn}>
              <Link href="/">CONTACT SAMIL</Link>
            </div>
          )}
          {props.isViewBtn && (
            <div className={bikeCardStyle.cardBtnCols}>
              <ButtonPrimary title="VIEW DETAIL" />
            </div>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default BikeCard;
