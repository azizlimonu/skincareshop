import React from "react";
import css from "./Testimonials.module.css";
import Hero from "../../assets/testimonialHero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsData } from "../../data/testimonials";
import { Navigation, Pagination } from "swiper";

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top rated</span>
          <span>
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced
          </span>
        </div>
        <img src={Hero} alt="" />
        <div className={css.container}>
          <span>100k</span>
          <span>Happy Customers with us</span>
        </div>
      </div>
      <div className={css.reviews}>Reviews</div>
      <div className={css.carousel}>
        <Swiper
          navigation={true}
          loopFillGroupWithBlank={true}
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={40}
          slidesPerGroup={1}
          loop={true}
          className={css.tCarousel}
          breakpoints={{
            856: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div className={css.testimonial}>
                <img src={testimonial.image} alt="" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
