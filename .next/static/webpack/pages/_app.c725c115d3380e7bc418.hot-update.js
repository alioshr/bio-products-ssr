webpackHotUpdate_N_E("pages/_app",{

/***/ "./Components/Navigation/Toolbar/Toolbar.js":
/*!**************************************************!*\
  !*** ./Components/Navigation/Toolbar/Toolbar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n/* harmony import */ var _StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../StyledComponents/toolbarItems */ \"./StyledComponents/toolbarItems.js\");\n/* harmony import */ var _public_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/Icon/Icon */ \"./public/Icon/Icon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_react-dom@16.13.1/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../UI/Dropdown/Dropdown */ \"./UI/Dropdown/Dropdown.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Navigation/Toolbar/Toolbar.js\",\n    _s4 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar Toolbar = function Toolbar(_ref) {\n  _s4();\n\n  var _s = $RefreshSig$(),\n      _s2 = $RefreshSig$(),\n      _s3 = $RefreshSig$();\n\n  var visible = _ref.visible;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      globalWindow = _useState[0],\n      setGlobalWindow = _useState[1];\n\n  var navItemsActive = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.navigation.showNavItems;\n  });\n  var navItems = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.navigation.navItems;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setGlobalWindow(window);\n  }, []);\n  var topIconStyle = !visible ? {\n    top: \"-10vh\"\n  } : {\n    top: \"1rem\"\n  };\n  var bottomIconStyle = !visible ? {\n    bottom: \"-10vh\"\n  } : {\n    bottom: \"1rem\"\n  };\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"NavigationPanel\"], {\n    tabIndex: \"0\",\n    active: navItemsActive,\n    style: topIconStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(ProductLogo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }), __jsx(HamburgerButton, {\n    active: navItemsActive,\n    toggleNavItems: _s(function () {\n      _s();\n\n      return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"])());\n    }, \"vUmtifoU2/HcfwogqKF++1e+zoY=\", false, function () {\n      return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"]];\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBWr\"], {\n    active: navItemsActive,\n    style: bottomIconStyle,\n    onClick: _s2(function () {\n      _s2();\n\n      return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"])());\n    }, \"vUmtifoU2/HcfwogqKF++1e+zoY=\", false, function () {\n      return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"]];\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, __jsx(HamburgerButton, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"LogoWr\"], {\n    active: navItemsActive,\n    style: topIconStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(ProductLogo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  })), __jsx(ShoppingCart, {\n    windowWidth: globalWindow === null || globalWindow === void 0 ? void 0 : globalWindow.innerWidth,\n    style: (globalWindow === null || globalWindow === void 0 ? void 0 : globalWindow.innerWidth) < 640 ? bottomIconStyle : topIconStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }), __jsx(_UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    dropDownTogglerHandler: _s3(function () {\n      _s3();\n\n      return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"])());\n    }, \"vUmtifoU2/HcfwogqKF++1e+zoY=\", false, function () {\n      return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"]];\n    }),\n    subItems: navItems,\n    showDropDown: navItemsActive,\n    useOnToolbar: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s4(Toolbar, \"5uYw5QDQa5seDXI0F8FtSM+mdCM=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = Toolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toolbar);\n\nvar HamburgerButton = function HamburgerButton(_ref2) {\n  var active = _ref2.active,\n      toggleNavItems = _ref2.toggleNavItems;\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBInnerWr\"], {\n    active: active,\n    onClick: toggleNavItems,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c2 = HamburgerButton;\n\nvar ProductLogo = function ProductLogo() {\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"Logo\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 3\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }\n  }, __jsx(_public_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"Bee\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }\n  }))));\n};\n\n_c3 = ProductLogo;\n\nvar ShoppingCart = function ShoppingCart(_ref3) {\n  var style = _ref3.style;\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"Cart\"], {\n    style: style,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 3\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faShoppingBag\"],\n    size: \"2x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 5\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"CartCounter\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }\n  }, \"3\")));\n};\n\n_c4 = ShoppingCart;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Toolbar\");\n$RefreshReg$(_c2, \"HamburgerButton\");\n$RefreshReg$(_c3, \"ProductLogo\");\n$RefreshReg$(_c4, \"ShoppingCart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9OYXZpZ2F0aW9uL1Rvb2xiYXIvVG9vbGJhci5qcz85NzE3Il0sIm5hbWVzIjpbIlRvb2xiYXIiLCJ2aXNpYmxlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiZ2xvYmFsV2luZG93Iiwic2V0R2xvYmFsV2luZG93IiwibmF2SXRlbXNBY3RpdmUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwibmF2aWdhdGlvbiIsInNob3dOYXZJdGVtcyIsIm5hdkl0ZW1zIiwidXNlRWZmZWN0Iiwid2luZG93IiwidG9wSWNvblN0eWxlIiwidG9wIiwiYm90dG9tSWNvblN0eWxlIiwiYm90dG9tIiwidXNlU2hvd05hdmlnYXRpb25JdGVtcyIsImlubmVyV2lkdGgiLCJIYW1idXJnZXJCdXR0b24iLCJhY3RpdmUiLCJ0b2dnbGVOYXZJdGVtcyIsIlByb2R1Y3RMb2dvIiwiU2hvcHBpbmdDYXJ0Iiwic3R5bGUiLCJmYVNob3BwaW5nQmFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFpQjtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDL0IsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEK0Isa0JBRVNDLHNEQUFRLENBQUMsSUFBRCxDQUZqQjtBQUFBLE1BRXhCQyxZQUZ3QjtBQUFBLE1BRVZDLGVBRlU7O0FBRy9CLE1BQU1DLGNBQWMsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxVQUFOLENBQWlCQyxZQUE1QjtBQUFBLEdBQUQsQ0FBbEM7QUFDQSxNQUFNQyxRQUFRLEdBQUdKLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUss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TUYsWSIsImZpbGUiOiIuL0NvbXBvbmVudHMvTmF2aWdhdGlvbi9Ub29sYmFyL1Rvb2xiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlU2hvd05hdmlnYXRpb25JdGVtcyB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL2FjdGlvbnNJbmRleFwiO1xuaW1wb3J0IHtcbiAgTmF2aWdhdGlvblBhbmVsLFxuICBIQldyLFxuICBIQklubmVyV3IsXG4gIEhCU3BhbixcbiAgTG9nbyxcbiAgTG9nb1dyLFxuICBDYXJ0LFxuICBDYXJ0Q291bnRlcixcbn0gZnJvbSBcIi4uLy4uLy4uL1N0eWxlZENvbXBvbmVudHMvdG9vbGJhckl0ZW1zXCI7XG5pbXBvcnQgeyBCZWUgfSBmcm9tIFwiLi4vLi4vLi4vcHVibGljL0ljb24vSWNvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgZmFTaG9wcGluZ0JhZyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi4vLi4vLi4vVUkvRHJvcGRvd24vRHJvcGRvd25cIjtcblxuY29uc3QgVG9vbGJhciA9ICh7IHZpc2libGUgfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtnbG9iYWxXaW5kb3csIHNldEdsb2JhbFdpbmRvd10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgbmF2SXRlbXNBY3RpdmUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm5hdmlnYXRpb24uc2hvd05hdkl0ZW1zKTtcbiAgY29uc3QgbmF2SXRlbXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm5hdmlnYXRpb24ubmF2SXRlbXMpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0R2xvYmFsV2luZG93KHdpbmRvdyk7XG4gIH0sIFtdKTtcblxuICBsZXQgdG9wSWNvblN0eWxlID0gIXZpc2libGUgPyB7IHRvcDogXCItMTB2aFwiIH0gOiB7IHRvcDogXCIxcmVtXCIgfTtcbiAgbGV0IGJvdHRvbUljb25TdHlsZSA9ICF2aXNpYmxlID8geyBib3R0b206IFwiLTEwdmhcIiB9IDogeyBib3R0b206IFwiMXJlbVwiIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7LyogPE5hdmlnYXRpb25QYW5lbD4gZm9yIGRlc2t0b3Agb25seSAqL31cbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWxcbiAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgYWN0aXZlPXtuYXZJdGVtc0FjdGl2ZX1cbiAgICAgICAgc3R5bGU9e3RvcEljb25TdHlsZX1cbiAgICAgID5cbiAgICAgICAgPFByb2R1Y3RMb2dvIC8+XG4gICAgICAgIDxIYW1idXJnZXJCdXR0b25cbiAgICAgICAgICBhY3RpdmU9e25hdkl0ZW1zQWN0aXZlfVxuICAgICAgICAgIHRvZ2dsZU5hdkl0ZW1zPXsoKSA9PiBkaXNwYXRjaCh1c2VTaG93TmF2aWdhdGlvbkl0ZW1zKCkpfVxuICAgICAgICAvPlxuICAgICAgPC9OYXZpZ2F0aW9uUGFuZWw+XG4gICAgICB7LyogPEhCV3I+ICYgPExvZ29Xcj4gZm9yIG1vYmlsZSBvbmx5ICovfVxuICAgICAgPEhCV3JcbiAgICAgICAgYWN0aXZlPXtuYXZJdGVtc0FjdGl2ZX1cbiAgICAgICAgc3R5bGU9e2JvdHRvbUljb25TdHlsZX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2godXNlU2hvd05hdmlnYXRpb25JdGVtcygpKX1cbiAgICAgID5cbiAgICAgICAgPEhhbWJ1cmdlckJ1dHRvbiAvPlxuICAgICAgPC9IQldyPlxuICAgICAgPExvZ29XciBhY3RpdmU9e25hdkl0ZW1zQWN0aXZlfSBzdHlsZT17dG9wSWNvblN0eWxlfT5cbiAgICAgICAgPFByb2R1Y3RMb2dvIC8+XG4gICAgICA8L0xvZ29Xcj5cbiAgICAgIHsvKiA8U2hvcHBpbmdDYXJ0PiAmIDxEcm9wZG93bj4gZm9yIGFueSBzaXplIGRldmljZSAqL31cbiAgICAgIDxTaG9wcGluZ0NhcnRcbiAgICAgICAgd2luZG93V2lkdGg9e2dsb2JhbFdpbmRvdz8uaW5uZXJXaWR0aH1cbiAgICAgICAgc3R5bGU9e2dsb2JhbFdpbmRvdz8uaW5uZXJXaWR0aCA8IDY0MCA/IGJvdHRvbUljb25TdHlsZSA6IHRvcEljb25TdHlsZX1cbiAgICAgIC8+XG4gICAgICA8RHJvcGRvd25cbiAgICAgICAgZHJvcERvd25Ub2dnbGVySGFuZGxlcj17KCkgPT4gZGlzcGF0Y2godXNlU2hvd05hdmlnYXRpb25JdGVtcygpKX1cbiAgICAgICAgc3ViSXRlbXM9e25hdkl0ZW1zfVxuICAgICAgICBzaG93RHJvcERvd249e25hdkl0ZW1zQWN0aXZlfVxuICAgICAgICB1c2VPblRvb2xiYXJcbiAgICAgIC8+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXI7XG5cbmNvbnN0IEhhbWJ1cmdlckJ1dHRvbiA9ICh7IGFjdGl2ZSwgdG9nZ2xlTmF2SXRlbXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxIQklubmVyV3IgYWN0aXZlPXthY3RpdmV9IG9uQ2xpY2s9e3RvZ2dsZU5hdkl0ZW1zfT5cbiAgICAgIDxIQlNwYW4gLz5cbiAgICAgIDxIQlNwYW4gLz5cbiAgICAgIDxIQlNwYW4gLz5cbiAgICA8L0hCSW5uZXJXcj5cbiAgKTtcbn07XG5cbmNvbnN0IFByb2R1Y3RMb2dvID0gKCkgPT4gKFxuICA8TG9nbz5cbiAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgPGE+XG4gICAgICAgIDxCZWUgLz5cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gIDwvTG9nbz5cbik7XG5cbmNvbnN0IFNob3BwaW5nQ2FydCA9ICh7IHN0eWxlIH0pID0+IChcbiAgPENhcnQgc3R5bGU9e3N0eWxlfT5cbiAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2hvcHBpbmdCYWd9IHNpemU9XCIyeFwiIC8+XG4gICAgPENhcnRDb3VudGVyPlxuICAgICAgPHNwYW4+Mzwvc3Bhbj5cbiAgICA8L0NhcnRDb3VudGVyPlxuICA8L0NhcnQ+XG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Navigation/Toolbar/Toolbar.js\n");

/***/ })

})