webpackHotUpdate_N_E("pages/_app",{

/***/ "./Components/Navigation/Toolbar/Toolbar.js":
/*!**************************************************!*\
  !*** ./Components/Navigation/Toolbar/Toolbar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n/* harmony import */ var _StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../StyledComponents/toolbarItems */ \"./StyledComponents/toolbarItems.js\");\n/* harmony import */ var _public_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/Icon/Icon */ \"./public/Icon/Icon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_react-dom@16.13.1/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../UI/Dropdown/Dropdown */ \"./UI/Dropdown/Dropdown.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Navigation/Toolbar/Toolbar.js\",\n    _s4 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar Toolbar = function Toolbar(_ref) {\n  _s4();\n\n  var _s = $RefreshSig$(),\n      _s2 = $RefreshSig$(),\n      _s3 = $RefreshSig$();\n\n  var visible = _ref.visible;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      globalWindow = _useState[0],\n      setGlobalWindow = _useState[1];\n\n  var navItemsActive = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.navigation.showNavItems;\n  });\n  var navItems = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.navigation.navItems;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setGlobalWindow(window);\n  }, []);\n  var topIconStyle = !visible ? {\n    top: \"-10vh\"\n  } : {\n    top: \"1rem\"\n  };\n  var bottomIconStyle = !visible ? {\n    bottom: \"-10vh\"\n  } : {\n    bottom: \"1rem\"\n  };\n\n  var iconVisibility = function iconVisibility(visible, top, bottom) {\n    !visible && top ? {\n      top: \"-10vh\"\n    } : {\n      top: \"1rem\"\n    };\n    !visible && bottom ? {\n      bottom: \"-10vh\"\n    } : {\n      bottom: \"1rem\"\n    };\n  };\n\n  console.log(icon);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"NavigationPanel\"], {\n    tabIndex: \"0\",\n    active: navItemsActive,\n    style: topIconStyle,\n    visible: visible,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, __jsx(ProductLogo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }), __jsx(HamburgerButton, {\n    active: navItemsActive,\n    toggleNavItems: _s(function () {\n      _s();\n\n      return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"])());\n    }, \"vUmtifoU2/HcfwogqKF++1e+zoY=\", false, function () {\n      return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"]];\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBWr\"], {\n    active: navItemsActive,\n    style: bottomIconStyle,\n    visible: visible,\n    onClick: _s2(function () {\n      _s2();\n\n      return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"])());\n    }, \"vUmtifoU2/HcfwogqKF++1e+zoY=\", false, function () {\n      return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"]];\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, __jsx(HamburgerButton, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"LogoWr\"], {\n    active: navItemsActive,\n    visible: visible,\n    style: topIconStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, __jsx(ProductLogo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  })), __jsx(ShoppingCart, {\n    visible: visible,\n    windowWidth: globalWindow === null || globalWindow === void 0 ? void 0 : globalWindow.innerWidth,\n    style: (globalWindow === null || globalWindow === void 0 ? void 0 : globalWindow.innerWidth) < 640 ? bottomIconStyle : topIconStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }), __jsx(_UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    dropDownTogglerHandler: _s3(function () {\n      _s3();\n\n      return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"])());\n    }, \"vUmtifoU2/HcfwogqKF++1e+zoY=\", false, function () {\n      return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"]];\n    }),\n    subItems: navItems,\n    showDropDown: navItemsActive,\n    useOnToolbar: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s4(Toolbar, \"5uYw5QDQa5seDXI0F8FtSM+mdCM=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = Toolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toolbar);\n\nvar HamburgerButton = function HamburgerButton(_ref2) {\n  var active = _ref2.active,\n      toggleNavItems = _ref2.toggleNavItems;\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBInnerWr\"], {\n    active: active,\n    onClick: toggleNavItems,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c2 = HamburgerButton;\n\nvar ProductLogo = function ProductLogo() {\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"Logo\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 3\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }, __jsx(_public_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"Bee\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  }))));\n};\n\n_c3 = ProductLogo;\n\nvar ShoppingCart = function ShoppingCart(_ref3) {\n  var style = _ref3.style;\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"Cart\"], {\n    style: style,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 3\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faShoppingBag\"],\n    size: \"2x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 5\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"CartCounter\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }\n  }, \"3\")));\n};\n\n_c4 = ShoppingCart;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Toolbar\");\n$RefreshReg$(_c2, \"HamburgerButton\");\n$RefreshReg$(_c3, \"ProductLogo\");\n$RefreshReg$(_c4, \"ShoppingCart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9OYXZpZ2F0aW9uL1Rvb2xiYXIvVG9vbGJhci5qcz85NzE3Il0sIm5hbWVzIjpbIlRvb2xiYXIiLCJ2aXNpYmxlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiZ2xvYmFsV2luZG93Iiwic2V0R2xvYmFsV2luZG93IiwibmF2SXRlbXNBY3RpdmUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwibmF2aWdhdGlvbiIsInNob3dOYXZJdGVtcyIsIm5hdkl0ZW1zIiwidXNlRWZmZWN0Iiwid2luZG93IiwidG9wSWNvblN0eWxlIiwidG9wIiwiYm90dG9tSWNvblN0eWxlIiwiYm90dG9tIiwiaWNvblZpc2liaWxpdHkiLCJjb25zb2xlIiwibG9nIiwiaWNvbiIsInVzZVNob3dOYXZpZ2F0aW9uSXRlbXMiLCJpbm5lcldpZHRoIiwiSGFtYnVyZ2VyQnV0dG9uIiwiYWN0aXZlIiwidG9nZ2xlTmF2SXRlbXMiLCJQcm9kdWN0TG9nbyIsIlNob3BwaW5nQ2FydCIsInN0eWxlIiwiZmFTaG9wcGluZ0JhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBaUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQy9CLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRCtCLGtCQUVTQyxzREFBUSxDQUFDLElBQUQsQ0FGakI7QUFBQSxNQUV4QkMsWUFGd0I7QUFBQSxNQUVWQyxlQUZVOztBQUcvQixNQUFNQyxjQUFjLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsWUFBNUI7QUFBQSxHQUFELENBQWxDO0FBQ0EsTUFBTUMsUUFBUSxHQUFH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RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLENBRGtCO0FBQUEsQ0FBcEI7O01BQU1BLFc7O0FBVU4sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUNuQixNQUFDLG1FQUFEO0FBQU0sU0FBSyxFQUFFQSxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRUMsK0VBQXZCO0FBQXNDLFFBQUksRUFBQyxJQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREYsQ0FGRixDQURtQjtBQUFBLENBQXJCOztNQUFNRixZIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9OYXZpZ2F0aW9uL1Rvb2xiYXIvVG9vbGJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VTaG93TmF2aWdhdGlvbkl0ZW1zIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvYWN0aW9uc0luZGV4XCI7XG5pbXBvcnQge1xuICBOYXZpZ2F0aW9uUGFuZWwsXG4gIEhCV3IsXG4gIEhCSW5uZXJXcixcbiAgSEJTcGFuLFxuICBMb2dvLFxuICBMb2dvV3IsXG4gIENhcnQsXG4gIENhcnRDb3VudGVyLFxufSBmcm9tIFwiLi4vLi4vLi4vU3R5bGVkQ29tcG9uZW50cy90b29sYmFySXRlbXNcIjtcbmltcG9ydCB7IEJlZSB9IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvSWNvbi9JY29uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBmYVNob3BwaW5nQmFnIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi8uLi8uLi9VSS9Ecm9wZG93bi9Ecm9wZG93blwiO1xuXG5jb25zdCBUb29sYmFyID0gKHsgdmlzaWJsZSB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW2dsb2JhbFdpbmRvdywgc2V0R2xvYmFsV2luZG93XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBuYXZJdGVtc0FjdGl2ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubmF2aWdhdGlvbi5zaG93TmF2SXRlbXMpO1xuICBjb25zdCBuYXZJdGVtcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubmF2aWdhdGlvbi5uYXZJdGVtcyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRHbG9iYWxXaW5kb3cod2luZG93KTtcbiAgfSwgW10pO1xuXG4gIGxldCB0b3BJY29uU3R5bGUgPSAhdmlzaWJsZSA/IHsgdG9wOiBcIi0xMHZoXCIgfSA6IHsgdG9wOiBcIjFyZW1cIiB9O1xuICBsZXQgYm90dG9tSWNvblN0eWxlID0gIXZpc2libGUgPyB7IGJvdHRvbTogXCItMTB2aFwiIH0gOiB7IGJvdHRvbTogXCIxcmVtXCIgfTtcblxuICBjb25zdCBpY29uVmlzaWJpbGl0eSA9ICh2aXNpYmxlLCB0b3AsIGJvdHRvbSkgPT4ge1xuICAgICF2aXNpYmxlICYmIHRvcCA/IHsgdG9wOiBcIi0xMHZoXCIgfSA6IHsgdG9wOiBcIjFyZW1cIiB9O1xuICAgICF2aXNpYmxlICYmIGJvdHRvbSA/IHsgYm90dG9tOiBcIi0xMHZoXCIgfSA6IHsgYm90dG9tOiBcIjFyZW1cIiB9O1xuICB9XG5cbiAgY29uc29sZS5sb2coaWNvbilcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHsvKiA8TmF2aWdhdGlvblBhbmVsPiBmb3IgZGVza3RvcCBvbmx5ICovfVxuICAgICAgPE5hdmlnYXRpb25QYW5lbFxuICAgICAgICB0YWJJbmRleD1cIjBcIlxuICAgICAgICBhY3RpdmU9e25hdkl0ZW1zQWN0aXZlfVxuICAgICAgICBzdHlsZT17dG9wSWNvblN0eWxlfVxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgPlxuICAgICAgICA8UHJvZHVjdExvZ28gLz5cbiAgICAgICAgPEhhbWJ1cmdlckJ1dHRvblxuICAgICAgICAgIGFjdGl2ZT17bmF2SXRlbXNBY3RpdmV9XG4gICAgICAgICAgdG9nZ2xlTmF2SXRlbXM9eygpID0+IGRpc3BhdGNoKHVzZVNob3dOYXZpZ2F0aW9uSXRlbXMoKSl9XG4gICAgICAgIC8+XG4gICAgICA8L05hdmlnYXRpb25QYW5lbD5cbiAgICAgIHsvKiA8SEJXcj4gJiA8TG9nb1dyPiBmb3IgbW9iaWxlIG9ubHkgKi99XG4gICAgICA8SEJXclxuICAgICAgICBhY3RpdmU9e25hdkl0ZW1zQWN0aXZlfVxuICAgICAgICBzdHlsZT17Ym90dG9tSWNvblN0eWxlfVxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh1c2VTaG93TmF2aWdhdGlvbkl0ZW1zKCkpfVxuICAgICAgPlxuICAgICAgICA8SGFtYnVyZ2VyQnV0dG9uIC8+XG4gICAgICA8L0hCV3I+XG4gICAgICA8TG9nb1dyIGFjdGl2ZT17bmF2SXRlbXNBY3RpdmV9IHZpc2libGU9e3Zpc2libGV9IHN0eWxlPXt0b3BJY29uU3R5bGV9PlxuICAgICAgICA8UHJvZHVjdExvZ28gLz5cbiAgICAgIDwvTG9nb1dyPlxuICAgICAgey8qIDxTaG9wcGluZ0NhcnQ+ICYgPERyb3Bkb3duPiBmb3IgYW55IHNpemUgZGV2aWNlICovfVxuICAgICAgPFNob3BwaW5nQ2FydFxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICB3aW5kb3dXaWR0aD17Z2xvYmFsV2luZG93Py5pbm5lcldpZHRofVxuICAgICAgICBzdHlsZT17Z2xvYmFsV2luZG93Py5pbm5lcldpZHRoIDwgNjQwID8gYm90dG9tSWNvblN0eWxlIDogdG9wSWNvblN0eWxlfVxuICAgICAgLz5cbiAgICAgIDxEcm9wZG93blxuICAgICAgICBkcm9wRG93blRvZ2dsZXJIYW5kbGVyPXsoKSA9PiBkaXNwYXRjaCh1c2VTaG93TmF2aWdhdGlvbkl0ZW1zKCkpfVxuICAgICAgICBzdWJJdGVtcz17bmF2SXRlbXN9XG4gICAgICAgIHNob3dEcm9wRG93bj17bmF2SXRlbXNBY3RpdmV9XG4gICAgICAgIHVzZU9uVG9vbGJhclxuICAgICAgLz5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9vbGJhcjtcblxuY29uc3QgSGFtYnVyZ2VyQnV0dG9uID0gKHsgYWN0aXZlLCB0b2dnbGVOYXZJdGVtcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEhCSW5uZXJXciBhY3RpdmU9e2FjdGl2ZX0gb25DbGljaz17dG9nZ2xlTmF2SXRlbXN9PlxuICAgICAgPEhCU3BhbiAvPlxuICAgICAgPEhCU3BhbiAvPlxuICAgICAgPEhCU3BhbiAvPlxuICAgIDwvSEJJbm5lcldyPlxuICApO1xufTtcblxuY29uc3QgUHJvZHVjdExvZ28gPSAoKSA9PiAoXG4gIDxMb2dvPlxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICA8YT5cbiAgICAgICAgPEJlZSAvPlxuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgPC9Mb2dvPlxuKTtcblxuY29uc3QgU2hvcHBpbmdDYXJ0ID0gKHsgc3R5bGUgfSkgPT4gKFxuICA8Q2FydCBzdHlsZT17c3R5bGV9PlxuICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaG9wcGluZ0JhZ30gc2l6ZT1cIjJ4XCIgLz5cbiAgICA8Q2FydENvdW50ZXI+XG4gICAgICA8c3Bhbj4zPC9zcGFuPlxuICAgIDwvQ2FydENvdW50ZXI+XG4gIDwvQ2FydD5cbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Navigation/Toolbar/Toolbar.js\n");

/***/ })

})