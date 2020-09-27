import React, { useState, useEffect } from "react";
import { useScrollPosition } from "../../Hooks/useScrollPosition";
import { Transition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
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
  useOnToolbar,
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
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    window.scrollTo(scrollY, scrollY * -1);
    if (showDropDown) {
      document.body.style.position = "fixed";
      document.body.style.top = `${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
    }
  }, [showDropDown]);

  return (
    <Transition in={showDropDown} timeout={500} mountOnEnter unmountOnExit>
      {(state) => (
        <Nav state={state} onClick={dropDownTogglerHandler}>
          <List>
          {useOnToolbar && <ToolbarNav subItems={subItems} showDropDown={showDropDown}/>}
          </List>
        </Nav>
      )}
    </Transition>
  );
};
export default Dropdown;

//main navItem
const NavItem = ({ path, label, mouseEntered, mouseLeft }) => {
  return (
    <MenuItem onMouseLeave={mouseLeft} onMouseEnter={mouseEntered}>
      <Link href={path}>
        <a>{label}</a>
      </Link>
    </MenuItem>
  );
};

//navigation for the toolbar
const ToolbarNav = ({ subItems, showDropDown }) => {
  const [allowBackground, setAllowBackground] = useState(false);
  const [backgroundToggledLink, setBackgroundToggledLink] = useState(false);
  useEffect(() => {
    //this piece of state is to avoid the background appearance while the menu opens
    setTimeout(() => {
      setAllowBackground(true);
    }, [550]);
    //remove background images once the toolbar slides up for UI purposes as the mouse will hover those links
    //the cleanup on unmount does not trigger on time, so I moved it before the component unmounts here
    if(!showDropDown) {
      setAllowBackground(false)
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
        path={item.path}
        label={item.label}
        mouseEntered={() => navItemMouseEnter(item.background)}
        mouseLeft={navItemMouseLeave}
      />
      {window.innerWidth >= 640 && (
        <Background
        showBackground={backgroundToggledLink === item.background}
        backgroundImage={allowBackground && item.background}
      />
      )}
    </React.Fragment>
  ));

  return navItems;
};