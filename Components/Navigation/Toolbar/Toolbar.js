import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useShowNavigationItems } from "../../../store/actions/actionsIndex";
import {
  NavigationPanel,
  HBWr,
  HBInnerWr,
  HBSpan,
  Logo,
  LogoWr,
  Cart,
  CartCounter,
} from "../../../StyledComponents/toolbarItems";
import { Bee } from "../../../public/Icon/Icon";
import Link from "next/link";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HamburgerButton = ({ active, toggleNavItems }) => {
  return (
    <HBInnerWr active={active} onClick={toggleNavItems}>
      <HBSpan />
      <HBSpan />
      <HBSpan />
    </HBInnerWr>
  );
};

const ProductLogo = () => (
  <Logo>
    <Link href="/">
      <a>
        <Bee />
      </a>
    </Link>
  </Logo>
);

const ShoppingCart = ({ style }) => (
  <Cart style={style}>
    <FontAwesomeIcon icon={faShoppingBag} size="2x" />
    <CartCounter>
      <span>3</span>
    </CartCounter>
  </Cart>
);

const Toolbar = ({ visible }) => {
  const [globalWindow, setGlobalWindow] = useState(null);
  const dispatch = useDispatch();
  const navItemsActive = useSelector((state) => state.navigation.showNavItems);
  const navItems = useSelector((state) => state.navigation.navItems);
  console.log(navItemsActive);
  useEffect(() => {
    setGlobalWindow(window);
  }, []);

  let toolbarIconHidden = { top: "-10vh" };
  let toolbarIconShow = { bottom: "1rem" };
  let topIconStyle = !visible ? { top: "-10vh" } : { bottom: "1rem" };
  let bottomIconStyle = !visible ? { bottom: "-10vh" } : { bottom: "1rem" };
  const iconStyles = !visible ? toolbarIconHidden : toolbarIconShow;
  return (
    <Fragment>
      <NavigationPanel active={navItemsActive} style={iconStyles}>
        <ProductLogo />
        <HamburgerButton
          active={navItemsActive}
          toggleNavItems={() => dispatch(useShowNavigationItems())}
        />
      </NavigationPanel>
      <HBWr
        active={navItemsActive}
        style={bottomIconStyle}
        onClick={() => dispatch(useShowNavigationItems())}
      >
        <HamburgerButton />
      </HBWr>
      <LogoWr active={navItemsActive} style={iconStyles}>
        <ProductLogo />
      </LogoWr>
      <ShoppingCart
        style={globalWindow?.innerWidth < 640 ? bottomIconStyle : topIconStyle}
      />
    </Fragment>
  );
};

export default Toolbar;
