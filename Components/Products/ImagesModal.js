import React, { Fragment } from "react";
import {
  ViewImages
} from "../../StyledComponents/productsItems";
import { useWindowDimension } from "../../Hooks/useWindowDimension";
import { Backdrop } from "../../StyledComponents/main";
import { Gallery } from '../../UI/Swipeable/Swipeable';

const ImagesModal = ({ images, state, closeModal }) => {
  const [width, height] = useWindowDimension();

  return (
    <Fragment>
      <ViewImages size='2' displayWidth={width} displayHeight={height} state={state} s>
        <Gallery 
        rowWidth="100%"
        rowHeight="100%"
        markerActiveColor="orange"
        markerInactiveColor="white"
        items={images.paths}
        childProps={{
          alt: `${images.alt}`,
        }}
        navColor="transparent"
        navInnerColor="white"
        navSize={4}
        navInnerHoverColor="orange"
        withNav={true}
        navPosX={-100}
        navPosY={50}/>
      </ViewImages>
      <Backdrop forElement={false} onClick={closeModal} state={state} />
    </Fragment>
  );
};

export default ImagesModal;