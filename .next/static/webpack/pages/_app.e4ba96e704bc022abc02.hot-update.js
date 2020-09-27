webpackHotUpdate_N_E("pages/_app",{

/***/ "./UI/Dropdown/Dropdown.js":
/*!*********************************!*\
  !*** ./UI/Dropdown/Dropdown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/.pnpm/registry.npmjs.org/react-transition-group/4.4.1_react-dom@16.13.1/node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_react-dom@16.13.1/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SocialMedia/SocialMedia */ \"./UI/SocialMedia/SocialMedia.js\");\n/* harmony import */ var _StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../StyledComponents/dropdownItems */ \"./StyledComponents/dropdownItems.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/UI/Dropdown/Dropdown.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n //dropdown\n\nvar Dropdown = function Dropdown(_ref) {\n  _s();\n\n  var dropDownTitle = _ref.dropDownTitle,\n      subCategoryHandler = _ref.subCategoryHandler,\n      dropDownTogglerHandler = _ref.dropDownTogglerHandler,\n      onProducts = _ref.onProducts,\n      showDropDown = _ref.showDropDown,\n      subItems = _ref.subItems;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      scrollY = _useState[0],\n      setScrollY = _useState[1];\n\n  Object(_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__[\"useScrollPosition\"])(function (_ref2) {\n    var currPos = _ref2.currPos;\n    setScrollY(currPos.y);\n  }, [showDropDown], false, false, 0); //this is to avoid top scrolling when entering/leaving the dropdown\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var bodyStyle = document.body.style;\n    bodyStyle.position = \"\";\n    bodyStyle.top = \"\";\n    bodyStyle.left = \"\";\n    bodyStyle.right = \"\";\n    window.scrollTo(scrollY, scrollY * -1);\n\n    if (showDropDown) {\n      bodyStyle.position = \"fixed\";\n      bodyStyle.top = \"\".concat(scrollY, \"px\");\n      bodyStyle.left = \"0\";\n      bodyStyle.right = \"0\";\n    }\n  }, [showDropDown]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, onProducts && __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"TitleWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, \"TITLE\"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faChevronDown\"],\n    size: \"3x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  })), __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"Transition\"], {\n    \"in\": showDropDown,\n    timeout: 500,\n    mountOnEnter: true,\n    unmountOnExit: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, function (state) {\n    return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"Nav\"], {\n      state: state,\n      onClick: dropDownTogglerHandler,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 11\n      }\n    }, __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"List\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 13\n      }\n    }, __jsx(ToolbarNav, {\n      subItems: subItems,\n      showDropDown: showDropDown,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 15\n      }\n    })));\n  }));\n};\n\n_s(Dropdown, \"w0YrMI37twwCUgEUTVkLPlMY9hc=\", false, function () {\n  return [_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__[\"useScrollPosition\"]];\n});\n\n_c = Dropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown); //navigation for the toolbar\n\nvar ToolbarNav = function ToolbarNav(_ref3) {\n  _s2();\n\n  var subItems = _ref3.subItems,\n      showDropDown = _ref3.showDropDown,\n      onProducts = _ref3.onProducts;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      allowBackground = _useState2[0],\n      setAllowBackground = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      backgroundToggledLink = _useState3[0],\n      setBackgroundToggledLink = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    //this piece of state is to avoid the background appearance while the menu opens\n    setTimeout(function () {\n      setAllowBackground(true);\n    }, [550]); //remove background images once the toolbar slides up for UI purposes as the mouse will hover those links\n    //the cleanup on unmount does not trigger on time, so I moved it before the component unmounts here\n\n    if (!showDropDown) {\n      setAllowBackground(false);\n    }\n  }, [showDropDown]);\n\n  var navItemMouseEnter = function navItemMouseEnter(path) {\n    setBackgroundToggledLink(path);\n  };\n\n  var navItemMouseLeave = function navItemMouseLeave() {\n    setBackgroundToggledLink(false);\n  };\n\n  var navItems = subItems.map(function (item) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n      key: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 5\n      }\n    }, __jsx(NavItem, {\n      path: item.path,\n      label: item.label,\n      mouseEntered: function mouseEntered() {\n        return navItemMouseEnter(item.background);\n      },\n      mouseLeft: navItemMouseLeave,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 7\n      }\n    }), window.innerWidth > 640 && __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"Background\"], {\n      showBackground: backgroundToggledLink === item.background,\n      backgroundImage: allowBackground && item.background,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }\n    }));\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 5\n    }\n  }, navItems, __jsx(_SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    iconSize: \"4x\",\n    pattern: \"menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }\n  }));\n}; //main navItem\n\n\n_s2(ToolbarNav, \"F12Hel/1UT4nAhzKIMk+Dy3O7hw=\");\n\n_c2 = ToolbarNav;\n\nvar NavItem = function NavItem(_ref4) {\n  var path = _ref4.path,\n      label = _ref4.label,\n      mouseEntered = _ref4.mouseEntered,\n      mouseLeft = _ref4.mouseLeft;\n  return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"MenuItem\"], {\n    onMouseLeave: mouseLeft,\n    onMouseEnter: mouseEntered,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: path,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 9\n    }\n  }, label)));\n};\n\n_c3 = NavItem;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Dropdown\");\n$RefreshReg$(_c2, \"ToolbarNav\");\n$RefreshReg$(_c3, \"NavItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvRHJvcGRvd24vRHJvcGRvd24uanM/MTdjNCJdLCJuYW1lcyI6WyJEcm9wZG93biIsImRyb3BEb3duVGl0bGUiLCJzdWJDYXRlZ29yeUhhbmRsZXIiLCJkcm9wRG93blRvZ2dsZXJIYW5kbGVyIiwib25Qcm9kdWN0cyIsInNob3dEcm9wRG93biIsInN1Ykl0ZW1zIiwidXNlU3RhdGUiLCJzY3JvbGxZIiwic2V0U2Nyb2xsWSIsInVzZVNjcm9sbFBvc2l0aW9uIiwiY3VyclBvcyIsInkiLCJ1c2VFZmZlY3QiLCJib2R5U3R5bGUiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJmYUNoZXZyb25Eb3duIiwic3RhdGUiLCJUb29sYmFyTmF2IiwiYWxsb3dCYWNrZ3JvdW5kIiwic2V0QWxsb3dCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFRvZ2dsZWRMaW5rIiwic2V0QmFja2dyb3VuZFRvZ2dsZWRMaW5rIiwic2V0VGltZW91dCIsIm5hdkl0ZW1Nb3VzZUVudGVyIiwicGF0aCIsIm5hdkl0ZW1Nb3VzZUxlYXZlIiwibmF2SXRlbXMiLCJtYXAiLCJpdGVtIiwiaWQiLCJsYWJlbCIsImJhY2tncm91bmQiLCJpbm5lcldpZHRoIiwiTmF2SXRlbSIsIm1vdXNlRW50ZXJlZCIsIm1vdXNlTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQVVBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BT1g7QUFBQTs7QUFBQSxNQU5KQyxhQU1JLFFBTkpBLGFBTUk7QUFBQSxNQUxKQyxrQkFLSSxRQUxKQSxrQkFLSTtBQUFBLE1BSkpDLHNCQUlJLFFBSkpBLHNCQUlJO0FBQUEsTUFISkMsVUFHSSxRQUhKQSxVQUdJO0FBQUEsTUFGSkMsWUFFSSxRQUZKQSxZ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ZSxJQUFJVSxJQUFJLENBQUNHLFVBRjNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFUSixDQUQ0QjtBQUFBLEdBQWIsQ0FBakI7QUFrQkEsU0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0wsUUFESCxFQUVFLE1BQUMsZ0VBQUQ7QUFBYSxZQUFRLEVBQUMsSUFBdEI7QUFBMkIsV0FBTyxFQUFDLE1BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQsQ0EvQ0QsQyxDQWlEQTs7O0lBakRNVCxVOztNQUFBQSxVOztBQWtETixJQUFNZ0IsT0FBTyxHQUFHLFNBQVZBLE9BQVUsUUFBOEM7QUFBQSxNQUEzQ1QsSUFBMkMsU0FBM0NBLElBQTJDO0FBQUEsTUFBckNNLEtBQXFDLFNBQXJDQSxLQUFxQztBQUFBLE1BQTlCSSxZQUE4QixTQUE5QkEsWUFBOEI7QUFBQSxNQUFoQkMsU0FBZ0IsU0FBaEJBLFNBQWdCO0FBQzVELFNBQ0UsTUFBQyx3RUFBRDtBQUFVLGdCQUFZLEVBQUVBLFNBQXhCO0FBQW1DLGdCQUFZLEVBQUVELFlBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFVixJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlNLEtBQUosQ0FERixDQURGLENBREY7QUFPRCxDQVJEOztNQUFNRyxPIiwiZmlsZSI6Ii4vVUkvRHJvcGRvd24vRHJvcGRvd24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNjcm9sbFBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL0hvb2tzL3VzZVNjcm9sbFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhQ2hldnJvbkRvd24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgU29jaWFsTWVkaWEgZnJvbSBcIi4uL1NvY2lhbE1lZGlhL1NvY2lhbE1lZGlhXCI7XG5pbXBvcnQge1xuICBUaXRsZVdyYXBwZXIsXG4gIFRpdGxlLFxuICBOYXYsXG4gIExpc3QsXG4gIE1lbnVJdGVtLFxuICBCYWNrZ3JvdW5kLFxufSBmcm9tIFwiLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9kcm9wZG93bkl0ZW1zXCI7XG5cbi8vZHJvcGRvd25cbmNvbnN0IERyb3Bkb3duID0gKHtcbiAgZHJvcERvd25UaXRsZSxcbiAgc3ViQ2F0ZWdvcnlIYW5kbGVyLFxuICBkcm9wRG93blRvZ2dsZXJIYW5kbGVyLFxuICBvblByb2R1Y3RzLFxuICBzaG93RHJvcERvd24sXG4gIHN1Ykl0ZW1zLFxufSkgPT4ge1xuICBjb25zdCBbc2Nyb2xsWSwgc2V0U2Nyb2xsWV0gPSB1c2VTdGF0ZSgwKTtcbiAgdXNlU2Nyb2xsUG9zaXRpb24oXG4gICAgKHsgY3VyclBvcyB9KSA9PiB7XG4gICAgICBzZXRTY3JvbGxZKGN1cnJQb3MueSk7XG4gICAgfSxcbiAgICBbc2hvd0Ryb3BEb3duXSxcbiAgICBmYWxzZSxcbiAgICBmYWxzZSxcbiAgICAwXG4gICk7XG4gIC8vdGhpcyBpcyB0byBhdm9pZCB0b3Agc2Nyb2xsaW5nIHdoZW4gZW50ZXJpbmcvbGVhdmluZyB0aGUgZHJvcGRvd25cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlO1xuICAgIGJvZHlTdHlsZS5wb3NpdGlvbiA9IFwiXCI7XG4gICAgYm9keVN0eWxlLnRvcCA9IFwiXCI7XG4gICAgYm9keVN0eWxlLmxlZnQgPSBcIlwiO1xuICAgIGJvZHlTdHlsZS5yaWdodCA9IFwiXCI7XG4gICAgd2luZG93LnNjcm9sbFRvKHNjcm9sbFksIHNjcm9sbFkgKiAtMSk7XG4gICAgaWYgKHNob3dEcm9wRG93bikge1xuICAgICAgYm9keVN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgYm9keVN0eWxlLnRvcCA9IGAke3Njcm9sbFl9cHhgO1xuICAgICAgYm9keVN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICAgIGJvZHlTdHlsZS5yaWdodCA9IFwiMFwiO1xuICAgIH1cbiAgfSwgW3Nob3dEcm9wRG93bl0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge29uUHJvZHVjdHMgJiYgKFxuICAgICAgICA8VGl0bGVXcmFwcGVyPlxuICAgICAgICAgIDxUaXRsZT5USVRMRTwvVGl0bGU+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25Eb3dufSBzaXplPVwiM3hcIiAvPlxuICAgICAgICA8L1RpdGxlV3JhcHBlcj5cbiAgICAgICl9XG4gICAgICA8VHJhbnNpdGlvbiBpbj17c2hvd0Ryb3BEb3dufSB0aW1lb3V0PXs1MDB9IG1vdW50T25FbnRlciB1bm1vdW50T25FeGl0PlxuICAgICAgICB7KHN0YXRlKSA9PiAoXG4gICAgICAgICAgPE5hdiBzdGF0ZT17c3RhdGV9IG9uQ2xpY2s9e2Ryb3BEb3duVG9nZ2xlckhhbmRsZXJ9PlxuICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgIDxUb29sYmFyTmF2IHN1Ykl0ZW1zPXtzdWJJdGVtc30gc2hvd0Ryb3BEb3duPXtzaG93RHJvcERvd259IC8+XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgICl9XG4gICAgICA8L1RyYW5zaXRpb24+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcblxuLy9uYXZpZ2F0aW9uIGZvciB0aGUgdG9vbGJhclxuY29uc3QgVG9vbGJhck5hdiA9ICh7IHN1Ykl0ZW1zLCBzaG93RHJvcERvd24sIG9uUHJvZHVjdHMgfSkgPT4ge1xuICBjb25zdCBbYWxsb3dCYWNrZ3JvdW5kLCBzZXRBbGxvd0JhY2tncm91bmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYmFja2dyb3VuZFRvZ2dsZWRMaW5rLCBzZXRCYWNrZ3JvdW5kVG9nZ2xlZExpbmtdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vdGhpcyBwaWVjZSBvZiBzdGF0ZSBpcyB0byBhdm9pZCB0aGUgYmFja2dyb3VuZCBhcHBlYXJhbmNlIHdoaWxlIHRoZSBtZW51IG9wZW5zXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRBbGxvd0JhY2tncm91bmQodHJ1ZSk7XG4gICAgfSwgWzU1MF0pO1xuICAgIC8vcmVtb3ZlIGJhY2tncm91bmQgaW1hZ2VzIG9uY2UgdGhlIHRvb2xiYXIgc2xpZGVzIHVwIGZvciBVSSBwdXJwb3NlcyBhcyB0aGUgbW91c2Ugd2lsbCBob3ZlciB0aG9zZSBsaW5rc1xuICAgIC8vdGhlIGNsZWFudXAgb24gdW5tb3VudCBkb2VzIG5vdCB0cmlnZ2VyIG9uIHRpbWUsIHNvIEkgbW92ZWQgaXQgYmVmb3JlIHRoZSBjb21wb25lbnQgdW5tb3VudHMgaGVyZVxuICAgIGlmICghc2hvd0Ryb3BEb3duKSB7XG4gICAgICBzZXRBbGxvd0JhY2tncm91bmQoZmFsc2UpO1xuICAgIH1cbiAgfSwgW3Nob3dEcm9wRG93bl0pO1xuXG4gIGNvbnN0IG5hdkl0ZW1Nb3VzZUVudGVyID0gKHBhdGgpID0+IHtcbiAgICBzZXRCYWNrZ3JvdW5kVG9nZ2xlZExpbmsocGF0aCk7XG4gIH07XG5cbiAgY29uc3QgbmF2SXRlbU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0QmFja2dyb3VuZFRvZ2dsZWRMaW5rKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBuYXZJdGVtcyA9IHN1Ykl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l0ZW0uaWR9PlxuICAgICAgPE5hdkl0ZW1cbiAgICAgICAgXG4gICAgICAgIHBhdGg9e2l0ZW0ucGF0aH1cbiAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgIG1vdXNlRW50ZXJlZD17KCkgPT4gbmF2SXRlbU1vdXNlRW50ZXIoaXRlbS5iYWNrZ3JvdW5kKX1cbiAgICAgICAgbW91c2VMZWZ0PXtuYXZJdGVtTW91c2VMZWF2ZX1cbiAgICAgIC8+XG4gICAgICB7d2luZG93LmlubmVyV2lkdGggPiA2NDAgJiYgKFxuICAgICAgICA8QmFja2dyb3VuZFxuICAgICAgICAgIHNob3dCYWNrZ3JvdW5kPXtiYWNrZ3JvdW5kVG9nZ2xlZExpbmsgPT09IGl0ZW0uYmFja2dyb3VuZH1cbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U9e2FsbG93QmFja2dyb3VuZCAmJiBpdGVtLmJhY2tncm91bmR9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge25hdkl0ZW1zfVxuICAgICAgPFNvY2lhbE1lZGlhIGljb25TaXplPVwiNHhcIiBwYXR0ZXJuPVwibWVudVwiIC8+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbi8vbWFpbiBuYXZJdGVtXG5jb25zdCBOYXZJdGVtID0gKHsgcGF0aCwgbGFiZWwsIG1vdXNlRW50ZXJlZCwgbW91c2VMZWZ0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TWVudUl0ZW0gb25Nb3VzZUxlYXZlPXttb3VzZUxlZnR9IG9uTW91c2VFbnRlcj17bW91c2VFbnRlcmVkfT5cbiAgICAgIDxMaW5rIGhyZWY9e3BhdGh9PlxuICAgICAgICA8YT57bGFiZWx9PC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvTWVudUl0ZW0+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./UI/Dropdown/Dropdown.js\n");

/***/ })

})