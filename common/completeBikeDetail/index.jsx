import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import styles from './style.module.scss';
import Button from 'react-bootstrap/Button';
import Slider from 'react-slick';
import { FaAngleRight } from 'react-icons/fa';

const CompleteBikeDetail = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`/images/sliderImg/bike${i}.png`} />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const completeBikeName =[
	{
		bkeName:"2015 Classic 350"
	},
	{
		bkeName:"2015 Thunder 350"
	},
  ]
  return (
    <>
      <h5 className={styles.compBikeSearchTxt}>2 Search</h5>
	  {
		completeBikeName.map((item, index)=>{
			return(
				<Card className={styles.compBikeCard}>
				<Card.Body className={`${styles.compBikeCardBody}`}>
				  <Row>
					<Col md={4} className={styles.compBikeCardSliderMain}>
					  <Slider {...settings} className={styles.compBikeCardSlider}>
						<div className={styles.compBikeCardSlides}>
						  <img src="/images/sliderImg/bike0.png" />
						</div>
						<div className={styles.compBikeCardSlides}>
						  <img src="/images/sliderImg/bike1.png" />
						</div>
					  </Slider>
					</Col>
					<Col md={4} className={styles.motorcycleDetail}>
					  <div className={`${styles.completeBorderRight} px-3`}>
						<h4 className={styles.motorcycleTitle}>
						  Motorcycle details <span>- FB29FH9219HR1</span>
						</h4>
						<h2 className={styles.motorcycleName}>
						  {item.bkeName} <span>- DL6TAL7314</span>
						</h2>
						<Row>
						  <Col className={styles.motorcycleSpecs}>43,384 km</Col>
						  <Col className={styles.motorcycleSpecs}>1st Owner</Col>
						  <Col className={styles.motorcycleSpecs}>350 CC</Col>
						</Row>
						<div className={styles.motorcycleCompleteSpec}>
						  <Row className="m-0">
							<Col className="p-0">
							  <h5 className={styles.specsHeading}>Owner</h5>
							  <p className={styles.specsText}>2nd</p>
							</Col>
							<Col className="p-0">
							  <h5 className={styles.specsHeading}>KM</h5>
							  <p className={styles.specsText}>35150</p>
							</Col>
							<Col className="p-0">
							  <h5 className={styles.specsHeading}>Mileage</h5>
							  <p className={styles.specsText}>43.6 kmpl</p>
							</Col>
							<Col
							  md={12}
							  className={`${styles.completeBorderBottom} p-0`}
							></Col>
							<Col className="p-0">
							  <h5 className={`${styles.specsHeading} mt-2`}>Colour</h5>
							  <p className={`${styles.specsText} mb-0`}>Red, Chrome</p>
							</Col>
							<Col className="p-0">
							  <h5 className={`${styles.specsHeading} mt-2`}>
								Location
							  </h5>
							  <p className={`${styles.specsText} mb-0`}>Delhi</p>
							</Col>
							<Col className="p-0">
							  <h5 className={`${styles.specsHeading} mt-2`}>
								Posting date
							  </h5>
							  <p className={`${styles.specsText} mb-0`}>25/08/2022</p>
							</Col>
						  </Row>
						</div>
						<h3 className={styles.motorStylePrice}>Evaluation Price</h3>
						<h2 className={styles.motorStylePriceTxt}>₹ 1,19,300</h2>
					  </div>
					</Col>
					<Col md={4} className={styles.evaluationDetail}>
					  <h4 className={styles.evalTitle}>Evaluation Details</h4>
					  <h5 className={styles.evalSubTitle}>Evaluation Location</h5>
					  <p className={styles.evalText}>
						Neel Motors, Lajpat Nagar, Delhi
					  </p>
					  <Row>
						<Col>
						  <h5 className={styles.evalSubTitle}>Owner Details</h5>
						  <p className={styles.evalText}>Rishabh Sharma</p>
						</Col>
						<Col>
						  <h5 className={styles.evalSubTitle}>Contact No.</h5>
						  <p className={styles.evalText}>+91 98765 43219</p>
						</Col>
					  </Row>
					  <h5 className={styles.evalSubTitle}>Evaluation Location</h5>
					  <p className={styles.evalText}>
						Neel Motors, Lajpat Nagar, Delhi
					  </p>
					  <div className={styles.evalBtnBox}>
						<Button variant="primary" className={styles.detailBtn}>
						  Details
						  <span className={styles.rightArrow}>
							<FaAngleRight />
						  </span>
						</Button>
						<Button variant="primary" className={styles.downloadBtn}>
						  Download Report
						</Button>
					  </div>
					</Col>
				  </Row>
				</Card.Body>
				<Card.Footer className={styles.completeBikeFooter}>
				  <h6 className={styles.bikeFooterTitle}>SAMIL Details</h6>
				  <Row>
					<Col md={8}>
					  <Row>
						<Col>
						  <h4 className={styles.bikeFooterSubTitle}>Name</h4>
						  <p className={styles.bikeFooterText}>Ashok Sharma</p>
						</Col>
						<Col>
						  <h4 className={styles.bikeFooterSubTitle}>SAMIL Case ID</h4>
						  <p className={styles.bikeFooterText}>ASHS45125</p>
						</Col>
						<Col>
						  <h4 className={styles.bikeFooterSubTitle}>Contact No.</h4>
						  <p className={styles.bikeFooterText}>+91 98996 45875</p>
						</Col>
					  </Row>
					</Col>
				  </Row>
				</Card.Footer>
			  </Card>
			)
		})
	  }
    
    </>
  );
};

export default CompleteBikeDetail;
