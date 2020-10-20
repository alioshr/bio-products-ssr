webpackHotUpdate_N_E("pages/product/[product]",{

/***/ "./Hooks/useWindowDimension.js":
/*!*************************************!*\
  !*** ./Hooks/useWindowDimension.js ***!
  \*************************************/
/*! exports provided: useWindowDimension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useWindowDimension\", function() { return useWindowDimension; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\nfunction useWindowDimension() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(undefined),\n      clientWindow = _useState[0],\n      setClientWindow = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([window.innerWidth, window.innerHeight]),\n      dimension = _useState2[0],\n      setDimension = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setClientWindow(window);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (clientWindow !== undefined) {\n      var _debouncedResizeHandler = debounce(function () {\n        setDimension([clientWindow.innerWidth, window.innerHeight]);\n      }, 100); // 100ms\n\n\n      window.addEventListener('resize', _debouncedResizeHandler);\n    }\n\n    return function () {\n      return window.removeEventListener('resize', debouncedResizeHandler);\n    };\n  }, [clientWindow]); // Note this empty array. this effect should run only on mount and unmount\n\n  return dimension;\n}\n\n_s(useWindowDimension, \"BdDvnIBGq8lT/ss0Ck7TNtOL9e0=\");\n\nfunction debounce(fn, ms) {\n  var _arguments = arguments,\n      _this = this;\n\n  var timer;\n  return function (_) {\n    clearTimeout(timer);\n    timer = setTimeout(function (_) {\n      timer = null;\n      fn.apply(_this, _arguments);\n    }, ms);\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vSG9va3MvdXNlV2luZG93RGltZW5zaW9uLmpzPzViNDciXSwibmFtZXMiOlsidXNlV2luZG93RGltZW5zaW9uIiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJjbGllbnRXaW5kb3ciLCJzZXRDbGllbnRXaW5kb3ciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkaW1lbnNpb24iLCJzZXREaW1lbnNpb24iLCJ1c2VFZmZlY3QiLCJkZWJvdW5jZWRSZXNpemVIYW5kbGVyIiwiZGVib3VuY2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZuIiwibXMiLCJ0aW1lciIsIl8iLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJhcmd1bWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sU0FBU0Esa0JBQVQsR0FBOEI7QUFBQTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQ0MsU0FBRCxDQURiO0FBQUEsTUFDNUJDLFlBRDRCO0FBQUEsTUFDZEMsZUFEYzs7QUFBQSxtQkFHREgsc0RBQVEsQ0FBQyxDQUN6Q0ksTUFBTSxDQUFDQyxVQURrQyxFQUV6Q0QsTUFBTSxDQUFDRSxXQUZrQyxDQUFELENBSFA7QUFBQSxNQUc1QkMsU0FINEI7QUFBQSxNQUdqQkMsWUFIaUI7O0FBUW5DQyx5REFBUyxDQUFDLFlBQU07QUFDZE4sbUJBQWUsQ0FBQ0MsTUFBRCxDQUFmO0FBQ0QsR0FGUSxFQUVQLEVBRk8sQ0FBVDtBQUlBSyx5REFBUyxDQUFDLFlBQU07QUFDZixRQUFHUCxZQUFZLEtBQUtELFNBQXBCLEVBQStCO0FBQzlCLFVBQU1TLHVCQUFzQixHQUFHQyxRQUFRLENBQUMsWUFBTTtBQUM1Q0gsb0JBQVksQ0FBQyxDQUFDTixZQUFZLENBQUNHLFVBQWQsRUFBMEJELE1BQU0sQ0FBQ0UsV0FBakMsQ0FBRCxDQUFaO0FBQ0QsT0FGc0MsRUFFcEMsR0FGb0MsQ0FBdkMsQ0FEOEIsQ0FHckI7OztBQUNURixZQUFNLENBQUNRLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDRix1QkFBbEM7QUFDQTs7QUFDQSxXQUFPO0FBQUEsYUFBTU4sTUFBTSxDQUFDUyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0gsc0JBQXJDLENBQU47QUFBQSxLQUFQO0FBQ0QsR0FSUSxFQVFOLENBQUNSLFlBQUQsQ0FSTSxDQUFULENBWm1DLENBb0JmOztBQUVwQixTQUFPSyxTQUFQO0FBQ0Q7O0dBdkJlUixrQjs7QUF5QmhCLFNBQVNZLFFBQVQsQ0FBa0JHLEVBQWxCLEVBQXNCQyxFQUF0QixFQUEwQjtBQUFBO0FBQUE7O0FBQ3hCLE1BQUlDLEtBQUo7QUFDQSxTQUFPLFVBQUFDLENBQUMsRUFBSTtBQUNWQyxnQkFBWSxDQUFDRixLQUFELENBQVo7QUFDQUEsU0FBSyxHQUFHRyxVQUFVLENBQUMsVUFBQUYsQ0FBQyxFQUFJO0FBQ3RCRCxXQUFLLEdBQUcsSUFBUjtBQUNBRixRQUFFLENBQUNNLEtBQUgsQ0FBUyxLQUFULEVBQWVDLFVBQWY7QUFDRCxLQUhpQixFQUdmTixFQUhlLENBQWxCO0FBSUQsR0FORDtBQU9EIiwiZmlsZSI6Ii4vSG9va3MvdXNlV2luZG93RGltZW5zaW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VXaW5kb3dEaW1lbnNpb24oKSB7XG4gIGNvbnN0IFtjbGllbnRXaW5kb3csIHNldENsaWVudFdpbmRvd10gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuXG4gIGNvbnN0IFtkaW1lbnNpb24sIHNldERpbWVuc2lvbl0gPSB1c2VTdGF0ZShbXG4gICAgd2luZG93LmlubmVyV2lkdGgsXG4gICAgd2luZG93LmlubmVySGVpZ2h0LFxuICBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENsaWVudFdpbmRvdyh3aW5kb3cpXG4gIH0sW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgIGlmKGNsaWVudFdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgZGVib3VuY2VkUmVzaXplSGFuZGxlciA9IGRlYm91bmNlKCgpID0+IHtcbiAgICAgIHNldERpbWVuc2lvbihbY2xpZW50V2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodF0pO1xuICAgIH0sIDEwMCk7IC8vIDEwMG1zXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlZFJlc2l6ZUhhbmRsZXIpO1xuICAgfVxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2VkUmVzaXplSGFuZGxlcik7XG4gIH0sIFtjbGllbnRXaW5kb3ddKTsgLy8gTm90ZSB0aGlzIGVtcHR5IGFycmF5LiB0aGlzIGVmZmVjdCBzaG91bGQgcnVuIG9ubHkgb24gbW91bnQgYW5kIHVubW91bnRcblxuICByZXR1cm4gZGltZW5zaW9uO1xufVxuXG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgbXMpIHtcbiAgbGV0IHRpbWVyO1xuICByZXR1cm4gXyA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoXyA9PiB7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0sIG1zKTtcbiAgfTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Hooks/useWindowDimension.js\n");

/***/ })

})