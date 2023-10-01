import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import Nothing from './Nothing';

function Premium({ premiumProduct: { title, items } }) {
  return (
    <section>
      <div className="w-11/12 m-auto mb-10">
        <h1 className="text-2xl md:text-xl sm:text-base font-extrabold ml-5 mb-5 sm:my-3">
          {title}
        </h1>
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            375: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            550: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            767: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 7,
              spaceBetween: 40,
            },
          }}>
          <div>
            {items?.map((item, i) => (
              <SwiperSlide key={i}>
                <div>
                  <div className="textChange">
                    <Link to={`/nothing`}>
                      <img
                        className="w-52 md:w-44 sm:w-28 rounded-full object-cover h-auto"
                        src={item.image}
                        alt=""
                      />
                    </Link>
                    <p className="text-base sm:text-sm text-center font-bold mt-3">
                      {item.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default Premium;
