webpackHotUpdate_N_E("pages/_app",{

/***/ "./UI/Dropdown/Dropdown.js":
/*!*********************************!*\
  !*** ./UI/Dropdown/Dropdown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/.pnpm/registry.npmjs.org/react-transition-group/4.4.1_react-dom@16.13.1/node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_b64c5b009f74cdcf964dbb949a1d9ffa/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../StyledComponents/dropdownItems */ \"./StyledComponents/dropdownItems.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/UI/Dropdown/Dropdown.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar NavItem = function NavItem(_ref) {\n  var path = _ref.path,\n      label = _ref.label,\n      mouseEntered = _ref.mouseEntered,\n      mouseLeft = _ref.mouseLeft;\n  return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"MenuItem\"], {\n    onMouseLeave: mouseLeft,\n    onMouseEnter: mouseEntered,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: path,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, label)));\n};\n\n_c = NavItem;\n\nvar Dropdown = function Dropdown(_ref2) {\n  _s();\n\n  var dropDownTitle = _ref2.dropDownTitle,\n      subCategoryHandler = _ref2.subCategoryHandler,\n      useOnToolbar = _ref2.useOnToolbar,\n      dropDownTogglerHandler = _ref2.dropDownTogglerHandler,\n      showDropDown = _ref2.showDropDown,\n      subItems = _ref2.subItems;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      backgroundImage = _useState[0],\n      setBackgroundImage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      navItemBackground = _useState2[0],\n      setNavItemBackground = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      scrollY = _useState3[0],\n      setScrollY = _useState3[1];\n\n  Object(_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_4__[\"useScrollPosition\"])(function (_ref3) {\n    var currPos = _ref3.currPos;\n    setScrollY(currPos.y);\n  }, [showDropDown], false, false, 0); //this is to avoid top scrolling when entering/leaving the dropdown\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    document.body.style.position = \"\";\n    document.body.style.top = \"\";\n    window.scrollTo(scrollY, scrollY * -1);\n    setNavItemBackground(false);\n\n    if (showDropDown) {\n      setTimeout(function () {\n        setNavItemBackground(true);\n      }, 500);\n      document.body.style.position = \"fixed\";\n      document.body.style.top = \"\".concat(scrollY, \"px\");\n    }\n  }, [showDropDown]);\n\n  var navItemMouseEnter = function navItemMouseEnter(path) {\n    setBackgroundImage(path);\n  };\n\n  var navItemMouseLeave = function navItemMouseLeave() {\n    setBackgroundImage(false);\n  };\n\n  var navItems = subItems.map(function (item) {\n    return __jsx(NavItem, {\n      path: item.path,\n      label: item.label,\n      mouseEntered: function mouseEntered() {\n        return navItemMouseEnter(item.background);\n      },\n      mouseLeft: navItemMouseLeave,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 5\n      }\n    });\n  });\n  return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"Wrapper\"], {\n    withBackground: backgroundImage,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"List\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }, navItems));\n};\n\n_s(Dropdown, \"k6vG0X5gdllws3kHv0Y+hSBkdik=\", false, function () {\n  return [_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_4__[\"useScrollPosition\"]];\n});\n\n_c2 = Dropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"NavItem\");\n$RefreshReg$(_c2, \"Dropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvRHJvcGRvd24vRHJvcGRvd24uanM/MTdjNCJdLCJuYW1lcyI6WyJOYXZJdGVtIiwicGF0aCIsImxhYmVsIiwibW91c2VFbnRlcmVkIiwibW91c2VMZWZ0IiwiRHJvcGRvd24iLCJkcm9wRG93blRpdGxlIiwic3ViQ2F0ZWdvcnlIYW5kbGVyIiwidXNlT25Ub29sYmFyIiwiZHJvcERvd25Ub2dnbGVySGFuZGxlciIsInNob3dEcm9wRG93biIsInN1Ykl0ZW1zIiwidXNlU3RhdGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzZXRCYWNrZ3JvdW5kSW1hZ2UiLCJuYXZJdGVtQmFja2dyb3VuZCIsInNldE5hdkl0ZW1CYWNrZ3JvdW5kIiwic2Nyb2xsWSIsInNldFNjcm9sbFkiLCJ1c2VTY3JvbGxQb3NpdGlvbiIsImN1cnJQb3MiLCJ5IiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwic2V0VGltZW91dCIsIm5hdkl0ZW1Nb3VzZUVudGVyIiwibmF2SXRlbU1vdXNlTGVhdmUiLCJuYXZJdGVtcyIsIm1hcCIsIml0ZW0iLCJiYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUE4QztBQUFBLE1BQTNDQyxJQUEyQyxRQUEzQ0EsSUFBMkM7QUFBQSxNQUFyQ0MsS0FBcUMsUUFBckNBLEtBQXFDO0FBQUEsTUFBOUJDLFlBQThCLFFBQTlCQSxZQUE4QjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDNUQsU0FDRSxNQUFDLHdFQUFEO0FBQVUsZ0JBQVksRUFBRUEsU0FBeEI7QUFBbUMsZ0JBQVksRUFBRUQsWUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1B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b0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPb0IsUUFBUCxDQURGLENBREY7QUFLRCxDQTNERDs7R0FBTTVCLFE7VUFZSmMsMEU7OztNQVpJZCxRO0FBNERTQSx1RUFBZiIsImZpbGUiOiIuL1VJL0Ryb3Bkb3duL0Ryb3Bkb3duLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhQ2hldnJvbkRvd24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyB1c2VTY3JvbGxQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9Ib29rcy91c2VTY3JvbGxQb3NpdGlvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgV3JhcHBlciwgTGlzdCwgTWVudUl0ZW0gfSBmcm9tIFwiLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9kcm9wZG93bkl0ZW1zXCI7XG5cbmNvbnN0IE5hdkl0ZW0gPSAoeyBwYXRoLCBsYWJlbCwgbW91c2VFbnRlcmVkLCBtb3VzZUxlZnQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNZW51SXRlbSBvbk1vdXNlTGVhdmU9e21vdXNlTGVmdH0gb25Nb3VzZUVudGVyPXttb3VzZUVudGVyZWR9PlxuICAgICAgPExpbmsgaHJlZj17cGF0aH0+XG4gICAgICAgIDxhPntsYWJlbH08L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9NZW51SXRlbT5cbiAgKTtcbn07XG5cbmNvbnN0IERyb3Bkb3duID0gKHtcbiAgZHJvcERvd25UaXRsZSxcbiAgc3ViQ2F0ZWdvcnlIYW5kbGVyLFxuICB1c2VPblRvb2xiYXIsXG4gIGRyb3BEb3duVG9nZ2xlckhhbmRsZXIsXG4gIHNob3dEcm9wRG93bixcbiAgc3ViSXRlbXMsXG59KSA9PiB7XG4gIGNvbnN0IFtiYWNrZ3JvdW5kSW1hZ2UsIHNldEJhY2tncm91bmRJbWFnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtuYXZJdGVtQmFja2dyb3VuZCwgc2V0TmF2SXRlbUJhY2tncm91bmRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzY3JvbGxZLCBzZXRTY3JvbGxZXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZVNjcm9sbFBvc2l0aW9uKFxuICAgICh7IGN1cnJQb3MgfSkgPT4ge1xuICAgICAgc2V0U2Nyb2xsWShjdXJyUG9zLnkpO1xuICAgIH0sXG4gICAgW3Nob3dEcm9wRG93bl0sXG4gICAgZmFsc2UsXG4gICAgZmFsc2UsXG4gICAgMFxuICApO1xuXG4gIC8vdGhpcyBpcyB0byBhdm9pZCB0b3Agc2Nyb2xsaW5nIHdoZW4gZW50ZXJpbmcvbGVhdmluZyB0aGUgZHJvcGRvd25cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gXCJcIjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9IFwiXCI7XG4gICAgd2luZG93LnNjcm9sbFRvKHNjcm9sbFksIHNjcm9sbFkgKiAtMSk7XG4gICAgc2V0TmF2SXRlbUJhY2tncm91bmQoZmFsc2UpO1xuICAgIGlmIChzaG93RHJvcERvd24pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXROYXZJdGVtQmFja2dyb3VuZCh0cnVlKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSBgJHtzY3JvbGxZfXB4YDtcbiAgICB9XG4gIH0sIFtzaG93RHJvcERvd25dKTtcblxuICBjb25zdCBuYXZJdGVtTW91c2VFbnRlciA9IChwYXRoKSA9PiB7XG4gICAgc2V0QmFja2dyb3VuZEltYWdlKHBhdGgpO1xuICB9O1xuXG4gIGNvbnN0IG5hdkl0ZW1Nb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgIHNldEJhY2tncm91bmRJbWFnZShmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgbmF2SXRlbXMgPSBzdWJJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICA8TmF2SXRlbVxuICAgICAgcGF0aD17aXRlbS5wYXRofVxuICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICBtb3VzZUVudGVyZWQ9eygpID0+IG5hdkl0ZW1Nb3VzZUVudGVyKGl0ZW0uYmFja2dyb3VuZCl9XG4gICAgICBtb3VzZUxlZnQ9e25hdkl0ZW1Nb3VzZUxlYXZlfVxuICAgIC8+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXIgd2l0aEJhY2tncm91bmQ9e2JhY2tncm91bmRJbWFnZX0+XG4gICAgICA8TGlzdD57bmF2SXRlbXN9PC9MaXN0PlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./UI/Dropdown/Dropdown.js\n");

/***/ })

})