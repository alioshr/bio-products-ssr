webpackHotUpdate_N_E("pages/_app",{

/***/ "./UI/Dropdown/Dropdown.js":
/*!*********************************!*\
  !*** ./UI/Dropdown/Dropdown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/.pnpm/registry.npmjs.org/react-transition-group/4.4.1_react-dom@16.13.1/node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_react-dom@16.13.1/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SocialMedia/SocialMedia */ \"./UI/SocialMedia/SocialMedia.js\");\n/* harmony import */ var _StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../StyledComponents/dropdownItems */ \"./StyledComponents/dropdownItems.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/UI/Dropdown/Dropdown.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n //dropdown\n\nvar Dropdown = function Dropdown(_ref) {\n  _s();\n\n  var dropDownTitle = _ref.dropDownTitle,\n      subCategoryHandler = _ref.subCategoryHandler,\n      dropDownTogglerHandler = _ref.dropDownTogglerHandler,\n      useOnProducts = _ref.useOnProducts,\n      showDropDown = _ref.showDropDown,\n      subItems = _ref.subItems;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      scrollY = _useState[0],\n      setScrollY = _useState[1];\n\n  Object(_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__[\"useScrollPosition\"])(function (_ref2) {\n    var currPos = _ref2.currPos;\n    setScrollY(currPos.y);\n  }, [showDropDown], false, false, 0); //this is to avoid top scrolling when entering/leaving the dropdown\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var bodyStyle = document.body.style;\n    bodyStyle.position = \"\";\n    bodyStyle.top = \"\";\n    bodyStyle.left = \"\";\n    bodyStyle.right = \"\";\n    window.scrollTo(scrollY, scrollY * -1);\n\n    if (showDropDown) {\n      bodyStyle.position = \"fixed\";\n      bodyStyle.top = \"\".concat(scrollY, \"px\");\n      bodyStyle.left = \"0\";\n      bodyStyle.right = \"0\";\n    }\n  }, [showDropDown]);\n  return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"Transition\"], {\n    \"in\": showDropDown,\n    timeout: 500,\n    mountOnEnter: true,\n    unmountOnExit: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, function (state) {\n    return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"Nav\"], {\n      state: state,\n      onClick: dropDownTogglerHandler,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }\n    }, __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"List\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 11\n      }\n    }, __jsx(ToolbarNav, {\n      subItems: subItems,\n      showDropDown: showDropDown,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 12\n      }\n    })));\n  });\n};\n\n_s(Dropdown, \"w0YrMI37twwCUgEUTVkLPlMY9hc=\", false, function () {\n  return [_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__[\"useScrollPosition\"]];\n});\n\n_c = Dropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown); //navigation for the toolbar\n\nvar ToolbarNav = function ToolbarNav(_ref3) {\n  _s2();\n\n  var subItems = _ref3.subItems,\n      showDropDown = _ref3.showDropDown;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      allowBackground = _useState2[0],\n      setAllowBackground = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      backgroundToggledLink = _useState3[0],\n      setBackgroundToggledLink = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    //this piece of state is to avoid the background appearance while the menu opens\n    setTimeout(function () {\n      setAllowBackground(true);\n    }, [550]); //remove background images once the toolbar slides up for UI purposes as the mouse will hover those links\n    //the cleanup on unmount does not trigger on time, so I moved it before the component unmounts here\n\n    if (!showDropDown) {\n      setAllowBackground(false);\n    }\n  }, [showDropDown]);\n\n  var navItemMouseEnter = function navItemMouseEnter(path) {\n    setBackgroundToggledLink(path);\n  };\n\n  var navItemMouseLeave = function navItemMouseLeave() {\n    setBackgroundToggledLink(false);\n  };\n\n  var navItems = subItems.map(function (item) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n      key: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 5\n      }\n    }, __jsx(NavItem, {\n      path: item.path,\n      label: item.label,\n      mouseEntered: function mouseEntered() {\n        return navItemMouseEnter(item.background);\n      },\n      mouseLeft: navItemMouseLeave,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 7\n      }\n    }), window.innerWidth > 640 && __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"Background\"], {\n      showBackground: backgroundToggledLink === item.background,\n      backgroundImage: allowBackground && item.background,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }\n    }));\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 5\n    }\n  }, navItems, __jsx(_SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    iconSize: \"4x\",\n    pattern: \"menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }\n  }));\n}; //main navItem\n\n\n_s2(ToolbarNav, \"F12Hel/1UT4nAhzKIMk+Dy3O7hw=\");\n\n_c2 = ToolbarNav;\n\nvar NavItem = function NavItem(_ref4) {\n  var path = _ref4.path,\n      label = _ref4.label,\n      mouseEntered = _ref4.mouseEntered,\n      mouseLeft = _ref4.mouseLeft;\n  return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"MenuItem\"], {\n    onMouseLeave: mouseLeft,\n    onMouseEnter: mouseEntered,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: path,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, label)));\n};\n\n_c3 = NavItem;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Dropdown\");\n$RefreshReg$(_c2, \"ToolbarNav\");\n$RefreshReg$(_c3, \"NavItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvRHJvcGRvd24vRHJvcGRvd24uanM/MTdjNCJdLCJuYW1lcyI6WyJEcm9wZG93biIsImRyb3BEb3duVGl0bGUiLCJzdWJDYXRlZ29yeUhhbmRsZXIiLCJkcm9wRG93blRvZ2dsZXJIYW5kbGVyIiwidXNlT25Qcm9kdWN0cyIsInNob3dEcm9wRG93biIsInN1Ykl0ZW1zIiwidXNlU3RhdGUiLCJzY3JvbGxZIiwic2V0U2Nyb2xsWSIsInVzZVNjcm9sbFBvc2l0aW9uIiwiY3VyclBvcyIsInkiLCJ1c2VFZmZlY3QiLCJib2R5U3R5bGUiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJzdGF0ZSIsIlRvb2xiYXJOYXYiLCJhbGxvd0JhY2tncm91bmQiLCJzZXRBbGxvd0JhY2tncm91bmQiLCJiYWNrZ3JvdW5kVG9nZ2xlZExpbmsiLCJzZXRCYWNrZ3JvdW5kVG9nZ2xlZExpbmsiLCJzZXRUaW1lb3V0IiwibmF2SXRlbU1vdXNlRW50ZXIiLCJwYXRoIiwibmF2SXRlbU1vdXNlTGVhdmUiLCJuYXZJdGVtcyIsIm1hcCIsIml0ZW0iLCJpZCIsImxhYmVsIiwiYmFja2dyb3VuZCIsImlubmVyV2lkdGgiLCJOYXZJdGVtIiwibW91c2VFbnRlcmVkIiwibW91c2VMZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBU0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FPWDtBQUFBOztBQUFBLE1BTkpDLGFBTUksUUFOSkEsYUFNSTtBQUFBLE1BTEpDLGtCQUtJLFFBTEpBLGtCQUtJO0FBQUEsTUFKSkMsc0JBSUksUUFKSkEsc0JBSUk7QUFBQSxNQUhKQyxhQUdJLFFBSEpBLGFBR0k7QUFBQSxNQUZKQyxZQUVJLFFBRkpBLFlBRUk7QUFBQSxNQURK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LE9BQVUsUUFBOEM7QUFBQSxNQUEzQ1QsSUFBMkMsU0FBM0NBLElBQTJDO0FBQUEsTUFBckNNLEtBQXFDLFNBQXJDQSxLQUFxQztBQUFBLE1BQTlCSSxZQUE4QixTQUE5QkEsWUFBOEI7QUFBQSxNQUFoQkMsU0FBZ0IsU0FBaEJBLFNBQWdCO0FBQzVELFNBQ0UsTUFBQyx3RUFBRDtBQUFVLGdCQUFZLEVBQUVBLFNBQXhCO0FBQW1DLGdCQUFZLEVBQUVELFlBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFVixJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlNLEtBQUosQ0FERixDQURGLENBREY7QUFPRCxDQVJEOztNQUFNRyxPIiwiZmlsZSI6Ii4vVUkvRHJvcGRvd24vRHJvcGRvd24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNjcm9sbFBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL0hvb2tzL3VzZVNjcm9sbFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhQ2hldnJvbkRvd24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgU29jaWFsTWVkaWEgZnJvbSAnLi4vU29jaWFsTWVkaWEvU29jaWFsTWVkaWEnO1xuaW1wb3J0IHtcbiAgXG4gIE5hdixcbiAgTGlzdCxcbiAgTWVudUl0ZW0sXG4gIEJhY2tncm91bmQsXG59IGZyb20gXCIuLi8uLi9TdHlsZWRDb21wb25lbnRzL2Ryb3Bkb3duSXRlbXNcIjtcblxuLy9kcm9wZG93blxuY29uc3QgRHJvcGRvd24gPSAoe1xuICBkcm9wRG93blRpdGxlLFxuICBzdWJDYXRlZ29yeUhhbmRsZXIsXG4gIGRyb3BEb3duVG9nZ2xlckhhbmRsZXIsXG4gIHVzZU9uUHJvZHVjdHMsXG4gIHNob3dEcm9wRG93bixcbiAgc3ViSXRlbXMsXG59KSA9PiB7XG4gIGNvbnN0IFtzY3JvbGxZLCBzZXRTY3JvbGxZXSA9IHVzZVN0YXRlKDApO1xuICB1c2VTY3JvbGxQb3NpdGlvbihcbiAgICAoeyBjdXJyUG9zIH0pID0+IHtcbiAgICAgIHNldFNjcm9sbFkoY3VyclBvcy55KTtcbiAgICB9LFxuICAgIFtzaG93RHJvcERvd25dLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIDBcbiAgKTtcbiAgLy90aGlzIGlzIHRvIGF2b2lkIHRvcCBzY3JvbGxpbmcgd2hlbiBlbnRlcmluZy9sZWF2aW5nIHRoZSBkcm9wZG93blxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XG4gICAgYm9keVN0eWxlLnBvc2l0aW9uID0gXCJcIjtcbiAgICBib2R5U3R5bGUudG9wID0gXCJcIjtcbiAgICBib2R5U3R5bGUubGVmdCA9IFwiXCI7XG4gICAgYm9keVN0eWxlLnJpZ2h0ID0gXCJcIjtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oc2Nyb2xsWSwgc2Nyb2xsWSAqIC0xKTtcbiAgICBpZiAoc2hvd0Ryb3BEb3duKSB7XG4gICAgICBib2R5U3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICBib2R5U3R5bGUudG9wID0gYCR7c2Nyb2xsWX1weGA7XG4gICAgICBib2R5U3R5bGUubGVmdCA9IFwiMFwiO1xuICAgICAgYm9keVN0eWxlLnJpZ2h0ID0gXCIwXCI7XG4gICAgfVxuICB9LCBbc2hvd0Ryb3BEb3duXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VHJhbnNpdGlvbiBpbj17c2hvd0Ryb3BEb3dufSB0aW1lb3V0PXs1MDB9IG1vdW50T25FbnRlciB1bm1vdW50T25FeGl0PlxuICAgICAgeyhzdGF0ZSkgPT4gKFxuICAgICAgICA8TmF2IHN0YXRlPXtzdGF0ZX0gb25DbGljaz17ZHJvcERvd25Ub2dnbGVySGFuZGxlcn0+XG4gICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgIDxUb29sYmFyTmF2IHN1Ykl0ZW1zPXtzdWJJdGVtc30gc2hvd0Ryb3BEb3duPXtzaG93RHJvcERvd259Lz5cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvTmF2PlxuICAgICAgKX1cbiAgICA8L1RyYW5zaXRpb24+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG5cbi8vbmF2aWdhdGlvbiBmb3IgdGhlIHRvb2xiYXJcbmNvbnN0IFRvb2xiYXJOYXYgPSAoeyBzdWJJdGVtcywgc2hvd0Ryb3BEb3duIH0pID0+IHtcbiAgY29uc3QgW2FsbG93QmFja2dyb3VuZCwgc2V0QWxsb3dCYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2JhY2tncm91bmRUb2dnbGVkTGluaywgc2V0QmFja2dyb3VuZFRvZ2dsZWRMaW5rXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvL3RoaXMgcGllY2Ugb2Ygc3RhdGUgaXMgdG8gYXZvaWQgdGhlIGJhY2tncm91bmQgYXBwZWFyYW5jZSB3aGlsZSB0aGUgbWVudSBvcGVuc1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0QWxsb3dCYWNrZ3JvdW5kKHRydWUpO1xuICAgIH0sIFs1NTBdKTtcbiAgICAvL3JlbW92ZSBiYWNrZ3JvdW5kIGltYWdlcyBvbmNlIHRoZSB0b29sYmFyIHNsaWRlcyB1cCBmb3IgVUkgcHVycG9zZXMgYXMgdGhlIG1vdXNlIHdpbGwgaG92ZXIgdGhvc2UgbGlua3NcbiAgICAvL3RoZSBjbGVhbnVwIG9uIHVubW91bnQgZG9lcyBub3QgdHJpZ2dlciBvbiB0aW1lLCBzbyBJIG1vdmVkIGl0IGJlZm9yZSB0aGUgY29tcG9uZW50IHVubW91bnRzIGhlcmVcbiAgICBpZighc2hvd0Ryb3BEb3duKSB7XG4gICAgICBzZXRBbGxvd0JhY2tncm91bmQoZmFsc2UpXG4gICAgfVxuICB9LCBbc2hvd0Ryb3BEb3duXSk7XG5cbiAgY29uc3QgbmF2SXRlbU1vdXNlRW50ZXIgPSAocGF0aCkgPT4ge1xuICAgIHNldEJhY2tncm91bmRUb2dnbGVkTGluayhwYXRoKTtcbiAgfTtcblxuICBjb25zdCBuYXZJdGVtTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBzZXRCYWNrZ3JvdW5kVG9nZ2xlZExpbmsoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IG5hdkl0ZW1zID0gc3ViSXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgPFJlYWN0LkZyYWdtZW50IGtleT17aXRlbS5pZH0+XG4gICAgICA8TmF2SXRlbVxuICAgICAgICBwYXRoPXtpdGVtLnBhdGh9XG4gICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICBtb3VzZUVudGVyZWQ9eygpID0+IG5hdkl0ZW1Nb3VzZUVudGVyKGl0ZW0uYmFja2dyb3VuZCl9XG4gICAgICAgIG1vdXNlTGVmdD17bmF2SXRlbU1vdXNlTGVhdmV9XG4gICAgICAvPlxuICAgICAge3dpbmRvdy5pbm5lcldpZHRoID4gNjQwICYmIChcbiAgICAgICAgPEJhY2tncm91bmRcbiAgICAgICAgc2hvd0JhY2tncm91bmQ9e2JhY2tncm91bmRUb2dnbGVkTGluayA9PT0gaXRlbS5iYWNrZ3JvdW5kfVxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U9e2FsbG93QmFja2dyb3VuZCAmJiBpdGVtLmJhY2tncm91bmR9XG4gICAgICAvPlxuICAgICAgKX1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtuYXZJdGVtc31cbiAgICAgIDxTb2NpYWxNZWRpYSBpY29uU2l6ZT1cIjR4XCIgcGF0dGVybj1cIm1lbnVcIi8+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbi8vbWFpbiBuYXZJdGVtXG5jb25zdCBOYXZJdGVtID0gKHsgcGF0aCwgbGFiZWwsIG1vdXNlRW50ZXJlZCwgbW91c2VMZWZ0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TWVudUl0ZW0gb25Nb3VzZUxlYXZlPXttb3VzZUxlZnR9IG9uTW91c2VFbnRlcj17bW91c2VFbnRlcmVkfT5cbiAgICAgIDxMaW5rIGhyZWY9e3BhdGh9PlxuICAgICAgICA8YT57bGFiZWx9PC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvTWVudUl0ZW0+XG4gICk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./UI/Dropdown/Dropdown.js\n");

/***/ })

})