import React from 'react';
import { phones } from '../data';

function Phones() {
  return (
    <>
      <section className="w-auto h-auto relative">
        <h2 className="text-5xl lg:text-3xl md:text-2xl sm:text-xl font-bold text-center">
          New Arrivals
        </h2>
        <div className="flex items-center justify-center">
          <button onClick={() => filtertype('Samsung')}>Samsung</button>
        </div>
        <div className="grid items-center mt-10 justify-items-center grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1  w-10/12 gap-5 m-auto">
          {phones.map((phone) => (
            <section key={phone.id}>
              <div>
                <div className="wrapper">
                  <img
                    className="w-52 md:w-36 sm:w-36 h-auto rounded-lg cursor-pointer"
                    src={phone.image}
                    alt=""
                  />
                </div>
                <div>
                  <h2>{phone.name}</h2>
                  <p>{phone.price}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}

export default Phones;
