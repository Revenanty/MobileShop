import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  promotions,
  newProduct,
  mobileCol,
  laptopCol,
  tvCol,
  appleCol,
  premiumProduct,
} from '../data/index';

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.avif';
import image3 from '../assets/image3.webp';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import NewProduct from '../util/NewProduct';
import Promotion from '../util/Promotion';
import MobileCollection from '../util/MobileCollection';
import LaptopCollection from '../util/LaptopCollection';
import TvCollection from '../util/TvCollection';
import AppleCollection from '../util/AppleCollection';
import Premium from '../util/Premium';

function Home() {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}>
        <SwiperSlide>
          <img
            src={image1}
            className="w-[100%] h-[62vh] md:h-auto sm:h-auto object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image2}
            className="w-[100%] h-[62vh] md:h-auto sm:h-auto object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image3}
            className="w-[100%] h-[62vh] md:h-auto sm:h-auto object-cover"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <section>
        <NewProduct newProduct={newProduct}></NewProduct>
        <Promotion promotions={promotions}></Promotion>
      </section>
      <section className="">
        <MobileCollection mobileCol={mobileCol}></MobileCollection>
        <LaptopCollection laptopCol={laptopCol}></LaptopCollection>
        <TvCollection tvCol={tvCol}></TvCollection>
        <AppleCollection appleCol={appleCol}></AppleCollection>
        <Premium premiumProduct={premiumProduct}></Premium>
      </section>
    </>
  );
}

export default Home;
