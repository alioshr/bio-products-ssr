webpackHotUpdate_N_E("pages/product/[pid]",{

/***/ "./pages/product/[pid].js":
/*!********************************!*\
  !*** ./pages/product/[pid].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/.pnpm/registry.npmjs.org/next/9.5.3_react-dom@16.13.1/node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/pages/product/[pid].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar ProductDetails = function ProductDetails(_ref) {\n  _s();\n\n  var number = _ref.number;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var pid = router.query.pid;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    fetch('https://meli-99509.firebaseio.com/test/two.json').then(function (res) {\n      return console.log(res.json());\n    });\n\n    function Get() {\n      return _Get.apply(this, arguments);\n    }\n\n    function _Get() {\n      _Get = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var response;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch('https://meli-99509.firebaseio.com/test/two.json');\n\n              case 2:\n                response = _context.sent;\n\n                if (response.ok) {\n                  console.log(response.json());\n                }\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _Get.apply(this, arguments);\n    }\n  }, []);\n  console.log(number);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 10\n    }\n  }, \"Thee \", pid, \"!\");\n};\n\n_s(ProductDetails, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = ProductDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails); // export async function getStaticProps() {\n//     const res = await fetch('https://meli-99509.firebaseio.com/test/one.json')\n//     const number = await res.json()\n//     // By returning { props: posts }, the Blog component\n//     // will receive `posts` as a prop at build time\n//     return {\n//       props: {\n//         number: number\n//       },\n//     }\n//   }\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bcGlkXS5qcz82YzdkIl0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxzIiwibnVtYmVyIiwicm91dGVyIiwidXNlUm91dGVyIiwicGlkIiwicXVlcnkiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwianNvbiIsIkdldCIsInJlc3BvbnNlIiwib2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBYztBQUFBOztBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTtBQUNuQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRG1DLE1BRTNCQyxHQUYyQixHQUVuQkYsTUFBTSxDQUFDRyxLQUZZLENBRTNCRCxHQUYyQjtBQUduQ0UseURBQVMsQ0FBQyxZQUFNO0FBQ2JDLFNBQUssQ0FBQyxpREFBRCxDQUFMLENBQ0NDLElBREQsQ0FDTSxVQUFBQyxHQUFHO0FBQUEsYUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csSUFBSixFQUFaLENBQUo7QUFBQSxLQURUOztBQURhLGFBSUVDLEdBSkY7QUFBQTtBQUFBOztBQUFBO0FBQUEsOExBSWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDMkJOLEtBQUssQ0FBQyxpREFBRCxDQURoQzs7QUFBQTtBQUNVTyx3QkFEVjs7QUFFSSxvQkFBR0EsUUFBUSxDQUFDQyxFQUFaLEVBQWdCO0FBQ1pMLHlCQUFPLENBQUNDLEdBQVIsQ0FBWUcsUUFBUSxDQUFDRixJQUFULEVBQVo7QUFDSDs7QUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUphO0FBQUE7QUFBQTtBQVdmLEdBWFEsRUFXTixFQVhNLENBQVQ7QUFhQ0YsU0FBTyxDQUFDQyxHQUFSLENBQVlWLE1BQVo7QUFFRCxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBV0csR0FBWCxNQUFQO0FBQ0QsQ0FuQkQ7O0dBQU1KLGM7VUFDV0cscUQ7OztLQURYSCxjO0FBcUJTQSw2RUFBZixFLENBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3QvW3BpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7IFxuXG5jb25zdCBQcm9kdWN0RGV0YWlscyA9ICh7bnVtYmVyfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBwaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgZmV0Y2goJ2h0dHBzOi8vbWVsaS05OTUwOS5maXJlYmFzZWlvLmNvbS90ZXN0L3R3by5qc29uJylcbiAgICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcy5qc29uKCkpKTtcblxuICAgICBhc3luYyBmdW5jdGlvbiBHZXQoKSB7XG4gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL21lbGktOTk1MDkuZmlyZWJhc2Vpby5jb20vdGVzdC90d28uanNvbicpO1xuICAgICAgICAgaWYocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkpXG4gICAgICAgICB9XG5cbiAgICAgfVxuICB9LCBbXSlcblxuICAgY29uc29sZS5sb2cobnVtYmVyKVxuXG4gIHJldHVybiA8ZGl2PlRoZWUge3BpZH0hPC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbHM7XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9tZWxpLTk5NTA5LmZpcmViYXNlaW8uY29tL3Rlc3Qvb25lLmpzb24nKVxuLy8gICAgIGNvbnN0IG51bWJlciA9IGF3YWl0IHJlcy5qc29uKClcbiAgXG4vLyAgICAgLy8gQnkgcmV0dXJuaW5nIHsgcHJvcHM6IHBvc3RzIH0sIHRoZSBCbG9nIGNvbXBvbmVudFxuLy8gICAgIC8vIHdpbGwgcmVjZWl2ZSBgcG9zdHNgIGFzIGEgcHJvcCBhdCBidWlsZCB0aW1lXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHByb3BzOiB7XG4vLyAgICAgICAgIG51bWJlcjogbnVtYmVyXG4vLyAgICAgICB9LFxuLy8gICAgIH1cbi8vICAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/[pid].js\n");

/***/ })

})