webpackHotUpdate_N_E("pages/_app",{

/***/ "./Components/Navigation/Toolbar/Toolbar.js":
/*!**************************************************!*\
  !*** ./Components/Navigation/Toolbar/Toolbar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n/* harmony import */ var _StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../StyledComponents/toolbarItems */ \"./StyledComponents/toolbarItems.js\");\n/* harmony import */ var _public_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/Icon/Icon */ \"./public/Icon/Icon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_b64c5b009f74cdcf964dbb949a1d9ffa/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Navigation/Toolbar/Toolbar.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import Dropdown from \"../Dropdown/Dropdown\";\n\n\n\n\n\n\n\n\n\nvar HamburgerButton = function HamburgerButton(_ref) {\n  var active = _ref.active;\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBInnerWr\"], {\n    active: active,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 8\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 10\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 10\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 10\n    }\n  }));\n};\n\n_c = HamburgerButton;\n\nvar ProductLogo = function ProductLogo() {\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"Logo\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 3\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(_public_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"Bee\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  })));\n};\n\n_c2 = ProductLogo;\n\nvar ShoppingCart = function ShoppingCart(_ref2) {\n  var style = _ref2.style;\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"Cart\"], {\n    style: style,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 3\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faShoppingBag\"],\n    size: \"2x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 6\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"CartCounter\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, \"3\")));\n};\n\n_c3 = ShoppingCart;\n\nvar Toolbar = function Toolbar(_ref3) {\n  _s();\n\n  var visible = _ref3.visible;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      window = _useState[0],\n      setWindow = _useState[1];\n\n  var onShowNavigationItems = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"])());\n  var navItemsActive = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.navigation.showNavItems;\n  });\n  var navItems = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.navigation.navItems;\n  });\n  var toolbarIconHidden = {\n    top: \"-10vh\"\n  };\n  var toolbarIconShow = {\n    bottom: \"0\"\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setWindow(window);\n  }, []);\n  var topIconStyle = !visible ? {\n    top: \"-10vh\"\n  } : {\n    bottom: 0\n  };\n  var bottomIconStyle = !visible ? {\n    bottom: \"-10vh\"\n  } : {\n    bottom: \"2rem\"\n  };\n  var iconStyles = !visible ? toolbarIconHidden : toolbarIconShow;\n  var navigationPanelClasses = [\"NavigationPanel\", navItemsActive ? \"NavigationPanel__active\" : null];\n  var hamburgerButtonClasses = [\"Hamburger__button__wrapper\", navItemsActive ? \"Hamburger__button__wrapper__active\" : null]; //done\n\n  var logoClasses = [\"Logo__wrapper\", navItemsActive ? \"Logo__wrapper__active\" : null];\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"NavigationPanel\"], {\n    active: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, __jsx(ProductLogo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }), __jsx(HamburgerButton, {\n    active: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBWr\"], {\n    active: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, __jsx(HamburgerButton, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"LogoWr\"], {\n    active: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }, __jsx(ProductLogo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  })), __jsx(ShoppingCart, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Toolbar, \"48eQbgU4YJQyEQ3khPPC2GJ5fhI=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c4 = Toolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toolbar); // {/* <div className={navigationPanelClasses.join(' ')} style={iconStyles}>\n//         {/* <Logo />\n//         <HamburgerButton /> */}\n//       </div>\n//       <div style={bottomIconStyle} className={hamburgerButtonClasses.join(' ')}>\n//         {/* <HamburgerButton /> */}\n//       </div>\n//       <div style={iconStyles} className={logoClasses.join(' ')}>\n//       {/* <Logo /> */}\n//       </div>\n//       {/* <Dropdown\n//           dropDownTogglerHandler={() => onShowNavigationItems()}\n//           subItems={navItems}\n//           withHamburger\n//           showDropDown={navItemsActive}\n//         />\n//       <Cart style={window.innerWidth < 640 ? bottomIconStyle : topIconStyle} /> */} */}\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"HamburgerButton\");\n$RefreshReg$(_c2, \"ProductLogo\");\n$RefreshReg$(_c3, \"ShoppingCart\");\n$RefreshReg$(_c4, \"Toolbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9OYXZpZ2F0aW9uL1Rvb2xiYXIvVG9vbGJhci5qcz85NzE3Il0sIm5hbWVzIjpbIkhhbWJ1cmdlckJ1dHRvbiIsImFjdGl2ZSIsIlByb2R1Y3RMb2dvIiwiU2hvcHBpbmdDYXJ0Iiwic3R5bGUiLCJmYVNob3BwaW5nQmFnIiwiVG9vbGJhciIsInZpc2libGUiLCJ1c2VTdGF0ZSIsIndpbmRvdyIsInNldFdpbmRvdyIsIm9uU2hvd05hdmlnYXRpb25JdGVtcyIsInVzZURpc3BhdGNoIiwidXNlU2hvd05hdmlnYXRpb25JdGVtcyIsIm5hdkl0ZW1zQWN0aXZlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIm5hdmlnYXRpb24iLCJzaG93TmF2SXRlbXMiLCJuYXZJdGVtcyIsInRvb2xiYXJJY29uSGlkZGVuIiwidG9wIiwidG9vbGJhckljb25TaG93IiwiYm90dG9tIiwidXNlRWZmZWN0IiwidG9wSWNvblN0eWxlIiwiYm90dG9tSWNvblN0eWxlIiwiaWNvblN0eWxlcyIsIm5hdmlnYXRpb25QYW5lbENsYXNzZXMiLCJoYW1idXJnZXJCdXR0b25DbGFzc2VzIiwibG9nb0NsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQWM7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7QUFDcEMsU0FDSyxNQUFDLHdFQUFEO0FBQVcsVUFBTSxFQUFFQSxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMscUVBQUQ7QUFBQTtBQUFB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LDhFQUFEO0FBQWlCLFVBQU0sRUFBRSxJQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsZUFBRDtBQUFpQixVQUFNLEVBQUUsSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRSxNQUFDLG1FQUFEO0FBQU0sVUFBTSxFQUFFLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixFQVFFLE1BQUMscUVBQUQ7QUFBUSxVQUFNLEVBQUUsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FSRixFQVdFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FERjtBQWVELENBeENEOztHQUFNUixPO1VBRXlCTSx1RCxFQUFZQyxrRixFQUNuQkUsdUQsRUFDTkEsdUQ7OztNQUpaVCxPO0FBMENTQSxzRUFBZixFLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL0NvbXBvbmVudHMvTmF2aWdhdGlvbi9Ub29sYmFyL1Rvb2xiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBEcm9wZG93biBmcm9tIFwiLi4vRHJvcGRvd24vRHJvcGRvd25cIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHt1c2VTaG93TmF2aWdhdGlvbkl0ZW1zfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL2FjdGlvbnNJbmRleCdcbmltcG9ydCB7TmF2aWdhdGlvblBhbmVsLCBIQldyLCBIQklubmVyV3IsIEhCU3BhbiwgTG9nbywgTG9nb1dyLCBDYXJ0LCBDYXJ0Q291bnRlcn0gZnJvbSAnLi4vLi4vLi4vU3R5bGVkQ29tcG9uZW50cy90b29sYmFySXRlbXMnXG5pbXBvcnQge0JlZX0gZnJvbSAnLi4vLi4vLi4vcHVibGljL0ljb24vSWNvbidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IGZhU2hvcHBpbmdCYWcgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5cbmNvbnN0IEhhbWJ1cmdlckJ1dHRvbiA9ICh7YWN0aXZlfSkgPT4ge1xuICByZXR1cm4gKFxuICAgICAgIDxIQklubmVyV3IgYWN0aXZlPXthY3RpdmV9PlxuICAgICAgICAgPEhCU3BhbiAvPlxuICAgICAgICAgPEhCU3BhbiAvPlxuICAgICAgICAgPEhCU3BhbiAvPlxuICAgICAgIDwvSEJJbm5lcldyPlxuICApXG59XG5cbmNvbnN0IFByb2R1Y3RMb2dvID0gKCkgPT4gKFxuICA8TG9nbz5cbiAgICA8TGluayBocmVmPVwiL1wiPlxuICAgIDxCZWUgLz5cbiAgICA8L0xpbms+XG4gIDwvTG9nbz5cbilcblxuY29uc3QgU2hvcHBpbmdDYXJ0ID0gKHtzdHlsZX0pID0+IChcbiAgPENhcnQgc3R5bGU9e3N0eWxlfT5cbiAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNob3BwaW5nQmFnfSBzaXplPVwiMnhcIiAvPlxuICAgIDxDYXJ0Q291bnRlcj5cbiAgICAgIDxzcGFuPjM8L3NwYW4+XG4gICAgPC9DYXJ0Q291bnRlcj5cbiAgPC9DYXJ0PlxuKVxuXG5cbmNvbnN0IFRvb2xiYXIgPSAoe3Zpc2libGV9KSA9PiB7XG4gY29uc3QgW3dpbmRvdywgc2V0V2luZG93XSA9IHVzZVN0YXRlKG51bGwpXG4gY29uc3Qgb25TaG93TmF2aWdhdGlvbkl0ZW1zID0gdXNlRGlzcGF0Y2godXNlU2hvd05hdmlnYXRpb25JdGVtcygpKVxuIGNvbnN0IG5hdkl0ZW1zQWN0aXZlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubmF2aWdhdGlvbi5zaG93TmF2SXRlbXMpO1xuIGNvbnN0IG5hdkl0ZW1zID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubmF2aWdhdGlvbi5uYXZJdGVtcylcbiAgbGV0IHRvb2xiYXJJY29uSGlkZGVuID0ge1xuICAgIHRvcDogXCItMTB2aFwiLFxuICB9O1xuXG4gIGxldCB0b29sYmFySWNvblNob3cgPSB7XG4gICAgYm90dG9tOiBcIjBcIixcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFdpbmRvdyh3aW5kb3cpXG4gIH0sIFtdKVxuXG4gIGxldCB0b3BJY29uU3R5bGUgPSAhdmlzaWJsZSA/IHsgdG9wOiBcIi0xMHZoXCJ9IDoge2JvdHRvbTogMH07XG4gIGxldCBib3R0b21JY29uU3R5bGUgPSAhdmlzaWJsZSA/IHtib3R0b206IFwiLTEwdmhcIn0gOiB7Ym90dG9tOiBcIjJyZW1cIn07XG5cbiAgY29uc3QgaWNvblN0eWxlcyA9ICF2aXNpYmxlID8gdG9vbGJhckljb25IaWRkZW4gOiB0b29sYmFySWNvblNob3c7XG4gIGNvbnN0IG5hdmlnYXRpb25QYW5lbENsYXNzZXMgPSBbXCJOYXZpZ2F0aW9uUGFuZWxcIiwgbmF2SXRlbXNBY3RpdmUgPyBcIk5hdmlnYXRpb25QYW5lbF9fYWN0aXZlXCIgOiBudWxsXVxuICBjb25zdCBoYW1idXJnZXJCdXR0b25DbGFzc2VzPSBbXCJIYW1idXJnZXJfX2J1dHRvbl9fd3JhcHBlclwiLCBuYXZJdGVtc0FjdGl2ZSA/IFwiSGFtYnVyZ2VyX19idXR0b25fX3dyYXBwZXJfX2FjdGl2ZVwiIDogbnVsbF07IC8vZG9uZVxuICBjb25zdCBsb2dvQ2xhc3NlcyA9IFtcIkxvZ29fX3dyYXBwZXJcIiwgbmF2SXRlbXNBY3RpdmUgPyBcIkxvZ29fX3dyYXBwZXJfX2FjdGl2ZVwiIDogbnVsbF07XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGFjdGl2ZT17dHJ1ZX0+XG4gICAgICAgIDxQcm9kdWN0TG9nbyAvPlxuICAgICAgICA8SGFtYnVyZ2VyQnV0dG9uIGFjdGl2ZT17dHJ1ZX0vPlxuICAgICAgPC9OYXZpZ2F0aW9uUGFuZWw+XG4gICAgICA8SEJXciBhY3RpdmU9e3RydWV9PlxuICAgICAgICA8SGFtYnVyZ2VyQnV0dG9uIC8+XG4gICAgICA8L0hCV3I+XG4gICAgICA8TG9nb1dyIGFjdGl2ZT17dHJ1ZX0+XG4gICAgICAgIDxQcm9kdWN0TG9nbyAvPlxuICAgICAgPC9Mb2dvV3I+XG4gICAgICA8U2hvcHBpbmdDYXJ0Lz5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9vbGJhcjtcblxuXG4vLyB7LyogPGRpdiBjbGFzc05hbWU9e25hdmlnYXRpb25QYW5lbENsYXNzZXMuam9pbignICcpfSBzdHlsZT17aWNvblN0eWxlc30+XG4vLyAgICAgICAgIHsvKiA8TG9nbyAvPlxuLy8gICAgICAgICA8SGFtYnVyZ2VyQnV0dG9uIC8+ICovfVxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgICA8ZGl2IHN0eWxlPXtib3R0b21JY29uU3R5bGV9IGNsYXNzTmFtZT17aGFtYnVyZ2VyQnV0dG9uQ2xhc3Nlcy5qb2luKCcgJyl9PlxuLy8gICAgICAgICB7LyogPEhhbWJ1cmdlckJ1dHRvbiAvPiAqL31cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICAgPGRpdiBzdHlsZT17aWNvblN0eWxlc30gY2xhc3NOYW1lPXtsb2dvQ2xhc3Nlcy5qb2luKCcgJyl9PlxuLy8gICAgICAgey8qIDxMb2dvIC8+ICovfVxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgICB7LyogPERyb3Bkb3duXG4vLyAgICAgICAgICAgZHJvcERvd25Ub2dnbGVySGFuZGxlcj17KCkgPT4gb25TaG93TmF2aWdhdGlvbkl0ZW1zKCl9XG4vLyAgICAgICAgICAgc3ViSXRlbXM9e25hdkl0ZW1zfVxuLy8gICAgICAgICAgIHdpdGhIYW1idXJnZXJcbi8vICAgICAgICAgICBzaG93RHJvcERvd249e25hdkl0ZW1zQWN0aXZlfVxuLy8gICAgICAgICAvPlxuLy8gICAgICAgPENhcnQgc3R5bGU9e3dpbmRvdy5pbm5lcldpZHRoIDwgNjQwID8gYm90dG9tSWNvblN0eWxlIDogdG9wSWNvblN0eWxlfSAvPiAqL30gKi99Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Navigation/Toolbar/Toolbar.js\n");

/***/ })

})