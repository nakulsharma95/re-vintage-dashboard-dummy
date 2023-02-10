import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import styles from './style.module.scss';
import BikeSlider from '../../common/thumbnailSlider';
import EvaluationDetail from '../evalutationDetail';
import BikeCardFooter from '../../common/cardFooter';
import MotorcycleDetail from '../motorcycleDetail';

function CompleteBikeDetail() {
  const completeBikeName = ['2015 Classic 350', '2015 Thunder 350'];
  return (
    <>
      <h5 className={styles.compBikeSearchTxt}>2 Search</h5>
      {completeBikeName.map((item) => (
        <Card className={styles.compBikeCard}>
          <Card.Body className={`${styles.compBikeCardBody}`}>
            <Row>
              <Col md={4} className={styles.compBikeCardSliderMain}>
                <BikeSlider />
              </Col>
              <Col md={4}>
                <MotorcycleDetail
                  headBikeDetail
                  bikeInfo
                  bikeDetailTitle
                  bikeNumber="- DL6TAL7314"
                  bikeName={item} 
                />
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
