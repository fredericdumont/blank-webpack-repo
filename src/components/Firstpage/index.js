import React from 'react';

import css from './index.module.css';

import icon from './icon.svg';

const Firstpage = () => {
  return (
    <div>
      <h1 className={css.title}>Firstpage</h1>
      <img src={icon} width="40" />
      <p>This is the firstpage</p>
    </div>
  );
};

export default Firstpage;
