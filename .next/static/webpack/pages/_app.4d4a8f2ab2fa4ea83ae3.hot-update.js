webpackHotUpdate_N_E("pages/_app",{

/***/ "./UI/Dropdown/Dropdown.js":
/*!*********************************!*\
  !*** ./UI/Dropdown/Dropdown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/.pnpm/registry.npmjs.org/react-transition-group/4.4.1_react-dom@16.13.1/node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_b64c5b009f74cdcf964dbb949a1d9ffa/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../StyledComponents/dropdownItems */ \"./StyledComponents/dropdownItems.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/UI/Dropdown/Dropdown.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar NavItem = function NavItem(_ref) {\n  var path = _ref.path,\n      label = _ref.label,\n      mouseEntered = _ref.mouseEntered,\n      mouseLeft = _ref.mouseLeft;\n  return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"MenuItem\"], {\n    onMouseLeave: mouseLeft,\n    onMouseEnter: mouseEntered,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: path,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, label)));\n};\n\n_c = NavItem;\n\nvar Dropdown = function Dropdown(_ref2) {\n  _s();\n\n  var dropDownTitle = _ref2.dropDownTitle,\n      subCategoryHandler = _ref2.subCategoryHandler,\n      useOnToolbar = _ref2.useOnToolbar,\n      dropDownTogglerHandler = _ref2.dropDownTogglerHandler,\n      showDropDown = _ref2.showDropDown,\n      subItems = _ref2.subItems;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      backgroundActive = _useState[0],\n      setBackgroundActive = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      navItemBackground = _useState2[0],\n      setNavItemBackground = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      scrollY = _useState3[0],\n      setScrollY = _useState3[1];\n\n  Object(_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_4__[\"useScrollPosition\"])(function (_ref3) {\n    var currPos = _ref3.currPos;\n    setScrollY(currPos.y);\n  }, [showDropDown], false, false, 0); //this is to avoid top scrolling when entering/leaving the dropdown\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    document.body.style.position = \"\";\n    document.body.style.top = \"\";\n    window.scrollTo(scrollY, scrollY * -1);\n    setNavItemBackground(false);\n\n    if (showDropDown) {\n      setTimeout(function () {\n        setNavItemBackground(true);\n      }, 500);\n      document.body.style.position = \"fixed\";\n      document.body.style.top = \"\".concat(scrollY, \"px\");\n    }\n  }, [showDropDown]);\n\n  var navItemMouseEnter = function navItemMouseEnter(id) {\n    setBackgroundActive(id);\n  };\n\n  var navItemMouseLeave = function navItemMouseLeave() {\n    setBackgroundActive(false);\n  };\n\n  console.log(\"background status\", backgroundActive);\n  var navItems = subItems.map(function (item) {\n    return __jsx(NavItem, {\n      backgroundImage: subItems.background,\n      path: item.path,\n      label: item.label,\n      mouseEntered: function mouseEntered() {\n        return navItemMouseEnter(item.id);\n      },\n      mouseLeft: navItemMouseLeave,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 5\n      }\n    });\n  });\n  return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"Wrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"List\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }, navItems));\n};\n\n_s(Dropdown, \"ZA00rKfQbcFhfdnQZDpx5VmL8qk=\", false, function () {\n  return [_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_4__[\"useScrollPosition\"]];\n});\n\n_c2 = Dropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"NavItem\");\n$RefreshReg$(_c2, \"Dropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvRHJvcGRvd24vRHJvcGRvd24uanM/MTdjNCJdLCJuYW1lcyI6WyJOYXZJdGVtIiwicGF0aCIsImxhYmVsIiwibW91c2VFbnRlcmVkIiwibW91c2VMZWZ0IiwiRHJvcGRvd24iLCJkcm9wRG93blRpdGxlIiwic3ViQ2F0ZWdvcnlIYW5kbGVyIiwidXNlT25Ub29sYmFyIiwiZHJvcERvd25Ub2dnbGVySGFuZGxlciIsInNob3dEcm9wRG93biIsInN1Ykl0ZW1zIiwidXNlU3RhdGUiLCJiYWNrZ3JvdW5kQWN0aXZlIiwic2V0QmFja2dyb3VuZEFjdGl2ZSIsIm5hdkl0ZW1CYWNrZ3JvdW5kIiwic2V0TmF2SXRlbUJhY2tncm91bmQiLCJzY3JvbGxZIiwic2V0U2Nyb2xsWSIsInVzZVNjcm9sbFBvc2l0aW9uIiwiY3VyclBvcyIsInkiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwid2luZG93Iiwic2Nyb2xsVG8iLCJzZXRUaW1lb3V0IiwibmF2SXRlbU1vdXNlRW50ZXIiLCJpZCIsIm5hdkl0ZW1Nb3VzZUxlYXZlIiwiY29uc29sZSIsImxvZyIsIm5hdkl0ZW1zIiwibWFwIiwiaXRlbSIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQThDO0FBQUEsTUFBM0NDLElBQTJDLFFBQTNDQSxJQUEyQztBQUFBLE1BQXJDQyxLQUFxQyxRQUFyQ0EsS0FBcUM7QUFBQSxNQUE5QkMsWUFBOEIsUUFBOUJBLFlBQThCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUM1RCxTQUNFLE1BQUMsd0VBQUQ7QUFBVSxnQkFBWSxFQUFFQSxTQUF4QjtBQUFtQyxnQkFBWSxFQUFFRCxZQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFB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NEI7QUFBQSxHQUFiLENBQWpCO0FBVUEsU0FDRSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0csUUFBUCxDQURGLENBREY7QUFLRCxDQTlERDs7R0FBTS9CLFE7VUFZSmMsMEU7OztNQVpJZCxRO0FBK0RTQSx1RUFBZiIsImZpbGUiOiIuL1VJL0Ryb3Bkb3duL0Ryb3Bkb3duLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhQ2hldnJvbkRvd24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyB1c2VTY3JvbGxQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9Ib29rcy91c2VTY3JvbGxQb3NpdGlvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgV3JhcHBlciwgTGlzdCwgTWVudUl0ZW0gfSBmcm9tIFwiLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9kcm9wZG93bkl0ZW1zXCI7XG5cbmNvbnN0IE5hdkl0ZW0gPSAoeyBwYXRoLCBsYWJlbCwgbW91c2VFbnRlcmVkLCBtb3VzZUxlZnQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNZW51SXRlbSBvbk1vdXNlTGVhdmU9e21vdXNlTGVmdH0gb25Nb3VzZUVudGVyPXttb3VzZUVudGVyZWR9PlxuICAgICAgPExpbmsgaHJlZj17cGF0aH0+XG4gICAgICAgIDxhPntsYWJlbH08L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9NZW51SXRlbT5cbiAgKTtcbn07XG5cbmNvbnN0IERyb3Bkb3duID0gKHtcbiAgZHJvcERvd25UaXRsZSxcbiAgc3ViQ2F0ZWdvcnlIYW5kbGVyLFxuICB1c2VPblRvb2xiYXIsXG4gIGRyb3BEb3duVG9nZ2xlckhhbmRsZXIsXG4gIHNob3dEcm9wRG93bixcbiAgc3ViSXRlbXMsXG59KSA9PiB7XG4gIGNvbnN0IFtiYWNrZ3JvdW5kQWN0aXZlLCBzZXRCYWNrZ3JvdW5kQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW25hdkl0ZW1CYWNrZ3JvdW5kLCBzZXROYXZJdGVtQmFja2dyb3VuZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Njcm9sbFksIHNldFNjcm9sbFldID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlU2Nyb2xsUG9zaXRpb24oXG4gICAgKHsgY3VyclBvcyB9KSA9PiB7XG4gICAgICBzZXRTY3JvbGxZKGN1cnJQb3MueSk7XG4gICAgfSxcbiAgICBbc2hvd0Ryb3BEb3duXSxcbiAgICBmYWxzZSxcbiAgICBmYWxzZSxcbiAgICAwXG4gICk7XG5cbiAgLy90aGlzIGlzIHRvIGF2b2lkIHRvcCBzY3JvbGxpbmcgd2hlbiBlbnRlcmluZy9sZWF2aW5nIHRoZSBkcm9wZG93blxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSBcIlwiO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gXCJcIjtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oc2Nyb2xsWSwgc2Nyb2xsWSAqIC0xKTtcbiAgICBzZXROYXZJdGVtQmFja2dyb3VuZChmYWxzZSk7XG4gICAgaWYgKHNob3dEcm9wRG93bikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldE5hdkl0ZW1CYWNrZ3JvdW5kKHRydWUpO1xuICAgICAgfSwgNTAwKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9IGAke3Njcm9sbFl9cHhgO1xuICAgIH1cbiAgfSwgW3Nob3dEcm9wRG93bl0pO1xuXG4gIGNvbnN0IG5hdkl0ZW1Nb3VzZUVudGVyID0gKGlkKSA9PiB7XG4gICAgc2V0QmFja2dyb3VuZEFjdGl2ZShpZCk7XG4gIH07XG5cbiAgY29uc3QgbmF2SXRlbU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0QmFja2dyb3VuZEFjdGl2ZShmYWxzZSk7XG4gIH07XG5cbiAgY29uc29sZS5sb2coXCJiYWNrZ3JvdW5kIHN0YXR1c1wiLGJhY2tncm91bmRBY3RpdmUpXG5cbiAgY29uc3QgbmF2SXRlbXMgPSBzdWJJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICA8TmF2SXRlbVxuICAgICAgYmFja2dyb3VuZEltYWdlPXtzdWJJdGVtcy5iYWNrZ3JvdW5kfVxuICAgICAgcGF0aD17aXRlbS5wYXRofVxuICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICBtb3VzZUVudGVyZWQ9eygpID0+IG5hdkl0ZW1Nb3VzZUVudGVyKGl0ZW0uaWQpfVxuICAgICAgbW91c2VMZWZ0PXtuYXZJdGVtTW91c2VMZWF2ZX1cbiAgICAvPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPExpc3Q+e25hdkl0ZW1zfTwvTGlzdD5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./UI/Dropdown/Dropdown.js\n");

/***/ })

})