import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

function NewProduct({ newProduct: { title, items } }) {
  return (
    <>
      {' '}
      <section className="w-11/12 m-auto">
        <h2 className="text-4xl md:text-2xl sm:text-lg font-extrabold my-5 ml-4">
          {title}
        </h2>
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 1.8,
              spaceBetween: 20,
            },
            375: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            550: {
              slidesPerView: 2.1,
              spaceBetween: 30,
            },
            767: {
              slidesPerView: 2.3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}>
          <div className="grid items-center justify-items-center ">
            {items?.map((item) => (
              <SwiperSlide key={item.id}>
                <div>
                  <div className="wrapper">
                    <img
                      src={item.image}
                      className="w-[60vh] md:w-[40] sm:w-[30vh] h-auto object-cover cursor-pointer"
                      alt=""
                    />
                  </div>
                  <p className="text-lg sm:text-sm font-bold">{item.text}</p>
                  <span className="text-sm">{item.date}</span>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>
    </>
  );
}

export default NewProduct;
