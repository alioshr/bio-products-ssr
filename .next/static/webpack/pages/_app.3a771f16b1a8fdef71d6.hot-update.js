webpackHotUpdate_N_E("pages/_app",{

/***/ "./UI/Dropdown/Dropdown.js":
/*!*********************************!*\
  !*** ./UI/Dropdown/Dropdown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/.pnpm/registry.npmjs.org/react-transition-group/4.4.1_react-dom@16.13.1/node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_react-dom@16.13.1/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SocialMedia/SocialMedia */ \"./UI/SocialMedia/SocialMedia.js\");\n/* harmony import */ var _StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../StyledComponents/dropdownItems */ \"./StyledComponents/dropdownItems.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/UI/Dropdown/Dropdown.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n //dropdown\n\nvar Dropdown = function Dropdown(_ref) {\n  _s();\n\n  var dropDownTitle = _ref.dropDownTitle,\n      subCategoryHandler = _ref.subCategoryHandler,\n      dropDownTogglerHandler = _ref.dropDownTogglerHandler,\n      useOnProducts = _ref.useOnProducts,\n      showDropDown = _ref.showDropDown,\n      subItems = _ref.subItems;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      scrollY = _useState[0],\n      setScrollY = _useState[1];\n\n  Object(_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__[\"useScrollPosition\"])(function (_ref2) {\n    var currPos = _ref2.currPos;\n    setScrollY(currPos.y);\n  }, [showDropDown], false, false, 0); //this is to avoid top scrolling when entering/leaving the dropdown\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var bodyStyle = document.body.style;\n    bodyStyle.position = \"\";\n    bodyStyle.top = \"\";\n    bodyStyle.left = \"\";\n    bodyStyle.right = \"\";\n    window.scrollTo(scrollY, scrollY * -1);\n\n    if (showDropDown) {\n      bodyStyle.position = \"fixed\";\n      bodyStyle.top = \"\".concat(scrollY, \"px\");\n      bodyStyle.left = \"0\";\n      bodyStyle.right = \"0\";\n    }\n  }, [showDropDown]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"TitleWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, \"Span\")), __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"Transition\"], {\n    \"in\": showDropDown,\n    timeout: 500,\n    mountOnEnter: true,\n    unmountOnExit: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, function (state) {\n    return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"Nav\"], {\n      state: state,\n      onClick: dropDownTogglerHandler,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }\n    }, __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"List\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 11\n      }\n    }, __jsx(ToolbarNav, {\n      subItems: subItems,\n      showDropDown: showDropDown,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 12\n      }\n    })));\n  }));\n};\n\n_s(Dropdown, \"w0YrMI37twwCUgEUTVkLPlMY9hc=\", false, function () {\n  return [_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__[\"useScrollPosition\"]];\n});\n\n_c = Dropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown); //navigation for the toolbar\n\nvar ToolbarNav = function ToolbarNav(_ref3) {\n  _s2();\n\n  var subItems = _ref3.subItems,\n      showDropDown = _ref3.showDropDown;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      allowBackground = _useState2[0],\n      setAllowBackground = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      backgroundToggledLink = _useState3[0],\n      setBackgroundToggledLink = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    //this piece of state is to avoid the background appearance while the menu opens\n    setTimeout(function () {\n      setAllowBackground(true);\n    }, [550]); //remove background images once the toolbar slides up for UI purposes as the mouse will hover those links\n    //the cleanup on unmount does not trigger on time, so I moved it before the component unmounts here\n\n    if (!showDropDown) {\n      setAllowBackground(false);\n    }\n  }, [showDropDown]);\n\n  var navItemMouseEnter = function navItemMouseEnter(path) {\n    setBackgroundToggledLink(path);\n  };\n\n  var navItemMouseLeave = function navItemMouseLeave() {\n    setBackgroundToggledLink(false);\n  };\n\n  var navItems = subItems.map(function (item) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n      key: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 5\n      }\n    }, __jsx(NavItem, {\n      path: item.path,\n      label: item.label,\n      mouseEntered: function mouseEntered() {\n        return navItemMouseEnter(item.background);\n      },\n      mouseLeft: navItemMouseLeave,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 7\n      }\n    }), window.innerWidth > 640 && __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"Background\"], {\n      showBackground: backgroundToggledLink === item.background,\n      backgroundImage: allowBackground && item.background,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 9\n      }\n    }));\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 5\n    }\n  }, navItems, __jsx(_SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    iconSize: \"4x\",\n    pattern: \"menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }\n  }));\n}; //main navItem\n\n\n_s2(ToolbarNav, \"F12Hel/1UT4nAhzKIMk+Dy3O7hw=\");\n\n_c2 = ToolbarNav;\n\nvar NavItem = function NavItem(_ref4) {\n  var path = _ref4.path,\n      label = _ref4.label,\n      mouseEntered = _ref4.mouseEntered,\n      mouseLeft = _ref4.mouseLeft;\n  return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"MenuItem\"], {\n    onMouseLeave: mouseLeft,\n    onMouseEnter: mouseEntered,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: path,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 9\n    }\n  }, label)));\n};\n\n_c3 = NavItem;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Dropdown\");\n$RefreshReg$(_c2, \"ToolbarNav\");\n$RefreshReg$(_c3, \"NavItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvRHJvcGRvd24vRHJvcGRvd24uanM/MTdjNCJdLCJuYW1lcyI6WyJEcm9wZG93biIsImRyb3BEb3duVGl0bGUiLCJzdWJDYXRlZ29yeUhhbmRsZXIiLCJkcm9wRG93blRvZ2dsZXJIYW5kbGVyIiwidXNlT25Qcm9kdWN0cyIsInNob3dEcm9wRG93biIsInN1Ykl0ZW1zIiwidXNlU3RhdGUiLCJzY3JvbGxZIiwic2V0U2Nyb2xsWSIsInVzZVNjcm9sbFBvc2l0aW9uIiwiY3VyclBvcyIsInkiLCJ1c2VFZmZlY3QiLCJib2R5U3R5bGUiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJzdGF0ZSIsIlRvb2xiYXJOYXYiLCJhbGxvd0JhY2tncm91bmQiLCJzZXRBbGxvd0JhY2tncm91bmQiLCJiYWNrZ3JvdW5kVG9nZ2xlZExpbmsiLCJzZXRCYWNrZ3JvdW5kVG9nZ2xlZExpbmsiLCJzZXRUaW1lb3V0IiwibmF2SXRlbU1vdXNlRW50ZXIiLCJwYXRoIiwibmF2SXRlbU1vdXNlTGVhdmUiLCJuYXZJdGVtcyIsIm1hcCIsIml0ZW0iLCJpZCIsImxhYmVsIiwiYmFja2dyb3VuZCIsImlubmVyV2lkdGgiLCJOYXZJdGVtIiwibW91c2VFbnRlcmVkIiwibW91c2VMZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBVUE7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FPWDtBQUFBOztBQUFBLE1BTkpDLGFBTUksUUFOSkEsYUFNSTtBQUFBLE1BTEpDLGtCQUtJLFFBTEpBLGtCQUtJO0FBQUEsTUFKSkMsc0JBSUksUUFKSkEsc0JBSUk7QUFBQSxNQUhKQyxhQUdJLFFBSEpBLGFBR0k7QUFBQSxNQUZKQyxZQUVJLFFBRkpBLFlBRUk7QUFBQSxNQURK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RSxNQUFDLGdFQUFEO0FBQWEsWUFBUSxFQUFDLElBQXRCO0FBQTJCLFdBQU8sRUFBQyxNQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1ELENBOUNELEMsQ0FnREE7OztJQWhETVQsVTs7TUFBQUEsVTs7QUFpRE4sSUFBTWdCLE9BQU8sR0FBRyxTQUFWQSxPQUFVLFFBQThDO0FBQUEsTUFBM0NULElBQTJDLFNBQTNDQSxJQUEyQztBQUFBLE1BQXJDTSxLQUFxQyxTQUFyQ0EsS0FBcUM7QUFBQSxNQUE5QkksWUFBOEIsU0FBOUJBLFlBQThCO0FBQUEsTUFBaEJDLFNBQWdCLFNBQWhCQSxTQUFnQjtBQUM1RCxTQUNFLE1BQUMsd0VBQUQ7QUFBVSxnQkFBWSxFQUFFQSxTQUF4QjtBQUFtQyxnQkFBWSxFQUFFRCxZQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRVYsSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJTSxLQUFKLENBREYsQ0FERixDQURGO0FBT0QsQ0FSRDs7TUFBTUcsTyIsImZpbGUiOiIuL1VJL0Ryb3Bkb3duL0Ryb3Bkb3duLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTY3JvbGxQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9Ib29rcy91c2VTY3JvbGxQb3NpdGlvblwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUNoZXZyb25Eb3duIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFNvY2lhbE1lZGlhIGZyb20gJy4uL1NvY2lhbE1lZGlhL1NvY2lhbE1lZGlhJztcbmltcG9ydCB7XG4gIFRpdGxlV3JhcHBlcixcbiAgVGl0bGUsXG4gIE5hdixcbiAgTGlzdCxcbiAgTWVudUl0ZW0sXG4gIEJhY2tncm91bmQsXG59IGZyb20gXCIuLi8uLi9TdHlsZWRDb21wb25lbnRzL2Ryb3Bkb3duSXRlbXNcIjtcblxuLy9kcm9wZG93blxuY29uc3QgRHJvcGRvd24gPSAoe1xuICBkcm9wRG93blRpdGxlLFxuICBzdWJDYXRlZ29yeUhhbmRsZXIsXG4gIGRyb3BEb3duVG9nZ2xlckhhbmRsZXIsXG4gIHVzZU9uUHJvZHVjdHMsXG4gIHNob3dEcm9wRG93bixcbiAgc3ViSXRlbXMsXG59KSA9PiB7XG4gIGNvbnN0IFtzY3JvbGxZLCBzZXRTY3JvbGxZXSA9IHVzZVN0YXRlKDApO1xuICB1c2VTY3JvbGxQb3NpdGlvbihcbiAgICAoeyBjdXJyUG9zIH0pID0+IHtcbiAgICAgIHNldFNjcm9sbFkoY3VyclBvcy55KTtcbiAgICB9LFxuICAgIFtzaG93RHJvcERvd25dLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIDBcbiAgKTtcbiAgLy90aGlzIGlzIHRvIGF2b2lkIHRvcCBzY3JvbGxpbmcgd2hlbiBlbnRlcmluZy9sZWF2aW5nIHRoZSBkcm9wZG93blxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XG4gICAgYm9keVN0eWxlLnBvc2l0aW9uID0gXCJcIjtcbiAgICBib2R5U3R5bGUudG9wID0gXCJcIjtcbiAgICBib2R5U3R5bGUubGVmdCA9IFwiXCI7XG4gICAgYm9keVN0eWxlLnJpZ2h0ID0gXCJcIjtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oc2Nyb2xsWSwgc2Nyb2xsWSAqIC0xKTtcbiAgICBpZiAoc2hvd0Ryb3BEb3duKSB7XG4gICAgICBib2R5U3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICBib2R5U3R5bGUudG9wID0gYCR7c2Nyb2xsWX1weGA7XG4gICAgICBib2R5U3R5bGUubGVmdCA9IFwiMFwiO1xuICAgICAgYm9keVN0eWxlLnJpZ2h0ID0gXCIwXCI7XG4gICAgfVxuICB9LCBbc2hvd0Ryb3BEb3duXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8VGl0bGVXcmFwcGVyPlxuICAgICAgICA8VGl0bGU+U3BhbjwvVGl0bGU+XG4gICAgICA8L1RpdGxlV3JhcHBlcj5cbiAgICAgIDxUcmFuc2l0aW9uIGluPXtzaG93RHJvcERvd259IHRpbWVvdXQ9ezUwMH0gbW91bnRPbkVudGVyIHVubW91bnRPbkV4aXQ+XG4gICAgICB7KHN0YXRlKSA9PiAoXG4gICAgICAgIDxOYXYgc3RhdGU9e3N0YXRlfSBvbkNsaWNrPXtkcm9wRG93blRvZ2dsZXJIYW5kbGVyfT5cbiAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgPFRvb2xiYXJOYXYgc3ViSXRlbXM9e3N1Ykl0ZW1zfSBzaG93RHJvcERvd249e3Nob3dEcm9wRG93bn0vPlxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgPC9OYXY+XG4gICAgICApfVxuICAgIDwvVHJhbnNpdGlvbj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuXG4vL25hdmlnYXRpb24gZm9yIHRoZSB0b29sYmFyXG5jb25zdCBUb29sYmFyTmF2ID0gKHsgc3ViSXRlbXMsIHNob3dEcm9wRG93biB9KSA9PiB7XG4gIGNvbnN0IFthbGxvd0JhY2tncm91bmQsIHNldEFsbG93QmFja2dyb3VuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtiYWNrZ3JvdW5kVG9nZ2xlZExpbmssIHNldEJhY2tncm91bmRUb2dnbGVkTGlua10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy90aGlzIHBpZWNlIG9mIHN0YXRlIGlzIHRvIGF2b2lkIHRoZSBiYWNrZ3JvdW5kIGFwcGVhcmFuY2Ugd2hpbGUgdGhlIG1lbnUgb3BlbnNcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEFsbG93QmFja2dyb3VuZCh0cnVlKTtcbiAgICB9LCBbNTUwXSk7XG4gICAgLy9yZW1vdmUgYmFja2dyb3VuZCBpbWFnZXMgb25jZSB0aGUgdG9vbGJhciBzbGlkZXMgdXAgZm9yIFVJIHB1cnBvc2VzIGFzIHRoZSBtb3VzZSB3aWxsIGhvdmVyIHRob3NlIGxpbmtzXG4gICAgLy90aGUgY2xlYW51cCBvbiB1bm1vdW50IGRvZXMgbm90IHRyaWdnZXIgb24gdGltZSwgc28gSSBtb3ZlZCBpdCBiZWZvcmUgdGhlIGNvbXBvbmVudCB1bm1vdW50cyBoZXJlXG4gICAgaWYoIXNob3dEcm9wRG93bikge1xuICAgICAgc2V0QWxsb3dCYWNrZ3JvdW5kKGZhbHNlKVxuICAgIH1cbiAgfSwgW3Nob3dEcm9wRG93bl0pO1xuXG4gIGNvbnN0IG5hdkl0ZW1Nb3VzZUVudGVyID0gKHBhdGgpID0+IHtcbiAgICBzZXRCYWNrZ3JvdW5kVG9nZ2xlZExpbmsocGF0aCk7XG4gIH07XG5cbiAgY29uc3QgbmF2SXRlbU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0QmFja2dyb3VuZFRvZ2dsZWRMaW5rKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBuYXZJdGVtcyA9IHN1Ykl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l0ZW0uaWR9PlxuICAgICAgPE5hdkl0ZW1cbiAgICAgICAgcGF0aD17aXRlbS5wYXRofVxuICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cbiAgICAgICAgbW91c2VFbnRlcmVkPXsoKSA9PiBuYXZJdGVtTW91c2VFbnRlcihpdGVtLmJhY2tncm91bmQpfVxuICAgICAgICBtb3VzZUxlZnQ9e25hdkl0ZW1Nb3VzZUxlYXZlfVxuICAgICAgLz5cbiAgICAgIHt3aW5kb3cuaW5uZXJXaWR0aCA+IDY0MCAmJiAoXG4gICAgICAgIDxCYWNrZ3JvdW5kXG4gICAgICAgIHNob3dCYWNrZ3JvdW5kPXtiYWNrZ3JvdW5kVG9nZ2xlZExpbmsgPT09IGl0ZW0uYmFja2dyb3VuZH1cbiAgICAgICAgYmFja2dyb3VuZEltYWdlPXthbGxvd0JhY2tncm91bmQgJiYgaXRlbS5iYWNrZ3JvdW5kfVxuICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7bmF2SXRlbXN9XG4gICAgICA8U29jaWFsTWVkaWEgaWNvblNpemU9XCI0eFwiIHBhdHRlcm49XCJtZW51XCIvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG4vL21haW4gbmF2SXRlbVxuY29uc3QgTmF2SXRlbSA9ICh7IHBhdGgsIGxhYmVsLCBtb3VzZUVudGVyZWQsIG1vdXNlTGVmdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE1lbnVJdGVtIG9uTW91c2VMZWF2ZT17bW91c2VMZWZ0fSBvbk1vdXNlRW50ZXI9e21vdXNlRW50ZXJlZH0+XG4gICAgICA8TGluayBocmVmPXtwYXRofT5cbiAgICAgICAgPGE+e2xhYmVsfTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L01lbnVJdGVtPlxuICApO1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./UI/Dropdown/Dropdown.js\n");

/***/ })

})