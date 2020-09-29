webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/productsReducer.js":
/*!*******************************************!*\
  !*** ./store/reducers/productsReducer.js ***!
  \*******************************************/
/*! exports provided: productsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productsReducer\", function() { return productsReducer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _actions_productsActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/productsActions */ \"./store/actions/productsActions.js\");\n/* harmony import */ var _Utilities_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities/utilities */ \"./Utilities/utilities.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar initialState = {\n  activeCatalog: 'bioCloths',\n  activeCategory: 'allSizes',\n  overview: {\n    bioCloths: {\n      label: \"BIO EMBALAGENS\",\n      background: '/Products/Cloth3.jpg',\n      path: \"bio-embalagens\",\n      products: [{\n        id: 'allSizes',\n        label: \"MIX\"\n      }, {\n        id: 'medium',\n        label: \"MEDIO\"\n      }, {\n        id: 'big',\n        label: \"GRANDE\"\n      }]\n    },\n    soapWorks: {\n      label: \"SABOARIA\",\n      background: '/Products/saboaria1.jpg',\n      path: \"saboaria\",\n      products: [{\n        id: 'ofuro',\n        label: \"SAIS\"\n      }, {\n        id: 'greenClay',\n        label: \"SKINCARE\"\n      }, {\n        id: 'shampooConditioner',\n        label: \"CABELOS\"\n      }, {\n        id: 'soap',\n        label: \"SABONETE\"\n      }]\n    }\n  },\n  catalog: {\n    bioCloths: {\n      allSizes: {\n        1: {\n          images: ['Cloth1', 'Cloth2', 'Cloth3'],\n          stock: 20,\n          price: 10,\n          details: \"ipsum foo 1\",\n          label: \"Foo1\"\n        }\n      },\n      medium: {\n        1: {\n          images: ['Cloth2'],\n          stock: 10,\n          price: 50,\n          details: \"ipsum foo 2\",\n          label: \"Foo2\"\n        }\n      },\n      big: {\n        1: {\n          images: ['Cloth3'],\n          stock: 40,\n          price: 70,\n          details: \"ipsum foo 3\",\n          label: \"Foo3\"\n        }\n      }\n    },\n    soapWorks: {\n      ofuro: {\n        1: {\n          images: ['Soap1'],\n          stock: 20,\n          price: 10,\n          details: \"ipsum foo\",\n          label: \"Sal de banho 1\"\n        }\n      },\n      greenClay: {\n        1: {\n          images: ['Soap1'],\n          stock: 20,\n          price: 10,\n          details: \"ipsum foo\",\n          label: \"Argila Jobles\"\n        }\n      },\n      shampooConditioner: {\n        info: {\n          label: \"CABELOS\"\n        },\n        products: {\n          1: {\n            images: ['Soap1'],\n            stock: 20,\n            price: 10,\n            details: \"ipsum foo\",\n            label: \"Shampoo Little Joint\"\n          }\n        }\n      },\n      soap: {\n        info: {\n          label: \"SABONETE\"\n        },\n        products: {\n          1: {\n            images: ['Soap1'],\n            stock: 20,\n            price: 10,\n            details: \"Soap 1 ipsum foo\",\n            label: \"Sabnete 1\"\n          },\n          2: {\n            images: ['Soap2'],\n            stock: 20,\n            price: 10,\n            details: \"Soap 2 ipsum foo\",\n            label: \"Sabonete 2\"\n          },\n          3: {\n            images: ['Soap3'],\n            stock: 20,\n            price: 10,\n            details: \"Soap 3 ipsum foo\",\n            label: \"Sabonete 3\"\n          },\n          4: {\n            images: ['Soap3'],\n            stock: 20,\n            price: 10,\n            details: \"Soap 3 ipsum foo\",\n            label: \"Sabonete 4\"\n          }\n        }\n      }\n    }\n  }\n};\n\nvar toggleCatalog = function toggleCatalog(state, payload) {\n  return Object(_Utilities_utilities__WEBPACK_IMPORTED_MODULE_2__[\"setState\"])(_objectSpread(_objectSpread({}, state), {}, {\n    activeCatalog: payload.catalog,\n    activeCategory: payload.category\n  }));\n};\n\nvar toggleCategory = function toggleCategory(state, payload) {\n  return Object(_Utilities_utilities__WEBPACK_IMPORTED_MODULE_2__[\"setState\"])(_objectSpread(_objectSpread({}, state), {}, {\n    activeCategory: payload.category\n  }));\n};\n\nvar productsReducer = function productsReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var payload = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (payload.type) {\n    case _actions_productsActions__WEBPACK_IMPORTED_MODULE_1__[\"TOGGLE_CATALOG\"]:\n      return toggleCatalog(state, payload);\n\n    case _actions_productsActions__WEBPACK_IMPORTED_MODULE_1__[\"TOGGLE_CATEGORY\"]:\n      return toggleCategory(state, payload);\n\n    default:\n      return state;\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvcHJvZHVjdHNSZWR1Y2VyLmpzPzFkZTAiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiYWN0aXZlQ2F0YWxvZyIsImFjdGl2ZUNhdGVnb3J5Iiwib3ZlcnZpZXciLCJiaW9DbG90aHMiLCJsYWJlbCIsImJhY2tncm91bmQiLCJwYXRoIiwicHJvZHVjdHMiLCJpZCIsInNvYXBXb3JrcyIsImNhdGFsb2ciLCJhbGxTaXplcyIsImltYWdlcyIsInN0b2NrIiwicHJpY2UiLCJkZXRhaWxzIiwibWVkaXVtIiwiYmlnIiwib2Z1cm8iLCJncmVlbkNsYXkiLCJzaGFtcG9vQ29uZGl0aW9uZXIiLCJpbmZvIiwic29hcCIsInRvZ2dsZUNhdGFsb2ciLCJzdGF0ZSIsInBheWxvYWQiLCJzZXRTdGF0ZSIsImNhdGVnb3J5IiwidG9nZ2xlQ2F0ZWdvcnkiLCJwcm9kdWN0c1JlZHVjZXIiLCJ0eXBlIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0EsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxlQUFhLEVBQUUsV0FESTtBQUVuQkMsZ0JBQWMsRUFBRSxVQUZHO0FBR25CQyxVQUFRLEVBQUU7QUFDUkMsYUFBUyxFQUFFO0FBQ1RDLFdBQUssRUFBRSxnQkFERTtBQUVUQyxnQkFBVSxFQUFFLHNCQUZIO0FBR1RDLFVBQUksRUFBRSxnQkFIRztBQUlUQyxjQUFRLEVBQUUsQ0FDUjtBQUFDQyxVQUFFLEVBQUUsVUFBTDtBQUFpQkosYUFBSyxFQUFFO0FBQXhCLE9BRFEsRUFFUjtBQUFDSSxVQUFFLEVBQUUsUUFBTDtBQUFlSixhQUFLLEVBQUU7QUFBdEIsT0FGUSxFQUdSO0FBQUNJLFVBQUUsRUFBRSxLQUFMO0FBQVlKLGFBQUssRUFBRTtBQUFuQixPQUhRO0FBSkQsS0FESDtBQVdOSyxhQUFTLEVBQUU7QUFDVEwsV0FBSyxFQUFFLFVBREU7QUFFVEMsZ0JBQVUsRUFBRSx5QkFGSDtB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S0RYLGlCQUFLLEVBQUU7QUFMTixXQWZLO0FBc0JSLGFBQUc7QUFDRFEsa0JBQU0sRUFBRSxDQUFDLE9BQUQsQ0FEUDtBQUVEQyxpQkFBSyxFQUFFLEVBRk47QUFHREMsaUJBQUssRUFBRSxFQUhOO0FBSURDLG1CQUFPLEVBQUUsa0JBSlI7QUFLRFgsaUJBQUssRUFBRTtBQUxOO0FBdEJLO0FBSk47QUFuQ0M7QUE5Qko7QUExQlUsQ0FBckI7O0FBa0lBLElBQU1tQixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUN4QyxTQUFPQyxxRUFBUSxpQ0FBS0YsS0FBTDtBQUFZeEIsaUJBQWEsRUFBRXlCLE9BQU8sQ0FBQ2YsT0FBbkM7QUFBNENULGtCQUFjLEVBQUV3QixPQUFPLENBQUNFO0FBQXBFLEtBQWY7QUFDRCxDQUZEOztBQUlBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0osS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQ3pDLFNBQU9DLHFFQUFRLGlDQUFLRixLQUFMO0FBQVl2QixrQkFBYyxFQUFFd0IsT0FBTyxDQUFDRTtBQUFwQyxLQUFmO0FBQ0QsQ0FGRDs7QUFJTyxJQUFNRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQW1DO0FBQUEsTUFBbENMLEtBQWtDLHVFQUExQnpCLFlBQTBCO0FBQUEsTUFBWjBCLE9BQVk7O0FBQ2hFLFVBQVFBLE9BQU8sQ0FBQ0ssSUFBaEI7QUFDRSxTQUFLQyx1RUFBTDtBQUE4QixhQUFPUixhQUFhLENBQUNDLEtBQUQsRUFBUUMsT0FBUixDQUFwQjs7QUFDOUIsU0FBS00sd0VBQUw7QUFBK0IsYUFBT0gsY0FBYyxDQUFDSixLQUFELEVBQVFDLE9BQVIsQ0FBckI7O0FBQy9CO0FBQ0UsYUFBT0QsS0FBUDtBQUpKO0FBTUQsQ0FQTSIsImZpbGUiOiIuL3N0b3JlL3JlZHVjZXJzL3Byb2R1Y3RzUmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9wcm9kdWN0c0FjdGlvbnMnXG5pbXBvcnQge3NldFN0YXRlfSBmcm9tICcuLi8uLi9VdGlsaXRpZXMvdXRpbGl0aWVzJ1xuXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgYWN0aXZlQ2F0YWxvZzogJ2Jpb0Nsb3RocycsXG4gIGFjdGl2ZUNhdGVnb3J5OiAnYWxsU2l6ZXMnLFxuICBvdmVydmlldzoge1xuICAgIGJpb0Nsb3Roczoge1xuICAgICAgbGFiZWw6IFwiQklPIEVNQkFMQUdFTlNcIixcbiAgICAgIGJhY2tncm91bmQ6ICcvUHJvZHVjdHMvQ2xvdGgzLmpwZycsXG4gICAgICBwYXRoOiBcImJpby1lbWJhbGFnZW5zXCIsXG4gICAgICBwcm9kdWN0czogW1xuICAgICAgICB7aWQ6ICdhbGxTaXplcycsIGxhYmVsOiBcIk1JWFwifSxcbiAgICAgICAge2lkOiAnbWVkaXVtJywgbGFiZWw6IFwiTUVESU9cIn0sXG4gICAgICAgIHtpZDogJ2JpZycsIGxhYmVsOiBcIkdSQU5ERVwifVxuICAgICAgXVxuICAgIH0sXG4gICAgICBzb2FwV29ya3M6IHtcbiAgICAgICAgbGFiZWw6IFwiU0FCT0FSSUFcIixcbiAgICAgICAgYmFja2dyb3VuZDogJy9Qcm9kdWN0cy9zYWJvYXJpYTEuanBnJyxcbiAgICAgICAgcGF0aDogXCJzYWJvYXJpYVwiLFxuICAgICAgICBwcm9kdWN0czogW1xuICAgICAgICAgIHtpZDogJ29mdXJvJyxsYWJlbDogXCJTQUlTXCJ9LFxuICAgICAgICAgIHtpZDogJ2dyZWVuQ2xheScsIGxhYmVsOiBcIlNLSU5DQVJFXCJ9LFxuICAgICAgICAgIHtpZDogJ3NoYW1wb29Db25kaXRpb25lcicsIGxhYmVsOiBcIkNBQkVMT1NcIn0sXG4gICAgICAgICAge2lkOiAnc29hcCcsIGxhYmVsOiBcIlNBQk9ORVRFXCJ9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gIH0sXG4gIGNhdGFsb2c6IHtcbiAgICBiaW9DbG90aHM6IHtcbiAgICAgICAgYWxsU2l6ZXM6IHtcbiAgICAgICAgICAgIDE6IHtcbiAgICAgICAgICAgICAgaW1hZ2VzOiBbJ0Nsb3RoMScsICdDbG90aDInLCAnQ2xvdGgzJ10sXG4gICAgICAgICAgICAgIHN0b2NrOiAyMCxcbiAgICAgICAgICAgICAgcHJpY2U6IDEwLFxuICAgICAgICAgICAgICBkZXRhaWxzOiBcImlwc3VtIGZvbyAxXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkZvbzFcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBtZWRpdW06IHsgICAgICAgIFxuICAgICAgICAgICAgMToge1xuICAgICAgICAgICAgICBpbWFnZXM6IFsnQ2xvdGgyJ10sXG4gICAgICAgICAgICAgIHN0b2NrOiAxMCxcbiAgICAgICAgICAgICAgcHJpY2U6IDUwLFxuICAgICAgICAgICAgICBkZXRhaWxzOiBcImlwc3VtIGZvbyAyXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkZvbzJcIixcbiAgICAgICAgICAgIH0sICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAgYmlnOiB7ICAgICBcbiAgICAgICAgICAgIDE6IHtcbiAgICAgICAgICAgICAgaW1hZ2VzOiBbJ0Nsb3RoMyddLFxuICAgICAgICAgICAgICBzdG9jazogNDAsXG4gICAgICAgICAgICAgIHByaWNlOiA3MCxcbiAgICAgICAgICAgICAgZGV0YWlsczogXCJpcHN1bSBmb28gM1wiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJGb28zXCIsICAgICAgICBcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgc29hcFdvcmtzOiB7XG4gICAgICAgIG9mdXJvOiB7XG4gICAgICAgICAgXG4gICAgICAgICAgICAxOiB7XG4gICAgICAgICAgICAgIGltYWdlczogWydTb2FwMSddLFxuICAgICAgICAgICAgICBzdG9jazogMjAsXG4gICAgICAgICAgICAgIHByaWNlOiAxMCxcbiAgICAgICAgICAgICAgZGV0YWlsczogXCJpcHN1bSBmb29cIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiU2FsIGRlIGJhbmhvIDFcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGdyZWVuQ2xheToge1xuICAgICAgICAgIFxuICAgICAgICAgICAgMToge1xuICAgICAgICAgICAgICBpbWFnZXM6IFsnU29hcDEnXSxcbiAgICAgICAgICAgICAgc3RvY2s6IDIwLFxuICAgICAgICAgICAgICBwcmljZTogMTAsXG4gICAgICAgICAgICAgIGRldGFpbHM6IFwiaXBzdW0gZm9vXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkFyZ2lsYSBKb2JsZXNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNoYW1wb29Db25kaXRpb25lcjoge1xuICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIkNBQkVMT1NcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAxOiB7XG4gICAgICAgICAgICAgIGltYWdlczogWydTb2FwMSddLFxuICAgICAgICAgICAgICBzdG9jazogMjAsXG4gICAgICAgICAgICAgIHByaWNlOiAxMCxcbiAgICAgICAgICAgICAgZGV0YWlsczogXCJpcHN1bSBmb29cIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiU2hhbXBvbyBMaXR0bGUgSm9pbnRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc29hcDoge1xuICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIlNBQk9ORVRFXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgMToge1xuICAgICAgICAgICAgICBpbWFnZXM6IFsnU29hcDEnXSxcbiAgICAgICAgICAgICAgc3RvY2s6IDIwLFxuICAgICAgICAgICAgICBwcmljZTogMTAsXG4gICAgICAgICAgICAgIGRldGFpbHM6IFwiU29hcCAxIGlwc3VtIGZvb1wiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJTYWJuZXRlIDFcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAyOiB7XG4gICAgICAgICAgICAgIGltYWdlczogWydTb2FwMiddLFxuICAgICAgICAgICAgICBzdG9jazogMjAsXG4gICAgICAgICAgICAgIHByaWNlOiAxMCxcbiAgICAgICAgICAgICAgZGV0YWlsczogXCJTb2FwIDIgaXBzdW0gZm9vXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlNhYm9uZXRlIDJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAzOiB7XG4gICAgICAgICAgICAgIGltYWdlczogWydTb2FwMyddLFxuICAgICAgICAgICAgICBzdG9jazogMjAsXG4gICAgICAgICAgICAgIHByaWNlOiAxMCxcbiAgICAgICAgICAgICAgZGV0YWlsczogXCJTb2FwIDMgaXBzdW0gZm9vXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlNhYm9uZXRlIDNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA0OiB7XG4gICAgICAgICAgICAgIGltYWdlczogWydTb2FwMyddLFxuICAgICAgICAgICAgICBzdG9jazogMjAsXG4gICAgICAgICAgICAgIHByaWNlOiAxMCxcbiAgICAgICAgICAgICAgZGV0YWlsczogXCJTb2FwIDMgaXBzdW0gZm9vXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlNhYm9uZXRlIDRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgdG9nZ2xlQ2F0YWxvZyA9IChzdGF0ZSwgcGF5bG9hZCkgPT4ge1xuICByZXR1cm4gc2V0U3RhdGUoey4uLnN0YXRlLCBhY3RpdmVDYXRhbG9nOiBwYXlsb2FkLmNhdGFsb2csIGFjdGl2ZUNhdGVnb3J5OiBwYXlsb2FkLmNhdGVnb3J5fSlcbn1cblxuY29uc3QgdG9nZ2xlQ2F0ZWdvcnkgPSAoc3RhdGUsIHBheWxvYWQpID0+IHtcbiAgcmV0dXJuIHNldFN0YXRlKHsuLi5zdGF0ZSwgYWN0aXZlQ2F0ZWdvcnk6IHBheWxvYWQuY2F0ZWdvcnl9KVxufVxuXG5leHBvcnQgY29uc3QgcHJvZHVjdHNSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBwYXlsb2FkKSA9PiB7XG4gIHN3aXRjaCAocGF5bG9hZC50eXBlKSB7XG4gICAgY2FzZSBhY3Rpb25zLlRPR0dMRV9DQVRBTE9HIDogcmV0dXJuIHRvZ2dsZUNhdGFsb2coc3RhdGUsIHBheWxvYWQpO1xuICAgIGNhc2UgYWN0aW9ucy5UT0dHTEVfQ0FURUdPUlkgOiByZXR1cm4gdG9nZ2xlQ2F0ZWdvcnkoc3RhdGUsIHBheWxvYWQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/productsReducer.js\n");

/***/ })

})