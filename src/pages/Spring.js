import React from 'react';
import { Link } from 'react-router-dom';

import spring from '../img/spring/spring03.jpg';

const Spring = () => {
  return (
    <div className="flex-col myb container">
      <div className="flex-row position-relative">
        <img src={spring} alt="spring img" />
        <div className="position-absolute">
          <Link to="/home">
            <p>HOME</p>
          </Link>
        </div>
        <div className="flex-col align-left">
          <p className="myb">
            ...They begin munching the young tufts of <span>spring</span> in the
            darkness. I would like to hold the slenderer one in my arms, For she
            has walked over to me And nuzzled my left hand. She is black and
            white, Her mane falls wild on her forehead, And the light breeze
            moves me to caress her long ear...
          </p>
          <small>by James Wright </small>
        </div>
      </div>
    </div>
  );
};

export default Spring;
