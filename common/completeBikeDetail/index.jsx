import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import styles from './style.module.scss';
import BikeSlider from '../bikeSlider';
import MotorcycleDetailCard from './motorcycleDetail';
import EvaluationDetail from './EvaluationDetail';
import BikeCardFooter from './bikeCardFooter';

const CompleteBikeDetail = () => {
  const completeBikeName = [
    {
      bkeName: '2015 Classic 350',
    },
    {
      bkeName: '2015 Thunder 350',
    },
  ];
  return (
    <>
      <h5 className={styles.compBikeSearchTxt}>2 Search</h5>
      {completeBikeName.map((item, index) => {
        return (
          <Card className={styles.compBikeCard}>
            <Card.Body className={`${styles.compBikeCardBody}`}>
              <Row>
                <Col md={4} className={styles.compBikeCardSliderMain}>
                  <BikeSlider />
                </Col>
                <Col md={4} className={styles.motorcycleDetail}>
                  <MotorcycleDetailCard bikeName={item} />
                </Col>
                <Col md={4} className={styles.evaluationDetail}>
                  <EvaluationDetail />
                </Col>
              </Row>
            </Card.Body>
            <BikeCardFooter />
          </Card>
        );
      })}
    </>
  );
};

export default CompleteBikeDetail;
