import React, { useState, useEffect, Fragment } from "react";
import { useLockBodyScroll } from "../../Hooks/useLockBodyScroll";
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
  useLockBodyScroll(showDropDown);
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
          <Nav
            state={state}
            onClick={dropDownTogglerHandler}
            usedOnProducts={onProducts}
          >
            <List>
              <NavItems
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
const NavItems = ({ subItems, showDropDown, onProducts }) => {
  const [allowBackground, setAllowBackground] = useState(false);
  const [backgroundToggledLink, setBackgroundToggledLink] = useState(false);
  //Avoid the background appearance on hover while the menu opens
  useEffect(() => {
    setTimeout(() => {
      setAllowBackground(true);
    }, [550]);
    //Avoid the background appearance on hover while the menu opens
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
