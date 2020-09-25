webpackHotUpdate_N_E("pages/_app",{

/***/ "./Components/Navigation/Toolbar/Toolbar.js":
/*!**************************************************!*\
  !*** ./Components/Navigation/Toolbar/Toolbar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n/* harmony import */ var _StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../StyledComponents/toolbarItems */ \"./StyledComponents/toolbarItems.js\");\n/* harmony import */ var _public_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/Icon/Icon */ \"./public/Icon/Icon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_b64c5b009f74cdcf964dbb949a1d9ffa/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Navigation/Toolbar/Toolbar.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import Logo from \"../../../UI/Logo/Logo\";\n// import Cart from \"../../../UI/Cart/Cart\";\n// import Dropdown from \"../Dropdown/Dropdown\";\n// import HamburgerButton from \"../HamburgerButton/HamburgerButton\";\n\n\n\n\n\n\n\nvar HamburgerButton = function HamburgerButton(_ref) {\n  var active = _ref.active;\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBInnerWr\"], {\n    active: active,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 8\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 10\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 10\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 10\n    }\n  }));\n};\n\n_c = HamburgerButton;\n\nvar ProductLogo = function ProductLogo() {\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"Logo\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 3\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/\",\n    passHref: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(_public_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"Bee\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  })));\n};\n\n_c2 = ProductLogo;\n\nvar Toolbar = function Toolbar(_ref2) {\n  _s();\n\n  var visible = _ref2.visible;\n  var onShowNavigationItems = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"])());\n  var navItemsActive = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.navigation.showNavItems;\n  });\n  var navItems = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.navigation.navItems;\n  });\n  var toolbarIconHidden = {\n    top: \"-10vh\"\n  };\n  var toolbarIconShow = {\n    bottom: \"0\"\n  };\n  var topIconStyle = !visible ? {\n    top: \"-10vh\"\n  } : {\n    bottom: 0\n  };\n  var bottomIconStyle = !visible ? {\n    bottom: \"-10vh\"\n  } : {\n    bottom: \"2rem\"\n  };\n  var iconStyles = !visible ? toolbarIconHidden : toolbarIconShow;\n  var navigationPanelClasses = [\"NavigationPanel\", navItemsActive ? \"NavigationPanel__active\" : null];\n  var hamburgerButtonClasses = [\"Hamburger__button__wrapper\", navItemsActive ? \"Hamburger__button__wrapper__active\" : null]; //done\n\n  var logoClasses = [\"Logo__wrapper\", navItemsActive ? \"Logo__wrapper__active\" : null];\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"NavigationPanel\"], {\n    active: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, __jsx(ProductLogo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBWr\"], {\n    active: false,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, __jsx(HamburgerButton, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(Toolbar, \"h0NauXo2XqYr3X6XbHQ1w0e6t04=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c3 = Toolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toolbar); // {/* <div className={navigationPanelClasses.join(' ')} style={iconStyles}>\n//         {/* <Logo />\n//         <HamburgerButton /> */}\n//       </div>\n//       <div style={bottomIconStyle} className={hamburgerButtonClasses.join(' ')}>\n//         {/* <HamburgerButton /> */}\n//       </div>\n//       <div style={iconStyles} className={logoClasses.join(' ')}>\n//       {/* <Logo /> */}\n//       </div>\n//       {/* <Dropdown\n//           dropDownTogglerHandler={() => onShowNavigationItems()}\n//           subItems={navItems}\n//           withHamburger\n//           showDropDown={navItemsActive}\n//         />\n//       <Cart style={window.innerWidth < 640 ? bottomIconStyle : topIconStyle} /> */} */}\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"HamburgerButton\");\n$RefreshReg$(_c2, \"ProductLogo\");\n$RefreshReg$(_c3, \"Toolbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9OYXZpZ2F0aW9uL1Rvb2xiYXIvVG9vbGJhci5qcz85NzE3Il0sIm5hbWVzIjpbIkhhbWJ1cmdlckJ1dHRvbiIsImFjdGl2ZSIsIlByb2R1Y3RMb2dvIiwiVG9vbGJhciIsInZpc2libGUiLCJvblNob3dOYXZpZ2F0aW9uSXRlbXMiLCJ1c2VEaXNwYXRjaCIsInVzZVNob3dOYXZpZ2F0aW9uSXRlbXMiLCJuYXZJdGVtc0FjdGl2ZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJuYXZpZ2F0aW9uIiwic2hvd05hdkl0ZW1zIiwibmF2SXRlbXMiLCJ0b29sYmFySWNvbkhpZGRlbiIsInRvcCIsInRvb2xiYXJJY29uU2hvdyIsImJvdHRvbSIsInRvcEljb25TdHlsZSIsImJvdHRvbUljb25TdHlsZSIsImljb25TdHlsZXMiLCJuYXZpZ2F0aW9uUGFuZWxDbGFzc2VzIiwiaGFtYnVyZ2VyQnV0dG9uQ2xhc3NlcyIsImxvZ29DbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztDQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFjO0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZO0FBQ3BDLFNBQ0ssTUFBQyx3RUFBRDtBQUFXLFVBQU0sRUFBRUEsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURMO0FBT0QsQ0FSRDs7S0FBTUQsZTs7QUFVTixJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFNBQ2xCLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFlLFlBQVEsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBREYsQ0FEa0I7QUFBQSxDQUFwQjs7TUFBTUEsVzs7QUFTTixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxRQUFlO0FBQUE7O0FBQUEsTUFBYkMsT0FBYSxTQUFiQSxPQUFhO0FBQzlCLE1BQU1DLHFCQUFxQixHQUFHQywrREFBVyxDQUFDQywwRkFBc0IsRUFBdkIsQ0FBekM7QUFDQSxNQUFNQyxjQUFjLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsWUFBckI7QUFBQSxHQUFOLENBQWxDO0FBQ0EsTUFBTUMsUUFBUSxHQUFHSiwrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJFLFFBQXJCO0FBQUEsR0FBTixDQUE1QjtBQUNDLE1BQUlDLGlCQUFpQixHQUFHO0FBQ3RCQyxPQUFHLEVBQUU7QUFEaUIsR0FBeEI7QUFJQSxNQUFJQyxlQUFlLEdBQUc7QUFDcEJDLFVBQU0sRUFBRTtBQURZLEdBQXRCO0FBSUEsTUFBSUMsWUFBWSxHQUFHLENBQUNkLE9BQUQsR0FBVztBQUFFVyxPQUFHLEVBQUU7QUFBUCxHQUFYLEdBQTZCO0FBQUNFLFVBQU0sRUFBRTtBQUFULEdBQWhEO0FBQ0EsTUFBSUUsZUFBZSxHQUFHLENBQUNmLE9BQUQsR0FBVztBQUFDYSxVQUFNLEVBQUU7QUFBVCxHQUFYLEdBQStCO0FBQUNBLFVBQU0sRUFBRTtBQUFULEdBQXJEO0FBRUEsTUFBTUcsVUFBVSxHQUFHLENBQUNoQixPQUFELEdBQVdVLGlCQUFYLEdBQStCRSxlQUFsRDtBQUNBLE1BQU1LLHNCQUFzQixHQUFHLENBQUMsaUJBQUQsRUFBb0JiLGNBQWMsR0FBRyx5QkFBSCxHQUErQixJQUFqRSxDQUEvQjtBQUNBLE1BQU1jLHNCQUFzQixHQUFFLENBQUMsNEJBQUQsRUFBK0JkLGNBQWMsR0FBRyxvQ0FBSCxHQUEwQyxJQUF2RixDQUE5QixDQWpCNkIsQ0FpQitGOztBQUM1SCxNQUFNZSxXQUFXLEdBQUcsQ0FBQyxlQUFELEVBQWtCZixjQUFjLEdBQUcsdUJBQUgsR0FBNkIsSUFBN0QsQ0FBcEI7QUFFQSxTQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOEVBQUQ7QUFBaUIsVUFBTSxFQUFFLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxNQUFDLG1FQUFEO0FBQU0sVUFBTSxFQUFFLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQURGO0FBVUQsQ0E5QkQ7O0dBQU1MLE87VUFDeUJHLHVELEVBQVlDLGtGLEVBQ25CRSx1RCxFQUNOQSx1RDs7O01BSFpOLE87QUFnQ1NBLHNFQUFmLEUsQ0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9OYXZpZ2F0aW9uL1Rvb2xiYXIvVG9vbGJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uLy4uL1VJL0xvZ28vTG9nb1wiO1xuLy8gaW1wb3J0IENhcnQgZnJvbSBcIi4uLy4uLy4uL1VJL0NhcnQvQ2FydFwiO1xuLy8gaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi9Ecm9wZG93bi9Ecm9wZG93blwiO1xuLy8gaW1wb3J0IEhhbWJ1cmdlckJ1dHRvbiBmcm9tIFwiLi4vSGFtYnVyZ2VyQnV0dG9uL0hhbWJ1cmdlckJ1dHRvblwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge3VzZVNob3dOYXZpZ2F0aW9uSXRlbXN9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvYWN0aW9uc0luZGV4J1xuaW1wb3J0IHtOYXZpZ2F0aW9uUGFuZWwsIEhCV3IsIEhCSW5uZXJXciwgSEJTcGFuLCBMb2dvLCBMb2dvV3J9IGZyb20gJy4uLy4uLy4uL1N0eWxlZENvbXBvbmVudHMvdG9vbGJhckl0ZW1zJ1xuaW1wb3J0IHtCZWV9IGZyb20gJy4uLy4uLy4uL3B1YmxpYy9JY29uL0ljb24nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IEhhbWJ1cmdlckJ1dHRvbiA9ICh7YWN0aXZlfSkgPT4ge1xuICByZXR1cm4gKFxuICAgICAgIDxIQklubmVyV3IgYWN0aXZlPXthY3RpdmV9PlxuICAgICAgICAgPEhCU3BhbiAvPlxuICAgICAgICAgPEhCU3BhbiAvPlxuICAgICAgICAgPEhCU3BhbiAvPlxuICAgICAgIDwvSEJJbm5lcldyPlxuICApXG59XG5cbmNvbnN0IFByb2R1Y3RMb2dvID0gKCkgPT4gKFxuICA8TG9nbz5cbiAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxuICAgIDxCZWUgLz5cbiAgICA8L0xpbms+XG4gIDwvTG9nbz5cbilcblxuXG5jb25zdCBUb29sYmFyID0gKHt2aXNpYmxlfSkgPT4ge1xuIGNvbnN0IG9uU2hvd05hdmlnYXRpb25JdGVtcyA9IHVzZURpc3BhdGNoKHVzZVNob3dOYXZpZ2F0aW9uSXRlbXMoKSlcbiBjb25zdCBuYXZJdGVtc0FjdGl2ZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm5hdmlnYXRpb24uc2hvd05hdkl0ZW1zKTtcbiBjb25zdCBuYXZJdGVtcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm5hdmlnYXRpb24ubmF2SXRlbXMpXG4gIGxldCB0b29sYmFySWNvbkhpZGRlbiA9IHtcbiAgICB0b3A6IFwiLTEwdmhcIixcbiAgfTtcblxuICBsZXQgdG9vbGJhckljb25TaG93ID0ge1xuICAgIGJvdHRvbTogXCIwXCIsXG4gIH07XG5cbiAgbGV0IHRvcEljb25TdHlsZSA9ICF2aXNpYmxlID8geyB0b3A6IFwiLTEwdmhcIn0gOiB7Ym90dG9tOiAwfTtcbiAgbGV0IGJvdHRvbUljb25TdHlsZSA9ICF2aXNpYmxlID8ge2JvdHRvbTogXCItMTB2aFwifSA6IHtib3R0b206IFwiMnJlbVwifTtcblxuICBjb25zdCBpY29uU3R5bGVzID0gIXZpc2libGUgPyB0b29sYmFySWNvbkhpZGRlbiA6IHRvb2xiYXJJY29uU2hvdztcbiAgY29uc3QgbmF2aWdhdGlvblBhbmVsQ2xhc3NlcyA9IFtcIk5hdmlnYXRpb25QYW5lbFwiLCBuYXZJdGVtc0FjdGl2ZSA/IFwiTmF2aWdhdGlvblBhbmVsX19hY3RpdmVcIiA6IG51bGxdXG4gIGNvbnN0IGhhbWJ1cmdlckJ1dHRvbkNsYXNzZXM9IFtcIkhhbWJ1cmdlcl9fYnV0dG9uX193cmFwcGVyXCIsIG5hdkl0ZW1zQWN0aXZlID8gXCJIYW1idXJnZXJfX2J1dHRvbl9fd3JhcHBlcl9fYWN0aXZlXCIgOiBudWxsXTsgLy9kb25lXG4gIGNvbnN0IGxvZ29DbGFzc2VzID0gW1wiTG9nb19fd3JhcHBlclwiLCBuYXZJdGVtc0FjdGl2ZSA/IFwiTG9nb19fd3JhcHBlcl9fYWN0aXZlXCIgOiBudWxsXTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgYWN0aXZlPXt0cnVlfT5cbiAgICAgICAgPFByb2R1Y3RMb2dvIC8+XG4gICAgICA8L05hdmlnYXRpb25QYW5lbD5cbiAgICAgIDxIQldyIGFjdGl2ZT17ZmFsc2V9PlxuICAgICAgICA8SGFtYnVyZ2VyQnV0dG9uIC8+XG4gICAgICA8L0hCV3I+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXI7XG5cblxuLy8gey8qIDxkaXYgY2xhc3NOYW1lPXtuYXZpZ2F0aW9uUGFuZWxDbGFzc2VzLmpvaW4oJyAnKX0gc3R5bGU9e2ljb25TdHlsZXN9PlxuLy8gICAgICAgICB7LyogPExvZ28gLz5cbi8vICAgICAgICAgPEhhbWJ1cmdlckJ1dHRvbiAvPiAqL31cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICAgPGRpdiBzdHlsZT17Ym90dG9tSWNvblN0eWxlfSBjbGFzc05hbWU9e2hhbWJ1cmdlckJ1dHRvbkNsYXNzZXMuam9pbignICcpfT5cbi8vICAgICAgICAgey8qIDxIYW1idXJnZXJCdXR0b24gLz4gKi99XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICAgIDxkaXYgc3R5bGU9e2ljb25TdHlsZXN9IGNsYXNzTmFtZT17bG9nb0NsYXNzZXMuam9pbignICcpfT5cbi8vICAgICAgIHsvKiA8TG9nbyAvPiAqL31cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICAgey8qIDxEcm9wZG93blxuLy8gICAgICAgICAgIGRyb3BEb3duVG9nZ2xlckhhbmRsZXI9eygpID0+IG9uU2hvd05hdmlnYXRpb25JdGVtcygpfVxuLy8gICAgICAgICAgIHN1Ykl0ZW1zPXtuYXZJdGVtc31cbi8vICAgICAgICAgICB3aXRoSGFtYnVyZ2VyXG4vLyAgICAgICAgICAgc2hvd0Ryb3BEb3duPXtuYXZJdGVtc0FjdGl2ZX1cbi8vICAgICAgICAgLz5cbi8vICAgICAgIDxDYXJ0IHN0eWxlPXt3aW5kb3cuaW5uZXJXaWR0aCA8IDY0MCA/IGJvdHRvbUljb25TdHlsZSA6IHRvcEljb25TdHlsZX0gLz4gKi99ICovfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Navigation/Toolbar/Toolbar.js\n");

/***/ })

})