webpackHotUpdate_N_E("pages/_app",{

/***/ "./Components/Navigation/Toolbar/Toolbar.js":
/*!**************************************************!*\
  !*** ./Components/Navigation/Toolbar/Toolbar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n/* harmony import */ var _StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../StyledComponents/toolbarItems */ \"./StyledComponents/toolbarItems.js\");\n/* harmony import */ var _public_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/Icon/Icon */ \"./public/Icon/Icon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_b64c5b009f74cdcf964dbb949a1d9ffa/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Navigation/Toolbar/Toolbar.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import Logo from \"../../../UI/Logo/Logo\";\n// import Cart from \"../../../UI/Cart/Cart\";\n// import Dropdown from \"../Dropdown/Dropdown\";\n// import HamburgerButton from \"../HamburgerButton/HamburgerButton\";\n\n\n\n\n\n\n\nvar HamburgerButton = function HamburgerButton(_ref) {\n  var active = _ref.active;\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBInnerWr\"], {\n    active: active,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 8\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 10\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 10\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 10\n    }\n  }));\n};\n\n_c = HamburgerButton;\n\nvar ProductLogo = function ProductLogo() {\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"Logo\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 3\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/\",\n    passHref: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(_public_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"Bee\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  })));\n};\n\n_c2 = ProductLogo;\n\nvar ShoppingCart = function ShoppingCart(_ref2) {\n  var style = _ref2.style;\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"Cart\"], {\n    style: style,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 3\n    }\n  }, __jsx(FontAwesomeIcon, {\n    icon: faShoppingBag,\n    size: \"2x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 6\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"CartCounter\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, \"3\")));\n};\n\n_c3 = ShoppingCart;\n\nvar Toolbar = function Toolbar(_ref3) {\n  _s();\n\n  var visible = _ref3.visible;\n  var onShowNavigationItems = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"])());\n  var navItemsActive = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.navigation.showNavItems;\n  });\n  var navItems = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.navigation.navItems;\n  });\n  var toolbarIconHidden = {\n    top: \"-10vh\"\n  };\n  var toolbarIconShow = {\n    bottom: \"0\"\n  };\n  var topIconStyle = !visible ? {\n    top: \"-10vh\"\n  } : {\n    bottom: 0\n  };\n  var bottomIconStyle = !visible ? {\n    bottom: \"-10vh\"\n  } : {\n    bottom: \"2rem\"\n  };\n  var iconStyles = !visible ? toolbarIconHidden : toolbarIconShow;\n  var navigationPanelClasses = [\"NavigationPanel\", navItemsActive ? \"NavigationPanel__active\" : null];\n  var hamburgerButtonClasses = [\"Hamburger__button__wrapper\", navItemsActive ? \"Hamburger__button__wrapper__active\" : null]; //done\n\n  var logoClasses = [\"Logo__wrapper\", navItemsActive ? \"Logo__wrapper__active\" : null];\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"NavigationPanel\"], {\n    active: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, __jsx(ProductLogo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }), __jsx(HamburgerButton, {\n    active: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBWr\"], {\n    active: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, __jsx(HamburgerButton, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"LogoWr\"], {\n    active: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }, __jsx(ProductLogo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  })), __jsx(ShoppingCart, {\n    style: window.innerWidth < 640 ? bottomIconStyle : topIconStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Toolbar, \"h0NauXo2XqYr3X6XbHQ1w0e6t04=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c4 = Toolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toolbar); // {/* <div className={navigationPanelClasses.join(' ')} style={iconStyles}>\n//         {/* <Logo />\n//         <HamburgerButton /> */}\n//       </div>\n//       <div style={bottomIconStyle} className={hamburgerButtonClasses.join(' ')}>\n//         {/* <HamburgerButton /> */}\n//       </div>\n//       <div style={iconStyles} className={logoClasses.join(' ')}>\n//       {/* <Logo /> */}\n//       </div>\n//       {/* <Dropdown\n//           dropDownTogglerHandler={() => onShowNavigationItems()}\n//           subItems={navItems}\n//           withHamburger\n//           showDropDown={navItemsActive}\n//         />\n//       <Cart style={window.innerWidth < 640 ? bottomIconStyle : topIconStyle} /> */} */}\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"HamburgerButton\");\n$RefreshReg$(_c2, \"ProductLogo\");\n$RefreshReg$(_c3, \"ShoppingCart\");\n$RefreshReg$(_c4, \"Toolbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9OYXZpZ2F0aW9uL1Rvb2xiYXIvVG9vbGJhci5qcz85NzE3Il0sIm5hbWVzIjpbIkhhbWJ1cmdlckJ1dHRvbiIsImFjdGl2ZSIsIlByb2R1Y3RMb2dvIiwiU2hvcHBpbmdDYXJ0Iiwic3R5bGUiLCJmYVNob3BwaW5nQmFnIiwiVG9vbGJhciIsInZpc2libGUiLCJvblNob3dOYXZpZ2F0aW9uSXRlbXMiLCJ1c2VEaXNwYXRjaCIsInVzZVNob3dOYXZpZ2F0aW9uSXRlbXMiLCJuYXZJdGVtc0FjdGl2ZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJuYXZpZ2F0aW9uIiwic2hvd05hdkl0ZW1zIiwibmF2SXRlbXMiLCJ0b29sYmFySWNvbkhpZGRlbiIsInRvcCIsInRvb2xiYXJJY29uU2hvdyIsImJvdHRvbSIsInRvcEljb25TdHlsZSIsImJvdHRvbUljb25TdHlsZSIsImljb25TdHlsZXMiLCJuYXZpZ2F0aW9uUGFuZWxDbGFzc2VzIiwiaGFtYnVyZ2VyQnV0dG9uQ2xhc3NlcyIsImxvZ29DbGFzc2VzIiwid2luZG93IiwiaW5uZXJXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Q0FDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBYztBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTtBQUNwQyxTQUNLLE1BQUMsd0VBQUQ7QUFBVyxVQUFNLEVBQUVBLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsbUVBQUQ7QUFBTSxVQUFNLEVBQUUsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUxGLEVBUUUsTUFBQyxxRUFBRDtBQUFRLFVBQU0sRUFBRSxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVJGLEVBV0UsTUFBQyxZQUFEO0FBQWMsU0FBSyxFQUFFZ0IsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLEdBQXBCLEdBQTBCTixlQUExQixHQUE0Q0QsWUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLENBREY7QUFlRCxDQW5DRDs7R0FBTWYsTztVQUN5QkcsdUQsRUFBWUMsa0YsRUFDbkJFLHVELEVBQ05BLHVEOzs7TUFIWk4sTztBQXFDU0Esc0VBQWYsRSxDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9Db21wb25lbnRzL05hdmlnYXRpb24vVG9vbGJhci9Ub29sYmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vLi4vVUkvTG9nby9Mb2dvXCI7XG4vLyBpbXBvcnQgQ2FydCBmcm9tIFwiLi4vLi4vLi4vVUkvQ2FydC9DYXJ0XCI7XG4vLyBpbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4uL0Ryb3Bkb3duL0Ryb3Bkb3duXCI7XG4vLyBpbXBvcnQgSGFtYnVyZ2VyQnV0dG9uIGZyb20gXCIuLi9IYW1idXJnZXJCdXR0b24vSGFtYnVyZ2VyQnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7dXNlU2hvd05hdmlnYXRpb25JdGVtc30gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9hY3Rpb25zSW5kZXgnXG5pbXBvcnQge05hdmlnYXRpb25QYW5lbCwgSEJXciwgSEJJbm5lcldyLCBIQlNwYW4sIExvZ28sIExvZ29XciwgQ2FydCwgQ2FydENvdW50ZXJ9IGZyb20gJy4uLy4uLy4uL1N0eWxlZENvbXBvbmVudHMvdG9vbGJhckl0ZW1zJ1xuaW1wb3J0IHtCZWV9IGZyb20gJy4uLy4uLy4uL3B1YmxpYy9JY29uL0ljb24nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IEhhbWJ1cmdlckJ1dHRvbiA9ICh7YWN0aXZlfSkgPT4ge1xuICByZXR1cm4gKFxuICAgICAgIDxIQklubmVyV3IgYWN0aXZlPXthY3RpdmV9PlxuICAgICAgICAgPEhCU3BhbiAvPlxuICAgICAgICAgPEhCU3BhbiAvPlxuICAgICAgICAgPEhCU3BhbiAvPlxuICAgICAgIDwvSEJJbm5lcldyPlxuICApXG59XG5cbmNvbnN0IFByb2R1Y3RMb2dvID0gKCkgPT4gKFxuICA8TG9nbz5cbiAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxuICAgIDxCZWUgLz5cbiAgICA8L0xpbms+XG4gIDwvTG9nbz5cbilcblxuY29uc3QgU2hvcHBpbmdDYXJ0ID0gKHtzdHlsZX0pID0+IChcbiAgPENhcnQgc3R5bGU9e3N0eWxlfT5cbiAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNob3BwaW5nQmFnfSBzaXplPVwiMnhcIiAvPlxuICAgIDxDYXJ0Q291bnRlcj5cbiAgICAgIDxzcGFuPjM8L3NwYW4+XG4gICAgPC9DYXJ0Q291bnRlcj5cbiAgPC9DYXJ0PlxuKVxuXG5cbmNvbnN0IFRvb2xiYXIgPSAoe3Zpc2libGV9KSA9PiB7XG4gY29uc3Qgb25TaG93TmF2aWdhdGlvbkl0ZW1zID0gdXNlRGlzcGF0Y2godXNlU2hvd05hdmlnYXRpb25JdGVtcygpKVxuIGNvbnN0IG5hdkl0ZW1zQWN0aXZlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubmF2aWdhdGlvbi5zaG93TmF2SXRlbXMpO1xuIGNvbnN0IG5hdkl0ZW1zID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubmF2aWdhdGlvbi5uYXZJdGVtcylcbiAgbGV0IHRvb2xiYXJJY29uSGlkZGVuID0ge1xuICAgIHRvcDogXCItMTB2aFwiLFxuICB9O1xuXG4gIGxldCB0b29sYmFySWNvblNob3cgPSB7XG4gICAgYm90dG9tOiBcIjBcIixcbiAgfTtcblxuICBsZXQgdG9wSWNvblN0eWxlID0gIXZpc2libGUgPyB7IHRvcDogXCItMTB2aFwifSA6IHtib3R0b206IDB9O1xuICBsZXQgYm90dG9tSWNvblN0eWxlID0gIXZpc2libGUgPyB7Ym90dG9tOiBcIi0xMHZoXCJ9IDoge2JvdHRvbTogXCIycmVtXCJ9O1xuXG4gIGNvbnN0IGljb25TdHlsZXMgPSAhdmlzaWJsZSA/IHRvb2xiYXJJY29uSGlkZGVuIDogdG9vbGJhckljb25TaG93O1xuICBjb25zdCBuYXZpZ2F0aW9uUGFuZWxDbGFzc2VzID0gW1wiTmF2aWdhdGlvblBhbmVsXCIsIG5hdkl0ZW1zQWN0aXZlID8gXCJOYXZpZ2F0aW9uUGFuZWxfX2FjdGl2ZVwiIDogbnVsbF1cbiAgY29uc3QgaGFtYnVyZ2VyQnV0dG9uQ2xhc3Nlcz0gW1wiSGFtYnVyZ2VyX19idXR0b25fX3dyYXBwZXJcIiwgbmF2SXRlbXNBY3RpdmUgPyBcIkhhbWJ1cmdlcl9fYnV0dG9uX193cmFwcGVyX19hY3RpdmVcIiA6IG51bGxdOyAvL2RvbmVcbiAgY29uc3QgbG9nb0NsYXNzZXMgPSBbXCJMb2dvX193cmFwcGVyXCIsIG5hdkl0ZW1zQWN0aXZlID8gXCJMb2dvX193cmFwcGVyX19hY3RpdmVcIiA6IG51bGxdO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBhY3RpdmU9e3RydWV9PlxuICAgICAgICA8UHJvZHVjdExvZ28gLz5cbiAgICAgICAgPEhhbWJ1cmdlckJ1dHRvbiBhY3RpdmU9e3RydWV9Lz5cbiAgICAgIDwvTmF2aWdhdGlvblBhbmVsPlxuICAgICAgPEhCV3IgYWN0aXZlPXt0cnVlfT5cbiAgICAgICAgPEhhbWJ1cmdlckJ1dHRvbiAvPlxuICAgICAgPC9IQldyPlxuICAgICAgPExvZ29XciBhY3RpdmU9e3RydWV9PlxuICAgICAgICA8UHJvZHVjdExvZ28gLz5cbiAgICAgIDwvTG9nb1dyPlxuICAgICAgPFNob3BwaW5nQ2FydCBzdHlsZT17d2luZG93LmlubmVyV2lkdGggPCA2NDAgPyBib3R0b21JY29uU3R5bGUgOiB0b3BJY29uU3R5bGV9Lz5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9vbGJhcjtcblxuXG4vLyB7LyogPGRpdiBjbGFzc05hbWU9e25hdmlnYXRpb25QYW5lbENsYXNzZXMuam9pbignICcpfSBzdHlsZT17aWNvblN0eWxlc30+XG4vLyAgICAgICAgIHsvKiA8TG9nbyAvPlxuLy8gICAgICAgICA8SGFtYnVyZ2VyQnV0dG9uIC8+ICovfVxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgICA8ZGl2IHN0eWxlPXtib3R0b21JY29uU3R5bGV9IGNsYXNzTmFtZT17aGFtYnVyZ2VyQnV0dG9uQ2xhc3Nlcy5qb2luKCcgJyl9PlxuLy8gICAgICAgICB7LyogPEhhbWJ1cmdlckJ1dHRvbiAvPiAqL31cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICAgPGRpdiBzdHlsZT17aWNvblN0eWxlc30gY2xhc3NOYW1lPXtsb2dvQ2xhc3Nlcy5qb2luKCcgJyl9PlxuLy8gICAgICAgey8qIDxMb2dvIC8+ICovfVxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgICB7LyogPERyb3Bkb3duXG4vLyAgICAgICAgICAgZHJvcERvd25Ub2dnbGVySGFuZGxlcj17KCkgPT4gb25TaG93TmF2aWdhdGlvbkl0ZW1zKCl9XG4vLyAgICAgICAgICAgc3ViSXRlbXM9e25hdkl0ZW1zfVxuLy8gICAgICAgICAgIHdpdGhIYW1idXJnZXJcbi8vICAgICAgICAgICBzaG93RHJvcERvd249e25hdkl0ZW1zQWN0aXZlfVxuLy8gICAgICAgICAvPlxuLy8gICAgICAgPENhcnQgc3R5bGU9e3dpbmRvdy5pbm5lcldpZHRoIDwgNjQwID8gYm90dG9tSWNvblN0eWxlIDogdG9wSWNvblN0eWxlfSAvPiAqL30gKi99Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Navigation/Toolbar/Toolbar.js\n");

/***/ })

})