webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/productsReducer.js":
/*!*******************************************!*\
  !*** ./store/reducers/productsReducer.js ***!
  \*******************************************/
/*! exports provided: productsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productsReducer\", function() { return productsReducer; });\n/* harmony import */ var _actions_productsActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/productsActions */ \"./store/actions/productsActions.js\");\n\n/* \n\n*/\n\nvar initialState = {\n  activeProductSection: '',\n  overview: {\n    bioCloths: {\n      label: \"BIO EMBALAGENS\",\n      avatar: 'Cloth3',\n      path: \"bio-packs\",\n      products: {\n        allSizes: {\n          label: \"MIX\"\n        },\n        medium: {\n          label: \"MEDIO\"\n        },\n        big: {\n          label: \"GRANDE\"\n        }\n      }\n    },\n    soapWorks: {\n      label: \"SABOARIA\",\n      avatar: 'Soap1',\n      path: \"soap-works\",\n      products: {\n        ofuro: {\n          label: \"SAIS\"\n        },\n        greenClay: {\n          label: \"SKINCARE\"\n        },\n        shampooConditioner: {\n          label: \"CABELOS\"\n        },\n        soap: {\n          label: \"SABONETE\"\n        }\n      }\n    }\n  },\n  catalog: {\n    bioCloths: {\n      info: {\n        label: \"BIO EMBALAGENS\"\n      },\n      products: {\n        allSizes: {\n          info: {\n            label: \"MIX\"\n          },\n          products: {\n            1: {\n              images: ['Cloth1', 'Cloth2', 'Cloth3'],\n              stock: 20,\n              price: 10,\n              details: \"ipsum foo 1\",\n              label: \"Foo1\"\n            }\n          }\n        },\n        medium: {\n          info: {\n            label: \"MEDIO\"\n          },\n          products: {\n            1: {\n              images: ['Cloth2'],\n              stock: 10,\n              price: 50,\n              details: \"ipsum foo 2\",\n              label: \"Foo2\"\n            }\n          }\n        },\n        big: {\n          info: {\n            label: \"GRANDE\"\n          },\n          products: {\n            1: {\n              images: ['Cloth3'],\n              stock: 40,\n              price: 70,\n              details: \"ipsum foo 3\",\n              label: \"Foo3\"\n            }\n          }\n        }\n      }\n    },\n    soapWorks: {\n      info: {\n        label: \"SABOARIA\"\n      },\n      products: {\n        ofuro: {\n          info: {\n            label: \"SAIS\"\n          },\n          products: {\n            1: {\n              images: ['Soap1'],\n              stock: 20,\n              price: 10,\n              details: \"ipsum foo\",\n              label: \"Sal de banho 1\"\n            }\n          }\n        },\n        greenClay: {\n          info: {\n            label: \"SKINCARE\"\n          },\n          products: {\n            1: {\n              images: ['Soap1'],\n              stock: 20,\n              price: 10,\n              details: \"ipsum foo\",\n              label: \"Argila Jobles\"\n            }\n          }\n        },\n        shampooConditioner: {\n          info: {\n            label: \"CABELOS\"\n          },\n          products: {\n            1: {\n              images: ['Soap1'],\n              stock: 20,\n              price: 10,\n              details: \"ipsum foo\",\n              label: \"Shampoo Little Joint\"\n            }\n          }\n        },\n        soap: {\n          info: {\n            label: \"SABONETE\"\n          },\n          products: {\n            1: {\n              images: ['Soap1'],\n              stock: 20,\n              price: 10,\n              details: \"Soap 1 ipsum foo\",\n              label: \"Sabnete 1\"\n            },\n            2: {\n              images: ['Soap2'],\n              stock: 20,\n              price: 10,\n              details: \"Soap 2 ipsum foo\",\n              label: \"Sabonete 2\"\n            },\n            3: {\n              images: ['Soap3'],\n              stock: 20,\n              price: 10,\n              details: \"Soap 3 ipsum foo\",\n              label: \"Sabonete 3\"\n            },\n            4: {\n              images: ['Soap3'],\n              stock: 20,\n              price: 10,\n              details: \"Soap 3 ipsum foo\",\n              label: \"Sabonete 4\"\n            }\n          }\n        }\n      }\n    }\n  }\n};\nvar productsReducer = function productsReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    default:\n      return state;\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvcHJvZHVjdHNSZWR1Y2VyLmpzPzFkZTAiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiYWN0aXZlUHJvZHVjdFNlY3Rpb24iLCJvdmVydmlldyIsImJpb0Nsb3RocyIsImxhYmVsIiwiYXZhdGFyIiwicGF0aCIsInByb2R1Y3RzIiwiYWxsU2l6ZXMiLCJtZWRpdW0iLCJiaWciLCJzb2FwV29ya3MiLCJvZnVybyIsImdyZWVuQ2xheSIsInNoYW1wb29Db25kaXRpb25lciIsInNvYXAiLCJjYXRhbG9nIiwiaW5mbyIsImltYWdlcyIsInN0b2NrIiwicHJpY2UiLCJkZXRhaWxzIiwicHJvZHVjdHNSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7O0FBSUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxzQkFBb0IsRUFBRSxFQURIO0FBRW5CQyxVQUFRLEVBQUU7QUFDUkMsYUFBUyxFQUFFO0FBQ1RDLFdBQUssRUFBRSxnQkFERTtBQUVUQyxZQUFNLEVBQUUsUUFGQztBQUdUQyxVQUFJLEVBQUUsV0FIRztBQUlUQyxjQUFRLEVBQUU7QUFDUkMsZ0JBQVEsRUFBRTtBQUNSSixlQUFLLEVBQUU7QUFEQyxTQURGO0FBSVJLLGNBQU0sRUFBRTtBQUNOTCxlQUFLLEVBQUU7QUFERCxTQUpBO0FBT1JNLFdBQUcsRUFBRTtBQUNITixlQUFLLEVBQUU7QUFESjtBQVBHO0FBSkQsS0FESDtBQWlCTk8sYUFBUyxFQUFFO0FBQ1RQLFdBQUssRUFBRSxVQURFO0FBRVRDLFlBQU0sRUFBRSxPQUZDO0FBR1RDLFVBQUksRUFBRSxZQUhHO0FBSVRDLGNBQVEsRUFBRTtBQUNSSyxhQUFLLEVBQUU7QUFDTFIsZUFBSyxFQUFFO0FBREYsU0FEQztBQUlSUyxpQkFBUyxFQUFFO0FBQ1RULGVBQUssRUFBRTtBQURFLFNBSkg7QUFPUlUsMEJBQWtCLEVB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QUFPLEVBQUUsa0JBSlI7QUFLRGpCLG1CQUFLLEVBQUU7QUFMTixhQURLO0FBUVIsZUFBRztBQUNEYyxvQkFBTSxFQUFFLENBQUMsT0FBRCxDQURQO0FBRURDLG1CQUFLLEVBQUUsRUFGTjtBQUdEQyxtQkFBSyxFQUFFLEVBSE47QUFJREMscUJBQU8sRUFBRSxrQkFKUjtBQUtEakIsbUJBQUssRUFBRTtBQUxOLGFBUks7QUFlUixlQUFHO0FBQ0RjLG9CQUFNLEVBQUUsQ0FBQyxPQUFELENBRFA7QUFFREMsbUJBQUssRUFBRSxFQUZOO0FBR0RDLG1CQUFLLEVBQUUsRUFITjtBQUlEQyxxQkFBTyxFQUFFLGtCQUpSO0FBS0RqQixtQkFBSyxFQUFFO0FBTE4sYUFmSztBQXNCUixlQUFHO0FBQ0RjLG9CQUFNLEVBQUUsQ0FBQyxPQUFELENBRFA7QUFFREMsbUJBQUssRUFBRSxFQUZOO0FBR0RDLG1CQUFLLEVBQUUsRUFITjtBQUlEQyxxQkFBTyxFQUFFLGtCQUpSO0FBS0RqQixtQkFBSyxFQUFFO0FBTE47QUF0Qks7QUFKTjtBQTNDRTtBQUpEO0FBbERKO0FBdkNVLENBQXJCO0FBZ0xPLElBQU1rQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QnZCLFlBQXlCO0FBQUEsTUFBWHdCLE1BQVc7O0FBQy9ELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFO0FBQ0UsYUFBT0YsS0FBUDtBQUZKO0FBSUQsQ0FMTSIsImZpbGUiOiIuL3N0b3JlL3JlZHVjZXJzL3Byb2R1Y3RzUmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9wcm9kdWN0c0FjdGlvbnMnXG5cbi8qIFxuXG4qL1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGFjdGl2ZVByb2R1Y3RTZWN0aW9uOiAnJyxcbiAgb3ZlcnZpZXc6IHtcbiAgICBiaW9DbG90aHM6IHtcbiAgICAgIGxhYmVsOiBcIkJJTyBFTUJBTEFHRU5TXCIsXG4gICAgICBhdmF0YXI6ICdDbG90aDMnLFxuICAgICAgcGF0aDogXCJiaW8tcGFja3NcIixcbiAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgIGFsbFNpemVzOiB7XG4gICAgICAgICAgbGFiZWw6IFwiTUlYXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG1lZGl1bToge1xuICAgICAgICAgIGxhYmVsOiBcIk1FRElPXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJpZzoge1xuICAgICAgICAgIGxhYmVsOiBcIkdSQU5ERVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgICAgc29hcFdvcmtzOiB7XG4gICAgICAgIGxhYmVsOiBcIlNBQk9BUklBXCIsXG4gICAgICAgIGF2YXRhcjogJ1NvYXAxJyxcbiAgICAgICAgcGF0aDogXCJzb2FwLXdvcmtzXCIsXG4gICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgb2Z1cm86IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIlNBSVNcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdyZWVuQ2xheToge1xuICAgICAgICAgICAgbGFiZWw6IFwiU0tJTkNBUkVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNoYW1wb29Db25kaXRpb25lcjoge1xuICAgICAgICAgICAgbGFiZWw6IFwiQ0FCRUxPU1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc29hcDoge1xuICAgICAgICAgICAgbGFiZWw6IFwiU0FCT05FVEVcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgfSxcbiAgY2F0YWxvZzoge1xuICAgIGJpb0Nsb3Roczoge1xuICAgICAgaW5mbzoge1xuICAgICAgICBsYWJlbDogXCJCSU8gRU1CQUxBR0VOU1wiLFxuICAgICAgfSxcbiAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgIGFsbFNpemVzOiB7XG4gICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgbGFiZWw6IFwiTUlYXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgMToge1xuICAgICAgICAgICAgICBpbWFnZXM6IFsnQ2xvdGgxJywgJ0Nsb3RoMicsICdDbG90aDMnXSxcbiAgICAgICAgICAgICAgc3RvY2s6IDIwLFxuICAgICAgICAgICAgICBwcmljZTogMTAsXG4gICAgICAgICAgICAgIGRldGFpbHM6IFwiaXBzdW0gZm9vIDFcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiRm9vMVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBtZWRpdW06IHtcbiAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJNRURJT1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgIDE6IHtcbiAgICAgICAgICAgICAgaW1hZ2VzOiBbJ0Nsb3RoMiddLFxuICAgICAgICAgICAgICBzdG9jazogMTAsXG4gICAgICAgICAgICAgIHByaWNlOiA1MCxcbiAgICAgICAgICAgICAgZGV0YWlsczogXCJpcHN1bSBmb28gMlwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJGb28yXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGJpZzoge1xuICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIkdSQU5ERVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgIDE6IHtcbiAgICAgICAgICAgICAgaW1hZ2VzOiBbJ0Nsb3RoMyddLFxuICAgICAgICAgICAgICBzdG9jazogNDAsXG4gICAgICAgICAgICAgIHByaWNlOiA3MCxcbiAgICAgICAgICAgICAgZGV0YWlsczogXCJpcHN1bSBmb28gM1wiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJGb28zXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgc29hcFdvcmtzOiB7XG4gICAgICBpbmZvOiB7XG4gICAgICAgIGxhYmVsOiBcIlNBQk9BUklBXCIsXG4gICAgICB9LFxuICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgb2Z1cm86IHtcbiAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJTQUlTXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgMToge1xuICAgICAgICAgICAgICBpbWFnZXM6IFsnU29hcDEnXSxcbiAgICAgICAgICAgICAgc3RvY2s6IDIwLFxuICAgICAgICAgICAgICBwcmljZTogMTAsXG4gICAgICAgICAgICAgIGRldGFpbHM6IFwiaXBzdW0gZm9vXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlNhbCBkZSBiYW5obyAxXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGdyZWVuQ2xheToge1xuICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIlNLSU5DQVJFXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgMToge1xuICAgICAgICAgICAgICBpbWFnZXM6IFsnU29hcDEnXSxcbiAgICAgICAgICAgICAgc3RvY2s6IDIwLFxuICAgICAgICAgICAgICBwcmljZTogMTAsXG4gICAgICAgICAgICAgIGRldGFpbHM6IFwiaXBzdW0gZm9vXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkFyZ2lsYSBKb2JsZXNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc2hhbXBvb0NvbmRpdGlvbmVyOiB7XG4gICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgbGFiZWw6IFwiQ0FCRUxPU1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgIDE6IHtcbiAgICAgICAgICAgICAgaW1hZ2VzOiBbJ1NvYXAxJ10sXG4gICAgICAgICAgICAgIHN0b2NrOiAyMCxcbiAgICAgICAgICAgICAgcHJpY2U6IDEwLFxuICAgICAgICAgICAgICBkZXRhaWxzOiBcImlwc3VtIGZvb1wiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJTaGFtcG9vIExpdHRsZSBKb2ludFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzb2FwOiB7XG4gICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgbGFiZWw6IFwiU0FCT05FVEVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAxOiB7XG4gICAgICAgICAgICAgIGltYWdlczogWydTb2FwMSddLFxuICAgICAgICAgICAgICBzdG9jazogMjAsXG4gICAgICAgICAgICAgIHByaWNlOiAxMCxcbiAgICAgICAgICAgICAgZGV0YWlsczogXCJTb2FwIDEgaXBzdW0gZm9vXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlNhYm5ldGUgMVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDI6IHtcbiAgICAgICAgICAgICAgaW1hZ2VzOiBbJ1NvYXAyJ10sXG4gICAgICAgICAgICAgIHN0b2NrOiAyMCxcbiAgICAgICAgICAgICAgcHJpY2U6IDEwLFxuICAgICAgICAgICAgICBkZXRhaWxzOiBcIlNvYXAgMiBpcHN1bSBmb29cIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiU2Fib25ldGUgMlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDM6IHtcbiAgICAgICAgICAgICAgaW1hZ2VzOiBbJ1NvYXAzJ10sXG4gICAgICAgICAgICAgIHN0b2NrOiAyMCxcbiAgICAgICAgICAgICAgcHJpY2U6IDEwLFxuICAgICAgICAgICAgICBkZXRhaWxzOiBcIlNvYXAgMyBpcHN1bSBmb29cIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiU2Fib25ldGUgM1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDQ6IHtcbiAgICAgICAgICAgICAgaW1hZ2VzOiBbJ1NvYXAzJ10sXG4gICAgICAgICAgICAgIHN0b2NrOiAyMCxcbiAgICAgICAgICAgICAgcHJpY2U6IDEwLFxuICAgICAgICAgICAgICBkZXRhaWxzOiBcIlNvYXAgMyBpcHN1bSBmb29cIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiU2Fib25ldGUgNFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/reducers/productsReducer.js\n");

/***/ })

})