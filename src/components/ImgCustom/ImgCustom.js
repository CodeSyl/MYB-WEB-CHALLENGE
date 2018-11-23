import React from 'react';
import Img from 'react-image';
import { Loader } from '../'
import blur from '../../images/blur.png'

const ImgCustom = ({ img }) => {
  return (
    <Img
      src={[
        img,
        blur
      ]}
      loader={
        <Loader />
      }
    />
  );
};

export default ImgCustom;