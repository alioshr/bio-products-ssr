import styled from "styled-components";
import React from "react";

const FrontBanner = () => (
  <BannerWrapper>
    <Video>
      <source src="/BannerFront/promo.mp4" type="video/mp4" />
    </Video>
  </BannerWrapper>
);

export default FrontBanner;

const BannerWrapper = styled.section`
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: black;
  overflow: hidden;
`;

const Video = styled.video.attrs(() => ({
  autoPlay: "autoPlay",
  loop: "loop",
  muted: "muted",
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
