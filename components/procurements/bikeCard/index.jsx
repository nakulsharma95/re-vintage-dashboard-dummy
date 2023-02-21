import React from "react";
import Button from "react-bootstrap/Button";
import { Card, Col, Row } from "react-bootstrap";
import bikeCardStyle from "./style.module.scss";

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
            {props.bikeModal} <br />
            <span> {props.bikeRc}</span>
          </Card.Title>
          <Row className={`${bikeCardStyle.bikeDetail} mx-0`}>
            <Col className={bikeCardStyle.detailTxt}>{props.bikekm}</Col>
            <Col className={bikeCardStyle.detailTxt}>{props.bikeOwner}</Col>
            <Col className={bikeCardStyle.detailTxt}>{props.bikeCc}</Col>
          </Row>
          <div className={bikeCardStyle.bikePrice}>
            <h5 className={bikeCardStyle.priceTitle}>Estimated Price</h5>
            <h4 className={bikeCardStyle.price}>{props.sellingPrice}</h4>
          </div>
          <div className="d-flex align-items-center">
            <h5 className={bikeCardStyle.priceTitle}>Source:</h5>
            <h4 className={bikeCardStyle.source}>{props.source}</h4>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default BikeCard;
