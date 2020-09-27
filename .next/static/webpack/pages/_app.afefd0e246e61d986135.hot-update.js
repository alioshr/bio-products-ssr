webpackHotUpdate_N_E("pages/_app",{

/***/ "./StyledComponents/socialMediaItems.js":
/*!**********************************************!*\
  !*** ./StyledComponents/socialMediaItems.js ***!
  \**********************************************/
/*! exports provided: SocialMediaTitle, SocialMediaWrapper, LinkWrapper, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SocialMediaTitle\", function() { return SocialMediaTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SocialMediaWrapper\", function() { return SocialMediaWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LinkWrapper\", function() { return LinkWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Link\", function() { return Link; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/.pnpm/registry.npmjs.org/styled-components/5.2.0_2aeffab7d644b928458b96d6399100c6/node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Library_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Library/variables */ \"./StyledComponents/Library/variables.js\");\n\n\nfunction _templateObject7() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: inline-block;\\n  text-decoration: none;\\n  \", \";\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: inline-block;\\n  margin: 0 1rem;\\n  ({(pattern)} => pattern === \\\"menu\\\" && css\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\");\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 100%;\\n  padding-left: 0;\\n  grid-area: social; \\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  grid-area: social-title;\\n  margin: 1rem;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    color: white;\\n    :hover {\\n      color: \", \";\\n    }\\n  \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    color: black;\\n    :hover {\\n      color: \", \";\\n    }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar colorPattern = function colorPattern(pattern) {\n  var footer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject(), _Library_variables__WEBPACK_IMPORTED_MODULE_2__[\"mainColors\"].accentBackground);\n  var menu = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject2(), _Library_variables__WEBPACK_IMPORTED_MODULE_2__[\"mainColors\"].accentOrange);\n  return pattern === \"footer\" ? footer : pattern === \"menu\" ? menu : alert(\"check color pattern at socialmediaitems.js\");\n};\n\nvar SocialMediaTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h4(_templateObject3()); //the grid area is just for the footer\n\nvar SocialMediaWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ul(_templateObject4());\nvar LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].li(_templateObject6())(_templateObject5());\nvar Link = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].a(_templateObject7(), function (_ref) {\n  var pattern = _ref.pattern;\n  return pattern && colorPattern(pattern);\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vU3R5bGVkQ29tcG9uZW50cy9zb2NpYWxNZWRpYUl0ZW1zLmpzPzIwNTkiXSwibmFtZXMiOlsiY29sb3JQYXR0ZXJuIiwicGF0dGVybiIsImZvb3RlciIsImNzcyIsIm1haW5Db2xvcnMiLCJhY2NlbnRCYWNrZ3JvdW5kIiwibWVudSIsImFjY2VudE9yYW5nZSIsImFsZXJ0IiwiU29jaWFsTWVkaWFUaXRsZSIsInN0eWxlZCIsImg0IiwiU29jaWFsTWVkaWFXcmFwcGVyIiwidWwiLCJMaW5rV3JhcHBlciIsImxpIiwiTGluayIsImEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxPQUFELEVBQWE7QUFDaEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBSCxvQkFHQ0MsNkRBQVUsQ0FBQ0MsZ0JBSFosQ0FBWjtBQU1BLE1BQU1DLElBQUksR0FBR0gsNkRBQUgscUJBR0dDLDZEQUFVLENBQUNHLFlBSGQsQ0FBVjtBQU1BLFNBQU9OLE9BQU8sS0FBSyxRQUFaLEdBQ0hDLE1BREcsR0FFSEQsT0FBTyxLQUFLLE1BQVosR0FDQUssSUFEQSxHQUVBRSxLQUFLLENBQUMsNENBQUQsQ0FKVDtBQUtELENBbEJEOztBQW9CTyxJQUFNQyxnQkFBZ0IsR0FBR0MseURBQU0sQ0FBQ0MsRUFBVixvQkFBdEIsQyxDQUtQOztBQUNPLElBQU1DLGtCQUFrQixHQUFHRix5REFBTSxDQUFDRyxFQUFWLG9CQUF4QjtBQVNBLElBQU1DLFdBQVcsR0FBR0oseURBQU0sQ0FBQ0ssRUFBVix3Q0FBakI7QUFNQSxJQUFNQyxJQUFJLEdBQUdOLHlEQUFNLENBQUNPLENBQVYscUJBR2I7QUFBQSxNQUFFaEIsT0FBRixRQUFFQSxPQUFGO0FBQUEsU0FBZUEsT0FBTyxJQUFJRCxZQUFZLENBQUNDLE9BQUQsQ0FBdEM7QUFBQSxDQUhhLENBQVYiLCJmaWxlIjoiLi9TdHlsZWRDb21wb25lbnRzL3NvY2lhbE1lZGlhSXRlbXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgbWFpbkNvbG9ycyB9IGZyb20gXCIuL0xpYnJhcnkvdmFyaWFibGVzXCI7XG5cbmNvbnN0IGNvbG9yUGF0dGVybiA9IChwYXR0ZXJuKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGNzc2BcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAke21haW5Db2xvcnMuYWNjZW50QmFja2dyb3VuZH07XG4gICAgfVxuICBgO1xuICBjb25zdCBtZW51ID0gY3NzYFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICA6aG92ZXIge1xuICAgICAgY29sb3I6ICR7bWFpbkNvbG9ycy5hY2NlbnRPcmFuZ2V9O1xuICAgIH1cbiAgYDtcbiAgcmV0dXJuIHBhdHRlcm4gPT09IFwiZm9vdGVyXCJcbiAgICA/IGZvb3RlclxuICAgIDogcGF0dGVybiA9PT0gXCJtZW51XCJcbiAgICA/IG1lbnVcbiAgICA6IGFsZXJ0KFwiY2hlY2sgY29sb3IgcGF0dGVybiBhdCBzb2NpYWxtZWRpYWl0ZW1zLmpzXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IFNvY2lhbE1lZGlhVGl0bGUgPSBzdHlsZWQuaDRgXG4gIGdyaWQtYXJlYTogc29jaWFsLXRpdGxlO1xuICBtYXJnaW46IDFyZW07XG5gO1xuXG4vL3RoZSBncmlkIGFyZWEgaXMganVzdCBmb3IgdGhlIGZvb3RlclxuZXhwb3J0IGNvbnN0IFNvY2lhbE1lZGlhV3JhcHBlciA9IHN0eWxlZC51bGBcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgZ3JpZC1hcmVhOiBzb2NpYWw7IFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBMaW5rV3JhcHBlciA9IHN0eWxlZC5saWBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMXJlbTtcbiAgKHsocGF0dGVybil9ID0+IHBhdHRlcm4gPT09IFwibWVudVwiICYmIGNzc2BgKTtcbmA7XG5cbmV4cG9ydCBjb25zdCBMaW5rID0gc3R5bGVkLmFgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAkeyh7cGF0dGVybn0pID0+IHBhdHRlcm4gJiYgY29sb3JQYXR0ZXJuKHBhdHRlcm4pfTtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./StyledComponents/socialMediaItems.js\n");

/***/ })

})