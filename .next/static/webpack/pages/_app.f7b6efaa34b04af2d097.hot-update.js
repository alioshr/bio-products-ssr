webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/actions/actionsIndex.js":
/*!***************************************!*\
  !*** ./store/actions/actionsIndex.js ***!
  \***************************************/
/*! exports provided: useShowNavigationItems, useProductsOverview, useToggleCatalog, useToggleCategory, useCategoryOverview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _navigationActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigationActions */ \"./store/actions/navigationActions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useShowNavigationItems\", function() { return _navigationActions__WEBPACK_IMPORTED_MODULE_0__[\"useShowNavigationItems\"]; });\n\n/* harmony import */ var _productsActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productsActions */ \"./store/actions/productsActions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useProductsOverview\", function() { return _productsActions__WEBPACK_IMPORTED_MODULE_1__[\"useProductsOverview\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useToggleCatalog\", function() { return _productsActions__WEBPACK_IMPORTED_MODULE_1__[\"useToggleCatalog\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useToggleCategory\", function() { return _productsActions__WEBPACK_IMPORTED_MODULE_1__[\"useToggleCategory\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useCategoryOverview\", function() { return _productsActions__WEBPACK_IMPORTED_MODULE_1__[\"useCategoryOverview\"]; });\n\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9hY3Rpb25zSW5kZXguanM/ZGNjMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEiLCJmaWxlIjoiLi9zdG9yZS9hY3Rpb25zL2FjdGlvbnNJbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IHVzZVNob3dOYXZpZ2F0aW9uSXRlbXMgfSBmcm9tIFwiLi9uYXZpZ2F0aW9uQWN0aW9uc1wiO1xuXG5leHBvcnQgeyB1c2VQcm9kdWN0c092ZXJ2aWV3LCB1c2VUb2dnbGVDYXRhbG9nLCB1c2VUb2dnbGVDYXRlZ29yeSwgdXNlQ2F0ZWdvcnlPdmVydmlldyB9IGZyb20gXCIuL3Byb2R1Y3RzQWN0aW9uc1wiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/actions/actionsIndex.js\n");

/***/ }),

/***/ "./store/actions/productsActions.js":
/*!******************************************!*\
  !*** ./store/actions/productsActions.js ***!
  \******************************************/
