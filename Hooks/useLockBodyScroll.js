import { useState, useEffect } from "react";
import { useScrollPosition } from "./useScrollPosition";

export const useLockBodyScroll = ( dispatcher ) => {
  const [scrollY, setScrollY] = useState(0);
  useScrollPosition(
    ({ currPos }) => {
      setScrollY(currPos.y);
    },
    [dispatcher],
    false,
    false,
    0
  );
  //this is to avoid top scrolling when entering/leaving the dropdown
  useEffect(() => {
    const bodyStyle = document.body.style;
      bodyStyle.position = "";
      bodyStyle.top = "";
      bodyStyle.left = "";
      bodyStyle.right = "";
      window.scrollTo(scrollY, scrollY * -1);
    if (dispatcher) {
      bodyStyle.position = "fixed";
      bodyStyle.top = `${scrollY}px`;
      bodyStyle.left = "0";
      bodyStyle.right = "0";
    }
  }, [dispatcher]);
};
