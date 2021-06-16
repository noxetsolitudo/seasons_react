import React from 'react';
import winter from '../img/winter/winter02.jpg';
import { Link } from 'react-router-dom';

const Winter = () => {
  return (
    <div className="flex-col myb container">
      <div className="flex-row position-relative">
        <img src={winter} alt="autumn img" />
        <div className="position-absolute">
          <Link to="/home">
            <p>HOME</p>
          </Link>
        </div>
        <div className="flex-col align-left">
          <p className="myb">
            Now <span>winter</span> nights enlarge This number of their hours;
            And clouds their storms discharge Upon the airy towers. Let now the
            chimneys blaze And cups o'erflow with wine, Let well-tuned words
            amaze With harmony divine...
          </p>
          <small>by Thomas Campion</small>
        </div>
      </div>
    </div>
  );
};

export default Winter;
