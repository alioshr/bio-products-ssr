webpackHotUpdate_N_E("pages/index",{

/***/ "./StyledComponents/Library/animations.js":
/*!************************************************!*\
  !*** ./StyledComponents/Library/animations.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/.pnpm/registry.npmjs.org/styled-components/5.2.0_2aeffab7d644b928458b96d6399100c6/node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vU3R5bGVkQ29tcG9uZW50cy9MaWJyYXJ5L2FuaW1hdGlvbnMuanM/MGQ0MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9TdHlsZWRDb21wb25lbnRzL0xpYnJhcnkvYW5pbWF0aW9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHtjc3MsIGtleWZyYW1lc30gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./StyledComponents/Library/animations.js\n");

/***/ }),

/***/ "./StyledComponents/main.js":
/*!**********************************!*\
  !*** ./StyledComponents/main.js ***!
  \**********************************/
/*! exports provided: modalEntering, modalLeaving, modalEnter, modalLeave, Backdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modalEntering\", function() { return modalEntering; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modalLeaving\", function() { return modalLeaving; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modalEnter\", function() { return modalEnter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modalLeave\", function() { return modalLeave; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Backdrop\", function() { return Backdrop; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/.pnpm/registry.npmjs.org/styled-components/5.2.0_2aeffab7d644b928458b96d6399100c6/node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Library_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Library/variables */ \"./StyledComponents/Library/variables.js\");\n/* harmony import */ var _Library_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Library/animations */ \"./StyledComponents/Library/animations.js\");\n\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\ncursor: pointer;\\nz-index: \", \";\\nposition: fixed;\\nleft: 0;\\ntop:0;\\nbottom: 0;\\nright: 0;\\nwidth: 100vw;\\nheight: 100vh;\\nopacity: 0;\\nbackground: rgba(0,0,0,0.5);\\n\", \";\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nanimation: \", \" 400ms ease forwards;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nanimation: \", \" 400ms ease forwards;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nto {opacity: 0}\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nto {opacity: 1}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar modalEntering = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"keyframes\"])(_templateObject());\nvar modalLeaving = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"keyframes\"])(_templateObject2());\nvar modalEnter = function modalEnter() {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject3(), modalEntering);\n};\nvar modalLeave = function modalLeave() {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject4(), modalLeaving);\n};\nvar Backdrop = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5(), _Library_variables__WEBPACK_IMPORTED_MODULE_2__[\"zIndex\"].backdrop, function (_ref) {\n  var state = _ref.state;\n  return state === \"entering\" || state === \"entered\" ? modalEnter : state === \"exiting\" || state == \"exited\" ? modalLeave : null;\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vU3R5bGVkQ29tcG9uZW50cy9tYWluLmpzPzZhNzEiXSwibmFtZXMiOlsibW9kYWxFbnRlcmluZyIsImtleWZyYW1lcyIsIm1vZGFsTGVhdmluZyIsIm1vZGFsRW50ZXIiLCJjc3MiLCJtb2RhbExlYXZlIiwiQmFja2Ryb3AiLCJzdHlsZWQiLCJkaXYiLCJ6SW5kZXgiLCJiYWNrZHJvcCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGFBQWEsR0FBR0MsbUVBQUgsbUJBQW5CO0FBR0EsSUFBTUMsWUFBWSxHQUFHRCxtRUFBSCxvQkFBbEI7QUFHQSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFNBQU1DLDZEQUFOLHFCQUNiSixhQURhO0FBQUEsQ0FBbkI7QUFJQSxJQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFNBQU1ELDZEQUFOLHFCQUNiRixZQURhO0FBQUEsQ0FBbkI7QUFJQSxJQUFNSSxRQUFRLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYscUJBRVZDLHlEQUFNLENBQUNDLFFBRkcsRUFZbkI7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUNFQSxLQUFLLEtBQUssVUFBVixJQUF3QkEsS0FBSyxLQUFLLFNBQWxDLEdBQ0lSLFVBREosR0FFSVEsS0FBSyxLQUFLLFNBQVYsSUFBdUJBLEtBQUssSUFBSSxRQUFoQyxHQUNBTixVQURBLEdBRUEsSUFMTjtBQUFBLENBWm1CLENBQWQiLCJmaWxlIjoiLi9TdHlsZWRDb21wb25lbnRzL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7a2V5ZnJhbWVzLCBjc3N9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7ekluZGV4fSBmcm9tICcuL0xpYnJhcnkvdmFyaWFibGVzJ1xuaW1wb3J0IHt9IGZyb20gJy4vTGlicmFyeS9hbmltYXRpb25zJztcblxuZXhwb3J0IGNvbnN0IG1vZGFsRW50ZXJpbmcgPSBrZXlmcmFtZXNgXG50byB7b3BhY2l0eTogMX1cbmBcbmV4cG9ydCBjb25zdCBtb2RhbExlYXZpbmcgPSBrZXlmcmFtZXNgXG50byB7b3BhY2l0eTogMH1cbmBcbmV4cG9ydCBjb25zdCBtb2RhbEVudGVyID0gKCkgPT4gY3NzYFxuYW5pbWF0aW9uOiAke21vZGFsRW50ZXJpbmd9IDQwMG1zIGVhc2UgZm9yd2FyZHM7XG5gXG5cbmV4cG9ydCBjb25zdCBtb2RhbExlYXZlID0gKCkgPT4gY3NzYFxuYW5pbWF0aW9uOiAke21vZGFsTGVhdmluZ30gNDAwbXMgZWFzZSBmb3J3YXJkcztcbmBcblxuZXhwb3J0IGNvbnN0IEJhY2tkcm9wID0gc3R5bGVkLmRpdmBcbmN1cnNvcjogcG9pbnRlcjtcbnotaW5kZXg6ICR7ekluZGV4LmJhY2tkcm9wfTtcbnBvc2l0aW9uOiBmaXhlZDtcbmxlZnQ6IDA7XG50b3A6MDtcbmJvdHRvbTogMDtcbnJpZ2h0OiAwO1xud2lkdGg6IDEwMHZ3O1xuaGVpZ2h0OiAxMDB2aDtcbm9wYWNpdHk6IDA7XG5iYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XG4keyh7IHN0YXRlIH0pID0+XG4gICAgc3RhdGUgPT09IFwiZW50ZXJpbmdcIiB8fCBzdGF0ZSA9PT0gXCJlbnRlcmVkXCJcbiAgICAgID8gbW9kYWxFbnRlclxuICAgICAgOiBzdGF0ZSA9PT0gXCJleGl0aW5nXCIgfHwgc3RhdGUgPT0gXCJleGl0ZWRcIlxuICAgICAgPyBtb2RhbExlYXZlXG4gICAgICA6IG51bGx9O2AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./StyledComponents/main.js\n");

/***/ })

})