webpackHotUpdate_N_E("pages/index",{

/***/ "./Hooks/useWindowDimension.js":
/*!*************************************!*\
  !*** ./Hooks/useWindowDimension.js ***!
  \*************************************/
/*! exports provided: useWindowDimension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useWindowDimension\", function() { return useWindowDimension; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\nfunction useWindowDimension() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([window.innerWidth, window.innerHeight]),\n      dimension = _useState[0],\n      setDimension = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var debouncedResizeHandler = debounce(function () {\n      setDimension([window.innerWidth, window.innerHeight]);\n    }, 100); // 100ms\n\n    window.addEventListener('resize', debouncedResizeHandler);\n    return function () {\n      return window.removeEventListener('resize', debouncedResizeHandler);\n    };\n  }, []); // Note this empty array. this effect should run only on mount and unmount\n\n  return dimension;\n}\n\n_s(useWindowDimension, \"ho3EFADjgK6SuO7hx18d9cDd788=\");\n\nfunction debounce(fn, ms) {\n  var _arguments = arguments,\n      _this = this;\n\n  var timer;\n  return function (_) {\n    clearTimeout(timer);\n    timer = setTimeout(function (_) {\n      timer = null;\n      fn.apply(_this, _arguments);\n    }, ms);\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vSG9va3MvdXNlV2luZG93RGltZW5zaW9uLmpzPzViNDciXSwibmFtZXMiOlsidXNlV2luZG93RGltZW5zaW9uIiwidXNlU3RhdGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkaW1lbnNpb24iLCJzZXREaW1lbnNpb24iLCJ1c2VFZmZlY3QiLCJkZWJvdW5jZWRSZXNpemVIYW5kbGVyIiwiZGVib3VuY2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZuIiwibXMiLCJ0aW1lciIsIl8iLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJhcmd1bWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sU0FBU0Esa0JBQVQsR0FBOEI7QUFBQTs7QUFBQSxrQkFFREMsc0RBQVEsQ0FBQyxDQUN6Q0MsTUFBTSxDQUFDQyxVQURrQyxFQUV6Q0QsTUFBTSxDQUFDRSxXQUZrQyxDQUFELENBRlA7QUFBQSxNQUU1QkMsU0FGNEI7QUFBQSxNQUVqQkMsWUFGaUI7O0FBTW5DQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxzQkFBc0IsR0FBR0MsUUFBUSxDQUFDLFlBQU07QUFDNUNILGtCQUFZLENBQUMsQ0FBQ0osTUFBTSxDQUFDQyxVQUFSLEVBQW9CRCxNQUFNLENBQUNFLFdBQTNCLENBQUQsQ0FBWjtBQUNELEtBRnNDLEVBRXBDLEdBRm9DLENBQXZDLENBRGMsQ0FHTDs7QUFDVEYsVUFBTSxDQUFDUSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0Ysc0JBQWxDO0FBQ0EsV0FBTztBQUFBLGFBQU1OLE1BQU0sQ0FBQ1MsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNILHNCQUFyQyxDQUFOO0FBQUEsS0FBUDtBQUNELEdBTlEsRUFNTixFQU5NLENBQVQsQ0FObUMsQ0FZM0I7O0FBQ1IsU0FBT0gsU0FBUDtBQUNEOztHQWRlTCxrQjs7QUFnQmhCLFNBQVNTLFFBQVQsQ0FBa0JHLEVBQWxCLEVBQXNCQyxFQUF0QixFQUEwQjtBQUFBO0FBQUE7O0FBQ3hCLE1BQUlDLEtBQUo7QUFDQSxTQUFPLFVBQUFDLENBQUMsRUFBSTtBQUNWQyxnQkFBWSxDQUFDRixLQUFELENBQVo7QUFDQUEsU0FBSyxHQUFHRyxVQUFVLENBQUMsVUFBQUYsQ0FBQyxFQUFJO0FBQ3RCRCxXQUFLLEdBQUcsSUFBUjtBQUNBRixRQUFFLENBQUNNLEtBQUgsQ0FBUyxLQUFULEVBQWVDLFVBQWY7QUFDRCxLQUhpQixFQUdmTixFQUhlLENBQWxCO0FBSUQsR0FORDtBQU9EIiwiZmlsZSI6Ii4vSG9va3MvdXNlV2luZG93RGltZW5zaW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VXaW5kb3dEaW1lbnNpb24oKSB7XG4gIFxuICBjb25zdCBbZGltZW5zaW9uLCBzZXREaW1lbnNpb25dID0gdXNlU3RhdGUoW1xuICAgIHdpbmRvdy5pbm5lcldpZHRoLFxuICAgIHdpbmRvdy5pbm5lckhlaWdodCxcbiAgXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGVib3VuY2VkUmVzaXplSGFuZGxlciA9IGRlYm91bmNlKCgpID0+IHtcbiAgICAgIHNldERpbWVuc2lvbihbd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodF0pO1xuICAgIH0sIDEwMCk7IC8vIDEwMG1zXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlZFJlc2l6ZUhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2VkUmVzaXplSGFuZGxlcik7XG4gIH0sIFtdKTsgLy8gTm90ZSB0aGlzIGVtcHR5IGFycmF5LiB0aGlzIGVmZmVjdCBzaG91bGQgcnVuIG9ubHkgb24gbW91bnQgYW5kIHVubW91bnRcbiAgcmV0dXJuIGRpbWVuc2lvbjtcbn1cblxuZnVuY3Rpb24gZGVib3VuY2UoZm4sIG1zKSB7XG4gIGxldCB0aW1lcjtcbiAgcmV0dXJuIF8gPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KF8gPT4ge1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9LCBtcyk7XG4gIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Hooks/useWindowDimension.js\n");

/***/ })

})