webpackHotUpdate_N_E("pages/_app",{

/***/ "./Components/Navigation/Toolbar/Toolbar.js":
/*!**************************************************!*\
  !*** ./Components/Navigation/Toolbar/Toolbar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n/* harmony import */ var _StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../StyledComponents/toolbarItems */ \"./StyledComponents/toolbarItems.js\");\n/* harmony import */ var _public_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/Icon/Icon */ \"./public/Icon/Icon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_b64c5b009f74cdcf964dbb949a1d9ffa/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Navigation/Toolbar/Toolbar.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar HamburgerButton = function HamburgerButton(_ref) {\n  var active = _ref.active,\n      toggleNavItems = _ref.toggleNavItems;\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBInnerWr\"], {\n    active: active,\n    onClick: toggleNavItems,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c = HamburgerButton;\n\nvar ProductLogo = function ProductLogo() {\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"Logo\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 3\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(_public_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__[\"Bee\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  })));\n};\n\n_c2 = ProductLogo;\n\nvar ShoppingCart = function ShoppingCart(_ref2) {\n  var style = _ref2.style;\n  return __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"Cart\"], {\n    style: style,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 3\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faShoppingBag\"],\n    size: \"2x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"CartCounter\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, \"3\")));\n};\n\n_c3 = ShoppingCart;\n\nvar Toolbar = function Toolbar(_ref3) {\n  _s();\n\n  var visible = _ref3.visible;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      globalWindow = _useState[0],\n      setGlobalWindow = _useState[1];\n\n  var _toggleNavItems = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"])());\n\n  var navItemsActive = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.navigation.showNavItems;\n  });\n  var navItems = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.navigation.navItems;\n  });\n  console.log(navItemsActive);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setGlobalWindow(window);\n    use;\n  }, []);\n  var toolbarIconHidden = {\n    top: \"-10vh\"\n  };\n  var toolbarIconShow = {\n    bottom: \"1rem\"\n  };\n  var topIconStyle = !visible ? {\n    top: \"-10vh\"\n  } : {\n    bottom: '1rem'\n  };\n  var bottomIconStyle = !visible ? {\n    bottom: \"-10vh\"\n  } : {\n    bottom: \"1rem\"\n  };\n  var iconStyles = !visible ? toolbarIconHidden : toolbarIconShow;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"NavigationPanel\"], {\n    active: navItemsActive,\n    style: iconStyles,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, __jsx(ProductLogo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }), __jsx(HamburgerButton, {\n    active: navItemsActive,\n    toggleNavItems: function toggleNavItems() {\n      return _toggleNavItems();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"HBWr\"], {\n    active: navItemsActive,\n    style: bottomIconStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, __jsx(HamburgerButton, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_toolbarItems__WEBPACK_IMPORTED_MODULE_3__[\"LogoWr\"], {\n    active: navItemsActive,\n    style: iconStyles,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, __jsx(ProductLogo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  })), __jsx(ShoppingCart, {\n    style: (globalWindow === null || globalWindow === void 0 ? void 0 : globalWindow.innerWidth) < 640 ? bottomIconStyle : topIconStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Toolbar, \"v5hF8An87JPawJ31ab30+YNB1tE=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_2__[\"useShowNavigationItems\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c4 = Toolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toolbar);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"HamburgerButton\");\n$RefreshReg$(_c2, \"ProductLogo\");\n$RefreshReg$(_c3, \"ShoppingCart\");\n$RefreshReg$(_c4, \"Toolbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9OYXZpZ2F0aW9uL1Rvb2xiYXIvVG9vbGJhci5qcz85NzE3Il0sIm5hbWVzIjpbIkhhbWJ1cmdlckJ1dHRvbiIsImFjdGl2ZSIsInRvZ2dsZU5hdkl0ZW1zIiwiUHJvZHVjdExvZ28iLCJTaG9wcGluZ0NhcnQiLCJzdHlsZSIsImZhU2hvcHBpbmdCYWciLCJUb29sYmFyIiwidmlzaWJsZSIsInVzZVN0YXRlIiwiZ2xvYmFsV2luZG93Iiwic2V0R2xvYmFsV2luZG93IiwidXNlRGlzcGF0Y2giLCJ1c2VTaG93TmF2aWdhdGlvbkl0ZW1zIiwibmF2SXRlbXNBY3RpdmUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwibmF2aWdhdGlvbiIsInNob3dOYXZJdGVtcyIsIm5hdkl0ZW1zIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIndpbmRvdyIsInVzZSIsInRvb2xiYXJJY29uSGlkZGVuIiwidG9wIiwidG9vbGJhckljb25TaG93IiwiYm90dG9tIiwidG9wSWNvblN0eWxlIiwiYm90dG9tSWNvblN0eWxlIiwiaWNvblN0eWxlcyIsImlubmVyV2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBZ0M7QUFBQSxNQUE3QkMsTUFBNkIsUUFBN0JBLE1BQTZCO0FBQUEsTUFBckJDLGNBQXFCLFFBQXJCQSxjQUFxQjtBQUN0RCxTQUNFLE1BQUMsd0VBQUQ7QUFBVyxVQUFNLEVBQUVELE1BQW5CO0FBQTJCLFdBQU8sRUFBRUMsY0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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LGVBQUQ7QUFBaUIsVUFBTSxFQUFFakIsY0FBekI7QUFBeUMsa0JBQWMsRUFBRTtBQUFBLGFBQU1aLGVBQWMsRUFBcEI7QUFBQSxLQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsbUVBQUQ7QUFBTSxVQUFNLEVBQUVZLGNBQWQ7QUFBOEIsU0FBSyxFQUFFZ0IsZUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixFQVFFLE1BQUMscUVBQUQ7QUFBUSxVQUFNLEVBQUVoQixjQUFoQjtBQUFnQyxTQUFLLEVBQUVpQixVQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVJGLEVBV0UsTUFBQyxZQUFEO0FBQ0UsU0FBSyxFQUFFLENBQUFyQixZQUFZLFNBQVosSUFBQUEsWUFBWSxXQUFaLFlBQUFBLFlBQVksQ0FBRXNCLFVBQWQsSUFBMkIsR0FBM0IsR0FBaUNGLGVBQWpDLEdBQW1ERCxZQUQ1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FERjtBQWlCRCxDQWpDRDs7R0FBTXRCLE87VUFFbUJLLHVELEVBQVlDLGtGLEVBQ1pFLHVELEVBQ05BLHVEOzs7TUFKYlIsTztBQW1DU0Esc0VBQWYiLCJmaWxlIjoiLi9Db21wb25lbnRzL05hdmlnYXRpb24vVG9vbGJhci9Ub29sYmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZVNob3dOYXZpZ2F0aW9uSXRlbXMgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy9hY3Rpb25zSW5kZXhcIjtcbmltcG9ydCB7XG4gIE5hdmlnYXRpb25QYW5lbCxcbiAgSEJXcixcbiAgSEJJbm5lcldyLFxuICBIQlNwYW4sXG4gIExvZ28sXG4gIExvZ29XcixcbiAgQ2FydCxcbiAgQ2FydENvdW50ZXIsXG59IGZyb20gXCIuLi8uLi8uLi9TdHlsZWRDb21wb25lbnRzL3Rvb2xiYXJJdGVtc1wiO1xuaW1wb3J0IHsgQmVlIH0gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9JY29uL0ljb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGZhU2hvcHBpbmdCYWcgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5cbmNvbnN0IEhhbWJ1cmdlckJ1dHRvbiA9ICh7IGFjdGl2ZSwgdG9nZ2xlTmF2SXRlbXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxIQklubmVyV3IgYWN0aXZlPXthY3RpdmV9IG9uQ2xpY2s9e3RvZ2dsZU5hdkl0ZW1zfT5cbiAgICAgIDxIQlNwYW4gLz5cbiAgICAgIDxIQlNwYW4gLz5cbiAgICAgIDxIQlNwYW4gLz5cbiAgICA8L0hCSW5uZXJXcj5cbiAgKTtcbn07XG5cbmNvbnN0IFByb2R1Y3RMb2dvID0gKCkgPT4gKFxuICA8TG9nbz5cbiAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgPEJlZSAvPlxuICAgIDwvTGluaz5cbiAgPC9Mb2dvPlxuKTtcblxuY29uc3QgU2hvcHBpbmdDYXJ0ID0gKHsgc3R5bGUgfSkgPT4gKFxuICA8Q2FydCBzdHlsZT17c3R5bGV9PlxuICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaG9wcGluZ0JhZ30gc2l6ZT1cIjJ4XCIgLz5cbiAgICA8Q2FydENvdW50ZXI+XG4gICAgICA8c3Bhbj4zPC9zcGFuPlxuICAgIDwvQ2FydENvdW50ZXI+XG4gIDwvQ2FydD5cbik7XG5cbmNvbnN0IFRvb2xiYXIgPSAoeyB2aXNpYmxlIH0pID0+IHtcbiAgY29uc3QgW2dsb2JhbFdpbmRvdywgc2V0R2xvYmFsV2luZG93XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCB0b2dnbGVOYXZJdGVtcyA9IHVzZURpc3BhdGNoKHVzZVNob3dOYXZpZ2F0aW9uSXRlbXMoKSk7XG4gIGNvbnN0IG5hdkl0ZW1zQWN0aXZlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5uYXZpZ2F0aW9uLnNob3dOYXZJdGVtcyk7XG4gIGNvbnN0IG5hdkl0ZW1zID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5uYXZpZ2F0aW9uLm5hdkl0ZW1zKTtcbiAgY29uc29sZS5sb2cobmF2SXRlbXNBY3RpdmUpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0R2xvYmFsV2luZG93KHdpbmRvdyk7XG4gICAgdXNlXG4gIH0sIFtdKTtcblxuICBsZXQgdG9vbGJhckljb25IaWRkZW4gPSB7dG9wOiBcIi0xMHZoXCJ9O1xuICBsZXQgdG9vbGJhckljb25TaG93ID0ge2JvdHRvbTogXCIxcmVtXCJ9O1xuICBsZXQgdG9wSWNvblN0eWxlID0gIXZpc2libGUgPyB7IHRvcDogXCItMTB2aFwiIH0gOiB7IGJvdHRvbTogJzFyZW0nIH07XG4gIGxldCBib3R0b21JY29uU3R5bGUgPSAhdmlzaWJsZSA/IHsgYm90dG9tOiBcIi0xMHZoXCIgfSA6IHsgYm90dG9tOiBcIjFyZW1cIiB9O1xuICBjb25zdCBpY29uU3R5bGVzID0gIXZpc2libGUgPyB0b29sYmFySWNvbkhpZGRlbiA6IHRvb2xiYXJJY29uU2hvdztcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGFjdGl2ZT17bmF2SXRlbXNBY3RpdmV9IHN0eWxlPXtpY29uU3R5bGVzfT5cbiAgICAgICAgPFByb2R1Y3RMb2dvIC8+XG4gICAgICAgIDxIYW1idXJnZXJCdXR0b24gYWN0aXZlPXtuYXZJdGVtc0FjdGl2ZX0gdG9nZ2xlTmF2SXRlbXM9eygpID0+IHRvZ2dsZU5hdkl0ZW1zKCl9Lz5cbiAgICAgIDwvTmF2aWdhdGlvblBhbmVsPlxuICAgICAgPEhCV3IgYWN0aXZlPXtuYXZJdGVtc0FjdGl2ZX0gc3R5bGU9e2JvdHRvbUljb25TdHlsZX0gPlxuICAgICAgICA8SGFtYnVyZ2VyQnV0dG9uLz5cbiAgICAgIDwvSEJXcj5cbiAgICAgIDxMb2dvV3IgYWN0aXZlPXtuYXZJdGVtc0FjdGl2ZX0gc3R5bGU9e2ljb25TdHlsZXN9PlxuICAgICAgICA8UHJvZHVjdExvZ28gLz5cbiAgICAgIDwvTG9nb1dyPlxuICAgICAgPFNob3BwaW5nQ2FydFxuICAgICAgICBzdHlsZT17Z2xvYmFsV2luZG93Py5pbm5lcldpZHRoIDwgNjQwID8gYm90dG9tSWNvblN0eWxlIDogdG9wSWNvblN0eWxlfVxuICAgICAgLz5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9vbGJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Navigation/Toolbar/Toolbar.js\n");

/***/ })

})