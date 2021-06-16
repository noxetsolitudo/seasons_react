import React from 'react';
import autumn from '../img/autumn/autumn04.jpg';
import { Link } from 'react-router-dom';

const Autumn = () => {
  return (
    <div className="flex-col myb container">
      <div className="flex-row position-relative">
        <img src={autumn} alt="autumn img" />
        <div className="position-absolute">
          <Link to="/home">
            <p>HOME</p>
          </Link>
        </div>
        <div className="flex-col align-left">
          <p className="myb">
            And it was Achilles Wong who completed the task. We called her: The
            one-who-cleared-away-another-family’s-<span>autumn</span>. She
            blossomed, tall, benevolent, notwithstanding.
          </p>
          <small>by Marilyn Chin </small>
        </div>
      </div>
    </div>
  );
};

export default Autumn;
