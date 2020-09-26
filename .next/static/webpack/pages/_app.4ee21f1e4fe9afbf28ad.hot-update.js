webpackHotUpdate_N_E("pages/_app",{

/***/ "./StyledComponents/dropdownItems.js":
/*!*******************************************!*\
  !*** ./StyledComponents/dropdownItems.js ***!
  \*******************************************/
/*! exports provided: Wrapper, List, Background, MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return List; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Background\", function() { return Background; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuItem\", function() { return MenuItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/.pnpm/registry.npmjs.org/styled-components/5.2.0_2aeffab7d644b928458b96d6399100c6/node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject10() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nz-index: 1;\\n  \", \";\\n  margin: 1rem;\\n  font-weight: bold;\\n  font-size: 2.2rem;\\n  a {\\n    text-align: center;\\n    color: white;\\n    padding: 2rem;\\n  }\\n  &,\\n  a {\\n    width: 100vw;\\n  }\\n\"]);\n\n  _templateObject10 = function _templateObject10() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject9() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"animation: \", \" 1000ms ease forwards;\"]);\n\n  _templateObject9 = function _templateObject9() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject8() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\" animation: \", \" 1000ms ease forwards;\"]);\n\n  _templateObject8 = function _templateObject8() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject7() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n position: fixed;\\n \", \";\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  \", \";\\n  opacity: 0;\\n  \", \";\\n  background: linear-gradient(to top, rgba(86, 20, 238, 0.5) 100%, transparent),\\n    \", \"\\n      center center/cover no-repeat fixed;\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  \", \";\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  \", \";\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nto {opacity:0}\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nto {opacity: 1}\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: fixed;\\n  \", \";\\n  \", \";\\n  background: rgba(86, 20, 238, 1);\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 100vw;\\n  height: 100vh;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar navItemsFlexStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject());\nvar wrapperDims = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject2());\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3(), wrapperDims, navItemsFlexStyles);\nvar enterBackground = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"keyframes\"])(_templateObject4());\nvar leaveBackground = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"keyframes\"])(_templateObject5());\nvar List = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ul(_templateObject6(), wrapperDims, navItemsFlexStyles);\nvar Background = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject7(), wrapperDims, navItemsFlexStyles, function (_ref) {\n  var withBackground = _ref.withBackground;\n  return withBackground ? Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject8(), enterBackground) : Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject9(), leaveBackground);\n}, function (_ref2) {\n  var withBackground = _ref2.withBackground;\n  return withBackground ? \"url(\".concat(withBackground, \")\") : \"rgb(135, 73, 250)\";\n});\nvar MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].li(_templateObject10(), navItemsFlexStyles);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vU3R5bGVkQ29tcG9uZW50cy9kcm9wZG93bkl0ZW1zLmpzPzIzY2IiXSwibmFtZXMiOlsibmF2SXRlbXNGbGV4U3R5bGVzIiwiY3NzIiwid3JhcHBlckRpbXMiLCJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiZW50ZXJCYWNrZ3JvdW5kIiwia2V5ZnJhbWVzIiwibGVhdmVCYWNrZ3JvdW5kIiwiTGlzdCIsInVsIiwiQmFja2dyb3VuZCIsIndpdGhCYWNrZ3JvdW5kIiwiTWVudUl0ZW0iLCJsaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLDZEQUFILG1CQUF4QjtBQU9BLElBQU1DLFdBQVcsR0FBR0QsNkRBQUgsb0JBQWpCO0FBS08sSUFBTUUsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLHFCQUVoQkgsV0FGZ0IsRUFHaEJGLGtCQUhnQixDQUFiO0FBT1AsSUFBTU0sZUFBZSxHQUFHQyxtRUFBSCxvQkFBckI7QUFHQSxJQUFNQyxlQUFlLEdBQUdELG1FQUFILG9CQUFyQjtBQUlPLElBQU1FLElBQUksR0FBR0wseURBQU0sQ0FBQ00sRUFBVixxQkFDYlIsV0FEYSxFQUtiRixrQkFMYSxDQUFWO0FBUUEsSUFBTVcsVUFBVSxHQUFHUCx5REFBTSxDQUFDQyxHQUFWLHFCQUVwQkgsV0FGb0IsRUFNbkJGLGtCQU5tQixFQVFuQjtBQUFBLE1BQUVZLGNBQUYsUUFBRUEsY0FBRjtBQUFBLFNBQXNCQSxjQUFjLEdBQUdYLDZEQUFILHFCQUFxQkssZUFBckIsSUFBOERMLDZEQUE5RCxxQkFBK0VPLGVBQS9FLENBQXBDO0FBQUEsQ0FSbUIsRUFVakI7QUFBQSxNQUFHSSxjQUFILFNBQUdBLGNBQUg7QUFBQSxTQUNFQSxjQUFjLGlCQUFVQSxjQUFWLFNBQThCLG1CQUQ5QztBQUFBLENBVmlCLENBQWhCO0FBZUEsSUFBTUMsUUFBUSxHQUFHVCx5REFBTSxDQUFDVSxFQUFWLHNCQUVqQmQsa0JBRmlCLENBQWQiLCJmaWxlIjoiLi9TdHlsZWRDb21wb25lbnRzL2Ryb3Bkb3duSXRlbXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IG5hdkl0ZW1zRmxleFN0eWxlcyA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5jb25zdCB3cmFwcGVyRGltcyA9IGNzc2BcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuYDtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gICR7d3JhcHBlckRpbXN9O1xuICAke25hdkl0ZW1zRmxleFN0eWxlc307XG4gIGJhY2tncm91bmQ6IHJnYmEoODYsIDIwLCAyMzgsIDEpO1xuYDtcblxuY29uc3QgZW50ZXJCYWNrZ3JvdW5kID0ga2V5ZnJhbWVzYFxudG8ge29wYWNpdHk6IDF9XG5gO1xuY29uc3QgbGVhdmVCYWNrZ3JvdW5kID0ga2V5ZnJhbWVzYFxudG8ge29wYWNpdHk6MH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICAke3dyYXBwZXJEaW1zfTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICAke25hdkl0ZW1zRmxleFN0eWxlc307XG5gO1xuXG5leHBvcnQgY29uc3QgQmFja2dyb3VuZCA9IHN0eWxlZC5kaXZgXG4gcG9zaXRpb246IGZpeGVkO1xuICR7d3JhcHBlckRpbXN9O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gICR7bmF2SXRlbXNGbGV4U3R5bGVzfTtcbiAgb3BhY2l0eTogMDtcbiAgJHsoe3dpdGhCYWNrZ3JvdW5kfSkgPT4gd2l0aEJhY2tncm91bmQgPyBjc3NgIGFuaW1hdGlvbjogJHtlbnRlckJhY2tncm91bmR9IDEwMDBtcyBlYXNlIGZvcndhcmRzO2A6IGNzc2BhbmltYXRpb246ICR7bGVhdmVCYWNrZ3JvdW5kfSAxMDAwbXMgZWFzZSBmb3J3YXJkcztgfTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSg4NiwgMjAsIDIzOCwgMC41KSAxMDAlLCB0cmFuc3BhcmVudCksXG4gICAgJHsoeyB3aXRoQmFja2dyb3VuZCB9KSA9PlxuICAgICAgICB3aXRoQmFja2dyb3VuZCA/IGB1cmwoJHt3aXRoQmFja2dyb3VuZH0pYCA6IFwicmdiKDEzNSwgNzMsIDI1MClcIn1cbiAgICAgIGNlbnRlciBjZW50ZXIvY292ZXIgbm8tcmVwZWF0IGZpeGVkO1xuYFxuXG5leHBvcnQgY29uc3QgTWVudUl0ZW0gPSBzdHlsZWQubGlgXG56LWluZGV4OiAxO1xuICAke25hdkl0ZW1zRmxleFN0eWxlc307XG4gIG1hcmdpbjogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xuICBhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cbiAgJixcbiAgYSB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./StyledComponents/dropdownItems.js\n");

/***/ })

})