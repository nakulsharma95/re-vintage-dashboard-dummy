import React from 'react';
import Slider from 'react-slick';
import styles from './style.module.scss';

const BikeSlider = () => {
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
  return (
    <>
      <Slider {...settings} className={styles.compBikeCardSlider}>
        <div className={styles.compBikeCardSlides}>
          <img src="/images/sliderImg/bike0.png" />
        </div>
        <div className={styles.compBikeCardSlides}>
          <img src="/images/sliderImg/bike1.png" />
        </div>
      </Slider>
    </>
  );
};

export default BikeSlider;
