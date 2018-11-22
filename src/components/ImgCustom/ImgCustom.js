import React from 'react';
import Img from 'react-image';
import { ImgLoader } from '../'
import blur from '../../images/blur.png'
const ImgCustom = ({ img }) => {
  return (
    <Img
      src={[
        img,
        blur
      ]}
      loader={
        <ImgLoader />
      }
    />
  );
};

export default ImgCustom;