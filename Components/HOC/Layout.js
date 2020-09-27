import React, { useState } from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Footer from "./Footer";
import { useScrollPosition } from "../../Hooks/useScrollPosition";
import {Wrapper} from '../../StyledComponents/layoutItems'

const Layout = (props) => {
  const [visible, setVisible] = useState(true);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y >= prevPos.y;
      if (isShow !== visible) setVisible(isShow);
    },
    [visible],
    false,
    false,
    150
  );
  
  return (
    <Wrapper>
      <Toolbar visible={visible} />
      <main>{props.children}</main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
