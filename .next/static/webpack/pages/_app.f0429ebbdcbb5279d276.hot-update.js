webpackHotUpdate_N_E("pages/_app",{

/***/ "./UI/Dropdown/Dropdown.js":
/*!*********************************!*\
  !*** ./UI/Dropdown/Dropdown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/.pnpm/registry.npmjs.org/react-transition-group/4.4.1_react-dom@16.13.1/node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_react-dom@16.13.1/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SocialMedia/SocialMedia */ \"./UI/SocialMedia/SocialMedia.js\");\n/* harmony import */ var _StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../StyledComponents/dropdownItems */ \"./StyledComponents/dropdownItems.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/UI/Dropdown/Dropdown.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n //dropdown\n\nvar Dropdown = function Dropdown(_ref) {\n  _s();\n\n  var dropDownTitle = _ref.dropDownTitle,\n      subCategoryHandler = _ref.subCategoryHandler,\n      dropDownTogglerHandler = _ref.dropDownTogglerHandler,\n      useOnToolbar = _ref.useOnToolbar,\n      showDropDown = _ref.showDropDown,\n      subItems = _ref.subItems;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      scrollY = _useState[0],\n      setScrollY = _useState[1];\n\n  Object(_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__[\"useScrollPosition\"])(function (_ref2) {\n    var currPos = _ref2.currPos;\n    setScrollY(currPos.y);\n  }, [showDropDown], false, false, 0); //this is to avoid top scrolling when entering/leaving the dropdown\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    document.body.style.position = \"\";\n    document.body.style.top = \"\";\n    document.body.style.left = \"\";\n    document.body.style.right = \"\";\n    window.scrollTo(scrollY, scrollY * -1);\n\n    if (showDropDown) {\n      document.body.style.position = \"fixed\";\n      document.body.style.top = \"\".concat(scrollY, \"px\");\n      document.body.style.left = \"0\";\n      document.body.style.right = \"0\";\n    }\n  }, [showDropDown]);\n  return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"Transition\"], {\n    \"in\": showDropDown,\n    timeout: 500,\n    mountOnEnter: true,\n    unmountOnExit: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }, function (state) {\n    return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"Nav\"], {\n      state: state,\n      onClick: dropDownTogglerHandler,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }\n    }, __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"List\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 11\n      }\n    }, useOnToolbar && __jsx(ToolbarNav, {\n      subItems: subItems,\n      showDropDown: showDropDown,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 28\n      }\n    })));\n  });\n};\n\n_s(Dropdown, \"w0YrMI37twwCUgEUTVkLPlMY9hc=\", false, function () {\n  return [_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__[\"useScrollPosition\"]];\n});\n\n_c = Dropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown); //main navItem\n\nvar NavItem = function NavItem(_ref3) {\n  var path = _ref3.path,\n      label = _ref3.label,\n      mouseEntered = _ref3.mouseEntered,\n      mouseLeft = _ref3.mouseLeft;\n  return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"MenuItem\"], {\n    onMouseLeave: mouseLeft,\n    onMouseEnter: mouseEntered,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: path,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, label)));\n}; //navigation for the toolbar\n\n\n_c2 = NavItem;\n\nvar ToolbarNav = function ToolbarNav(_ref4) {\n  _s2();\n\n  var subItems = _ref4.subItems,\n      showDropDown = _ref4.showDropDown;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      allowBackground = _useState2[0],\n      setAllowBackground = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      backgroundToggledLink = _useState3[0],\n      setBackgroundToggledLink = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    //this piece of state is to avoid the background appearance while the menu opens\n    setTimeout(function () {\n      setAllowBackground(true);\n    }, [550]); //remove background images once the toolbar slides up for UI purposes as the mouse will hover those links\n    //the cleanup on unmount does not trigger on time, so I moved it before the component unmounts here\n\n    if (!showDropDown) {\n      setAllowBackground(false);\n    }\n  }, [showDropDown]);\n\n  var navItemMouseEnter = function navItemMouseEnter(path) {\n    setBackgroundToggledLink(path);\n  };\n\n  var navItemMouseLeave = function navItemMouseLeave() {\n    setBackgroundToggledLink(false);\n  };\n\n  var navItems = subItems.map(function (item) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n      key: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 5\n      }\n    }, __jsx(NavItem, {\n      path: item.path,\n      label: item.label,\n      mouseEntered: function mouseEntered() {\n        return navItemMouseEnter(item.background);\n      },\n      mouseLeft: navItemMouseLeave,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 7\n      }\n    }), window.innerWidth >= 640 && __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_7__[\"Background\"], {\n      showBackground: backgroundToggledLink === item.background,\n      backgroundImage: allowBackground && item.background,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }\n    }));\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 5\n    }\n  }, navItems, __jsx(_SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    iconSize: \"4x\",\n    colorPattern: \"menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s2(ToolbarNav, \"F12Hel/1UT4nAhzKIMk+Dy3O7hw=\");\n\n_c3 = ToolbarNav;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Dropdown\");\n$RefreshReg$(_c2, \"NavItem\");\n$RefreshReg$(_c3, \"ToolbarNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvRHJvcGRvd24vRHJvcGRvd24uanM/MTdjNCJdLCJuYW1lcyI6WyJEcm9wZG93biIsImRyb3BEb3duVGl0bGUiLCJzdWJDYXRlZ29yeUhhbmRsZXIiLCJkcm9wRG93blRvZ2dsZXJIYW5kbGVyIiwidXNlT25Ub29sYmFyIiwic2hvd0Ryb3BEb3duIiwic3ViSXRlbXMiLCJ1c2VTdGF0ZSIsInNjcm9sbFkiLCJzZXRTY3JvbGxZIiwidXNlU2Nyb2xsUG9zaXRpb24iLCJjdXJyUG9zIiwieSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInN0YXRlIiwiTmF2SXRlbSIsInBhdGgiLCJsYWJlbCIsIm1vdXNlRW50ZXJlZCIsIm1vdXNlTGVmdCIsIlRvb2xiYXJOYXYiLCJhbGxvd0JhY2tncm91bmQiLCJzZXRBbGxvd0JhY2tncm91bmQiLCJiYWNrZ3JvdW5kVG9nZ2xlZExpbmsiLCJzZXRCYWNrZ3JvdW5kVG9nZ2xlZExpbmsiLCJzZXRUaW1lb3V0IiwibmF2SXRlbU1vdXNlRW50ZXIiLCJuYXZJdGVtTW91c2VMZWF2ZSIsIm5hdkl0ZW1zIiwibWFwIiwiaXRlbSIsImlkIiwiYmFja2dyb3VuZCIsImlubmVyV2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FRQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQU9YO0FBQUE7O0FBQUEsTUFOSkMsYUFNSSxRQU5KQSxhQU1JO0FBQUEsTUFMSkMsa0JBS0ksUUFMSkEsa0JBS0k7QUFBQSxNQUpKQyxzQkFJSSxRQUpKQSxzQkFJSTtBQUFBLE1BSEpDLFlBR0ksUUFISkEsWUFHSTtBQUFBLE1BRkpDLFlBRUksUUFGSkEsWUFFSTtBQUFBLE1BREpDLFFBQ0ksUUFESkEs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QVksRUFBRTtBQUFBLGVBQU1TLGlCQUFpQixDQUFDSSxJQUFJLENBQUNFLFVBQU4sQ0FBdkI7QUFBQSxPQUhoQjtBQUlFLGVBQVMsRUFBRUwsaUJBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBT0dmLE1BQU0sQ0FBQ3FCLFVBQVAsSUFBcUIsR0FBckIsSUFDQyxNQUFDLDBFQUFEO0FBQ0Esb0JBQWMsRUFBRVYscUJBQXFCLEtBQUtPLElBQUksQ0FBQ0UsVUFEL0M7QUFFQSxxQkFBZSxFQUFFWCxlQUFlLElBQUlTLElBQUksQ0FBQ0UsVUFGekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJKLENBRDRCO0FBQUEsR0FBYixDQUFqQjtBQWlCQSxTQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixRQURILEVBRUUsTUFBQyxnRUFBRDtBQUFhLFlBQVEsRUFBQyxJQUF0QjtBQUEyQixnQkFBWSxFQUFDLE1BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQsQ0E5Q0Q7O0lBQU1SLFU7O01BQUFBLFUiLCJmaWxlIjoiLi9VSS9Ecm9wZG93bi9Ecm9wZG93bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2Nyb2xsUG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vSG9va3MvdXNlU2Nyb2xsUG9zaXRpb25cIjtcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFDaGV2cm9uRG93biB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBTb2NpYWxNZWRpYSBmcm9tICcuLi9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYSc7XG5pbXBvcnQge1xuICBOYXYsXG4gIExpc3QsXG4gIE1lbnVJdGVtLFxuICBCYWNrZ3JvdW5kLFxufSBmcm9tIFwiLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9kcm9wZG93bkl0ZW1zXCI7XG5cbi8vZHJvcGRvd25cbmNvbnN0IERyb3Bkb3duID0gKHtcbiAgZHJvcERvd25UaXRsZSxcbiAgc3ViQ2F0ZWdvcnlIYW5kbGVyLFxuICBkcm9wRG93blRvZ2dsZXJIYW5kbGVyLFxuICB1c2VPblRvb2xiYXIsXG4gIHNob3dEcm9wRG93bixcbiAgc3ViSXRlbXMsXG59KSA9PiB7XG4gIGNvbnN0IFtzY3JvbGxZLCBzZXRTY3JvbGxZXSA9IHVzZVN0YXRlKDApO1xuICB1c2VTY3JvbGxQb3NpdGlvbihcbiAgICAoeyBjdXJyUG9zIH0pID0+IHtcbiAgICAgIHNldFNjcm9sbFkoY3VyclBvcy55KTtcbiAgICB9LFxuICAgIFtzaG93RHJvcERvd25dLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIDBcbiAgKTtcbiAgLy90aGlzIGlzIHRvIGF2b2lkIHRvcCBzY3JvbGxpbmcgd2hlbiBlbnRlcmluZy9sZWF2aW5nIHRoZSBkcm9wZG93blxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSBcIlwiO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gXCJcIjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmxlZnQgPSBcIlwiO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucmlnaHQgPSBcIlwiO1xuICAgIHdpbmRvdy5zY3JvbGxUbyhzY3JvbGxZLCBzY3JvbGxZICogLTEpO1xuICAgIGlmIChzaG93RHJvcERvd24pIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9IGAke3Njcm9sbFl9cHhgO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5sZWZ0ID0gXCIwXCI7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnJpZ2h0ID0gXCIwXCI7XG4gICAgfVxuICB9LCBbc2hvd0Ryb3BEb3duXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VHJhbnNpdGlvbiBpbj17c2hvd0Ryb3BEb3dufSB0aW1lb3V0PXs1MDB9IG1vdW50T25FbnRlciB1bm1vdW50T25FeGl0PlxuICAgICAgeyhzdGF0ZSkgPT4gKFxuICAgICAgICA8TmF2IHN0YXRlPXtzdGF0ZX0gb25DbGljaz17ZHJvcERvd25Ub2dnbGVySGFuZGxlcn0+XG4gICAgICAgICAgPExpc3Q+XG4gICAgICAgICAge3VzZU9uVG9vbGJhciAmJiA8VG9vbGJhck5hdiBzdWJJdGVtcz17c3ViSXRlbXN9IHNob3dEcm9wRG93bj17c2hvd0Ryb3BEb3dufS8+fVxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgPC9OYXY+XG4gICAgICApfVxuICAgIDwvVHJhbnNpdGlvbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcblxuLy9tYWluIG5hdkl0ZW1cbmNvbnN0IE5hdkl0ZW0gPSAoeyBwYXRoLCBsYWJlbCwgbW91c2VFbnRlcmVkLCBtb3VzZUxlZnQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNZW51SXRlbSBvbk1vdXNlTGVhdmU9e21vdXNlTGVmdH0gb25Nb3VzZUVudGVyPXttb3VzZUVudGVyZWR9PlxuICAgICAgPExpbmsgaHJlZj17cGF0aH0+XG4gICAgICAgIDxhPntsYWJlbH08L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9NZW51SXRlbT5cbiAgKTtcbn07XG5cbi8vbmF2aWdhdGlvbiBmb3IgdGhlIHRvb2xiYXJcbmNvbnN0IFRvb2xiYXJOYXYgPSAoeyBzdWJJdGVtcywgc2hvd0Ryb3BEb3duIH0pID0+IHtcbiAgY29uc3QgW2FsbG93QmFja2dyb3VuZCwgc2V0QWxsb3dCYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2JhY2tncm91bmRUb2dnbGVkTGluaywgc2V0QmFja2dyb3VuZFRvZ2dsZWRMaW5rXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvL3RoaXMgcGllY2Ugb2Ygc3RhdGUgaXMgdG8gYXZvaWQgdGhlIGJhY2tncm91bmQgYXBwZWFyYW5jZSB3aGlsZSB0aGUgbWVudSBvcGVuc1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0QWxsb3dCYWNrZ3JvdW5kKHRydWUpO1xuICAgIH0sIFs1NTBdKTtcbiAgICAvL3JlbW92ZSBiYWNrZ3JvdW5kIGltYWdlcyBvbmNlIHRoZSB0b29sYmFyIHNsaWRlcyB1cCBmb3IgVUkgcHVycG9zZXMgYXMgdGhlIG1vdXNlIHdpbGwgaG92ZXIgdGhvc2UgbGlua3NcbiAgICAvL3RoZSBjbGVhbnVwIG9uIHVubW91bnQgZG9lcyBub3QgdHJpZ2dlciBvbiB0aW1lLCBzbyBJIG1vdmVkIGl0IGJlZm9yZSB0aGUgY29tcG9uZW50IHVubW91bnRzIGhlcmVcbiAgICBpZighc2hvd0Ryb3BEb3duKSB7XG4gICAgICBzZXRBbGxvd0JhY2tncm91bmQoZmFsc2UpXG4gICAgfVxuICB9LCBbc2hvd0Ryb3BEb3duXSk7XG5cbiAgY29uc3QgbmF2SXRlbU1vdXNlRW50ZXIgPSAocGF0aCkgPT4ge1xuICAgIHNldEJhY2tncm91bmRUb2dnbGVkTGluayhwYXRoKTtcbiAgfTtcblxuICBjb25zdCBuYXZJdGVtTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBzZXRCYWNrZ3JvdW5kVG9nZ2xlZExpbmsoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IG5hdkl0ZW1zID0gc3ViSXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgPFJlYWN0LkZyYWdtZW50IGtleT17aXRlbS5pZH0+XG4gICAgICA8TmF2SXRlbVxuICAgICAgICBwYXRoPXtpdGVtLnBhdGh9XG4gICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICBtb3VzZUVudGVyZWQ9eygpID0+IG5hdkl0ZW1Nb3VzZUVudGVyKGl0ZW0uYmFja2dyb3VuZCl9XG4gICAgICAgIG1vdXNlTGVmdD17bmF2SXRlbU1vdXNlTGVhdmV9XG4gICAgICAvPlxuICAgICAge3dpbmRvdy5pbm5lcldpZHRoID49IDY0MCAmJiAoXG4gICAgICAgIDxCYWNrZ3JvdW5kXG4gICAgICAgIHNob3dCYWNrZ3JvdW5kPXtiYWNrZ3JvdW5kVG9nZ2xlZExpbmsgPT09IGl0ZW0uYmFja2dyb3VuZH1cbiAgICAgICAgYmFja2dyb3VuZEltYWdlPXthbGxvd0JhY2tncm91bmQgJiYgaXRlbS5iYWNrZ3JvdW5kfVxuICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7bmF2SXRlbXN9XG4gICAgICA8U29jaWFsTWVkaWEgaWNvblNpemU9XCI0eFwiIGNvbG9yUGF0dGVybj1cIm1lbnVcIi8+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./UI/Dropdown/Dropdown.js\n");

/***/ })

})