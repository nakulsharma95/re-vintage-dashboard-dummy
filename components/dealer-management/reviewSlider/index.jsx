/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Slider from 'react-slick';
import { AiFillStar } from 'react-icons/ai';
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from 'react-icons/md';
import style from './style.module.scss';

function Review() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <MdOutlineArrowForwardIos />,
    prevArrow: <MdOutlineArrowBackIosNew />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          // dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={style.review}>
      <h5>Reviews</h5>

      <Slider className={`${style.reviewCards}  review_slider`} {...settings}>
        <div className={style.reviewCard}>
          <div className={style.reviewCardHead}>
            <img
              className={style.reviewCardImg}
              src="/images/dealership-detailes/profile_img1.png"
              alt="profil-img"
            />
            <div className={style.reviewCardHeading}>
              <h3>Armaan Sharma</h3>
              <p>
                Reviewed <span>Classic 500 TN</span>
              </p>
              <p className={style.reviewCardRating}>
                <AiFillStar className={style.ratingIcon} /> 3 Star rating
              </p>
            </div>
          </div>

          <p className={style.reviewCardReview}>
            Love the location!
            <br /> The team is always quick and efficient to get us out on the
            road. Bikes are always clean and well maintained. Although in
            retrospect I think I should have stuck to my regular choice. The
            location itself looks and feels like an authentic place for
            motorcycle riders to hang out.
          </p>
        </div>
        <div className={style.reviewCard}>
          <div className={style.reviewCardHead}>
            <img
              className={style.reviewCardImg}
              src="/images/dealership-detailes/profile_img2.png"
              alt="profil-img"
            />
            <div className={style.reviewCardHeading}>
              <h3>Jay Kumar Sharma</h3>
              <p>
                Reviewed <span>Classic 500 TN</span>
              </p>
              <p className={style.reviewCardRating}>
                <AiFillStar className={style.ratingIcon} /> 3 Star rating
              </p>
            </div>
          </div>

          <p className={style.reviewCardReview}>
            Love the location!
            <br /> The team is always quick and efficient to get us out on the
            road. Bikes are always clean and well maintained. Although in
            retrospect I think I should have stuck to my regular choice. The
            location itself looks and feels like an authentic place for
            motorcycle riders to hang out.
          </p>
        </div>
        <div className={style.reviewCard}>
          <div className={style.reviewCardHead}>
            <img
              className={style.reviewCardImg}
              src="/images/dealership-detailes/profile_img3.png"
              alt="profil-img"
            />
            <div className={style.reviewCardHeading}>
              <h3>NIkita Seth</h3>
              <p>
                Reviewed <span>Classic 500 TN</span>
              </p>
              <p className={style.reviewCardRating}>
                <AiFillStar className={style.ratingIcon} /> 3 Star rating
              </p>
            </div>
          </div>

          <p className={style.reviewCardReview}>
            Love the location!
            <br /> The team is always quick and efficient to get us out on the
            road. Bikes are always clean and well maintained. Although in
            retrospect I think I should have stuck to my regular choice. The
            location itself looks and feels like an authentic place for
            motorcycle riders to hang out.
          </p>
        </div>
        <div className={style.reviewCard}>
          <div className={style.reviewCardHead}>
            <img
              className={style.reviewCardImg}
              src="/images/dealership-detailes/profile_img1.png"
              alt="profil-img"
            />
            <div className={style.reviewCardHeading}>
              <h3>Armaan Sharma</h3>
              <p>
                Reviewed <span>Classic 500 TN</span>
              </p>
              <p className={style.reviewCardRating}>
                <AiFillStar className={style.ratingIcon} /> 3 Star rating
              </p>
            </div>
          </div>

          <p className={style.reviewCardReview}>
            Love the location!
            <br /> The team is always quick and efficient to get us out on the
            road. Bikes are always clean and well maintained. Although in
            retrospect I think I should have stuck to my regular choice. The
            location itself looks and feels like an authentic place for
            motorcycle riders to hang out.
          </p>
        </div>
        <div className={style.reviewCard}>
          <div className={style.reviewCardHead}>
            <img
              className={style.reviewCardImg}
              src="/images/dealership-detailes/profile_img2.png"
              alt="profil-img"
            />
            <div className={style.reviewCardHeading}>
              <h3>Jay Kumar Sharma</h3>
              <p>
                Reviewed <span>Classic 500 TN</span>
              </p>
              <p className={style.reviewCardRating}>
                <AiFillStar className={style.ratingIcon} /> 3 Star rating
              </p>
            </div>
          </div>

          <p className={style.reviewCardReview}>
            Love the location!
            <br /> The team is always quick and efficient to get us out on the
            road. Bikes are always clean and well maintained. Although in
            retrospect I think I should have stuck to my regular choice. The
            location itself looks and feels like an authentic place for
            motorcycle riders to hang out.
          </p>
        </div>
        <div className={style.reviewCard}>
          <div className={style.reviewCardHead}>
            <img
              className={style.reviewCardImg}
              src="/images/dealership-detailes/profile_img3.png"
              alt="profil-img"
            />
            <div className={style.reviewCardHeading}>
              <h3>NIkita Seth</h3>
              <p>
                Reviewed <span>Classic 500 TN</span>
              </p>
              <p className={style.reviewCardRating}>
                <AiFillStar className={style.ratingIcon} /> 3 Star rating
              </p>
            </div>
          </div>

          <p className={style.reviewCardReview}>
            Love the location!
            <br /> The team is always quick and efficient to get us out on the
            road. Bikes are always clean and well maintained. Although in
            retrospect I think I should have stuck to my regular choice. The
            location itself looks and feels like an authentic place for
            motorcycle riders to hang out.
          </p>
        </div>
        <div className={style.reviewCard}>
          <div className={style.reviewCardHead}>
            <img
              className={style.reviewCardImg}
              src="/images/dealership-detailes/profile_img1.png"
              alt="profil-img"
            />
            <div className={style.reviewCardHeading}>
              <h3>Armaan Sharma</h3>
              <p>
                Reviewed <span>Classic 500 TN</span>
              </p>
              <p className={style.reviewCardRating}>
                <AiFillStar className={style.ratingIcon} /> 3 Star rating
              </p>
            </div>
          </div>

          <p className={style.reviewCardReview}>
            Love the location!
            <br /> The team is always quick and efficient to get us out on the
            road. Bikes are always clean and well maintained. Although in
            retrospect I think I should have stuck to my regular choice. The
            location itself looks and feels like an authentic place for
            motorcycle riders to hang out.
          </p>
        </div>
        <div className={style.reviewCard}>
          <div className={style.reviewCardHead}>
            <img
              className={style.reviewCardImg}
              src="/images/dealership-detailes/profile_img2.png"
              alt="profil-img"
            />
            <div className={style.reviewCardHeading}>
              <h3>Jay Kumar Sharma</h3>
              <p>
                Reviewed <span>Classic 500 TN</span>
              </p>
              <p className={style.reviewCardRating}>
                <AiFillStar className={style.ratingIcon} /> 3 Star rating
              </p>
            </div>
          </div>

          <p className={style.reviewCardReview}>
            Love the location!
            <br /> The team is always quick and efficient to get us out on the
            road. Bikes are always clean and well maintained. Although in
            retrospect I think I should have stuck to my regular choice. The
            location itself looks and feels like an authentic place for
            motorcycle riders to hang out.
          </p>
        </div>
        <div className={style.reviewCard}>
          <div className={style.reviewCardHead}>
            <img
              className={style.reviewCardImg}
              src="/images/dealership-detailes/profile_img3.png"
              alt="profil-img"
            />
            <div className={style.reviewCardHeading}>
              <h3>NIkita Seth</h3>
              <p>
                Reviewed <span>Classic 500 TN</span>
              </p>
              <p className={style.reviewCardRating}>
                <AiFillStar className={style.ratingIcon} /> 3 Star rating
              </p>
            </div>
          </div>

          <p className={style.reviewCardReview}>
            Love the location!
            <br /> The team is always quick and efficient to get us out on the
            road. Bikes are always clean and well maintained. Although in
            retrospect I think I should have stuck to my regular choice. The
            location itself looks and feels like an authentic place for
            motorcycle riders to hang out.
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default Review;
