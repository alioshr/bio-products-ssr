webpackHotUpdate_N_E("pages/index",{

/***/ "./Hooks/useWindowDimension.js":
/*!*************************************!*\
  !*** ./Hooks/useWindowDimension.js ***!
  \*************************************/
/*! exports provided: useWindowDimension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useWindowDimension\", function() { return useWindowDimension; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\nfunction useWindowDimension() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(undefined),\n      clientWindow = _useState[0],\n      setClientWindow = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      dimension = _useState2[0],\n      setDimension = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setClientWindow(window);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (clientWindow !== undefined) {\n      var _debouncedResizeHandler = debounce(function () {\n        setDimension([clientWindow.innerWidth, clientWindow.innerHeight]);\n      }, 100); // 100ms\n\n\n      window.addEventListener('resize', _debouncedResizeHandler);\n    }\n\n    return function () {\n      return window.removeEventListener('resize', debouncedResizeHandler);\n    };\n  }, [clientWindow]); // Note this empty array. this effect should run only on mount and unmount\n\n  return dimension;\n}\n\n_s(useWindowDimension, \"k+rHsNbWK5oqnFgV/XJZ0x4xads=\");\n\nfunction debounce(fn, ms) {\n  var _arguments = arguments,\n      _this = this;\n\n  var timer;\n  return function (_) {\n    clearTimeout(timer);\n    timer = setTimeout(function (_) {\n      timer = null;\n      fn.apply(_this, _arguments);\n    }, ms);\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vSG9va3MvdXNlV2luZG93RGltZW5zaW9uLmpzPzViNDciXSwibmFtZXMiOlsidXNlV2luZG93RGltZW5zaW9uIiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJjbGllbnRXaW5kb3ciLCJzZXRDbGllbnRXaW5kb3ciLCJkaW1lbnNpb24iLCJzZXREaW1lbnNpb24iLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJkZWJvdW5jZWRSZXNpemVIYW5kbGVyIiwiZGVib3VuY2UiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZuIiwibXMiLCJ0aW1lciIsIl8iLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJhcmd1bWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sU0FBU0Esa0JBQVQsR0FBOEI7QUFBQTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQ0MsU0FBRCxDQURiO0FBQUEsTUFDNUJDLFlBRDRCO0FBQUEsTUFDZEMsZUFEYzs7QUFBQSxtQkFHREgsc0RBQVEsQ0FBQyxFQUFELENBSFA7QUFBQSxNQUc1QkksU0FINEI7QUFBQSxNQUdqQkMsWUFIaUI7O0FBTW5DQyx5REFBUyxDQUFDLFlBQU07QUFDZEgsbUJBQWUsQ0FBQ0ksTUFBRCxDQUFmO0FBQ0QsR0FGUSxFQUVQLEVBRk8sQ0FBVDtBQUlBRCx5REFBUyxDQUFDLFlBQU07QUFDZixRQUFHSixZQUFZLEtBQUtELFNBQXBCLEVBQStCO0FBQzlCLFVBQU1PLHVCQUFzQixHQUFHQyxRQUFRLENBQUMsWUFBTTtBQUM1Q0osb0JBQVksQ0FBQyxDQUFDSCxZQUFZLENBQUNRLFVBQWQsRUFBMEJSLFlBQVksQ0FBQ1MsV0FBdkMsQ0FBRCxDQUFaO0FBQ0QsT0FGc0MsRUFFcEMsR0FGb0MsQ0FBdkMsQ0FEOEIsQ0FHckI7OztBQUNUSixZQUFNLENBQUNLLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSix1QkFBbEM7QUFDQTs7QUFDQSxXQUFPO0FBQUEsYUFBTUQsTUFBTSxDQUFDTSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0wsc0JBQXJDLENBQU47QUFBQSxLQUFQO0FBQ0QsR0FSUSxFQVFOLENBQUNOLFlBQUQsQ0FSTSxDQUFULENBVm1DLENBa0JmOztBQUVwQixTQUFPRSxTQUFQO0FBQ0Q7O0dBckJlTCxrQjs7QUF1QmhCLFNBQVNVLFFBQVQsQ0FBa0JLLEVBQWxCLEVBQXNCQyxFQUF0QixFQUEwQjtBQUFBO0FBQUE7O0FBQ3hCLE1BQUlDLEtBQUo7QUFDQSxTQUFPLFVBQUFDLENBQUMsRUFBSTtBQUNWQyxnQkFBWSxDQUFDRixLQUFELENBQVo7QUFDQUEsU0FBSyxHQUFHRyxVQUFVLENBQUMsVUFBQUYsQ0FBQyxFQUFJO0FBQ3RCRCxXQUFLLEdBQUcsSUFBUjtBQUNBRixRQUFFLENBQUNNLEtBQUgsQ0FBUyxLQUFULEVBQWVDLFVBQWY7QUFDRCxLQUhpQixFQUdmTixFQUhlLENBQWxCO0FBSUQsR0FORDtBQU9EIiwiZmlsZSI6Ii4vSG9va3MvdXNlV2luZG93RGltZW5zaW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VXaW5kb3dEaW1lbnNpb24oKSB7XG4gIGNvbnN0IFtjbGllbnRXaW5kb3csIHNldENsaWVudFdpbmRvd10gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuXG4gIGNvbnN0IFtkaW1lbnNpb24sIHNldERpbWVuc2lvbl0gPSB1c2VTdGF0ZShbXG4gIF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q2xpZW50V2luZG93KHdpbmRvdylcbiAgfSxbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgaWYoY2xpZW50V2luZG93ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBkZWJvdW5jZWRSZXNpemVIYW5kbGVyID0gZGVib3VuY2UoKCkgPT4ge1xuICAgICAgc2V0RGltZW5zaW9uKFtjbGllbnRXaW5kb3cuaW5uZXJXaWR0aCwgY2xpZW50V2luZG93LmlubmVySGVpZ2h0XSk7XG4gICAgfSwgMTAwKTsgLy8gMTAwbXNcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2VkUmVzaXplSGFuZGxlcik7XG4gICB9XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZWRSZXNpemVIYW5kbGVyKTtcbiAgfSwgW2NsaWVudFdpbmRvd10pOyAvLyBOb3RlIHRoaXMgZW1wdHkgYXJyYXkuIHRoaXMgZWZmZWN0IHNob3VsZCBydW4gb25seSBvbiBtb3VudCBhbmQgdW5tb3VudFxuXG4gIHJldHVybiBkaW1lbnNpb247XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZuLCBtcykge1xuICBsZXQgdGltZXI7XG4gIHJldHVybiBfID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHRpbWVyID0gc2V0VGltZW91dChfID0+IHtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSwgbXMpO1xuICB9O1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Hooks/useWindowDimension.js\n");

/***/ })

})