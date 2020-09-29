webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/productsReducer.js":
/*!*******************************************!*\
  !*** ./store/reducers/productsReducer.js ***!
  \*******************************************/
/*! exports provided: productsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productsReducer\", function() { return productsReducer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _actions_productsActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/productsActions */ \"./store/actions/productsActions.js\");\n/* harmony import */ var _Utilities_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities/utilities */ \"./Utilities/utilities.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar initialState = {\n  activeCatalog: \"bioCloths\",\n  activeCategory: \"allSizes\",\n  overview: {\n    bioCloths: {\n      label: \"BIO EMBALAGENS\",\n      background: \"/Products/Cloth3.jpg\",\n      path: \"bio-embalagens\",\n      products: [{\n        id: \"allSizes\",\n        label: \"MIX\"\n      }, {\n        id: \"medium\",\n        label: \"MEDIO\"\n      }, {\n        id: \"big\",\n        label: \"GRANDE\"\n      }]\n    },\n    soapWorks: {\n      label: \"SABOARIA\",\n      background: \"/Products/saboaria1.jpg\",\n      path: \"saboaria\",\n      products: [{\n        id: \"ofuro\",\n        label: \"SAIS\"\n      }, {\n        id: \"greenClay\",\n        label: \"SKINCARE\"\n      }, {\n        id: \"shampooConditioner\",\n        label: \"CABELOS\"\n      }, {\n        id: \"soap\",\n        label: \"SABONETE\"\n      }]\n    }\n  },\n  catalog: {\n    bioCloths: {\n      allSizes: {\n        1: {\n          images: {\n            paths: {\n              0: \"0\",\n              1: \"1\"\n            },\n            alt: \"some alt text for all images\"\n          },\n          name: \"Amarelinho\",\n          stock: 20,\n          price: 10\n        }\n      },\n      medium: {\n        1: {\n          images: {\n            paths: {\n              0: \"0\",\n              1: \"1\"\n            },\n            alt: \"some alt text for all images\"\n          },\n          name: \"Florestal\",\n          stock: 10,\n          price: 50\n        }\n      },\n      big: {\n        1: {\n          images: {\n            paths: {\n              0: \"0\",\n              1: \"1\"\n            },\n            alt: \"some alt text for all images\"\n          },\n          name: \"Joblinho\",\n          stock: 40,\n          price: 70\n        }\n      }\n    },\n    soapWorks: {\n      ofuro: {\n        1: {\n          images: {\n            paths: {\n              0: \"0\",\n              1: \"1\"\n            },\n            alt: \"some alt text for all images\"\n          },\n          name: \"Bebê Soninho\",\n          stock: 20,\n          price: 10\n        }\n      },\n      greenClay: {\n        1: {\n          images: [\"Soap1\"],\n          name: \"Beleza Total\",\n          stock: 20,\n          price: 10\n        }\n      },\n      shampooConditioner: {\n        1: {\n          images: [\"Soap1\"],\n          name: \"Restauração Capilar\",\n          stock: 20,\n          price: 10\n        }\n      },\n      soap: {\n        1: {\n          images: [\"Soap1\"],\n          name: \"Hidrata Tudo\",\n          stock: 20,\n          price: 10\n        },\n        2: {\n          images: [\"Soap2\"],\n          name: \"Esfolia Sua Alma\",\n          stock: 20,\n          price: 10\n        },\n        3: {\n          images: [\"Soap3\"],\n          name: \"Hortelã Mentolado\",\n          stock: 20,\n          price: 10\n        },\n        4: {\n          images: [\"Soap3\"],\n          name: \"Cacau com Chocolate\",\n          stock: 20,\n          price: 10\n        }\n      }\n    }\n  },\n  details: {\n    bioCloths: {\n      allSizes: {},\n      medium: {},\n      big: {}\n    },\n    soapWorks: {\n      ofuro: {},\n      greenClay: {},\n      shampooConditioner: {},\n      soap: {}\n    }\n  }\n};\n\nvar toggleCatalog = function toggleCatalog(state, payload) {\n  return Object(_Utilities_utilities__WEBPACK_IMPORTED_MODULE_2__[\"setState\"])(_objectSpread(_objectSpread({}, state), {}, {\n    activeCatalog: payload.catalog,\n    activeCategory: payload.category\n  }));\n};\n\nvar toggleCategory = function toggleCategory(state, payload) {\n  return Object(_Utilities_utilities__WEBPACK_IMPORTED_MODULE_2__[\"setState\"])(_objectSpread(_objectSpread({}, state), {}, {\n    activeCategory: payload.category\n  }));\n};\n\nvar productsReducer = function productsReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var payload = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (payload.type) {\n    case _actions_productsActions__WEBPACK_IMPORTED_MODULE_1__[\"TOGGLE_CATALOG\"]:\n      return toggleCatalog(state, payload);\n\n    case _actions_productsActions__WEBPACK_IMPORTED_MODULE_1__[\"TOGGLE_CATEGORY\"]:\n      return toggleCategory(state, payload);\n\n    default:\n      return state;\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvcHJvZHVjdHNSZWR1Y2VyLmpzPzFkZTAiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiYWN0aXZlQ2F0YWxvZyIsImFjdGl2ZUNhdGVnb3J5Iiwib3ZlcnZpZXciLCJiaW9DbG90aHMiLCJsYWJlbCIsImJhY2tncm91bmQiLCJwYXRoIiwicHJvZHVjdHMiLCJpZCIsInNvYXBXb3JrcyIsImNhdGFsb2ciLCJhbGxTaXplcyIsImltYWdlcyIsInBhdGhzIiwiYWx0IiwibmFtZSIsInN0b2NrIiwicHJpY2UiLCJtZWRpdW0iLCJiaWciLCJvZnVybyIsImdyZWVuQ2xheSIsInNoYW1wb29Db25kaXRpb25lciIsInNvYXAiLCJkZXRhaWxzIiwidG9nZ2xlQ2F0YWxvZyIsInN0YXRlIiwicGF5bG9hZCIsInNldFN0YXRlIiwiY2F0ZWdvcnkiLCJ0b2dnbGVDYXRlZ29yeSIsInByb2R1Y3RzUmVkdWNlciIsInR5cGUiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLGVBQWEsRUFBRSxXQURJO0FBRW5CQyxnQkFBYyxFQUFFLFVBRkc7QUFHbkJDLFVBQVEsRUFBRTtBQUNSQyxhQUFTLEVBQUU7QUFDVEMsV0FBSyxFQUFFLGdCQURFO0FBRVRDLGdCQUFVLEVBQUUsc0JBRkg7QUFHVEMsVUFBSSxFQUFFLGdCQUhHO0FBSVRDLGNBQVEsRUFBRSxDQUNSO0FBQUVDLFVBQUUsRUFBRSxVQUFOO0FBQWtCSixhQUFLLEVBQUU7QUFBekIsT0FEUSxFQUVSO0FBQUVJLFVBQUUsRUFBRSxRQUFOO0FBQWdCSixhQUFLLEVBQUU7QUFBdkIsT0FGUSxFQUdSO0FBQUVJLFVBQUUsRUFBRSxLQUFOO0FBQWFKLGFBQUssRUFBRTtBQUFwQixPQUhRO0FBSkQsS0FESDtBQVdSSyxhQUFTLEVBQUU7QUFDVEwsV0FBSyxFQUFFLFVBREU7QUFFVEMsZ0JB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LCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9wcm9kdWN0c1JlZHVjZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi9hY3Rpb25zL3Byb2R1Y3RzQWN0aW9uc1wiO1xuaW1wb3J0IHsgc2V0U3RhdGUgfSBmcm9tIFwiLi4vLi4vVXRpbGl0aWVzL3V0aWxpdGllc1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGFjdGl2ZUNhdGFsb2c6IFwiYmlvQ2xvdGhzXCIsXG4gIGFjdGl2ZUNhdGVnb3J5OiBcImFsbFNpemVzXCIsXG4gIG92ZXJ2aWV3OiB7XG4gICAgYmlvQ2xvdGhzOiB7XG4gICAgICBsYWJlbDogXCJCSU8gRU1CQUxBR0VOU1wiLFxuICAgICAgYmFja2dyb3VuZDogXCIvUHJvZHVjdHMvQ2xvdGgzLmpwZ1wiLFxuICAgICAgcGF0aDogXCJiaW8tZW1iYWxhZ2Vuc1wiLFxuICAgICAgcHJvZHVjdHM6IFtcbiAgICAgICAgeyBpZDogXCJhbGxTaXplc1wiLCBsYWJlbDogXCJNSVhcIiB9LFxuICAgICAgICB7IGlkOiBcIm1lZGl1bVwiLCBsYWJlbDogXCJNRURJT1wiIH0sXG4gICAgICAgIHsgaWQ6IFwiYmlnXCIsIGxhYmVsOiBcIkdSQU5ERVwiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgc29hcFdvcmtzOiB7XG4gICAgICBsYWJlbDogXCJTQUJPQVJJQVwiLFxuICAgICAgYmFja2dyb3VuZDogXCIvUHJvZHVjdHMvc2Fib2FyaWExLmpwZ1wiLFxuICAgICAgcGF0aDogXCJzYWJvYXJpYVwiLFxuICAgICAgcHJvZHVjdHM6IFtcbiAgICAgICAgeyBpZDogXCJvZnVyb1wiLCBsYWJlbDogXCJTQUlTXCIgfSxcbiAgICAgICAgeyBpZDogXCJncmVlbkNsYXlcIiwgbGFiZWw6IFwiU0tJTkNBUkVcIiB9LFxuICAgICAgICB7IGlkOiBcInNoYW1wb29Db25kaXRpb25lclwiLCBsYWJlbDogXCJDQUJFTE9TXCIgfSxcbiAgICAgICAgeyBpZDogXCJzb2FwXCIsIGxhYmVsOiBcIlNBQk9ORVRFXCIgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbiAgY2F0YWxvZzoge1xuICAgIGJpb0Nsb3Roczoge1xuICAgICAgYWxsU2l6ZXM6IHtcbiAgICAgICAgMToge1xuICAgICAgICAgIGltYWdlczoge1xuICAgICAgICAgICAgcGF0aHM6IHsgMDogXCIwXCIsIDE6IFwiMVwiIH0sXG4gICAgICAgICAgICBhbHQ6IFwic29tZSBhbHQgdGV4dCBmb3IgYWxsIGltYWdlc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbmFtZTogXCJBbWFyZWxpbmhvXCIsXG4gICAgICAgICAgc3RvY2s6IDIwLFxuICAgICAgICAgIHByaWNlOiAxMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBtZWRpdW06IHtcbiAgICAgICAgMToge1xuICAgICAgICAgIGltYWdlczoge1xuICAgICAgICAgICAgcGF0aHM6IHsgMDogXCIwXCIsIDE6IFwiMVwiIH0sXG4gICAgICAgICAgICBhbHQ6IFwic29tZSBhbHQgdGV4dCBmb3IgYWxsIGltYWdlc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbmFtZTogXCJGbG9yZXN0YWxcIixcbiAgICAgICAgICBzdG9jazogMTAsXG4gICAgICAgICAgcHJpY2U6IDUwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGJpZzoge1xuICAgICAgICAxOiB7XG4gICAgICAgICAgaW1hZ2VzOiB7XG4gICAgICAgICAgICBwYXRoczogeyAwOiBcIjBcIiwgMTogXCIxXCIgfSxcbiAgICAgICAgICAgIGFsdDogXCJzb21lIGFsdCB0ZXh0IGZvciBhbGwgaW1hZ2VzXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBuYW1lOiBcIkpvYmxpbmhvXCIsXG4gICAgICAgICAgc3RvY2s6IDQwLFxuICAgICAgICAgIHByaWNlOiA3MCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzb2FwV29ya3M6IHtcbiAgICAgIG9mdXJvOiB7XG4gICAgICAgIDE6IHtcbiAgICAgICAgICBpbWFnZXM6IHtcbiAgICAgICAgICAgIHBhdGhzOiB7IDA6IFwiMFwiLCAxOiBcIjFcIiB9LFxuICAgICAgICAgICAgYWx0OiBcInNvbWUgYWx0IHRleHQgZm9yIGFsbCBpbWFnZXNcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5hbWU6IFwiQmViw6ogU29uaW5ob1wiLFxuICAgICAgICAgIHN0b2NrOiAyMCxcbiAgICAgICAgICBwcmljZTogMTAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZ3JlZW5DbGF5OiB7XG4gICAgICAgIDE6IHtcbiAgICAgICAgICBpbWFnZXM6IFtcIlNvYXAxXCJdLFxuICAgICAgICAgIG5hbWU6IFwiQmVsZXphIFRvdGFsXCIsXG4gICAgICAgICAgc3RvY2s6IDIwLFxuICAgICAgICAgIHByaWNlOiAxMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBzaGFtcG9vQ29uZGl0aW9uZXI6IHtcbiAgICAgICAgMToge1xuICAgICAgICAgIGltYWdlczogW1wiU29hcDFcIl0sXG4gICAgICAgICAgbmFtZTogXCJSZXN0YXVyYcOnw6NvIENhcGlsYXJcIixcbiAgICAgICAgICBzdG9jazogMjAsXG4gICAgICAgICAgcHJpY2U6IDEwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHNvYXA6IHtcbiAgICAgICAgMToge1xuICAgICAgICAgIGltYWdlczogW1wiU29hcDFcIl0sXG4gICAgICAgICAgbmFtZTogXCJIaWRyYXRhIFR1ZG9cIixcbiAgICAgICAgICBzdG9jazogMjAsXG4gICAgICAgICAgcHJpY2U6IDEwLFxuICAgICAgICB9LFxuICAgICAgICAyOiB7XG4gICAgICAgICAgaW1hZ2VzOiBbXCJTb2FwMlwiXSxcbiAgICAgICAgICBuYW1lOiBcIkVzZm9saWEgU3VhIEFsbWFcIixcbiAgICAgICAgICBzdG9jazogMjAsXG4gICAgICAgICAgcHJpY2U6IDEwLFxuICAgICAgICB9LFxuICAgICAgICAzOiB7XG4gICAgICAgICAgaW1hZ2VzOiBbXCJTb2FwM1wiXSxcbiAgICAgICAgICBuYW1lOiBcIkhvcnRlbMOjIE1lbnRvbGFkb1wiLFxuICAgICAgICAgIHN0b2NrOiAyMCxcbiAgICAgICAgICBwcmljZTogMTAsXG4gICAgICAgIH0sXG4gICAgICAgIDQ6IHtcbiAgICAgICAgICBpbWFnZXM6IFtcIlNvYXAzXCJdLFxuICAgICAgICAgIG5hbWU6IFwiQ2FjYXUgY29tIENob2NvbGF0ZVwiLFxuICAgICAgICAgIHN0b2NrOiAyMCxcbiAgICAgICAgICBwcmljZTogMTAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGRldGFpbHM6IHtcbiAgICBiaW9DbG90aHM6IHtcbiAgICAgIGFsbFNpemVzOiB7fSxcbiAgICAgIG1lZGl1bToge30sXG4gICAgICBiaWc6IHt9LFxuICAgIH0sXG4gICAgc29hcFdvcmtzOiB7XG4gICAgICBvZnVybzoge30sXG4gICAgICBncmVlbkNsYXk6IHt9LFxuICAgICAgc2hhbXBvb0NvbmRpdGlvbmVyOiB7fSxcbiAgICAgIHNvYXA6IHt9LFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCB0b2dnbGVDYXRhbG9nID0gKHN0YXRlLCBwYXlsb2FkKSA9PiB7XG4gIHJldHVybiBzZXRTdGF0ZSh7XG4gICAgLi4uc3RhdGUsXG4gICAgYWN0aXZlQ2F0YWxvZzogcGF5bG9hZC5jYXRhbG9nLFxuICAgIGFjdGl2ZUNhdGVnb3J5OiBwYXlsb2FkLmNhdGVnb3J5LFxuICB9KTtcbn07XG5cbmNvbnN0IHRvZ2dsZUNhdGVnb3J5ID0gKHN0YXRlLCBwYXlsb2FkKSA9PiB7XG4gIHJldHVybiBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBhY3RpdmVDYXRlZ29yeTogcGF5bG9hZC5jYXRlZ29yeSB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0c1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIHBheWxvYWQpID0+IHtcbiAgc3dpdGNoIChwYXlsb2FkLnR5cGUpIHtcbiAgICBjYXNlIGFjdGlvbnMuVE9HR0xFX0NBVEFMT0c6XG4gICAgICByZXR1cm4gdG9nZ2xlQ2F0YWxvZyhzdGF0ZSwgcGF5bG9hZCk7XG4gICAgY2FzZSBhY3Rpb25zLlRPR0dMRV9DQVRFR09SWTpcbiAgICAgIHJldHVybiB0b2dnbGVDYXRlZ29yeShzdGF0ZSwgcGF5bG9hZCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/reducers/productsReducer.js\n");

/***/ })

})