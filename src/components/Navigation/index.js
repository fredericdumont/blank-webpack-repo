import React from 'react';

import {Link} from 'react-router-dom';

import css from './index.module.css';

const Navigation = () => {
  return (
    <>
      <Link className={css.link} to="/">
        Homepage
      </Link>
      <Link className={css.link} to="/firstpage">
        Firstpage
      </Link>
    </>
  );
};

export default Navigation;
