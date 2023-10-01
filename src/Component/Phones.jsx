import React from 'react';
import Title from '../util/Title';
import Itemphone from '../util/Itemphone';
function Phones({ phones: { title, items } }) {
  return (
    <section>
      <ul className="flex items-center justify-around ">
        <li className="bg-sky-400 border-l xsm:text-xs p-2 text-center cursor-pointer hover:bg-black hover:text-white duration-500 w-full border-black">
          i-phone
        </li>
        <li className="bg-sky-400 border-l p-2 text-center cursor-pointer hover:bg-black hover:text-white duration-500 w-full border-black">
          Samsung
        </li>
        <li className="bg-sky-400 border-l p-2 text-center cursor-pointer hover:bg-black hover:text-white duration-500 w-full border-black">
          Xiomai
        </li>
        <li className="bg-sky-400 border-l p-2 text-center cursor-pointer hover:bg-black hover:text-white duration-500 w-full border-black">
          Huawei
        </li>
        <li className="bg-sky-400 border-l p-2 text-center cursor-pointer hover:bg-black hover:text-white duration-500 w-full border-black">
          Vivo
        </li>
        <li className="bg-sky-400 border-l p-2 text-center cursor-pointer hover:bg-black hover:text-white duration-500 w-full border-black">
          Oppo
        </li>
      </ul>
      <div>
        <Title title={title}></Title>
        <div className="grid grid-cols-4 items-center justify-items-center md:grid-cols-3 sm:grid-cols-1 gap-8 shopContainer m-auto">
          {items?.map((item, i) => (
            <Itemphone {...item} key={i}></Itemphone>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Phones;
