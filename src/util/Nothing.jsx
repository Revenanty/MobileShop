import React from 'react';
import { Link } from 'react-router-dom';

function Nothing() {
  return (
    <div className="grid items-center justify-center mt-52 md:mt-36 sm:mt-9">
      <p className="text-center mb-4">This collection is empty</p>
      <Link
        to={`/`}
        className="bg-red-800 text-white px-16 hover:bg-red-500 duration-500 py-3 mb-11">
        Go back to home
      </Link>
    </div>
  );
}

export default Nothing;
