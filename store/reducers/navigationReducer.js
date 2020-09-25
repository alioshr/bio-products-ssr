import { setState } from "../../Utilities/utilities";
import * as actions from "../actions/navigationActions";

const initialState = {
  showNavItems: false,
  navItems: [
    {
      id: "Home",
      label: "INÍCIO",
      path: "/",
      background: '/NavigationItems/Home/home.jpg'
     },
     {
      id: "login",
      label: "LOGIN",
      path: "/Login",
      background: '/NavigationItems/Login/login.jpg'
     },
     {
      id: "about",
      label: "SOBRE NÓS",
      path: "/sobre-nos",
      background: '/NavigationItems/About/about.jpg'
     },
     {
      id: "faq",
      label: "FAQ",
      path: "/faq",
      background: '/NavigationItems/Faq.faq.jpg'
     }
  ]
};

const toggleSideDrawer = (state, action) => {
  return setState(state, {
    showNavItems: !state.showNavItems,
  });
};

export const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SHOW_NAVIGATION_ITEMS:
      return toggleSideDrawer(state, action);
    default:
      return state;
  }
};
