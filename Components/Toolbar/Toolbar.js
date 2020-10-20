import React, { Fragment, useState } from "react";
import {
  NavigationPanel,
  HBWr,
  HBInnerWr,
  HBSpan,
  Logo,
  LogoWr,
  Cart,
  CartCounter,
} from "../../StyledComponents/toolbarItems";
import { Bee } from "../../public/Icon/Icon";
import Link from "next/link";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "../Dropdown/Dropdown";
import {useClientWindow} from '../../Hooks/useClientWindow';
import { useScrollPosition } from "../../Hooks/useScrollPosition";
import NavigationDB from '../../DB/navigation.json'


const Toolbar = () => {
  const [visible, setVisible] = useState(true);
  const [showNavItems, setShowNavItems] = useState(false)
  const globalWindow = useClientWindow();

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
  let topIconStyle = !visible ? { top: "-20vh" } : { top: "1rem" };
  let bottomIconStyle = !visible ? { bottom: "-20vh" } : { bottom: "1rem" };
  const onMobileScreen = globalWindow?.innerWidth < 640;

  return (
    <Fragment>
      {!onMobileScreen && (
        <NavigationPanel
          tabIndex="0"
          active={showNavItems}
          style={topIconStyle}
        >
          <ProductLogo />
          <HamburgerButton
            active={showNavItems}
            toggleNavItems={() => setShowNavItems(state => !state)}
          />
        </NavigationPanel>
      )}
      {onMobileScreen && (
        <MobileIcons
          navItemsActive={showNavItems}
          bottomIconStyle={bottomIconStyle}
          topIconStyle={topIconStyle}
          showNavItems={() => setShowNavItems(state => !state)}
        />
      )}
      {/* <ShoppingCart> & <Dropdown> for any size device */}
      <ShoppingCart
        windowWidth={globalWindow?.innerWidth}
        style={onMobileScreen ? bottomIconStyle : topIconStyle}
      />
      <Dropdown
        dropDownTogglerHandler={() => setShowNavItems(state => !state)}
        subItems={NavigationDB}
        showDropDown={showNavItems}
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
    <FontAwesomeIcon icon={faShoppingBag} />
    <CartCounter>
      <span>3</span>
    </CartCounter>
  </Cart>
);
