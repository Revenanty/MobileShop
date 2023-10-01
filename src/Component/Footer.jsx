import React from 'react';
import { BsFillBoxSeamFill } from 'react-icons/bs';
import { HiReceiptRefund } from 'react-icons/hi';
import { VscFeedback } from 'react-icons/vsc';
import { MdPayment } from 'react-icons/md';

function Footer() {
  return (
    <section className="w-auto h-auto relative mt-5">
      <div>
        <div className="line md:hidden sm:hidden"></div>
        <ul className="flex items-center justify-between w-11/12 m-auto md:hidden sm:hidden">
          <li className="flex items-center">
            <BsFillBoxSeamFill className="w-auto h-6 mr-2" />{' '}
            <p className="font-extrabold text-lg">Free delivery nationwide</p>
          </li>
          <li className="flex items-center">
            <HiReceiptRefund className="w-auto h-6 mr-2" />{' '}
            <p className="font-extrabold text-lg">Refunded</p>
          </li>
          <li className="flex items-center">
            <VscFeedback className="w-auto h-6 mr-2" />{' '}
            <p className="font-extrabold text-lg">Top-notch support</p>
          </li>
          <li className="flex items-center">
            <MdPayment className="w-auto h-6 mr-2" />
            <p className="font-extrabold text-lg">Flexible payment</p>
          </li>
        </ul>

        <div className="line"></div>
        <div className=" w-11/12 m-auto gap-x-6 my-5 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-y-5">
          <ul>
            <li>
              <h2>About the shop</h2>
              <p className="max-w-5xl font-bold text-base">
                <span className="my-1">
                  {' '}
                  Chiling phone has been founded since 2014.Since we opened we
                  decided Delivering exceptional customer experiences through
                  reliable services.
                </span>
                <span className="mt-2">
                  We cared our customers suggestion and right now, we have 10
                  branches and 500 employees. We have become the best customer
                  service and best selling and best quality shop in the country.
                </span>
              </p>
            </li>
          </ul>
          <ul className="grid cursor-pointer gap-y-2">
            <h2>USEFUL LINKS</h2>
            <p className="font-bold hover:text-red-800  duration-500">Search</p>
            <p className="font-bold   duration-500">About us</p>
            <p className="font-bold  hover:text-red-800 duration-500">
              Contact us
            </p>
            <p className="font-bold  hover:text-red-800 duration-500">FAQ</p>
          </ul>
          <ul>
            <h2>NEWSLETTER</h2>
            <p className="flex flex-col font-bold">
              Please Register to notice our promotion and big events.
              <input
                className="bg-white w-[300px] sm:w-[200px] p-2 focus:outline-none placeholder:text-black my-2"
                placeholder="Your Email"
                type="email"
              />
              <button className="bg-red-800 text-center p-2 text-white hover:bg-red-500 duration-500 w-[150px]">
                Subscribe
              </button>
            </p>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
