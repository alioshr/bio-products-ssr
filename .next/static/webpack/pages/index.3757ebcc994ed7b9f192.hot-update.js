webpackHotUpdate_N_E("pages/index",{

/***/ "./UI/FrontBanner/FrontBanner.js":
/*!***************************************!*\
  !*** ./UI/FrontBanner/FrontBanner.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/.pnpm/registry.npmjs.org/styled-components/5.2.0_2aeffab7d644b928458b96d6399100c6/node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/UI/FrontBanner/FrontBanner.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 100%;\\n  height: 100%;\\n  object-fit: fill;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 100vw;\\n  height: 100vh;\\n  position: relative;\\n  background-color: black;\\n  overflow: hidden;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar FrontBanner = function FrontBanner() {\n  return __jsx(BannerWrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 3\n    }\n  }, __jsx(Video, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(\"source\", {\n    src: \"/BannerFront/promo.mp4\",\n    type: \"video/mp4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  })));\n};\n\n_c = FrontBanner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FrontBanner);\nvar BannerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section(_templateObject());\n_c2 = BannerWrapper;\nvar Video = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].video.attrs(function () {\n  return {\n    autoPlay: \"autoPlay\",\n    loop: \"loop\",\n    muted: \"muted\"\n  };\n})(_templateObject2());\n_c3 = Video;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"FrontBanner\");\n$RefreshReg$(_c2, \"BannerWrapper\");\n$RefreshReg$(_c3, \"Video\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvRnJvbnRCYW5uZXIvRnJvbnRCYW5uZXIuanM/ZjFlYyJdLCJuYW1lcyI6WyJGcm9udEJhbm5lciIsIkJhbm5lcldyYXBwZXIiLCJzdHlsZWQiLCJzZWN0aW9uIiwiVmlkZW8iLCJ2aWRlbyIsImF0dHJzIiwiYXV0b1BsYXkiLCJsb29wIiwibXV0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFNBQ2xCLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLE9BQUcsRUFBQyx3QkFBWjtBQUFxQyxRQUFJLEVBQUMsV0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FEa0I7QUFBQSxDQUFwQjs7S0FBTUEsVztBQVFTQSwwRUFBZjtBQUVBLElBQU1DLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsT0FBVixtQkFBbkI7TUFBTUYsYTtBQVFOLElBQU1HLEtBQUssR0FBR0YseURBQU0sQ0FBQ0csS0FBUCxDQUFhQyxLQUFiLENBQW1CO0FBQUEsU0FBTztBQUN0Q0MsWUFBUSxFQUFFLFVBRDRCO0FBRXRDQyxRQUFJLEVBQUUsTUFGZ0M7QUFHdENDLFNBQUssRUFBRTtBQUgrQixHQUFQO0FBQUEsQ0FBbkIsQ0FBSCxvQkFBWDtNQUFNTCxLIiwiZmlsZSI6Ii4vVUkvRnJvbnRCYW5uZXIvRnJvbnRCYW5uZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBGcm9udEJhbm5lciA9ICgpID0+IChcbiAgPEJhbm5lcldyYXBwZXI+XG4gICAgPFZpZGVvPlxuICAgICAgPHNvdXJjZSBzcmM9XCIvQmFubmVyRnJvbnQvcHJvbW8ubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgPC9WaWRlbz5cbiAgPC9CYW5uZXJXcmFwcGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRnJvbnRCYW5uZXI7XG5cbmNvbnN0IEJhbm5lcldyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuY29uc3QgVmlkZW8gPSBzdHlsZWQudmlkZW8uYXR0cnMoKCkgPT4gKHtcbiAgYXV0b1BsYXk6IFwiYXV0b1BsYXlcIixcbiAgbG9vcDogXCJsb29wXCIsXG4gIG11dGVkOiBcIm11dGVkXCIsXG59KSlgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGZpbGw7XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./UI/FrontBanner/FrontBanner.js\n");

/***/ })

})