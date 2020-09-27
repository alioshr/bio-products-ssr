webpackHotUpdate_N_E("pages/_app",{

/***/ "./Components/Navigation/Toolbar/Toolbar.js":
/*!**************************************************!*\
  !*** ./Components/Navigation/Toolbar/Toolbar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n/* harmony import */ var _StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../StyledComponents/toolbarItems */ \"./StyledComponents/toolbarItems.js\");\n/* harmony import */ var _public_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/Icon/Icon */ \"./public/Icon/Icon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_react-dom@16.13.1/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../UI/Dropdown/Dropdown */ \"./UI/Dropdown/Dropdown.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Navigation/Toolbar/Toolbar.js\",\n    _s4 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar Toolbar = function Toolbar(_ref) {\n  _s4();\n\n  var _s = $RefreshSig$(),\n      _s2 = $RefreshSig$(),\n      _s3 = $RefreshSig$();\n\n  var visible = _ref.visible;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      globalWindow = _useState[0],\n      setGlobalWindow = _useState[1];\n\n  var navItemsActive = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.navigation.showNavItems;\n  });\n  var navItems = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.navigation.navItems;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setGlobalWindow(window);\n  }, []);\n  var topIconStyle = !visible ? {\n    top: \"-10vh\"\n  } : {\n    top: \"1rem\"\n  };\n  var bottomIconStyle = !visible ? {\n    bottom: \"-10vh\"\n  } : {\n    bottom: \"1rem\"\n  };\n\n  var iconVisibility = function iconVisibility(visible, top, bottom) {\n    var topIcon = !visible && top === \"top\" ? {\n      top: \"-10vh\"\n    } : {\n      top: \"1rem\"\n    };\n    var bottomIcon = !visible && bottom === \"bottom\" ? {\n      bottom: \"-10vh\"\n    } : {\n      bottom: \"1rem\"\n    };\n    return top === 'top' ? topIcon : bo;\n  };\n\n  console.log(iconVisibility(true, 'top', null));\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"NavigationPanel\"], {\n    tabIndex: \"0\",\n    active: navItemsActive,\n    style: topIconStyle,\n    visible: visible,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, __jsx(ProductLogo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }), __jsx(HamburgerButton, {\n    active: navItemsActive,\n    toggleNavItems: _s(function () {\n      _s();\n\n      return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"])());\n    }, \"vUmtifoU2/HcfwogqKF++1e+zoY=\", false, function () {\n      return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"]];\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBWr\"], {\n    active: navItemsActive,\n    style: bottomIconStyle,\n    visible: visible,\n    onClick: _s2(function () {\n      _s2();\n\n      return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"])());\n    }, \"vUmtifoU2/HcfwogqKF++1e+zoY=\", false, function () {\n      return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"]];\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(HamburgerButton, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"LogoWr\"], {\n    active: navItemsActive,\n    visible: visible,\n    style: topIconStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, __jsx(ProductLogo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  })), __jsx(ShoppingCart, {\n    visible: visible,\n    windowWidth: globalWindow === null || globalWindow === void 0 ? void 0 : globalWindow.innerWidth,\n    style: (globalWindow === null || globalWindow === void 0 ? void 0 : globalWindow.innerWidth) < 640 ? bottomIconStyle : topIconStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }), __jsx(_UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    dropDownTogglerHandler: _s3(function () {\n      _s3();\n\n      return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"])());\n    }, \"vUmtifoU2/HcfwogqKF++1e+zoY=\", false, function () {\n      return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"]];\n    }),\n    subItems: navItems,\n    showDropDown: navItemsActive,\n    useOnToolbar: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s4(Toolbar, \"5uYw5QDQa5seDXI0F8FtSM+mdCM=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = Toolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toolbar);\n\nvar HamburgerButton = function HamburgerButton(_ref2) {\n  var active = _ref2.active,\n      toggleNavItems = _ref2.toggleNavItems;\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBInnerWr\"], {\n    active: active,\n    onClick: toggleNavItems,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c2 = HamburgerButton;\n\nvar ProductLogo = function ProductLogo() {\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"Logo\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 3\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }\n  }, __jsx(_public_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"Bee\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 9\n    }\n  }))));\n};\n\n_c3 = ProductLogo;\n\nvar ShoppingCart = function ShoppingCart(_ref3) {\n  var style = _ref3.style;\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"Cart\"], {\n    style: style,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 3\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faShoppingBag\"],\n    size: \"2x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 5\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"CartCounter\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }\n  }, \"3\")));\n};\n\n_c4 = ShoppingCart;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Toolbar\");\n$RefreshReg$(_c2, \"HamburgerButton\");\n$RefreshReg$(_c3, \"ProductLogo\");\n$RefreshReg$(_c4, \"ShoppingCart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9OYXZpZ2F0aW9uL1Rvb2xiYXIvVG9vbGJhci5qcz85NzE3Il0sIm5hbWVzIjpbIlRvb2xiYXIiLCJ2aXNpYmxlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiZ2xvYmFsV2luZG93Iiwic2V0R2xvYmFsV2luZG93IiwibmF2SXRlbXNBY3RpdmUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwibmF2aWdhdGlvbiIsInNob3dOYXZJdGVtcyIsIm5hdkl0ZW1zIiwidXNlRWZmZWN0Iiwid2luZG93IiwidG9wSWNvblN0eWxlIiwidG9wIiwiYm90dG9tSWNvblN0eWxlIiwiYm90dG9tIiwiaWNvblZpc2liaWxpdHkiLCJ0b3BJY29uIiwiYm90dG9tSWNvbiIsImJvIiwiY29uc29sZSIsImxvZyIsInVzZVNob3dOYXZpZ2F0aW9uSXRlbXMiLCJpbm5lcldpZHRoIiwiSGFtYnVyZ2VyQnV0dG9uIiwiYWN0aXZlIiwidG9nZ2xlTmF2SXRlbXMiLCJQcm9kdWN0TG9nbyIsIlNob3BwaW5nQ2FydCIsInN0eWxlIiwiZmFTaG9wcGluZ0JhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBaUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQy9CLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRCtCLGtCQUVTQyxzREFBUSxDQUFDLElBQUQsQ0FGakI7QUFBQSxNQUV4QkMsWUFGd0I7QUFBQSxNQUVWQyxlQUZVOztBQUcvQixNQUFNQyxjQUFjLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsWUFBNUI7QUFBQSxHQUFELENBQWxD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QUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsQ0FEa0I7QUFBQSxDQUFwQjs7TUFBTUEsVzs7QUFVTixJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLE1BQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQ25CLE1BQUMsbUVBQUQ7QUFBTSxTQUFLLEVBQUVBLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFFQywrRUFBdkI7QUFBc0MsUUFBSSxFQUFDLElBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERixDQUZGLENBRG1CO0FBQUEsQ0FBckI7O01BQU1GLFkiLCJmaWxlIjoiLi9Db21wb25lbnRzL05hdmlnYXRpb24vVG9vbGJhci9Ub29sYmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZVNob3dOYXZpZ2F0aW9uSXRlbXMgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9hY3Rpb25zSW5kZXhcIjtcbmltcG9ydCB7XG4gIE5hdmlnYXRpb25QYW5lbCxcbiAgSEJXcixcbiAgSEJJbm5lcldyLFxuICBIQlNwYW4sXG4gIExvZ28sXG4gIExvZ29XcixcbiAgQ2FydCxcbiAgQ2FydENvdW50ZXIsXG59IGZyb20gXCIuLi8uLi8uLi9TdHlsZWRDb21wb25lbnRzL3Rvb2xiYXJJdGVtc1wiO1xuaW1wb3J0IHsgQmVlIH0gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9JY29uL0ljb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGZhU2hvcHBpbmdCYWcgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4uLy4uLy4uL1VJL0Ryb3Bkb3duL0Ryb3Bkb3duXCI7XG5cbmNvbnN0IFRvb2xiYXIgPSAoeyB2aXNpYmxlIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbZ2xvYmFsV2luZG93LCBzZXRHbG9iYWxXaW5kb3ddID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IG5hdkl0ZW1zQWN0aXZlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5uYXZpZ2F0aW9uLnNob3dOYXZJdGVtcyk7XG4gIGNvbnN0IG5hdkl0ZW1zID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5uYXZpZ2F0aW9uLm5hdkl0ZW1zKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEdsb2JhbFdpbmRvdyh3aW5kb3cpO1xuICB9LCBbXSk7XG5cbiAgbGV0IHRvcEljb25TdHlsZSA9ICF2aXNpYmxlID8geyB0b3A6IFwiLTEwdmhcIiB9IDogeyB0b3A6IFwiMXJlbVwiIH07XG4gIGxldCBib3R0b21JY29uU3R5bGUgPSAhdmlzaWJsZSA/IHsgYm90dG9tOiBcIi0xMHZoXCIgfSA6IHsgYm90dG9tOiBcIjFyZW1cIiB9O1xuXG4gIGNvbnN0IGljb25WaXNpYmlsaXR5ID0gKHZpc2libGUsIHRvcCwgYm90dG9tKSA9PiB7XG4gICAgY29uc3QgdG9wSWNvbiA9ICF2aXNpYmxlICYmIHRvcCA9PT0gXCJ0b3BcIiA/IHsgdG9wOiBcIi0xMHZoXCIgfSA6IHsgdG9wOiBcIjFyZW1cIiB9O1xuICAgIGNvbnN0IGJvdHRvbUljb24gPSAhdmlzaWJsZSAmJiBib3R0b20gPT09IFwiYm90dG9tXCIgPyB7IGJvdHRvbTogXCItMTB2aFwiIH0gOiB7IGJvdHRvbTogXCIxcmVtXCIgfTtcbiAgICByZXR1cm4gdG9wID09PSAndG9wJyA/IHRvcEljb24gOiBibyBcbiAgfVxuXG4gIGNvbnNvbGUubG9nKGljb25WaXNpYmlsaXR5KHRydWUsICd0b3AnLCBudWxsKSlcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHsvKiA8TmF2aWdhdGlvblBhbmVsPiBmb3IgZGVza3RvcCBvbmx5ICovfVxuICAgICAgPE5hdmlnYXRpb25QYW5lbFxuICAgICAgICB0YWJJbmRleD1cIjBcIlxuICAgICAgICBhY3RpdmU9e25hdkl0ZW1zQWN0aXZlfVxuICAgICAgICBzdHlsZT17dG9wSWNvblN0eWxlfVxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgPlxuICAgICAgICA8UHJvZHVjdExvZ28gLz5cbiAgICAgICAgPEhhbWJ1cmdlckJ1dHRvblxuICAgICAgICAgIGFjdGl2ZT17bmF2SXRlbXNBY3RpdmV9XG4gICAgICAgICAgdG9nZ2xlTmF2SXRlbXM9eygpID0+IGRpc3BhdGNoKHVzZVNob3dOYXZpZ2F0aW9uSXRlbXMoKSl9XG4gICAgICAgIC8+XG4gICAgICA8L05hdmlnYXRpb25QYW5lbD5cbiAgICAgIHsvKiA8SEJXcj4gJiA8TG9nb1dyPiBmb3IgbW9iaWxlIG9ubHkgKi99XG4gICAgICA8SEJXclxuICAgICAgICBhY3RpdmU9e25hdkl0ZW1zQWN0aXZlfVxuICAgICAgICBzdHlsZT17Ym90dG9tSWNvblN0eWxlfVxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh1c2VTaG93TmF2aWdhdGlvbkl0ZW1zKCkpfVxuICAgICAgPlxuICAgICAgICA8SGFtYnVyZ2VyQnV0dG9uIC8+XG4gICAgICA8L0hCV3I+XG4gICAgICA8TG9nb1dyIGFjdGl2ZT17bmF2SXRlbXNBY3RpdmV9IHZpc2libGU9e3Zpc2libGV9IHN0eWxlPXt0b3BJY29uU3R5bGV9PlxuICAgICAgICA8UHJvZHVjdExvZ28gLz5cbiAgICAgIDwvTG9nb1dyPlxuICAgICAgey8qIDxTaG9wcGluZ0NhcnQ+ICYgPERyb3Bkb3duPiBmb3IgYW55IHNpemUgZGV2aWNlICovfVxuICAgICAgPFNob3BwaW5nQ2FydFxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICB3aW5kb3dXaWR0aD17Z2xvYmFsV2luZG93Py5pbm5lcldpZHRofVxuICAgICAgICBzdHlsZT17Z2xvYmFsV2luZG93Py5pbm5lcldpZHRoIDwgNjQwID8gYm90dG9tSWNvblN0eWxlIDogdG9wSWNvblN0eWxlfVxuICAgICAgLz5cbiAgICAgIDxEcm9wZG93blxuICAgICAgICBkcm9wRG93blRvZ2dsZXJIYW5kbGVyPXsoKSA9PiBkaXNwYXRjaCh1c2VTaG93TmF2aWdhdGlvbkl0ZW1zKCkpfVxuICAgICAgICBzdWJJdGVtcz17bmF2SXRlbXN9XG4gICAgICAgIHNob3dEcm9wRG93bj17bmF2SXRlbXNBY3RpdmV9XG4gICAgICAgIHVzZU9uVG9vbGJhclxuICAgICAgLz5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9vbGJhcjtcblxuY29uc3QgSGFtYnVyZ2VyQnV0dG9uID0gKHsgYWN0aXZlLCB0b2dnbGVOYXZJdGVtcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEhCSW5uZXJXciBhY3RpdmU9e2FjdGl2ZX0gb25DbGljaz17dG9nZ2xlTmF2SXRlbXN9PlxuICAgICAgPEhCU3BhbiAvPlxuICAgICAgPEhCU3BhbiAvPlxuICAgICAgPEhCU3BhbiAvPlxuICAgIDwvSEJJbm5lcldyPlxuICApO1xufTtcblxuY29uc3QgUHJvZHVjdExvZ28gPSAoKSA9PiAoXG4gIDxMb2dvPlxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICA8YT5cbiAgICAgICAgPEJlZSAvPlxuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgPC9Mb2dvPlxuKTtcblxuY29uc3QgU2hvcHBpbmdDYXJ0ID0gKHsgc3R5bGUgfSkgPT4gKFxuICA8Q2FydCBzdHlsZT17c3R5bGV9PlxuICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaG9wcGluZ0JhZ30gc2l6ZT1cIjJ4XCIgLz5cbiAgICA8Q2FydENvdW50ZXI+XG4gICAgICA8c3Bhbj4zPC9zcGFuPlxuICAgIDwvQ2FydENvdW50ZXI+XG4gIDwvQ2FydD5cbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Navigation/Toolbar/Toolbar.js\n");

/***/ })

})