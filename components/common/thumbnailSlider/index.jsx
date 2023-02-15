import Image from 'next/image';
import React, { useState } from 'react';
import Slider from 'react-slick';
import styles from './style.module.scss';

function BikeSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const sliderImages = [
    {
      imgUrl: '/images/sliderImg/bike0.png',
    },
    {
      imgUrl: '/images/sliderImg/bike1.png',
    },
    {
      imgUrl: '/images/sliderImg/bike2.png',
    },
    {
      imgUrl: '/images/sliderImg/bike3.png',
    },
    {
      imgUrl: '/images/sliderImg/bike4.png',
    },
    {
      imgUrl: '/images/sliderImg/bike5.png',
    },
    {
      imgUrl: '/images/sliderImg/bike6.png',
    },
    {
      imgUrl: '/images/sliderImg/bike7.png',
    },
    {
      imgUrl: '/images/sliderImg/bike8.png',
    },
  ];

  return (
    <div className="bike-slider-custom">
      <Slider
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        className={styles.compBikeCardSlider}
      >
        {sliderImages.map((item) => (
          <div className={styles.compBikeCardSlides}>
            <Image src={item.imgUrl} width="590" height="320" />
          </div>
        ))}
      </Slider>
      <div className="slider-tumbnail">
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={5}
          swipeToSlide
          focusOnSelect
          arrows={false}
        >
          {sliderImages.map((item) => (
            <div className={styles.compBikeCardSlides}>
              <Image
                src={item.imgUrl}
                className="img-full"
                width="63"
                height="46"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* <Slider {...settings} className={styles.compBikeCardSlider} /> */}
    </div>
  );
}

export default BikeSlider;
