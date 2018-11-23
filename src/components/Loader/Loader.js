import React from 'react';

import './Loader.scss';

const Loader = _ => {
  return (
    <div className="lds-spinner">
      <div>
      </div>
      <div></div>
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
  );
};

export default Loader;