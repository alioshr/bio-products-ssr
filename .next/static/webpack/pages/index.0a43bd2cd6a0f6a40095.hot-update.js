webpackHotUpdate_N_E("pages/index",{

/***/ "./StyledComponents/productsItems.js":
/*!*******************************************!*\
  !*** ./StyledComponents/productsItems.js ***!
  \*******************************************/
/*! exports provided: ProductsWrapper, Title, CategoryWrapper, Category, CategoryTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductsWrapper\", function() { return ProductsWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CategoryWrapper\", function() { return CategoryWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Category\", function() { return Category; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CategoryTitle\", function() { return CategoryTitle; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/.pnpm/registry.npmjs.org/styled-components/5.2.0_2aeffab7d644b928458b96d6399100c6/node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Library_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Library/variables */ \"./StyledComponents/Library/variables.js\");\n\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nfont-size: 1.5rem;\\nfont-weight: bold;\\nposition: relative;\\n::after {\\n content: \\\"\\\";   \\n position: absolute;\\n bottom: -.2rem;\\n left: 50%;\\n transform: translateX(-50%);\\n height: .2rem;\\n width: 110%;\\n background-color: \", \";\\n}\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nmin-width: 30%;\\npadding: 1rem;\\nborder: 1px solid black;\\ncursor: pointer;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\ndisplay: flex;\\noverflow-x: scroll;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\ntext-align: center;\\nfont-weight: bold;\\nfont-size: 3rem;\\nmargin-top: 0;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nbackground-color: \", \";\\npadding-top: 2rem;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar ProductsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section(_templateObject(), _Library_variables__WEBPACK_IMPORTED_MODULE_2__[\"mainColors\"].bodyBackground);\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1(_templateObject2());\nvar CategoryWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nvar Category = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject4());\nvar CategoryTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].span(_templateObject5(), _Library_variables__WEBPACK_IMPORTED_MODULE_2__[\"mainColors\"].accentOrange);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vU3R5bGVkQ29tcG9uZW50cy9wcm9kdWN0c0l0ZW1zLmpzPzIwZDgiXSwibmFtZXMiOlsiUHJvZHVjdHNXcmFwcGVyIiwic3R5bGVkIiwic2VjdGlvbiIsIm1haW5Db2xvcnMiLCJib2R5QmFja2dyb3VuZCIsIlRpdGxlIiwiaDEiLCJDYXRlZ29yeVdyYXBwZXIiLCJkaXYiLCJDYXRlZ29yeSIsImJ1dHRvbiIsIkNhdGVnb3J5VGl0bGUiLCJzcGFuIiwiYWNjZW50T3JhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsT0FBVixvQkFDUkMsNkRBQVUsQ0FBQ0MsY0FESCxDQUFyQjtBQUtBLElBQU1DLEtBQUssR0FBR0oseURBQU0sQ0FBQ0ssRUFBVixvQkFBWDtBQU9BLElBQU1DLGVBQWUsR0FBR04seURBQU0sQ0FBQ08sR0FBVixvQkFBckI7QUFLQSxJQUFNQyxRQUFRLEdBQUdSLHlEQUFNLENBQUNTLE1BQVYsb0JBQWQ7QUFPQSxJQUFNQyxhQUFhLEdBQUdWLHlEQUFNLENBQUNXLElBQVYscUJBWUxULDZEQUFVLENBQUNVLFlBWk4sQ0FBbkIiLCJmaWxlIjoiLi9TdHlsZWRDb21wb25lbnRzL3Byb2R1Y3RzSXRlbXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHttYWluQ29sb3JzfSBmcm9tICcuL0xpYnJhcnkvdmFyaWFibGVzJ1xuXG5leHBvcnQgY29uc3QgUHJvZHVjdHNXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG5iYWNrZ3JvdW5kLWNvbG9yOiAke21haW5Db2xvcnMuYm9keUJhY2tncm91bmR9O1xucGFkZGluZy10b3A6IDJyZW07XG5gXG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbnRleHQtYWxpZ246IGNlbnRlcjtcbmZvbnQtd2VpZ2h0OiBib2xkO1xuZm9udC1zaXplOiAzcmVtO1xubWFyZ2luLXRvcDogMDtcbmBcblxuZXhwb3J0IGNvbnN0IENhdGVnb3J5V3JhcHBlciA9IHN0eWxlZC5kaXZgXG5kaXNwbGF5OiBmbGV4O1xub3ZlcmZsb3cteDogc2Nyb2xsO1xuYFxuXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnkgPSBzdHlsZWQuYnV0dG9uYFxubWluLXdpZHRoOiAzMCU7XG5wYWRkaW5nOiAxcmVtO1xuYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5jdXJzb3I6IHBvaW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBDYXRlZ29yeVRpdGxlID0gc3R5bGVkLnNwYW5gXG5mb250LXNpemU6IDEuNXJlbTtcbmZvbnQtd2VpZ2h0OiBib2xkO1xucG9zaXRpb246IHJlbGF0aXZlO1xuOjphZnRlciB7XG4gY29udGVudDogXCJcIjsgICBcbiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gYm90dG9tOiAtLjJyZW07XG4gbGVmdDogNTAlO1xuIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiBoZWlnaHQ6IC4ycmVtO1xuIHdpZHRoOiAxMTAlO1xuIGJhY2tncm91bmQtY29sb3I6ICR7bWFpbkNvbG9ycy5hY2NlbnRPcmFuZ2V9O1xufVxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./StyledComponents/productsItems.js\n");

/***/ })

})