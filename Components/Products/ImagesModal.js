import React, {useState, Fragment} from "react";
import {
  ImageInnerWrapper,
  Image,
  ImagesMarker,
  ViewImages,
  ImagesWrapper,
  ImagesMarkerWrapper,
  ImageArrow,
} from "../../StyledComponents/productsItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useWindowDimension } from "../../Hooks/useWindowDimension";
import { Backdrop } from "../../StyledComponents/main";



const ImagesModal = ({ images, state, closeModal }) => {
  const [activePic, setActivePic] = useState(0);
  const [width, height] = useWindowDimension();

  const imgs = images.paths.map((img, i) => (
    <ImageInnerWrapper key={i}>
      <Image
        displayWidth={width}
        displayHeight={height}
        id={img}
        src={img}
        alt={images.alt}
        modal
        slide={activePic}
      />
    </ImageInnerWrapper>
  ));

  const markers = images.paths.map((a, i) => (
    <ImagesMarker
      onClick={() => setActivePic(i)}
      active={i === activePic}
      key={i}
    />
  ));

  const swapPicturesHandler = (direction) => {
    if (activePic < images.paths.length - 1 && direction === "right") {
      setActivePic((state) => state + 1);
    }
    if (activePic > 0 && direction === "left") {
      setActivePic((state) => state - 1);
    }
  };
  return (
    <Fragment>
      <ViewImages displayWidth={width} displayHeight={height} state={state} s>
        <ImagesWrapper>{imgs}</ImagesWrapper>
        <ImagesMarkerWrapper>{markers}</ImagesMarkerWrapper>
        <ImageArrow onClick={() => swapPicturesHandler("left")} position="left">
          <FontAwesomeIcon icon={faChevronLeft} size="4x" />
        </ImageArrow>
        <ImageArrow
          onClick={() => swapPicturesHandler("right")}
          position="right"
        >
          <FontAwesomeIcon icon={faChevronRight} size="4x" />
        </ImageArrow>
      </ViewImages>
      <Backdrop forElement={false} onClick={closeModal} state={state} />
    </Fragment>
  );
};

export default ImagesModal;
