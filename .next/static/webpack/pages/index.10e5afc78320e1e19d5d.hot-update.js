webpackHotUpdate_N_E("pages/index",{

/***/ "./StyledComponents/productsItems.js":
/*!*******************************************!*\
  !*** ./StyledComponents/productsItems.js ***!
  \*******************************************/
/*! exports provided: ProductsWrapper, Title, CategoryWrapper, Category, CategoryTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductsWrapper\", function() { return ProductsWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CategoryWrapper\", function() { return CategoryWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Category\", function() { return Category; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CategoryTitle\", function() { return CategoryTitle; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/.pnpm/registry.npmjs.org/styled-components/5.2.0_2aeffab7d644b928458b96d6399100c6/node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Library_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Library/variables */ \"./StyledComponents/Library/variables.js\");\n\n\nfunction _templateObject7() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  ::after {\\n    content: \\\"\\\";\\n    position: absolute;\\n    bottom: -0.4rem;\\n    left: 50%;\\n    transform: translateX(-50%);\\n    height: 0.2rem;\\n    width: 0;\\n    background-color: \", \";\\n    animation: \", \" 400ms forwards ease-in;\\n  }\\n  \"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: auto;\\n  font-weight: bold;\\n  position: relative;\\n  \", \"\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nto {width: 110%}\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 1.3rem;\\n  font-weight: bold;\\n  cursor: pointer;\\n  padding: 0.2rem 0.5rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  position: relative;\\n  height: 4rem;\\n  margin: 0 0.5rem;\\n  @media (min-width: 40rem) {\\n    margin: 0 2rem;\\n    font-size: 2rem;\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  margin-top: 1rem;\\n  display: flex;\\n  justify-content: flex-start;\\n  overflow: scroll;\\n  \", \"\\n\\n  @media (min-width: 40rem) {\\n    justify-content: center;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  text-align: center;\\n  font-weight: bold;\\n  font-size: 3rem;\\n  margin-top: 0;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background-color: \", \";\\n  width: 100vw;\\n  height: 100vh;\\n  padding-top: 2rem;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar ProductsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section(_templateObject(), _Library_variables__WEBPACK_IMPORTED_MODULE_2__[\"mainColors\"].bodyBackground);\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1(_templateObject2());\nvar CategoryWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3(), function (_ref) {\n  var fitDisplay = _ref.fitDisplay;\n  return fitDisplay;\n});\nvar Category = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject4());\nvar categoryAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"keyframes\"])(_templateObject5());\nvar CategoryTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].span(_templateObject6(), function (_ref2) {\n  var active = _ref2.active;\n  return active && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject7(), _Library_variables__WEBPACK_IMPORTED_MODULE_2__[\"mainColors\"].accentOrange, categoryAnimation);\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vU3R5bGVkQ29tcG9uZW50cy9wcm9kdWN0c0l0ZW1zLmpzPzIwZDgiXSwibmFtZXMiOlsiUHJvZHVjdHNXcmFwcGVyIiwic3R5bGVkIiwic2VjdGlvbiIsIm1haW5Db2xvcnMiLCJib2R5QmFja2dyb3VuZCIsIlRpdGxlIiwiaDEiLCJDYXRlZ29yeVdyYXBwZXIiLCJkaXYiLCJmaXREaXNwbGF5IiwiQ2F0ZWdvcnkiLCJidXR0b24iLCJjYXRlZ29yeUFuaW1hdGlvbiIsImtleWZyYW1lcyIsIkNhdGVnb3J5VGl0bGUiLCJzcGFuIiwiYWN0aXZlIiwiY3NzIiwiYWNjZW50T3JhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxPQUFWLG9CQUNOQyw2REFBVSxDQUFDQyxjQURMLENBQXJCO0FBT0EsSUFBTUMsS0FBSyxHQUFHSix5REFBTSxDQUFDSyxFQUFWLG9CQUFYO0FBT0EsSUFBTUMsZUFBZSxHQUFHTix5REFBTSxDQUFDTyxHQUFWLHFCQUt4QjtBQUFBLE1BQUVDLFVBQUYsUUFBRUEsVUFBRjtBQUFBLFNBQWtCQSxVQUFsQjtBQUFBLENBTHdCLENBQXJCO0FBWUEsSUFBTUMsUUFBUSxHQUFHVCx5REFBTSxDQUFDVSxNQUFWLG9CQUFkO0FBaUJQLElBQU1DLGlCQUFpQixHQUFHQyxtRUFBSCxvQkFBdkI7QUFJTyxJQUFNQyxhQUFhLEdBQUdiLHlEQUFNLENBQUNjLElBQVYscUJBSXRCO0FBQUEsTUFBR0MsTUFBSCxTQUFHQSxNQUFIO0FBQUEsU0FDQUEsTUFBTSxJQUNOQyw2REFETSxxQkFVY2QsNkRBQVUsQ0FBQ2UsWUFWekIsRUFXT04saUJBWFAsQ0FETjtBQUFBLENBSnNCLENBQW5CIiwiZmlsZSI6Ii4vU3R5bGVkQ29tcG9uZW50cy9wcm9kdWN0c0l0ZW1zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwge2Nzcywga2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IG1haW5Db2xvcnMgfSBmcm9tIFwiLi9MaWJyYXJ5L3ZhcmlhYmxlc1wiO1xuXG5leHBvcnQgY29uc3QgUHJvZHVjdHNXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGJhY2tncm91bmQtY29sb3I6ICR7bWFpbkNvbG9ycy5ib2R5QmFja2dyb3VuZH07XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy10b3A6IDJyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbWFyZ2luLXRvcDogMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBDYXRlZ29yeVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gICR7KHtmaXREaXNwbGF5fSkgPT4gZml0RGlzcGxheSB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQwcmVtKSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDYXRlZ29yeSA9IHN0eWxlZC5idXR0b25gXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDRyZW07XG4gIG1hcmdpbjogMCAwLjVyZW07XG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MHJlbSkge1xuICAgIG1hcmdpbjogMCAycmVtO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuYDtcblxuY29uc3QgY2F0ZWdvcnlBbmltYXRpb24gPSBrZXlmcmFtZXNgXG50byB7d2lkdGg6IDExMCV9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXRlZ29yeVRpdGxlID0gc3R5bGVkLnNwYW5gXG4gIHdpZHRoOiBhdXRvO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAkeyh7IGFjdGl2ZSB9KSA9PlxuICAgIGFjdGl2ZSAmJlxuICAgIGNzc2BcbiAgOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMC40cmVtO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgaGVpZ2h0OiAwLjJyZW07XG4gICAgd2lkdGg6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHttYWluQ29sb3JzLmFjY2VudE9yYW5nZX07XG4gICAgYW5pbWF0aW9uOiAke2NhdGVnb3J5QW5pbWF0aW9ufSA0MDBtcyBmb3J3YXJkcyBlYXNlLWluO1xuICB9XG4gIGB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./StyledComponents/productsItems.js\n");

/***/ })

})