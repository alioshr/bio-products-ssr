import React from "react";
import Toolbar from "../Toolbar/Toolbar";
import Footer from "../Footer/Footer";
import {Wrapper} from '../../StyledComponents/layoutItems'

const Layout = (props) => {
  
  return (
    <Wrapper>
      <Toolbar />
      <main>{props.children}</main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
