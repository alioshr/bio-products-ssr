webpackHotUpdate_N_E("pages/_app",{

/***/ "./StyledComponents/toolbarItems.js":
/*!******************************************!*\
  !*** ./StyledComponents/toolbarItems.js ***!
  \******************************************/
/*! exports provided: NavigationPanel, HBWr, HBInnerWr, HBSpan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationPanel\", function() { return NavigationPanel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HBWr\", function() { return HBWr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HBInnerWr\", function() { return HBInnerWr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HBSpan\", function() { return HBSpan; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/.pnpm/registry.npmjs.org/styled-components/5.2.0_2aeffab7d644b928458b96d6399100c6/node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Library_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Library/mixins */ \"./StyledComponents/Library/mixins.js\");\n/* harmony import */ var _Library_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Library/variables */ \"./StyledComponents/Library/variables.js\");\n\n\nfunction _templateObject7() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n @include toolbarIcon(1, 1, null, null);\\n  width: 3.2rem;\\n  height: 3.2rem;\\n  border-radius: 50%;\\n  background-color: #fdf3e6;\\n  z-index: 35;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\\n  & li, \\n  & a, \\n  & svg {\\n    margin-right: 0;\\n    width: 44px;\\n    height: 42px;\\n  }\\n\\n  &__active {\\n\\n    background-color: #f29b38;\\n    & path {\\n      fill: white;\\n    }\\n  }\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 80%;\\n  height: 4px;\\n  background-color: #f29b38;\\n  border-radius: 10px;\\n  transition: all 0.5s ease-in-out;\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-evenly;\\n  align-items: center;\\n  width: 2rem;\\n  height: 2rem;\\n  z-index: 30;\\n  cursor: pointer;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      background-color: \", \";\\n      \", \"\\n    \"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  \", \";\\n  width: 3.2rem;\\n  height: 3.2rem;\\n  border-radius: 50%;\\n  background-color: #fdf3e6;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  z-index: 35;\\n  @media (min-width: 40rem) {\\n    display: none;\\n  }\\n  \", \"\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n        background-color: #f29b38;\\n        & path {\\n          fill: white;\\n        }\\n\\n        &:hover {\\n          background-color: #f29b38;\\n\\n          & path {\\n            fill: white;\\n          }\\n        }\\n      \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: none;\\n\\n  @media (min-width: 40rem) {\\n    \", \";\\n    width: 9rem;\\n    height: 4rem;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    background-color: #fdf3e6;\\n    border-radius: 35px;\\n    z-index: 35;\\n    transition: all 500ms ease-in;\\n\\n    &:hover {\\n      background-color: rgb(221, 193, 221);\\n    }\\n\\n    \", \"\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar NavigationPanel = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject(), Object(_Library_mixins__WEBPACK_IMPORTED_MODULE_2__[\"toolBarMixin\"])(1, 1), function (_ref) {\n  var active = _ref.active;\n  return active === true && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject2());\n});\nvar HBWr = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3(), Object(_Library_mixins__WEBPACK_IMPORTED_MODULE_2__[\"toolBarMixin\"])(null, 1, null, 1), function (_ref2) {\n  var active = _ref2.active;\n  return active === true && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject4(), _Library_variables__WEBPACK_IMPORTED_MODULE_3__[\"mainColors\"].accentOrange, _Library_mixins__WEBPACK_IMPORTED_MODULE_2__[\"hamburgerSpanActive\"]);\n});\nvar HBInnerWr = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5());\nvar HBSpan = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].span(_templateObject6());\nvar LogoWr = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].li(_templateObject7());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vU3R5bGVkQ29tcG9uZW50cy90b29sYmFySXRlbXMuanM/YTljYyJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uUGFuZWwiLCJzdHlsZWQiLCJkaXYiLCJ0b29sQmFyTWl4aW4iLCJhY3RpdmUiLCJjc3MiLCJIQldyIiwibWFpbkNvbG9ycyIsImFjY2VudE9yYW5nZSIsImhhbWJ1cmdlclNwYW5BY3RpdmUiLCJIQklubmVyV3IiLCJIQlNwYW4iLCJzcGFuIiwiTG9nb1dyIiwibGkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixvQkFJdEJDLG9FQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FKVSxFQW1CdEI7QUFBQSxNQUFHQyxNQUFILFFBQUdBLE1BQUg7QUFBQSxTQUNBQSxNQUFNLEtBQUssSUFBWCxJQUNBQyw2REFEQSxvQkFEQTtBQUFBLENBbkJzQixDQUFyQjtBQXNDQSxJQUFNQyxJQUFJLEdBQUdMLHlEQUFNLENBQUNDLEdBQVYscUJBQ2JDLG9FQUFZLENBQUMsSUFBRCxFQUFPLENBQVAsRUFBVSxJQUFWLEVBQWdCLENBQWhCLENBREMsRUFhYjtBQUFBLE1BQUdDLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFNBQ0FBLE1BQU0sS0FBSyxJQUFYLElBQ0FDLDZEQURBLHFCQUVzQkUsNkRBQVUsQ0FBQ0MsWUFGakMsRUFHSUMsbUVBSEosQ0FEQTtBQUFBLENBYmEsQ0FBVjtBQXFCQSxJQUFNQyxTQUFTLEdBQUdULHlEQUFNLENBQUNDLEdBQVYsb0JBQWY7QUFXQSxJQUFNUyxNQUFNLEdBQUdWLHlEQUFNLENBQUNXLElBQVYsb0JBQVo7QUFRUCxJQUFNQyxNQUFNLEdBQUdaLHlEQUFNLENBQUNhLEVBQVYsb0JBQVoiLCJmaWxlIjoiLi9TdHlsZWRDb21wb25lbnRzL3Rvb2xiYXJJdGVtcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB0b29sQmFyTWl4aW4sIGhhbWJ1cmdlclNwYW5BY3RpdmUgfSBmcm9tIFwiLi9MaWJyYXJ5L21peGluc1wiO1xuaW1wb3J0IHsgbWFpbkNvbG9ycyB9IGZyb20gXCIuL0xpYnJhcnkvdmFyaWFibGVzXCI7XG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uUGFuZWwgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MHJlbSkge1xuICAgICR7dG9vbEJhck1peGluKDEsIDEpfTtcbiAgICB3aWR0aDogOXJlbTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGYzZTY7XG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICB6LWluZGV4OiAzNTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbjtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMTkzLCAyMjEpO1xuICAgIH1cblxuICAgICR7KHsgYWN0aXZlIH0pID0+XG4gICAgICBhY3RpdmUgPT09IHRydWUgJiZcbiAgICAgIGNzc2BcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyOWIzODtcbiAgICAgICAgJiBwYXRoIHtcbiAgICAgICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMjliMzg7XG5cbiAgICAgICAgICAmIHBhdGgge1xuICAgICAgICAgICAgZmlsbDogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSEJXciA9IHN0eWxlZC5kaXZgXG4gICR7dG9vbEJhck1peGluKG51bGwsIDEsIG51bGwsIDEpfTtcbiAgd2lkdGg6IDMuMnJlbTtcbiAgaGVpZ2h0OiAzLjJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjNlNjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDM1O1xuICBAbWVkaWEgKG1pbi13aWR0aDogNDByZW0pIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICR7KHsgYWN0aXZlIH0pID0+XG4gICAgYWN0aXZlID09PSB0cnVlICYmXG4gICAgY3NzYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHttYWluQ29sb3JzLmFjY2VudE9yYW5nZX07XG4gICAgICAke2hhbWJ1cmdlclNwYW5BY3RpdmV9XG4gICAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBIQklubmVyV3IgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgei1pbmRleDogMzA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBIQlNwYW4gPSBzdHlsZWQuc3BhbmBcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjliMzg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuYDtcblxuY29uc3QgTG9nb1dyID0gc3R5bGVkLmxpYFxuIEBpbmNsdWRlIHRvb2xiYXJJY29uKDEsIDEsIG51bGwsIG51bGwpO1xuICB3aWR0aDogMy4ycmVtO1xuICBoZWlnaHQ6IDMuMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmM2U2O1xuICB6LWluZGV4OiAzNTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJiBsaSwgXG4gICYgYSwgXG4gICYgc3ZnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICB9XG5cbiAgJl9fYWN0aXZlIHtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMjliMzg7XG4gICAgJiBwYXRoIHtcbiAgICAgIGZpbGw6IHdoaXRlO1xuICAgIH1cbiAgfVxuYCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./StyledComponents/toolbarItems.js\n");

/***/ })

})