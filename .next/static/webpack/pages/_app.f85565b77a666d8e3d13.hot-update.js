webpackHotUpdate_N_E("pages/_app",{

/***/ "./Components/Navigation/Toolbar/Toolbar.js":
/*!**************************************************!*\
  !*** ./Components/Navigation/Toolbar/Toolbar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n/* harmony import */ var _StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../StyledComponents/toolbarItems */ \"./StyledComponents/toolbarItems.js\");\n/* harmony import */ var _public_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/Icon/Icon */ \"./public/Icon/Icon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_react-dom@16.13.1/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../UI/Dropdown/Dropdown */ \"./UI/Dropdown/Dropdown.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Navigation/Toolbar/Toolbar.js\",\n    _s4 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar Toolbar = function Toolbar(_ref) {\n  _s4();\n\n  var _s = $RefreshSig$(),\n      _s2 = $RefreshSig$(),\n      _s3 = $RefreshSig$();\n\n  var visible = _ref.visible;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      globalWindow = _useState[0],\n      setGlobalWindow = _useState[1];\n\n  var navItemsActive = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.navigation.showNavItems;\n  });\n  var navItems = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.navigation.navItems;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setGlobalWindow(window);\n  }, []);\n  var topIconStyle = !visible ? {\n    top: \"-10vh\"\n  } : {\n    top: \"1rem\"\n  };\n  var bottomIconStyle = !visible ? {\n    bottom: \"-10vh\"\n  } : {\n    bottom: \"1rem\"\n  };\n\n  var iconVisibility = function iconVisibility(visible, top, bottom) {\n    return visible === 'false' && top === \"top\" ? {\n      top: \"-10vh\"\n    } : {\n      top: \"1rem\"\n    };\n  };\n\n  !visible && bottom === \"bottom\" ? {\n    bottom: \"-10vh\"\n  } : {\n    bottom: \"1rem\"\n  };\n  console.log(iconVisibility('false', 'top', null));\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"NavigationPanel\"], {\n    tabIndex: \"0\",\n    active: navItemsActive,\n    style: topIconStyle,\n    visible: visible,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, __jsx(ProductLogo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }), __jsx(HamburgerButton, {\n    active: navItemsActive,\n    toggleNavItems: _s(function () {\n      _s();\n\n      return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"])());\n    }, \"vUmtifoU2/HcfwogqKF++1e+zoY=\", false, function () {\n      return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"]];\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBWr\"], {\n    active: navItemsActive,\n    style: bottomIconStyle,\n    visible: visible,\n    onClick: _s2(function () {\n      _s2();\n\n      return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"])());\n    }, \"vUmtifoU2/HcfwogqKF++1e+zoY=\", false, function () {\n      return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"]];\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, __jsx(HamburgerButton, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"LogoWr\"], {\n    active: navItemsActive,\n    visible: visible,\n    style: topIconStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, __jsx(ProductLogo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  })), __jsx(ShoppingCart, {\n    visible: visible,\n    windowWidth: globalWindow === null || globalWindow === void 0 ? void 0 : globalWindow.innerWidth,\n    style: (globalWindow === null || globalWindow === void 0 ? void 0 : globalWindow.innerWidth) < 640 ? bottomIconStyle : topIconStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }), __jsx(_UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    dropDownTogglerHandler: _s3(function () {\n      _s3();\n\n      return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"])());\n    }, \"vUmtifoU2/HcfwogqKF++1e+zoY=\", false, function () {\n      return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"]];\n    }),\n    subItems: navItems,\n    showDropDown: navItemsActive,\n    useOnToolbar: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s4(Toolbar, \"5uYw5QDQa5seDXI0F8FtSM+mdCM=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = Toolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toolbar);\n\nvar HamburgerButton = function HamburgerButton(_ref2) {\n  var active = _ref2.active,\n      toggleNavItems = _ref2.toggleNavItems;\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBInnerWr\"], {\n    active: active,\n    onClick: toggleNavItems,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c2 = HamburgerButton;\n\nvar ProductLogo = function ProductLogo() {\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"Logo\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 3\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }, __jsx(_public_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"Bee\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  }))));\n};\n\n_c3 = ProductLogo;\n\nvar ShoppingCart = function ShoppingCart(_ref3) {\n  var style = _ref3.style;\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"Cart\"], {\n    style: style,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 3\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faShoppingBag\"],\n    size: \"2x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 5\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"CartCounter\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }\n  }, \"3\")));\n};\n\n_c4 = ShoppingCart;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Toolbar\");\n$RefreshReg$(_c2, \"HamburgerButton\");\n$RefreshReg$(_c3, \"ProductLogo\");\n$RefreshReg$(_c4, \"ShoppingCart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9OYXZpZ2F0aW9uL1Rvb2xiYXIvVG9vbGJhci5qcz85NzE3Il0sIm5hbWVzIjpbIlRvb2xiYXIiLCJ2aXNpYmxlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiZ2xvYmFsV2luZG93Iiwic2V0R2xvYmFsV2luZG93IiwibmF2SXRlbXNBY3RpdmUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwibmF2aWdhdGlvbiIsInNob3dOYXZJdGVtcyIsIm5hdkl0ZW1zIiwidXNlRWZmZWN0Iiwid2luZG93IiwidG9wSWNvblN0eWxlIiwidG9wIiwiYm90dG9tSWNvblN0eWxlIiwiYm90dG9tIiwiaWNvblZpc2liaWxpdHkiLCJjb25zb2xlIiwibG9nIiwidXNlU2hvd05hdmlnYXRpb25JdGVtcyIsImlubmVyV2lkdGgiLCJIYW1idXJnZXJCdXR0b24iLCJhY3RpdmUiLCJ0b2dnbGVOYXZJdGVtcyIsIlByb2R1Y3RMb2dvIiwiU2hvcHBpbmdDYXJ0Iiwic3R5bGUiLCJmYVNob3BwaW5nQmFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFpQjtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDL0IsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEK0Isa0JBRVNDLHNEQUFRLENBQUMsSUFBRCxDQUZqQjtBQUFBLE1BRXhCQyxZQUZ3QjtBQUFBLE1BRVZDLGVBRlU7O0FBRy9CLE1BQU1DLGNBQWMsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxVQUFOLENBQWlCQyxZQUE1QjtBQUFBLEdBQUQsQ0FBbEM7QUFDQSxNQUFNQyxRQUFRLEdBQUdKLCtEQUFX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QUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLENBRGtCO0FBQUEsQ0FBcEI7O01BQU1BLFc7O0FBVU4sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUNuQixNQUFDLG1FQUFEO0FBQU0sU0FBSyxFQUFFQSxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRUMsK0VBQXZCO0FBQXNDLFFBQUksRUFBQyxJQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREYsQ0FGRixDQURtQjtBQUFBLENBQXJCOztNQUFNRixZIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9OYXZpZ2F0aW9uL1Rvb2xiYXIvVG9vbGJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VTaG93TmF2aWdhdGlvbkl0ZW1zIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvYWN0aW9uc0luZGV4XCI7XG5pbXBvcnQge1xuICBOYXZpZ2F0aW9uUGFuZWwsXG4gIEhCV3IsXG4gIEhCSW5uZXJXcixcbiAgSEJTcGFuLFxuICBMb2dvLFxuICBMb2dvV3IsXG4gIENhcnQsXG4gIENhcnRDb3VudGVyLFxufSBmcm9tIFwiLi4vLi4vLi4vU3R5bGVkQ29tcG9uZW50cy90b29sYmFySXRlbXNcIjtcbmltcG9ydCB7IEJlZSB9IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvSWNvbi9JY29uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBmYVNob3BwaW5nQmFnIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi8uLi8uLi9VSS9Ecm9wZG93bi9Ecm9wZG93blwiO1xuXG5jb25zdCBUb29sYmFyID0gKHsgdmlzaWJsZSB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW2dsb2JhbFdpbmRvdywgc2V0R2xvYmFsV2luZG93XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBuYXZJdGVtc0FjdGl2ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubmF2aWdhdGlvbi5zaG93TmF2SXRlbXMpO1xuICBjb25zdCBuYXZJdGVtcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubmF2aWdhdGlvbi5uYXZJdGVtcyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRHbG9iYWxXaW5kb3cod2luZG93KTtcbiAgfSwgW10pO1xuXG4gIGxldCB0b3BJY29uU3R5bGUgPSAhdmlzaWJsZSA/IHsgdG9wOiBcIi0xMHZoXCIgfSA6IHsgdG9wOiBcIjFyZW1cIiB9O1xuICBsZXQgYm90dG9tSWNvblN0eWxlID0gIXZpc2libGUgPyB7IGJvdHRvbTogXCItMTB2aFwiIH0gOiB7IGJvdHRvbTogXCIxcmVtXCIgfTtcblxuICBjb25zdCBpY29uVmlzaWJpbGl0eSA9ICh2aXNpYmxlLCB0b3AsIGJvdHRvbSkgPT4gXG4gICAgdmlzaWJsZSA9PT0gJ2ZhbHNlJyAmJiB0b3AgPT09IFwidG9wXCIgPyB7IHRvcDogXCItMTB2aFwiIH0gOiB7IHRvcDogXCIxcmVtXCIgfTtcbiAgICAhdmlzaWJsZSAmJiBib3R0b20gPT09IFwiYm90dG9tXCIgPyB7IGJvdHRvbTogXCItMTB2aFwiIH0gOiB7IGJvdHRvbTogXCIxcmVtXCIgfTtcbiAgXG5cbiAgY29uc29sZS5sb2coaWNvblZpc2liaWxpdHkoJ2ZhbHNlJywgJ3RvcCcsIG51bGwpKVxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgey8qIDxOYXZpZ2F0aW9uUGFuZWw+IGZvciBkZXNrdG9wIG9ubHkgKi99XG4gICAgICA8TmF2aWdhdGlvblBhbmVsXG4gICAgICAgIHRhYkluZGV4PVwiMFwiXG4gICAgICAgIGFjdGl2ZT17bmF2SXRlbXNBY3RpdmV9XG4gICAgICAgIHN0eWxlPXt0b3BJY29uU3R5bGV9XG4gICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICA+XG4gICAgICAgIDxQcm9kdWN0TG9nbyAvPlxuICAgICAgICA8SGFtYnVyZ2VyQnV0dG9uXG4gICAgICAgICAgYWN0aXZlPXtuYXZJdGVtc0FjdGl2ZX1cbiAgICAgICAgICB0b2dnbGVOYXZJdGVtcz17KCkgPT4gZGlzcGF0Y2godXNlU2hvd05hdmlnYXRpb25JdGVtcygpKX1cbiAgICAgICAgLz5cbiAgICAgIDwvTmF2aWdhdGlvblBhbmVsPlxuICAgICAgey8qIDxIQldyPiAmIDxMb2dvV3I+IGZvciBtb2JpbGUgb25seSAqL31cbiAgICAgIDxIQldyXG4gICAgICAgIGFjdGl2ZT17bmF2SXRlbXNBY3RpdmV9XG4gICAgICAgIHN0eWxlPXtib3R0b21JY29uU3R5bGV9XG4gICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHVzZVNob3dOYXZpZ2F0aW9uSXRlbXMoKSl9XG4gICAgICA+XG4gICAgICAgIDxIYW1idXJnZXJCdXR0b24gLz5cbiAgICAgIDwvSEJXcj5cbiAgICAgIDxMb2dvV3IgYWN0aXZlPXtuYXZJdGVtc0FjdGl2ZX0gdmlzaWJsZT17dmlzaWJsZX0gc3R5bGU9e3RvcEljb25TdHlsZX0+XG4gICAgICAgIDxQcm9kdWN0TG9nbyAvPlxuICAgICAgPC9Mb2dvV3I+XG4gICAgICB7LyogPFNob3BwaW5nQ2FydD4gJiA8RHJvcGRvd24+IGZvciBhbnkgc2l6ZSBkZXZpY2UgKi99XG4gICAgICA8U2hvcHBpbmdDYXJ0XG4gICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgIHdpbmRvd1dpZHRoPXtnbG9iYWxXaW5kb3c/LmlubmVyV2lkdGh9XG4gICAgICAgIHN0eWxlPXtnbG9iYWxXaW5kb3c/LmlubmVyV2lkdGggPCA2NDAgPyBib3R0b21JY29uU3R5bGUgOiB0b3BJY29uU3R5bGV9XG4gICAgICAvPlxuICAgICAgPERyb3Bkb3duXG4gICAgICAgIGRyb3BEb3duVG9nZ2xlckhhbmRsZXI9eygpID0+IGRpc3BhdGNoKHVzZVNob3dOYXZpZ2F0aW9uSXRlbXMoKSl9XG4gICAgICAgIHN1Ykl0ZW1zPXtuYXZJdGVtc31cbiAgICAgICAgc2hvd0Ryb3BEb3duPXtuYXZJdGVtc0FjdGl2ZX1cbiAgICAgICAgdXNlT25Ub29sYmFyXG4gICAgICAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb29sYmFyO1xuXG5jb25zdCBIYW1idXJnZXJCdXR0b24gPSAoeyBhY3RpdmUsIHRvZ2dsZU5hdkl0ZW1zIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SEJJbm5lcldyIGFjdGl2ZT17YWN0aXZlfSBvbkNsaWNrPXt0b2dnbGVOYXZJdGVtc30+XG4gICAgICA8SEJTcGFuIC8+XG4gICAgICA8SEJTcGFuIC8+XG4gICAgICA8SEJTcGFuIC8+XG4gICAgPC9IQklubmVyV3I+XG4gICk7XG59O1xuXG5jb25zdCBQcm9kdWN0TG9nbyA9ICgpID0+IChcbiAgPExvZ28+XG4gICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgIDxhPlxuICAgICAgICA8QmVlIC8+XG4gICAgICA8L2E+XG4gICAgPC9MaW5rPlxuICA8L0xvZ28+XG4pO1xuXG5jb25zdCBTaG9wcGluZ0NhcnQgPSAoeyBzdHlsZSB9KSA9PiAoXG4gIDxDYXJ0IHN0eWxlPXtzdHlsZX0+XG4gICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNob3BwaW5nQmFnfSBzaXplPVwiMnhcIiAvPlxuICAgIDxDYXJ0Q291bnRlcj5cbiAgICAgIDxzcGFuPjM8L3NwYW4+XG4gICAgPC9DYXJ0Q291bnRlcj5cbiAgPC9DYXJ0PlxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Navigation/Toolbar/Toolbar.js\n");

/***/ })

})