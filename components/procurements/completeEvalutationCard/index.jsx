import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import styles from './style.module.scss';
import BikeSlider from '../../common/thumbnailSlider';
import EvaluationDetail from '../evalutationDetail';
import BikeCardFooter from '../../common/cardFooter';
import MotorcycleDetail from '../motorcycleDetail';

function CompleteBikeDetail({
  isEvalBtnVisible,
  isCallerBtnVisible,
  isEnquiryNumVisible,
  data
}) {
  const completeBikeName = ['2015 Classic 350', '2015 Thunder 350'];

  return (
    <>
        <Card className={styles.compBikeCard}>
          <Card.Body className={`${styles.compBikeCardBody}`}>
            <Row>
              <Col md={4} className={styles.compBikeCardSliderMain}>
                <BikeSlider isSlider />
              </Col>
              <Col md={4}>
                <MotorcycleDetail
                  headBikeDetail
                  bikeInfo
                  bikeDetailTitle
                  bikeNumber="- DL6TAL7314"
                  bikeName={data}
                  isEnquiryNumVisible={isEnquiryNumVisible}
                />
              </Col>
              <Col md={4}>
                <EvaluationDetail
                  isEvalBtnVisible={isEvalBtnVisible}
                  isCallerBtnVisible={isCallerBtnVisible}
                />
              </Col>
            </Row>
          </Card.Body>
          <BikeCardFooter />
        </Card>
    </>
  );
}

export default CompleteBikeDetail;
