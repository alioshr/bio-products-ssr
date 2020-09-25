webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/navigationReducer.js":
/*!*********************************************!*\
  !*** ./store/reducers/navigationReducer.js ***!
  \*********************************************/
/*! exports provided: navigationReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navigationReducer\", function() { return navigationReducer; });\n/* harmony import */ var _Utilities_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities/utilities */ \"./Utilities/utilities.js\");\n/* harmony import */ var _actions_navigationActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/navigationActions */ \"./store/actions/navigationActions.js\");\n\n\nvar initialState = {\n  showNavItems: false,\n  navItems: [{\n    id: \"Home\",\n    label: \"INÍCIO\",\n    path: \"/\",\n    background: '/NavigationItems/Home/home.jpg'\n  }, {\n    id: \"login\",\n    label: \"LOGIN\",\n    path: \"/Login\",\n    background: '/NavigationItems/Login/login.jpg'\n  }, {\n    id: \"about\",\n    label: \"SOBRE NÓS\",\n    path: \"/sobre-nos\",\n    background: '/NavigationItems/About/about.jpg'\n  }, {\n    id: \"faq\",\n    label: \"FAQ\",\n    path: \"/faq\",\n    background: '/NavigationItems/Faq.faq.jpg'\n  }]\n};\n\nvar toggleSideDrawer = function toggleSideDrawer(state, action) {\n  console.log('got here');\n  return Object(_Utilities_utilities__WEBPACK_IMPORTED_MODULE_0__[\"setState\"])(state, {\n    showNavItems: !state.showNavItems\n  });\n};\n\nvar navigationReducer = function navigationReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n\n  var _ref = arguments.length > 1 ? arguments[1] : undefined,\n      type = _ref.type,\n      action = _ref.action;\n\n  switch (type) {\n    case _actions_navigationActions__WEBPACK_IMPORTED_MODULE_1__[\"SHOW_NAVIGATION_ITEMS\"]:\n      return toggleSideDrawer(state, action);\n\n    default:\n      return state;\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvbmF2aWdhdGlvblJlZHVjZXIuanM/ZjE3OSJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJzaG93TmF2SXRlbXMiLCJuYXZJdGVtcyIsImlkIiwibGFiZWwiLCJwYXRoIiwiYmFja2dyb3VuZCIsInRvZ2dsZVNpZGVEcmF3ZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIm5hdmlnYXRpb25SZWR1Y2VyIiwidHlwZSIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsY0FBWSxFQUFFLEtBREs7QUFFbkJDLFVBQVEsRUFBRSxDQUNSO0FBQ0VDLE1BQUUsRUFBRSxNQUROO0FBRUVDLFNBQUssRUFBRSxRQUZUO0FBR0VDLFFBQUksRUFBRSxHQUhSO0FBSUVDLGNBQVUsRUFBRTtBQUpkLEdBRFEsRUFPUDtBQUNDSCxNQUFFLEVBQUUsT0FETDtBQUVDQyxTQUFLLEVBQUUsT0FGUjtBQUdDQyxRQUFJLEVBQUUsUUFIUDtBQUlDQyxjQUFVLEVBQUU7QUFKYixHQVBPLEVBYVA7QUFDQ0gsTUFBRSxFQUFFLE9BREw7QUFFQ0MsU0FBSyxFQUFFLFdBRlI7QUFHQ0MsUUFBSSxFQUFFLFlBSFA7QUFJQ0MsY0FBVSxFQUFFO0FBSmIsR0FiTyxFQW1CUDtBQUNDSCxNQUFFLEVBQUUsS0FETDtBQUVDQyxTQUFLLEVBQUUsS0FGUjtBQUdDQyxRQUFJLEVBQUUsTUFIUDtBQUlDQyxjQUFVLEVBQUU7QUFKYixHQW5CTztBQUZTLENBQXJCOztBQThCQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUMxQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBLFNBQU9DLHFFQUFRLENBQUNKLEtBQUQsRUFBUTtBQUNyQlAsZ0JBQVksRUFBRSxDQUFDTyxLQUFLLENBQUNQO0FBREEsR0FBUixDQUFmO0FBR0QsQ0FMRDs7QUFPTyxJQUFNWSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQTBDO0FBQUEsTUFBekNMLEtBQXlDLHVFQUFqQ1IsWUFBaUM7O0FBQUE7QUFBQSxNQUFsQmMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkwsTUFBWSxRQUFaQSxNQUFZOztBQUN6RSxVQUFRSyxJQUFSO0FBQ0UsU0FBS0MsZ0ZBQUw7QUFDRSxhQUFPUixnQkFBZ0IsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLENBQXZCOztBQUNGO0FBQ0UsYUFBT0QsS0FBUDtBQUpKO0FBTUQsQ0FQTSIsImZpbGUiOiIuL3N0b3JlL3JlZHVjZXJzL25hdmlnYXRpb25SZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0U3RhdGUgfSBmcm9tIFwiLi4vLi4vVXRpbGl0aWVzL3V0aWxpdGllc1wiO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vYWN0aW9ucy9uYXZpZ2F0aW9uQWN0aW9uc1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNob3dOYXZJdGVtczogZmFsc2UsXG4gIG5hdkl0ZW1zOiBbXG4gICAge1xuICAgICAgaWQ6IFwiSG9tZVwiLFxuICAgICAgbGFiZWw6IFwiSU7DjUNJT1wiLFxuICAgICAgcGF0aDogXCIvXCIsXG4gICAgICBiYWNrZ3JvdW5kOiAnL05hdmlnYXRpb25JdGVtcy9Ib21lL2hvbWUuanBnJ1xuICAgICB9LFxuICAgICB7XG4gICAgICBpZDogXCJsb2dpblwiLFxuICAgICAgbGFiZWw6IFwiTE9HSU5cIixcbiAgICAgIHBhdGg6IFwiL0xvZ2luXCIsXG4gICAgICBiYWNrZ3JvdW5kOiAnL05hdmlnYXRpb25JdGVtcy9Mb2dpbi9sb2dpbi5qcGcnXG4gICAgIH0sXG4gICAgIHtcbiAgICAgIGlkOiBcImFib3V0XCIsXG4gICAgICBsYWJlbDogXCJTT0JSRSBOw5NTXCIsXG4gICAgICBwYXRoOiBcIi9zb2JyZS1ub3NcIixcbiAgICAgIGJhY2tncm91bmQ6ICcvTmF2aWdhdGlvbkl0ZW1zL0Fib3V0L2Fib3V0LmpwZydcbiAgICAgfSxcbiAgICAge1xuICAgICAgaWQ6IFwiZmFxXCIsXG4gICAgICBsYWJlbDogXCJGQVFcIixcbiAgICAgIHBhdGg6IFwiL2ZhcVwiLFxuICAgICAgYmFja2dyb3VuZDogJy9OYXZpZ2F0aW9uSXRlbXMvRmFxLmZhcS5qcGcnXG4gICAgIH1cbiAgXVxufTtcblxuY29uc3QgdG9nZ2xlU2lkZURyYXdlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdnb3QgaGVyZScpXG4gIHJldHVybiBzZXRTdGF0ZShzdGF0ZSwge1xuICAgIHNob3dOYXZJdGVtczogIXN0YXRlLnNob3dOYXZJdGVtcyxcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbmF2aWdhdGlvblJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIHt0eXBlLCBhY3Rpb259KSA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgYWN0aW9ucy5TSE9XX05BVklHQVRJT05fSVRFTVM6XG4gICAgICByZXR1cm4gdG9nZ2xlU2lkZURyYXdlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/reducers/navigationReducer.js\n");

/***/ })

})