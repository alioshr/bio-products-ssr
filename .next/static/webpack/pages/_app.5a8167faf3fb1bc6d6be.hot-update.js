webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/productsReducer.js":
/*!*******************************************!*\
  !*** ./store/reducers/productsReducer.js ***!
  \*******************************************/
/*! exports provided: productsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productsReducer\", function() { return productsReducer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _actions_productsActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/productsActions */ \"./store/actions/productsActions.js\");\n/* harmony import */ var _Utilities_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities/utilities */ \"./Utilities/utilities.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar initialState = {\n  activeCatalog: \"bioCloths\",\n  activeCategory: \"allSizes\",\n  overview: {\n    bioCloths: {\n      label: \"BIO EMBALAGENS\",\n      background: \"/Products/overview/\",\n      path: \"bio-embalagens\",\n      products: [{\n        id: \"allSizes\",\n        label: \"MIX\"\n      }, {\n        id: \"medium\",\n        label: \"MEDIO\"\n      }, {\n        id: \"big\",\n        label: \"GRANDE\"\n      }]\n    },\n    soapWorks: {\n      label: \"SABOARIA\",\n      background: \"/Products/saboaria1.jpg\",\n      path: \"saboaria\",\n      products: [{\n        id: \"shampooConditioner\",\n        label: \"CABELOS\"\n      }, {\n        id: \"soap\",\n        label: \"SABONETE\"\n      }]\n    }\n  },\n  catalog: {\n    bioCloths: {\n      allSizes: {\n        0: {\n          images: {\n            paths: {\n              0: \"/Products/bioCloths/allSizes/0/0.jpg\"\n            },\n            alt: \"some alt text for all images\"\n          },\n          name: \"Amarelinho\",\n          stock: 5,\n          price: 10,\n          off: false\n        }\n      },\n      medium: {\n        0: {\n          images: {\n            paths: {\n              0: \"/Products/bioCloths/medium/0/0.jpg\"\n            },\n            alt: \"some alt text for all images\"\n          },\n          name: \"Florestal\",\n          stock: 10,\n          price: 50,\n          off: false\n        }\n      },\n      big: {\n        0: {\n          images: {\n            paths: {\n              0: \"/Products/bioCloths/big/0/0.jpg\"\n            },\n            alt: \"some alt text for all images\"\n          },\n          name: \"Joblinho\",\n          stock: 40,\n          price: 70,\n          off: false\n        }\n      }\n    },\n    soapWorks: {\n      shampooConditioner: {\n        0: {\n          images: {\n            paths: {\n              0: \"/Products/soapWorks/shampooConditioner/0/0.jpg\",\n              1: \"/Products/soapWorks/shampooConditioner/0/1.jpg\"\n            },\n            alt: \"some alt text for all images\"\n          },\n          name: \"Restauração Capilar\",\n          stock: 20,\n          price: 10,\n          off: false\n        }\n      },\n      soap: {\n        0: {\n          images: {\n            paths: {\n              0: \"/Products/soapWorks/soap/0/0.jpg\"\n            },\n            alt: \"some alt text for all images\"\n          },\n          name: \"Hidrata Tudo\",\n          stock: 20,\n          price: 10,\n          off: false\n        },\n        1: {\n          images: {\n            paths: {\n              0: \"/Products/soapWorks/soap/1/0.jpg\"\n            },\n            alt: \"some alt text for all images\"\n          },\n          name: \"Esfolia Sua Alma\",\n          stock: 3,\n          price: 10,\n          off: false\n        },\n        2: {\n          images: {\n            paths: {\n              0: \"/Products/soapWorks/soap/2/0.jpg\"\n            },\n            alt: \"some alt text for all images\"\n          },\n          name: \"Hortelã Mentolado\",\n          stock: 20,\n          price: 10,\n          off: 50\n        },\n        3: {\n          images: {\n            paths: {\n              0: \"/Products/soapWorks/soap/3/0.jpg\"\n            },\n            alt: \"some alt text for all images\"\n          },\n          name: \"Cacau com Chocolate\",\n          stock: 20,\n          price: 10,\n          off: false\n        }\n      }\n    }\n  },\n  details: {\n    bioCloths: {\n      allSizes: {},\n      medium: {},\n      big: {}\n    },\n    soapWorks: {\n      ofuro: {},\n      greenClay: {},\n      shampooConditioner: {},\n      soap: {}\n    }\n  }\n};\n\nvar toggleCatalog = function toggleCatalog(state, payload) {\n  return Object(_Utilities_utilities__WEBPACK_IMPORTED_MODULE_2__[\"setState\"])(_objectSpread(_objectSpread({}, state), {}, {\n    activeCatalog: payload.catalog,\n    activeCategory: payload.category\n  }));\n};\n\nvar toggleCategory = function toggleCategory(state, payload) {\n  return Object(_Utilities_utilities__WEBPACK_IMPORTED_MODULE_2__[\"setState\"])(_objectSpread(_objectSpread({}, state), {}, {\n    activeCategory: payload.category\n  }));\n};\n\nvar productsReducer = function productsReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var payload = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (payload.type) {\n    case _actions_productsActions__WEBPACK_IMPORTED_MODULE_1__[\"TOGGLE_CATALOG\"]:\n      return toggleCatalog(state, payload);\n\n    case _actions_productsActions__WEBPACK_IMPORTED_MODULE_1__[\"TOGGLE_CATEGORY\"]:\n      return toggleCategory(state, payload);\n\n    default:\n      return state;\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvcHJvZHVjdHNSZWR1Y2VyLmpzPzFkZTAiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiYWN0aXZlQ2F0YWxvZyIsImFjdGl2ZUNhdGVnb3J5Iiwib3ZlcnZpZXciLCJiaW9DbG90aHMiLCJsYWJlbCIsImJhY2tncm91bmQiLCJwYXRoIiwicHJvZHVjdHMiLCJpZCIsInNvYXBXb3JrcyIsImNhdGFsb2ciLCJhbGxTaXplcyIsImltYWdlcyIsInBhdGhzIiwiYWx0IiwibmFtZSIsInN0b2NrIiwicHJpY2UiLCJvZmYiLCJtZWRpdW0iLCJiaWciLCJzaGFtcG9vQ29uZGl0aW9uZXIiLCJzb2FwIiwiZGV0YWlscyIsIm9mdXJvIiwiZ3JlZW5DbGF5IiwidG9nZ2xlQ2F0YWxvZyIsInN0YXRlIiwicGF5bG9hZCIsInNldFN0YXRlIiwiY2F0ZWdvcnkiLCJ0b2dnbGVDYXRlZ29yeSIsInByb2R1Y3RzUmVkdWNlciIsInR5cGUiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLGVBQWEsRUFBRSxXQURJO0FBRW5CQyxnQkFBYyxFQUFFLFVBRkc7QUFHbkJDLFVBQVEsRUFBRTtBQUNSQyxhQUFTLEVBQUU7QUFDVEMsV0FBSyxFQUFFLGdCQURFO0FBRVRDLGdCQUFVLEVBQUUscUJBRkg7QUFHVEMsVUFBSSxFQUFFLGdCQUhHO0FBSVRDLGNBQVEsRUFBRSxDQUNSO0FBQUVDLFVBQUUsRUFBRSxVQUFOO0FBQWtCSixhQUFLLEVBQUU7QUFBekIsT0FEUSxFQUVSO0FBQUVJLFVBQUUsRUFBRSxRQUFOO0FBQWdCSixhQUFLLEVBQUU7QUFBdkIsT0FGUSxFQUdSO0FBQUVJLFVBQUUsRUFBRSxLQUFOO0FBQWFKLGFBQUssRUFBRTtBQUFwQixPQUhRO0FBSkQsS0FESDtBQVdSSyxhQUFTLEVBQUU7QUFDVEwsV0FBSyxFQUFFLFVBREU7QUFF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cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uL2FjdGlvbnMvcHJvZHVjdHNBY3Rpb25zXCI7XG5pbXBvcnQgeyBzZXRTdGF0ZSB9IGZyb20gXCIuLi8uLi9VdGlsaXRpZXMvdXRpbGl0aWVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgYWN0aXZlQ2F0YWxvZzogXCJiaW9DbG90aHNcIixcbiAgYWN0aXZlQ2F0ZWdvcnk6IFwiYWxsU2l6ZXNcIixcbiAgb3ZlcnZpZXc6IHtcbiAgICBiaW9DbG90aHM6IHtcbiAgICAgIGxhYmVsOiBcIkJJTyBFTUJBTEFHRU5TXCIsXG4gICAgICBiYWNrZ3JvdW5kOiBcIi9Qcm9kdWN0cy9vdmVydmlldy9cIixcbiAgICAgIHBhdGg6IFwiYmlvLWVtYmFsYWdlbnNcIixcbiAgICAgIHByb2R1Y3RzOiBbXG4gICAgICAgIHsgaWQ6IFwiYWxsU2l6ZXNcIiwgbGFiZWw6IFwiTUlYXCIgfSxcbiAgICAgICAgeyBpZDogXCJtZWRpdW1cIiwgbGFiZWw6IFwiTUVESU9cIiB9LFxuICAgICAgICB7IGlkOiBcImJpZ1wiLCBsYWJlbDogXCJHUkFOREVcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHNvYXBXb3Jrczoge1xuICAgICAgbGFiZWw6IFwiU0FCT0FSSUFcIixcbiAgICAgIGJhY2tncm91bmQ6IFwiL1Byb2R1Y3RzL3NhYm9hcmlhMS5qcGdcIixcbiAgICAgIHBhdGg6IFwic2Fib2FyaWFcIixcbiAgICAgIHByb2R1Y3RzOiBbXG4gICAgICAgIHsgaWQ6IFwic2hhbXBvb0NvbmRpdGlvbmVyXCIsIGxhYmVsOiBcIkNBQkVMT1NcIiB9LFxuICAgICAgICB7IGlkOiBcInNvYXBcIiwgbGFiZWw6IFwiU0FCT05FVEVcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICBjYXRhbG9nOiB7XG4gICAgYmlvQ2xvdGhzOiB7XG4gICAgICBhbGxTaXplczoge1xuICAgICAgICAwOiB7XG4gICAgICAgICAgaW1hZ2VzOiB7XG4gICAgICAgICAgICBwYXRoczogeyAwOiBcIi9Qcm9kdWN0cy9iaW9DbG90aHMvYWxsU2l6ZXMvMC8wLmpwZ1wiIH0sXG4gICAgICAgICAgICBhbHQ6IFwic29tZSBhbHQgdGV4dCBmb3IgYWxsIGltYWdlc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbmFtZTogXCJBbWFyZWxpbmhvXCIsXG4gICAgICAgICAgc3RvY2s6IDUsXG4gICAgICAgICAgcHJpY2U6IDEwLFxuICAgICAgICAgIG9mZjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgbWVkaXVtOiB7XG4gICAgICAgIDA6IHtcbiAgICAgICAgICBpbWFnZXM6IHtcbiAgICAgICAgICAgIHBhdGhzOiB7IDA6IFwiL1Byb2R1Y3RzL2Jpb0Nsb3Rocy9tZWRpdW0vMC8wLmpwZ1wiIH0sXG4gICAgICAgICAgICBhbHQ6IFwic29tZSBhbHQgdGV4dCBmb3IgYWxsIGltYWdlc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbmFtZTogXCJGbG9yZXN0YWxcIixcbiAgICAgICAgICBzdG9jazogMTAsXG4gICAgICAgICAgcHJpY2U6IDUwLFxuICAgICAgICAgIG9mZjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYmlnOiB7XG4gICAgICAgIDA6IHtcbiAgICAgICAgICBpbWFnZXM6IHtcbiAgICAgICAgICAgIHBhdGhzOiB7IDA6IFwiL1Byb2R1Y3RzL2Jpb0Nsb3Rocy9iaWcvMC8wLmpwZ1wiIH0sXG4gICAgICAgICAgICBhbHQ6IFwic29tZSBhbHQgdGV4dCBmb3IgYWxsIGltYWdlc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbmFtZTogXCJKb2JsaW5ob1wiLFxuICAgICAgICAgIHN0b2NrOiA0MCxcbiAgICAgICAgICBwcmljZTogNzAsXG4gICAgICAgICAgb2ZmOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzb2FwV29ya3M6IHtcbiAgICAgIHNoYW1wb29Db25kaXRpb25lcjoge1xuICAgICAgICAwOiB7XG4gICAgICAgICAgaW1hZ2VzOiB7XG4gICAgICAgICAgICBwYXRoczoge1xuICAgICAgICAgICAgICAwOiBcIi9Qcm9kdWN0cy9zb2FwV29ya3Mvc2hhbXBvb0NvbmRpdGlvbmVyLzAvMC5qcGdcIixcbiAgICAgICAgICAgICAgMTogXCIvUHJvZHVjdHMvc29hcFdvcmtzL3NoYW1wb29Db25kaXRpb25lci8wLzEuanBnXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWx0OiBcInNvbWUgYWx0IHRleHQgZm9yIGFsbCBpbWFnZXNcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5hbWU6IFwiUmVzdGF1cmHDp8OjbyBDYXBpbGFyXCIsXG4gICAgICAgICAgc3RvY2s6IDIwLFxuICAgICAgICAgIHByaWNlOiAxMCxcbiAgICAgICAgICBvZmY6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHNvYXA6IHtcbiAgICAgICAgMDoge1xuICAgICAgICAgIGltYWdlczoge1xuICAgICAgICAgICAgcGF0aHM6IHsgMDogXCIvUHJvZHVjdHMvc29hcFdvcmtzL3NvYXAvMC8wLmpwZ1wiIH0sXG4gICAgICAgICAgICBhbHQ6IFwic29tZSBhbHQgdGV4dCBmb3IgYWxsIGltYWdlc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbmFtZTogXCJIaWRyYXRhIFR1ZG9cIixcbiAgICAgICAgICBzdG9jazogMjAsXG4gICAgICAgICAgcHJpY2U6IDEwLFxuICAgICAgICAgIG9mZjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIDE6IHtcbiAgICAgICAgICBpbWFnZXM6IHtcbiAgICAgICAgICAgIHBhdGhzOiB7IDA6IFwiL1Byb2R1Y3RzL3NvYXBXb3Jrcy9zb2FwLzEvMC5qcGdcIiB9LFxuICAgICAgICAgICAgYWx0OiBcInNvbWUgYWx0IHRleHQgZm9yIGFsbCBpbWFnZXNcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5hbWU6IFwiRXNmb2xpYSBTdWEgQWxtYVwiLFxuICAgICAgICAgIHN0b2NrOiAzLFxuICAgICAgICAgIHByaWNlOiAxMCxcbiAgICAgICAgICBvZmY6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICAyOiB7XG4gICAgICAgICAgaW1hZ2VzOiB7XG4gICAgICAgICAgICBwYXRoczogeyAwOiBcIi9Qcm9kdWN0cy9zb2FwV29ya3Mvc29hcC8yLzAuanBnXCIgfSxcbiAgICAgICAgICAgIGFsdDogXCJzb21lIGFsdCB0ZXh0IGZvciBhbGwgaW1hZ2VzXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBuYW1lOiBcIkhvcnRlbMOjIE1lbnRvbGFkb1wiLFxuICAgICAgICAgIHN0b2NrOiAyMCxcbiAgICAgICAgICBwcmljZTogMTAsXG4gICAgICAgICAgb2ZmOiA1MCxcbiAgICAgICAgfSxcbiAgICAgICAgMzoge1xuICAgICAgICAgIGltYWdlczoge1xuICAgICAgICAgICAgcGF0aHM6IHsgMDogXCIvUHJvZHVjdHMvc29hcFdvcmtzL3NvYXAvMy8wLmpwZ1wiIH0sXG4gICAgICAgICAgICBhbHQ6IFwic29tZSBhbHQgdGV4dCBmb3IgYWxsIGltYWdlc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbmFtZTogXCJDYWNhdSBjb20gQ2hvY29sYXRlXCIsXG4gICAgICAgICAgc3RvY2s6IDIwLFxuICAgICAgICAgIHByaWNlOiAxMCxcbiAgICAgICAgICBvZmY6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBkZXRhaWxzOiB7XG4gICAgYmlvQ2xvdGhzOiB7XG4gICAgICBhbGxTaXplczoge30sXG4gICAgICBtZWRpdW06IHt9LFxuICAgICAgYmlnOiB7fSxcbiAgICB9LFxuICAgIHNvYXBXb3Jrczoge1xuICAgICAgb2Z1cm86IHt9LFxuICAgICAgZ3JlZW5DbGF5OiB7fSxcbiAgICAgIHNoYW1wb29Db25kaXRpb25lcjoge30sXG4gICAgICBzb2FwOiB7fSxcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgdG9nZ2xlQ2F0YWxvZyA9IChzdGF0ZSwgcGF5bG9hZCkgPT4ge1xuICByZXR1cm4gc2V0U3RhdGUoe1xuICAgIC4uLnN0YXRlLFxuICAgIGFjdGl2ZUNhdGFsb2c6IHBheWxvYWQuY2F0YWxvZyxcbiAgICBhY3RpdmVDYXRlZ29yeTogcGF5bG9hZC5jYXRlZ29yeSxcbiAgfSk7XG59O1xuXG5jb25zdCB0b2dnbGVDYXRlZ29yeSA9IChzdGF0ZSwgcGF5bG9hZCkgPT4ge1xuICByZXR1cm4gc2V0U3RhdGUoeyAuLi5zdGF0ZSwgYWN0aXZlQ2F0ZWdvcnk6IHBheWxvYWQuY2F0ZWdvcnkgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgcHJvZHVjdHNSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBwYXlsb2FkKSA9PiB7XG4gIHN3aXRjaCAocGF5bG9hZC50eXBlKSB7XG4gICAgY2FzZSBhY3Rpb25zLlRPR0dMRV9DQVRBTE9HOlxuICAgICAgcmV0dXJuIHRvZ2dsZUNhdGFsb2coc3RhdGUsIHBheWxvYWQpO1xuICAgIGNhc2UgYWN0aW9ucy5UT0dHTEVfQ0FURUdPUlk6XG4gICAgICByZXR1cm4gdG9nZ2xlQ2F0ZWdvcnkoc3RhdGUsIHBheWxvYWQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/productsReducer.js\n");

/***/ })

})