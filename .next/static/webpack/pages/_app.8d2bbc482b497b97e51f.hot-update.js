webpackHotUpdate_N_E("pages/_app",{

/***/ "./UI/Dropdown/Dropdown.js":
/*!*********************************!*\
  !*** ./UI/Dropdown/Dropdown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/.pnpm/registry.npmjs.org/react-transition-group/4.4.1_react-dom@16.13.1/node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_b64c5b009f74cdcf964dbb949a1d9ffa/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../StyledComponents/dropdownItems */ \"./StyledComponents/dropdownItems.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/UI/Dropdown/Dropdown.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar NavItem = function NavItem(_ref) {\n  var path = _ref.path,\n      label = _ref.label,\n      mouseEntered = _ref.mouseEntered,\n      mouseLeft = _ref.mouseLeft;\n  return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"MenuItem\"], {\n    onMouseLeave: mouseLeft,\n    onMouseEnter: mouseEntered,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: path,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, label)));\n};\n\n_c = NavItem;\n\nvar Dropdown = function Dropdown(_ref2) {\n  _s();\n\n  var dropDownTitle = _ref2.dropDownTitle,\n      subCategoryHandler = _ref2.subCategoryHandler,\n      useOnToolbar = _ref2.useOnToolbar,\n      dropDownTogglerHandler = _ref2.dropDownTogglerHandler,\n      showDropDown = _ref2.showDropDown,\n      subItems = _ref2.subItems;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      backgroundActive = _useState[0],\n      setBackgroundActive = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      navItemBackground = _useState2[0],\n      setNavItemBackground = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      scrollY = _useState3[0],\n      setScrollY = _useState3[1];\n\n  Object(_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_4__[\"useScrollPosition\"])(function (_ref3) {\n    var currPos = _ref3.currPos;\n    setScrollY(currPos.y);\n  }, [showDropDown], false, false, 0); //this is to avoid top scrolling when entering/leaving the dropdown\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    document.body.style.position = \"\";\n    document.body.style.top = \"\";\n    window.scrollTo(scrollY, scrollY * -1);\n    setNavItemBackground(false);\n\n    if (showDropDown) {\n      setTimeout(function () {\n        setNavItemBackground(true);\n      }, 500);\n      document.body.style.position = \"fixed\";\n      document.body.style.top = \"\".concat(scrollY, \"px\");\n    }\n  }, [showDropDown]);\n\n  var navItemsMouseEnter = function navItemsMouseEnter(id) {\n    setBackgroundActive(id);\n  };\n\n  var navItemsMouseLeave = function navItemsMouseLeave() {\n    setBackgroundActive(false);\n  };\n\n  var navItems = subItems.map(function (item) {\n    return __jsx(NavItem, {\n      path: item.path,\n      label: item.label,\n      mouseEntered: function mouseEntered() {\n        return nav;\n      },\n      mouseLeft: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 5\n      }\n    });\n  });\n  return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"Wrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"List\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, navItems));\n};\n\n_s(Dropdown, \"ZA00rKfQbcFhfdnQZDpx5VmL8qk=\", false, function () {\n  return [_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_4__[\"useScrollPosition\"]];\n});\n\n_c2 = Dropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"NavItem\");\n$RefreshReg$(_c2, \"Dropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvRHJvcGRvd24vRHJvcGRvd24uanM/MTdjNCJdLCJuYW1lcyI6WyJOYXZJdGVtIiwicGF0aCIsImxhYmVsIiwibW91c2VFbnRlcmVkIiwibW91c2VMZWZ0IiwiRHJvcGRvd24iLCJkcm9wRG93blRpdGxlIiwic3ViQ2F0ZWdvcnlIYW5kbGVyIiwidXNlT25Ub29sYmFyIiwiZHJvcERvd25Ub2dnbGVySGFuZGxlciIsInNob3dEcm9wRG93biIsInN1Ykl0ZW1zIiwidXNlU3RhdGUiLCJiYWNrZ3JvdW5kQWN0aXZlIiwic2V0QmFja2dyb3VuZEFjdGl2ZSIsIm5hdkl0ZW1CYWNrZ3JvdW5kIiwic2V0TmF2SXRlbUJhY2tncm91bmQiLCJzY3JvbGxZIiwic2V0U2Nyb2xsWSIsInVzZVNjcm9sbFBvc2l0aW9uIiwiY3VyclBvcyIsInkiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwid2luZG93Iiwic2Nyb2xsVG8iLCJzZXRUaW1lb3V0IiwibmF2SXRlbXNNb3VzZUVudGVyIiwiaWQiLCJuYXZJdGVtc01vdXNlTGVhdmUiLCJuYXZJdGVtcyIsIm1hcCIsIml0ZW0iLCJuYXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQThDO0FBQUEsTUFBM0NDLElBQTJDLFFBQTNDQSxJQUEyQztBQUFBLE1BQXJDQyxLQUFxQyxRQUFyQ0EsS0FBcUM7QUFBQSxNQUE5QkMsWUFBOEIsUUFBOUJBLFlBQThCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUM1RCxTQUNFLE1BQUMsd0VBQUQ7QUFBVSxnQkFBWSxFQUFFQSxTQUF4QjtBQUFtQyxnQkFBWSxFQUFFRCxZQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0Us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LENBREYsQ0FERjtBQU9ELENBeEREOztHQUFNN0IsUTtVQVlKYywwRTs7O01BWklkLFE7QUF5RFNBLHVFQUFmIiwiZmlsZSI6Ii4vVUkvRHJvcGRvd24vRHJvcGRvd24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFDaGV2cm9uRG93biB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IHVzZVNjcm9sbFBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL0hvb2tzL3VzZVNjcm9sbFBvc2l0aW9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBXcmFwcGVyLCBMaXN0LCBNZW51SXRlbSB9IGZyb20gXCIuLi8uLi9TdHlsZWRDb21wb25lbnRzL2Ryb3Bkb3duSXRlbXNcIjtcblxuY29uc3QgTmF2SXRlbSA9ICh7IHBhdGgsIGxhYmVsLCBtb3VzZUVudGVyZWQsIG1vdXNlTGVmdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE1lbnVJdGVtIG9uTW91c2VMZWF2ZT17bW91c2VMZWZ0fSBvbk1vdXNlRW50ZXI9e21vdXNlRW50ZXJlZH0+XG4gICAgICA8TGluayBocmVmPXtwYXRofT5cbiAgICAgICAgPGE+e2xhYmVsfTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L01lbnVJdGVtPlxuICApO1xufTtcblxuY29uc3QgRHJvcGRvd24gPSAoe1xuICBkcm9wRG93blRpdGxlLFxuICBzdWJDYXRlZ29yeUhhbmRsZXIsXG4gIHVzZU9uVG9vbGJhcixcbiAgZHJvcERvd25Ub2dnbGVySGFuZGxlcixcbiAgc2hvd0Ryb3BEb3duLFxuICBzdWJJdGVtcyxcbn0pID0+IHtcbiAgY29uc3QgW2JhY2tncm91bmRBY3RpdmUsIHNldEJhY2tncm91bmRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmF2SXRlbUJhY2tncm91bmQsIHNldE5hdkl0ZW1CYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2Nyb2xsWSwgc2V0U2Nyb2xsWV0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VTY3JvbGxQb3NpdGlvbihcbiAgICAoeyBjdXJyUG9zIH0pID0+IHtcbiAgICAgIHNldFNjcm9sbFkoY3VyclBvcy55KTtcbiAgICB9LFxuICAgIFtzaG93RHJvcERvd25dLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIDBcbiAgKTtcblxuICAvL3RoaXMgaXMgdG8gYXZvaWQgdG9wIHNjcm9sbGluZyB3aGVuIGVudGVyaW5nL2xlYXZpbmcgdGhlIGRyb3Bkb3duXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9IFwiXCI7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSBcIlwiO1xuICAgIHdpbmRvdy5zY3JvbGxUbyhzY3JvbGxZLCBzY3JvbGxZICogLTEpO1xuICAgIHNldE5hdkl0ZW1CYWNrZ3JvdW5kKGZhbHNlKTtcbiAgICBpZiAoc2hvd0Ryb3BEb3duKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TmF2SXRlbUJhY2tncm91bmQodHJ1ZSk7XG4gICAgICB9LCA1MDApO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gYCR7c2Nyb2xsWX1weGA7XG4gICAgfVxuICB9LCBbc2hvd0Ryb3BEb3duXSk7XG5cbiAgY29uc3QgbmF2SXRlbXNNb3VzZUVudGVyID0gKGlkKSA9PiB7XG4gICAgc2V0QmFja2dyb3VuZEFjdGl2ZShpZCk7XG4gIH07XG5cbiAgY29uc3QgbmF2SXRlbXNNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgIHNldEJhY2tncm91bmRBY3RpdmUoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IG5hdkl0ZW1zID0gc3ViSXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgIDxOYXZJdGVtIHBhdGg9e2l0ZW0ucGF0aH0gbGFiZWw9e2l0ZW0ubGFiZWx9IG1vdXNlRW50ZXJlZD17KCkgPT4gbmF2fSBtb3VzZUxlZnQvPlxuICApKVxuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8TGlzdD5cbiAgICAgICAge25hdkl0ZW1zfVxuICAgICAgPC9MaXN0PlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./UI/Dropdown/Dropdown.js\n");

/***/ })

})