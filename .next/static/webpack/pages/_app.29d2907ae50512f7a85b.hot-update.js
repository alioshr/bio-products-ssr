webpackHotUpdate_N_E("pages/_app",{

/***/ "./Components/Navigation/Toolbar/Toolbar.js":
/*!**************************************************!*\
  !*** ./Components/Navigation/Toolbar/Toolbar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n/* harmony import */ var _StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../StyledComponents/toolbarItems */ \"./StyledComponents/toolbarItems.js\");\n/* harmony import */ var _public_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/Icon/Icon */ \"./public/Icon/Icon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_b64c5b009f74cdcf964dbb949a1d9ffa/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Navigation/Toolbar/Toolbar.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar HamburgerButton = function HamburgerButton(_ref) {\n  var active = _ref.active;\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBInnerWr\"], {\n    active: active,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c = HamburgerButton;\n\nvar ProductLogo = function ProductLogo() {\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"Logo\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 3\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(_public_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"Bee\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  })));\n};\n\n_c2 = ProductLogo;\n\nvar ShoppingCart = function ShoppingCart(_ref2) {\n  var style = _ref2.style;\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"Cart\"], {\n    style: style,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 3\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faShoppingBag\"],\n    size: \"2x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"CartCounter\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, \"3\")));\n};\n\n_c3 = ShoppingCart;\n\nvar Toolbar = function Toolbar(_ref3) {\n  _s();\n\n  var visible = _ref3.visible;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      globalWindow = _useState[0],\n      setGlobalWindow = _useState[1];\n\n  var onShowNavigationItems = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"])());\n  var navItemsActive = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.navigation.showNavItems;\n  });\n  var navItems = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.navigation.navItems;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setGlobalWindow(window);\n  }, []);\n  var toolbarIconHidden = {\n    top: \"-10vh\"\n  };\n  var toolbarIconShow = {\n    bottom: \"1rem\"\n  };\n  var topIconStyle = !visible ? {\n    top: \"-10vh\"\n  } : {\n    bottom: '1rem'\n  };\n  var bottomIconStyle = !visible ? {\n    bottom: \"-10vh\"\n  } : {\n    bottom: \"1rem\"\n  };\n  var iconStyles = !visible ? toolbarIconHidden : toolbarIconShow;\n  console.log(globalWindow);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"NavigationPanel\"], {\n    active: navItemsActive,\n    style: iconStyles,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, __jsx(ProductLogo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }), __jsx(HamburgerButton, {\n    active: navItemsActive,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBWr\"], {\n    active: navItemsActive,\n    style: bottomIconStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, __jsx(HamburgerButton, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"LogoWr\"], {\n    active: navItemsActive,\n    style: iconStyles,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, __jsx(ProductLogo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  })), __jsx(ShoppingCart, {\n    style: globalWindow.innerWidth < 640 ? bottomIconStyle : topIconStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Toolbar, \"PHsydZe9ssRmD92ou1W3ljzYraI=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c4 = Toolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toolbar);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"HamburgerButton\");\n$RefreshReg$(_c2, \"ProductLogo\");\n$RefreshReg$(_c3, \"ShoppingCart\");\n$RefreshReg$(_c4, \"Toolbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9OYXZpZ2F0aW9uL1Rvb2xiYXIvVG9vbGJhci5qcz85NzE3Il0sIm5hbWVzIjpbIkhhbWJ1cmdlckJ1dHRvbiIsImFjdGl2ZSIsIlByb2R1Y3RMb2dvIiwiU2hvcHBpbmdDYXJ0Iiwic3R5bGUiLCJmYVNob3BwaW5nQmFnIiwiVG9vbGJhciIsInZpc2libGUiLCJ1c2VTdGF0ZSIsImdsb2JhbFdpbmRvdyIsInNldEdsb2JhbFdpbmRvdyIsIm9uU2hvd05hdmlnYXRpb25JdGVtcyIsInVzZURpc3BhdGNoIiwidXNlU2hvd05hdmlnYXRpb25JdGVtcyIsIm5hdkl0ZW1zQWN0aXZlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIm5hdmlnYXRpb24iLCJzaG93TmF2SXRlbXMiLCJuYXZJdGVtcyIsInVzZUVmZmVjdCIsIndpbmRvdyIsInRvb2xiYXJJY29uSGlkZGVuIiwidG9wIiwidG9vbGJhckljb25TaG93IiwiYm90dG9tIiwidG9wSWNvblN0eWxlIiwiYm90dG9tSWNvblN0eWxlIiwiaWNvblN0eWxlcyIsImNvbnNvbGUiLCJsb2ciLCJpbm5lcldpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQWdCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQ3RDLFNBQ0UsTUFBQyx3RUFBRDtBQUFXLFVBQU0sRUFBRUEsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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LENBREYsRUFLRSxNQUFDLG1FQUFEO0FBQU0sVUFBTSxFQUFFQSxjQUFkO0FBQThCLFNBQUssRUFBRWEsZUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixFQVFFLE1BQUMscUVBQUQ7QUFBUSxVQUFNLEVBQUViLGNBQWhCO0FBQWdDLFNBQUssRUFBRWMsVUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FSRixFQVdFLE1BQUMsWUFBRDtBQUNFLFNBQUssRUFBRW5CLFlBQVksQ0FBQ3NCLFVBQWIsR0FBMEIsR0FBMUIsR0FBZ0NKLGVBQWhDLEdBQWtERCxZQUQzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FERjtBQWlCRCxDQWpDRDs7R0FBTXBCLE87VUFFMEJNLHVELEVBQVlDLGtGLEVBQ25CRSx1RCxFQUNOQSx1RDs7O01BSmJULE87QUFtQ1NBLHNFQUFmIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9OYXZpZ2F0aW9uL1Rvb2xiYXIvVG9vbGJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VTaG93TmF2aWdhdGlvbkl0ZW1zIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvYWN0aW9uc0luZGV4XCI7XG5pbXBvcnQge1xuICBOYXZpZ2F0aW9uUGFuZWwsXG4gIEhCV3IsXG4gIEhCSW5uZXJXcixcbiAgSEJTcGFuLFxuICBMb2dvLFxuICBMb2dvV3IsXG4gIENhcnQsXG4gIENhcnRDb3VudGVyLFxufSBmcm9tIFwiLi4vLi4vLi4vU3R5bGVkQ29tcG9uZW50cy90b29sYmFySXRlbXNcIjtcbmltcG9ydCB7IEJlZSB9IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvSWNvbi9JY29uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBmYVNob3BwaW5nQmFnIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuXG5jb25zdCBIYW1idXJnZXJCdXR0b24gPSAoeyBhY3RpdmUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxIQklubmVyV3IgYWN0aXZlPXthY3RpdmV9PlxuICAgICAgPEhCU3BhbiAvPlxuICAgICAgPEhCU3BhbiAvPlxuICAgICAgPEhCU3BhbiAvPlxuICAgIDwvSEJJbm5lcldyPlxuICApO1xufTtcblxuY29uc3QgUHJvZHVjdExvZ28gPSAoKSA9PiAoXG4gIDxMb2dvPlxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICA8QmVlIC8+XG4gICAgPC9MaW5rPlxuICA8L0xvZ28+XG4pO1xuXG5jb25zdCBTaG9wcGluZ0NhcnQgPSAoeyBzdHlsZSB9KSA9PiAoXG4gIDxDYXJ0IHN0eWxlPXtzdHlsZX0+XG4gICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNob3BwaW5nQmFnfSBzaXplPVwiMnhcIiAvPlxuICAgIDxDYXJ0Q291bnRlcj5cbiAgICAgIDxzcGFuPjM8L3NwYW4+XG4gICAgPC9DYXJ0Q291bnRlcj5cbiAgPC9DYXJ0PlxuKTtcblxuY29uc3QgVG9vbGJhciA9ICh7IHZpc2libGUgfSkgPT4ge1xuICBjb25zdCBbZ2xvYmFsV2luZG93LCBzZXRHbG9iYWxXaW5kb3ddID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IG9uU2hvd05hdmlnYXRpb25JdGVtcyA9IHVzZURpc3BhdGNoKHVzZVNob3dOYXZpZ2F0aW9uSXRlbXMoKSk7XG4gIGNvbnN0IG5hdkl0ZW1zQWN0aXZlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5uYXZpZ2F0aW9uLnNob3dOYXZJdGVtcyk7XG4gIGNvbnN0IG5hdkl0ZW1zID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5uYXZpZ2F0aW9uLm5hdkl0ZW1zKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEdsb2JhbFdpbmRvdyh3aW5kb3cpO1xuICB9LCBbXSk7XG5cbiAgbGV0IHRvb2xiYXJJY29uSGlkZGVuID0ge3RvcDogXCItMTB2aFwifTtcbiAgbGV0IHRvb2xiYXJJY29uU2hvdyA9IHtib3R0b206IFwiMXJlbVwifTtcbiAgbGV0IHRvcEljb25TdHlsZSA9ICF2aXNpYmxlID8geyB0b3A6IFwiLTEwdmhcIiB9IDogeyBib3R0b206ICcxcmVtJyB9O1xuICBsZXQgYm90dG9tSWNvblN0eWxlID0gIXZpc2libGUgPyB7IGJvdHRvbTogXCItMTB2aFwiIH0gOiB7IGJvdHRvbTogXCIxcmVtXCIgfTtcbiAgY29uc3QgaWNvblN0eWxlcyA9ICF2aXNpYmxlID8gdG9vbGJhckljb25IaWRkZW4gOiB0b29sYmFySWNvblNob3c7XG4gIGNvbnNvbGUubG9nKGdsb2JhbFdpbmRvdylcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGFjdGl2ZT17bmF2SXRlbXNBY3RpdmV9IHN0eWxlPXtpY29uU3R5bGVzfT5cbiAgICAgICAgPFByb2R1Y3RMb2dvIC8+XG4gICAgICAgIDxIYW1idXJnZXJCdXR0b24gYWN0aXZlPXtuYXZJdGVtc0FjdGl2ZX0gLz5cbiAgICAgIDwvTmF2aWdhdGlvblBhbmVsPlxuICAgICAgPEhCV3IgYWN0aXZlPXtuYXZJdGVtc0FjdGl2ZX0gc3R5bGU9e2JvdHRvbUljb25TdHlsZX0+XG4gICAgICAgIDxIYW1idXJnZXJCdXR0b24gLz5cbiAgICAgIDwvSEJXcj5cbiAgICAgIDxMb2dvV3IgYWN0aXZlPXtuYXZJdGVtc0FjdGl2ZX0gc3R5bGU9e2ljb25TdHlsZXN9PlxuICAgICAgICA8UHJvZHVjdExvZ28gLz5cbiAgICAgIDwvTG9nb1dyPlxuICAgICAgPFNob3BwaW5nQ2FydFxuICAgICAgICBzdHlsZT17Z2xvYmFsV2luZG93LmlubmVyV2lkdGggPCA2NDAgPyBib3R0b21JY29uU3R5bGUgOiB0b3BJY29uU3R5bGV9XG4gICAgICAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb29sYmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Navigation/Toolbar/Toolbar.js\n");

/***/ })

})