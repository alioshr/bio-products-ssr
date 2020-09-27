webpackHotUpdate_N_E("pages/index",{

/***/ "./UI/Dropdown/Dropdown.js":
/*!*********************************!*\
  !*** ./UI/Dropdown/Dropdown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/.pnpm/registry.npmjs.org/react-transition-group/4.4.1_react-dom@16.13.1/node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_react-dom@16.13.1/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SocialMedia/SocialMedia */ \"./UI/SocialMedia/SocialMedia.js\");\n/* harmony import */ var _StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../StyledComponents/dropdownItems */ \"./StyledComponents/dropdownItems.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/UI/Dropdown/Dropdown.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n //dropdown\n\nvar Dropdown = function Dropdown(_ref) {\n  _s();\n\n  var dropDownTitle = _ref.dropDownTitle,\n      subCategoryHandler = _ref.subCategoryHandler,\n      dropDownTogglerHandler = _ref.dropDownTogglerHandler,\n      onProducts = _ref.onProducts,\n      showDropDown = _ref.showDropDown,\n      subItems = _ref.subItems;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      scrollY = _useState[0],\n      setScrollY = _useState[1];\n\n  Object(_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__[\"useScrollPosition\"])(function (_ref2) {\n    var currPos = _ref2.currPos;\n    setScrollY(currPos.y);\n  }, [showDropDown], false, false, 0); //this is to avoid top scrolling when entering/leaving the dropdown\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var bodyStyle = document.body.style;\n    bodyStyle.position = \"\";\n    bodyStyle.top = \"\";\n    bodyStyle.left = \"\";\n    bodyStyle.right = \"\";\n    window.scrollTo(scrollY, scrollY * -1);\n\n    if (showDropDown) {\n      bodyStyle.position = \"fixed\";\n      bodyStyle.top = \"\".concat(scrollY, \"px\");\n      bodyStyle.left = \"0\";\n      bodyStyle.right = \"0\";\n    }\n  }, [showDropDown]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, onProducts && __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"TitleWrapper\"], {\n    onClick: dropDownTogglerHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, \"TITLE\"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faChevronDown\"],\n    size: \"3x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  })), __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"Transition\"], {\n    \"in\": showDropDown,\n    timeout: 500,\n    mountOnEnter: true,\n    unmountOnExit: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, function (state) {\n    return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"Nav\"], {\n      state: state,\n      onClick: dropDownTogglerHandler,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 11\n      }\n    }, __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"List\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 13\n      }\n    }, __jsx(ToolbarNav, {\n      onProducts: onProducts,\n      subItems: subItems,\n      showDropDown: showDropDown,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 15\n      }\n    })));\n  }));\n};\n\n_s(Dropdown, \"w0YrMI37twwCUgEUTVkLPlMY9hc=\", false, function () {\n  return [_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__[\"useScrollPosition\"]];\n});\n\n_c = Dropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown); //navigation for the toolbar\n\nvar ToolbarNav = function ToolbarNav(_ref3) {\n  _s2();\n\n  var subItems = _ref3.subItems,\n      showDropDown = _ref3.showDropDown,\n      onProducts = _ref3.onProducts;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      allowBackground = _useState2[0],\n      setAllowBackground = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      backgroundToggledLink = _useState3[0],\n      setBackgroundToggledLink = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    //this piece of state is to avoid the background appearance while the menu opens\n    setTimeout(function () {\n      setAllowBackground(true);\n    }, [550]); //remove background images once the toolbar slides up for UI purposes as the mouse will hover those links\n    //the cleanup on unmount does not trigger on time, so I moved it before the component unmounts here\n\n    if (!showDropDown) {\n      setAllowBackground(false);\n    }\n  }, [showDropDown]);\n\n  var navItemMouseEnter = function navItemMouseEnter(path) {\n    setBackgroundToggledLink(path);\n  };\n\n  var navItemMouseLeave = function navItemMouseLeave() {\n    setBackgroundToggledLink(false);\n  };\n\n  var navItems = subItems.map(function (item) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n      key: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 5\n      }\n    }, __jsx(NavItem, {\n      onProducts: onProducts,\n      path: item.path,\n      label: item.label,\n      mouseEntered: function mouseEntered() {\n        return navItemMouseEnter(item.background);\n      },\n      mouseLeft: navItemMouseLeave,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 7\n      }\n    }), window.innerWidth > 640 && __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"Background\"], {\n      showBackground: backgroundToggledLink === item.background,\n      backgroundImage: allowBackground && item.background,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }\n    }));\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 5\n    }\n  }, navItems, __jsx(_SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    iconSize: \"4x\",\n    pattern: \"menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 7\n    }\n  }));\n}; //main navItem\n\n\n_s2(ToolbarNav, \"F12Hel/1UT4nAhzKIMk+Dy3O7hw=\");\n\n_c2 = ToolbarNav;\n\nvar NavItem = function NavItem(_ref4) {\n  var path = _ref4.path,\n      label = _ref4.label,\n      mouseEntered = _ref4.mouseEntered,\n      mouseLeft = _ref4.mouseLeft,\n      onProducts = _ref4.onProducts,\n      chooseProduct = _ref4.chooseProduct;\n\n  var item = __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: path,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 7\n    }\n  }, label));\n\n  onProducts ? item = __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 24\n    }\n  }, title) : null;\n  return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"MenuItem\"], {\n    onMouseLeave: mouseLeft,\n    onMouseEnter: mouseEntered,\n    onClick: chooseProduct,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 5\n    }\n  }, item);\n};\n\n_c3 = NavItem;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Dropdown\");\n$RefreshReg$(_c2, \"ToolbarNav\");\n$RefreshReg$(_c3, \"NavItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvRHJvcGRvd24vRHJvcGRvd24uanM/MTdjNCJdLCJuYW1lcyI6WyJEcm9wZG93biIsImRyb3BEb3duVGl0bGUiLCJzdWJDYXRlZ29yeUhhbmRsZXIiLCJkcm9wRG93blRvZ2dsZXJIYW5kbGVyIiwib25Qcm9kdWN0cyIsInNob3dEcm9wRG93biIsInN1Ykl0ZW1zIiwidXNlU3RhdGUiLCJzY3JvbGxZIiwic2V0U2Nyb2xsWSIsInVzZVNjcm9sbFBvc2l0aW9uIiwiY3VyclBvcyIsInkiLCJ1c2VFZmZlY3QiLCJib2R5U3R5bGUiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJmYUNoZXZyb25Eb3duIiwic3RhdGUiLCJUb29sYmFyTmF2IiwiYWxsb3dCYWNrZ3JvdW5kIiwic2V0QWxsb3dCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFRvZ2dsZWRMaW5rIiwic2V0QmFja2dyb3VuZFRvZ2dsZWRMaW5rIiwic2V0VGltZW91dCIsIm5hdkl0ZW1Nb3VzZUVudGVyIiwicGF0aCIsIm5hdkl0ZW1Nb3VzZUxlYXZlIiwibmF2SXRlbXMiLCJtYXAiLCJpdGVtIiwiaWQiLCJsYWJlbCIsImJhY2tncm91bmQiLCJpbm5lcldpZHRoIiwiTmF2SXRlbSIsIm1vdXNlRW50ZXJlZCIsIm1vdXNlTGVmdCIsImNob29zZVByb2R1Y3QiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQVVBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BT1g7QUFBQTs7QUFBQSxNQU5KQyxhQU1JLFFBTkpBLGFBTUk7QUFBQSxNQUxKQyxrQkFLSSxRQUxKQSxrQkFLSTtBQUFBLE1BSkpDLHNCQUlJLFFBSkpBLHNCQUlJO0FBQUEsTUFISkMsVUFHSSxRQUhKQSxVQUdJ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aEI7QUFHRSxXQUFPLEVBQUVFLGFBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHUixJQUxILENBREY7QUFTRCxDQXZCRDs7TUFBTUssTyIsImZpbGUiOiIuL1VJL0Ryb3Bkb3duL0Ryb3Bkb3duLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTY3JvbGxQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9Ib29rcy91c2VTY3JvbGxQb3NpdGlvblwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUNoZXZyb25Eb3duIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFNvY2lhbE1lZGlhIGZyb20gXCIuLi9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYVwiO1xuaW1wb3J0IHtcbiAgVGl0bGVXcmFwcGVyLFxuICBUaXRsZSxcbiAgTmF2LFxuICBMaXN0LFxuICBNZW51SXRlbSxcbiAgQmFja2dyb3VuZCxcbn0gZnJvbSBcIi4uLy4uL1N0eWxlZENvbXBvbmVudHMvZHJvcGRvd25JdGVtc1wiO1xuXG4vL2Ryb3Bkb3duXG5jb25zdCBEcm9wZG93biA9ICh7XG4gIGRyb3BEb3duVGl0bGUsXG4gIHN1YkNhdGVnb3J5SGFuZGxlcixcbiAgZHJvcERvd25Ub2dnbGVySGFuZGxlcixcbiAgb25Qcm9kdWN0cyxcbiAgc2hvd0Ryb3BEb3duLFxuICBzdWJJdGVtcyxcbn0pID0+IHtcbiAgY29uc3QgW3Njcm9sbFksIHNldFNjcm9sbFldID0gdXNlU3RhdGUoMCk7XG4gIHVzZVNjcm9sbFBvc2l0aW9uKFxuICAgICh7IGN1cnJQb3MgfSkgPT4ge1xuICAgICAgc2V0U2Nyb2xsWShjdXJyUG9zLnkpO1xuICAgIH0sXG4gICAgW3Nob3dEcm9wRG93bl0sXG4gICAgZmFsc2UsXG4gICAgZmFsc2UsXG4gICAgMFxuICApO1xuICAvL3RoaXMgaXMgdG8gYXZvaWQgdG9wIHNjcm9sbGluZyB3aGVuIGVudGVyaW5nL2xlYXZpbmcgdGhlIGRyb3Bkb3duXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcbiAgICBib2R5U3R5bGUucG9zaXRpb24gPSBcIlwiO1xuICAgIGJvZHlTdHlsZS50b3AgPSBcIlwiO1xuICAgIGJvZHlTdHlsZS5sZWZ0ID0gXCJcIjtcbiAgICBib2R5U3R5bGUucmlnaHQgPSBcIlwiO1xuICAgIHdpbmRvdy5zY3JvbGxUbyhzY3JvbGxZLCBzY3JvbGxZICogLTEpO1xuICAgIGlmIChzaG93RHJvcERvd24pIHtcbiAgICAgIGJvZHlTdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICAgIGJvZHlTdHlsZS50b3AgPSBgJHtzY3JvbGxZfXB4YDtcbiAgICAgIGJvZHlTdHlsZS5sZWZ0ID0gXCIwXCI7XG4gICAgICBib2R5U3R5bGUucmlnaHQgPSBcIjBcIjtcbiAgICB9XG4gIH0sIFtzaG93RHJvcERvd25dKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtvblByb2R1Y3RzICYmIChcbiAgICAgICAgPFRpdGxlV3JhcHBlciBvbkNsaWNrPXtkcm9wRG93blRvZ2dsZXJIYW5kbGVyfT5cbiAgICAgICAgICA8VGl0bGU+VElUTEU8L1RpdGxlPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uRG93bn0gc2l6ZT1cIjN4XCIgLz5cbiAgICAgICAgPC9UaXRsZVdyYXBwZXI+XG4gICAgICApfVxuICAgICAgPFRyYW5zaXRpb24gaW49e3Nob3dEcm9wRG93bn0gdGltZW91dD17NTAwfSBtb3VudE9uRW50ZXIgdW5tb3VudE9uRXhpdD5cbiAgICAgICAgeyhzdGF0ZSkgPT4gKFxuICAgICAgICAgIDxOYXYgc3RhdGU9e3N0YXRlfSBvbkNsaWNrPXtkcm9wRG93blRvZ2dsZXJIYW5kbGVyfT5cbiAgICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgICA8VG9vbGJhck5hdlxuICAgICAgICAgICAgICAgIG9uUHJvZHVjdHM9e29uUHJvZHVjdHN9XG4gICAgICAgICAgICAgICAgc3ViSXRlbXM9e3N1Ykl0ZW1zfVxuICAgICAgICAgICAgICAgIHNob3dEcm9wRG93bj17c2hvd0Ryb3BEb3dufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICApfVxuICAgICAgPC9UcmFuc2l0aW9uPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG5cbi8vbmF2aWdhdGlvbiBmb3IgdGhlIHRvb2xiYXJcbmNvbnN0IFRvb2xiYXJOYXYgPSAoeyBzdWJJdGVtcywgc2hvd0Ryb3BEb3duLCBvblByb2R1Y3RzIH0pID0+IHtcbiAgY29uc3QgW2FsbG93QmFja2dyb3VuZCwgc2V0QWxsb3dCYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2JhY2tncm91bmRUb2dnbGVkTGluaywgc2V0QmFja2dyb3VuZFRvZ2dsZWRMaW5rXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvL3RoaXMgcGllY2Ugb2Ygc3RhdGUgaXMgdG8gYXZvaWQgdGhlIGJhY2tncm91bmQgYXBwZWFyYW5jZSB3aGlsZSB0aGUgbWVudSBvcGVuc1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0QWxsb3dCYWNrZ3JvdW5kKHRydWUpO1xuICAgIH0sIFs1NTBdKTtcbiAgICAvL3JlbW92ZSBiYWNrZ3JvdW5kIGltYWdlcyBvbmNlIHRoZSB0b29sYmFyIHNsaWRlcyB1cCBmb3IgVUkgcHVycG9zZXMgYXMgdGhlIG1vdXNlIHdpbGwgaG92ZXIgdGhvc2UgbGlua3NcbiAgICAvL3RoZSBjbGVhbnVwIG9uIHVubW91bnQgZG9lcyBub3QgdHJpZ2dlciBvbiB0aW1lLCBzbyBJIG1vdmVkIGl0IGJlZm9yZSB0aGUgY29tcG9uZW50IHVubW91bnRzIGhlcmVcbiAgICBpZiAoIXNob3dEcm9wRG93bikge1xuICAgICAgc2V0QWxsb3dCYWNrZ3JvdW5kKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtzaG93RHJvcERvd25dKTtcblxuICBjb25zdCBuYXZJdGVtTW91c2VFbnRlciA9IChwYXRoKSA9PiB7XG4gICAgc2V0QmFja2dyb3VuZFRvZ2dsZWRMaW5rKHBhdGgpO1xuICB9O1xuXG4gIGNvbnN0IG5hdkl0ZW1Nb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgIHNldEJhY2tncm91bmRUb2dnbGVkTGluayhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgbmF2SXRlbXMgPSBzdWJJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpdGVtLmlkfT5cbiAgICAgIDxOYXZJdGVtXG4gICAgICAgIG9uUHJvZHVjdHM9e29uUHJvZHVjdHN9XG4gICAgICAgIHBhdGg9e2l0ZW0ucGF0aH1cbiAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgIG1vdXNlRW50ZXJlZD17KCkgPT4gbmF2SXRlbU1vdXNlRW50ZXIoaXRlbS5iYWNrZ3JvdW5kKX1cbiAgICAgICAgbW91c2VMZWZ0PXtuYXZJdGVtTW91c2VMZWF2ZX1cbiAgICAgIC8+XG4gICAgICB7d2luZG93LmlubmVyV2lkdGggPiA2NDAgJiYgKFxuICAgICAgICA8QmFja2dyb3VuZFxuICAgICAgICAgIHNob3dCYWNrZ3JvdW5kPXtiYWNrZ3JvdW5kVG9nZ2xlZExpbmsgPT09IGl0ZW0uYmFja2dyb3VuZH1cbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U9e2FsbG93QmFja2dyb3VuZCAmJiBpdGVtLmJhY2tncm91bmR9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge25hdkl0ZW1zfVxuICAgICAgPFNvY2lhbE1lZGlhIGljb25TaXplPVwiNHhcIiBwYXR0ZXJuPVwibWVudVwiIC8+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbi8vbWFpbiBuYXZJdGVtXG5jb25zdCBOYXZJdGVtID0gKHtcbiAgcGF0aCxcbiAgbGFiZWwsXG4gIG1vdXNlRW50ZXJlZCxcbiAgbW91c2VMZWZ0LFxuICBvblByb2R1Y3RzLFxuICBjaG9vc2VQcm9kdWN0LFxufSkgPT4ge1xuICBsZXQgaXRlbSA9IChcbiAgICA8TGluayBocmVmPXtwYXRofT5cbiAgICAgIDxhPntsYWJlbH08L2E+XG4gICAgPC9MaW5rPlxuICApO1xuICBvblByb2R1Y3RzID8gKGl0ZW0gPSA8c3Bhbj57dGl0bGV9PC9zcGFuPikgOiBudWxsO1xuICByZXR1cm4gKFxuICAgIDxNZW51SXRlbVxuICAgICAgb25Nb3VzZUxlYXZlPXttb3VzZUxlZnR9XG4gICAgICBvbk1vdXNlRW50ZXI9e21vdXNlRW50ZXJlZH1cbiAgICAgIG9uQ2xpY2s9e2Nob29zZVByb2R1Y3R9XG4gICAgPlxuICAgICAge2l0ZW19XG4gICAgPC9NZW51SXRlbT5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./UI/Dropdown/Dropdown.js\n");

/***/ })

})