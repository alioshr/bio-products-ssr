webpackHotUpdate_N_E("pages/index",{

/***/ "./Hooks/useWindowDimension.js":
/*!*************************************!*\
  !*** ./Hooks/useWindowDimension.js ***!
  \*************************************/
/*! exports provided: useWindowDimension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useWindowDimension\", function() { return useWindowDimension; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\nfunction useWindowDimension() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(undefined),\n      clientWindow = _useState[0],\n      setClientWindow = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([window.innerWidth, window.innerHeight]),\n      dimension = _useState2[0],\n      setDimension = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setClientWindow(window);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (clientWindow !== undefined) {}\n\n    return function () {\n      return window.removeEventListener('resize', debouncedResizeHandler);\n    };\n  }, [clientWindow]); // Note this empty array. this effect should run only on mount and unmount\n\n  return dimension;\n}\n\n_s(useWindowDimension, \"BdDvnIBGq8lT/ss0Ck7TNtOL9e0=\");\n\nfunction debounce(fn, ms) {\n  var _arguments = arguments,\n      _this = this;\n\n  var timer;\n  return function (_) {\n    clearTimeout(timer);\n    timer = setTimeout(function (_) {\n      timer = null;\n      fn.apply(_this, _arguments);\n    }, ms);\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vSG9va3MvdXNlV2luZG93RGltZW5zaW9uLmpzPzViNDciXSwibmFtZXMiOlsidXNlV2luZG93RGltZW5zaW9uIiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJjbGllbnRXaW5kb3ciLCJzZXRDbGllbnRXaW5kb3ciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkaW1lbnNpb24iLCJzZXREaW1lbnNpb24iLCJ1c2VFZmZlY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGVib3VuY2VkUmVzaXplSGFuZGxlciIsImRlYm91bmNlIiwiZm4iLCJtcyIsInRpbWVyIiwiXyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJhcHBseSIsImFyZ3VtZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxTQUFTQSxrQkFBVCxHQUE4QjtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDQyxTQUFELENBRGI7QUFBQSxNQUM1QkMsWUFENEI7QUFBQSxNQUNkQyxlQURjOztBQUFBLG1CQUdESCxzREFBUSxDQUFDLENBQ3pDSSxNQUFNLENBQUNDLFVBRGtDLEVBRXpDRCxNQUFNLENBQUNFLFdBRmtDLENBQUQsQ0FIUDtBQUFBLE1BRzVCQyxTQUg0QjtBQUFBLE1BR2pCQyxZQUhpQjs7QUFRbkNDLHlEQUFTLENBQUMsWUFBTTtBQUNkTixtQkFBZSxDQUFDQyxNQUFELENBQWY7QUFDRCxHQUZRLEVBRVAsRUFGTyxDQUFUO0FBSUFLLHlEQUFTLENBQUMsWUFBTTtBQUNmLFFBQUdQLFlBQVksS0FBS0QsU0FBcEIsRUFBK0IsQ0FFOUI7O0FBQ0EsV0FBTztBQUFBLGFBQU1HLE1BQU0sQ0FBQ00sbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNDLHNCQUFyQyxDQUFOO0FBQUEsS0FBUDtBQUNELEdBTFEsRUFLTixDQUFDVCxZQUFELENBTE0sQ0FBVCxDQVptQyxDQWlCZjs7QUFFcEIsU0FBT0ssU0FBUDtBQUNEOztHQXBCZVIsa0I7O0FBc0JoQixTQUFTYSxRQUFULENBQWtCQyxFQUFsQixFQUFzQkMsRUFBdEIsRUFBMEI7QUFBQTtBQUFBOztBQUN4QixNQUFJQyxLQUFKO0FBQ0EsU0FBTyxVQUFBQyxDQUFDLEVBQUk7QUFDVkMsZ0JBQVksQ0FBQ0YsS0FBRCxDQUFaO0FBQ0FBLFNBQUssR0FBR0csVUFBVSxDQUFDLFVBQUFGLENBQUMsRUFBSTtBQUN0QkQsV0FBSyxHQUFHLElBQVI7QUFDQUYsUUFBRSxDQUFDTSxLQUFILENBQVMsS0FBVCxFQUFlQyxVQUFmO0FBQ0QsS0FIaUIsRUFHZk4sRUFIZSxDQUFsQjtBQUlELEdBTkQ7QUFPRCIsImZpbGUiOiIuL0hvb2tzL3VzZVdpbmRvd0RpbWVuc2lvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlV2luZG93RGltZW5zaW9uKCkge1xuICBjb25zdCBbY2xpZW50V2luZG93LCBzZXRDbGllbnRXaW5kb3ddID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcblxuICBjb25zdCBbZGltZW5zaW9uLCBzZXREaW1lbnNpb25dID0gdXNlU3RhdGUoW1xuICAgIHdpbmRvdy5pbm5lcldpZHRoLFxuICAgIHdpbmRvdy5pbm5lckhlaWdodCxcbiAgXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDbGllbnRXaW5kb3cod2luZG93KVxuICB9LFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICBpZihjbGllbnRXaW5kb3cgIT09IHVuZGVmaW5lZCkge1xuICAgICBcbiAgIH1cbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlZFJlc2l6ZUhhbmRsZXIpO1xuICB9LCBbY2xpZW50V2luZG93XSk7IC8vIE5vdGUgdGhpcyBlbXB0eSBhcnJheS4gdGhpcyBlZmZlY3Qgc2hvdWxkIHJ1biBvbmx5IG9uIG1vdW50IGFuZCB1bm1vdW50XG5cbiAgcmV0dXJuIGRpbWVuc2lvbjtcbn1cblxuZnVuY3Rpb24gZGVib3VuY2UoZm4sIG1zKSB7XG4gIGxldCB0aW1lcjtcbiAgcmV0dXJuIF8gPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KF8gPT4ge1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9LCBtcyk7XG4gIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Hooks/useWindowDimension.js\n");

/***/ })

})