webpackHotUpdate_N_E("pages/index",{

/***/ "./StyledComponents/Library/animations.js":
/*!************************************************!*\
  !*** ./StyledComponents/Library/animations.js ***!
  \************************************************/
/*! exports provided: modalEnter, modalLeave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modalEnter\", function() { return modalEnter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modalLeave\", function() { return modalLeave; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/.pnpm/registry.npmjs.org/styled-components/5.2.0_2aeffab7d644b928458b96d6399100c6/node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject8() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\n\"]);\n\n  _templateObject8 = function _templateObject8() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject7() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nanimation: $\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nto {transform: translateX(100%)};\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nto {transform: translateX(-100%)}\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nanimation: \", \" 400ms ease forwards;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nanimation: \", \" 400ms ease forwards;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nto {opacity: 0}\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nto {opacity: 1}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n //modal animation\n\nvar modalEntering = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"keyframes\"])(_templateObject());\nvar modalLeaving = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"keyframes\"])(_templateObject2());\nvar modalEnter = function modalEnter() {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject3(), modalEntering);\n};\nvar modalLeave = function modalLeave() {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject4(), modalLeaving);\n}; //product pictures animation\n\nvar picSwappingRight = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"keyframes\"])(_templateObject5());\nvar picSwappingLeft = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"keyframes\"])(_templateObject6());\nvar swapRight = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject7());\nvar swapLeft = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject8());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vU3R5bGVkQ29tcG9uZW50cy9MaWJyYXJ5L2FuaW1hdGlvbnMuanM/MGQ0MiJdLCJuYW1lcyI6WyJtb2RhbEVudGVyaW5nIiwia2V5ZnJhbWVzIiwibW9kYWxMZWF2aW5nIiwibW9kYWxFbnRlciIsImNzcyIsIm1vZGFsTGVhdmUiLCJwaWNTd2FwcGluZ1JpZ2h0IiwicGljU3dhcHBpbmdMZWZ0Iiwic3dhcFJpZ2h0Iiwic3dhcExlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBLElBQU1BLGFBQWEsR0FBR0MsbUVBQUgsbUJBQW5CO0FBR0MsSUFBTUMsWUFBWSxHQUFHRCxtRUFBSCxvQkFBbEI7QUFHTSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFNBQU1DLDZEQUFOLHFCQUNiSixhQURhO0FBQUEsQ0FBbkI7QUFHQSxJQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFNBQU1ELDZEQUFOLHFCQUNiRixZQURhO0FBQUEsQ0FBbkIsQyxDQUlQOztBQUVBLElBQU1JLGdCQUFnQixHQUFHTCxtRUFBSCxvQkFBdEI7QUFHQSxJQUFNTSxlQUFlLEdBQUdOLG1FQUFILG9CQUFyQjtBQUdBLElBQU1PLFNBQVMsR0FBR0osNkRBQUgsb0JBQWY7QUFJQSxJQUFNSyxRQUFRLEdBQUdMLDZEQUFILG9CQUFkIiwiZmlsZSI6Ii4vU3R5bGVkQ29tcG9uZW50cy9MaWJyYXJ5L2FuaW1hdGlvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Nzcywga2V5ZnJhbWVzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuLy9tb2RhbCBhbmltYXRpb25cbmNvbnN0IG1vZGFsRW50ZXJpbmcgPSBrZXlmcmFtZXNgXG50byB7b3BhY2l0eTogMX1cbmBcbiBjb25zdCBtb2RhbExlYXZpbmcgPSBrZXlmcmFtZXNgXG50byB7b3BhY2l0eTogMH1cbmBcbmV4cG9ydCBjb25zdCBtb2RhbEVudGVyID0gKCkgPT4gY3NzYFxuYW5pbWF0aW9uOiAke21vZGFsRW50ZXJpbmd9IDQwMG1zIGVhc2UgZm9yd2FyZHM7XG5gXG5leHBvcnQgY29uc3QgbW9kYWxMZWF2ZSA9ICgpID0+IGNzc2BcbmFuaW1hdGlvbjogJHttb2RhbExlYXZpbmd9IDQwMG1zIGVhc2UgZm9yd2FyZHM7XG5gXG5cbi8vcHJvZHVjdCBwaWN0dXJlcyBhbmltYXRpb25cblxuY29uc3QgcGljU3dhcHBpbmdSaWdodCA9IGtleWZyYW1lc2BcbnRvIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpfVxuYFxuY29uc3QgcGljU3dhcHBpbmdMZWZ0ID0ga2V5ZnJhbWVzYFxudG8ge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKX07XG5gXG5jb25zdCBzd2FwUmlnaHQgPSBjc3NgXG5hbmltYXRpb246ICRcbmBcblxuY29uc3Qgc3dhcExlZnQgPSBjc3NgXG5cbmAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./StyledComponents/Library/animations.js\n");

/***/ })

})