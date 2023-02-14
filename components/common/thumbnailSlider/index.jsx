import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';
import styles from './style.module.scss';

function BikeSlider() {
  const settings = {
    // eslint-disable-next-line react/no-unstable-nested-components
    customPaging(i) {
      return (
        <Link href="/">
          <Image
            src={`/images/sliderImg/bike${i}.png`}
            width="590"
            height="320"
            className={styles.sliderBgImage}
          />
        </Link>
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
    <div className="bike-slider-custom">
      <Slider {...settings} className={styles.compBikeCardSlider}>
        <div className={styles.compBikeCardSlides}>
          <Image src="/images/sliderImg/bike0.png" width="590" height="320" />
        </div>
        <div className={styles.compBikeCardSlides}>
          <Image src="/images/sliderImg/bike1.png" width="590" height="320" />
        </div>
        <div className={styles.compBikeCardSlides}>
          <Image src="/images/sliderImg/bike2.png" width="590" height="320" />
        </div>
        <div className={styles.compBikeCardSlides}>
          <Image src="/images/sliderImg/bike3.jpg" width="590" height="320" />
        </div>
        <div className={styles.compBikeCardSlides}>
          <Image src="/images/sliderImg/bike4.jpg" width="590" height="320" />
        </div>
        <div className={styles.compBikeCardSlides}>
          <Image src="/images/sliderImg/bike5.jpg" width="590" height="320" />
        </div>
        <div className={styles.compBikeCardSlides}>
          <Image src="/images/sliderImg/bike6.jpg" width="590" height="320" />
        </div>
        <div className={styles.compBikeCardSlides}>
          <Image src="/images/sliderImg/bike7.jpg" width="590" height="320" />
        </div>
      </Slider>
    </div>
  );
}

export default BikeSlider;
