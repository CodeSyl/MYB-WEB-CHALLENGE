import React from 'react';
import Img from 'react-image';
import PropTypes from 'prop-types';
import { Loader } from '../';
import blur from '../../images/blur.png';

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

ImgCustom.propTypes = {
  img: PropTypes.string.isRequired
};

export default ImgCustom;