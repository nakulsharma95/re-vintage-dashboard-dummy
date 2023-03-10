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
  isCardFooterVisible,
  isSlider
}) {
  const completeData = [
    {
      bikeCode: 'FB29FH9219HR1',
      bikeName: '2015 Classic 350',
      bikeNumber: '- DL6TAL7314',
      priceTitle: 'Evaluation Price',
      evaluationPrice: '1,19,300',
    },
  ];

  const cardFootData = [
    {
      detailTitle: 'SAMIL Details',
      userTitle: 'Name',
      name: 'Ashok Sharma',
      idTitle: 'SAMIL ID',
      caseId: 'ASHS45125',
      contactText: 'Contact No.',
      contact: '+91 9899645875',
    },
  ];

  return (
    <Card className={styles.compBikeCard}>
      <Card.Body className={`${styles.compBikeCardBody}`}>
        <Row>
          <Col md={4} className={styles.compBikeCardSliderMain}>
            <BikeSlider
              isSlider={isSlider}
             />
          </Col>
          {completeData.map((item) => (
            <Col md={4}>
              <MotorcycleDetail
                headBikeDetail
                bikeInfo
                bikeDetailTitle
                msdEnquery="219244982196"
                bikeCode={item.bikeCode}
                bikeName={item.bikeName}
                bikeNumber={item.bikeNumber}
                priceTitle={item.priceTitle}
                evaluationPrice={item.evaluationPrice}
                isEnquiryNumVisible={isEnquiryNumVisible}
              />
            </Col>
          ))}
          <Col md={4}>
            <EvaluationDetail
              isEvalBtnVisible={isEvalBtnVisible}
              isCallerBtnVisible={isCallerBtnVisible}
            />
          </Col>
        </Row>
      </Card.Body>
      {isCardFooterVisible && (
        <div className="re-detailFootBg">
          {cardFootData.map((item) => (
            <BikeCardFooter
              userTitle={item.userTitle}
              caseId={item.caseId}
              contactText={item.contactText}
              detailTitle={item.detailTitle}
              name={item.name}
              idTitle={item.idTitle}
              contact={item.contact}
            />
          ))}
        </div>
      )}
    </Card>
  );
}

export default CompleteBikeDetail;
