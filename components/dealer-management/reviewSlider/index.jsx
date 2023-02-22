import React from 'react';
import Slider from 'react-slick';
import { AiFillStar } from 'react-icons/ai';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md';
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
  };
  return (
    <div className={style.review}>
      <h5>Reviews</h5>

      <Slider className={`${style.reviewCards}  review_slider`} {...settings}>
        <div className={style.reviewCard}>
          <div className={style.reviewCard_head}>
            <img
              className={style.reviewCard_img}
              src="/images/dealership-detailes/profile_img1.png"
              alt="profil-img"
            />
            <div className={style.reviewCard_heading}>
              <h3>Armaan Sharma</h3>
              <p>
                Reviewed <span>Classic 500 TN</span>
              </p>
              <p className={style.reviewCard_rating}>
                <AiFillStar className={style.rating_icon} /> 3 Star rating
              </p>
            </div>
          </div>

          <p className={style.reviewCard_review}>
            Love the location!
            <br /> The team is always quick and efficient to get us out on the
            road. Bikes are always clean and well maintained. Although in
            retrospect I think I should've stuck to my regular choice. The
            location itself looks and feels like an authentic place for
            motorcycle riders to hang out.
          </p>
        </div>
        <div className={style.reviewCard}>
          <div className={style.reviewCard_head}>
            <img
              className={style.reviewCard_img}
              src="/images/dealership-detailes/profile_img2.png"
              alt="profil-img"
            />
            <div className={style.reviewCard_heading}>
              <h3>Jay Kumar Sharma</h3>
              <p>
                Reviewed <span>Classic 500 TN</span>
              </p>
              <p className={style.reviewCard_rating}>
                <AiFillStar className={style.rating_icon} /> 3 Star rating
              </p>
            </div>
          </div>

          <p className={style.reviewCard_review}>
            Love the location!
            <br /> The team is always quick and efficient to get us out on the
            road. Bikes are always clean and well maintained. Although in
            retrospect I think I should've stuck to my regular choice. The
            location itself looks and feels like an authentic place for
            motorcycle riders to hang out.
          </p>
        </div>
        <div className={style.reviewCard}>
          <div className={style.reviewCard_head}>
            <img
              className={style.reviewCard_img}
              src="/images/dealership-detailes/profile_img3.png"
              alt="profil-img"
            />
            <div className={style.reviewCard_heading}>
              <h3>NIkita Seth</h3>
              <p>
                Reviewed <span>Classic 500 TN</span>
              </p>
              <p className={style.reviewCard_rating}>
                <AiFillStar className={style.rating_icon} /> 3 Star rating
              </p>
            </div>
          </div>

          <p className={style.reviewCard_review}>
            Love the location!
            <br /> The team is always quick and efficient to get us out on the
            road. Bikes are always clean and well maintained. Although in
            retrospect I think I should've stuck to my regular choice. The
            location itself looks and feels like an authentic place for
            motorcycle riders to hang out.
          </p>
        </div>
        <div className={style.reviewCard}>
          <div className={style.reviewCard_head}>
            <img
              className={style.reviewCard_img}
              src="/images/dealership-detailes/profile_img1.png"
              alt="profil-img"
            />
            <div className={style.reviewCard_heading}>
              <h3>Armaan Sharma</h3>
              <p>
                Reviewed <span>Classic 500 TN</span>
              </p>
              <p className={style.reviewCard_rating}>
                <AiFillStar className={style.rating_icon} /> 3 Star rating
              </p>
            </div>
          </div>

          <p className={style.reviewCard_review}>
            Love the location!
            <br /> The team is always quick and efficient to get us out on the
            road. Bikes are always clean and well maintained. Although in
            retrospect I think I should've stuck to my regular choice. The
            location itself looks and feels like an authentic place for
            motorcycle riders to hang out.
          </p>
        </div>
        <div className={style.reviewCard}>
          <div className={style.reviewCard_head}>
            <img
              className={style.reviewCard_img}
              src="/images/dealership-detailes/profile_img2.png"
              alt="profil-img"
            />
            <div className={style.reviewCard_heading}>
              <h3>Jay Kumar Sharma</h3>
              <p>
                Reviewed <span>Classic 500 TN</span>
              </p>
              <p className={style.reviewCard_rating}>
                <AiFillStar className={style.rating_icon} /> 3 Star rating
              </p>
            </div>
          </div>

          <p className={style.reviewCard_review}>
            Love the location!
            <br /> The team is always quick and efficient to get us out on the
            road. Bikes are always clean and well maintained. Although in
            retrospect I think I should've stuck to my regular choice. The
            location itself looks and feels like an authentic place for
            motorcycle riders to hang out.
          </p>
        </div>
        <div className={style.reviewCard}>
          <div className={style.reviewCard_head}>
            <img
              className={style.reviewCard_img}
              src="/images/dealership-detailes/profile_img3.png"
              alt="profil-img"
            />
            <div className={style.reviewCard_heading}>
              <h3>NIkita Seth</h3>
              <p>
                Reviewed <span>Classic 500 TN</span>
              </p>
              <p className={style.reviewCard_rating}>
                <AiFillStar className={style.rating_icon} /> 3 Star rating
              </p>
            </div>
          </div>

          <p className={style.reviewCard_review}>
            Love the location!
            <br /> The team is always quick and efficient to get us out on the
            road. Bikes are always clean and well maintained. Although in
            retrospect I think I should've stuck to my regular choice. The
            location itself looks and feels like an authentic place for
            motorcycle riders to hang out.
          </p>
        </div>
        <div className={style.reviewCard}>
          <div className={style.reviewCard_head}>
            <img
              className={style.reviewCard_img}
              src="/images/dealership-detailes/profile_img1.png"
              alt="profil-img"
            />
            <div className={style.reviewCard_heading}>
              <h3>Armaan Sharma</h3>
              <p>
                Reviewed <span>Classic 500 TN</span>
              </p>
              <p className={style.reviewCard_rating}>
                <AiFillStar className={style.rating_icon} /> 3 Star rating
              </p>
            </div>
          </div>

          <p className={style.reviewCard_review}>
            Love the location!
            <br /> The team is always quick and efficient to get us out on the
            road. Bikes are always clean and well maintained. Although in
            retrospect I think I should've stuck to my regular choice. The
            location itself looks and feels like an authentic place for
            motorcycle riders to hang out.
          </p>
        </div>
        <div className={style.reviewCard}>
          <div className={style.reviewCard_head}>
            <img
              className={style.reviewCard_img}
              src="/images/dealership-detailes/profile_img2.png"
              alt="profil-img"
            />
            <div className={style.reviewCard_heading}>
              <h3>Jay Kumar Sharma</h3>
              <p>
                Reviewed <span>Classic 500 TN</span>
              </p>
              <p className={style.reviewCard_rating}>
                <AiFillStar className={style.rating_icon} /> 3 Star rating
              </p>
            </div>
          </div>

          <p className={style.reviewCard_review}>
            Love the location!
            <br /> The team is always quick and efficient to get us out on the
            road. Bikes are always clean and well maintained. Although in
            retrospect I think I should've stuck to my regular choice. The
            location itself looks and feels like an authentic place for
            motorcycle riders to hang out.
          </p>
        </div>
        <div className={style.reviewCard}>
          <div className={style.reviewCard_head}>
            <img
              className={style.reviewCard_img}
              src="/images/dealership-detailes/profile_img3.png"
              alt="profil-img"
            />
            <div className={style.reviewCard_heading}>
              <h3>NIkita Seth</h3>
              <p>
                Reviewed <span>Classic 500 TN</span>
              </p>
              <p className={style.reviewCard_rating}>
                <AiFillStar className={style.rating_icon} /> 3 Star rating
              </p>
            </div>
          </div>

          <p className={style.reviewCard_review}>
            Love the location!
            <br /> The team is always quick and efficient to get us out on the
            road. Bikes are always clean and well maintained. Although in
            retrospect I think I should've stuck to my regular choice. The
            location itself looks and feels like an authentic place for
            motorcycle riders to hang out.
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default Review;
