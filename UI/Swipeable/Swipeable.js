import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

export const Gallery = ({
  items,
  childProps,
  rowWidth,
  rowHeight,
  markerActiveColor,
  markerInactiveColor,
  withNav,
  navColor,
  navInnerColor,
  navSize,
  navInnerHoverColor,
  navPosX,
  navPosY
}) => {
  //dummy state to force an extra render in order to populate the elRefs
  const [forceRender, setForceRender] = useState(false);
  //activeMarker is necessary as refs do not render as state to track the marker position
  const [activeMarker, setActiveMarker] = useState(0);
  const activeBox = useRef(0);
  const dragStartXRef = useRef(0);
  const leftRef = useRef(0);
  const draggedRef = React.useRef(false);
  const elRefs = useRef([]);
  const markersRef = useRef();

  useEffect(() => {
    window.addEventListener("mouseup", onDragEndMouse);
    window.addEventListener("touchend", onDragEndTouch);
    return () => {
      window.removeEventListener("mouseup", onDragEndMouse);
      window.removeEventListener("touchend", onDragEndTouch);
    };
  }, []);

  useEffect(() => {
    if (elRefs.current.length !== items.length) {
      setForceRender(true);
      elRefs.current = Array(items.length)
        .fill()
        .map((_, i) => elRefs.current[i] || React.createRef());
    }
  }, []);

  //mouse API
  function onDragStartMouse(e) {
    onDragStart(e.clientX);
    window.addEventListener("mousemove", onMouseMove);
    requestAnimationFrame(updatePosition);
  }

  function onMouseMove(e) {
    const left = e.clientX - dragStartXRef.current;
    if (left < 0 && activeBox.current === 0) leftRef.current = left;
    if (activeBox.current > 0 && activeBox.current < elRefs.current.length - 1)
      leftRef.current = left;
    if (left > 0 && activeBox.current === elRefs.current.length - 1)
      leftRef.current = left;
  }

  function onDragEndMouse() {
    window.removeEventListener("mousemove", onMouseMove);
    onDragEnd();
  }

  //touch API
  function onDragStartTouch(e) {
    const touch = e.targetTouches[0];
    onDragStart(touch.clientX);
    window.addEventListener("touchmove", onTouchMove);
    requestAnimationFrame(updatePosition);
  }

  function onTouchMove(e) {
    const touch = e.targetTouches[0];
    const left = touch.clientX - dragStartXRef.current;
    if (left < 0 && activeBox.current === 0) leftRef.current = left;
    if (activeBox.current > 0 && activeBox.current < elRefs.current.length - 1)
      leftRef.current = left;
    if (left > 0 && activeBox.current === elRefs.current.length - 1)
      leftRef.current = left;
  }

  function onDragEndTouch() {
    window.removeEventListener("touchmove", onTouchMove);
    onDragEnd();
  }

  //for both APIs below
  //gives the X position
  function onDragStart(clientX) {
    draggedRef.current = true;
    dragStartXRef.current = clientX;
  }

  function updatePosition() {
    if (draggedRef.current) {
      requestAnimationFrame(updatePosition);
    }
    let boxWidth = -elRefs.current[0].current.offsetWidth;
    elRefs.current.map(
      (el) =>
        (el.current.style.transform = `translateX(${
          leftRef.current + boxWidth * activeBox.current
        }px)`)
    );
  }

  //determines what happens at the end of the animation
  function onDragEnd() {
    if (draggedRef.current) {
      draggedRef.current = false;
      const boxWidth = -elRefs.current[0].current.offsetWidth;
      if (leftRef.current < boxWidth / 2) {
        setActiveMarker((state) => state + 1);
        activeBox.current = activeBox.current + 1;
      }
      if (leftRef.current > (boxWidth * -1) / 2) {
        setActiveMarker((state) => state - 1);
        activeBox.current = activeBox.current - 1;
      }
    }
    leftRef.current = 0;
  }

  const activeBoxHandler = (index) => {
    setActiveMarker(index);
    activeBox.current = index;
    requestAnimationFrame(updatePosition);
  };

  const navButtonsLogicHandler = (mode) => {
    if (mode === "add" && activeBox.current < items.length - 1) {
      setActiveMarker((state) => state + 1);
      activeBox.current = activeBox.current + 1;
      requestAnimationFrame(updatePosition);
    }

    if (mode === "subtract" && activeBox.current > 0) {
      setActiveMarker((state) => state - 1);
      activeBox.current = activeBox.current - 1;
      requestAnimationFrame(updatePosition);
    }
  };

  const boxes = items.map((item, i) => (
    <Box
      src={item}
      onDragStart={(e) => e.preventDefault()}
      {...childProps}
      key={i}
      ref={elRefs.current[i]}
      onMouseDown={onDragStartMouse}
      onTouchStart={onDragStartTouch}
    />
  ));

  const dottedMarkers = Array(items.length)
    .fill()
    .map((_, i) => (
      <Marker
        onClick={() => activeBoxHandler(i)}
        dims={markersRef.current?.offsetHeight}
        active={activeMarker === i}
        activeColor={markerActiveColor}
        inactiveColor={markerInactiveColor}
      />
    ));
  return (
    <Wrapper>
      <Row rowHeight={rowHeight} rowWidth={rowWidth}>
        {boxes}
      </Row>
  <Markers ref={markersRef}>{dottedMarkers}</Markers>
      {withNav && (
        <React.Fragment>
          <ChevronLeft
            onClick={() => navButtonsLogicHandler("subtract")}
            bkgColor={navColor}
            chevronColor={navInnerColor}
            chevronHoverColor={navInnerHoverColor}
            size={navSize}
            posX={navPosX}
            posY={navPosY}
            alignment="left"
          />
          <ChevronRight
            onClick={() => navButtonsLogicHandler("add")}
            bkgColor={navColor}
            chevronColor={navInnerColor}
            chevronHoverColor={navInnerHoverColor}
            size={navSize}
            posX={navPosX}
            posY={navPosY}
            alignment="right"
          />
        </React.Fragment>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  width: ${({ rowWidth }) => (rowWidth ? rowWidth : "100%")};
  height: ${({ rowHeight }) => (rowHeight ? rowHeight : "100%")};
  background-color: white;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
`;

const Box = styled.img`
  min-width: 100%;
  height: 100%;
  transition: all 400ms ease-out;
  box-sizing: border-box;
  object-fit: contain;
  position: relative;
`;

const Markers = styled.div`
  width: 100%;
  height: 5%;
  position: relative;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin: .5rem 0;
`;

const Marker = styled.div`
cursor: pointer;
  margin: 0.2rem;
  border-radius: 50%;
  ${({ dims }) =>
    dims &&
    css`
      height: ${dims}px;
      width: ${dims}px;
    `}
  background-color: ${({ inactiveColor }) =>
    inactiveColor ? inactiveColor : "#c4c4c4"};
  ${({ active }) =>
    active &&
    css`
      background-color: ${({ activeColor }) =>
        activeColor ? activeColor : "red"};
    `}
`;

const navButtonsMixin = (
  bkgColor = "black",
  chevronColor = "white",
  size = 5,
  alignment,
  posX,
  posY,
  chevronHoverColor = "orange"
) => css`
  position: absolute;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${bkgColor};
  width: ${size}rem;
  height: ${size}rem;
  ${alignment === "left"
    ? ` left: ${posX}px;`
    : alignment === "right"
    ? `right: ${posX}px;`
    : null};
  top: ${posY ? posY : 50}%;
  transform: translateY(-${posY ? posY : 50}%);

  ::after {
    content: "";
    position: absolute;
    width: 35%;
    height: 35%;
    top: 50%;
    border-left: 5px solid ${chevronColor};
    border-top: 5px solid ${chevronColor};
    transition: all 100ms ease-in;
  }

  &:hover {
    ::after {
      border-left: 5px solid ${chevronHoverColor};
      border-top: 5px solid ${chevronHoverColor};
    }
  }
`;

const ChevronRight = styled.div`
  display: none;
  ${({
    bkgColor,
    chevronColor,
    size,
    posX,
    posY,
    alignment,
    chevronHoverColor,
  }) =>
    navButtonsMixin(
      bkgColor,
      chevronColor,
      size,
      alignment,
      posX,
      posY,
      chevronHoverColor
    )}
  ::after {
    left: 40%;
    transform: translate(-50%, -50%) rotateZ(135deg);
  }
  @media (min-width: 40rem) and (min-height: 28rem) {
    display: block;
  }
`;

const ChevronLeft = styled(ChevronRight)`
  ::after {
    left: 60%;
    transform: translate(-50%, -50%) rotateZ(-45deg);
  }
`;