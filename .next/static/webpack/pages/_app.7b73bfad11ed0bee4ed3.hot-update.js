webpackHotUpdate_N_E("pages/_app",{

/***/ "./Components/Navigation/Toolbar/Toolbar.js":
/*!**************************************************!*\
  !*** ./Components/Navigation/Toolbar/Toolbar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n/* harmony import */ var _StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../StyledComponents/toolbarItems */ \"./StyledComponents/toolbarItems.js\");\n/* harmony import */ var _public_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/Icon/Icon */ \"./public/Icon/Icon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_react-dom@16.13.1/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../UI/Dropdown/Dropdown */ \"./UI/Dropdown/Dropdown.js\");\n/* harmony import */ var _Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Hooks/useClientWindow */ \"./Hooks/useClientWindow.js\");\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Navigation/Toolbar/Toolbar.js\",\n    _s4 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nvar Toolbar = function Toolbar() {\n  _s4();\n\n  var _s = $RefreshSig$(),\n      _s2 = $RefreshSig$(),\n      _s3 = $RefreshSig$();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      visible = _useState[0],\n      setVisible = _useState[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  var globalWindow = Object(_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_9__[\"useClientWindow\"])();\n  var navItemsActive = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.navigation.showNavItems;\n  });\n  var navItems = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.navigation.navItems;\n  });\n  Object(_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_10__[\"useScrollPosition\"])(function (_ref) {\n    var prevPos = _ref.prevPos,\n        currPos = _ref.currPos,\n        height = _ref.height;\n    console.log('height', height);\n    var isShow = currPos.y >= prevPos.y;\n    if (isShow !== visible) setVisible(isShow);\n  }, [visible], false, true, 150);\n  var topIconStyle = !visible ? {\n    top: \"-20vh\"\n  } : {\n    top: \"1rem\"\n  };\n  var bottomIconStyle = !visible ? {\n    bottom: \"-20vh\"\n  } : {\n    bottom: \"1rem\"\n  };\n  var onMobileScreen = (globalWindow === null || globalWindow === void 0 ? void 0 : globalWindow.innerWidth) < 640;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, !onMobileScreen && __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"NavigationPanel\"], {\n    tabIndex: \"0\",\n    active: navItemsActive,\n    style: topIconStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(ProductLogo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }), __jsx(HamburgerButton, {\n    active: navItemsActive,\n    toggleNavItems: _s(function () {\n      _s();\n\n      return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"])());\n    }, \"vUmtifoU2/HcfwogqKF++1e+zoY=\", false, function () {\n      return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"]];\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  })), onMobileScreen && __jsx(MobileIcons, {\n    navItemsActive: navItemsActive,\n    bottomIconStyle: bottomIconStyle,\n    topIconStyle: topIconStyle,\n    showNavItems: _s2(function () {\n      _s2();\n\n      return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"])());\n    }, \"vUmtifoU2/HcfwogqKF++1e+zoY=\", false, function () {\n      return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"]];\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }), __jsx(ShoppingCart, {\n    windowWidth: globalWindow === null || globalWindow === void 0 ? void 0 : globalWindow.innerWidth,\n    style: onMobileScreen ? bottomIconStyle : topIconStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }), __jsx(_UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    dropDownTogglerHandler: _s3(function () {\n      _s3();\n\n      return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"])());\n    }, \"vUmtifoU2/HcfwogqKF++1e+zoY=\", false, function () {\n      return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"]];\n    }),\n    subItems: navItems,\n    showDropDown: navItemsActive,\n    useOnToolbar: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s4(Toolbar, \"Qd8i6yDBIAtmlvY881qwzj/vT38=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"], _Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_9__[\"useClientWindow\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_10__[\"useScrollPosition\"]];\n});\n\n_c = Toolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toolbar);\n\nvar MobileIcons = function MobileIcons(_ref2) {\n  var navItemsActive = _ref2.navItemsActive,\n      bottomIconStyle = _ref2.bottomIconStyle,\n      topIconStyle = _ref2.topIconStyle,\n      showNavItems = _ref2.showNavItems;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 3\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBWr\"], {\n    active: navItemsActive,\n    style: bottomIconStyle,\n    onClick: showNavItems,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 5\n    }\n  }, __jsx(HamburgerButton, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }\n  })), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"LogoWr\"], {\n    active: navItemsActive,\n    style: topIconStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 5\n    }\n  }, __jsx(ProductLogo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }\n  })));\n};\n\n_c2 = MobileIcons;\n\nvar HamburgerButton = function HamburgerButton(_ref3) {\n  var active = _ref3.active,\n      toggleNavItems = _ref3.toggleNavItems;\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBInnerWr\"], {\n    active: active,\n    onClick: toggleNavItems,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c3 = HamburgerButton;\n\nvar ProductLogo = function ProductLogo() {\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"Logo\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 3\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }\n  }, __jsx(_public_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"Bee\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  }))));\n};\n\n_c4 = ProductLogo;\n\nvar ShoppingCart = function ShoppingCart(_ref4) {\n  var style = _ref4.style;\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"Cart\"], {\n    style: style,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 3\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faShoppingBag\"],\n    size: \"2x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 5\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"CartCounter\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }\n  }, \"3\")));\n};\n\n_c5 = ShoppingCart;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Toolbar\");\n$RefreshReg$(_c2, \"MobileIcons\");\n$RefreshReg$(_c3, \"HamburgerButton\");\n$RefreshReg$(_c4, \"ProductLogo\");\n$RefreshReg$(_c5, \"ShoppingCart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9OYXZpZ2F0aW9uL1Rvb2xiYXIvVG9vbGJhci5qcz85NzE3Il0sIm5hbWVzIjpbIlRvb2xiYXIiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImdsb2JhbFdpbmRvdyIsInVzZUNsaWVudFdpbmRvdyIsIm5hdkl0ZW1zQWN0aXZlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIm5hdmlnYXRpb24iLCJzaG93TmF2SXRlbXMiLCJuYXZJdGVtcyIsInVzZVNjcm9sbFBvc2l0aW9uIiwicHJldlBvcyIsImN1cnJQb3MiLCJoZWlnaHQiLCJjb25zb2xlIiwibG9nIiwiaXNTaG93IiwieSIsInRvcEljb25TdHlsZSIsInRvcCIsImJvdHRvbUljb25TdHlsZSIsImJvdHRvbSIsIm9uTW9iaWxlU2NyZWVuIiwiaW5uZXJXaWR0aCIsInVzZVNob3dOYXZpZ2F0aW9uSXRlbXMiLCJNb2JpbGVJY29ucyIsIkhhbWJ1cmdlckJ1dHRvbiIsImFjdGl2ZSIsInRvZ2dsZU5hdkl0ZW1zIiwiUHJvZHVjdExvZ28iLCJTaG9wcGluZ0NhcnQiLCJzdHlsZSIsImZhU2hvcHBpbmdCYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsSUFBRCxDQURsQjtBQUFBLE1BQ2JDLE9BRGE7QUFBQSxNQUNKQyxVQURJOztBQUVwQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHQyw4RUFBZSxFQUFwQztBQUNBLE1BQU1DLGNBQWMsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FB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YXIvVG9vbGJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VTaG93TmF2aWdhdGlvbkl0ZW1zIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvYWN0aW9uc0luZGV4XCI7XG5pbXBvcnQge1xuICBOYXZpZ2F0aW9uUGFuZWwsXG4gIEhCV3IsXG4gIEhCSW5uZXJXcixcbiAgSEJTcGFuLFxuICBMb2dvLFxuICBMb2dvV3IsXG4gIENhcnQsXG4gIENhcnRDb3VudGVyLFxufSBmcm9tIFwiLi4vLi4vLi4vU3R5bGVkQ29tcG9uZW50cy90b29sYmFySXRlbXNcIjtcbmltcG9ydCB7IEJlZSB9IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvSWNvbi9JY29uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBmYVNob3BwaW5nQmFnIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi8uLi8uLi9VSS9Ecm9wZG93bi9Ecm9wZG93blwiO1xuaW1wb3J0IHt1c2VDbGllbnRXaW5kb3d9IGZyb20gJy4uLy4uLy4uL0hvb2tzL3VzZUNsaWVudFdpbmRvdyc7XG5pbXBvcnQgeyB1c2VTY3JvbGxQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9Ib29rcy91c2VTY3JvbGxQb3NpdGlvblwiO1xuXG5cbmNvbnN0IFRvb2xiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGdsb2JhbFdpbmRvdyA9IHVzZUNsaWVudFdpbmRvdygpO1xuICBjb25zdCBuYXZJdGVtc0FjdGl2ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubmF2aWdhdGlvbi5zaG93TmF2SXRlbXMpO1xuICBjb25zdCBuYXZJdGVtcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubmF2aWdhdGlvbi5uYXZJdGVtcyk7XG4gIHVzZVNjcm9sbFBvc2l0aW9uKFxuICAgICh7IHByZXZQb3MsIGN1cnJQb3MsIGhlaWdodCB9KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnaGVpZ2h0JywgaGVpZ2h0KVxuICAgICAgY29uc3QgaXNTaG93ID0gY3VyclBvcy55ID49IHByZXZQb3MueTtcbiAgICAgIGlmIChpc1Nob3cgIT09IHZpc2libGUpIHNldFZpc2libGUoaXNTaG93KTtcbiAgICB9LFxuICAgIFt2aXNpYmxlXSxcbiAgICBmYWxzZSxcbiAgICB0cnVlLFxuICAgIDE1MFxuICApO1xuXG4gIGxldCB0b3BJY29uU3R5bGUgPSAhdmlzaWJsZSA/IHsgdG9wOiBcIi0yMHZoXCIgfSA6IHsgdG9wOiBcIjFyZW1cIiB9O1xuICBsZXQgYm90dG9tSWNvblN0eWxlID0gIXZpc2libGUgPyB7IGJvdHRvbTogXCItMjB2aFwiIH0gOiB7IGJvdHRvbTogXCIxcmVtXCIgfTtcbiAgY29uc3Qgb25Nb2JpbGVTY3JlZW4gPSBnbG9iYWxXaW5kb3c/LmlubmVyV2lkdGggPCA2NDA7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7IW9uTW9iaWxlU2NyZWVuICYmIChcbiAgICAgICAgPE5hdmlnYXRpb25QYW5lbFxuICAgICAgICAgIHRhYkluZGV4PVwiMFwiXG4gICAgICAgICAgYWN0aXZlPXtuYXZJdGVtc0FjdGl2ZX1cbiAgICAgICAgICBzdHlsZT17dG9wSWNvblN0eWxlfVxuICAgICAgICA+XG4gICAgICAgICAgPFByb2R1Y3RMb2dvIC8+XG4gICAgICAgICAgPEhhbWJ1cmdlckJ1dHRvblxuICAgICAgICAgICAgYWN0aXZlPXtuYXZJdGVtc0FjdGl2ZX1cbiAgICAgICAgICAgIHRvZ2dsZU5hdkl0ZW1zPXsoKSA9PiBkaXNwYXRjaCh1c2VTaG93TmF2aWdhdGlvbkl0ZW1zKCkpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTmF2aWdhdGlvblBhbmVsPlxuICAgICAgKX1cbiAgICAgIHtvbk1vYmlsZVNjcmVlbiAmJiAoXG4gICAgICAgIDxNb2JpbGVJY29uc1xuICAgICAgICAgIG5hdkl0ZW1zQWN0aXZlPXtuYXZJdGVtc0FjdGl2ZX1cbiAgICAgICAgICBib3R0b21JY29uU3R5bGU9e2JvdHRvbUljb25TdHlsZX1cbiAgICAgICAgICB0b3BJY29uU3R5bGU9e3RvcEljb25TdHlsZX1cbiAgICAgICAgICBzaG93TmF2SXRlbXM9eygpID0+IGRpc3BhdGNoKHVzZVNob3dOYXZpZ2F0aW9uSXRlbXMoKSl9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgey8qIDxTaG9wcGluZ0NhcnQ+ICYgPERyb3Bkb3duPiBmb3IgYW55IHNpemUgZGV2aWNlICovfVxuICAgICAgPFNob3BwaW5nQ2FydFxuICAgICAgICB3aW5kb3dXaWR0aD17Z2xvYmFsV2luZG93Py5pbm5lcldpZHRofVxuICAgICAgICBzdHlsZT17b25Nb2JpbGVTY3JlZW4gPyBib3R0b21JY29uU3R5bGUgOiB0b3BJY29uU3R5bGV9XG4gICAgICAvPlxuICAgICAgPERyb3Bkb3duXG4gICAgICAgIGRyb3BEb3duVG9nZ2xlckhhbmRsZXI9eygpID0+IGRpc3BhdGNoKHVzZVNob3dOYXZpZ2F0aW9uSXRlbXMoKSl9XG4gICAgICAgIHN1Ykl0ZW1zPXtuYXZJdGVtc31cbiAgICAgICAgc2hvd0Ryb3BEb3duPXtuYXZJdGVtc0FjdGl2ZX1cbiAgICAgICAgdXNlT25Ub29sYmFyXG4gICAgICAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVG9vbGJhcjtcblxuY29uc3QgTW9iaWxlSWNvbnMgPSAoe1xuICBuYXZJdGVtc0FjdGl2ZSxcbiAgYm90dG9tSWNvblN0eWxlLFxuICB0b3BJY29uU3R5bGUsXG4gIHNob3dOYXZJdGVtcyxcbn0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxIQldyXG4gICAgICBhY3RpdmU9e25hdkl0ZW1zQWN0aXZlfVxuICAgICAgc3R5bGU9e2JvdHRvbUljb25TdHlsZX1cbiAgICAgIG9uQ2xpY2s9e3Nob3dOYXZJdGVtc31cbiAgICA+XG4gICAgICA8SGFtYnVyZ2VyQnV0dG9uIC8+XG4gICAgPC9IQldyPlxuICAgIDxMb2dvV3IgYWN0aXZlPXtuYXZJdGVtc0FjdGl2ZX0gc3R5bGU9e3RvcEljb25TdHlsZX0+XG4gICAgICA8UHJvZHVjdExvZ28gLz5cbiAgICA8L0xvZ29Xcj5cbiAgPC9GcmFnbWVudD5cbik7XG5cbmNvbnN0IEhhbWJ1cmdlckJ1dHRvbiA9ICh7IGFjdGl2ZSwgdG9nZ2xlTmF2SXRlbXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxIQklubmVyV3IgYWN0aXZlPXthY3RpdmV9IG9uQ2xpY2s9e3RvZ2dsZU5hdkl0ZW1zfT5cbiAgICAgIDxIQlNwYW4gLz5cbiAgICAgIDxIQlNwYW4gLz5cbiAgICAgIDxIQlNwYW4gLz5cbiAgICA8L0hCSW5uZXJXcj5cbiAgKTtcbn07XG5cbmNvbnN0IFByb2R1Y3RMb2dvID0gKCkgPT4gKFxuICA8TG9nbz5cbiAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgPGE+XG4gICAgICAgIDxCZWUgLz5cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gIDwvTG9nbz5cbik7XG5cbmNvbnN0IFNob3BwaW5nQ2FydCA9ICh7IHN0eWxlIH0pID0+IChcbiAgPENhcnQgc3R5bGU9e3N0eWxlfT5cbiAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2hvcHBpbmdCYWd9IHNpemU9XCIyeFwiIC8+XG4gICAgPENhcnRDb3VudGVyPlxuICAgICAgPHNwYW4+Mzwvc3Bhbj5cbiAgICA8L0NhcnRDb3VudGVyPlxuICA8L0NhcnQ+XG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Navigation/Toolbar/Toolbar.js\n");

/***/ })

})