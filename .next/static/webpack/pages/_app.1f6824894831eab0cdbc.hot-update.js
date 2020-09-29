webpackHotUpdate_N_E("pages/_app",{

/***/ "./StyledComponents/Library/mixins.js":
/*!********************************************!*\
  !*** ./StyledComponents/Library/mixins.js ***!
  \********************************************/
/*! exports provided: toolBarMixin, hamburgerSpanActive, productsAlerts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toolBarMixin\", function() { return toolBarMixin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hamburgerSpanActive\", function() { return hamburgerSpanActive; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productsAlerts\", function() { return productsAlerts; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/.pnpm/registry.npmjs.org/styled-components/5.2.0_2aeffab7d644b928458b96d6399100c6/node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ \"./StyledComponents/Library/variables.js\");\n\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: absolute;\\n    top: 0.5rem;\\n    width: fit-content;\\n    color: white;\\n    font-weight: bold;\\n    font-size: 1rem;\\n    padding: 0.5rem;\\n    border-radius: 5px;\\n    background-color: \", \";\\n    \", \"\\n    \", \"\\n  \"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n   span {\\n    background-color: white;\\n  }\\n\\n  span:nth-child(1) {\\n    width: 100%;\\n    transform-origin: left;\\n    transform: rotate(45deg) translate(5%, -240%);\\n  }\\n\\n  span:nth-child(2) {\\n    transform: translateX(-100%);\\n    opacity: 0;\\n  }\\n\\n  span:nth-child(3) {\\n    width: 100%;\\n    transform-origin: left;\\n    transform: rotate(-45deg) translate(5%, 240%);\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: fixed;\\n    top: \", \"rem;\\n    left: \", \"rem;\\n    right: \", \"rem;\\n    bottom: \", \"rem;\\n    z-index: \", \";\\n    transition: all 400ms ease-in;\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar toolBarMixin = function toolBarMixin() {\n  var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n  var bottom = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject(), top, left, right, bottom, _variables__WEBPACK_IMPORTED_MODULE_2__[\"zIndex\"].toolbar);\n};\nvar hamburgerSpanActive = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject2());\nvar productsAlerts = function productsAlerts(alert) {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject3(), _variables__WEBPACK_IMPORTED_MODULE_2__[\"mainColors\"].productsAccent, alert === \"off\" && \"right: .5rem;\", alert === \"stock\" && \"left: .5rem;\");\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vU3R5bGVkQ29tcG9uZW50cy9MaWJyYXJ5L21peGlucy5qcz84M2VlIl0sIm5hbWVzIjpbInRvb2xCYXJNaXhpbiIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImNzcyIsInpJbmRleCIsInRvb2xiYXIiLCJoYW1idXJnZXJTcGFuQWN0aXZlIiwicHJvZHVjdHNBbGVydHMiLCJhbGVydCIsIm1haW5Db2xvcnMiLCJwcm9kdWN0c0FjY2VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBS3ZCO0FBQUEsTUFKSEMsR0FJRyx1RUFKRyxJQUlIO0FBQUEsTUFISEMsSUFHRyx1RUFISSxJQUdKO0FBQUEsTUFGSEMsS0FFRyx1RUFGSyxJQUVMO0FBQUEsTUFESEMsTUFDRyx1RUFETSxJQUNOO0FBQ0gsU0FBT0MsNkRBQVAsb0JBRVNKLEdBRlQsRUFHVUMsSUFIVixFQUlXQyxLQUpYLEVBS1lDLE1BTFosRUFNYUUsaURBQU0sQ0FBQ0MsT0FOcEI7QUFTRCxDQWZNO0FBaUJBLElBQU1DLG1CQUFtQixHQUFHSCw2REFBSCxvQkFBekI7QUF1QkEsSUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFDdkMsU0FBT0wsNkRBQVAscUJBU3NCTSxxREFBVSxDQUFDQyxjQVRqQyxFQVVJRixLQUFLLEtBQUssS0FBVixJQUFtQixlQVZ2QixFQVdJQSxLQUFLLEtBQUssT0FBVixJQUFxQixjQVh6QjtBQWFELENBZE0iLCJmaWxlIjoiLi9TdHlsZWRDb21wb25lbnRzL0xpYnJhcnkvbWl4aW5zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB6SW5kZXgsIG1haW5Db2xvcnMgfSBmcm9tIFwiLi92YXJpYWJsZXNcIjtcblxuZXhwb3J0IGNvbnN0IHRvb2xCYXJNaXhpbiA9IChcbiAgdG9wID0gbnVsbCxcbiAgbGVmdCA9IG51bGwsXG4gIHJpZ2h0ID0gbnVsbCxcbiAgYm90dG9tID0gbnVsbFxuKSA9PiB7XG4gIHJldHVybiBjc3NgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogJHt0b3B9cmVtO1xuICAgIGxlZnQ6ICR7bGVmdH1yZW07XG4gICAgcmlnaHQ6ICR7cmlnaHR9cmVtO1xuICAgIGJvdHRvbTogJHtib3R0b219cmVtO1xuICAgIHotaW5kZXg6ICR7ekluZGV4LnRvb2xiYXJ9O1xuICAgIHRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlLWluO1xuICBgO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbWJ1cmdlclNwYW5BY3RpdmUgPSBjc3NgXG4gICBzcGFuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoNSUsIC0yNDAlKTtcbiAgfVxuXG4gIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICBzcGFuOm50aC1jaGlsZCgzKSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSg1JSwgMjQwJSk7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0c0FsZXJ0cyA9IChhbGVydCkgPT4ge1xuICByZXR1cm4gY3NzYFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDAuNXJlbTtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7bWFpbkNvbG9ycy5wcm9kdWN0c0FjY2VudH07XG4gICAgJHthbGVydCA9PT0gXCJvZmZcIiAmJiBcInJpZ2h0OiAuNXJlbTtcIn1cbiAgICAke2FsZXJ0ID09PSBcInN0b2NrXCIgJiYgXCJsZWZ0OiAuNXJlbTtcIn1cbiAgYDtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./StyledComponents/Library/mixins.js\n");

/***/ })

})