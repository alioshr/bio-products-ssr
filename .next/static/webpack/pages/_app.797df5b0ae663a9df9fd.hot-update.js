webpackHotUpdate_N_E("pages/_app",{

/***/ "./UI/Dropdown/Dropdown.js":
/*!*********************************!*\
  !*** ./UI/Dropdown/Dropdown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/.pnpm/registry.npmjs.org/react-transition-group/4.4.1_react-dom@16.13.1/node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_react-dom@16.13.1/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SocialMedia/SocialMedia */ \"./UI/SocialMedia/SocialMedia.js\");\n/* harmony import */ var _StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../StyledComponents/dropdownItems */ \"./StyledComponents/dropdownItems.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/UI/Dropdown/Dropdown.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n //dropdown\n\nvar Dropdown = function Dropdown(_ref) {\n  _s();\n\n  var dropDownTitle = _ref.dropDownTitle,\n      subCategoryHandler = _ref.subCategoryHandler,\n      dropDownTogglerHandler = _ref.dropDownTogglerHandler,\n      onProducts = _ref.onProducts,\n      showDropDown = _ref.showDropDown,\n      subItems = _ref.subItems;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      scrollY = _useState[0],\n      setScrollY = _useState[1];\n\n  Object(_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__[\"useScrollPosition\"])(function (_ref2) {\n    var currPos = _ref2.currPos;\n    setScrollY(currPos.y);\n  }, [showDropDown], false, false, 0); //this is to avoid top scrolling when entering/leaving the dropdown\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var bodyStyle = document.body.style;\n    bodyStyle.position = \"\";\n    bodyStyle.top = \"\";\n    bodyStyle.left = \"\";\n    bodyStyle.right = \"\";\n    window.scrollTo(scrollY, scrollY * -1);\n\n    if (showDropDown) {\n      bodyStyle.position = \"fixed\";\n      bodyStyle.top = \"\".concat(scrollY, \"px\");\n      bodyStyle.left = \"0\";\n      bodyStyle.right = \"0\";\n    }\n  }, [showDropDown]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, onProducts && __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"TitleWrapper\"], {\n    onClick: dropDownTogglerHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, \"TITLE\"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faChevronDown\"],\n    size: \"3x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  })), __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"Transition\"], {\n    \"in\": showDropDown,\n    timeout: 500,\n    mountOnEnter: true,\n    unmountOnExit: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, function (state) {\n    return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"Nav\"], {\n      state: state,\n      onClick: dropDownTogglerHandler,\n      usedOnProducts: onProducts,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 11\n      }\n    }, __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"List\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 13\n      }\n    }, __jsx(ToolbarNav, {\n      onProducts: onProducts,\n      subItems: subItems,\n      showDropDown: showDropDown,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 15\n      }\n    })));\n  }));\n};\n\n_s(Dropdown, \"w0YrMI37twwCUgEUTVkLPlMY9hc=\", false, function () {\n  return [_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__[\"useScrollPosition\"]];\n});\n\n_c = Dropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown); //navigation for the toolbar\n\nvar ToolbarNav = function ToolbarNav(_ref3) {\n  _s2();\n\n  var subItems = _ref3.subItems,\n      showDropDown = _ref3.showDropDown,\n      onProducts = _ref3.onProducts;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      allowBackground = _useState2[0],\n      setAllowBackground = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      backgroundToggledLink = _useState3[0],\n      setBackgroundToggledLink = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    //this piece of state is to avoid the background appearance while the menu opens\n    setTimeout(function () {\n      setAllowBackground(true);\n    }, [550]); //remove background images once the toolbar slides up for UI purposes as the mouse will hover those links\n    //the cleanup on unmount does not trigger on time, so I moved it before the component unmounts here\n\n    if (!showDropDown) {\n      setAllowBackground(false);\n    }\n  }, [showDropDown]);\n\n  var navItemMouseEnter = function navItemMouseEnter(path) {\n    setBackgroundToggledLink(path);\n  };\n\n  var navItemMouseLeave = function navItemMouseLeave() {\n    setBackgroundToggledLink(false);\n  };\n\n  var navItems = subItems.map(function (item) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n      key: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 5\n      }\n    }, __jsx(NavItem, {\n      onProducts: onProducts,\n      path: item.path,\n      label: item.label,\n      mouseEntered: function mouseEntered() {\n        return navItemMouseEnter(item.background);\n      },\n      mouseLeft: navItemMouseLeave,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 7\n      }\n    }), window.innerWidth > 640 && __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"Background\"], {\n      showBackground: backgroundToggledLink === item.background,\n      backgroundImage: allowBackground && item.background,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }\n    }));\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 5\n    }\n  }, navItems, __jsx(_SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    iconSize: \"4x\",\n    pattern: \"menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 7\n    }\n  }));\n}; //main navItem\n\n\n_s2(ToolbarNav, \"F12Hel/1UT4nAhzKIMk+Dy3O7hw=\");\n\n_c2 = ToolbarNav;\n\nvar NavItem = function NavItem(_ref4) {\n  var path = _ref4.path,\n      label = _ref4.label,\n      mouseEntered = _ref4.mouseEntered,\n      mouseLeft = _ref4.mouseLeft,\n      onProducts = _ref4.onProducts,\n      chooseProduct = _ref4.chooseProduct;\n\n  var item = __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: path,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 7\n    }\n  }, label));\n\n  onProducts ? item = __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 24\n    }\n  }, label) : null;\n  return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"MenuItem\"], {\n    onMouseLeave: mouseLeft,\n    onMouseEnter: mouseEntered,\n    onClick: chooseProduct,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 5\n    }\n  }, item);\n};\n\n_c3 = NavItem;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Dropdown\");\n$RefreshReg$(_c2, \"ToolbarNav\");\n$RefreshReg$(_c3, \"NavItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvRHJvcGRvd24vRHJvcGRvd24uanM/MTdjNCJdLCJuYW1lcyI6WyJEcm9wZG93biIsImRyb3BEb3duVGl0bGUiLCJzdWJDYXRlZ29yeUhhbmRsZXIiLCJkcm9wRG93blRvZ2dsZXJIYW5kbGVyIiwib25Qcm9kdWN0cyIsInNob3dEcm9wRG93biIsInN1Ykl0ZW1zIiwidXNlU3RhdGUiLCJzY3JvbGxZIiwic2V0U2Nyb2xsWSIsInVzZVNjcm9sbFBvc2l0aW9uIiwiY3VyclBvcyIsInkiLCJ1c2VFZmZlY3QiLCJib2R5U3R5bGUiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJmYUNoZXZyb25Eb3duIiwic3RhdGUiLCJUb29sYmFyTmF2IiwiYWxsb3dCYWNrZ3JvdW5kIiwic2V0QWxsb3dCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFRvZ2dsZWRMaW5rIiwic2V0QmFja2dyb3VuZFRvZ2dsZWRMaW5rIiwic2V0VGltZW91dCIsIm5hdkl0ZW1Nb3VzZUVudGVyIiwicGF0aCIsIm5hdkl0ZW1Nb3VzZUxlYXZlIiwibmF2SXRlbXMiLCJtYXAiLCJpdGVtIiwiaWQiLCJsYWJlbCIsImJhY2tncm91bmQiLCJpbm5lcldpZHRoIiwiTmF2SXRlbSIsIm1vdXNlRW50ZXJlZCIsIm1vdXNlTGVmdCIsImNob29zZVByb2R1Y3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FVQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQU9YO0FBQUE7O0FBQUEsTUFOSkMsYUFNSSxRQU5KQSxhQU1JO0FBQUEsTUFMSkMsa0JBS0ksUUFMSkEsa0JBS0k7QUFBQSxNQUpKQyxzQkFJSSxRQUpKQSxzQkFJSTtBQUFBLE1BSEpDLFVBR0ksUUFISkEsVUFHSTtBQUFBLE1B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LGdCQUFZLEVBQUVELFlBRmhCO0FBR0UsV0FBTyxFQUFFRSxhQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR1IsSUFMSCxDQURGO0FBU0QsQ0F2QkQ7O01BQU1LLE8iLCJmaWxlIjoiLi9VSS9Ecm9wZG93bi9Ecm9wZG93bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2Nyb2xsUG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vSG9va3MvdXNlU2Nyb2xsUG9zaXRpb25cIjtcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFDaGV2cm9uRG93biB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBTb2NpYWxNZWRpYSBmcm9tIFwiLi4vU29jaWFsTWVkaWEvU29jaWFsTWVkaWFcIjtcbmltcG9ydCB7XG4gIFRpdGxlV3JhcHBlcixcbiAgVGl0bGUsXG4gIE5hdixcbiAgTGlzdCxcbiAgTWVudUl0ZW0sXG4gIEJhY2tncm91bmQsXG59IGZyb20gXCIuLi8uLi9TdHlsZWRDb21wb25lbnRzL2Ryb3Bkb3duSXRlbXNcIjtcblxuLy9kcm9wZG93blxuY29uc3QgRHJvcGRvd24gPSAoe1xuICBkcm9wRG93blRpdGxlLFxuICBzdWJDYXRlZ29yeUhhbmRsZXIsXG4gIGRyb3BEb3duVG9nZ2xlckhhbmRsZXIsXG4gIG9uUHJvZHVjdHMsXG4gIHNob3dEcm9wRG93bixcbiAgc3ViSXRlbXMsXG59KSA9PiB7XG4gIGNvbnN0IFtzY3JvbGxZLCBzZXRTY3JvbGxZXSA9IHVzZVN0YXRlKDApO1xuICB1c2VTY3JvbGxQb3NpdGlvbihcbiAgICAoeyBjdXJyUG9zIH0pID0+IHtcbiAgICAgIHNldFNjcm9sbFkoY3VyclBvcy55KTtcbiAgICB9LFxuICAgIFtzaG93RHJvcERvd25dLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIDBcbiAgKTtcbiAgLy90aGlzIGlzIHRvIGF2b2lkIHRvcCBzY3JvbGxpbmcgd2hlbiBlbnRlcmluZy9sZWF2aW5nIHRoZSBkcm9wZG93blxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XG4gICAgYm9keVN0eWxlLnBvc2l0aW9uID0gXCJcIjtcbiAgICBib2R5U3R5bGUudG9wID0gXCJcIjtcbiAgICBib2R5U3R5bGUubGVmdCA9IFwiXCI7XG4gICAgYm9keVN0eWxlLnJpZ2h0ID0gXCJcIjtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oc2Nyb2xsWSwgc2Nyb2xsWSAqIC0xKTtcbiAgICBpZiAoc2hvd0Ryb3BEb3duKSB7XG4gICAgICBib2R5U3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICBib2R5U3R5bGUudG9wID0gYCR7c2Nyb2xsWX1weGA7XG4gICAgICBib2R5U3R5bGUubGVmdCA9IFwiMFwiO1xuICAgICAgYm9keVN0eWxlLnJpZ2h0ID0gXCIwXCI7XG4gICAgfVxuICB9LCBbc2hvd0Ryb3BEb3duXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7b25Qcm9kdWN0cyAmJiAoXG4gICAgICAgIDxUaXRsZVdyYXBwZXIgb25DbGljaz17ZHJvcERvd25Ub2dnbGVySGFuZGxlcn0+XG4gICAgICAgICAgPFRpdGxlPlRJVExFPC9UaXRsZT5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvbkRvd259IHNpemU9XCIzeFwiIC8+XG4gICAgICAgIDwvVGl0bGVXcmFwcGVyPlxuICAgICAgKX1cbiAgICAgIDxUcmFuc2l0aW9uIGluPXtzaG93RHJvcERvd259IHRpbWVvdXQ9ezUwMH0gbW91bnRPbkVudGVyIHVubW91bnRPbkV4aXQ+XG4gICAgICAgIHsoc3RhdGUpID0+IChcbiAgICAgICAgICA8TmF2IHN0YXRlPXtzdGF0ZX0gb25DbGljaz17ZHJvcERvd25Ub2dnbGVySGFuZGxlcn0gdXNlZE9uUHJvZHVjdHM9e29uUHJvZHVjdHN9PlxuICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgIDxUb29sYmFyTmF2XG4gICAgICAgICAgICAgICAgb25Qcm9kdWN0cz17b25Qcm9kdWN0c31cbiAgICAgICAgICAgICAgICBzdWJJdGVtcz17c3ViSXRlbXN9XG4gICAgICAgICAgICAgICAgc2hvd0Ryb3BEb3duPXtzaG93RHJvcERvd259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgICl9XG4gICAgICA8L1RyYW5zaXRpb24+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcblxuLy9uYXZpZ2F0aW9uIGZvciB0aGUgdG9vbGJhclxuY29uc3QgVG9vbGJhck5hdiA9ICh7IHN1Ykl0ZW1zLCBzaG93RHJvcERvd24sIG9uUHJvZHVjdHMgfSkgPT4ge1xuICBjb25zdCBbYWxsb3dCYWNrZ3JvdW5kLCBzZXRBbGxvd0JhY2tncm91bmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYmFja2dyb3VuZFRvZ2dsZWRMaW5rLCBzZXRCYWNrZ3JvdW5kVG9nZ2xlZExpbmtdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vdGhpcyBwaWVjZSBvZiBzdGF0ZSBpcyB0byBhdm9pZCB0aGUgYmFja2dyb3VuZCBhcHBlYXJhbmNlIHdoaWxlIHRoZSBtZW51IG9wZW5zXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRBbGxvd0JhY2tncm91bmQodHJ1ZSk7XG4gICAgfSwgWzU1MF0pO1xuICAgIC8vcmVtb3ZlIGJhY2tncm91bmQgaW1hZ2VzIG9uY2UgdGhlIHRvb2xiYXIgc2xpZGVzIHVwIGZvciBVSSBwdXJwb3NlcyBhcyB0aGUgbW91c2Ugd2lsbCBob3ZlciB0aG9zZSBsaW5rc1xuICAgIC8vdGhlIGNsZWFudXAgb24gdW5tb3VudCBkb2VzIG5vdCB0cmlnZ2VyIG9uIHRpbWUsIHNvIEkgbW92ZWQgaXQgYmVmb3JlIHRoZSBjb21wb25lbnQgdW5tb3VudHMgaGVyZVxuICAgIGlmICghc2hvd0Ryb3BEb3duKSB7XG4gICAgICBzZXRBbGxvd0JhY2tncm91bmQoZmFsc2UpO1xuICAgIH1cbiAgfSwgW3Nob3dEcm9wRG93bl0pO1xuXG4gIGNvbnN0IG5hdkl0ZW1Nb3VzZUVudGVyID0gKHBhdGgpID0+IHtcbiAgICBzZXRCYWNrZ3JvdW5kVG9nZ2xlZExpbmsocGF0aCk7XG4gIH07XG5cbiAgY29uc3QgbmF2SXRlbU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0QmFja2dyb3VuZFRvZ2dsZWRMaW5rKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBuYXZJdGVtcyA9IHN1Ykl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l0ZW0uaWR9PlxuICAgICAgPE5hdkl0ZW1cbiAgICAgICAgb25Qcm9kdWN0cz17b25Qcm9kdWN0c31cbiAgICAgICAgcGF0aD17aXRlbS5wYXRofVxuICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cbiAgICAgICAgbW91c2VFbnRlcmVkPXsoKSA9PiBuYXZJdGVtTW91c2VFbnRlcihpdGVtLmJhY2tncm91bmQpfVxuICAgICAgICBtb3VzZUxlZnQ9e25hdkl0ZW1Nb3VzZUxlYXZlfVxuICAgICAgLz5cbiAgICAgIHt3aW5kb3cuaW5uZXJXaWR0aCA+IDY0MCAmJiAoXG4gICAgICAgIDxCYWNrZ3JvdW5kXG4gICAgICAgICAgc2hvd0JhY2tncm91bmQ9e2JhY2tncm91bmRUb2dnbGVkTGluayA9PT0gaXRlbS5iYWNrZ3JvdW5kfVxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZT17YWxsb3dCYWNrZ3JvdW5kICYmIGl0ZW0uYmFja2dyb3VuZH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7bmF2SXRlbXN9XG4gICAgICA8U29jaWFsTWVkaWEgaWNvblNpemU9XCI0eFwiIHBhdHRlcm49XCJtZW51XCIgLz5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuLy9tYWluIG5hdkl0ZW1cbmNvbnN0IE5hdkl0ZW0gPSAoe1xuICBwYXRoLFxuICBsYWJlbCxcbiAgbW91c2VFbnRlcmVkLFxuICBtb3VzZUxlZnQsXG4gIG9uUHJvZHVjdHMsXG4gIGNob29zZVByb2R1Y3QsXG59KSA9PiB7XG4gIGxldCBpdGVtID0gKFxuICAgIDxMaW5rIGhyZWY9e3BhdGh9PlxuICAgICAgPGE+e2xhYmVsfTwvYT5cbiAgICA8L0xpbms+XG4gICk7XG4gIG9uUHJvZHVjdHMgPyAoaXRlbSA9IDxzcGFuPntsYWJlbH08L3NwYW4+KSA6IG51bGw7XG4gIHJldHVybiAoXG4gICAgPE1lbnVJdGVtXG4gICAgICBvbk1vdXNlTGVhdmU9e21vdXNlTGVmdH1cbiAgICAgIG9uTW91c2VFbnRlcj17bW91c2VFbnRlcmVkfVxuICAgICAgb25DbGljaz17Y2hvb3NlUHJvZHVjdH1cbiAgICA+XG4gICAgICB7aXRlbX1cbiAgICA8L01lbnVJdGVtPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./UI/Dropdown/Dropdown.js\n");

/***/ })

})