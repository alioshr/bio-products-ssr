webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/productsReducer.js":
/*!*******************************************!*\
  !*** ./store/reducers/productsReducer.js ***!
  \*******************************************/
/*! exports provided: productsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productsReducer\", function() { return productsReducer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _actions_productsActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/productsActions */ \"./store/actions/productsActions.js\");\n/* harmony import */ var _Utilities_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities/utilities */ \"./Utilities/utilities.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar initialState = {\n  activeCatalog: \"bioCloths\",\n  activeCategory: \"allSizes\",\n  overview: {\n    bioCloths: {\n      label: \"BIO EMBALAGENS\",\n      background: \"/Products/Cloth3.jpg\",\n      path: \"bio-embalagens\",\n      products: [{\n        id: \"allSizes\",\n        label: \"MIX\"\n      }, {\n        id: \"medium\",\n        label: \"MEDIO\"\n      }, {\n        id: \"big\",\n        label: \"GRANDE\"\n      }]\n    },\n    soapWorks: {\n      label: \"SABOARIA\",\n      background: \"/Products/saboaria1.jpg\",\n      path: \"saboaria\",\n      products: [{\n        id: \"ofuro\",\n        label: \"SAIS\"\n      }, {\n        id: \"greenClay\",\n        label: \"SKINCARE\"\n      }, {\n        id: \"shampooConditioner\",\n        label: \"CABELOS\"\n      }, {\n        id: \"soap\",\n        label: \"SABONETE\"\n      }]\n    }\n  },\n  catalog: {\n    bioCloths: {\n      allSizes: {\n        1: {\n          images: [\"Cloth1\", \"Cloth2\", \"Cloth3\"],\n          name: \"Amarelinho\",\n          stock: 20,\n          price: 10\n        }\n      },\n      medium: {\n        1: {\n          images: [\"Cloth2\"],\n          name: \"Florestal\",\n          stock: 10,\n          price: 50\n        }\n      },\n      big: {\n        1: {\n          images: [\"Cloth3\"],\n          name: \"Joblinho\",\n          stock: 40,\n          price: 70\n        }\n      }\n    },\n    soapWorks: {\n      ofuro: {\n        1: {\n          images: [\"Soap1\"],\n          name: \"Bebê Soninho\",\n          stock: 20,\n          price: 10\n        }\n      },\n      greenClay: {\n        1: {\n          images: [\"Soap1\"],\n          name: \"Beleza Total\",\n          stock: 20,\n          price: 10\n        }\n      },\n      shampooConditioner: {\n        1: {\n          images: [\"Soap1\"],\n          name: \"\",\n          stock: 20,\n          price: 10\n        }\n      },\n      soap: {\n        1: {\n          images: [\"Soap1\"],\n          name: \"\",\n          stock: 20,\n          price: 10\n        },\n        2: {\n          images: [\"Soap2\"],\n          name: \"\",\n          stock: 20,\n          price: 10\n        },\n        3: {\n          images: [\"Soap3\"],\n          name: \"\",\n          stock: 20,\n          price: 10\n        },\n        4: {\n          images: [\"Soap3\"],\n          name: \"\",\n          stock: 20,\n          price: 10\n        }\n      }\n    }\n  },\n  details: {\n    bioCloths: {\n      allSizes: {},\n      medium: {},\n      big: {}\n    },\n    soapWorks: {\n      ofuro: {},\n      greenClay: {},\n      shampooConditioner: {},\n      soap: {}\n    }\n  }\n};\n\nvar toggleCatalog = function toggleCatalog(state, payload) {\n  return Object(_Utilities_utilities__WEBPACK_IMPORTED_MODULE_2__[\"setState\"])(_objectSpread(_objectSpread({}, state), {}, {\n    activeCatalog: payload.catalog,\n    activeCategory: payload.category\n  }));\n};\n\nvar toggleCategory = function toggleCategory(state, payload) {\n  return Object(_Utilities_utilities__WEBPACK_IMPORTED_MODULE_2__[\"setState\"])(_objectSpread(_objectSpread({}, state), {}, {\n    activeCategory: payload.category\n  }));\n};\n\nvar productsReducer = function productsReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var payload = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (payload.type) {\n    case _actions_productsActions__WEBPACK_IMPORTED_MODULE_1__[\"TOGGLE_CATALOG\"]:\n      return toggleCatalog(state, payload);\n\n    case _actions_productsActions__WEBPACK_IMPORTED_MODULE_1__[\"TOGGLE_CATEGORY\"]:\n      return toggleCategory(state, payload);\n\n    default:\n      return state;\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvcHJvZHVjdHNSZWR1Y2VyLmpzPzFkZTAiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiYWN0aXZlQ2F0YWxvZyIsImFjdGl2ZUNhdGVnb3J5Iiwib3ZlcnZpZXciLCJiaW9DbG90aHMiLCJsYWJlbCIsImJhY2tncm91bmQiLCJwYXRoIiwicHJvZHVjdHMiLCJpZCIsInNvYXBXb3JrcyIsImNhdGFsb2ciLCJhbGxTaXplcyIsImltYWdlcyIsIm5hbWUiLCJzdG9jayIsInByaWNlIiwibWVkaXVtIiwiYmlnIiwib2Z1cm8iLCJncmVlbkNsYXkiLCJzaGFtcG9vQ29uZGl0aW9uZXIiLCJzb2FwIiwiZGV0YWlscyIsInRvZ2dsZUNhdGFsb2ciLCJzdGF0ZSIsInBheWxvYWQiLCJzZXRTdGF0ZSIsImNhdGVnb3J5IiwidG9nZ2xlQ2F0ZWdvcnkiLCJwcm9kdWN0c1JlZHVjZXIiLCJ0eXBlIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxlQUFhLEVBQUUsV0FESTtBQUVuQkMsZ0JBQWMsRUFBRSxVQUZHO0FBR25CQyxVQUFRLEVBQUU7QUFDUkMsYUFBUyxFQUFFO0FBQ1RDLFdBQUssRUFBRSxnQkFERTtBQUVUQyxnQkFBVSxFQUFFLHNCQUZIO0FBR1RDLFVBQUksRUFBRSxnQkFIRztBQUlUQyxjQUFRLEVBQUUsQ0FDUjtBQUFFQyxVQUFFLEVBQUUsVUFBTjtBQUFrQkosYUFBSyxFQUFFO0FBQXpCLE9BRFEsRUFFUjtBQUFFSSxVQUFFLEVBQUUsUUFBTjtBQUFnQkosYUFBSyxFQUFFO0FBQXZCLE9BRlEsRUFHUjtBQUFFSSxVQUFFLEVBQUUsS0FBTjtBQUFhSixhQUFLLEVBQUU7QUFBcEIsT0FIUTtBQUpELEtBREg7QUFXUkssYUFBUyxFQUFFO0FBQ1RMLFdBQUssRUFBRSxVQURFO0FBRVRDLGdCQUFVLEVBQUUseUJBRkg7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QUlUQyxVQUFJLEVBQUU7QUFKRztBQU5KO0FBMUdVLENBQXJCOztBQXlIQSxJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUN4QyxTQUFPQyxxRUFBUSxpQ0FDVkYsS0FEVTtBQUVieEIsaUJBQWEsRUFBRXlCLE9BQU8sQ0FBQ2YsT0FGVjtBQUdiVCxrQkFBYyxFQUFFd0IsT0FBTyxDQUFDRTtBQUhYLEtBQWY7QUFLRCxDQU5EOztBQVFBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0osS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQ3pDLFNBQU9DLHFFQUFRLGlDQUFNRixLQUFOO0FBQWF2QixrQkFBYyxFQUFFd0IsT0FBTyxDQUFDRTtBQUFyQyxLQUFmO0FBQ0QsQ0FGRDs7QUFJTyxJQUFNRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQW1DO0FBQUEsTUFBbENMLEtBQWtDLHVFQUExQnpCLFlBQTBCO0FBQUEsTUFBWjBCLE9BQVk7O0FBQ2hFLFVBQVFBLE9BQU8sQ0FBQ0ssSUFBaEI7QUFDRSxTQUFLQyx1RUFBTDtBQUNFLGFBQU9SLGFBQWEsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLENBQXBCOztBQUNGLFNBQUtNLHdFQUFMO0FBQ0UsYUFBT0gsY0FBYyxDQUFDSixLQUFELEVBQVFDLE9BQVIsQ0FBckI7O0FBQ0Y7QUFDRSxhQUFPRCxLQUFQO0FBTko7QUFRRCxDQVRNIiwiZmlsZSI6Ii4vc3RvcmUvcmVkdWNlcnMvcHJvZHVjdHNSZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vYWN0aW9ucy9wcm9kdWN0c0FjdGlvbnNcIjtcbmltcG9ydCB7IHNldFN0YXRlIH0gZnJvbSBcIi4uLy4uL1V0aWxpdGllcy91dGlsaXRpZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBhY3RpdmVDYXRhbG9nOiBcImJpb0Nsb3Roc1wiLFxuICBhY3RpdmVDYXRlZ29yeTogXCJhbGxTaXplc1wiLFxuICBvdmVydmlldzoge1xuICAgIGJpb0Nsb3Roczoge1xuICAgICAgbGFiZWw6IFwiQklPIEVNQkFMQUdFTlNcIixcbiAgICAgIGJhY2tncm91bmQ6IFwiL1Byb2R1Y3RzL0Nsb3RoMy5qcGdcIixcbiAgICAgIHBhdGg6IFwiYmlvLWVtYmFsYWdlbnNcIixcbiAgICAgIHByb2R1Y3RzOiBbXG4gICAgICAgIHsgaWQ6IFwiYWxsU2l6ZXNcIiwgbGFiZWw6IFwiTUlYXCIgfSxcbiAgICAgICAgeyBpZDogXCJtZWRpdW1cIiwgbGFiZWw6IFwiTUVESU9cIiB9LFxuICAgICAgICB7IGlkOiBcImJpZ1wiLCBsYWJlbDogXCJHUkFOREVcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHNvYXBXb3Jrczoge1xuICAgICAgbGFiZWw6IFwiU0FCT0FSSUFcIixcbiAgICAgIGJhY2tncm91bmQ6IFwiL1Byb2R1Y3RzL3NhYm9hcmlhMS5qcGdcIixcbiAgICAgIHBhdGg6IFwic2Fib2FyaWFcIixcbiAgICAgIHByb2R1Y3RzOiBbXG4gICAgICAgIHsgaWQ6IFwib2Z1cm9cIiwgbGFiZWw6IFwiU0FJU1wiIH0sXG4gICAgICAgIHsgaWQ6IFwiZ3JlZW5DbGF5XCIsIGxhYmVsOiBcIlNLSU5DQVJFXCIgfSxcbiAgICAgICAgeyBpZDogXCJzaGFtcG9vQ29uZGl0aW9uZXJcIiwgbGFiZWw6IFwiQ0FCRUxPU1wiIH0sXG4gICAgICAgIHsgaWQ6IFwic29hcFwiLCBsYWJlbDogXCJTQUJPTkVURVwiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG4gIGNhdGFsb2c6IHtcbiAgICBiaW9DbG90aHM6IHtcbiAgICAgIGFsbFNpemVzOiB7XG4gICAgICAgIDE6IHtcbiAgICAgICAgICBpbWFnZXM6IFtcIkNsb3RoMVwiLCBcIkNsb3RoMlwiLCBcIkNsb3RoM1wiXSxcbiAgICAgICAgICBuYW1lOiBcIkFtYXJlbGluaG9cIixcbiAgICAgICAgICBzdG9jazogMjAsXG4gICAgICAgICAgcHJpY2U6IDEwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG1lZGl1bToge1xuICAgICAgICAxOiB7XG4gICAgICAgICAgaW1hZ2VzOiBbXCJDbG90aDJcIl0sXG4gICAgICAgICAgbmFtZTogXCJGbG9yZXN0YWxcIixcbiAgICAgICAgICBzdG9jazogMTAsXG4gICAgICAgICAgcHJpY2U6IDUwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGJpZzoge1xuICAgICAgICAxOiB7XG4gICAgICAgICAgaW1hZ2VzOiBbXCJDbG90aDNcIl0sXG4gICAgICAgICAgbmFtZTogXCJKb2JsaW5ob1wiLFxuICAgICAgICAgIHN0b2NrOiA0MCxcbiAgICAgICAgICBwcmljZTogNzAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgc29hcFdvcmtzOiB7XG4gICAgICBvZnVybzoge1xuICAgICAgICAxOiB7XG4gICAgICAgICAgaW1hZ2VzOiBbXCJTb2FwMVwiXSxcbiAgICAgICAgICBuYW1lOiBcIkJlYsOqIFNvbmluaG9cIixcbiAgICAgICAgICBzdG9jazogMjAsXG4gICAgICAgICAgcHJpY2U6IDEwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGdyZWVuQ2xheToge1xuICAgICAgICAxOiB7XG4gICAgICAgICAgaW1hZ2VzOiBbXCJTb2FwMVwiXSxcbiAgICAgICAgICBuYW1lOiBcIkJlbGV6YSBUb3RhbFwiLFxuICAgICAgICAgIHN0b2NrOiAyMCxcbiAgICAgICAgICBwcmljZTogMTAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgc2hhbXBvb0NvbmRpdGlvbmVyOiB7XG4gICAgICAgIDE6IHtcbiAgICAgICAgICBpbWFnZXM6IFtcIlNvYXAxXCJdLFxuICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgc3RvY2s6IDIwLFxuICAgICAgICAgIHByaWNlOiAxMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBzb2FwOiB7XG4gICAgICAgIDE6IHtcbiAgICAgICAgICBpbWFnZXM6IFtcIlNvYXAxXCJdLFxuICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgc3RvY2s6IDIwLFxuICAgICAgICAgIHByaWNlOiAxMCxcbiAgICAgICAgfSxcbiAgICAgICAgMjoge1xuICAgICAgICAgIGltYWdlczogW1wiU29hcDJcIl0sXG4gICAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgICBzdG9jazogMjAsXG4gICAgICAgICAgcHJpY2U6IDEwLFxuICAgICAgICB9LFxuICAgICAgICAzOiB7XG4gICAgICAgICAgaW1hZ2VzOiBbXCJTb2FwM1wiXSxcbiAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgIHN0b2NrOiAyMCxcbiAgICAgICAgICBwcmljZTogMTAsXG4gICAgICAgIH0sXG4gICAgICAgIDQ6IHtcbiAgICAgICAgICBpbWFnZXM6IFtcIlNvYXAzXCJdLFxuICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgc3RvY2s6IDIwLFxuICAgICAgICAgIHByaWNlOiAxMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZGV0YWlsczoge1xuICAgIGJpb0Nsb3Roczoge1xuICAgICAgYWxsU2l6ZXM6IHt9LFxuICAgICAgbWVkaXVtOiB7fSxcbiAgICAgIGJpZzoge31cbiAgICB9LFxuICAgIHNvYXBXb3Jrczoge1xuICAgICAgb2Z1cm86IHt9LFxuICAgICAgZ3JlZW5DbGF5OiB7fSxcbiAgICAgIHNoYW1wb29Db25kaXRpb25lcjoge30sXG4gICAgICBzb2FwOiB7fVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgdG9nZ2xlQ2F0YWxvZyA9IChzdGF0ZSwgcGF5bG9hZCkgPT4ge1xuICByZXR1cm4gc2V0U3RhdGUoe1xuICAgIC4uLnN0YXRlLFxuICAgIGFjdGl2ZUNhdGFsb2c6IHBheWxvYWQuY2F0YWxvZyxcbiAgICBhY3RpdmVDYXRlZ29yeTogcGF5bG9hZC5jYXRlZ29yeSxcbiAgfSk7XG59O1xuXG5jb25zdCB0b2dnbGVDYXRlZ29yeSA9IChzdGF0ZSwgcGF5bG9hZCkgPT4ge1xuICByZXR1cm4gc2V0U3RhdGUoeyAuLi5zdGF0ZSwgYWN0aXZlQ2F0ZWdvcnk6IHBheWxvYWQuY2F0ZWdvcnkgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgcHJvZHVjdHNSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBwYXlsb2FkKSA9PiB7XG4gIHN3aXRjaCAocGF5bG9hZC50eXBlKSB7XG4gICAgY2FzZSBhY3Rpb25zLlRPR0dMRV9DQVRBTE9HOlxuICAgICAgcmV0dXJuIHRvZ2dsZUNhdGFsb2coc3RhdGUsIHBheWxvYWQpO1xuICAgIGNhc2UgYWN0aW9ucy5UT0dHTEVfQ0FURUdPUlk6XG4gICAgICByZXR1cm4gdG9nZ2xlQ2F0ZWdvcnkoc3RhdGUsIHBheWxvYWQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/productsReducer.js\n");

/***/ })

})