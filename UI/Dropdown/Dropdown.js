import React, { Fragment, useState, useEffect } from "react";
import { useScrollPosition } from "../../Hooks/useScrollPosition";
import { Transition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
  Wrapper,
  List,
  MenuItem,
  Background,
} from "../../StyledComponents/dropdownItems";

const NavItem = ({ path, label, mouseEntered, mouseLeft }) => {
  return (
    <MenuItem onMouseLeave={mouseLeft} onMouseEnter={mouseEntered}>
      <Link href={path}>
        <a>{label}</a>
      </Link>
    </MenuItem>
  );
};

const Dropdown = ({
  dropDownTitle,
  subCategoryHandler,
  useOnToolbar,
  dropDownTogglerHandler,
  showDropDown,
  subItems,
}) => {
  const [backgroundImage, setBackgroundImage] = useState(false);
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
  console.log(showDropDown);
  //this is to avoid top scrolling when entering/leaving the dropdown
  useEffect(() => {
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(scrollY, scrollY * -1);
    if (showDropDown) {
      document.body.style.position = "fixed";
      document.body.style.top = `${scrollY}px`;
    }
  }, [showDropDown]);

  const navItemMouseEnter = (path) => {
    setBackgroundImage(path);
  };

  const navItemMouseLeave = () => {
    setBackgroundImage(false);
  };

  const navItems = subItems.map((item) => (
    <Fragment>
      <NavItem
        path={item.path}
        label={item.label}
        mouseEntered={() => navItemMouseEnter(item.background)}
        mouseLeft={navItemMouseLeave}
      />
      <Background
        withBackground={backgroundImage === item.background}
        style={{
          background: `linear-gradient(to top, rgba(86, 20, 238, 0.5) 100%, transparent), 
          url(${item.background}) center center/cover no-repeat fixed`
        }}
      />
    </Fragment>
  ));

  return (
    <Wrapper withBackground={backgroundImage}>
      <List>{navItems}</List>
    </Wrapper>
  );
};
export default Dropdown;
