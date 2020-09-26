webpackHotUpdate_N_E("pages/_app",{

/***/ "./UI/Dropdown/Dropdown.js":
/*!*********************************!*\
  !*** ./UI/Dropdown/Dropdown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/.pnpm/registry.npmjs.org/react-transition-group/4.4.1_react-dom@16.13.1/node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_react-dom@16.13.1/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../StyledComponents/dropdownItems */ \"./StyledComponents/dropdownItems.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/UI/Dropdown/Dropdown.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar NavItem = function NavItem(_ref) {\n  var path = _ref.path,\n      label = _ref.label,\n      mouseEntered = _ref.mouseEntered,\n      mouseLeft = _ref.mouseLeft;\n  return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"MenuItem\"], {\n    onMouseLeave: mouseLeft,\n    onMouseEnter: mouseEntered,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: path,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, label)));\n};\n\n_c = NavItem;\n\nvar ToolbarNav = function ToolbarNav(_ref2) {\n  _s();\n\n  var subItems = _ref2.subItems;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      allowBackground = _useState[0],\n      setAllowBackground = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      backgroundToggledLink = _useState2[0],\n      setBackgroundToggledLink = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    //this piece of state is to avoid the background appearance while the menu opens\n    setTimeout(function () {\n      setAllowBackground(true);\n    }, [550]);\n    return function () {\n      return setAllowBackground(false);\n    }; //cleanUp on unmount\n  }, []);\n\n  var navItemMouseEnter = function navItemMouseEnter(path) {\n    setBackgroundToggledLink(path);\n  };\n\n  var navItemMouseLeave = function navItemMouseLeave() {\n    setBackgroundToggledLink(false);\n  };\n\n  var navItems = subItems.map(function (item) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n      key: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 5\n      }\n    }, __jsx(NavItem, {\n      path: item.path,\n      label: item.label,\n      mouseEntered: function mouseEntered() {\n        return navItemMouseEnter(item.background);\n      },\n      mouseLeft: navItemMouseLeave,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 7\n      }\n    }), __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"Background\"], {\n      showBackground: backgroundToggledLink === item.background,\n      backgroundImage: allowBackground && item.background,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 7\n      }\n    }));\n  });\n  return navItems;\n};\n\n_s(ToolbarNav, \"F12Hel/1UT4nAhzKIMk+Dy3O7hw=\");\n\n_c2 = ToolbarNav;\n\nvar Dropdown = function Dropdown(_ref3) {\n  _s2();\n\n  var dropDownTitle = _ref3.dropDownTitle,\n      subCategoryHandler = _ref3.subCategoryHandler,\n      useOnToolbar = _ref3.useOnToolbar,\n      dropDownTogglerHandler = _ref3.dropDownTogglerHandler,\n      showDropDown = _ref3.showDropDown,\n      subItems = _ref3.subItems;\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      scrollY = _useState3[0],\n      setScrollY = _useState3[1];\n\n  Object(_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__[\"useScrollPosition\"])(function (_ref4) {\n    var currPos = _ref4.currPos;\n    setScrollY(currPos.y);\n  }, [showDropDown], false, false, 0); //this is to avoid top scrolling when entering/leaving the dropdown\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    document.body.style.position = \"\";\n    document.body.style.top = \"\";\n    window.scrollTo(scrollY, scrollY * -1);\n\n    if (showDropDown) {\n      document.body.style.position = \"fixed\";\n      document.body.style.top = \"\".concat(scrollY, \"px\");\n    }\n  }, [showDropDown]);\n  var navItemsMemoized = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    return __jsx(ToolbarNav, {\n      subItems: subItems,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 42\n      }\n    });\n  }, [showDropDown]);\n  return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"Transition\"], {\n    \"in\": showDropDown,\n    timeout: 500,\n    mountOnEnter: true,\n    unmountOnExit: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 5\n    }\n  }, function (state) {\n    return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"Wrapper\"], {\n      state: state,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }\n    }, __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"List\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 11\n      }\n    }, navItemsMemoized));\n  });\n};\n\n_s2(Dropdown, \"JYm2GzpTsDUkxuSaszrQnioE5/w=\", false, function () {\n  return [_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__[\"useScrollPosition\"]];\n});\n\n_c3 = Dropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"NavItem\");\n$RefreshReg$(_c2, \"ToolbarNav\");\n$RefreshReg$(_c3, \"Dropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvRHJvcGRvd24vRHJvcGRvd24uanM/MTdjNCJdLCJuYW1lcyI6WyJOYXZJdGVtIiwicGF0aCIsImxhYmVsIiwibW91c2VFbnRlcmVkIiwibW91c2VMZWZ0IiwiVG9vbGJhck5hdiIsInN1Ykl0ZW1zIiwidXNlU3RhdGUiLCJhbGxvd0JhY2tncm91bmQiLCJzZXRBbGxvd0JhY2tncm91bmQiLCJiYWNrZ3JvdW5kVG9nZ2xlZExpbmsiLCJzZXRCYWNrZ3JvdW5kVG9nZ2xlZExpbmsiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwibmF2SXRlbU1vdXNlRW50ZXIiLCJuYXZJdGVtTW91c2VMZWF2ZSIsIm5hdkl0ZW1zIiwibWFwIiwiaXRlbSIsImlkIiwiYmFja2dyb3VuZCIsIkRyb3Bkb3duIiwiZHJvcERvd25UaXRsZSIsInN1YkNhdGVnb3J5SGFuZGxlciIsInVzZU9uVG9vbGJhciIsImRyb3BEb3duVG9nZ2xlckhhbmRsZXIiLCJzaG93RHJvcERvd24iLCJzY3JvbGxZIiwic2V0U2Nyb2xsWSIsInVzZVNjcm9sbFBvc2l0aW9uIiwiY3VyclBvcyIsInkiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwid2luZG93Iiwic2Nyb2xsVG8iLCJuYXZJdGVtc01lbW9pemVkIiwidXNlTWVtbyIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBOEM7QUFBQSxNQUEzQ0MsSUFBMkMsUUFBM0NBLElBQTJDO0FBQUEsTUFBckNDLEtBQXFDLFFBQXJDQSxLQUFxQztBQUFBLE1BQTlCQyxZQUE4QixRQUE5QkEsWUFBOEI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQzVELFNBQ0UsTUFBQyx3RUFBRDtBQUFVLGdCQUFZLEVBQUVBLFNBQXhCO0FB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Q0FERjtBQVdELENBekNEOztJQUFNbEIsUTtVQVVKUSwwRTs7O01BVklSLFE7QUEwQ1NBLHVFQUFmIiwiZmlsZSI6Ii4vVUkvRHJvcGRvd24vRHJvcGRvd24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2Nyb2xsUG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vSG9va3MvdXNlU2Nyb2xsUG9zaXRpb25cIjtcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFDaGV2cm9uRG93biB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7XG4gIFdyYXBwZXIsXG4gIExpc3QsXG4gIE1lbnVJdGVtLFxuICBCYWNrZ3JvdW5kLFxufSBmcm9tIFwiLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9kcm9wZG93bkl0ZW1zXCI7XG5cbmNvbnN0IE5hdkl0ZW0gPSAoeyBwYXRoLCBsYWJlbCwgbW91c2VFbnRlcmVkLCBtb3VzZUxlZnQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNZW51SXRlbSBvbk1vdXNlTGVhdmU9e21vdXNlTGVmdH0gb25Nb3VzZUVudGVyPXttb3VzZUVudGVyZWR9PlxuICAgICAgPExpbmsgaHJlZj17cGF0aH0+XG4gICAgICAgIDxhPntsYWJlbH08L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9NZW51SXRlbT5cbiAgKTtcbn07XG5cbmNvbnN0IFRvb2xiYXJOYXYgPSAoeyBzdWJJdGVtcyB9KSA9PiB7XG4gIGNvbnN0IFthbGxvd0JhY2tncm91bmQsIHNldEFsbG93QmFja2dyb3VuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtiYWNrZ3JvdW5kVG9nZ2xlZExpbmssIHNldEJhY2tncm91bmRUb2dnbGVkTGlua10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy90aGlzIHBpZWNlIG9mIHN0YXRlIGlzIHRvIGF2b2lkIHRoZSBiYWNrZ3JvdW5kIGFwcGVhcmFuY2Ugd2hpbGUgdGhlIG1lbnUgb3BlbnNcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEFsbG93QmFja2dyb3VuZCh0cnVlKTtcbiAgICB9LCBbNTUwXSk7XG4gICAgcmV0dXJuICgpID0+IHNldEFsbG93QmFja2dyb3VuZChmYWxzZSkgLy9jbGVhblVwIG9uIHVubW91bnRcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG5hdkl0ZW1Nb3VzZUVudGVyID0gKHBhdGgpID0+IHtcbiAgICBzZXRCYWNrZ3JvdW5kVG9nZ2xlZExpbmsocGF0aCk7XG4gIH07XG5cbiAgY29uc3QgbmF2SXRlbU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0QmFja2dyb3VuZFRvZ2dsZWRMaW5rKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBuYXZJdGVtcyA9IHN1Ykl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l0ZW0uaWR9PlxuICAgICAgPE5hdkl0ZW1cbiAgICAgICAgcGF0aD17aXRlbS5wYXRofVxuICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cbiAgICAgICAgbW91c2VFbnRlcmVkPXsoKSA9PiBuYXZJdGVtTW91c2VFbnRlcihpdGVtLmJhY2tncm91bmQpfVxuICAgICAgICBtb3VzZUxlZnQ9e25hdkl0ZW1Nb3VzZUxlYXZlfVxuICAgICAgLz5cbiAgICAgIDxCYWNrZ3JvdW5kXG4gICAgICAgIHNob3dCYWNrZ3JvdW5kPXtiYWNrZ3JvdW5kVG9nZ2xlZExpbmsgPT09IGl0ZW0uYmFja2dyb3VuZH1cbiAgICAgICAgYmFja2dyb3VuZEltYWdlPXthbGxvd0JhY2tncm91bmQgJiYgaXRlbS5iYWNrZ3JvdW5kfVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApKTtcbiAgcmV0dXJuIG5hdkl0ZW1zO1xufTtcblxuY29uc3QgRHJvcGRvd24gPSAoe1xuICBkcm9wRG93blRpdGxlLFxuICBzdWJDYXRlZ29yeUhhbmRsZXIsXG4gIHVzZU9uVG9vbGJhcixcbiAgZHJvcERvd25Ub2dnbGVySGFuZGxlcixcbiAgc2hvd0Ryb3BEb3duLFxuICBzdWJJdGVtcyxcbn0pID0+IHtcbiAgY29uc3QgW3Njcm9sbFksIHNldFNjcm9sbFldID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlU2Nyb2xsUG9zaXRpb24oXG4gICAgKHsgY3VyclBvcyB9KSA9PiB7XG4gICAgICBzZXRTY3JvbGxZKGN1cnJQb3MueSk7XG4gICAgfSxcbiAgICBbc2hvd0Ryb3BEb3duXSxcbiAgICBmYWxzZSxcbiAgICBmYWxzZSxcbiAgICAwXG4gICk7XG4gIC8vdGhpcyBpcyB0byBhdm9pZCB0b3Agc2Nyb2xsaW5nIHdoZW4gZW50ZXJpbmcvbGVhdmluZyB0aGUgZHJvcGRvd25cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gXCJcIjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9IFwiXCI7XG4gICAgd2luZG93LnNjcm9sbFRvKHNjcm9sbFksIHNjcm9sbFkgKiAtMSk7XG4gICAgaWYgKHNob3dEcm9wRG93bikge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gYCR7c2Nyb2xsWX1weGA7XG4gICAgfVxuICB9LCBbc2hvd0Ryb3BEb3duXSk7XG4gIGNvbnN0IG5hdkl0ZW1zTWVtb2l6ZWQgPSB1c2VNZW1vKCgpID0+IDxUb29sYmFyTmF2ICBzdWJJdGVtcz17c3ViSXRlbXN9IC8+LCBbc2hvd0Ryb3BEb3duXSlcbiAgcmV0dXJuIChcbiAgICA8VHJhbnNpdGlvbiBpbj17c2hvd0Ryb3BEb3dufSB0aW1lb3V0PXs1MDB9IG1vdW50T25FbnRlciB1bm1vdW50T25FeGl0PlxuICAgICAgeyhzdGF0ZSkgPT4gKFxuICAgICAgICA8V3JhcHBlciBzdGF0ZT17c3RhdGV9PlxuICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAge25hdkl0ZW1zTWVtb2l6ZWR9XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgICApfVxuICAgIDwvVHJhbnNpdGlvbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./UI/Dropdown/Dropdown.js\n");

/***/ })

})