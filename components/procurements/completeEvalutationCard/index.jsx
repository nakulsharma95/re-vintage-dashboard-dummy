import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import styles from './style.module.scss';
import BikeSlider from '../../common/thumbnailSlider';
import EvaluationDetail from '../evalutationDetail';
import BikeCardFooter from '../../common/cardFooter';
import EvaluationRequestDetailCard from '../evaluationRequest';

function CompleteBikeDetail() {
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
      {completeBikeName.map((item, index) => (
        <Card key={index} className={styles.compBikeCard}>
          <Card.Body className={`${styles.compBikeCardBody}`}>
            <Row>
              <Col md={4} className={styles.compBikeCardSliderMain}>
                <BikeSlider />
              </Col>
              <Col md={4}>
                <EvaluationRequestDetailCard bikeName={item} />
              </Col>
              <Col md={4}>
                <EvaluationDetail />
              </Col>
            </Row>
          </Card.Body>
          <BikeCardFooter />
        </Card>
      ))}
    </>
  );
}

export default CompleteBikeDetail;
