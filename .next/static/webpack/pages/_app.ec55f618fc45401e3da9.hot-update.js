webpackHotUpdate_N_E("pages/_app",{

/***/ "./UI/Dropdown/Dropdown.js":
/*!*********************************!*\
  !*** ./UI/Dropdown/Dropdown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/.pnpm/registry.npmjs.org/react-transition-group/4.4.1_react-dom@16.13.1/node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_b64c5b009f74cdcf964dbb949a1d9ffa/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../StyledComponents/dropdownItems */ \"./StyledComponents/dropdownItems.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/UI/Dropdown/Dropdown.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar NavItem = function NavItem(_ref) {\n  var path = _ref.path,\n      label = _ref.label;\n  return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"MenuItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: path,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, label)));\n};\n\n_c = NavItem;\n\nvar Dropdown = function Dropdown(_ref2) {\n  _s();\n\n  var dropDownTitle = _ref2.dropDownTitle,\n      subCategoryHandler = _ref2.subCategoryHandler,\n      useOnToolbar = _ref2.useOnToolbar,\n      dropDownTogglerHandler = _ref2.dropDownTogglerHandler,\n      showDropDown = _ref2.showDropDown,\n      subItems = _ref2.subItems;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      backgroundActive = _useState[0],\n      setBackgroundActive = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      navItemBackground = _useState2[0],\n      setNavItemBackground = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      scrollY = _useState3[0],\n      setScrollY = _useState3[1];\n\n  Object(_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_4__[\"useScrollPosition\"])(function (_ref3) {\n    var currPos = _ref3.currPos;\n    setScrollY(currPos.y);\n  }, [showDropDown], false, false, 0); //this is to avoid top scrolling when entering/leaving the dropdown\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    document.body.style.position = \"\";\n    document.body.style.top = \"\";\n    window.scrollTo(scrollY, scrollY * -1);\n    setNavItemBackground(false);\n\n    if (showDropDown) {\n      setTimeout(function () {\n        setNavItemBackground(true);\n      }, 500);\n      document.body.style.position = \"fixed\";\n      document.body.style.top = \"\".concat(scrollY, \"px\");\n    }\n  }, [showDropDown]);\n\n  var navItemsMouseEnter = function navItemsMouseEnter(id) {\n    setBackgroundActive(id);\n  };\n\n  var navItemsMouseLeave = function navItemsMouseLeave() {\n    setBackgroundActive(false);\n  };\n\n  var navItems = subItems.map(function (item) {\n    return __jsx(NavItem, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 5\n      }\n    });\n  });\n  return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"Wrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"List\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Dropdown, \"ZA00rKfQbcFhfdnQZDpx5VmL8qk=\", false, function () {\n  return [_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_4__[\"useScrollPosition\"]];\n});\n\n_c2 = Dropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"NavItem\");\n$RefreshReg$(_c2, \"Dropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvRHJvcGRvd24vRHJvcGRvd24uanM/MTdjNCJdLCJuYW1lcyI6WyJOYXZJdGVtIiwicGF0aCIsImxhYmVsIiwiRHJvcGRvd24iLCJkcm9wRG93blRpdGxlIiwic3ViQ2F0ZWdvcnlIYW5kbGVyIiwidXNlT25Ub29sYmFyIiwiZHJvcERvd25Ub2dnbGVySGFuZGxlciIsInNob3dEcm9wRG93biIsInN1Ykl0ZW1zIiwidXNlU3RhdGUiLCJiYWNrZ3JvdW5kQWN0aXZlIiwic2V0QmFja2dyb3VuZEFjdGl2ZSIsIm5hdkl0ZW1CYWNrZ3JvdW5kIiwic2V0TmF2SXRlbUJhY2tncm91bmQiLCJzY3JvbGxZIiwic2V0U2Nyb2xsWSIsInVzZVNjcm9sbFBvc2l0aW9uIiwiY3VyclBvcyIsInkiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwid2luZG93Iiwic2Nyb2xsVG8iLCJzZXRUaW1lb3V0IiwibmF2SXRlbXNNb3VzZUVudGVyIiwiaWQiLCJuYXZJdGVtc01vdXNlTGVhdmUiLCJuYXZJdGVtcyIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQXFCO0FBQUEsTUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNuQyxTQUNFLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVELElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUMsS0FBSixDQURGLENBREYsQ0FERjtBQU9ELENBUkQ7O0tBQU1GLE87O0FBVU4sSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsUUFPWDtBQUFBOztBQUFBLE1BTkpDLGFBTUksU0FOSkEsYUFNSTtBQUFBLE1BTEpDLGtCQUtJLFNBTEpBLGtCQUtJO0FBQUEsTUFKSkMsWUFJSSxTQUpKQSxZQUlJO0FBQUEsTUFISkMsc0JBR0ksU0FISkEsc0JBR0k7QUFBQSxNQUZKQyxZQUVJLFNBRkpBLFlBRUk7QUFBQSxNQURKQyxRQUNJLFNBREpBLFFBQ0k7O0FBQUEsa0JBQzRDQyxzREFBUSxDQUFDLEtBQUQsQ0FEcEQ7QUFBQSxNQUNHQyxnQkFESDtBQUFBLE1BQ3FCQyxtQkFEckI7O0FBQUEsbUJBRThDRixzREFBUSxDQUFDLElBQUQsQ0FGdEQ7QUFBQSxNQUVHRyxpQkFGSDtBQUFBLE1BRXNCQyxvQkFGdEI7O0FBQUEsbUJBRzBCSixzREFBUSxDQUFDLENBQUQsQ0FIbEM7QUFBQSxNQUdHSyxPQUhIO0FBQUEsTUFHWUMsVUFIWjs7QUFLSkMsb0ZBQWlCLENBQ2YsaUJBQWlCO0FBQUEsUUFBZEMsT0FBYyxTQUFkQSxPQUFjO0FBQ2ZGLGNBQVUsQ0FBQ0UsT0FBTyxDQUFDQyxDQUFULENBQVY7QUFDRCxHQUhjLEVBSWYsQ0FBQ1gsWUFBRCxDQUplLEVBS2YsS0FMZSxFQU1mLEtBTmUsRUFPZixDQVBlLENBQWpCLENBTEksQ0FlSjs7QUFDQVkseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFlBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CQyxRQUFwQixHQUErQixFQUEvQjtBQUNBSCxZQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkUsR0FBcEIsR0FBMEIsRUFBMUI7QUFDQUMsVUFBTSxDQUFDQyxRQUFQLENBQWdCWixPQUFoQixFQUF5QkEsT0FBTyxHQUFHLENBQUMsQ0FBcEM7QUFDQUQsd0JBQW9CLENBQUMsS0FBRCxDQUFwQjs7QUFDQSxRQUFJTixZQUFKLEVBQWtCO0FBQ2hCb0IsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2ZkLDRCQUFvQixDQUFDLElBQUQsQ0FBcEI7QUFDRCxPQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0FPLGNBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CQyxRQUFwQixHQUErQixPQUEvQjtBQUNBSCxjQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkUsR0FBcEIsYUFBNkJWLE9BQTdCO0FBQ0Q7QUFDRixHQVpRLEVBWU4sQ0FBQ1AsWUFBRCxDQVpNLENBQVQ7O0FBY0EsTUFBTXFCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsRUFBRCxFQUFRO0FBQ2pDbEIsdUJBQW1CLENBQUNrQixFQUFELENBQW5CO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0JuQix1QkFBbUIsQ0FBQyxLQUFELENBQW5CO0FBQ0QsR0FGRDs7QUFJQSxNQUFNb0IsUUFBUSxHQUFHdkIsUUFBUSxDQUFDd0IsR0FBVCxDQUFhLFVBQUFDLElBQUk7QUFBQSxXQUNoQyxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURnQztBQUFBLEdBQWpCLENBQWpCO0FBSUEsU0FDRSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBT0QsQ0F4REQ7O0dBQU0vQixRO1VBWUpjLDBFOzs7TUFaSWQsUTtBQXlEU0EsdUVBQWYiLCJmaWxlIjoiLi9VSS9Ecm9wZG93bi9Ecm9wZG93bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUNoZXZyb25Eb3duIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgdXNlU2Nyb2xsUG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vSG9va3MvdXNlU2Nyb2xsUG9zaXRpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IFdyYXBwZXIsIExpc3QsIE1lbnVJdGVtIH0gZnJvbSBcIi4uLy4uL1N0eWxlZENvbXBvbmVudHMvZHJvcGRvd25JdGVtc1wiO1xuXG5jb25zdCBOYXZJdGVtID0gKHsgcGF0aCwgbGFiZWwgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNZW51SXRlbT5cbiAgICAgIDxMaW5rIGhyZWY9e3BhdGh9PlxuICAgICAgICA8YT57bGFiZWx9PC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvTWVudUl0ZW0+XG4gICk7XG59O1xuXG5jb25zdCBEcm9wZG93biA9ICh7XG4gIGRyb3BEb3duVGl0bGUsXG4gIHN1YkNhdGVnb3J5SGFuZGxlcixcbiAgdXNlT25Ub29sYmFyLFxuICBkcm9wRG93blRvZ2dsZXJIYW5kbGVyLFxuICBzaG93RHJvcERvd24sXG4gIHN1Ykl0ZW1zLFxufSkgPT4ge1xuICBjb25zdCBbYmFja2dyb3VuZEFjdGl2ZSwgc2V0QmFja2dyb3VuZEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtuYXZJdGVtQmFja2dyb3VuZCwgc2V0TmF2SXRlbUJhY2tncm91bmRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzY3JvbGxZLCBzZXRTY3JvbGxZXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZVNjcm9sbFBvc2l0aW9uKFxuICAgICh7IGN1cnJQb3MgfSkgPT4ge1xuICAgICAgc2V0U2Nyb2xsWShjdXJyUG9zLnkpO1xuICAgIH0sXG4gICAgW3Nob3dEcm9wRG93bl0sXG4gICAgZmFsc2UsXG4gICAgZmFsc2UsXG4gICAgMFxuICApO1xuXG4gIC8vdGhpcyBpcyB0byBhdm9pZCB0b3Agc2Nyb2xsaW5nIHdoZW4gZW50ZXJpbmcvbGVhdmluZyB0aGUgZHJvcGRvd25cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gXCJcIjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9IFwiXCI7XG4gICAgd2luZG93LnNjcm9sbFRvKHNjcm9sbFksIHNjcm9sbFkgKiAtMSk7XG4gICAgc2V0TmF2SXRlbUJhY2tncm91bmQoZmFsc2UpO1xuICAgIGlmIChzaG93RHJvcERvd24pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXROYXZJdGVtQmFja2dyb3VuZCh0cnVlKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSBgJHtzY3JvbGxZfXB4YDtcbiAgICB9XG4gIH0sIFtzaG93RHJvcERvd25dKTtcblxuICBjb25zdCBuYXZJdGVtc01vdXNlRW50ZXIgPSAoaWQpID0+IHtcbiAgICBzZXRCYWNrZ3JvdW5kQWN0aXZlKGlkKTtcbiAgfTtcblxuICBjb25zdCBuYXZJdGVtc01vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0QmFja2dyb3VuZEFjdGl2ZShmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgbmF2SXRlbXMgPSBzdWJJdGVtcy5tYXAoaXRlbSA9PiAoXG4gICAgPE5hdkl0ZW0+PC9OYXZJdGVtPlxuICApKVxuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8TGlzdD5cblxuICAgICAgPC9MaXN0PlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./UI/Dropdown/Dropdown.js\n");

/***/ })

})