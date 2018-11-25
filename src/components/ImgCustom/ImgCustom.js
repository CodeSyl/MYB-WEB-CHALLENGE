// @flow
import * as React from 'react';
import Img from 'react-image';
import Loader from '../Loader/Loader';
import blur from '../../images/blur.png';

type Props = {
  img: string
}

const ImgCustom = (props: Props) => {
  return (
    <Img
      src={[
        props.img,
        blur
      ]}
      loader={
        <Loader />
      }
    />
  );
};

export default ImgCustom;