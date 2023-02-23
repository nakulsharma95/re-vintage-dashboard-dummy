import React from "react";
import Button from "react-bootstrap/Button";
import { Card, Col, Row } from "react-bootstrap";
import bikeCardStyle from "./style.module.scss";
import { BiRupee } from "react-icons/bi";
import Link from "next/link";

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
            <div className={bikeCardStyle.bikePrice}>
              <h5 className={bikeCardStyle.priceTitle}>{props.priceTitle}</h5>
              <h4 className={bikeCardStyle.price}>
                <BiRupee size={21} />
                {props.bikekm}
              </h4>
            </div>
          )}
          {props.isestimatedPrice && (
            <div className={bikeCardStyle.estimatedPrice}>
              <h5 className={bikeCardStyle.priceTitle}>{props.smPriceTitle}</h5>
              <div className={bikeCardStyle.estPrice}>
                <BiRupee size={21} /> {props.price} - <BiRupee size={21} /> {props.priceTwo}
              </div>
            </div>
          )}
          <div className="d-flex align-items-center">
            <h5 className={bikeCardStyle.priceTitle}>{props.sourceTitle}</h5>
            <h4 className={bikeCardStyle.source}>{props.source}</h4>
          </div>
          {props.isEstBtn && (
          <div className={bikeCardStyle.smailBtn}>
            <Link href="/">CONTACT SAMIL</Link>
          </div>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default BikeCard;
