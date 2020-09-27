webpackHotUpdate_N_E("pages/_app",{

/***/ "./UI/Dropdown/Dropdown.js":
/*!*********************************!*\
  !*** ./UI/Dropdown/Dropdown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/.pnpm/registry.npmjs.org/react-transition-group/4.4.1_react-dom@16.13.1/node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_react-dom@16.13.1/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../StyledComponents/dropdownItems */ \"./StyledComponents/dropdownItems.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/UI/Dropdown/Dropdown.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n //dropdown\n\nvar Dropdown = function Dropdown(_ref) {\n  _s();\n\n  var dropDownTitle = _ref.dropDownTitle,\n      subCategoryHandler = _ref.subCategoryHandler,\n      dropDownTogglerHandler = _ref.dropDownTogglerHandler,\n      useOnToolbar = _ref.useOnToolbar,\n      showDropDown = _ref.showDropDown,\n      subItems = _ref.subItems,\n      currPos = _ref.currPos;\n  // const [scrollY, setScrollY] = useState(0);\n  // useScrollPosition(\n  //   ({ currPos }) => {\n  //     setScrollY(currPos.y);\n  //   },\n  //   [showDropDown],\n  //   false,\n  //   false,\n  //   0\n  // );\n  //this is to avoid top scrolling when entering/leaving the dropdown\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    document.body.style.position = \"\";\n    document.body.style.top = \"\";\n    window.scrollTo(currPos, currPos * -1);\n\n    if (showDropDown) {\n      document.body.style.position = \"fixed\";\n      document.body.style.top = \"\".concat(scrollY, \"px\");\n    }\n  }, [showDropDown]);\n  return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"Transition\"], {\n    \"in\": showDropDown,\n    timeout: 500,\n    mountOnEnter: true,\n    unmountOnExit: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, function (state) {\n    return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"Nav\"], {\n      state: state,\n      onClick: dropDownTogglerHandler,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }\n    }, __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"List\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 11\n      }\n    }, useOnToolbar && __jsx(ToolbarNav, {\n      subItems: subItems,\n      showDropDown: showDropDown,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 28\n      }\n    })));\n  });\n};\n\n_s(Dropdown, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Dropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown); //main navItem\n\nvar NavItem = function NavItem(_ref2) {\n  var path = _ref2.path,\n      label = _ref2.label,\n      mouseEntered = _ref2.mouseEntered,\n      mouseLeft = _ref2.mouseLeft;\n  return __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"MenuItem\"], {\n    onMouseLeave: mouseLeft,\n    onMouseEnter: mouseEntered,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: path,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, label)));\n}; //navigation for the toolbar\n\n\n_c2 = NavItem;\n\nvar ToolbarNav = function ToolbarNav(_ref3) {\n  _s2();\n\n  var subItems = _ref3.subItems,\n      showDropDown = _ref3.showDropDown;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      allowBackground = _useState[0],\n      setAllowBackground = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      backgroundToggledLink = _useState2[0],\n      setBackgroundToggledLink = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    //this piece of state is to avoid the background appearance while the menu opens\n    setTimeout(function () {\n      setAllowBackground(true);\n    }, [550]); //remove background images once the toolbar slides up for UI purposes as the mouse will hover those links\n    //the cleanup on unmount does not trigger on time, so I moved it before the component unmounts here\n\n    if (!showDropDown) {\n      setAllowBackground(false);\n    }\n  }, [showDropDown]);\n\n  var navItemMouseEnter = function navItemMouseEnter(path) {\n    setBackgroundToggledLink(path);\n  };\n\n  var navItemMouseLeave = function navItemMouseLeave() {\n    setBackgroundToggledLink(false);\n  };\n\n  var navItems = subItems.map(function (item) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n      key: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 5\n      }\n    }, __jsx(NavItem, {\n      path: item.path,\n      label: item.label,\n      mouseEntered: function mouseEntered() {\n        return navItemMouseEnter(item.background);\n      },\n      mouseLeft: navItemMouseLeave,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 7\n      }\n    }), window.innerWidth >= 640 && __jsx(_StyledComponents_dropdownItems__WEBPACK_IMPORTED_MODULE_6__[\"Background\"], {\n      showBackground: backgroundToggledLink === item.background,\n      backgroundImage: allowBackground && item.background,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }\n    }));\n  });\n  return navItems;\n};\n\n_s2(ToolbarNav, \"F12Hel/1UT4nAhzKIMk+Dy3O7hw=\");\n\n_c3 = ToolbarNav;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Dropdown\");\n$RefreshReg$(_c2, \"NavItem\");\n$RefreshReg$(_c3, \"ToolbarNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvRHJvcGRvd24vRHJvcGRvd24uanM/MTdjNCJdLCJuYW1lcyI6WyJEcm9wZG93biIsImRyb3BEb3duVGl0bGUiLCJzdWJDYXRlZ29yeUhhbmRsZXIiLCJkcm9wRG93blRvZ2dsZXJIYW5kbGVyIiwidXNlT25Ub29sYmFyIiwic2hvd0Ryb3BEb3duIiwic3ViSXRlbXMiLCJjdXJyUG9zIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwic2Nyb2xsWSIsInN0YXRlIiwiTmF2SXRlbSIsInBhdGgiLCJsYWJlbCIsIm1vdXNlRW50ZXJlZCIsIm1vdXNlTGVmdCIsIlRvb2xiYXJOYXYiLCJ1c2VTdGF0ZSIsImFsbG93QmFja2dyb3VuZCIsInNldEFsbG93QmFja2dyb3VuZCIsImJhY2tncm91bmRUb2dnbGVkTGluayIsInNldEJhY2tncm91bmRUb2dnbGVkTGluayIsInNldFRpbWVvdXQiLCJuYXZJdGVtTW91c2VFbnRlciIsIm5hdkl0ZW1Nb3VzZUxlYXZlIiwibmF2SXRlbXMiLCJtYXAiLCJpdGVtIiwiaWQiLCJiYWNrZ3JvdW5kIiwiaW5uZXJXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQVFBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BUVg7QUFBQTs7QUFBQSxNQVBKQyxhQU9JLFFBUEpBLGFBT0k7QUFBQSxNQU5KQyxrQkFNSSxRQU5KQSxrQkFNSTtBQUFBLE1BTEpDLHNCQUtJLFFBTEpBLHNCQUtJO0FBQUEsTUFKSkMsWUFJSSxRQUpKQSxZQUlJO0FBQUEsTUFISkMsWUFHSSxRQUhKQSxZQUdJO0FBQUEsTUFGSkMsUUFFSSxRQUZKQSxRQUVJO0FBQUEsTUFESkMsT0FDSSxRQURKQSxPQUNJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QixZQUFELENBVk0sQ0FBVDs7QUFZQSxNQUFNeUIsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDWCxJQUFELEVBQVU7QUFDbENTLDRCQUF3QixDQUFDVCxJQUFELENBQXhCO0FBQ0QsR0FGRDs7QUFJQSxNQUFNWSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUJILDRCQUF3QixDQUFDLEtBQUQsQ0FBeEI7QUFDRCxHQUZEOztBQUlBLE1BQU1JLFFBQVEsR0FBRzFCLFFBQVEsQ0FBQzJCLEdBQVQsQ0FBYSxVQUFDQyxJQUFEO0FBQUEsV0FDNUIsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBZ0IsU0FBRyxFQUFFQSxJQUFJLENBQUNDLEVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLE9BQUQ7QUFDRSxVQUFJLEVBQUVELElBQUksQ0FBQ2YsSUFEYjtBQUVFLFdBQUssRUFBRWUsSUFBSSxDQUFDZCxLQUZkO0FBR0Usa0JBQVksRUFBRTtBQUFBLGVBQU1VLGlCQUFpQixDQUFDSSxJQUFJLENBQUNFLFVBQU4sQ0FBdkI7QUFBQSxPQUhoQjtBQUlFLGVBQVMsRUFBRUwsaUJBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBT0dqQixNQUFNLENBQUN1QixVQUFQLElBQXFCLEdBQXJCLElBQ0MsTUFBQywwRUFBRDtBQUNBLG9CQUFjLEVBQUVWLHFCQUFxQixLQUFLTyxJQUFJLENBQUNFLFVBRC9DO0FBRUEscUJBQWUsRUFBRVgsZUFBZSxJQUFJUyxJQUFJLENBQUNFLFVBRnpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFSSixDQUQ0QjtBQUFBLEdBQWIsQ0FBakI7QUFpQkEsU0FBT0osUUFBUDtBQUNELENBekNEOztJQUFNVCxVOztNQUFBQSxVIiwiZmlsZSI6Ii4vVUkvRHJvcGRvd24vRHJvcGRvd24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2Nyb2xsUG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vSG9va3MvdXNlU2Nyb2xsUG9zaXRpb25cIjtcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFDaGV2cm9uRG93biB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7XG4gIE5hdixcbiAgTGlzdCxcbiAgTWVudUl0ZW0sXG4gIEJhY2tncm91bmQsXG59IGZyb20gXCIuLi8uLi9TdHlsZWRDb21wb25lbnRzL2Ryb3Bkb3duSXRlbXNcIjtcblxuLy9kcm9wZG93blxuY29uc3QgRHJvcGRvd24gPSAoe1xuICBkcm9wRG93blRpdGxlLFxuICBzdWJDYXRlZ29yeUhhbmRsZXIsXG4gIGRyb3BEb3duVG9nZ2xlckhhbmRsZXIsXG4gIHVzZU9uVG9vbGJhcixcbiAgc2hvd0Ryb3BEb3duLFxuICBzdWJJdGVtcyxcbiAgY3VyclBvc1xufSkgPT4ge1xuICAvLyBjb25zdCBbc2Nyb2xsWSwgc2V0U2Nyb2xsWV0gPSB1c2VTdGF0ZSgwKTtcbiAgLy8gdXNlU2Nyb2xsUG9zaXRpb24oXG4gIC8vICAgKHsgY3VyclBvcyB9KSA9PiB7XG4gIC8vICAgICBzZXRTY3JvbGxZKGN1cnJQb3MueSk7XG4gIC8vICAgfSxcbiAgLy8gICBbc2hvd0Ryb3BEb3duXSxcbiAgLy8gICBmYWxzZSxcbiAgLy8gICBmYWxzZSxcbiAgLy8gICAwXG4gIC8vICk7XG4gIC8vdGhpcyBpcyB0byBhdm9pZCB0b3Agc2Nyb2xsaW5nIHdoZW4gZW50ZXJpbmcvbGVhdmluZyB0aGUgZHJvcGRvd25cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gXCJcIjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9IFwiXCI7XG4gICAgd2luZG93LnNjcm9sbFRvKGN1cnJQb3MsIGN1cnJQb3MgKiAtMSk7XG4gICAgaWYgKHNob3dEcm9wRG93bikge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gYCR7c2Nyb2xsWX1weGA7XG4gICAgfVxuICB9LCBbc2hvd0Ryb3BEb3duXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VHJhbnNpdGlvbiBpbj17c2hvd0Ryb3BEb3dufSB0aW1lb3V0PXs1MDB9IG1vdW50T25FbnRlciB1bm1vdW50T25FeGl0PlxuICAgICAgeyhzdGF0ZSkgPT4gKFxuICAgICAgICA8TmF2IHN0YXRlPXtzdGF0ZX0gb25DbGljaz17ZHJvcERvd25Ub2dnbGVySGFuZGxlcn0+XG4gICAgICAgICAgPExpc3Q+XG4gICAgICAgICAge3VzZU9uVG9vbGJhciAmJiA8VG9vbGJhck5hdiBzdWJJdGVtcz17c3ViSXRlbXN9IHNob3dEcm9wRG93bj17c2hvd0Ryb3BEb3dufS8+fVxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgPC9OYXY+XG4gICAgICApfVxuICAgIDwvVHJhbnNpdGlvbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcblxuLy9tYWluIG5hdkl0ZW1cbmNvbnN0IE5hdkl0ZW0gPSAoeyBwYXRoLCBsYWJlbCwgbW91c2VFbnRlcmVkLCBtb3VzZUxlZnQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNZW51SXRlbSBvbk1vdXNlTGVhdmU9e21vdXNlTGVmdH0gb25Nb3VzZUVudGVyPXttb3VzZUVudGVyZWR9PlxuICAgICAgPExpbmsgaHJlZj17cGF0aH0+XG4gICAgICAgIDxhPntsYWJlbH08L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9NZW51SXRlbT5cbiAgKTtcbn07XG5cbi8vbmF2aWdhdGlvbiBmb3IgdGhlIHRvb2xiYXJcbmNvbnN0IFRvb2xiYXJOYXYgPSAoeyBzdWJJdGVtcywgc2hvd0Ryb3BEb3duIH0pID0+IHtcbiAgY29uc3QgW2FsbG93QmFja2dyb3VuZCwgc2V0QWxsb3dCYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2JhY2tncm91bmRUb2dnbGVkTGluaywgc2V0QmFja2dyb3VuZFRvZ2dsZWRMaW5rXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvL3RoaXMgcGllY2Ugb2Ygc3RhdGUgaXMgdG8gYXZvaWQgdGhlIGJhY2tncm91bmQgYXBwZWFyYW5jZSB3aGlsZSB0aGUgbWVudSBvcGVuc1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0QWxsb3dCYWNrZ3JvdW5kKHRydWUpO1xuICAgIH0sIFs1NTBdKTtcbiAgICAvL3JlbW92ZSBiYWNrZ3JvdW5kIGltYWdlcyBvbmNlIHRoZSB0b29sYmFyIHNsaWRlcyB1cCBmb3IgVUkgcHVycG9zZXMgYXMgdGhlIG1vdXNlIHdpbGwgaG92ZXIgdGhvc2UgbGlua3NcbiAgICAvL3RoZSBjbGVhbnVwIG9uIHVubW91bnQgZG9lcyBub3QgdHJpZ2dlciBvbiB0aW1lLCBzbyBJIG1vdmVkIGl0IGJlZm9yZSB0aGUgY29tcG9uZW50IHVubW91bnRzIGhlcmVcbiAgICBpZighc2hvd0Ryb3BEb3duKSB7XG4gICAgICBzZXRBbGxvd0JhY2tncm91bmQoZmFsc2UpXG4gICAgfVxuICB9LCBbc2hvd0Ryb3BEb3duXSk7XG5cbiAgY29uc3QgbmF2SXRlbU1vdXNlRW50ZXIgPSAocGF0aCkgPT4ge1xuICAgIHNldEJhY2tncm91bmRUb2dnbGVkTGluayhwYXRoKTtcbiAgfTtcblxuICBjb25zdCBuYXZJdGVtTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBzZXRCYWNrZ3JvdW5kVG9nZ2xlZExpbmsoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IG5hdkl0ZW1zID0gc3ViSXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgPFJlYWN0LkZyYWdtZW50IGtleT17aXRlbS5pZH0+XG4gICAgICA8TmF2SXRlbVxuICAgICAgICBwYXRoPXtpdGVtLnBhdGh9XG4gICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICBtb3VzZUVudGVyZWQ9eygpID0+IG5hdkl0ZW1Nb3VzZUVudGVyKGl0ZW0uYmFja2dyb3VuZCl9XG4gICAgICAgIG1vdXNlTGVmdD17bmF2SXRlbU1vdXNlTGVhdmV9XG4gICAgICAvPlxuICAgICAge3dpbmRvdy5pbm5lcldpZHRoID49IDY0MCAmJiAoXG4gICAgICAgIDxCYWNrZ3JvdW5kXG4gICAgICAgIHNob3dCYWNrZ3JvdW5kPXtiYWNrZ3JvdW5kVG9nZ2xlZExpbmsgPT09IGl0ZW0uYmFja2dyb3VuZH1cbiAgICAgICAgYmFja2dyb3VuZEltYWdlPXthbGxvd0JhY2tncm91bmQgJiYgaXRlbS5iYWNrZ3JvdW5kfVxuICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKSk7XG5cbiAgcmV0dXJuIG5hdkl0ZW1zO1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./UI/Dropdown/Dropdown.js\n");

/***/ })

})