webpackHotUpdate_N_E("pages/_app",{

/***/ "./Components/HOC/Layout.js":
/*!**********************************!*\
  !*** ./Components/HOC/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navigation_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navigation/Toolbar/Toolbar */ \"./Components/Navigation/Toolbar/Toolbar.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./Components/HOC/Footer.js\");\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n/* harmony import */ var _StyledComponents_layoutItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../StyledComponents/layoutItems */ \"./StyledComponents/layoutItems.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/HOC/Layout.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Layout = function Layout(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      visible = _useState[0],\n      setVisible = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      currentPositionY = _useState2[0],\n      setCurrentPositionY = _useState2[1];\n\n  Object(_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_3__[\"useScrollPosition\"])(function (_ref) {\n    var prevPos = _ref.prevPos,\n        currPos = _ref.currPos;\n    setCurrentPositionY(prevPos.y);\n    var isShow = currPos.y > prevPos.y;\n    if (isShow !== visible) setVisible(isShow);\n  }, [visible], false, false, 150);\n  return __jsx(_StyledComponents_layoutItems__WEBPACK_IMPORTED_MODULE_4__[\"Wrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(_Navigation_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    visible: visible,\n    currPos: currentPositionY,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }), __jsx(\"main\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, props.children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Layout, \"K7WV/Tu7YeHWN2zLrXULCsAZ82s=\", false, function () {\n  return [_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_3__[\"useScrollPosition\"]];\n});\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9IT0MvTGF5b3V0LmpzP2U1MTUiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiY3VycmVudFBvc2l0aW9uWSIsInNldEN1cnJlbnRQb3NpdGlvblkiLCJ1c2VTY3JvbGxQb3NpdGlvbiIsInByZXZQb3MiLCJjdXJyUG9zIiwieSIsImlzU2hvdyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLElBQUQsQ0FEZDtBQUFBLE1BQ2pCQyxPQURpQjtBQUFBLE1BQ1JDLFVBRFE7O0FBQUEsbUJBRXdCRixzREFBUSxDQUFDLElBQUQsQ0FGaEM7QUFBQSxNQUVqQkcsZ0JBRmlCO0FBQUEsTUFFQ0MsbUJBRkQ7O0FBSXhCQyxvRkFBaUIsQ0FDZixnQkFBMEI7QUFBQSxRQUF2QkMsT0FBdUIsUUFBdkJBLE9BQXVCO0FBQUEsUUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ3hCSCx1QkFBbUIsQ0FBQ0UsT0FBTyxDQUFDRSxDQUFULENBQW5CO0FBQ0EsUUFBTUMsTUFBTSxHQUFHRixPQUFPLENBQUNDLENBQVIsR0FBWUYsT0FBTyxDQUFDRSxDQUFuQztBQUNBLFFBQUlDLE1BQU0sS0FBS1IsT0FBZixFQUF3QkMsVUFBVSxDQUFDTyxNQUFELENBQVY7QUFDekIsR0FMYyxFQU1mLENBQUNSLE9BQUQsQ0FOZSxFQU9mLEtBUGUsRUFRZixLQVJlLEVBU2YsR0FUZSxDQUFqQjtBQVlBLFNBQ0UsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUFTLFdBQU8sRUFBRUEsT0FBbEI7QUFBNEIsV0FBTyxFQUFFRSxnQkFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPSixLQUFLLENBQUNXLFFBQWIsQ0FGRixFQUdFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREY7QUFPRCxDQXZCRDs7R0FBTVosTTtVQUlKTywwRTs7O0tBSklQLE07QUF5QlNBLHFFQUFmIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9IT0MvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiLi4vTmF2aWdhdGlvbi9Ub29sYmFyL1Rvb2xiYXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5pbXBvcnQgeyB1c2VTY3JvbGxQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9Ib29rcy91c2VTY3JvbGxQb3NpdGlvblwiO1xuaW1wb3J0IHtXcmFwcGVyfSBmcm9tICcuLi8uLi9TdHlsZWRDb21wb25lbnRzL2xheW91dEl0ZW1zJ1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtjdXJyZW50UG9zaXRpb25ZLCBzZXRDdXJyZW50UG9zaXRpb25ZXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgdXNlU2Nyb2xsUG9zaXRpb24oXG4gICAgKHsgcHJldlBvcywgY3VyclBvcyB9KSA9PiB7XG4gICAgICBzZXRDdXJyZW50UG9zaXRpb25ZKHByZXZQb3MueSlcbiAgICAgIGNvbnN0IGlzU2hvdyA9IGN1cnJQb3MueSA+IHByZXZQb3MueTtcbiAgICAgIGlmIChpc1Nob3cgIT09IHZpc2libGUpIHNldFZpc2libGUoaXNTaG93KTtcbiAgICB9LFxuICAgIFt2aXNpYmxlXSxcbiAgICBmYWxzZSxcbiAgICBmYWxzZSxcbiAgICAxNTBcbiAgKTtcbiAgXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8VG9vbGJhciB2aXNpYmxlPXt2aXNpYmxlfSAgY3VyclBvcz17Y3VycmVudFBvc2l0aW9uWX0vPlxuICAgICAgPG1haW4+e3Byb3BzLmNoaWxkcmVufTwvbWFpbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/HOC/Layout.js\n");

/***/ })

})