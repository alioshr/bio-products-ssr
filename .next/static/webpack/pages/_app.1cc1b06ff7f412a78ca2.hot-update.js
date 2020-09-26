webpackHotUpdate_N_E("pages/_app",{

/***/ "./UI/Dropdown/Dropdown.js":
/*!*********************************!*\
  !*** ./UI/Dropdown/Dropdown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/.pnpm/registry.npmjs.org/react-transition-group/4.4.1_react-dom@16.13.1/node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_react-dom@16.13.1/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../StyledComponents/dropdownItems */ \"./StyledComponents/dropdownItems.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/UI/Dropdown/Dropdown.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar NavItem = function NavItem(_ref) {\n  var path = _ref.path,\n      label = _ref.label,\n      mouseEntered = _ref.mouseEntered,\n      mouseLeft = _ref.mouseLeft;\n  return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"MenuItem\"], {\n    onMouseLeave: mouseLeft,\n    onMouseEnter: mouseEntered,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: path,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, label)));\n};\n\n_c = NavItem;\nvar ToolbarNav = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(_c2 = _s(function (_ref2) {\n  _s();\n\n  var subItems = _ref2.subItems;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      allowBackground = _useState[0],\n      setAllowBackground = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      backgroundToggledLink = _useState2[0],\n      setBackgroundToggledLink = _useState2[1];\n\n  console.log(allowBackground);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    //this piece of state is to avoid the background appearance while the menu opens\n    setTimeout(function () {\n      setAllowBackground(true);\n    }, [550]);\n    return function () {\n      return setAllowBackground(false);\n    }; //cleanUp on unmount\n  }, []);\n\n  var navItemMouseEnter = function navItemMouseEnter(path) {\n    setBackgroundToggledLink(path);\n  };\n\n  var navItemMouseLeave = function navItemMouseLeave() {\n    setBackgroundToggledLink(false);\n  };\n\n  var navItems = subItems.map(function (item) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n      key: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 5\n      }\n    }, __jsx(NavItem, {\n      path: item.path,\n      label: item.label,\n      mouseEntered: function mouseEntered() {\n        return navItemMouseEnter(item.background);\n      },\n      mouseLeft: navItemMouseLeave,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 7\n      }\n    }), __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"Background\"], {\n      showBackground: backgroundToggledLink === item.background,\n      backgroundImage: allowBackground && item.background,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 7\n      }\n    }));\n  });\n  return navItems;\n}, \"F12Hel/1UT4nAhzKIMk+Dy3O7hw=\"), []);\n_c3 = ToolbarNav;\n\nvar Dropdown = function Dropdown(_ref3) {\n  _s2();\n\n  var dropDownTitle = _ref3.dropDownTitle,\n      subCategoryHandler = _ref3.subCategoryHandler,\n      useOnToolbar = _ref3.useOnToolbar,\n      dropDownTogglerHandler = _ref3.dropDownTogglerHandler,\n      showDropDown = _ref3.showDropDown,\n      subItems = _ref3.subItems;\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      scrollY = _useState3[0],\n      setScrollY = _useState3[1];\n\n  Object(_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__[\"useScrollPosition\"])(function (_ref4) {\n    var currPos = _ref4.currPos;\n    setScrollY(currPos.y);\n  }, [showDropDown], false, false, 0); //this is to avoid top scrolling when entering/leaving the dropdown\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    document.body.style.position = \"\";\n    document.body.style.top = \"\";\n    window.scrollTo(scrollY, scrollY * -1);\n\n    if (showDropDown) {\n      document.body.style.position = \"fixed\";\n      document.body.style.top = \"\".concat(scrollY, \"px\");\n    }\n  }, [showDropDown]);\n  return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"Transition\"], {\n    \"in\": showDropDown,\n    timeout: 500,\n    mountOnEnter: true,\n    unmountOnExit: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 5\n    }\n  }, function (state) {\n    return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"Wrapper\"], {\n      state: state,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }\n    }, __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"List\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 11\n      }\n    }, __jsx(ToolbarNav, {\n      subItems: subItems,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 13\n      }\n    })));\n  });\n};\n\n_s2(Dropdown, \"w0YrMI37twwCUgEUTVkLPlMY9hc=\", false, function () {\n  return [_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__[\"useScrollPosition\"]];\n});\n\n_c4 = Dropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"NavItem\");\n$RefreshReg$(_c2, \"ToolbarNav$React.useMemo\");\n$RefreshReg$(_c3, \"ToolbarNav\");\n$RefreshReg$(_c4, \"Dropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvRHJvcGRvd24vRHJvcGRvd24uanM/MTdjNCJdLCJuYW1lcyI6WyJOYXZJdGVtIiwicGF0aCIsImxhYmVsIiwibW91c2VFbnRlcmVkIiwibW91c2VMZWZ0IiwiVG9vbGJhck5hdiIsIlJlYWN0IiwidXNlTWVtbyIsInN1Ykl0ZW1zIiwidXNlU3RhdGUiLCJhbGxvd0JhY2tncm91bmQiLCJzZXRBbGxvd0JhY2tncm91bmQiLCJiYWNrZ3JvdW5kVG9nZ2xlZExpbmsiLCJzZXRCYWNrZ3JvdW5kVG9nZ2xlZExpbmsiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsIm5hdkl0ZW1Nb3VzZUVudGVyIiwibmF2SXRlbU1vdXNlTGVhdmUiLCJuYXZJdGVtcyIsIm1hcCIsIml0ZW0iLCJpZCIsImJhY2tncm91bmQiLCJEcm9wZG93biIsImRyb3BEb3duVGl0bGUiLCJzdWJDYXRlZ29yeUhhbmRsZXIiLCJ1c2VPblRvb2xiYXIiLCJkcm9wRG93blRvZ2dsZXJIYW5kbGVyIiwic2hvd0Ryb3BEb3duIiwic2Nyb2xsWSIsInNldFNjcm9sbFkiLCJ1c2VTY3JvbGxQb3NpdGlvbiIsImN1cnJQb3MiLCJ5IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUE4QztBQUFBLE1BQTNDQyxJQUEyQyxRQUEzQ0EsSUFBMkM7QUFBQSxNQUFyQ0MsS0FBcUMsUUFBckNBLEtBQXFDO0FBQUEsTUFBOUJDLFlBQThCLFFBQTlCQSxZQUE4QjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDNUQsU0FDRSxNQUFDLHdFQUFEO0FBQVUsZ0JBQVksRUFBRUEsU0FB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O1VBVUpRLDBFOzs7TUFWSVIsUTtBQTBDU0EsdUVBQWYiLCJmaWxlIjoiLi9VSS9Ecm9wZG93bi9Ecm9wZG93bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTY3JvbGxQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9Ib29rcy91c2VTY3JvbGxQb3NpdGlvblwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUNoZXZyb25Eb3duIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHtcbiAgV3JhcHBlcixcbiAgTGlzdCxcbiAgTWVudUl0ZW0sXG4gIEJhY2tncm91bmQsXG59IGZyb20gXCIuLi8uLi9TdHlsZWRDb21wb25lbnRzL2Ryb3Bkb3duSXRlbXNcIjtcblxuY29uc3QgTmF2SXRlbSA9ICh7IHBhdGgsIGxhYmVsLCBtb3VzZUVudGVyZWQsIG1vdXNlTGVmdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE1lbnVJdGVtIG9uTW91c2VMZWF2ZT17bW91c2VMZWZ0fSBvbk1vdXNlRW50ZXI9e21vdXNlRW50ZXJlZH0+XG4gICAgICA8TGluayBocmVmPXtwYXRofT5cbiAgICAgICAgPGE+e2xhYmVsfTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L01lbnVJdGVtPlxuICApO1xufTtcblxuY29uc3QgVG9vbGJhck5hdiA9IFJlYWN0LnVzZU1lbW8oKHsgc3ViSXRlbXMgfSkgPT4ge1xuICBjb25zdCBbYWxsb3dCYWNrZ3JvdW5kLCBzZXRBbGxvd0JhY2tncm91bmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYmFja2dyb3VuZFRvZ2dsZWRMaW5rLCBzZXRCYWNrZ3JvdW5kVG9nZ2xlZExpbmtdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zb2xlLmxvZyhhbGxvd0JhY2tncm91bmQpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy90aGlzIHBpZWNlIG9mIHN0YXRlIGlzIHRvIGF2b2lkIHRoZSBiYWNrZ3JvdW5kIGFwcGVhcmFuY2Ugd2hpbGUgdGhlIG1lbnUgb3BlbnNcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEFsbG93QmFja2dyb3VuZCh0cnVlKTtcbiAgICB9LCBbNTUwXSk7XG4gICAgcmV0dXJuICgpID0+IHNldEFsbG93QmFja2dyb3VuZChmYWxzZSk7IC8vY2xlYW5VcCBvbiB1bm1vdW50XG4gIH0sIFtdKTtcblxuICBjb25zdCBuYXZJdGVtTW91c2VFbnRlciA9IChwYXRoKSA9PiB7XG4gICAgc2V0QmFja2dyb3VuZFRvZ2dsZWRMaW5rKHBhdGgpO1xuICB9O1xuXG4gIGNvbnN0IG5hdkl0ZW1Nb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgIHNldEJhY2tncm91bmRUb2dnbGVkTGluayhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgbmF2SXRlbXMgPSBzdWJJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpdGVtLmlkfT5cbiAgICAgIDxOYXZJdGVtXG4gICAgICAgIHBhdGg9e2l0ZW0ucGF0aH1cbiAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgIG1vdXNlRW50ZXJlZD17KCkgPT4gbmF2SXRlbU1vdXNlRW50ZXIoaXRlbS5iYWNrZ3JvdW5kKX1cbiAgICAgICAgbW91c2VMZWZ0PXtuYXZJdGVtTW91c2VMZWF2ZX1cbiAgICAgIC8+XG4gICAgICA8QmFja2dyb3VuZFxuICAgICAgICBzaG93QmFja2dyb3VuZD17YmFja2dyb3VuZFRvZ2dsZWRMaW5rID09PSBpdGVtLmJhY2tncm91bmR9XG4gICAgICAgIGJhY2tncm91bmRJbWFnZT17YWxsb3dCYWNrZ3JvdW5kICYmIGl0ZW0uYmFja2dyb3VuZH1cbiAgICAgIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKSk7XG4gIHJldHVybiBuYXZJdGVtcztcbn0sIFtdKTtcblxuY29uc3QgRHJvcGRvd24gPSAoe1xuICBkcm9wRG93blRpdGxlLFxuICBzdWJDYXRlZ29yeUhhbmRsZXIsXG4gIHVzZU9uVG9vbGJhcixcbiAgZHJvcERvd25Ub2dnbGVySGFuZGxlcixcbiAgc2hvd0Ryb3BEb3duLFxuICBzdWJJdGVtcyxcbn0pID0+IHtcbiAgY29uc3QgW3Njcm9sbFksIHNldFNjcm9sbFldID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlU2Nyb2xsUG9zaXRpb24oXG4gICAgKHsgY3VyclBvcyB9KSA9PiB7XG4gICAgICBzZXRTY3JvbGxZKGN1cnJQb3MueSk7XG4gICAgfSxcbiAgICBbc2hvd0Ryb3BEb3duXSxcbiAgICBmYWxzZSxcbiAgICBmYWxzZSxcbiAgICAwXG4gICk7XG4gIC8vdGhpcyBpcyB0byBhdm9pZCB0b3Agc2Nyb2xsaW5nIHdoZW4gZW50ZXJpbmcvbGVhdmluZyB0aGUgZHJvcGRvd25cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gXCJcIjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9IFwiXCI7XG4gICAgd2luZG93LnNjcm9sbFRvKHNjcm9sbFksIHNjcm9sbFkgKiAtMSk7XG4gICAgaWYgKHNob3dEcm9wRG93bikge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gYCR7c2Nyb2xsWX1weGA7XG4gICAgfVxuICB9LCBbc2hvd0Ryb3BEb3duXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VHJhbnNpdGlvbiBpbj17c2hvd0Ryb3BEb3dufSB0aW1lb3V0PXs1MDB9IG1vdW50T25FbnRlciB1bm1vdW50T25FeGl0PlxuICAgICAgeyhzdGF0ZSkgPT4gKFxuICAgICAgICA8V3JhcHBlciBzdGF0ZT17c3RhdGV9PlxuICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgPFRvb2xiYXJOYXYgc3ViSXRlbXM9e3N1Ykl0ZW1zfSAvPlxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgKX1cbiAgICA8L1RyYW5zaXRpb24+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./UI/Dropdown/Dropdown.js\n");

/***/ })

})