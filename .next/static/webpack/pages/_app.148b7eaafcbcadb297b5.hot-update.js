webpackHotUpdate_N_E("pages/_app",{

/***/ "./UI/Dropdown/Dropdown.js":
/*!*********************************!*\
  !*** ./UI/Dropdown/Dropdown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/.pnpm/registry.npmjs.org/react-transition-group/4.4.1_react-dom@16.13.1/node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_react-dom@16.13.1/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../StyledComponents/dropdownItems */ \"./StyledComponents/dropdownItems.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/UI/Dropdown/Dropdown.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar NavItem = function NavItem(_ref) {\n  var path = _ref.path,\n      label = _ref.label,\n      mouseEntered = _ref.mouseEntered,\n      mouseLeft = _ref.mouseLeft;\n  return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"MenuItem\"], {\n    onMouseLeave: mouseLeft,\n    onMouseEnter: mouseEntered,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: path,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, label)));\n};\n\n_c = NavItem;\n\nvar ToolbarNav = function ToolbarNav(_ref2) {\n  _s();\n\n  var subItems = _ref2.subItems,\n      cleanupResult = _ref2.cleanupResult;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      allowBackground = _useState[0],\n      setAllowBackground = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      backgroundToggledLink = _useState2[0],\n      setBackgroundToggledLink = _useState2[1];\n\n  console.log(allowBackground);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    //this piece of state is to avoid the background appearance while the menu opens\n    setTimeout(function () {\n      setAllowBackground(true);\n    }, [550]);\n    return function () {\n      setAllowBackground(false);\n      cleanupResult(allowBackground);\n    }; //cleanUp on unmount\n  }, []);\n\n  var navItemMouseEnter = function navItemMouseEnter(path) {\n    setBackgroundToggledLink(path);\n  };\n\n  var navItemMouseLeave = function navItemMouseLeave() {\n    setBackgroundToggledLink(false);\n  };\n\n  var navItems = subItems.map(function (item) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n      key: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 5\n      }\n    }, __jsx(NavItem, {\n      path: item.path,\n      label: item.label,\n      mouseEntered: function mouseEntered() {\n        return navItemMouseEnter(item.background);\n      },\n      mouseLeft: navItemMouseLeave,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 7\n      }\n    }), __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"Background\"], {\n      showBackground: backgroundToggledLink === item.background,\n      backgroundImage: allowBackground && item.background,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 7\n      }\n    }));\n  });\n  return navItems;\n};\n\n_s(ToolbarNav, \"F12Hel/1UT4nAhzKIMk+Dy3O7hw=\");\n\n_c2 = ToolbarNav;\n\nvar Dropdown = function Dropdown(_ref3) {\n  _s2();\n\n  var dropDownTitle = _ref3.dropDownTitle,\n      subCategoryHandler = _ref3.subCategoryHandler,\n      useOnToolbar = _ref3.useOnToolbar,\n      dropDownTogglerHandler = _ref3.dropDownTogglerHandler,\n      showDropDown = _ref3.showDropDown,\n      subItems = _ref3.subItems;\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      scrollY = _useState3[0],\n      setScrollY = _useState3[1];\n\n  Object(_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__[\"useScrollPosition\"])(function (_ref4) {\n    var currPos = _ref4.currPos;\n    setScrollY(currPos.y);\n  }, [showDropDown], false, false, 0); //this is to avoid top scrolling when entering/leaving the dropdown\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    document.body.style.position = \"\";\n    document.body.style.top = \"\";\n    window.scrollTo(scrollY, scrollY * -1);\n\n    if (showDropDown) {\n      document.body.style.position = \"fixed\";\n      document.body.style.top = \"\".concat(scrollY, \"px\");\n    }\n  }, [showDropDown]);\n  var navItemsMemoized = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    return __jsx(ToolbarNav, {\n      cleanupResult: test,\n      subItems: subItems,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 42\n      }\n    });\n  }, [showDropDown]);\n  return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"Transition\"], {\n    \"in\": showDropDown,\n    timeout: 500,\n    mountOnEnter: true,\n    unmountOnExit: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 5\n    }\n  }, function (state) {\n    return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"Wrapper\"], {\n      state: state,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }\n    }, __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"List\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 11\n      }\n    }, navItemsMemoized));\n  });\n};\n\n_s2(Dropdown, \"JYm2GzpTsDUkxuSaszrQnioE5/w=\", false, function () {\n  return [_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__[\"useScrollPosition\"]];\n});\n\n_c3 = Dropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"NavItem\");\n$RefreshReg$(_c2, \"ToolbarNav\");\n$RefreshReg$(_c3, \"Dropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvRHJvcGRvd24vRHJvcGRvd24uanM/MTdjNCJdLCJuYW1lcyI6WyJOYXZJdGVtIiwicGF0aCIsImxhYmVsIiwibW91c2VFbnRlcmVkIiwibW91c2VMZWZ0IiwiVG9vbGJhck5hdiIsInN1Ykl0ZW1zIiwiY2xlYW51cFJlc3VsdCIsInVzZVN0YXRlIiwiYWxsb3dCYWNrZ3JvdW5kIiwic2V0QWxsb3dCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFRvZ2dsZWRMaW5rIiwic2V0QmFja2dyb3VuZFRvZ2dsZWRMaW5rIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJuYXZJdGVtTW91c2VFbnRlciIsIm5hdkl0ZW1Nb3VzZUxlYXZlIiwibmF2SXRlbXMiLCJtYXAiLCJpdGVtIiwiaWQiLCJiYWNrZ3JvdW5kIiwiRHJvcGRvd24iLCJkcm9wRG93blRpdGxlIiwic3ViQ2F0ZWdvcnlIYW5kbGVyIiwidXNlT25Ub29sYmFyIiwiZHJvcERvd25Ub2dnbGVySGFuZGxlciIsInNob3dEcm9wRG93biIsInNjcm9sbFkiLCJzZXRTY3JvbGxZIiwidXNlU2Nyb2xsUG9zaXRpb24iLCJjdXJyUG9zIiwieSIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsIm5hdkl0ZW1zTWVtb2l6ZWQiLCJ1c2VNZW1vIiwidGVzdCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBOEM7QUFBQSxNQUEzQ0MsSUFBMkMsUUFBM0NBLElBQTJDO0FBQUEsTUFBckNDLEtBQXFDLFFBQXJDQSxLQUFxQztBQUFBLE1BQTlCQyxZQUE4QixRQUE5QkEsWUFBOEI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQzVELFNB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O0FBQUEsV0FDQyxNQUFDLHVFQUFEO0FBQVMsV0FBSyxFQUFFQSxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dILGdCQURILENBREYsQ0FERDtBQUFBLEdBREgsQ0FERjtBQVdELENBekNEOztJQUFNbEIsUTtVQVVKUSwwRTs7O01BVklSLFE7QUEwQ1NBLHVFQUFmIiwiZmlsZSI6Ii4vVUkvRHJvcGRvd24vRHJvcGRvd24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2Nyb2xsUG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vSG9va3MvdXNlU2Nyb2xsUG9zaXRpb25cIjtcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFDaGV2cm9uRG93biB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7XG4gIFdyYXBwZXIsXG4gIExpc3QsXG4gIE1lbnVJdGVtLFxuICBCYWNrZ3JvdW5kLFxufSBmcm9tIFwiLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9kcm9wZG93bkl0ZW1zXCI7XG5cbmNvbnN0IE5hdkl0ZW0gPSAoeyBwYXRoLCBsYWJlbCwgbW91c2VFbnRlcmVkLCBtb3VzZUxlZnQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNZW51SXRlbSBvbk1vdXNlTGVhdmU9e21vdXNlTGVmdH0gb25Nb3VzZUVudGVyPXttb3VzZUVudGVyZWR9PlxuICAgICAgPExpbmsgaHJlZj17cGF0aH0+XG4gICAgICAgIDxhPntsYWJlbH08L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9NZW51SXRlbT5cbiAgKTtcbn07XG5cbmNvbnN0IFRvb2xiYXJOYXYgPSAoeyBzdWJJdGVtcywgY2xlYW51cFJlc3VsdCB9KSA9PiB7XG4gIGNvbnN0IFthbGxvd0JhY2tncm91bmQsIHNldEFsbG93QmFja2dyb3VuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtiYWNrZ3JvdW5kVG9nZ2xlZExpbmssIHNldEJhY2tncm91bmRUb2dnbGVkTGlua10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnNvbGUubG9nKGFsbG93QmFja2dyb3VuZClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvL3RoaXMgcGllY2Ugb2Ygc3RhdGUgaXMgdG8gYXZvaWQgdGhlIGJhY2tncm91bmQgYXBwZWFyYW5jZSB3aGlsZSB0aGUgbWVudSBvcGVuc1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0QWxsb3dCYWNrZ3JvdW5kKHRydWUpO1xuICAgIH0sIFs1NTBdKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc2V0QWxsb3dCYWNrZ3JvdW5kKGZhbHNlKVxuICAgICAgY2xlYW51cFJlc3VsdChhbGxvd0JhY2tncm91bmQpXG4gICAgfSAvL2NsZWFuVXAgb24gdW5tb3VudFxuICB9LCBbXSk7XG5cbiAgY29uc3QgbmF2SXRlbU1vdXNlRW50ZXIgPSAocGF0aCkgPT4ge1xuICAgIHNldEJhY2tncm91bmRUb2dnbGVkTGluayhwYXRoKTtcbiAgfTtcblxuICBjb25zdCBuYXZJdGVtTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBzZXRCYWNrZ3JvdW5kVG9nZ2xlZExpbmsoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IG5hdkl0ZW1zID0gc3ViSXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgPFJlYWN0LkZyYWdtZW50IGtleT17aXRlbS5pZH0+XG4gICAgICA8TmF2SXRlbVxuICAgICAgICBwYXRoPXtpdGVtLnBhdGh9XG4gICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICBtb3VzZUVudGVyZWQ9eygpID0+IG5hdkl0ZW1Nb3VzZUVudGVyKGl0ZW0uYmFja2dyb3VuZCl9XG4gICAgICAgIG1vdXNlTGVmdD17bmF2SXRlbU1vdXNlTGVhdmV9XG4gICAgICAvPlxuICAgICAgPEJhY2tncm91bmRcbiAgICAgICAgc2hvd0JhY2tncm91bmQ9e2JhY2tncm91bmRUb2dnbGVkTGluayA9PT0gaXRlbS5iYWNrZ3JvdW5kfVxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U9e2FsbG93QmFja2dyb3VuZCAmJiBpdGVtLmJhY2tncm91bmR9XG4gICAgICAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICkpO1xuICByZXR1cm4gbmF2SXRlbXM7XG59O1xuXG5jb25zdCBEcm9wZG93biA9ICh7XG4gIGRyb3BEb3duVGl0bGUsXG4gIHN1YkNhdGVnb3J5SGFuZGxlcixcbiAgdXNlT25Ub29sYmFyLFxuICBkcm9wRG93blRvZ2dsZXJIYW5kbGVyLFxuICBzaG93RHJvcERvd24sXG4gIHN1Ykl0ZW1zLFxufSkgPT4ge1xuICBjb25zdCBbc2Nyb2xsWSwgc2V0U2Nyb2xsWV0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VTY3JvbGxQb3NpdGlvbihcbiAgICAoeyBjdXJyUG9zIH0pID0+IHtcbiAgICAgIHNldFNjcm9sbFkoY3VyclBvcy55KTtcbiAgICB9LFxuICAgIFtzaG93RHJvcERvd25dLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIDBcbiAgKTtcbiAgLy90aGlzIGlzIHRvIGF2b2lkIHRvcCBzY3JvbGxpbmcgd2hlbiBlbnRlcmluZy9sZWF2aW5nIHRoZSBkcm9wZG93blxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSBcIlwiO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gXCJcIjtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oc2Nyb2xsWSwgc2Nyb2xsWSAqIC0xKTtcbiAgICBpZiAoc2hvd0Ryb3BEb3duKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSBgJHtzY3JvbGxZfXB4YDtcbiAgICB9XG4gIH0sIFtzaG93RHJvcERvd25dKTtcbiAgY29uc3QgbmF2SXRlbXNNZW1vaXplZCA9IHVzZU1lbW8oKCkgPT4gPFRvb2xiYXJOYXYgY2xlYW51cFJlc3VsdD17dGVzdH0gIHN1Ykl0ZW1zPXtzdWJJdGVtc30gLz4sIFtzaG93RHJvcERvd25dKVxuICByZXR1cm4gKFxuICAgIDxUcmFuc2l0aW9uIGluPXtzaG93RHJvcERvd259IHRpbWVvdXQ9ezUwMH0gbW91bnRPbkVudGVyIHVubW91bnRPbkV4aXQ+XG4gICAgICB7KHN0YXRlKSA9PiAoXG4gICAgICAgIDxXcmFwcGVyIHN0YXRlPXtzdGF0ZX0+XG4gICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICB7bmF2SXRlbXNNZW1vaXplZH1cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICl9XG4gICAgPC9UcmFuc2l0aW9uPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./UI/Dropdown/Dropdown.js\n");

/***/ })

})