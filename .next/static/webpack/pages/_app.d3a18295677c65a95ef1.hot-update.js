webpackHotUpdate_N_E("pages/_app",{

/***/ "./StyledComponents/socialMediaItems.js":
/*!**********************************************!*\
  !*** ./StyledComponents/socialMediaItems.js ***!
  \**********************************************/
/*! exports provided: SocialMediaTitle, SocialMediaWrapper, LinkWrapper, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SocialMediaTitle\", function() { return SocialMediaTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SocialMediaWrapper\", function() { return SocialMediaWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LinkWrapper\", function() { return LinkWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Link\", function() { return Link; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/.pnpm/registry.npmjs.org/styled-components/5.2.0_2aeffab7d644b928458b96d6399100c6/node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Library_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Library/variables */ \"./StyledComponents/Library/variables.js\");\n\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: inline-block;\\n  text-decoration: none;\\n  \", \";\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: inline-block;\\n  margin: 0 1rem;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding-left: 0;\\n  grid-area: social; \\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  grid-area: social-title;\\n  margin: 1rem;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    color: white;\\n    :hover {\\n      color: \", \";\\n    }\\n  \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    color: black;\\n    :hover {\\n      color: \", \";\\n    }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar colorPattern = function colorPattern(pattern) {\n  var footer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject(), _Library_variables__WEBPACK_IMPORTED_MODULE_2__[\"mainColors\"].accentBackground);\n  var menu = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject2(), _Library_variables__WEBPACK_IMPORTED_MODULE_2__[\"mainColors\"].accentOrange);\n  return pattern === \"footer\" ? footer : pattern === \"menu\" ? menu : alert(\"check color pattern at socialmediaitems.js\");\n};\n\nvar SocialMediaTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h4(_templateObject3()); //the grid area is just for the \n\nvar SocialMediaWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ul(_templateObject4());\nvar LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].li(_templateObject5());\nvar Link = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].a(_templateObject6(), function (_ref) {\n  var pattern = _ref.pattern;\n  return pattern && colorPattern(pattern);\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vU3R5bGVkQ29tcG9uZW50cy9zb2NpYWxNZWRpYUl0ZW1zLmpzPzIwNTkiXSwibmFtZXMiOlsiY29sb3JQYXR0ZXJuIiwicGF0dGVybiIsImZvb3RlciIsImNzcyIsIm1haW5Db2xvcnMiLCJhY2NlbnRCYWNrZ3JvdW5kIiwibWVudSIsImFjY2VudE9yYW5nZSIsImFsZXJ0IiwiU29jaWFsTWVkaWFUaXRsZSIsInN0eWxlZCIsImg0IiwiU29jaWFsTWVkaWFXcmFwcGVyIiwidWwiLCJMaW5rV3JhcHBlciIsImxpIiwiTGluayIsImEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE9BQUQsRUFBYTtBQUNoQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFILG9CQUdDQyw2REFBVSxDQUFDQyxnQkFIWixDQUFaO0FBTUEsTUFBTUMsSUFBSSxHQUFHSCw2REFBSCxxQkFHR0MsNkRBQVUsQ0FBQ0csWUFIZCxDQUFWO0FBTUEsU0FBT04sT0FBTyxLQUFLLFFBQVosR0FDSEMsTUFERyxHQUVIRCxPQUFPLEtBQUssTUFBWixHQUNBSyxJQURBLEdBRUFFLEtBQUssQ0FBQyw0Q0FBRCxDQUpUO0FBS0QsQ0FsQkQ7O0FBb0JPLElBQU1DLGdCQUFnQixHQUFHQyx5REFBTSxDQUFDQyxFQUFWLG9CQUF0QixDLENBS1A7O0FBQ08sSUFBTUMsa0JBQWtCLEdBQUdGLHlEQUFNLENBQUNHLEVBQVYsb0JBQXhCO0FBUUEsSUFBTUMsV0FBVyxHQUFHSix5REFBTSxDQUFDSyxFQUFWLG9CQUFqQjtBQUtBLElBQU1DLElBQUksR0FBR04seURBQU0sQ0FBQ08sQ0FBVixxQkFHYjtBQUFBLE1BQUVoQixPQUFGLFFBQUVBLE9BQUY7QUFBQSxTQUFlQSxPQUFPLElBQUlELFlBQVksQ0FBQ0MsT0FBRCxDQUF0QztBQUFBLENBSGEsQ0FBViIsImZpbGUiOiIuL1N0eWxlZENvbXBvbmVudHMvc29jaWFsTWVkaWFJdGVtcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBtYWluQ29sb3JzIH0gZnJvbSBcIi4vTGlicmFyeS92YXJpYWJsZXNcIjtcblxuY29uc3QgY29sb3JQYXR0ZXJuID0gKHBhdHRlcm4pID0+IHtcbiAgY29uc3QgZm9vdGVyID0gY3NzYFxuICAgIGNvbG9yOiBibGFjaztcbiAgICA6aG92ZXIge1xuICAgICAgY29sb3I6ICR7bWFpbkNvbG9ycy5hY2NlbnRCYWNrZ3JvdW5kfTtcbiAgICB9XG4gIGA7XG4gIGNvbnN0IG1lbnUgPSBjc3NgXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIDpob3ZlciB7XG4gICAgICBjb2xvcjogJHttYWluQ29sb3JzLmFjY2VudE9yYW5nZX07XG4gICAgfVxuICBgO1xuICByZXR1cm4gcGF0dGVybiA9PT0gXCJmb290ZXJcIlxuICAgID8gZm9vdGVyXG4gICAgOiBwYXR0ZXJuID09PSBcIm1lbnVcIlxuICAgID8gbWVudVxuICAgIDogYWxlcnQoXCJjaGVjayBjb2xvciBwYXR0ZXJuIGF0IHNvY2lhbG1lZGlhaXRlbXMuanNcIik7XG59O1xuXG5leHBvcnQgY29uc3QgU29jaWFsTWVkaWFUaXRsZSA9IHN0eWxlZC5oNGBcbiAgZ3JpZC1hcmVhOiBzb2NpYWwtdGl0bGU7XG4gIG1hcmdpbjogMXJlbTtcbmA7XG5cbi8vdGhlIGdyaWQgYXJlYSBpcyBqdXN0IGZvciB0aGUgXG5leHBvcnQgY29uc3QgU29jaWFsTWVkaWFXcmFwcGVyID0gc3R5bGVkLnVsYFxuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGdyaWQtYXJlYTogc29jaWFsOyBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgTGlua1dyYXBwZXIgPSBzdHlsZWQubGlgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDFyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgTGluayA9IHN0eWxlZC5hYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgJHsoe3BhdHRlcm59KSA9PiBwYXR0ZXJuICYmIGNvbG9yUGF0dGVybihwYXR0ZXJuKX07XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./StyledComponents/socialMediaItems.js\n");

/***/ })

})