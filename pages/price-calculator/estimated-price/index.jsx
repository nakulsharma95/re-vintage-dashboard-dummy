import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PriceInspection from '../../../components/priceCalculator/estimatedPrice/priceInspection';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import Filters from '../../../components/common/filters';
import EstimatedBike from '../../../components/priceCalculator/estimatedPrice/estimatedBike';

export default function EstimatedPrice() {
  return (
    <>
      <Breadcrumb title="Instant Estimator Configurator" />
      <div className="mb-5" />
      <Filters title="Estimated Price" />
      <Row>
        <Col md={7} className="mt-1">
          <PriceInspection
            headingTitle="Royal Enfield - Classic 350 - 2015 - Black & Red - Delhi"
            priceOne="1,19,300"
            priceTwo="1,26,600"
          />
        </Col>
        <Col md={5} className="mt-1">
          <EstimatedBike bikeName="Classic 350" smBikeName="Classic 350" />
        </Col>
      </Row>
    </>
  );
}
