webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/productsReducer.js":
/*!*******************************************!*\
  !*** ./store/reducers/productsReducer.js ***!
  \*******************************************/
/*! exports provided: productsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productsReducer\", function() { return productsReducer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _actions_productsActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/productsActions */ \"./store/actions/productsActions.js\");\n/* harmony import */ var _Utilities_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities/utilities */ \"./Utilities/utilities.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar initialState = {\n  activeCatalog: 'bioCloths',\n  activeCategory: 'allSizes',\n  overview: {\n    bioCloths: {\n      label: \"BIO EMBALAGENS\",\n      background: '/Products/Cloth3.jpg',\n      path: \"bio-embalagens\",\n      products: {\n        allSizes: {\n          label: \"MIX\"\n        },\n        medium: {\n          label: \"MEDIO\"\n        },\n        big: {\n          label: \"GRANDE\"\n        }\n      }\n    },\n    soapWorks: {\n      label: \"SABOARIA\",\n      background: '/Products/saboaria1.jpg',\n      path: \"saboaria\",\n      products: {\n        ofuro: {\n          label: \"SAIS\"\n        },\n        greenClay: {\n          label: \"SKINCARE\"\n        },\n        shampooConditioner: {\n          label: \"CABELOS\"\n        },\n        soap: {\n          label: \"SABONETE\"\n        }\n      }\n    }\n  },\n  catalog: {\n    bioCloths: {\n      info: {\n        label: \"BIO EMBALAGENS\"\n      },\n      products: {\n        allSizes: {\n          info: {\n            label: \"MIX\"\n          },\n          products: {\n            1: {\n              images: ['Cloth1', 'Cloth2', 'Cloth3'],\n              stock: 20,\n              price: 10,\n              details: \"ipsum foo 1\",\n              label: \"Foo1\"\n            }\n          }\n        },\n        medium: {\n          info: {\n            label: \"MEDIO\"\n          },\n          products: {\n            1: {\n              images: ['Cloth2'],\n              stock: 10,\n              price: 50,\n              details: \"ipsum foo 2\",\n              label: \"Foo2\"\n            }\n          }\n        },\n        big: {\n          info: {\n            label: \"GRANDE\"\n          },\n          products: {\n            1: {\n              images: ['Cloth3'],\n              stock: 40,\n              price: 70,\n              details: \"ipsum foo 3\",\n              label: \"Foo3\"\n            }\n          }\n        }\n      }\n    },\n    soapWorks: {\n      info: {\n        label: \"SABOARIA\"\n      },\n      products: {\n        ofuro: {\n          info: {\n            label: \"SAIS\"\n          },\n          products: {\n            1: {\n              images: ['Soap1'],\n              stock: 20,\n              price: 10,\n              details: \"ipsum foo\",\n              label: \"Sal de banho 1\"\n            }\n          }\n        },\n        greenClay: {\n          info: {\n            label: \"SKINCARE\"\n          },\n          products: {\n            1: {\n              images: ['Soap1'],\n              stock: 20,\n              price: 10,\n              details: \"ipsum foo\",\n              label: \"Argila Jobles\"\n            }\n          }\n        },\n        shampooConditioner: {\n          info: {\n            label: \"CABELOS\"\n          },\n          products: {\n            1: {\n              images: ['Soap1'],\n              stock: 20,\n              price: 10,\n              details: \"ipsum foo\",\n              label: \"Shampoo Little Joint\"\n            }\n          }\n        },\n        soap: {\n          info: {\n            label: \"SABONETE\"\n          },\n          products: {\n            1: {\n              images: ['Soap1'],\n              stock: 20,\n              price: 10,\n              details: \"Soap 1 ipsum foo\",\n              label: \"Sabnete 1\"\n            },\n            2: {\n              images: ['Soap2'],\n              stock: 20,\n              price: 10,\n              details: \"Soap 2 ipsum foo\",\n              label: \"Sabonete 2\"\n            },\n            3: {\n              images: ['Soap3'],\n              stock: 20,\n              price: 10,\n              details: \"Soap 3 ipsum foo\",\n              label: \"Sabonete 3\"\n            },\n            4: {\n              images: ['Soap3'],\n              stock: 20,\n              price: 10,\n              details: \"Soap 3 ipsum foo\",\n              label: \"Sabonete 4\"\n            }\n          }\n        }\n      }\n    }\n  }\n};\n\nvar toggleCatalog = function toggleCatalog(state, payload) {\n  return Object(_Utilities_utilities__WEBPACK_IMPORTED_MODULE_2__[\"setState\"])(_objectSpread(_objectSpread({}, state), {}, {\n    activeCatalog: payload.catalog,\n    activeCategory: payload\n  }));\n};\n\nvar toggleCategory = function toggleCategory(state, payload) {\n  return Object(_Utilities_utilities__WEBPACK_IMPORTED_MODULE_2__[\"setState\"])(_objectSpread(_objectSpread({}, state), {}, {\n    activeCategory: payload.category\n  }));\n};\n\nvar productsReducer = function productsReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var payload = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (payload.type) {\n    case _actions_productsActions__WEBPACK_IMPORTED_MODULE_1__[\"TOGGLE_CATALOG\"]:\n      return toggleCatalog(state, payload);\n\n    case _actions_productsActions__WEBPACK_IMPORTED_MODULE_1__[\"TOGGLE_CATEGORY\"]:\n      return toggleCategory(state, payload);\n\n    default:\n      return state;\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvcHJvZHVjdHNSZWR1Y2VyLmpzPzFkZTAiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiYWN0aXZlQ2F0YWxvZyIsImFjdGl2ZUNhdGVnb3J5Iiwib3ZlcnZpZXciLCJiaW9DbG90aHMiLCJsYWJlbCIsImJhY2tncm91bmQiLCJwYXRoIiwicHJvZHVjdHMiLCJhbGxTaXplcyIsIm1lZGl1bSIsImJpZyIsInNvYXBXb3JrcyIsIm9mdXJvIiwiZ3JlZW5DbGF5Iiwic2hhbXBvb0NvbmRpdGlvbmVyIiwic29hcCIsImNhdGFsb2ciLCJpbmZvIiwiaW1hZ2VzIiwic3RvY2siLCJwcmljZSIsImRldGFpbHMiLCJ0b2dnbGVDYXRhbG9nIiwic3RhdGUiLCJwYXlsb2FkIiwic2V0U3RhdGUiLCJ0b2dnbGVDYXRlZ29yeSIsImNhdGVnb3J5IiwicHJvZHVjdHNSZWR1Y2VyIiwidHlwZSIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsZUFBYSxFQUFFLFdBREk7QUFFbkJDLGdCQUFjLEVBQUUsVUFGRztBQUduQkMsVUFBUSxFQUFFO0FBQ1JDLGFBQVMsRUFBRTtBQUNUQyxXQUFLLEVBQUUsZ0JBREU7QUFFVEMsZ0JBQVUsRUFBRSxzQkFGSDtBQUdUQyxVQUFJLEVBQUUsZ0JBSEc7QUFJVEMsY0FBUSxFQUFFO0FBQ1JDLGdCQUFRLEVBQUU7QUFDUkosZUFBSyxFQUFFO0FBREMsU0FERjtBQUlSSyxjQUFNLEVBQUU7QUFDTkwsZUFBSyxFQUFFO0FBREQsU0FKQTtBQU9STSxXQUFHLEVBQUU7QUFDSE4sZUFBSyxFQUFFO0FBREo7QUFQRztBQUpELEtBREg7QUFpQk5PLGFBQVMsRUFBRTtBQUNUUCxXQUFLLEVBQUUsVUFERTtBQUVUQyxnQkFBVSxFQUFFLHlCQUZIO0FBR1RDLFVBQUksRUFBRSxVQUhHO0FBSVRDLGNBQVEsRUFBRTtB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RCxDQUZEOztBQUlPLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBbUM7QUFBQSxNQUFsQ0wsS0FBa0MsdUVBQTFCeEIsWUFBMEI7QUFBQSxNQUFaeUIsT0FBWTs7QUFDaEUsVUFBUUEsT0FBTyxDQUFDSyxJQUFoQjtBQUNFLFNBQUtDLHVFQUFMO0FBQThCLGFBQU9SLGFBQWEsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLENBQXBCOztBQUM5QixTQUFLTSx3RUFBTDtBQUErQixhQUFPSixjQUFjLENBQUNILEtBQUQsRUFBUUMsT0FBUixDQUFyQjs7QUFDL0I7QUFDRSxhQUFPRCxLQUFQO0FBSko7QUFNRCxDQVBNIiwiZmlsZSI6Ii4vc3RvcmUvcmVkdWNlcnMvcHJvZHVjdHNSZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3Byb2R1Y3RzQWN0aW9ucydcbmltcG9ydCB7c2V0U3RhdGV9IGZyb20gJy4uLy4uL1V0aWxpdGllcy91dGlsaXRpZXMnXG5cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBhY3RpdmVDYXRhbG9nOiAnYmlvQ2xvdGhzJyxcbiAgYWN0aXZlQ2F0ZWdvcnk6ICdhbGxTaXplcycsXG4gIG92ZXJ2aWV3OiB7XG4gICAgYmlvQ2xvdGhzOiB7XG4gICAgICBsYWJlbDogXCJCSU8gRU1CQUxBR0VOU1wiLFxuICAgICAgYmFja2dyb3VuZDogJy9Qcm9kdWN0cy9DbG90aDMuanBnJyxcbiAgICAgIHBhdGg6IFwiYmlvLWVtYmFsYWdlbnNcIixcbiAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgIGFsbFNpemVzOiB7XG4gICAgICAgICAgbGFiZWw6IFwiTUlYXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG1lZGl1bToge1xuICAgICAgICAgIGxhYmVsOiBcIk1FRElPXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJpZzoge1xuICAgICAgICAgIGxhYmVsOiBcIkdSQU5ERVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgICAgc29hcFdvcmtzOiB7XG4gICAgICAgIGxhYmVsOiBcIlNBQk9BUklBXCIsXG4gICAgICAgIGJhY2tncm91bmQ6ICcvUHJvZHVjdHMvc2Fib2FyaWExLmpwZycsXG4gICAgICAgIHBhdGg6IFwic2Fib2FyaWFcIixcbiAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICBvZnVybzoge1xuICAgICAgICAgICAgbGFiZWw6IFwiU0FJU1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ3JlZW5DbGF5OiB7XG4gICAgICAgICAgICBsYWJlbDogXCJTS0lOQ0FSRVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hhbXBvb0NvbmRpdGlvbmVyOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJDQUJFTE9TXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzb2FwOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJTQUJPTkVURVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICB9LFxuICBjYXRhbG9nOiB7XG4gICAgYmlvQ2xvdGhzOiB7XG4gICAgICBpbmZvOiB7XG4gICAgICAgIGxhYmVsOiBcIkJJTyBFTUJBTEFHRU5TXCIsXG4gICAgICB9LFxuICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgYWxsU2l6ZXM6IHtcbiAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJNSVhcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAxOiB7XG4gICAgICAgICAgICAgIGltYWdlczogWydDbG90aDEnLCAnQ2xvdGgyJywgJ0Nsb3RoMyddLFxuICAgICAgICAgICAgICBzdG9jazogMjAsXG4gICAgICAgICAgICAgIHByaWNlOiAxMCxcbiAgICAgICAgICAgICAgZGV0YWlsczogXCJpcHN1bSBmb28gMVwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJGb28xXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG1lZGl1bToge1xuICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIk1FRElPXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgMToge1xuICAgICAgICAgICAgICBpbWFnZXM6IFsnQ2xvdGgyJ10sXG4gICAgICAgICAgICAgIHN0b2NrOiAxMCxcbiAgICAgICAgICAgICAgcHJpY2U6IDUwLFxuICAgICAgICAgICAgICBkZXRhaWxzOiBcImlwc3VtIGZvbyAyXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkZvbzJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYmlnOiB7XG4gICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgbGFiZWw6IFwiR1JBTkRFXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgMToge1xuICAgICAgICAgICAgICBpbWFnZXM6IFsnQ2xvdGgzJ10sXG4gICAgICAgICAgICAgIHN0b2NrOiA0MCxcbiAgICAgICAgICAgICAgcHJpY2U6IDcwLFxuICAgICAgICAgICAgICBkZXRhaWxzOiBcImlwc3VtIGZvbyAzXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkZvbzNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzb2FwV29ya3M6IHtcbiAgICAgIGluZm86IHtcbiAgICAgICAgbGFiZWw6IFwiU0FCT0FSSUFcIixcbiAgICAgIH0sXG4gICAgICBwcm9kdWN0czoge1xuICAgICAgICBvZnVybzoge1xuICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIlNBSVNcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAxOiB7XG4gICAgICAgICAgICAgIGltYWdlczogWydTb2FwMSddLFxuICAgICAgICAgICAgICBzdG9jazogMjAsXG4gICAgICAgICAgICAgIHByaWNlOiAxMCxcbiAgICAgICAgICAgICAgZGV0YWlsczogXCJpcHN1bSBmb29cIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiU2FsIGRlIGJhbmhvIDFcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZ3JlZW5DbGF5OiB7XG4gICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgbGFiZWw6IFwiU0tJTkNBUkVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAxOiB7XG4gICAgICAgICAgICAgIGltYWdlczogWydTb2FwMSddLFxuICAgICAgICAgICAgICBzdG9jazogMjAsXG4gICAgICAgICAgICAgIHByaWNlOiAxMCxcbiAgICAgICAgICAgICAgZGV0YWlsczogXCJpcHN1bSBmb29cIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiQXJnaWxhIEpvYmxlc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzaGFtcG9vQ29uZGl0aW9uZXI6IHtcbiAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJDQUJFTE9TXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgMToge1xuICAgICAgICAgICAgICBpbWFnZXM6IFsnU29hcDEnXSxcbiAgICAgICAgICAgICAgc3RvY2s6IDIwLFxuICAgICAgICAgICAgICBwcmljZTogMTAsXG4gICAgICAgICAgICAgIGRldGFpbHM6IFwiaXBzdW0gZm9vXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlNoYW1wb28gTGl0dGxlIEpvaW50XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNvYXA6IHtcbiAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJTQUJPTkVURVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgIDE6IHtcbiAgICAgICAgICAgICAgaW1hZ2VzOiBbJ1NvYXAxJ10sXG4gICAgICAgICAgICAgIHN0b2NrOiAyMCxcbiAgICAgICAgICAgICAgcHJpY2U6IDEwLFxuICAgICAgICAgICAgICBkZXRhaWxzOiBcIlNvYXAgMSBpcHN1bSBmb29cIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiU2FibmV0ZSAxXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMjoge1xuICAgICAgICAgICAgICBpbWFnZXM6IFsnU29hcDInXSxcbiAgICAgICAgICAgICAgc3RvY2s6IDIwLFxuICAgICAgICAgICAgICBwcmljZTogMTAsXG4gICAgICAgICAgICAgIGRldGFpbHM6IFwiU29hcCAyIGlwc3VtIGZvb1wiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJTYWJvbmV0ZSAyXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMzoge1xuICAgICAgICAgICAgICBpbWFnZXM6IFsnU29hcDMnXSxcbiAgICAgICAgICAgICAgc3RvY2s6IDIwLFxuICAgICAgICAgICAgICBwcmljZTogMTAsXG4gICAgICAgICAgICAgIGRldGFpbHM6IFwiU29hcCAzIGlwc3VtIGZvb1wiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJTYWJvbmV0ZSAzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNDoge1xuICAgICAgICAgICAgICBpbWFnZXM6IFsnU29hcDMnXSxcbiAgICAgICAgICAgICAgc3RvY2s6IDIwLFxuICAgICAgICAgICAgICBwcmljZTogMTAsXG4gICAgICAgICAgICAgIGRldGFpbHM6IFwiU29hcCAzIGlwc3VtIGZvb1wiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJTYWJvbmV0ZSA0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCB0b2dnbGVDYXRhbG9nID0gKHN0YXRlLCBwYXlsb2FkKSA9PiB7XG4gIHJldHVybiBzZXRTdGF0ZSh7Li4uc3RhdGUsIGFjdGl2ZUNhdGFsb2c6IHBheWxvYWQuY2F0YWxvZywgYWN0aXZlQ2F0ZWdvcnk6IHBheWxvYWR9KVxufVxuXG5jb25zdCB0b2dnbGVDYXRlZ29yeSA9IChzdGF0ZSwgcGF5bG9hZCkgPT4ge1xuICByZXR1cm4gc2V0U3RhdGUoey4uLnN0YXRlLCBhY3RpdmVDYXRlZ29yeTogcGF5bG9hZC5jYXRlZ29yeX0pXG59XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0c1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIHBheWxvYWQpID0+IHtcbiAgc3dpdGNoIChwYXlsb2FkLnR5cGUpIHtcbiAgICBjYXNlIGFjdGlvbnMuVE9HR0xFX0NBVEFMT0cgOiByZXR1cm4gdG9nZ2xlQ2F0YWxvZyhzdGF0ZSwgcGF5bG9hZCk7XG4gICAgY2FzZSBhY3Rpb25zLlRPR0dMRV9DQVRFR09SWSA6IHJldHVybiB0b2dnbGVDYXRlZ29yeShzdGF0ZSwgcGF5bG9hZCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/reducers/productsReducer.js\n");

/***/ })

})