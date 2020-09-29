webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/productsReducer.js":
/*!*******************************************!*\
  !*** ./store/reducers/productsReducer.js ***!
  \*******************************************/
/*! exports provided: productsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productsReducer\", function() { return productsReducer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _actions_productsActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/productsActions */ \"./store/actions/productsActions.js\");\n/* harmony import */ var _Utilities_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities/utilities */ \"./Utilities/utilities.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar initialState = {\n  activeCatalog: \"bioCloths\",\n  activeCategory: \"allSizes\",\n  overview: {\n    bioCloths: {\n      label: \"BIO EMBALAGENS\",\n      background: \"/Products/Cloth3.jpg\",\n      path: \"bio-embalagens\",\n      products: [{\n        id: \"allSizes\",\n        label: \"MIX\"\n      }, {\n        id: \"medium\",\n        label: \"MEDIO\"\n      }, {\n        id: \"big\",\n        label: \"GRANDE\"\n      }]\n    },\n    soapWorks: {\n      label: \"SABOARIA\",\n      background: \"/Products/saboaria1.jpg\",\n      path: \"saboaria\",\n      products: [{\n        id: \"ofuro\",\n        label: \"SAIS\"\n      }, {\n        id: \"greenClay\",\n        label: \"SKINCARE\"\n      }, {\n        id: \"shampooConditioner\",\n        label: \"CABELOS\"\n      }, {\n        id: \"soap\",\n        label: \"SABONETE\"\n      }]\n    }\n  },\n  catalog: {\n    bioCloths: {\n      allSizes: {\n        0: {\n          images: {\n            paths: {\n              0: \"0\",\n              1: \"1\"\n            },\n            alt: \"some alt text for all images\"\n          },\n          name: \"Amarelinho\",\n          stock: 20,\n          price: 10\n        }\n      },\n      medium: {\n        0: {\n          images: {\n            paths: {\n              0: \"0\",\n              1: \"1\"\n            },\n            alt: \"some alt text for all images\"\n          },\n          name: \"Florestal\",\n          stock: 10,\n          price: 50\n        }\n      },\n      big: {\n        0: {\n          images: {\n            paths: {\n              0: \"0\",\n              1: \"1\"\n            },\n            alt: \"some alt text for all images\"\n          },\n          name: \"Joblinho\",\n          stock: 40,\n          price: 70\n        }\n      }\n    },\n    soapWorks: {\n      ofuro: {\n        0: {\n          images: {\n            paths: {\n              0: \"0\",\n              1: \"1\"\n            },\n            alt: \"some alt text for all images\"\n          },\n          name: \"Bebê Soninho\",\n          stock: 20,\n          price: 10\n        }\n      },\n      greenClay: {\n        0: {\n          images: {\n            paths: {\n              0: \"0\",\n              1: \"1\"\n            },\n            alt: \"some alt text for all images\"\n          },\n          name: \"Beleza Total\",\n          stock: 20,\n          price: 10\n        }\n      },\n      shampooConditioner: {\n        0: {\n          images: {\n            paths: {\n              0: \"0\",\n              1: \"1\"\n            },\n            alt: \"some alt text for all images\"\n          },\n          name: \"Restauração Capilar\",\n          stock: 20,\n          price: 10\n        }\n      },\n      soap: {\n        0: {\n          images: {\n            paths: {\n              0: \"0\",\n              1: \"1\"\n            },\n            alt: \"some alt text for all images\"\n          },\n          name: \"Hidrata Tudo\",\n          stock: 20,\n          price: 10\n        },\n        2: {\n          images: {\n            paths: {\n              0: \"0\",\n              1: \"1\"\n            },\n            alt: \"some alt text for all images\"\n          },\n          name: \"Esfolia Sua Alma\",\n          stock: 20,\n          price: 10\n        },\n        3: {\n          images: {\n            paths: {\n              0: \"0\",\n              1: \"1\"\n            },\n            alt: \"some alt text for all images\"\n          },\n          name: \"Hortelã Mentolado\",\n          stock: 20,\n          price: 10\n        },\n        4: {\n          images: {\n            paths: {\n              0: \"0\",\n              1: \"1\"\n            },\n            alt: \"some alt text for all images\"\n          },\n          name: \"Cacau com Chocolate\",\n          stock: 20,\n          price: 10\n        }\n      }\n    }\n  },\n  details: {\n    bioCloths: {\n      allSizes: {},\n      medium: {},\n      big: {}\n    },\n    soapWorks: {\n      ofuro: {},\n      greenClay: {},\n      shampooConditioner: {},\n      soap: {}\n    }\n  }\n};\n\nvar toggleCatalog = function toggleCatalog(state, payload) {\n  return Object(_Utilities_utilities__WEBPACK_IMPORTED_MODULE_2__[\"setState\"])(_objectSpread(_objectSpread({}, state), {}, {\n    activeCatalog: payload.catalog,\n    activeCategory: payload.category\n  }));\n};\n\nvar toggleCategory = function toggleCategory(state, payload) {\n  return Object(_Utilities_utilities__WEBPACK_IMPORTED_MODULE_2__[\"setState\"])(_objectSpread(_objectSpread({}, state), {}, {\n    activeCategory: payload.category\n  }));\n};\n\nvar productsReducer = function productsReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var payload = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (payload.type) {\n    case _actions_productsActions__WEBPACK_IMPORTED_MODULE_1__[\"TOGGLE_CATALOG\"]:\n      return toggleCatalog(state, payload);\n\n    case _actions_productsActions__WEBPACK_IMPORTED_MODULE_1__[\"TOGGLE_CATEGORY\"]:\n      return toggleCategory(state, payload);\n\n    default:\n      return state;\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvcHJvZHVjdHNSZWR1Y2VyLmpzPzFkZTAiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiYWN0aXZlQ2F0YWxvZyIsImFjdGl2ZUNhdGVnb3J5Iiwib3ZlcnZpZXciLCJiaW9DbG90aHMiLCJsYWJlbCIsImJhY2tncm91bmQiLCJwYXRoIiwicHJvZHVjdHMiLCJpZCIsInNvYXBXb3JrcyIsImNhdGFsb2ciLCJhbGxTaXplcyIsImltYWdlcyIsInBhdGhzIiwiYWx0IiwibmFtZSIsInN0b2NrIiwicHJpY2UiLCJtZWRpdW0iLCJiaWciLCJvZnVybyIsImdyZWVuQ2xheSIsInNoYW1wb29Db25kaXRpb25lciIsInNvYXAiLCJkZXRhaWxzIiwidG9nZ2xlQ2F0YWxvZyIsInN0YXRlIiwicGF5bG9hZCIsInNldFN0YXRlIiwiY2F0ZWdvcnkiLCJ0b2dnbGVDYXRlZ29yeSIsInByb2R1Y3RzUmVkdWNlciIsInR5cGUiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLGVBQWEsRUFBRSxXQURJO0FBRW5CQyxnQkFBYyxFQUFFLFVBRkc7QUFHbkJDLFVBQVEsRUFBRTtBQUNSQyxhQUFTLEVBQUU7QUFDVEMsV0FBSyxFQUFFLGdCQURFO0FBRVRDLGdCQUFVLEVBQUUsc0JBRkg7QUFHVEMsVUFBSSxFQUFFLGdCQUhHO0FBSVRDLGNBQVEsRUFBRSxDQUNSO0FBQUVDLFVBQUUsRUFBRSxVQUFOO0FBQWtCSixhQUFLLEVBQUU7QUFBekIsT0FEUSxFQUVSO0FBQUVJLFVBQUUsRUFBRSxRQUFOO0FBQWdCSixhQUFLLEVBQUU7QUFBdkIsT0FGUSxFQUdSO0FBQUVJLFVBQUUsRUFBRSxLQUFOO0FBQWFKLGFBQUssRUFBRTtBQUFwQixPQUhRO0FBSkQsS0FESDtBQVdSSyxhQUFTLEVBQUU7QUFDVEwsV0FBSyxFQUFFLFVBREU7QUFFVEMsZ0JB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LENBQUNKLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUN6QyxTQUFPQyxxRUFBUSxpQ0FBTUYsS0FBTjtBQUFhekIsa0JBQWMsRUFBRTBCLE9BQU8sQ0FBQ0U7QUFBckMsS0FBZjtBQUNELENBRkQ7O0FBSU8sSUFBTUUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFtQztBQUFBLE1BQWxDTCxLQUFrQyx1RUFBMUIzQixZQUEwQjtBQUFBLE1BQVo0QixPQUFZOztBQUNoRSxVQUFRQSxPQUFPLENBQUNLLElBQWhCO0FBQ0UsU0FBS0MsdUVBQUw7QUFDRSxhQUFPUixhQUFhLENBQUNDLEtBQUQsRUFBUUMsT0FBUixDQUFwQjs7QUFDRixTQUFLTSx3RUFBTDtBQUNFLGFBQU9ILGNBQWMsQ0FBQ0osS0FBRCxFQUFRQyxPQUFSLENBQXJCOztBQUNGO0FBQ0UsYUFBT0QsS0FBUDtBQU5KO0FBUUQsQ0FUTSIsImZpbGUiOiIuL3N0b3JlL3JlZHVjZXJzL3Byb2R1Y3RzUmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uL2FjdGlvbnMvcHJvZHVjdHNBY3Rpb25zXCI7XG5pbXBvcnQgeyBzZXRTdGF0ZSB9IGZyb20gXCIuLi8uLi9VdGlsaXRpZXMvdXRpbGl0aWVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgYWN0aXZlQ2F0YWxvZzogXCJiaW9DbG90aHNcIixcbiAgYWN0aXZlQ2F0ZWdvcnk6IFwiYWxsU2l6ZXNcIixcbiAgb3ZlcnZpZXc6IHtcbiAgICBiaW9DbG90aHM6IHtcbiAgICAgIGxhYmVsOiBcIkJJTyBFTUJBTEFHRU5TXCIsXG4gICAgICBiYWNrZ3JvdW5kOiBcIi9Qcm9kdWN0cy9DbG90aDMuanBnXCIsXG4gICAgICBwYXRoOiBcImJpby1lbWJhbGFnZW5zXCIsXG4gICAgICBwcm9kdWN0czogW1xuICAgICAgICB7IGlkOiBcImFsbFNpemVzXCIsIGxhYmVsOiBcIk1JWFwiIH0sXG4gICAgICAgIHsgaWQ6IFwibWVkaXVtXCIsIGxhYmVsOiBcIk1FRElPXCIgfSxcbiAgICAgICAgeyBpZDogXCJiaWdcIiwgbGFiZWw6IFwiR1JBTkRFXCIgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBzb2FwV29ya3M6IHtcbiAgICAgIGxhYmVsOiBcIlNBQk9BUklBXCIsXG4gICAgICBiYWNrZ3JvdW5kOiBcIi9Qcm9kdWN0cy9zYWJvYXJpYTEuanBnXCIsXG4gICAgICBwYXRoOiBcInNhYm9hcmlhXCIsXG4gICAgICBwcm9kdWN0czogW1xuICAgICAgICB7IGlkOiBcIm9mdXJvXCIsIGxhYmVsOiBcIlNBSVNcIiB9LFxuICAgICAgICB7IGlkOiBcImdyZWVuQ2xheVwiLCBsYWJlbDogXCJTS0lOQ0FSRVwiIH0sXG4gICAgICAgIHsgaWQ6IFwic2hhbXBvb0NvbmRpdGlvbmVyXCIsIGxhYmVsOiBcIkNBQkVMT1NcIiB9LFxuICAgICAgICB7IGlkOiBcInNvYXBcIiwgbGFiZWw6IFwiU0FCT05FVEVcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICBjYXRhbG9nOiB7XG4gICAgYmlvQ2xvdGhzOiB7XG4gICAgICBhbGxTaXplczoge1xuICAgICAgICAwOiB7XG4gICAgICAgICAgaW1hZ2VzOiB7XG4gICAgICAgICAgICBwYXRoczogeyAwOiBcIjBcIiwgMTogXCIxXCIgfSxcbiAgICAgICAgICAgIGFsdDogXCJzb21lIGFsdCB0ZXh0IGZvciBhbGwgaW1hZ2VzXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBuYW1lOiBcIkFtYXJlbGluaG9cIixcbiAgICAgICAgICBzdG9jazogMjAsXG4gICAgICAgICAgcHJpY2U6IDEwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG1lZGl1bToge1xuICAgICAgICAwOiB7XG4gICAgICAgICAgaW1hZ2VzOiB7XG4gICAgICAgICAgICBwYXRoczogeyAwOiBcIjBcIiwgMTogXCIxXCIgfSxcbiAgICAgICAgICAgIGFsdDogXCJzb21lIGFsdCB0ZXh0IGZvciBhbGwgaW1hZ2VzXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBuYW1lOiBcIkZsb3Jlc3RhbFwiLFxuICAgICAgICAgIHN0b2NrOiAxMCxcbiAgICAgICAgICBwcmljZTogNTAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYmlnOiB7XG4gICAgICAgIDA6IHtcbiAgICAgICAgICBpbWFnZXM6IHtcbiAgICAgICAgICAgIHBhdGhzOiB7IDA6IFwiMFwiLCAxOiBcIjFcIiB9LFxuICAgICAgICAgICAgYWx0OiBcInNvbWUgYWx0IHRleHQgZm9yIGFsbCBpbWFnZXNcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5hbWU6IFwiSm9ibGluaG9cIixcbiAgICAgICAgICBzdG9jazogNDAsXG4gICAgICAgICAgcHJpY2U6IDcwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNvYXBXb3Jrczoge1xuICAgICAgb2Z1cm86IHtcbiAgICAgICAgMDoge1xuICAgICAgICAgIGltYWdlczoge1xuICAgICAgICAgICAgcGF0aHM6IHsgMDogXCIwXCIsIDE6IFwiMVwiIH0sXG4gICAgICAgICAgICBhbHQ6IFwic29tZSBhbHQgdGV4dCBmb3IgYWxsIGltYWdlc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbmFtZTogXCJCZWLDqiBTb25pbmhvXCIsXG4gICAgICAgICAgc3RvY2s6IDIwLFxuICAgICAgICAgIHByaWNlOiAxMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBncmVlbkNsYXk6IHtcbiAgICAgICAgMDoge1xuICAgICAgICAgIGltYWdlczoge1xuICAgICAgICAgICAgcGF0aHM6IHsgMDogXCIwXCIsIDE6IFwiMVwiIH0sXG4gICAgICAgICAgICBhbHQ6IFwic29tZSBhbHQgdGV4dCBmb3IgYWxsIGltYWdlc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbmFtZTogXCJCZWxlemEgVG90YWxcIixcbiAgICAgICAgICBzdG9jazogMjAsXG4gICAgICAgICAgcHJpY2U6IDEwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHNoYW1wb29Db25kaXRpb25lcjoge1xuICAgICAgICAwOiB7XG4gICAgICAgICAgaW1hZ2VzOiB7XG4gICAgICAgICAgICBwYXRoczogeyAwOiBcIjBcIiwgMTogXCIxXCIgfSxcbiAgICAgICAgICAgIGFsdDogXCJzb21lIGFsdCB0ZXh0IGZvciBhbGwgaW1hZ2VzXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBuYW1lOiBcIlJlc3RhdXJhw6fDo28gQ2FwaWxhclwiLFxuICAgICAgICAgIHN0b2NrOiAyMCxcbiAgICAgICAgICBwcmljZTogMTAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgc29hcDoge1xuICAgICAgICAwOiB7XG4gICAgICAgICAgaW1hZ2VzOiB7XG4gICAgICAgICAgICBwYXRoczogeyAwOiBcIjBcIiwgMTogXCIxXCIgfSxcbiAgICAgICAgICAgIGFsdDogXCJzb21lIGFsdCB0ZXh0IGZvciBhbGwgaW1hZ2VzXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBuYW1lOiBcIkhpZHJhdGEgVHVkb1wiLFxuICAgICAgICAgIHN0b2NrOiAyMCxcbiAgICAgICAgICBwcmljZTogMTAsXG4gICAgICAgIH0sXG4gICAgICAgIDI6IHtcbiAgICAgICAgICBpbWFnZXM6IHtcbiAgICAgICAgICAgIHBhdGhzOiB7IDA6IFwiMFwiLCAxOiBcIjFcIiB9LFxuICAgICAgICAgICAgYWx0OiBcInNvbWUgYWx0IHRleHQgZm9yIGFsbCBpbWFnZXNcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5hbWU6IFwiRXNmb2xpYSBTdWEgQWxtYVwiLFxuICAgICAgICAgIHN0b2NrOiAyMCxcbiAgICAgICAgICBwcmljZTogMTAsXG4gICAgICAgIH0sXG4gICAgICAgIDM6IHtcbiAgICAgICAgICBpbWFnZXM6IHtcbiAgICAgICAgICAgIHBhdGhzOiB7IDA6IFwiMFwiLCAxOiBcIjFcIiB9LFxuICAgICAgICAgICAgYWx0OiBcInNvbWUgYWx0IHRleHQgZm9yIGFsbCBpbWFnZXNcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5hbWU6IFwiSG9ydGVsw6MgTWVudG9sYWRvXCIsXG4gICAgICAgICAgc3RvY2s6IDIwLFxuICAgICAgICAgIHByaWNlOiAxMCxcbiAgICAgICAgfSxcbiAgICAgICAgNDoge1xuICAgICAgICAgIGltYWdlczoge1xuICAgICAgICAgICAgcGF0aHM6IHsgMDogXCIwXCIsIDE6IFwiMVwiIH0sXG4gICAgICAgICAgICBhbHQ6IFwic29tZSBhbHQgdGV4dCBmb3IgYWxsIGltYWdlc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbmFtZTogXCJDYWNhdSBjb20gQ2hvY29sYXRlXCIsXG4gICAgICAgICAgc3RvY2s6IDIwLFxuICAgICAgICAgIHByaWNlOiAxMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZGV0YWlsczoge1xuICAgIGJpb0Nsb3Roczoge1xuICAgICAgYWxsU2l6ZXM6IHt9LFxuICAgICAgbWVkaXVtOiB7fSxcbiAgICAgIGJpZzoge30sXG4gICAgfSxcbiAgICBzb2FwV29ya3M6IHtcbiAgICAgIG9mdXJvOiB7fSxcbiAgICAgIGdyZWVuQ2xheToge30sXG4gICAgICBzaGFtcG9vQ29uZGl0aW9uZXI6IHt9LFxuICAgICAgc29hcDoge30sXG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IHRvZ2dsZUNhdGFsb2cgPSAoc3RhdGUsIHBheWxvYWQpID0+IHtcbiAgcmV0dXJuIHNldFN0YXRlKHtcbiAgICAuLi5zdGF0ZSxcbiAgICBhY3RpdmVDYXRhbG9nOiBwYXlsb2FkLmNhdGFsb2csXG4gICAgYWN0aXZlQ2F0ZWdvcnk6IHBheWxvYWQuY2F0ZWdvcnksXG4gIH0pO1xufTtcblxuY29uc3QgdG9nZ2xlQ2F0ZWdvcnkgPSAoc3RhdGUsIHBheWxvYWQpID0+IHtcbiAgcmV0dXJuIHNldFN0YXRlKHsgLi4uc3RhdGUsIGFjdGl2ZUNhdGVnb3J5OiBwYXlsb2FkLmNhdGVnb3J5IH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgcGF5bG9hZCkgPT4ge1xuICBzd2l0Y2ggKHBheWxvYWQudHlwZSkge1xuICAgIGNhc2UgYWN0aW9ucy5UT0dHTEVfQ0FUQUxPRzpcbiAgICAgIHJldHVybiB0b2dnbGVDYXRhbG9nKHN0YXRlLCBwYXlsb2FkKTtcbiAgICBjYXNlIGFjdGlvbnMuVE9HR0xFX0NBVEVHT1JZOlxuICAgICAgcmV0dXJuIHRvZ2dsZUNhdGVnb3J5KHN0YXRlLCBwYXlsb2FkKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/reducers/productsReducer.js\n");

/***/ })

})