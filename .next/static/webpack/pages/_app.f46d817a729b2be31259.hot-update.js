webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/actions/productsActions.js":
/*!******************************************!*\
  !*** ./store/actions/productsActions.js ***!
  \******************************************/
/*! exports provided: TOGGLE_CATALOG, TOGGLE_CATEGORY, useProductsOverview, toggleCatalog, useToggleCatalog, useToggleCategory, useShowCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOGGLE_CATALOG\", function() { return TOGGLE_CATALOG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOGGLE_CATEGORY\", function() { return TOGGLE_CATEGORY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useProductsOverview\", function() { return useProductsOverview; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleCatalog\", function() { return toggleCatalog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useToggleCatalog\", function() { return useToggleCatalog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useToggleCategory\", function() { return useToggleCategory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useShowCategories\", function() { return useShowCategories; });\n/* harmony import */ var _Utilities_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities/utilities */ \"./Utilities/utilities.js\");\n\nvar PRODUCTS_OVERVIEW = \"PRODUCTS_OVERVIEW\";\nvar SHOW_CATEGORIES = \"SHOW_CATEGORIES\";\nvar TOGGLE_CATALOG = 'TOGGLE_CATALOG';\nvar TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';\n\nvar productsOverview = function productsOverview() {\n  return {\n    type: PRODUCTS_OVERVIEW\n  };\n}; //got to change this dummy thing for http requests when implement the database\n\n\nvar useProductsOverview = function useProductsOverview() {\n  return function (dispatch, store) {\n    var overview = store().products.overview;\n    dispatch(productsOverview());\n    return Object(_Utilities_utilities__WEBPACK_IMPORTED_MODULE_0__[\"mapProducts\"])(overview);\n  };\n};\nvar toggleCatalog = function toggleCatalog(id, defaultCategory) {\n  return {\n    type: TOGGLE_CATALOG,\n    catalog: id,\n    category: defaultCategory\n  };\n};\nvar useToggleCatalog = function useToggleCatalog(id) {\n  return function (dispatch, store) {\n    var category = store().products.overview[id].products;\n    var defaultActiveCategory = category[0];\n    dispatch(toggleCatalog(id, defaultActiveCategory));\n  };\n};\nvar useToggleCategory = function useToggleCategory(id) {\n  return {\n    type: TOGGLE_CATEGORY,\n    category: id\n  };\n};\n\nvar showCategories = function showCategories() {\n  return {\n    type: SHOW_CATEGORIES\n  };\n};\n\nvar useShowCategories = function useShowCategories() {\n  return function (dispatch, store) {\n    var activeCatalog = store().products.activeCatalog;\n    var activeCategory = store().products.activeCategory;\n    var overview = store().products.catalog[activeCatalog].products[activeCategory];\n    dispatch(showCategories());\n    return overview;\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9wcm9kdWN0c0FjdGlvbnMuanM/YjM1ZCJdLCJuYW1lcyI6WyJQUk9EVUNUU19PVkVSVklFVyIsIlNIT1dfQ0FURUdPUklFUyIsIlRPR0dMRV9DQVRBTE9HIiwiVE9HR0xFX0NBVEVHT1JZIiwicHJvZHVjdHNPdmVydmlldyIsInR5cGUiLCJ1c2VQcm9kdWN0c092ZXJ2aWV3IiwiZGlzcGF0Y2giLCJzdG9yZSIsIm92ZXJ2aWV3IiwicHJvZHVjdHMiLCJtYXBQcm9kdWN0cyIsInRvZ2dsZUNhdGFsb2ciLCJpZCIsImRlZmF1bHRDYXRlZ29yeSIsImNhdGFsb2ciLCJjYXRlZ29yeSIsInVzZVRvZ2dsZUNhdGFsb2ciLCJkZWZhdWx0QWN0aXZlQ2F0ZWdvcnkiLCJ1c2VUb2dnbGVDYXRlZ29yeSIsInNob3dDYXRlZ29yaWVzIiwidXNlU2hvd0NhdGVnb3JpZXMiLCJhY3RpdmVDYXRhbG9nIiwiYWN0aXZlQ2F0ZWdvcnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNPLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCOztBQUVQLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUMzQixTQUFPO0FBQ0hDLFFBQUksRUFBRUw7QUFESCxHQUFQO0FBR0gsQ0FKRCxDLENBS0E7OztBQUNPLElBQU1NLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNyQyxTQUFPLFVBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFxQjtBQUN4QixRQUFNQyxRQUFRLEdBQUdELEtBQUssR0FBR0UsUUFBUixDQUFpQkQsUUFBbEM7QUFDQUYsWUFBUSxDQUFDSCxnQkFBZ0IsRUFBakIsQ0FBUjtBQUNBLFdBQU9PLHdFQUFXLENBQUNGLFFBQUQsQ0FBbEI7QUFDSCxHQUpEO0FBS0gsQ0FOTTtBQVFBLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsRUFBRCxFQUFLQyxlQUFMLEVBQXlCO0FBQ2xELFNBQU87QUFDSFQsUUFBSSxFQUFFSCxjQURIO0FBRUhhLFdBQU8sRUFBRUYsRUFGTjtBQUdIRyxZQUFRLEVBQUVGO0FBSFAsR0FBUDtBQUtILENBTk07QUFRQSxJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNKLEVBQUQsRUFBUTtBQUNwQyxTQUFPLFVBQUNOLFFBQUQsRUFBV0MsS0FBWCxFQUFxQjtBQUN4QixRQUFNUSxRQUFRLEdBQUdSLEtBQUssR0FBR0UsUUFBUixDQUFpQkQsUUFBakIsQ0FBMEJJLEVBQTFCLEVBQThCSCxRQUEvQztBQUNBLFFBQU1RLHFCQUFxQixHQUFHRixRQUFRLENBQUMsQ0FBRCxDQUF0QztBQUNBVCxZQUFRLENBQUNLLGFBQWEsQ0FBQ0MsRUFBRCxFQUFLSyxxQkFBTCxDQUFkLENBQVI7QUFDSCxHQUpEO0FBS0gsQ0FOTTtBQVFBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ04sRUFBRCxFQUFRO0FBQ3JDLFNBQU87QUFDSFIsUUFBSSxFQUFFRixlQURIO0FBRUhhLFlBQVEsRUFBRUg7QUFGUCxHQUFQO0FBSUgsQ0FMTTs7QUFPUCxJQUFNTyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekIsU0FBTztBQUNIZixRQUFJLEVBQUVKO0FBREgsR0FBUDtBQUdILENBSkQ7O0FBTU8sSUFBTW9CLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUNuQyxTQUFPLFVBQUNkLFFBQUQsRUFBV0MsS0FBWCxFQUFxQjtBQUN4QixRQUFNYyxhQUFhLEdBQUdkLEtBQUssR0FBR0UsUUFBUixDQUFpQlksYUFBdkM7QUFDQSxRQUFNQyxjQUFjLEdBQUdmLEtBQUssR0FBR0UsUUFBUixDQUFpQmEsY0FBeEM7QUFDQSxRQUFNZCxRQUFRLEdBQUdELEtBQUssR0FBR0UsUUFBUixDQUFpQkssT0FBakIsQ0FBeUJPLGFBQXpCLEVBQXdDWixRQUF4QyxDQUFpRGEsY0FBakQsQ0FBakI7QUFDQWhCLFlBQVEsQ0FBQ2EsY0FBYyxFQUFmLENBQVI7QUFDQSxXQUFPWCxRQUFQO0FBQ0gsR0FORDtBQU9ILENBUk0iLCJmaWxlIjoiLi9zdG9yZS9hY3Rpb25zL3Byb2R1Y3RzQWN0aW9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bWFwUHJvZHVjdHN9IGZyb20gJy4uLy4uL1V0aWxpdGllcy91dGlsaXRpZXMnXG5cbmNvbnN0IFBST0RVQ1RTX09WRVJWSUVXID0gXCJQUk9EVUNUU19PVkVSVklFV1wiO1xuY29uc3QgU0hPV19DQVRFR09SSUVTID0gXCJTSE9XX0NBVEVHT1JJRVNcIlxuZXhwb3J0IGNvbnN0IFRPR0dMRV9DQVRBTE9HID0gJ1RPR0dMRV9DQVRBTE9HJztcbmV4cG9ydCBjb25zdCBUT0dHTEVfQ0FURUdPUlkgPSAnVE9HR0xFX0NBVEVHT1JZJ1xuXG5jb25zdCBwcm9kdWN0c092ZXJ2aWV3ID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFBST0RVQ1RTX09WRVJWSUVXXG4gICAgfVxufVxuLy9nb3QgdG8gY2hhbmdlIHRoaXMgZHVtbXkgdGhpbmcgZm9yIGh0dHAgcmVxdWVzdHMgd2hlbiBpbXBsZW1lbnQgdGhlIGRhdGFiYXNlXG5leHBvcnQgY29uc3QgdXNlUHJvZHVjdHNPdmVydmlldyA9ICgpID0+IHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBzdG9yZSkgPT4ge1xuICAgICAgICBjb25zdCBvdmVydmlldyA9IHN0b3JlKCkucHJvZHVjdHMub3ZlcnZpZXc7XG4gICAgICAgIGRpc3BhdGNoKHByb2R1Y3RzT3ZlcnZpZXcoKSk7XG4gICAgICAgIHJldHVybiBtYXBQcm9kdWN0cyhvdmVydmlldyk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgdG9nZ2xlQ2F0YWxvZyA9IChpZCwgZGVmYXVsdENhdGVnb3J5KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogVE9HR0xFX0NBVEFMT0csXG4gICAgICAgIGNhdGFsb2c6IGlkLFxuICAgICAgICBjYXRlZ29yeTogZGVmYXVsdENhdGVnb3J5XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgdXNlVG9nZ2xlQ2F0YWxvZyA9IChpZCkgPT4ge1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIHN0b3JlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gc3RvcmUoKS5wcm9kdWN0cy5vdmVydmlld1tpZF0ucHJvZHVjdHM7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRBY3RpdmVDYXRlZ29yeSA9IGNhdGVnb3J5WzBdO1xuICAgICAgICBkaXNwYXRjaCh0b2dnbGVDYXRhbG9nKGlkLCBkZWZhdWx0QWN0aXZlQ2F0ZWdvcnkpKVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVRvZ2dsZUNhdGVnb3J5ID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogVE9HR0xFX0NBVEVHT1JZLFxuICAgICAgICBjYXRlZ29yeTogaWRcbiAgICB9XG59XG5cbmNvbnN0IHNob3dDYXRlZ29yaWVzID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNIT1dfQ0FURUdPUklFU1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVNob3dDYXRlZ29yaWVzID0gKCkgPT4ge1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIHN0b3JlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUNhdGFsb2cgPSBzdG9yZSgpLnByb2R1Y3RzLmFjdGl2ZUNhdGFsb2dcbiAgICAgICAgY29uc3QgYWN0aXZlQ2F0ZWdvcnkgPSBzdG9yZSgpLnByb2R1Y3RzLmFjdGl2ZUNhdGVnb3J5XG4gICAgICAgIGNvbnN0IG92ZXJ2aWV3ID0gc3RvcmUoKS5wcm9kdWN0cy5jYXRhbG9nW2FjdGl2ZUNhdGFsb2ddLnByb2R1Y3RzW2FjdGl2ZUNhdGVnb3J5XTtcbiAgICAgICAgZGlzcGF0Y2goc2hvd0NhdGVnb3JpZXMoKSk7XG4gICAgICAgIHJldHVybiBvdmVydmlldztcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/actions/productsActions.js\n");

/***/ })

})