import React from 'react';
import { Link } from 'react-router-dom';
import Season from './Season';
import spring from '../img/spring/spring01.jpg';
import summer from '../img/summer/summer07.jpg';
import autumn from '../img/autumn/autumn02.jpg';
import winter from '../img/winter/winter09.jpg';

const Main = () => {
  return (
    <div className="container">
      <div className="frame">
        <Link to="/spring">
          <Season season={spring} />
        </Link>
        <Link to="/summer">
          <Season season={summer} />
        </Link>
        <Link to="/autumn">
          <Season season={autumn} />
        </Link>
        <Link to="/winter">
          <Season season={winter} />
        </Link>
      </div>
    </div>
  );
};

export default Main;
