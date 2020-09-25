webpackHotUpdate_N_E("pages/_app",{

/***/ "./Components/Navigation/Toolbar/Toolbar.js":
/*!**************************************************!*\
  !*** ./Components/Navigation/Toolbar/Toolbar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n/* harmony import */ var _StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../StyledComponents/toolbarItems */ \"./StyledComponents/toolbarItems.js\");\n/* harmony import */ var _public_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/Icon/Icon */ \"./public/Icon/Icon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_b64c5b009f74cdcf964dbb949a1d9ffa/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Navigation/Toolbar/Toolbar.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n // import Logo from \"../../../UI/Logo/Logo\";\n// import Cart from \"../../../UI/Cart/Cart\";\n// import Dropdown from \"../Dropdown/Dropdown\";\n// import HamburgerButton from \"../HamburgerButton/HamburgerButton\";\n\n\n\n\n\n\n\nvar HamburgerButton = function HamburgerButton(_ref) {\n  var active = _ref.active;\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_4__[\"HBInnerWr\"], {\n    active: active,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 8\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_4__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 10\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_4__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 10\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_4__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 10\n    }\n  }));\n};\n\n_c = HamburgerButton;\n\nvar ProductLogo = function ProductLogo() {\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_4__[\"Logo\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 3\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    href: \"/\",\n    passHref: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(_public_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__[\"Bee\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  })));\n};\n\n_c2 = ProductLogo;\n\nvar ShoppingCart = function ShoppingCart(_ref2) {\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2);\n\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_4__[\"Cart\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 3\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_4__[\"CartCounter\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, \"3\")));\n};\n\n_c3 = ShoppingCart;\n\nvar Toolbar = function Toolbar(_ref3) {\n  _s();\n\n  var visible = _ref3.visible;\n  var onShowNavigationItems = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_3__[\"useShowNavigationItems\"])());\n  var navItemsActive = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.navigation.showNavItems;\n  });\n  var navItems = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.navigation.navItems;\n  });\n  var toolbarIconHidden = {\n    top: \"-10vh\"\n  };\n  var toolbarIconShow = {\n    bottom: \"0\"\n  };\n  var topIconStyle = !visible ? {\n    top: \"-10vh\"\n  } : {\n    bottom: 0\n  };\n  var bottomIconStyle = !visible ? {\n    bottom: \"-10vh\"\n  } : {\n    bottom: \"2rem\"\n  };\n  var iconStyles = !visible ? toolbarIconHidden : toolbarIconShow;\n  var navigationPanelClasses = [\"NavigationPanel\", navItemsActive ? \"NavigationPanel__active\" : null];\n  var hamburgerButtonClasses = [\"Hamburger__button__wrapper\", navItemsActive ? \"Hamburger__button__wrapper__active\" : null]; //done\n\n  var logoClasses = [\"Logo__wrapper\", navItemsActive ? \"Logo__wrapper__active\" : null];\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_4__[\"NavigationPanel\"], {\n    active: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, __jsx(ProductLogo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }), __jsx(HamburgerButton, {\n    active: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_4__[\"HBWr\"], {\n    active: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, __jsx(HamburgerButton, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_4__[\"LogoWr\"], {\n    active: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, __jsx(ProductLogo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  })), __jsx(ShoppingCart, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Toolbar, \"h0NauXo2XqYr3X6XbHQ1w0e6t04=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_3__[\"useShowNavigationItems\"], react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"]];\n});\n\n_c4 = Toolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toolbar); // {/* <div className={navigationPanelClasses.join(' ')} style={iconStyles}>\n//         {/* <Logo />\n//         <HamburgerButton /> */}\n//       </div>\n//       <div style={bottomIconStyle} className={hamburgerButtonClasses.join(' ')}>\n//         {/* <HamburgerButton /> */}\n//       </div>\n//       <div style={iconStyles} className={logoClasses.join(' ')}>\n//       {/* <Logo /> */}\n//       </div>\n//       {/* <Dropdown\n//           dropDownTogglerHandler={() => onShowNavigationItems()}\n//           subItems={navItems}\n//           withHamburger\n//           showDropDown={navItemsActive}\n//         />\n//       <Cart style={window.innerWidth < 640 ? bottomIconStyle : topIconStyle} /> */} */}\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"HamburgerButton\");\n$RefreshReg$(_c2, \"ProductLogo\");\n$RefreshReg$(_c3, \"ShoppingCart\");\n$RefreshReg$(_c4, \"Toolbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9OYXZpZ2F0aW9uL1Rvb2xiYXIvVG9vbGJhci5qcz85NzE3Il0sIm5hbWVzIjpbIkhhbWJ1cmdlckJ1dHRvbiIsImFjdGl2ZSIsIlByb2R1Y3RMb2dvIiwiU2hvcHBpbmdDYXJ0IiwiVG9vbGJhciIsInZpc2libGUiLCJvblNob3dOYXZpZ2F0aW9uSXRlbXMiLCJ1c2VEaXNwYXRjaCIsInVzZVNob3dOYXZpZ2F0aW9uSXRlbXMiLCJuYXZJdGVtc0FjdGl2ZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJuYXZpZ2F0aW9uIiwic2hvd05hdkl0ZW1zIiwibmF2SXRlbXMiLCJ0b29sYmFySWNvbkhpZGRlbiIsInRvcCIsInRvb2xiYXJJY29uU2hvdyIsImJvdHRvbSIsInRvcEljb25TdHlsZSIsImJvdHRvbUljb25TdHlsZSIsImljb25TdHlsZXMiLCJuYXZpZ2F0aW9uUGFuZWxDbGFzc2VzIiwiaGFtYnVyZ2VyQnV0dG9uQ2xhc3NlcyIsImxvZ29DbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztDQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFjO0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZO0FBQ3BDLFNBQ0ssTUFBQyx3RUFBRDtBQUFXLFVBQU0sRUFBRUEsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURMO0FBT0QsQ0FSRDs7S0FBTUQsZTs7QUFVTixJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFNBQ2xCLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFlLFlBQVEsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBREYsQ0FEa0I7QUFBQSxDQUFwQjs7TUFBTUEsVzs7QUFRTixJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBOztBQUFBLFNBQ25CLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERixDQURGLENBRG1CO0FBQUEsQ0FBckI7O01BQU1BLFk7O0FBU04sSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsUUFBZTtBQUFBOztBQUFBLE1BQWJDLE9BQWEsU0FBYkEsT0FBYTtBQUM5QixNQUFNQyxxQkFBcUIsR0FBR0MsK0RBQVcsQ0FBQ0MsMEZBQXNCLEVBQXZCLENBQXpDO0FBQ0EsTUFBTUMsY0FBYyxHQUFHQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJDLFlBQXJCO0FBQUEsR0FBTixDQUFsQztBQUNBLE1BQU1DLFFBQVEsR0FBR0osK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxVQUFOLENBQWlCRSxRQUFyQjtBQUFBLEdBQU4sQ0FBNUI7QUFDQyxNQUFJQyxpQkFBaUIsR0FBRztBQUN0QkMsT0FBRyxFQUFFO0FBRGlCLEdBQXhCO0FBSUEsTUFBSUMsZUFBZSxHQUFHO0FBQ3BCQyxVQUFNLEVBQUU7QUFEWSxHQUF0QjtBQUlBLE1BQUlDLFlBQVksR0FBRyxDQUFDZCxPQUFELEdBQVc7QUFBRVcsT0FBRyxFQUFFO0FBQVAsR0FBWCxHQUE2QjtBQUFDRSxVQUFNLEVBQUU7QUFBVCxHQUFoRDtBQUNBLE1BQUlFLGVBQWUsR0FBRyxDQUFDZixPQUFELEdBQVc7QUFBQ2EsVUFBTSxFQUFFO0FBQVQsR0FBWCxHQUErQjtBQUFDQSxVQUFNLEVBQUU7QUFBVCxHQUFyRDtBQUVBLE1BQU1HLFVBQVUsR0FBRyxDQUFDaEIsT0FBRCxHQUFXVSxpQkFBWCxHQUErQkUsZUFBbEQ7QUFDQSxNQUFNSyxzQkFBc0IsR0FBRyxDQUFDLGlCQUFELEVBQW9CYixjQUFjLEdBQUcseUJBQUgsR0FBK0IsSUFBakUsQ0FBL0I7QUFDQSxNQUFNYyxzQkFBc0IsR0FBRSxDQUFDLDRCQUFELEVBQStCZCxjQUFjLEdBQUcsb0NBQUgsR0FBMEMsSUFBdkYsQ0FBOUIsQ0FqQjZCLENBaUIrRjs7QUFDNUgsTUFBTWUsV0FBVyxHQUFHLENBQUMsZUFBRCxFQUFrQmYsY0FBYyxHQUFHLHVCQUFILEdBQTZCLElBQTdELENBQXBCO0FBRUEsU0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFVBQU0sRUFBRSxJQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsZUFBRDtBQUFpQixVQUFNLEVBQUUsSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRSxNQUFDLG1FQUFEO0FBQU0sVUFBTSxFQUFFLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixFQVFFLE1BQUMscUVBQUQ7QUFBUSxVQUFNLEVBQUUsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FSRixFQVdFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FERjtBQWVELENBbkNEOztHQUFNTCxPO1VBQ3lCRyx1RCxFQUFZQyxrRixFQUNuQkUsdUQsRUFDTkEsdUQ7OztNQUhaTixPO0FBcUNTQSxzRUFBZixFLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL0NvbXBvbmVudHMvTmF2aWdhdGlvbi9Ub29sYmFyL1Rvb2xiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi8uLi9VSS9Mb2dvL0xvZ29cIjtcbi8vIGltcG9ydCBDYXJ0IGZyb20gXCIuLi8uLi8uLi9VSS9DYXJ0L0NhcnRcIjtcbi8vIGltcG9ydCBEcm9wZG93biBmcm9tIFwiLi4vRHJvcGRvd24vRHJvcGRvd25cIjtcbi8vIGltcG9ydCBIYW1idXJnZXJCdXR0b24gZnJvbSBcIi4uL0hhbWJ1cmdlckJ1dHRvbi9IYW1idXJnZXJCdXR0b25cIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHt1c2VTaG93TmF2aWdhdGlvbkl0ZW1zfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL2FjdGlvbnNJbmRleCdcbmltcG9ydCB7TmF2aWdhdGlvblBhbmVsLCBIQldyLCBIQklubmVyV3IsIEhCU3BhbiwgTG9nbywgTG9nb1dyLCBDYXJ0LCBDYXJ0Q291bnRlcn0gZnJvbSAnLi4vLi4vLi4vU3R5bGVkQ29tcG9uZW50cy90b29sYmFySXRlbXMnXG5pbXBvcnQge0JlZX0gZnJvbSAnLi4vLi4vLi4vcHVibGljL0ljb24vSWNvbidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgSGFtYnVyZ2VyQnV0dG9uID0gKHthY3RpdmV9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgICAgPEhCSW5uZXJXciBhY3RpdmU9e2FjdGl2ZX0+XG4gICAgICAgICA8SEJTcGFuIC8+XG4gICAgICAgICA8SEJTcGFuIC8+XG4gICAgICAgICA8SEJTcGFuIC8+XG4gICAgICAgPC9IQklubmVyV3I+XG4gIClcbn1cblxuY29uc3QgUHJvZHVjdExvZ28gPSAoKSA9PiAoXG4gIDxMb2dvPlxuICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XG4gICAgPEJlZSAvPlxuICAgIDwvTGluaz5cbiAgPC9Mb2dvPlxuKVxuXG5jb25zdCBTaG9wcGluZ0NhcnQgPSAoe30pID0+IChcbiAgPENhcnQ+XG4gICAgPENhcnRDb3VudGVyPlxuICAgICAgPHNwYW4+Mzwvc3Bhbj5cbiAgICA8L0NhcnRDb3VudGVyPlxuICA8L0NhcnQ+XG4pXG5cblxuY29uc3QgVG9vbGJhciA9ICh7dmlzaWJsZX0pID0+IHtcbiBjb25zdCBvblNob3dOYXZpZ2F0aW9uSXRlbXMgPSB1c2VEaXNwYXRjaCh1c2VTaG93TmF2aWdhdGlvbkl0ZW1zKCkpXG4gY29uc3QgbmF2SXRlbXNBY3RpdmUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5uYXZpZ2F0aW9uLnNob3dOYXZJdGVtcyk7XG4gY29uc3QgbmF2SXRlbXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5uYXZpZ2F0aW9uLm5hdkl0ZW1zKVxuICBsZXQgdG9vbGJhckljb25IaWRkZW4gPSB7XG4gICAgdG9wOiBcIi0xMHZoXCIsXG4gIH07XG5cbiAgbGV0IHRvb2xiYXJJY29uU2hvdyA9IHtcbiAgICBib3R0b206IFwiMFwiLFxuICB9O1xuXG4gIGxldCB0b3BJY29uU3R5bGUgPSAhdmlzaWJsZSA/IHsgdG9wOiBcIi0xMHZoXCJ9IDoge2JvdHRvbTogMH07XG4gIGxldCBib3R0b21JY29uU3R5bGUgPSAhdmlzaWJsZSA/IHtib3R0b206IFwiLTEwdmhcIn0gOiB7Ym90dG9tOiBcIjJyZW1cIn07XG5cbiAgY29uc3QgaWNvblN0eWxlcyA9ICF2aXNpYmxlID8gdG9vbGJhckljb25IaWRkZW4gOiB0b29sYmFySWNvblNob3c7XG4gIGNvbnN0IG5hdmlnYXRpb25QYW5lbENsYXNzZXMgPSBbXCJOYXZpZ2F0aW9uUGFuZWxcIiwgbmF2SXRlbXNBY3RpdmUgPyBcIk5hdmlnYXRpb25QYW5lbF9fYWN0aXZlXCIgOiBudWxsXVxuICBjb25zdCBoYW1idXJnZXJCdXR0b25DbGFzc2VzPSBbXCJIYW1idXJnZXJfX2J1dHRvbl9fd3JhcHBlclwiLCBuYXZJdGVtc0FjdGl2ZSA/IFwiSGFtYnVyZ2VyX19idXR0b25fX3dyYXBwZXJfX2FjdGl2ZVwiIDogbnVsbF07IC8vZG9uZVxuICBjb25zdCBsb2dvQ2xhc3NlcyA9IFtcIkxvZ29fX3dyYXBwZXJcIiwgbmF2SXRlbXNBY3RpdmUgPyBcIkxvZ29fX3dyYXBwZXJfX2FjdGl2ZVwiIDogbnVsbF07XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGFjdGl2ZT17dHJ1ZX0+XG4gICAgICAgIDxQcm9kdWN0TG9nbyAvPlxuICAgICAgICA8SGFtYnVyZ2VyQnV0dG9uIGFjdGl2ZT17dHJ1ZX0vPlxuICAgICAgPC9OYXZpZ2F0aW9uUGFuZWw+XG4gICAgICA8SEJXciBhY3RpdmU9e3RydWV9PlxuICAgICAgICA8SGFtYnVyZ2VyQnV0dG9uIC8+XG4gICAgICA8L0hCV3I+XG4gICAgICA8TG9nb1dyIGFjdGl2ZT17dHJ1ZX0+XG4gICAgICAgIDxQcm9kdWN0TG9nbyAvPlxuICAgICAgPC9Mb2dvV3I+XG4gICAgICA8U2hvcHBpbmdDYXJ0IC8+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXI7XG5cblxuLy8gey8qIDxkaXYgY2xhc3NOYW1lPXtuYXZpZ2F0aW9uUGFuZWxDbGFzc2VzLmpvaW4oJyAnKX0gc3R5bGU9e2ljb25TdHlsZXN9PlxuLy8gICAgICAgICB7LyogPExvZ28gLz5cbi8vICAgICAgICAgPEhhbWJ1cmdlckJ1dHRvbiAvPiAqL31cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICAgPGRpdiBzdHlsZT17Ym90dG9tSWNvblN0eWxlfSBjbGFzc05hbWU9e2hhbWJ1cmdlckJ1dHRvbkNsYXNzZXMuam9pbignICcpfT5cbi8vICAgICAgICAgey8qIDxIYW1idXJnZXJCdXR0b24gLz4gKi99XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICAgIDxkaXYgc3R5bGU9e2ljb25TdHlsZXN9IGNsYXNzTmFtZT17bG9nb0NsYXNzZXMuam9pbignICcpfT5cbi8vICAgICAgIHsvKiA8TG9nbyAvPiAqL31cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICAgey8qIDxEcm9wZG93blxuLy8gICAgICAgICAgIGRyb3BEb3duVG9nZ2xlckhhbmRsZXI9eygpID0+IG9uU2hvd05hdmlnYXRpb25JdGVtcygpfVxuLy8gICAgICAgICAgIHN1Ykl0ZW1zPXtuYXZJdGVtc31cbi8vICAgICAgICAgICB3aXRoSGFtYnVyZ2VyXG4vLyAgICAgICAgICAgc2hvd0Ryb3BEb3duPXtuYXZJdGVtc0FjdGl2ZX1cbi8vICAgICAgICAgLz5cbi8vICAgICAgIDxDYXJ0IHN0eWxlPXt3aW5kb3cuaW5uZXJXaWR0aCA8IDY0MCA/IGJvdHRvbUljb25TdHlsZSA6IHRvcEljb25TdHlsZX0gLz4gKi99ICovfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Navigation/Toolbar/Toolbar.js\n");

/***/ }),

/***/ "./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _objectDestructuringEmpty; });\nfunction _objectDestructuringEmpty(obj) {\n  if (obj == null) throw new TypeError(\"Cannot destructure undefined\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9AYmFiZWwvcnVudGltZS83LjExLjIvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdERlc3RydWN0dXJpbmdFbXB0eS5qcz9kMjE4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vcmVnaXN0cnkubnBtanMub3JnL0BiYWJlbC9ydW50aW1lLzcuMTEuMi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0RGVzdHJ1Y3R1cmluZ0VtcHR5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdERlc3RydWN0dXJpbmdFbXB0eShvYmopIHtcbiAgaWYgKG9iaiA9PSBudWxsKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGRlc3RydWN0dXJlIHVuZGVmaW5lZFwiKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\n");

/***/ })

})