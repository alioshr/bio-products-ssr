webpackHotUpdate_N_E("pages/_app",{

/***/ "./StyledComponents/dropdownItems.js":
/*!*******************************************!*\
  !*** ./StyledComponents/dropdownItems.js ***!
  \*******************************************/
/*! exports provided: Wrapper, List, MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return List; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuItem\", function() { return MenuItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/.pnpm/registry.npmjs.org/styled-components/5.2.0_2aeffab7d644b928458b96d6399100c6/node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  \", \";\\n  margin: 1rem;\\n  font-weight: bold;\\n  font-size: 2.2rem;\\n  a {\\n    text-align: center;\\n    color: white;\\n    padding: 2rem;\\n  }\\n  &,\\n  a {\\n    width: 100vw;\\n  }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  \", \";\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  \", \";\\n  opacity: 0;\\n\\n  background: linear-gradient(to top, rgba(86, 20, 238, 0.5) 100%, transparent), \", \" center center/cover no-repeat fixed;\\n  transition: 1000ms all ease-out;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: fixed;\\n  \", \";\\n  \", \";\\n  background: rgba(86, 20, 238, 1);\\n\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 100vw;\\n  height: 100vh;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar navItemsFlexStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject());\nvar wrapperDims = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject2());\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3(), wrapperDims, navItemsFlexStyles);\nvar List = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ul(_templateObject4(), wrapperDims, navItemsFlexStyles, function (_ref) {\n  var withBackground = _ref.withBackground;\n  return withBackground ? \"url(\".concat(withBackground, \")\") : \"rgb(135, 73, 250)\";\n});\nvar MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].li(_templateObject5(), navItemsFlexStyles);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vU3R5bGVkQ29tcG9uZW50cy9kcm9wZG93bkl0ZW1zLmpzPzIzY2IiXSwibmFtZXMiOlsibmF2SXRlbXNGbGV4U3R5bGVzIiwiY3NzIiwid3JhcHBlckRpbXMiLCJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiTGlzdCIsInVsIiwid2l0aEJhY2tncm91bmQiLCJNZW51SXRlbSIsImxpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxrQkFBa0IsR0FBR0MsNkRBQUgsbUJBQXhCO0FBT0EsSUFBTUMsV0FBVyxHQUFHRCw2REFBSCxvQkFBakI7QUFLTyxJQUFNRSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYscUJBRWhCSCxXQUZnQixFQUdoQkYsa0JBSGdCLENBQWI7QUFVQSxJQUFNTSxJQUFJLEdBQUdGLHlEQUFNLENBQUNHLEVBQVYscUJBQ2JMLFdBRGEsRUFLYkYsa0JBTGEsRUFRa0U7QUFBQSxNQUFHUSxjQUFILFFBQUdBLGNBQUg7QUFBQSxTQUMvRUEsY0FBYyxpQkFBVUEsY0FBVixTQUE4QixtQkFEbUM7QUFBQSxDQVJsRSxDQUFWO0FBYUEsSUFBTUMsUUFBUSxHQUFHTCx5REFBTSxDQUFDTSxFQUFWLHFCQUNqQlYsa0JBRGlCLENBQWQiLCJmaWxlIjoiLi9TdHlsZWRDb21wb25lbnRzL2Ryb3Bkb3duSXRlbXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IG5hdkl0ZW1zRmxleFN0eWxlcyA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5jb25zdCB3cmFwcGVyRGltcyA9IGNzc2BcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuYDtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gICR7d3JhcHBlckRpbXN9O1xuICAke25hdkl0ZW1zRmxleFN0eWxlc307XG4gIGJhY2tncm91bmQ6IHJnYmEoODYsIDIwLCAyMzgsIDEpO1xuXG5gO1xuXG5cblxuZXhwb3J0IGNvbnN0IExpc3QgPSBzdHlsZWQudWxgXG4gICR7d3JhcHBlckRpbXN9O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gICR7bmF2SXRlbXNGbGV4U3R5bGVzfTtcbiAgb3BhY2l0eTogMDtcblxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDg2LCAyMCwgMjM4LCAwLjUpIDEwMCUsIHRyYW5zcGFyZW50KSwgJHsoeyB3aXRoQmFja2dyb3VuZCB9KSA9PlxuICAgIHdpdGhCYWNrZ3JvdW5kID8gYHVybCgke3dpdGhCYWNrZ3JvdW5kfSlgIDogXCJyZ2IoMTM1LCA3MywgMjUwKVwifSBjZW50ZXIgY2VudGVyL2NvdmVyIG5vLXJlcGVhdCBmaXhlZDtcbiAgdHJhbnNpdGlvbjogMTAwMG1zIGFsbCBlYXNlLW91dDtcbmA7XG5cbmV4cG9ydCBjb25zdCBNZW51SXRlbSA9IHN0eWxlZC5saWBcbiAgJHtuYXZJdGVtc0ZsZXhTdHlsZXN9O1xuICBtYXJnaW46IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIuMnJlbTtcbiAgYSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICB9XG4gICYsXG4gIGEge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./StyledComponents/dropdownItems.js\n");

/***/ })

})