webpackHotUpdate_N_E("pages/product/[pid]",{

/***/ "./pages/product/[pid].js":
/*!********************************!*\
  !*** ./pages/product/[pid].js ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/pages/product/[pid].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar ProductDetails = function ProductDetails(_ref) {\n  _s();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref);\n\n  var store = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useStore\"])(function (state) {\n    return state.products;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    fetch(\"https://meli-.firebaseio.com/catalog/\".concat(store.activeCatalog, \"/\").concat(store.activeCatagory, \"/\").concat(store.activeProduct, \".json\")).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return console.log(data);\n    });\n  }, []);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 10\n    }\n  }, \"Product Detail!\");\n};\n\n_s(ProductDetails, \"7WX0f3w9+vyXsBWAiuPF4CU1RJU=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useStore\"]];\n});\n\n_c = ProductDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bcGlkXS5qcz82YzdkIl0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxzIiwic3RvcmUiLCJ1c2VTdG9yZSIsInN0YXRlIiwicHJvZHVjdHMiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsImFjdGl2ZUNhdGFsb2ciLCJhY3RpdmVDYXRhZ29yeSIsImFjdGl2ZVByb2R1Y3QiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQVE7QUFBQTs7QUFBQTs7QUFDN0IsTUFBTUMsS0FBSyxHQUFHQyw0REFBUSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLFFBQVY7QUFBQSxHQUFOLENBQXRCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNiQyxTQUFLLGdEQUF5Q0wsS0FBSyxDQUFDTSxhQUEvQyxjQUFnRU4sS0FBSyxDQUFDTyxjQUF0RSxjQUF3RlAsS0FBSyxDQUFDUSxhQUE5RixXQUFMLENBQ0NDLElBREQsQ0FDTSxVQUFBQyxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxLQURULEVBRUNGLElBRkQsQ0FFTSxVQUFBRyxJQUFJO0FBQUEsYUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosQ0FBSjtBQUFBLEtBRlY7QUFHRixHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFQO0FBQ0QsQ0FWRDs7R0FBTWIsYztVQUNVRSxvRDs7O0tBRFZGLGM7O0FBWVNBLDZFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZHVjdC9bcGlkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZVN0b3JlfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuY29uc3QgUHJvZHVjdERldGFpbHMgPSAoe30pID0+IHtcbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZShzdGF0ZSA9PiBzdGF0ZS5wcm9kdWN0cykgIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgIGZldGNoKGBodHRwczovL21lbGktLmZpcmViYXNlaW8uY29tL2NhdGFsb2cvJHtzdG9yZS5hY3RpdmVDYXRhbG9nfS8ke3N0b3JlLmFjdGl2ZUNhdGFnb3J5fS8ke3N0b3JlLmFjdGl2ZVByb2R1Y3R9Lmpzb25gKVxuICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIDxkaXY+UHJvZHVjdCBEZXRhaWwhPC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbHM7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9tZWxpLTk5NTA5LmZpcmViYXNlaW8uY29tL3Rlc3QuanNvbicpXG4gICAgY29uc3QgbnVtYmVyID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBudW1iZXI6IG51bWJlclxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL21lbGktOTk1MDkuZmlyZWJhc2Vpby5jb20vdGVzdC5qc29uJylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIGNvbnNvbGUubG9nKCdwYXRocycsZGF0YSlcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRoczogW1xuICAgICAgICAgICAgeyBwYXJhbXM6IHsgcGlkOiAnMScgfSB9LFxuICAgICAgICAgICAgeyBwYXJhbXM6IHsgcGlkOiAnMicgfSB9XG4gICAgICAgICAgXSxcbiAgICAgIGZhbGxiYWNrOiB0cnVlIC8vIFNlZSB0aGUgXCJmYWxsYmFja1wiIHNlY3Rpb24gYmVsb3dcbiAgICB9O1xuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[pid].js\n");

/***/ })

})