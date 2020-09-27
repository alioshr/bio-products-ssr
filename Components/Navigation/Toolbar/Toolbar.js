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
import Dropdown from "../../../UI/Dropdown/Dropdown";
import {useClientWindow} from '../../../Hooks/useClientWindow';

const Toolbar = ({ visible }) => {
  const dispatch = useDispatch();
  const globalWindow = useClientWindow();
  const navItemsActive = useSelector((state) => state.navigation.showNavItems);
  const navItems = useSelector((state) => state.navigation.navItems);

  let topIconStyle = !visible ? { top: "-10vh" } : { top: "1rem" };
  let bottomIconStyle = !visible ? { bottom: "-10vh" } : { bottom: "1rem" };
  const onMobileScreen = globalWindow?.innerWidth < 640;

  return (
    <Fragment>
      {!onMobileScreen && (
        <NavigationPanel
          tabIndex="0"
          active={navItemsActive}
          style={topIconStyle}
        >
          <ProductLogo />
          <HamburgerButton
            active={navItemsActive}
            toggleNavItems={() => dispatch(useShowNavigationItems())}
          />
        </NavigationPanel>
      )}
      {onMobileScreen && (
        <MobileIcons
          navItemsActive={navItemsActive}
          bottomIconStyle={bottomIconStyle}
          showNavItems={() => dispatch(useShowNavigationItems())}
        />
      )}
      {/* <ShoppingCart> & <Dropdown> for any size device */}
      <ShoppingCart
        windowWidth={globalWindow?.innerWidth}
        style={onMobileScreen ? bottomIconStyle : topIconStyle}
      />
      <Dropdown
        dropDownTogglerHandler={() => dispatch(useShowNavigationItems())}
        subItems={navItems}
        showDropDown={navItemsActive}
        useOnToolbar
      />
    </Fragment>
  );
};
export default Toolbar;

const MobileIcons = ({
  navItemsActive,
  bottomIconStyle,
  topIconStyle,
  showNavItems,
}) => (
  <Fragment>
    <HBWr
      active={navItemsActive}
      style={bottomIconStyle}
      onClick={showNavItems}
    >
      <HamburgerButton />
    </HBWr>
    <LogoWr active={navItemsActive} style={topIconStyle}>
      <ProductLogo />
    </LogoWr>
  </Fragment>
);

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
