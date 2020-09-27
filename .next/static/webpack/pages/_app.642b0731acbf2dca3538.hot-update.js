webpackHotUpdate_N_E("pages/_app",{

/***/ "./Components/HOC/Layout.js":
/*!**********************************!*\
  !*** ./Components/HOC/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navigation_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navigation/Toolbar/Toolbar */ \"./Components/Navigation/Toolbar/Toolbar.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./Components/HOC/Footer.js\");\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n/* harmony import */ var _StyledComponents_layoutItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../StyledComponents/layoutItems */ \"./StyledComponents/layoutItems.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/HOC/Layout.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Layout = function Layout(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      visible = _useState[0],\n      setVisible = _useState[1];\n\n  Object(_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_3__[\"useScrollPosition\"])(function (_ref) {\n    var prevPos = _ref.prevPos,\n        currPos = _ref.currPos;\n    console.log();\n    var isShow = currPos.y > prevPos.y;\n    if (isShow !== visible) setVisible(isShow);\n  }, [visible], false, false, 150);\n  return __jsx(_StyledComponents_layoutItems__WEBPACK_IMPORTED_MODULE_4__[\"Wrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(_Navigation_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    visible: visible,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }), __jsx(\"main\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, props.children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Layout, \"W+RzV5ubOayVPSQpNxXuXvJB7as=\", false, function () {\n  return [_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_3__[\"useScrollPosition\"]];\n});\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9IT0MvTGF5b3V0LmpzP2U1MTUiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU2Nyb2xsUG9zaXRpb24iLCJwcmV2UG9zIiwiY3VyclBvcyIsImNvbnNvbGUiLCJsb2ciLCJpc1Nob3ciLCJ5IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUMsSUFBRCxDQURkO0FBQUEsTUFDakJDLE9BRGlCO0FBQUEsTUFDUkMsVUFEUTs7QUFHeEJDLG9GQUFpQixDQUNmLGdCQUEwQjtBQUFBLFFBQXZCQyxPQUF1QixRQUF2QkEsT0FBdUI7QUFBQSxRQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDeEJDLFdBQU8sQ0FBQ0MsR0FBUjtBQUNBLFFBQU1DLE1BQU0sR0FBR0gsT0FBTyxDQUFDSSxDQUFSLEdBQVlMLE9BQU8sQ0FBQ0ssQ0FBbkM7QUFDQSxRQUFJRCxNQUFNLEtBQUtQLE9BQWYsRUFBd0JDLFVBQVUsQ0FBQ00sTUFBRCxDQUFWO0FBQ3pCLEdBTGMsRUFNZixDQUFDUCxPQUFELENBTmUsRUFPZixLQVBlLEVBUWYsS0FSZSxFQVNmLEdBVGUsQ0FBakI7QUFZQSxTQUNFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbUVBQUQ7QUFBUyxXQUFPLEVBQUVBLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0YsS0FBSyxDQUFDVyxRQUFiLENBRkYsRUFHRSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGO0FBT0QsQ0F0QkQ7O0dBQU1aLE07VUFHSkssMEU7OztLQUhJTCxNO0FBd0JTQSxxRUFBZiIsImZpbGUiOiIuL0NvbXBvbmVudHMvSE9DL0xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIi4uL05hdmlnYXRpb24vVG9vbGJhci9Ub29sYmFyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuaW1wb3J0IHsgdXNlU2Nyb2xsUG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vSG9va3MvdXNlU2Nyb2xsUG9zaXRpb25cIjtcbmltcG9ydCB7V3JhcHBlcn0gZnJvbSAnLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9sYXlvdXRJdGVtcydcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZVNjcm9sbFBvc2l0aW9uKFxuICAgICh7IHByZXZQb3MsIGN1cnJQb3MgfSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coKVxuICAgICAgY29uc3QgaXNTaG93ID0gY3VyclBvcy55ID4gcHJldlBvcy55O1xuICAgICAgaWYgKGlzU2hvdyAhPT0gdmlzaWJsZSkgc2V0VmlzaWJsZShpc1Nob3cpO1xuICAgIH0sXG4gICAgW3Zpc2libGVdLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIDE1MFxuICApO1xuICBcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxUb29sYmFyIHZpc2libGU9e3Zpc2libGV9ICAvPlxuICAgICAgPG1haW4+e3Byb3BzLmNoaWxkcmVufTwvbWFpbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/HOC/Layout.js\n");

/***/ })

})