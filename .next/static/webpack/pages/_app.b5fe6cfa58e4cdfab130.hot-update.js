webpackHotUpdate_N_E("pages/_app",{

/***/ "./UI/Dropdown/Dropdown.js":
/*!*********************************!*\
  !*** ./UI/Dropdown/Dropdown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/.pnpm/registry.npmjs.org/react-transition-group/4.4.1_react-dom@16.13.1/node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_b64c5b009f74cdcf964dbb949a1d9ffa/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../StyledComponents/dropdownItems */ \"./StyledComponents/dropdownItems.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/UI/Dropdown/Dropdown.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar NavItem = function NavItem(_ref) {\n  var path = _ref.path,\n      label = _ref.label,\n      mouseEntered = _ref.mouseEntered,\n      mouseLeft = _ref.mouseLeft;\n  return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"MenuItem\"], {\n    onMouseLeave: mouseLeft,\n    onMouseEnter: mouseEntered,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: path,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, label)));\n};\n\n_c = NavItem;\n\nvar Dropdown = function Dropdown(_ref2) {\n  _s();\n\n  var dropDownTitle = _ref2.dropDownTitle,\n      subCategoryHandler = _ref2.subCategoryHandler,\n      useOnToolbar = _ref2.useOnToolbar,\n      dropDownTogglerHandler = _ref2.dropDownTogglerHandler,\n      showDropDown = _ref2.showDropDown,\n      subItems = _ref2.subItems;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      backgroundActive = _useState[0],\n      setBackgroundActive = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      navItemBackground = _useState2[0],\n      setNavItemBackground = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      scrollY = _useState3[0],\n      setScrollY = _useState3[1];\n\n  Object(_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_4__[\"useScrollPosition\"])(function (_ref3) {\n    var currPos = _ref3.currPos;\n    setScrollY(currPos.y);\n  }, [showDropDown], false, false, 0); //this is to avoid top scrolling when entering/leaving the dropdown\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    document.body.style.position = \"\";\n    document.body.style.top = \"\";\n    window.scrollTo(scrollY, scrollY * -1);\n    setNavItemBackground(false);\n\n    if (showDropDown) {\n      setTimeout(function () {\n        setNavItemBackground(true);\n      }, 500);\n      document.body.style.position = \"fixed\";\n      document.body.style.top = \"\".concat(scrollY, \"px\");\n    }\n  }, [showDropDown]);\n\n  var navItemMouseEnter = function navItemMouseEnter(id) {\n    setBackgroundActive(id);\n  };\n\n  var navItemMouseLeave = function navItemMouseLeave() {\n    setBackgroundActive(false);\n  };\n\n  console.log(\"background status\", backgroundActive);\n  var navItems = subItems.map(function (item) {\n    return __jsx(NavItem, {\n      toggleBackground: backgroundActive,\n      backgroundImage: item.background,\n      path: item.path,\n      label: item.label,\n      mouseEntered: function mouseEntered() {\n        return navItemMouseEnter(item.id);\n      },\n      mouseLeft: navItemMouseLeave,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 5\n      }\n    });\n  });\n  return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"Wrapper\"], {\n    toggleBackground: toggleBackground,\n    backgroundImage: backgroundImage,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"List\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }, navItems));\n};\n\n_s(Dropdown, \"ZA00rKfQbcFhfdnQZDpx5VmL8qk=\", false, function () {\n  return [_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_4__[\"useScrollPosition\"]];\n});\n\n_c2 = Dropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"NavItem\");\n$RefreshReg$(_c2, \"Dropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvRHJvcGRvd24vRHJvcGRvd24uanM/MTdjNCJdLCJuYW1lcyI6WyJOYXZJdGVtIiwicGF0aCIsImxhYmVsIiwibW91c2VFbnRlcmVkIiwibW91c2VMZWZ0IiwiRHJvcGRvd24iLCJkcm9wRG93blRpdGxlIiwic3ViQ2F0ZWdvcnlIYW5kbGVyIiwidXNlT25Ub29sYmFyIiwiZHJvcERvd25Ub2dnbGVySGFuZGxlciIsInNob3dEcm9wRG93biIsInN1Ykl0ZW1zIiwidXNlU3RhdGUiLCJiYWNrZ3JvdW5kQWN0aXZlIiwic2V0QmFja2dyb3VuZEFjdGl2ZSIsIm5hdkl0ZW1CYWNrZ3JvdW5kIiwic2V0TmF2SXRlbUJhY2tncm91bmQiLCJzY3JvbGxZIiwic2V0U2Nyb2xsWSIsInVzZVNjcm9sbFBvc2l0aW9uIiwiY3VyclBvcyIsInkiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwid2luZG93Iiwic2Nyb2xsVG8iLCJzZXRUaW1lb3V0IiwibmF2SXRlbU1vdXNlRW50ZXIiLCJpZCIsIm5hdkl0ZW1Nb3VzZUxlYXZlIiwiY29uc29sZSIsImxvZyIsIm5hdkl0ZW1zIiwibWFwIiwiaXRlbSIsImJhY2tncm91bmQiLCJ0b2dnbGVCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUE4QztBQUFBLE1BQTNDQyxJQUEyQyxRQUEzQ0EsSUFBMkM7QUFBQSxNQUFyQ0MsS0FBcUMsUUFBckNBLEtBQXFDO0FBQUEsTUFBOUJDLFlBQThCLFFBQTlCQSxZQUE4QjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDNUQsU0FDRSxNQUFDLHdFQUFEO0FBQVUsZ0JBQVksRUFBRUEsU0FBeEI7QUFBbUMs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QjtBQU1FLGVBQVMsRUFBRUMsaUJBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUQ0QjtBQUFBLEdBQWIsQ0FBakI7QUFXQSxTQUNFLE1BQUMsdUVBQUQ7QUFDRSxvQkFBZ0IsRUFBRU8sZ0JBRHBCO0FBRUUsbUJBQWUsRUFBRUMsZUFGbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPTCxRQUFQLENBSkYsQ0FERjtBQVFELENBbEVEOztHQUFNL0IsUTtVQVlKYywwRTs7O01BWklkLFE7QUFtRVNBLHVFQUFmIiwiZmlsZSI6Ii4vVUkvRHJvcGRvd24vRHJvcGRvd24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFDaGV2cm9uRG93biB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IHVzZVNjcm9sbFBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL0hvb2tzL3VzZVNjcm9sbFBvc2l0aW9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBXcmFwcGVyLCBMaXN0LCBNZW51SXRlbSB9IGZyb20gXCIuLi8uLi9TdHlsZWRDb21wb25lbnRzL2Ryb3Bkb3duSXRlbXNcIjtcblxuY29uc3QgTmF2SXRlbSA9ICh7IHBhdGgsIGxhYmVsLCBtb3VzZUVudGVyZWQsIG1vdXNlTGVmdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE1lbnVJdGVtIG9uTW91c2VMZWF2ZT17bW91c2VMZWZ0fSBvbk1vdXNlRW50ZXI9e21vdXNlRW50ZXJlZH0+XG4gICAgICA8TGluayBocmVmPXtwYXRofT5cbiAgICAgICAgPGE+e2xhYmVsfTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L01lbnVJdGVtPlxuICApO1xufTtcblxuY29uc3QgRHJvcGRvd24gPSAoe1xuICBkcm9wRG93blRpdGxlLFxuICBzdWJDYXRlZ29yeUhhbmRsZXIsXG4gIHVzZU9uVG9vbGJhcixcbiAgZHJvcERvd25Ub2dnbGVySGFuZGxlcixcbiAgc2hvd0Ryb3BEb3duLFxuICBzdWJJdGVtcyxcbn0pID0+IHtcbiAgY29uc3QgW2JhY2tncm91bmRBY3RpdmUsIHNldEJhY2tncm91bmRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmF2SXRlbUJhY2tncm91bmQsIHNldE5hdkl0ZW1CYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2Nyb2xsWSwgc2V0U2Nyb2xsWV0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VTY3JvbGxQb3NpdGlvbihcbiAgICAoeyBjdXJyUG9zIH0pID0+IHtcbiAgICAgIHNldFNjcm9sbFkoY3VyclBvcy55KTtcbiAgICB9LFxuICAgIFtzaG93RHJvcERvd25dLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIDBcbiAgKTtcblxuICAvL3RoaXMgaXMgdG8gYXZvaWQgdG9wIHNjcm9sbGluZyB3aGVuIGVudGVyaW5nL2xlYXZpbmcgdGhlIGRyb3Bkb3duXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9IFwiXCI7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSBcIlwiO1xuICAgIHdpbmRvdy5zY3JvbGxUbyhzY3JvbGxZLCBzY3JvbGxZICogLTEpO1xuICAgIHNldE5hdkl0ZW1CYWNrZ3JvdW5kKGZhbHNlKTtcbiAgICBpZiAoc2hvd0Ryb3BEb3duKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TmF2SXRlbUJhY2tncm91bmQodHJ1ZSk7XG4gICAgICB9LCA1MDApO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gYCR7c2Nyb2xsWX1weGA7XG4gICAgfVxuICB9LCBbc2hvd0Ryb3BEb3duXSk7XG5cbiAgY29uc3QgbmF2SXRlbU1vdXNlRW50ZXIgPSAoaWQpID0+IHtcbiAgICBzZXRCYWNrZ3JvdW5kQWN0aXZlKGlkKTtcbiAgfTtcblxuICBjb25zdCBuYXZJdGVtTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBzZXRCYWNrZ3JvdW5kQWN0aXZlKGZhbHNlKTtcbiAgfTtcblxuICBjb25zb2xlLmxvZyhcImJhY2tncm91bmQgc3RhdHVzXCIsIGJhY2tncm91bmRBY3RpdmUpO1xuXG4gIGNvbnN0IG5hdkl0ZW1zID0gc3ViSXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgPE5hdkl0ZW1cbiAgICAgIHRvZ2dsZUJhY2tncm91bmQ9e2JhY2tncm91bmRBY3RpdmV9XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U9e2l0ZW0uYmFja2dyb3VuZH1cbiAgICAgIHBhdGg9e2l0ZW0ucGF0aH1cbiAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgbW91c2VFbnRlcmVkPXsoKSA9PiBuYXZJdGVtTW91c2VFbnRlcihpdGVtLmlkKX1cbiAgICAgIG1vdXNlTGVmdD17bmF2SXRlbU1vdXNlTGVhdmV9XG4gICAgLz5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlclxuICAgICAgdG9nZ2xlQmFja2dyb3VuZD17dG9nZ2xlQmFja2dyb3VuZH1cbiAgICAgIGJhY2tncm91bmRJbWFnZT17YmFja2dyb3VuZEltYWdlfVxuICAgID5cbiAgICAgIDxMaXN0PntuYXZJdGVtc308L0xpc3Q+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./UI/Dropdown/Dropdown.js\n");

/***/ })

})