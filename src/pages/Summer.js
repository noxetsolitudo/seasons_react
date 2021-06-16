import React from 'react';
import summer from '../img/summer/summer04.jpg';
import { Link } from 'react-router-dom';

const Summer = () => {
  return (
    <div className="flex-col myb container">
      <div className="flex-row position-relative">
        <img src={summer} alt="spring img" />
        <div className="position-absolute">
          <Link to="/home">
            <p>HOME</p>
          </Link>
        </div>
        <div className="flex-col align-left">
          <p className="myb">
            Oh, <span>summer</span> has clothed the earth In a cloak from the
            loom of the sun! And a mantle, too, of the skies' soft blue, And a
            belt where the rivers run...
          </p>
          <small>By Paul Laurence Dunbar</small>
        </div>
      </div>
    </div>
  );
};

export default Summer;
