webpackHotUpdate_N_E("pages/index",{

/***/ "./store/actions/productsActions.js":
/*!******************************************!*\
  !*** ./store/actions/productsActions.js ***!
  \******************************************/
/*! exports provided: TOGGLE_CATALOG, TOGGLE_CATEGORY, useProductsOverview, toggleCatalog, useToggleCatalog, useToggleCategory, useShowCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOGGLE_CATALOG\", function() { return TOGGLE_CATALOG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOGGLE_CATEGORY\", function() { return TOGGLE_CATEGORY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useProductsOverview\", function() { return useProductsOverview; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleCatalog\", function() { return toggleCatalog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useToggleCatalog\", function() { return useToggleCatalog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useToggleCategory\", function() { return useToggleCategory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useShowCategories\", function() { return useShowCategories; });\n/* harmony import */ var _Utilities_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities/utilities */ \"./Utilities/utilities.js\");\n\nvar PRODUCTS_OVERVIEW = \"PRODUCTS_OVERVIEW\";\nvar SHOW_CATEGORIES = \"SHOW_CATEGORIES\";\nvar TOGGLE_CATALOG = 'TOGGLE_CATALOG';\nvar TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';\n\nvar productsOverview = function productsOverview() {\n  return {\n    type: PRODUCTS_OVERVIEW\n  };\n}; //got to change this dummy thing for http requests when implement the database\n\n\nvar useProductsOverview = function useProductsOverview() {\n  return function (dispatch, store) {\n    var overview = store().products.overview;\n    dispatch(productsOverview());\n    return Object(_Utilities_utilities__WEBPACK_IMPORTED_MODULE_0__[\"mapProducts\"])(overview);\n  };\n};\nvar toggleCatalog = function toggleCatalog(id) {\n  return {\n    type: TOGGLE_CATALOG,\n    catalog: id\n  };\n};\nvar useToggleCatalog = function useToggleCatalog(id) {\n  return function (dispatch, store) {\n    var category = store().products.overview[id].products;\n    var defaultActiveCategory = Object.keys(category)[0];\n  };\n};\nvar useToggleCategory = function useToggleCategory(id) {\n  return {\n    type: TOGGLE_CATEGORY,\n    category: id\n  };\n};\n\nvar showCategories = function showCategories() {\n  return {\n    type: SHOW_CATEGORIES\n  };\n};\n\nvar useShowCategories = function useShowCategories() {\n  return function (dispatch, store) {\n    var activeCatalog = store().products.activeCatalog;\n    var activeCategory = store().products.activeCategory;\n    var overview = store().products.overview[activeCatalog].products[activeCategory];\n    var test = store().products.overview.bioCloths.products;\n    console.log(Object.keys(test)[0]);\n    dispatch(showCategories());\n    return overview;\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9wcm9kdWN0c0FjdGlvbnMuanM/YjM1ZCJdLCJuYW1lcyI6WyJQUk9EVUNUU19PVkVSVklFVyIsIlNIT1dfQ0FURUdPUklFUyIsIlRPR0dMRV9DQVRBTE9HIiwiVE9HR0xFX0NBVEVHT1JZIiwicHJvZHVjdHNPdmVydmlldyIsInR5cGUiLCJ1c2VQcm9kdWN0c092ZXJ2aWV3IiwiZGlzcGF0Y2giLCJzdG9yZSIsIm92ZXJ2aWV3IiwicHJvZHVjdHMiLCJtYXBQcm9kdWN0cyIsInRvZ2dsZUNhdGFsb2ciLCJpZCIsImNhdGFsb2ciLCJ1c2VUb2dnbGVDYXRhbG9nIiwiY2F0ZWdvcnkiLCJkZWZhdWx0QWN0aXZlQ2F0ZWdvcnkiLCJPYmplY3QiLCJrZXlzIiwidXNlVG9nZ2xlQ2F0ZWdvcnkiLCJzaG93Q2F0ZWdvcmllcyIsInVzZVNob3dDYXRlZ29yaWVzIiwiYWN0aXZlQ2F0YWxvZyIsImFjdGl2ZUNhdGVnb3J5IiwidGVzdCIsImJpb0Nsb3RocyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNPLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCOztBQUVQLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUMzQixTQUFPO0FBQ0hDLFFBQUksRUFBRUw7QUFESCxHQUFQO0FBR0gsQ0FKRCxDLENBS0E7OztBQUNPLElBQU1NLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNyQyxTQUFPLFVBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFxQjtBQUN4QixRQUFNQyxRQUFRLEdBQUdELEtBQUssR0FBR0UsUUFBUixDQUFpQkQsUUFBbEM7QUFDQUYsWUFBUSxDQUFDSCxnQkFBZ0IsRUFBakIsQ0FBUjtBQUNBLFdBQU9PLHdFQUFXLENBQUNGLFFBQUQsQ0FBbEI7QUFDSCxHQUpEO0FBS0gsQ0FOTTtBQVFBLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsRUFBRCxFQUFRO0FBQ2pDLFNBQU87QUFDSFIsUUFBSSxFQUFFSCxjQURIO0FBRUhZLFdBQU8sRUFBRUQ7QUFGTixHQUFQO0FBSUgsQ0FMTTtBQU9BLElBQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0YsRUFBRCxFQUFRO0FBQ3BDLFNBQU8sVUFBQ04sUUFBRCxFQUFXQyxLQUFYLEVBQXFCO0FBQ3hCLFFBQU1RLFFBQVEsR0FBR1IsS0FBSyxHQUFHRSxRQUFSLENBQWlCRCxRQUFqQixDQUEwQkksRUFBMUIsRUFBOEJILFFBQS9DO0FBQ0EsUUFBTU8scUJBQXFCLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxRQUFaLEVBQXNCLENBQXRCLENBQTlCO0FBRUgsR0FKRDtBQUtILENBTk07QUFRQSxJQUFNSSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNQLEVBQUQsRUFBUTtBQUNyQyxTQUFPO0FBQ0hSLFFBQUksRUFBRUYsZUFESDtBQUVIYSxZQUFRLEVBQUVIO0FBRlAsR0FBUDtBQUlILENBTE07O0FBT1AsSUFBTVEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ3pCLFNBQU87QUFDSGhCLFFBQUksRUFBRUo7QUFESCxHQUFQO0FBR0gsQ0FKRDs7QUFNTyxJQUFNcUIsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQ25DLFNBQU8sVUFBQ2YsUUFBRCxFQUFXQyxLQUFYLEVBQXFCO0FBQ3hCLFFBQU1lLGFBQWEsR0FBR2YsS0FBSyxHQUFHRSxRQUFSLENBQWlCYSxhQUF2QztBQUNBLFFBQU1DLGNBQWMsR0FBR2hCLEtBQUssR0FBR0UsUUFBUixDQUFpQmMsY0FBeEM7QUFDQSxRQUFNZixRQUFRLEdBQUdELEtBQUssR0FBR0UsUUFBUixDQUFpQkQsUUFBakIsQ0FBMEJjLGFBQTFCLEVBQXlDYixRQUF6QyxDQUFrRGMsY0FBbEQsQ0FBakI7QUFDQSxRQUFNQyxJQUFJLEdBQUdqQixLQUFLLEdBQUdFLFFBQVIsQ0FBaUJELFFBQWpCLENBQTBCaUIsU0FBMUIsQ0FBb0NoQixRQUFqRDtBQUNBaUIsV0FBTyxDQUFDQyxHQUFSLENBQVlWLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTSxJQUFaLEVBQWtCLENBQWxCLENBQVo7QUFDQWxCLFlBQVEsQ0FBQ2MsY0FBYyxFQUFmLENBQVI7QUFDQSxXQUFPWixRQUFQO0FBQ0gsR0FSRDtBQVNILENBVk0iLCJmaWxlIjoiLi9zdG9yZS9hY3Rpb25zL3Byb2R1Y3RzQWN0aW9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bWFwUHJvZHVjdHN9IGZyb20gJy4uLy4uL1V0aWxpdGllcy91dGlsaXRpZXMnXG5cbmNvbnN0IFBST0RVQ1RTX09WRVJWSUVXID0gXCJQUk9EVUNUU19PVkVSVklFV1wiO1xuY29uc3QgU0hPV19DQVRFR09SSUVTID0gXCJTSE9XX0NBVEVHT1JJRVNcIlxuZXhwb3J0IGNvbnN0IFRPR0dMRV9DQVRBTE9HID0gJ1RPR0dMRV9DQVRBTE9HJztcbmV4cG9ydCBjb25zdCBUT0dHTEVfQ0FURUdPUlkgPSAnVE9HR0xFX0NBVEVHT1JZJ1xuXG5jb25zdCBwcm9kdWN0c092ZXJ2aWV3ID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFBST0RVQ1RTX09WRVJWSUVXXG4gICAgfVxufVxuLy9nb3QgdG8gY2hhbmdlIHRoaXMgZHVtbXkgdGhpbmcgZm9yIGh0dHAgcmVxdWVzdHMgd2hlbiBpbXBsZW1lbnQgdGhlIGRhdGFiYXNlXG5leHBvcnQgY29uc3QgdXNlUHJvZHVjdHNPdmVydmlldyA9ICgpID0+IHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBzdG9yZSkgPT4ge1xuICAgICAgICBjb25zdCBvdmVydmlldyA9IHN0b3JlKCkucHJvZHVjdHMub3ZlcnZpZXc7XG4gICAgICAgIGRpc3BhdGNoKHByb2R1Y3RzT3ZlcnZpZXcoKSk7XG4gICAgICAgIHJldHVybiBtYXBQcm9kdWN0cyhvdmVydmlldyk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgdG9nZ2xlQ2F0YWxvZyA9IChpZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFRPR0dMRV9DQVRBTE9HLFxuICAgICAgICBjYXRhbG9nOiBpZCxcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VUb2dnbGVDYXRhbG9nID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgc3RvcmUpID0+IHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBzdG9yZSgpLnByb2R1Y3RzLm92ZXJ2aWV3W2lkXS5wcm9kdWN0cztcbiAgICAgICAgY29uc3QgZGVmYXVsdEFjdGl2ZUNhdGVnb3J5ID0gT2JqZWN0LmtleXMoY2F0ZWdvcnkpWzBdXG5cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VUb2dnbGVDYXRlZ29yeSA9IChpZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFRPR0dMRV9DQVRFR09SWSxcbiAgICAgICAgY2F0ZWdvcnk6IGlkXG4gICAgfVxufVxuXG5jb25zdCBzaG93Q2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTSE9XX0NBVEVHT1JJRVNcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VTaG93Q2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBzdG9yZSkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVDYXRhbG9nID0gc3RvcmUoKS5wcm9kdWN0cy5hY3RpdmVDYXRhbG9nXG4gICAgICAgIGNvbnN0IGFjdGl2ZUNhdGVnb3J5ID0gc3RvcmUoKS5wcm9kdWN0cy5hY3RpdmVDYXRlZ29yeVxuICAgICAgICBjb25zdCBvdmVydmlldyA9IHN0b3JlKCkucHJvZHVjdHMub3ZlcnZpZXdbYWN0aXZlQ2F0YWxvZ10ucHJvZHVjdHNbYWN0aXZlQ2F0ZWdvcnldO1xuICAgICAgICBjb25zdCB0ZXN0ID0gc3RvcmUoKS5wcm9kdWN0cy5vdmVydmlldy5iaW9DbG90aHMucHJvZHVjdHNcbiAgICAgICAgY29uc29sZS5sb2coT2JqZWN0LmtleXModGVzdClbMF0pXG4gICAgICAgIGRpc3BhdGNoKHNob3dDYXRlZ29yaWVzKCkpO1xuICAgICAgICByZXR1cm4gb3ZlcnZpZXc7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/actions/productsActions.js\n");

/***/ })

})