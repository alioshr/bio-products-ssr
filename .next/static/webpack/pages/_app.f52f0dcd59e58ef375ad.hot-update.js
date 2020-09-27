webpackHotUpdate_N_E("pages/_app",{

/***/ "./UI/Dropdown/Dropdown.js":
/*!*********************************!*\
  !*** ./UI/Dropdown/Dropdown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Hooks_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Hooks/useLockBodyScroll */ \"./Hooks/useLockBodyScroll.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/.pnpm/registry.npmjs.org/react-transition-group/4.4.1_react-dom@16.13.1/node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_react-dom@16.13.1/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SocialMedia/SocialMedia */ \"./UI/SocialMedia/SocialMedia.js\");\n/* harmony import */ var _StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../StyledComponents/dropdownItems */ \"./StyledComponents/dropdownItems.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/UI/Dropdown/Dropdown.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n //dropdown\n\nvar Dropdown = function Dropdown(_ref) {\n  _s();\n\n  var dropDownTitle = _ref.dropDownTitle,\n      subCategoryHandler = _ref.subCategoryHandler,\n      dropDownTogglerHandler = _ref.dropDownTogglerHandler,\n      onProducts = _ref.onProducts,\n      showDropDown = _ref.showDropDown,\n      subItems = _ref.subItems;\n  Object(_Hooks_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_1__[\"useLockBodyScroll\"])(showDropDown);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, onProducts && __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"TitleWrapper\"], {\n    onClick: dropDownTogglerHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, \"TITLE\"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faChevronDown\"],\n    size: \"3x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  })), __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"Transition\"], {\n    \"in\": showDropDown,\n    timeout: 500,\n    mountOnEnter: true,\n    unmountOnExit: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, function (state) {\n    return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"Nav\"], {\n      state: state,\n      onClick: dropDownTogglerHandler,\n      usedOnProducts: onProducts,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }\n    }, __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"List\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 13\n      }\n    }, __jsx(NavItems, {\n      onProducts: onProducts,\n      subItems: subItems,\n      showDropDown: showDropDown,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 15\n      }\n    })));\n  }));\n};\n\n_s(Dropdown, \"p0sc7++PgnewiuyOOBduX5RapR4=\", false, function () {\n  return [_Hooks_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_1__[\"useLockBodyScroll\"]];\n});\n\n_c = Dropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown); //navigation for the toolbar\n\nvar NavItems = function NavItems(_ref2) {\n  _s2();\n\n  var subItems = _ref2.subItems,\n      showDropDown = _ref2.showDropDown,\n      onProducts = _ref2.onProducts;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      allowBackground = _useState[0],\n      setAllowBackground = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      backgroundToggledLink = _useState2[0],\n      setBackgroundToggledLink = _useState2[1]; //avoid the background appearance while the menu opens\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setTimeout(function () {\n      setAllowBackground(true);\n    }, [550]); //remove background images once the toolbar slides up for UI purposes as the mouse will hover those links\n    //the cleanup on unmount does not trigger on time, so I moved it before the component unmounts here\n\n    if (!showDropDown) {\n      setAllowBackground(false);\n    }\n  }, [showDropDown]);\n\n  var navItemMouseEnter = function navItemMouseEnter(path) {\n    setBackgroundToggledLink(path);\n  };\n\n  var navItemMouseLeave = function navItemMouseLeave() {\n    setBackgroundToggledLink(false);\n  };\n\n  var navItems = subItems.map(function (item) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n      key: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 5\n      }\n    }, __jsx(NavItem, {\n      onProducts: onProducts,\n      path: item.path,\n      label: item.label,\n      mouseEntered: function mouseEntered() {\n        return navItemMouseEnter(item.background);\n      },\n      mouseLeft: navItemMouseLeave,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 7\n      }\n    }), window.innerWidth > 640 && __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"Background\"], {\n      showBackground: backgroundToggledLink === item.background,\n      backgroundImage: allowBackground && item.background,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }\n    }));\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 5\n    }\n  }, navItems, __jsx(_SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    iconSize: \"4x\",\n    pattern: \"menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }));\n}; //main navItem\n\n\n_s2(NavItems, \"F12Hel/1UT4nAhzKIMk+Dy3O7hw=\");\n\n_c2 = NavItems;\n\nvar NavItem = function NavItem(_ref3) {\n  var path = _ref3.path,\n      label = _ref3.label,\n      mouseEntered = _ref3.mouseEntered,\n      mouseLeft = _ref3.mouseLeft,\n      onProducts = _ref3.onProducts,\n      chooseProduct = _ref3.chooseProduct;\n\n  var item = __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: path,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 7\n    }\n  }, label));\n\n  onProducts ? item = __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 24\n    }\n  }, label) : null;\n  return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"MenuItem\"], {\n    onMouseLeave: mouseLeft,\n    onMouseEnter: mouseEntered,\n    onClick: chooseProduct,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 5\n    }\n  }, item);\n};\n\n_c3 = NavItem;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Dropdown\");\n$RefreshReg$(_c2, \"NavItems\");\n$RefreshReg$(_c3, \"NavItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvRHJvcGRvd24vRHJvcGRvd24uanM/MTdjNCJdLCJuYW1lcyI6WyJEcm9wZG93biIsImRyb3BEb3duVGl0bGUiLCJzdWJDYXRlZ29yeUhhbmRsZXIiLCJkcm9wRG93blRvZ2dsZXJIYW5kbGVyIiwib25Qcm9kdWN0cyIsInNob3dEcm9wRG93biIsInN1Ykl0ZW1zIiwidXNlTG9ja0JvZHlTY3JvbGwiLCJmYUNoZXZyb25Eb3duIiwic3RhdGUiLCJOYXZJdGVtcyIsInVzZVN0YXRlIiwiYWxsb3dCYWNrZ3JvdW5kIiwic2V0QWxsb3dCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFRvZ2dsZWRMaW5rIiwic2V0QmFja2dyb3VuZFRvZ2dsZWRMaW5rIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsIm5hdkl0ZW1Nb3VzZUVudGVyIiwicGF0aCIsIm5hdkl0ZW1Nb3VzZUxlYXZlIiwibmF2SXRlbXMiLCJtYXAiLCJpdGVtIiwiaWQiLCJsYWJlbCIsImJhY2tncm91bmQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiTmF2SXRlbSIsIm1vdXNlRW50ZXJlZCIsIm1vdXNlTGVmdCIsImNob29zZVByb2R1Y3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FVQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQU9YO0FBQUE7O0FBQUEsTUFOSkMsYUFNSSxRQU5KQSxhQU1JO0FBQUEsTUFMSkMsa0JBS0ksUUFMSkEsa0JBS0k7QUFBQSxNQUpKQyxzQkFJSSxRQUpKQSxzQkFJSTtBQUFBLE1BSEpDLFVBR0ksUUFISkEsVUFHSTtBQUFBLE1BRkpDLFlBRUksUUFGSkEsWUFFSTtBQUFBLE1BREpDLFFBQ0ksUUFESkEsUUFDSTtBQUNKQyxvRkFBaUIsQ0FBQ0YsWUFBRCxDQUFqQjtBQUNBLFNBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUE7QUFBQSxLQUFPRSxLQUFQLENBQVgsR0FBbUMsSUFBN0M7QUFDQSxTQUNFLE1BQUMsd0VBQUQ7QUFDRSxnQkFBWSxFQUFFTSxTQURoQjtBQUVFLGdCQUFZLEVBQUVELFlBRmhCO0FBR0UsV0FBTyxFQUFFRSxhQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR1QsSUFMSCxDQURGO0FBU0QsQ0F2QkQ7O01BQU1NLE8iLCJmaWxlIjoiLi9VSS9Ecm9wZG93bi9Ecm9wZG93bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1c2VMb2NrQm9keVNjcm9sbH0gZnJvbSAnLi4vLi4vSG9va3MvdXNlTG9ja0JvZHlTY3JvbGwnO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUNoZXZyb25Eb3duIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFNvY2lhbE1lZGlhIGZyb20gXCIuLi9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYVwiO1xuaW1wb3J0IHtcbiAgVGl0bGVXcmFwcGVyLFxuICBUaXRsZSxcbiAgTmF2LFxuICBMaXN0LFxuICBNZW51SXRlbSxcbiAgQmFja2dyb3VuZCxcbn0gZnJvbSBcIi4uLy4uL1N0eWxlZENvbXBvbmVudHMvZHJvcGRvd25JdGVtc1wiO1xuXG4vL2Ryb3Bkb3duXG5jb25zdCBEcm9wZG93biA9ICh7XG4gIGRyb3BEb3duVGl0bGUsXG4gIHN1YkNhdGVnb3J5SGFuZGxlcixcbiAgZHJvcERvd25Ub2dnbGVySGFuZGxlcixcbiAgb25Qcm9kdWN0cyxcbiAgc2hvd0Ryb3BEb3duLFxuICBzdWJJdGVtcyxcbn0pID0+IHtcbiAgdXNlTG9ja0JvZHlTY3JvbGwoc2hvd0Ryb3BEb3duKTtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7b25Qcm9kdWN0cyAmJiAoXG4gICAgICAgIDxUaXRsZVdyYXBwZXIgb25DbGljaz17ZHJvcERvd25Ub2dnbGVySGFuZGxlcn0+XG4gICAgICAgICAgPFRpdGxlPlRJVExFPC9UaXRsZT5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvbkRvd259IHNpemU9XCIzeFwiIC8+XG4gICAgICAgIDwvVGl0bGVXcmFwcGVyPlxuICAgICAgKX1cbiAgICAgIDxUcmFuc2l0aW9uIGluPXtzaG93RHJvcERvd259IHRpbWVvdXQ9ezUwMH0gbW91bnRPbkVudGVyIHVubW91bnRPbkV4aXQ+XG4gICAgICAgIHsoc3RhdGUpID0+IChcbiAgICAgICAgICA8TmF2IHN0YXRlPXtzdGF0ZX0gb25DbGljaz17ZHJvcERvd25Ub2dnbGVySGFuZGxlcn0gdXNlZE9uUHJvZHVjdHM9e29uUHJvZHVjdHN9PlxuICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgIDxOYXZJdGVtc1xuICAgICAgICAgICAgICAgIG9uUHJvZHVjdHM9e29uUHJvZHVjdHN9XG4gICAgICAgICAgICAgICAgc3ViSXRlbXM9e3N1Ykl0ZW1zfVxuICAgICAgICAgICAgICAgIHNob3dEcm9wRG93bj17c2hvd0Ryb3BEb3dufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICApfVxuICAgICAgPC9UcmFuc2l0aW9uPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG5cbi8vbmF2aWdhdGlvbiBmb3IgdGhlIHRvb2xiYXJcbmNvbnN0IE5hdkl0ZW1zID0gKHsgc3ViSXRlbXMsIHNob3dEcm9wRG93biwgb25Qcm9kdWN0cyB9KSA9PiB7XG4gIGNvbnN0IFthbGxvd0JhY2tncm91bmQsIHNldEFsbG93QmFja2dyb3VuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtiYWNrZ3JvdW5kVG9nZ2xlZExpbmssIHNldEJhY2tncm91bmRUb2dnbGVkTGlua10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgICAvL2F2b2lkIHRoZSBiYWNrZ3JvdW5kIGFwcGVhcmFuY2Ugd2hpbGUgdGhlIG1lbnUgb3BlbnNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEFsbG93QmFja2dyb3VuZCh0cnVlKTtcbiAgICB9LCBbNTUwXSk7XG4gICAgLy9yZW1vdmUgYmFja2dyb3VuZCBpbWFnZXMgb25jZSB0aGUgdG9vbGJhciBzbGlkZXMgdXAgZm9yIFVJIHB1cnBvc2VzIGFzIHRoZSBtb3VzZSB3aWxsIGhvdmVyIHRob3NlIGxpbmtzXG4gICAgLy90aGUgY2xlYW51cCBvbiB1bm1vdW50IGRvZXMgbm90IHRyaWdnZXIgb24gdGltZSwgc28gSSBtb3ZlZCBpdCBiZWZvcmUgdGhlIGNvbXBvbmVudCB1bm1vdW50cyBoZXJlXG4gICAgaWYgKCFzaG93RHJvcERvd24pIHtcbiAgICAgIHNldEFsbG93QmFja2dyb3VuZChmYWxzZSk7XG4gICAgfVxuICB9LCBbc2hvd0Ryb3BEb3duXSk7XG5cbiAgY29uc3QgbmF2SXRlbU1vdXNlRW50ZXIgPSAocGF0aCkgPT4ge1xuICAgIHNldEJhY2tncm91bmRUb2dnbGVkTGluayhwYXRoKTtcbiAgfTtcblxuICBjb25zdCBuYXZJdGVtTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBzZXRCYWNrZ3JvdW5kVG9nZ2xlZExpbmsoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IG5hdkl0ZW1zID0gc3ViSXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgPFJlYWN0LkZyYWdtZW50IGtleT17aXRlbS5pZH0+XG4gICAgICA8TmF2SXRlbVxuICAgICAgICBvblByb2R1Y3RzPXtvblByb2R1Y3RzfVxuICAgICAgICBwYXRoPXtpdGVtLnBhdGh9XG4gICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICBtb3VzZUVudGVyZWQ9eygpID0+IG5hdkl0ZW1Nb3VzZUVudGVyKGl0ZW0uYmFja2dyb3VuZCl9XG4gICAgICAgIG1vdXNlTGVmdD17bmF2SXRlbU1vdXNlTGVhdmV9XG4gICAgICAvPlxuICAgICAge3dpbmRvdy5pbm5lcldpZHRoID4gNjQwICYmIChcbiAgICAgICAgPEJhY2tncm91bmRcbiAgICAgICAgICBzaG93QmFja2dyb3VuZD17YmFja2dyb3VuZFRvZ2dsZWRMaW5rID09PSBpdGVtLmJhY2tncm91bmR9XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlPXthbGxvd0JhY2tncm91bmQgJiYgaXRlbS5iYWNrZ3JvdW5kfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtuYXZJdGVtc31cbiAgICAgIDxTb2NpYWxNZWRpYSBpY29uU2l6ZT1cIjR4XCIgcGF0dGVybj1cIm1lbnVcIiAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG4vL21haW4gbmF2SXRlbVxuY29uc3QgTmF2SXRlbSA9ICh7XG4gIHBhdGgsXG4gIGxhYmVsLFxuICBtb3VzZUVudGVyZWQsXG4gIG1vdXNlTGVmdCxcbiAgb25Qcm9kdWN0cyxcbiAgY2hvb3NlUHJvZHVjdCxcbn0pID0+IHtcbiAgbGV0IGl0ZW0gPSAoXG4gICAgPExpbmsgaHJlZj17cGF0aH0+XG4gICAgICA8YT57bGFiZWx9PC9hPlxuICAgIDwvTGluaz5cbiAgKTtcbiAgb25Qcm9kdWN0cyA/IChpdGVtID0gPHNwYW4+e2xhYmVsfTwvc3Bhbj4pIDogbnVsbDtcbiAgcmV0dXJuIChcbiAgICA8TWVudUl0ZW1cbiAgICAgIG9uTW91c2VMZWF2ZT17bW91c2VMZWZ0fVxuICAgICAgb25Nb3VzZUVudGVyPXttb3VzZUVudGVyZWR9XG4gICAgICBvbkNsaWNrPXtjaG9vc2VQcm9kdWN0fVxuICAgID5cbiAgICAgIHtpdGVtfVxuICAgIDwvTWVudUl0ZW0+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./UI/Dropdown/Dropdown.js\n");

/***/ })

})