/*! exports provided: TOGGLE_CATALOG, TOGGLE_CATEGORY, useProductsOverview, toggleCatalog, useToggleCatalog, useToggleCategory, useCategoryOverview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOGGLE_CATALOG\", function() { return TOGGLE_CATALOG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOGGLE_CATEGORY\", function() { return TOGGLE_CATEGORY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useProductsOverview\", function() { return useProductsOverview; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleCatalog\", function() { return toggleCatalog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useToggleCatalog\", function() { return useToggleCatalog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useToggleCategory\", function() { return useToggleCategory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCategoryOverview\", function() { return useCategoryOverview; });\n/* harmony import */ var _Utilities_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities/utilities */ \"./Utilities/utilities.js\");\n\nvar PRODUCTS_OVERVIEW = \"PRODUCTS_OVERVIEW\";\nvar CATEGORY_OVERVIEW = \"CATEGORY_OVERVIEW\";\nvar TOGGLE_CATALOG = 'TOGGLE_CATALOG';\nvar TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';\n\nvar productsOverview = function productsOverview() {\n  return {\n    type: PRODUCTS_OVERVIEW\n  };\n}; //got to change this dummy thing for http requests when implement the database\n\n\nvar useProductsOverview = function useProductsOverview() {\n  return function (dispatch, store) {\n    var overview = store().products.overview;\n    dispatch(productsOverview());\n    return Object(_Utilities_utilities__WEBPACK_IMPORTED_MODULE_0__[\"mapProducts\"])(overview);\n  };\n};\nvar toggleCatalog = function toggleCatalog(id, defaultCategory) {\n  return {\n    type: TOGGLE_CATALOG,\n    catalog: id,\n    category: defaultCategory\n  };\n};\nvar useToggleCatalog = function useToggleCatalog(id) {\n  return function (dispatch, store) {\n    var category = store().products.overview[id].products;\n    var defaultActiveCategory = Object.keys(category)[0];\n    dispatch(toggleCatalog(id, defaultActiveCategory));\n  };\n};\nvar useToggleCategory = function useToggleCategory(id) {\n  return {\n    type: TOGGLE_CATEGORY,\n    category: id\n  };\n};\n\nvar categoryOverview = function categoryOverview() {\n  return {\n    type: CATEGORY_OVERVIEW\n  };\n};\n\nvar useCategoryOverview = function useCategoryOverview() {\n  return function (dispatch, store) {\n    var activeCatalog = store().products.activeCatalog;\n    var overview = store().products.overview[activeCatalog].products;\n    dispatch(showCategories());\n    return overview;\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9wcm9kdWN0c0FjdGlvbnMuanM/YjM1ZCJdLCJuYW1lcyI6WyJQUk9EVUNUU19PVkVSVklFVyIsIkNBVEVHT1JZX09WRVJWSUVXIiwiVE9HR0xFX0NBVEFMT0ciLCJUT0dHTEVfQ0FURUdPUlkiLCJwcm9kdWN0c092ZXJ2aWV3IiwidHlwZSIsInVzZVByb2R1Y3RzT3ZlcnZpZXciLCJkaXNwYXRjaCIsInN0b3JlIiwib3ZlcnZpZXciLCJwcm9kdWN0cyIsIm1hcFByb2R1Y3RzIiwidG9nZ2xlQ2F0YWxvZyIsImlkIiwiZGVmYXVsdENhdGVnb3J5IiwiY2F0YWxvZyIsImNhdGVnb3J5IiwidXNlVG9nZ2xlQ2F0YWxvZyIsImRlZmF1bHRBY3RpdmVDYXRlZ29yeSIsIk9iamVjdCIsImtleXMiLCJ1c2VUb2dnbGVDYXRlZ29yeSIsImNhdGVnb3J5T3ZlcnZpZXciLCJ1c2VDYXRlZ29yeU92ZXJ2aWV3IiwiYWN0aXZlQ2F0YWxvZyIsInNob3dDYXRlZ29yaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNPLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCOztBQUVQLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUMzQixTQUFPO0FBQ0hDLFFBQUksRUFBRUw7QUFESCxHQUFQO0FBR0gsQ0FKRCxDLENBS0E7OztBQUNPLElBQU1NLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNyQyxTQUFPLFVBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFxQjtBQUN4QixRQUFNQyxRQUFRLEdBQUdELEtBQUssR0FBR0UsUUFBUixDQUFpQkQsUUFBbEM7QUFDQUYsWUFBUSxDQUFDSCxnQkFBZ0IsRUFBakIsQ0FBUjtBQUNBLFdBQU9PLHdFQUFXLENBQUNGLFFBQUQsQ0FBbEI7QUFDSCxHQUpEO0FBS0gsQ0FOTTtBQVFBLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsRUFBRCxFQUFLQyxlQUFMLEVBQXlCO0FBQ2xELFNBQU87QUFDSFQsUUFBSSxFQUFFSCxjQURIO0FBRUhhLFdBQU8sRUFBRUYsRUFGTjtBQUdIRyxZQUFRLEVBQUVGO0FBSFAsR0FBUDtBQUtILENBTk07QUFRQSxJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNKLEVBQUQsRUFBUTtBQUNwQyxTQUFPLFVBQUNOLFFBQUQsRUFBV0MsS0FBWCxFQUFxQjtBQUN4QixRQUFNUSxRQUFRLEdBQUdSLEtBQUssR0FBR0UsUUFBUixDQUFpQkQsUUFBakIsQ0FBMEJJLEVBQTFCLEVBQThCSCxRQUEvQztBQUNBLFFBQU1RLHFCQUFxQixHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUosUUFBWixFQUFzQixDQUF0QixDQUE5QjtBQUNBVCxZQUFRLENBQUNLLGFBQWEsQ0FBQ0MsRUFBRCxFQUFLSyxxQkFBTCxDQUFkLENBQVI7QUFDSCxHQUpEO0FBS0gsQ0FOTTtBQVFBLElBQU1HLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ1IsRUFBRCxFQUFRO0FBQ3JDLFNBQU87QUFDSFIsUUFBSSxFQUFFRixlQURIO0FBRUhhLFlBQVEsRUFBRUg7QUFGUCxHQUFQO0FBSUgsQ0FMTTs7QUFPUCxJQUFNUyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDM0IsU0FBTztBQUNIakIsUUFBSSxFQUFFSjtBQURILEdBQVA7QUFHSCxDQUpEOztBQU1PLElBQU1zQixtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDckMsU0FBTyxVQUFDaEIsUUFBRCxFQUFXQyxLQUFYLEVBQXFCO0FBQ3hCLFFBQU1nQixhQUFhLEdBQUdoQixLQUFLLEdBQUdFLFFBQVIsQ0FBaUJjLGFBQXZDO0FBQ0EsUUFBTWYsUUFBUSxHQUFHRCxLQUFLLEdBQUdFLFFBQVIsQ0FBaUJELFFBQWpCLENBQTBCZSxhQUExQixFQUF5Q2QsUUFBMUQ7QUFDQUgsWUFBUSxDQUFDa0IsY0FBYyxFQUFmLENBQVI7QUFDQSxXQUFPaEIsUUFBUDtBQUNILEdBTEQ7QUFNSCxDQVBNIiwiZmlsZSI6Ii4vc3RvcmUvYWN0aW9ucy9wcm9kdWN0c0FjdGlvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21hcFByb2R1Y3RzfSBmcm9tICcuLi8uLi9VdGlsaXRpZXMvdXRpbGl0aWVzJ1xuXG5jb25zdCBQUk9EVUNUU19PVkVSVklFVyA9IFwiUFJPRFVDVFNfT1ZFUlZJRVdcIjtcbmNvbnN0IENBVEVHT1JZX09WRVJWSUVXID0gXCJDQVRFR09SWV9PVkVSVklFV1wiXG5leHBvcnQgY29uc3QgVE9HR0xFX0NBVEFMT0cgPSAnVE9HR0xFX0NBVEFMT0cnO1xuZXhwb3J0IGNvbnN0IFRPR0dMRV9DQVRFR09SWSA9ICdUT0dHTEVfQ0FURUdPUlknXG5cbmNvbnN0IHByb2R1Y3RzT3ZlcnZpZXcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogUFJPRFVDVFNfT1ZFUlZJRVdcbiAgICB9XG59XG4vL2dvdCB0byBjaGFuZ2UgdGhpcyBkdW1teSB0aGluZyBmb3IgaHR0cCByZXF1ZXN0cyB3aGVuIGltcGxlbWVudCB0aGUgZGF0YWJhc2VcbmV4cG9ydCBjb25zdCB1c2VQcm9kdWN0c092ZXJ2aWV3ID0gKCkgPT4ge1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIHN0b3JlKSA9PiB7XG4gICAgICAgIGNvbnN0IG92ZXJ2aWV3ID0gc3RvcmUoKS5wcm9kdWN0cy5vdmVydmlldztcbiAgICAgICAgZGlzcGF0Y2gocHJvZHVjdHNPdmVydmlldygpKTtcbiAgICAgICAgcmV0dXJuIG1hcFByb2R1Y3RzKG92ZXJ2aWV3KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVDYXRhbG9nID0gKGlkLCBkZWZhdWx0Q2F0ZWdvcnkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBUT0dHTEVfQ0FUQUxPRyxcbiAgICAgICAgY2F0YWxvZzogaWQsXG4gICAgICAgIGNhdGVnb3J5OiBkZWZhdWx0Q2F0ZWdvcnlcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VUb2dnbGVDYXRhbG9nID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgc3RvcmUpID0+IHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBzdG9yZSgpLnByb2R1Y3RzLm92ZXJ2aWV3W2lkXS5wcm9kdWN0cztcbiAgICAgICAgY29uc3QgZGVmYXVsdEFjdGl2ZUNhdGVnb3J5ID0gT2JqZWN0LmtleXMoY2F0ZWdvcnkpWzBdO1xuICAgICAgICBkaXNwYXRjaCh0b2dnbGVDYXRhbG9nKGlkLCBkZWZhdWx0QWN0aXZlQ2F0ZWdvcnkpKVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVRvZ2dsZUNhdGVnb3J5ID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogVE9HR0xFX0NBVEVHT1JZLFxuICAgICAgICBjYXRlZ29yeTogaWRcbiAgICB9XG59XG5cbmNvbnN0IGNhdGVnb3J5T3ZlcnZpZXcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogQ0FURUdPUllfT1ZFUlZJRVdcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VDYXRlZ29yeU92ZXJ2aWV3ID0gKCkgPT4ge1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIHN0b3JlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUNhdGFsb2cgPSBzdG9yZSgpLnByb2R1Y3RzLmFjdGl2ZUNhdGFsb2dcbiAgICAgICAgY29uc3Qgb3ZlcnZpZXcgPSBzdG9yZSgpLnByb2R1Y3RzLm92ZXJ2aWV3W2FjdGl2ZUNhdGFsb2ddLnByb2R1Y3RzO1xuICAgICAgICBkaXNwYXRjaChzaG93Q2F0ZWdvcmllcygpKTtcbiAgICAgICAgcmV0dXJuIG92ZXJ2aWV3O1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/actions/productsActions.js\n");

/***/ })

})