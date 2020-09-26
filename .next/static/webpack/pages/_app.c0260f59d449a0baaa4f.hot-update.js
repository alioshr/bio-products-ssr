webpackHotUpdate_N_E("pages/_app",{

/***/ "./StyledComponents/dropdownItems.js":
/*!*******************************************!*\
  !*** ./StyledComponents/dropdownItems.js ***!
  \*******************************************/
/*! exports provided: Wrapper, List, MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return List; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuItem\", function() { return MenuItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/.pnpm/registry.npmjs.org/styled-components/5.2.0_2aeffab7d644b928458b96d6399100c6/node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  \", \";\\n  margin: 1rem;\\n  font-weight: bold;\\n  font-size: 2.2rem;\\n  a {\\n    text-align: center;\\n    color: white;\\n    padding: 2rem;\\n  }\\n  &,\\n  a {\\n    width: 100vw;\\n  }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  \", \";\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  \", \";\\n  background: \", \";\\n  transition: 500ms all ease-out;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: fixed;\\n  \", \";\\n  background: linear-gradient(to top, rgba(86, 20, 238, 0.5) 100%, transparent), \", \" center center/cover no-repeat fixed;\\n\\n    \\n  \", \";\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 100vw;\\n  height: 100vh;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar navItemsFlexStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject());\nvar wrapperDims = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject2());\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3(), wrapperDims, function (_ref) {\n  var withBackground = _ref.withBackground;\n  return withBackground ? \"url(\".concat(withBackground, \")\") : \"transparent\";\n}, navItemsFlexStyles);\nvar List = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ul(_templateObject4(), wrapperDims, navItemsFlexStyles, function (_ref2) {\n  var withBackground = _ref2.withBackground;\n  return withBackground ? \"transparent\" : rgba(86, 20, 238, 1);\n});\nvar MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].li(_templateObject5(), navItemsFlexStyles);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vU3R5bGVkQ29tcG9uZW50cy9kcm9wZG93bkl0ZW1zLmpzPzIzY2IiXSwibmFtZXMiOlsibmF2SXRlbXNGbGV4U3R5bGVzIiwiY3NzIiwid3JhcHBlckRpbXMiLCJXcmFwcGVyIiwic3R5bGVkIiwiZGl2Iiwid2l0aEJhY2tncm91bmQiLCJMaXN0IiwidWwiLCJyZ2JhIiwiTWVudUl0ZW0iLCJsaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLDZEQUFILG1CQUF4QjtBQU9BLElBQU1DLFdBQVcsR0FBR0QsNkRBQUgsb0JBQWpCO0FBS08sSUFBTUUsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLHFCQUVoQkgsV0FGZ0IsRUFHK0Q7QUFBQSxNQUFHSSxjQUFILFFBQUdBLGNBQUg7QUFBQSxTQUMvRUEsY0FBYyxpQkFBVUEsY0FBVixTQUE4QixhQURtQztBQUFBLENBSC9ELEVBT2hCTixrQkFQZ0IsQ0FBYjtBQVVBLElBQU1PLElBQUksR0FBR0gseURBQU0sQ0FBQ0ksRUFBVixxQkFDYk4sV0FEYSxFQUtiRixrQkFMYSxFQU1EO0FBQUEsTUFBRU0sY0FBRixTQUFFQSxjQUFGO0FBQUEsU0FBc0JBLGNBQWMsR0FBRyxhQUFILEdBQW1CRyxJQUFJLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxHQUFULEVBQWMsQ0FBZCxDQUEzRDtBQUFBLENBTkMsQ0FBVjtBQVVBLElBQU1DLFFBQVEsR0FBR04seURBQU0sQ0FBQ08sRUFBVixxQkFDakJYLGtCQURpQixDQUFkIiwiZmlsZSI6Ii4vU3R5bGVkQ29tcG9uZW50cy9kcm9wZG93bkl0ZW1zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgbmF2SXRlbXNGbGV4U3R5bGVzID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IHdyYXBwZXJEaW1zID0gY3NzYFxuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG5gO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgJHt3cmFwcGVyRGltc307XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoODYsIDIwLCAyMzgsIDAuNSkgMTAwJSwgdHJhbnNwYXJlbnQpLCAkeyh7IHdpdGhCYWNrZ3JvdW5kIH0pID0+XG4gICAgd2l0aEJhY2tncm91bmQgPyBgdXJsKCR7d2l0aEJhY2tncm91bmR9KWAgOiBcInRyYW5zcGFyZW50XCJ9IGNlbnRlciBjZW50ZXIvY292ZXIgbm8tcmVwZWF0IGZpeGVkO1xuXG4gICAgXG4gICR7bmF2SXRlbXNGbGV4U3R5bGVzfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICAke3dyYXBwZXJEaW1zfTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICAke25hdkl0ZW1zRmxleFN0eWxlc307XG4gIGJhY2tncm91bmQ6ICR7KHt3aXRoQmFja2dyb3VuZH0pID0+IHdpdGhCYWNrZ3JvdW5kID8gXCJ0cmFuc3BhcmVudFwiIDogcmdiYSg4NiwgMjAsIDIzOCwgMSl9O1xuICB0cmFuc2l0aW9uOiA1MDBtcyBhbGwgZWFzZS1vdXQ7XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudUl0ZW0gPSBzdHlsZWQubGlgXG4gICR7bmF2SXRlbXNGbGV4U3R5bGVzfTtcbiAgbWFyZ2luOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIGEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgfVxuICAmLFxuICBhIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./StyledComponents/dropdownItems.js\n");

/***/ })

})