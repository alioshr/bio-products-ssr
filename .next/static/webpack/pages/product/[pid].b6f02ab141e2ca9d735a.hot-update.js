webpackHotUpdate_N_E("pages/product/[pid]",{

/***/ "./pages/product/[pid].js":
/*!********************************!*\
  !*** ./pages/product/[pid].js ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StyledComponents/productDetails */ \"./StyledComponents/productDetails.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/pages/product/[pid].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar ProductDetails = function ProductDetails() {\n  _s();\n\n  var store = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useStore\"])(function (state) {\n    return state.products;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    fetch(\"https://meli-345234234.firebaseio.com/catalog/\".concat(store.activeCatalog, \"/\").concat(store.activeCatagory, \"/\").concat(store.activeProduct, \".json\")).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return console.log(data);\n    });\n  }, []);\n  return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Wrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Banner\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"BannerImage\"], {\n    src: \"NavigationItems/About/about.jpg\",\n    alt: \"banner logo\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }), __jsx(\"img\", {\n    src: \"NavigationItems/About/about.jpg\",\n    alt: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  })), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Details\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, \"Title!\"), \"details\"));\n};\n\n_s(ProductDetails, \"7WX0f3w9+vyXsBWAiuPF4CU1RJU=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useStore\"]];\n});\n\n_c = ProductDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bcGlkXS5qcz82YzdkIl0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxzIiwic3RvcmUiLCJ1c2VTdG9yZSIsInN0YXRlIiwicHJvZHVjdHMiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsImFjdGl2ZUNhdGFsb2ciLCJhY3RpdmVDYXRhZ29yeSIsImFjdGl2ZVByb2R1Y3QiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFDM0IsTUFBTUMsS0FBSyxHQUFHQyw0REFBUSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLFFBQVY7QUFBQSxHQUFOLENBQXRCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNiQyxTQUFLLHlEQUFrREwsS0FBSyxDQUFDTSxhQUF4RCxjQUF5RU4sS0FBSyxDQUFDTyxjQUEvRSxjQUFpR1AsS0FBSyxDQUFDUSxhQUF2RyxXQUFMLENBQ0NDLElBREQsQ0FDTSxVQUFBQyxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxLQURULEVBRUNGLElBRkQsQ0FFTSxVQUFBRyxJQUFJO0FBQUEsYUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosQ0FBSjtBQUFBLEtBRlY7QUFHRixHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsU0FDRSxNQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDRFQUFEO0FBQWEsT0FBRyxFQUFDLGlDQUFqQjtBQUFtRCxPQUFHLEVBQUMsYUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxPQUFHLEVBQUMsaUNBQVQ7QUFBMkMsT0FBRyxFQUFDLEVBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBS0ksTUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosWUFMSixDQURGO0FBWUQsQ0FyQkQ7O0dBQU1iLGM7VUFDVUUsb0Q7OztLQURWRixjOztBQXVCU0EsNkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1twaWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlU3RvcmV9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtXcmFwcGVyLCBCYW5uZXIsIEJhbm5lckltYWdlLCBEZXRhaWxzLCBUaXRsZX0gZnJvbSAnLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9wcm9kdWN0RGV0YWlscydcblxuY29uc3QgUHJvZHVjdERldGFpbHMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoc3RhdGUgPT4gc3RhdGUucHJvZHVjdHMpICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICBmZXRjaChgaHR0cHM6Ly9tZWxpLTM0NTIzNDIzNC5maXJlYmFzZWlvLmNvbS9jYXRhbG9nLyR7c3RvcmUuYWN0aXZlQ2F0YWxvZ30vJHtzdG9yZS5hY3RpdmVDYXRhZ29yeX0vJHtzdG9yZS5hY3RpdmVQcm9kdWN0fS5qc29uYClcbiAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICAgIDxCYW5uZXI+XG4gICAgICAgICAgICA8QmFubmVySW1hZ2Ugc3JjPVwiTmF2aWdhdGlvbkl0ZW1zL0Fib3V0L2Fib3V0LmpwZ1wiIGFsdD1cImJhbm5lciBsb2dvXCIvPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJOYXZpZ2F0aW9uSXRlbXMvQWJvdXQvYWJvdXQuanBnXCIgYWx0PVwiXCIvPlxuICAgICAgICA8L0Jhbm5lcj5cbiAgICAgICAgPERldGFpbHM+XG4gICAgICAgICAgICA8VGl0bGU+VGl0bGUhPC9UaXRsZT5cbiAgICAgICAgICAgIGRldGFpbHNcbiAgICAgICAgPC9EZXRhaWxzPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxzO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgLy9JIHdhbm5hIGhhdmUgdGhlIGR5bmFtaWMgcm91dGUgcGxhY2VkIG9uIHRoZSBVUkwgc3RyaW5nIGJlbG93XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vbWVsaS0zNDUyMzQyMzQuZmlyZWJhc2Vpby5jb20vY2F0YWxvZy5qc29uJylcbiAgICBjb25zdCBudW1iZXIgPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIG51bWJlcjogbnVtYmVyXG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gICAgIC8vbXVzdCByZXBlYXQgdGhpcyBoZXJlIGFzIEkgYW0gdXNpbmcgYSBkeW5hbWljIHJvdXRlXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vbWVsaS0zNDUyMzQyMzQuZmlyZWJhc2Vpby5jb20vY2F0YWxvZy5qc29uJylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzOiBbXG4gICAgICAgICAgICB7IHBhcmFtczogeyBwaWQ6ICcxJyB9IH0sXG4gICAgICAgICAgICB7IHBhcmFtczogeyBwaWQ6ICcyJyB9IH1cbiAgICAgICAgICBdLFxuICAgICAgZmFsbGJhY2s6IHRydWUgXG4gICAgfTtcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/[pid].js\n");

/***/ })

})