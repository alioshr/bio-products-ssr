webpackHotUpdate_N_E("pages/product/[pid]",{

/***/ "./StyledComponents/productDetails.js":
/*!********************************************!*\
  !*** ./StyledComponents/productDetails.js ***!
  \********************************************/
/*! exports provided: Wrapper, Banner, BannerImage, Details, Title, Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Banner\", function() { return Banner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BannerImage\", function() { return BannerImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Details\", function() { return Details; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Article\", function() { return Article; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/.pnpm/registry.npmjs.org/styled-components/5.2.0_2aeffab7d644b928458b96d6399100c6/node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nfont-size: 4rem;\\nmargin-top: 0;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\npadding-top: 2rem;\\ndisplay: flex;\\nflex-direction: column;\\nalign-content: center;\\ntext-align: center;\\nmin-height: 100vh;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nobject-fit: cover;\\nwidth: 100%;\\nheight: 100%;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nwidth: 100%;\\nheight: 50vh;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nheight: 100%;\\nwidth: 100%;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section(_templateObject());\nvar Banner = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2());\nvar BannerImage = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img(_templateObject3());\nvar Details = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section(_templateObject4());\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1(_templateObject5());\nvar Article = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].article(_templateObject6());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vU3R5bGVkQ29tcG9uZW50cy9wcm9kdWN0RGV0YWlscy5qcz8xMWU1Il0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJzZWN0aW9uIiwiQmFubmVyIiwiZGl2IiwiQmFubmVySW1hZ2UiLCJpbWciLCJEZXRhaWxzIiwiVGl0bGUiLCJoMSIsIkFydGljbGUiLCJhcnRpY2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxPQUFWLG1CQUFiO0FBS0EsSUFBTUMsTUFBTSxHQUFHRix5REFBTSxDQUFDRyxHQUFWLG9CQUFaO0FBS0EsSUFBTUMsV0FBVyxHQUFHSix5REFBTSxDQUFDSyxHQUFWLG9CQUFqQjtBQU1BLElBQU1DLE9BQU8sR0FBR04seURBQU0sQ0FBQ0MsT0FBVixvQkFBYjtBQVNBLElBQU1NLEtBQUssR0FBR1AseURBQU0sQ0FBQ1EsRUFBVixvQkFBWDtBQUtBLElBQU1DLE9BQU8sR0FBR1QseURBQU0sQ0FBQ1UsT0FBVixvQkFBYiIsImZpbGUiOiIuL1N0eWxlZENvbXBvbmVudHMvcHJvZHVjdERldGFpbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7Y3NzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcbmhlaWdodDogMTAwJTtcbndpZHRoOiAxMDAlO1xuYFxuXG5leHBvcnQgY29uc3QgQmFubmVyID0gc3R5bGVkLmRpdmBcbndpZHRoOiAxMDAlO1xuaGVpZ2h0OiA1MHZoO1xuYFxuXG5leHBvcnQgY29uc3QgQmFubmVySW1hZ2UgPSBzdHlsZWQuaW1nYFxub2JqZWN0LWZpdDogY292ZXI7XG53aWR0aDogMTAwJTtcbmhlaWdodDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IERldGFpbHMgPSBzdHlsZWQuc2VjdGlvbmBcbnBhZGRpbmctdG9wOiAycmVtO1xuZGlzcGxheTogZmxleDtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5hbGlnbi1jb250ZW50OiBjZW50ZXI7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5taW4taGVpZ2h0OiAxMDB2aDtcbmBcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuZm9udC1zaXplOiA0cmVtO1xubWFyZ2luLXRvcDogMDtcbmBcblxuZXhwb3J0IGNvbnN0IEFydGljbGUgPSBzdHlsZWQuYXJ0aWNsZWBcblxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./StyledComponents/productDetails.js\n");

/***/ })

})