import React, { useState, useEffect, Fragment } from "react";
import { useLockBodyScroll } from "../../Hooks/useLockBodyScroll";
import { Transition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SocialMedia from "../../UI/SocialMedia/SocialMedia";
import { useDispatch } from 'react-redux';
import { useToggleCatalog } from '../../store/actions/actionsIndex'
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
          <Title>{dropDownTitle}</Title>
          <FontAwesomeIcon icon={faChevronDown} size="2x" />
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

const NavItems = ({ subItems, showDropDown, onProducts }) => {
  const [allowBackground, setAllowBackground] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  //Avoid the background appearance on hover while the menu opens
  useEffect(() => {
    setTimeout(() => {
      setAllowBackground(true);
    }, [550]);
  }, [showDropDown]);

  const navItemMouseEnter = (path) => {
    setShowBackground(path);
  };

  const navItemMouseLeave = () => {
    setShowBackground(false);
  };

  const navItems = subItems.map((item) => (
    <React.Fragment key={item.id}>
      <NavItem
        categoryId={item.id}
        onProducts={onProducts}
        path={item.path}
        label={item.label}
        mouseEntered={() => navItemMouseEnter(item.background)}
        mouseLeft={navItemMouseLeave}
      />
      {window.innerWidth > 640 && (
        <Background
          showBackground={showBackground === item.background}
          backgroundImage={allowBackground && item.background}
        />
      )}
    </React.Fragment>
  ));

  return (
    <Fragment>
      {navItems}
      <SocialMedia pattern="menu" />
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
  categoryId
}) => {
  const dispatch = useDispatch();
  let item = (
    <Link href={path}>
      <a>{label}</a>
    </Link>
  );
  let toggledCategory;
  if(onProducts) {
    item = <span>{label}</span>;
    toggledCategory = () => dispatch(useToggleCatalog(categoryId));
  }
  return (
    <MenuItem
      onMouseLeave={mouseLeft}
      onMouseEnter={mouseEntered}
      onClick={toggledCategory}
    >
      {item}
    </MenuItem>
  );
};
