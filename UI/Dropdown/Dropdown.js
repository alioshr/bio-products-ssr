import React, { useState, useEffect, Fragment } from "react";
import { useScrollPosition } from "../../Hooks/useScrollPosition";
import { Transition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SocialMedia from "../SocialMedia/SocialMedia";
import {
  TitleWrapper,
  Title,
  Nav,
  List,
  MenuItem,
  Background,
} from "../../StyledComponents/dropdownItems";

//dropdown
const Dropdown = ({
  dropDownTitle,
  subCategoryHandler,
  dropDownTogglerHandler,
  onProducts,
  showDropDown,
  subItems,
}) => {
  const [scrollY, setScrollY] = useState(0);
  useScrollPosition(
    ({ currPos }) => {
      setScrollY(currPos.y);
    },
    [showDropDown],
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
    if (showDropDown) {
      bodyStyle.position = "fixed";
      bodyStyle.top = `${scrollY}px`;
      bodyStyle.left = "0";
      bodyStyle.right = "0";
    }
  }, [showDropDown]);

  return (
    <Fragment>
      {onProducts && (
        <TitleWrapper onClick={dropDownTogglerHandler}>
          <Title>TITLE</Title>
          <FontAwesomeIcon icon={faChevronDown} size="3x" />
        </TitleWrapper>
      )}
      <Transition in={showDropDown} timeout={500} mountOnEnter unmountOnExit>
        {(state) => (
          <Nav state={state} onClick={dropDownTogglerHandler} usedOnProducts={onProducts}>
            <List>
              <ToolbarNav
                onProducts={onProducts}
                subItems={subItems}
                showDropDown={showDropDown}
              />
            </List>
          </Nav>
        )}
      </Transition>
    </Fragment>
  );
};
export default Dropdown;

//navigation for the toolbar
const ToolbarNav = ({ subItems, showDropDown, onProducts }) => {
  const [allowBackground, setAllowBackground] = useState(false);
  const [backgroundToggledLink, setBackgroundToggledLink] = useState(false);
  useEffect(() => {
    //this piece of state is to avoid the background appearance while the menu opens
    setTimeout(() => {
      setAllowBackground(true);
    }, [550]);
    //remove background images once the toolbar slides up for UI purposes as the mouse will hover those links
    //the cleanup on unmount does not trigger on time, so I moved it before the component unmounts here
    if (!showDropDown) {
      setAllowBackground(false);
    }
  }, [showDropDown]);

  const navItemMouseEnter = (path) => {
    setBackgroundToggledLink(path);
  };

  const navItemMouseLeave = () => {
    setBackgroundToggledLink(false);
  };

  const navItems = subItems.map((item) => (
    <React.Fragment key={item.id}>
      <NavItem
        onProducts={onProducts}
        path={item.path}
        label={item.label}
        mouseEntered={() => navItemMouseEnter(item.background)}
        mouseLeft={navItemMouseLeave}
      />
      {window.innerWidth > 640 && (
        <Background
          showBackground={backgroundToggledLink === item.background}
          backgroundImage={allowBackground && item.background}
        />
      )}
    </React.Fragment>
  ));

  return (
    <Fragment>
      {navItems}
      <SocialMedia iconSize="4x" pattern="menu" />
    </Fragment>
  );
};

//main navItem
const NavItem = ({
  path,
  label,
  mouseEntered,
  mouseLeft,
  onProducts,
  chooseProduct,
}) => {
  let item = (
    <Link href={path}>
      <a>{label}</a>
    </Link>
  );
  onProducts ? (item = <span>{label}</span>) : null;
  return (
    <MenuItem
      onMouseLeave={mouseLeft}
      onMouseEnter={mouseEntered}
      onClick={chooseProduct}
    >
      {item}
    </MenuItem>
  );
};
