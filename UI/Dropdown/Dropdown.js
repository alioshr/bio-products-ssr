import React, { useState, useEffect } from "react";
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
  const [allowBackground, setAllowBackground] = useState(false);
  const [backgroundToggledLink, setBackgroundToggledLink] = useState(false);
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
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(scrollY, scrollY * -1);
    if (showDropDown) {
      document.body.style.position = "fixed";
      document.body.style.top = `${scrollY}px`;
      //this piece of state is to avoid the background appearance while the menu opens
      setTimeout(() => {setAllowBackground(true)}, [550])
    }
    return () => setAllowBackground(false) //cleanUp on unmount
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
        path={item.path}
        label={item.label}
        mouseEntered={() => navItemMouseEnter(item.background)}
        mouseLeft={navItemMouseLeave}
      />
      <Background
        showBackground={backgroundToggledLink === item.background}
        backgroundImage={allowBackground && item.background}
      />
    </React.Fragment>
  ));

  return (
    <Transition in={showDropDown} timeout={500} mountOnEnter unmountOnExit>
      {(state) => (
        <Wrapper state={state} withBackground={backgroundToggledLink}>
          <List>{navItems}</List>
        </Wrapper>
      )}
    </Transition>
  );
};
export default Dropdown;
