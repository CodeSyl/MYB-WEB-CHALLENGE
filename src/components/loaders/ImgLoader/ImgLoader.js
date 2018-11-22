import React from 'react';
import './ImgLoader.scss';

const ImgLoader = () => {
  return (
    <div className="lds-spinner">
      <div>
      </div>
      <div></div>
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
  );
};

export default ImgLoader;