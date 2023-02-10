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
            width="100"
            height="100"
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
    <Slider {...settings} className={styles.compBikeCardSlider}>
      <div className={styles.compBikeCardSlides}>
        <Image src="/images/sliderImg/bike0.png" width="100" height="100" />
      </div>
      <div className={styles.compBikeCardSlides}>
        <Image src="/images/sliderImg/bike1.png" width="100" height="100" />
      </div>
    </Slider>
  );
}

export default BikeSlider;
