webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Products/Products.js":
/*!*****************************************!*\
  !*** ./Components/Products/Products.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../StyledComponents/productsItems */ \"./StyledComponents/productsItems.js\");\n/* harmony import */ var _UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/Dropdown/Dropdown */ \"./UI/Dropdown/Dropdown.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Products/Products.js\",\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar Products = function Products(_ref) {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      navProducts = _useState[0],\n      showNavProducts = _useState[1];\n\n  var store = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    return state.products;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"])();\n  var productsOverview = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useProductsOverview\"])());\n  var activeCatalogCategories = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useCatalogCategories\"])());\n\n  var navProductsToggleHandler = function navProductsToggleHandler() {\n    return showNavProducts(function (state) {\n      return !state;\n    });\n  };\n\n  var toggleCategoryHandler = function toggleCategoryHandler(id) {\n    _s();\n\n    return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useToggleCategory\"])(id));\n  };\n\n  _s(toggleCategoryHandler, \"b8aGLn/Mzluh0akaKUo24RslKf0=\", false, function () {\n    return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useToggleCategory\"]];\n  });\n\n  console.log(\"active catalog\", store.activeCatalog);\n  console.log(\"active category\", store.activeCategory);\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"ProductsWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, \"Nossos Produtos\"), __jsx(_UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onProducts: true,\n    dropDownTitle: store.overview[store.activeCatalog].label,\n    showDropDown: navProducts,\n    dropDownTogglerHandler: navProductsToggleHandler,\n    subItems: productsOverview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }), __jsx(Categories, {\n    active: store.activeCategory,\n    categories: activeCatalogCategories,\n    toggleCategory: toggleCategoryHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s2(Products, \"tMCAGYtN+BV5rY7bufpIH8UYsyw=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useProductsOverview\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useCatalogCategories\"]];\n});\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar Categories = function Categories(_ref2) {\n  _s3();\n\n  var categories = _ref2.categories,\n      toggleCategory = _ref2.toggleCategory,\n      active = _ref2.active;\n  var catLength = categories.length;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      elRefs = _React$useState2[0],\n      setElRefs = _React$useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setElRefs(function (elRefs) {\n      return Array(catLength).fill().map(function (_, i) {\n        return elRefs[i] || /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createRef\"])();\n      });\n    });\n\n    if (elRefs.length > 0) {\n      console.log(\"arr set\");\n      var widths = elRefs.map(function (el) {\n        return el.current.offsetWidth;\n      }).reduce(function (a, b, index) {\n        return a + b + 16 * index;\n      }) <= window.innerWidth;\n    }\n  }, [elRefs.length]);\n  var catTitles = categories.map(function (category, index) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Category\"], {\n      ref: elRefs[index],\n      key: category.id,\n      onClick: function onClick() {\n        return toggleCategory(category.id);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"CategoryTitle\"], {\n      active: category.id === active,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 7\n      }\n    }, category.label));\n  });\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"CategoryWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 10\n    }\n  }, catTitles);\n};\n\n_s3(Categories, \"YwzAyRDxZiFoBQ/+ijp5pAa4ZVQ=\");\n\n_c2 = Categories;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Products\");\n$RefreshReg$(_c2, \"Categories\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy5qcz9iYzZkIl0sIm5hbWVzIjpbIlByb2R1Y3RzIiwidXNlU3RhdGUiLCJuYXZQcm9kdWN0cyIsInNob3dOYXZQcm9kdWN0cyIsInN0b3JlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3RzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInByb2R1Y3RzT3ZlcnZpZXciLCJ1c2VQcm9kdWN0c092ZXJ2aWV3IiwiYWN0aXZlQ2F0YWxvZ0NhdGVnb3JpZXMiLCJ1c2VDYXRhbG9nQ2F0ZWdvcmllcyIsIm5hdlByb2R1Y3RzVG9nZ2xlSGFuZGxlciIsInRvZ2dsZUNhdGVnb3J5SGFuZGxlciIsImlkIiwidXNlVG9nZ2xlQ2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlQ2F0YWxvZyIsImFjdGl2ZUNhdGVnb3J5Iiwib3ZlcnZpZXciLCJsYWJlbCIsIkNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwidG9nZ2xlQ2F0ZWdvcnkiLCJhY3RpdmUiLCJjYXRMZW5ndGgiLCJsZW5ndGgiLCJSZWFjdCIsImVsUmVmcyIsInNldEVsUmVmcyIsInVzZUVmZmVjdCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiY3JlYXRlUmVmIiwid2lkdGhzIiwiZWwiLCJjdXJyZW50Iiwib2Zmc2V0V2lkdGgiLCJyZWR1Y2UiLCJhIiwiYiIsImluZGV4Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNhdFRpdGxlcyIsImNhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBOztBQU1BLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQVE7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUMsS0FBRCxDQUR4QjtBQUFBLE1BQ2hCQyxXQURnQjtBQUFBLE1BQ0hDLGVBREc7O0FBRXZCLE1BQU1D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QUNDLE9BQUgsQ0FBV0MsV0FBbkI7QUFBQSxPQURQLEVBRUdDLE1BRkgsQ0FFVSxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0MsS0FBUDtBQUFBLGVBQWlCRixDQUFDLEdBQUdDLENBQUosR0FBUSxLQUFLQyxLQUE5QjtBQUFBLE9BRlYsS0FFa0RDLE1BQU0sQ0FBQ0MsVUFIM0Q7QUFJRDtBQUNGLEdBYlEsRUFhTixDQUFDbEIsTUFBTSxDQUFDRixNQUFSLENBYk0sQ0FBVDtBQWVBLE1BQU1xQixTQUFTLEdBQUd6QixVQUFVLENBQUNXLEdBQVgsQ0FBZSxVQUFDZSxRQUFELEVBQVdKLEtBQVg7QUFBQSxXQUMvQixNQUFDLHdFQUFEO0FBQ0UsU0FBRyxFQUFFaEIsTUFBTSxDQUFDZ0IsS0FBRCxDQURiO0FBRUUsU0FBRyxFQUFFSSxRQUFRLENBQUNuQyxFQUZoQjtBQUdFLGFBQU8sRUFBRTtBQUFBLGVBQU1VLGNBQWMsQ0FBQ3lCLFFBQVEsQ0FBQ25DLEVBQVYsQ0FBcEI7QUFBQSxPQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLRSxNQUFDLDZFQUFEO0FBQWUsWUFBTSxFQUFFbUMsUUFBUSxDQUFDbkMsRUFBVCxLQUFnQlcsTUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHd0IsUUFBUSxDQUFDNUIsS0FEWixDQUxGLENBRCtCO0FBQUEsR0FBZixDQUFsQjtBQVdBLFNBQU8sTUFBQywrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtCMkIsU0FBbEIsQ0FBUDtBQUNELENBL0JEOztJQUFNMUIsVTs7TUFBQUEsVSIsImZpbGUiOiIuL0NvbXBvbmVudHMvUHJvZHVjdHMvUHJvZHVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBQcm9kdWN0c1dyYXBwZXIsXG4gIENhdGVnb3J5LFxuICBDYXRlZ29yeVRpdGxlLFxuICBDYXRlZ29yeVdyYXBwZXIsXG4gIFRpdGxlLFxufSBmcm9tIFwiLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9wcm9kdWN0c0l0ZW1zXCI7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4uLy4uL1VJL0Ryb3Bkb3duL0Ryb3Bkb3duXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7XG4gIHVzZVByb2R1Y3RzT3ZlcnZpZXcsXG4gIHVzZUNhdGFsb2dDYXRlZ29yaWVzLFxuICB1c2VUb2dnbGVDYXRlZ29yeSxcbn0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvYWN0aW9uc0luZGV4XCI7XG5cbmNvbnN0IFByb2R1Y3RzID0gKHt9KSA9PiB7XG4gIGNvbnN0IFtuYXZQcm9kdWN0cywgc2hvd05hdlByb2R1Y3RzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc3RvcmUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb2R1Y3RzKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBwcm9kdWN0c092ZXJ2aWV3ID0gZGlzcGF0Y2godXNlUHJvZHVjdHNPdmVydmlldygpKTtcbiAgY29uc3QgYWN0aXZlQ2F0YWxvZ0NhdGVnb3JpZXMgPSBkaXNwYXRjaCh1c2VDYXRhbG9nQ2F0ZWdvcmllcygpKTtcblxuICBjb25zdCBuYXZQcm9kdWN0c1RvZ2dsZUhhbmRsZXIgPSAoKSA9PiBzaG93TmF2UHJvZHVjdHMoKHN0YXRlKSA9PiAhc3RhdGUpO1xuICBjb25zdCB0b2dnbGVDYXRlZ29yeUhhbmRsZXIgPSAoaWQpID0+IGRpc3BhdGNoKHVzZVRvZ2dsZUNhdGVnb3J5KGlkKSk7XG5cbiAgY29uc29sZS5sb2coXCJhY3RpdmUgY2F0YWxvZ1wiLCBzdG9yZS5hY3RpdmVDYXRhbG9nKTtcbiAgY29uc29sZS5sb2coXCJhY3RpdmUgY2F0ZWdvcnlcIiwgc3RvcmUuYWN0aXZlQ2F0ZWdvcnkpO1xuXG4gIHJldHVybiAoXG4gICAgPFByb2R1Y3RzV3JhcHBlcj5cbiAgICAgIDxUaXRsZT5Ob3Nzb3MgUHJvZHV0b3M8L1RpdGxlPlxuICAgICAgPERyb3Bkb3duXG4gICAgICAgIG9uUHJvZHVjdHNcbiAgICAgICAgZHJvcERvd25UaXRsZT17c3RvcmUub3ZlcnZpZXdbc3RvcmUuYWN0aXZlQ2F0YWxvZ10ubGFiZWx9XG4gICAgICAgIHNob3dEcm9wRG93bj17bmF2UHJvZHVjdHN9XG4gICAgICAgIGRyb3BEb3duVG9nZ2xlckhhbmRsZXI9e25hdlByb2R1Y3RzVG9nZ2xlSGFuZGxlcn1cbiAgICAgICAgc3ViSXRlbXM9e3Byb2R1Y3RzT3ZlcnZpZXd9XG4gICAgICAvPlxuICAgICAgPENhdGVnb3JpZXNcbiAgICAgICAgYWN0aXZlPXtzdG9yZS5hY3RpdmVDYXRlZ29yeX1cbiAgICAgICAgY2F0ZWdvcmllcz17YWN0aXZlQ2F0YWxvZ0NhdGVnb3JpZXN9XG4gICAgICAgIHRvZ2dsZUNhdGVnb3J5PXt0b2dnbGVDYXRlZ29yeUhhbmRsZXJ9XG4gICAgICAvPlxuICAgIDwvUHJvZHVjdHNXcmFwcGVyPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xuXG5jb25zdCBDYXRlZ29yaWVzID0gKHsgY2F0ZWdvcmllcywgdG9nZ2xlQ2F0ZWdvcnksIGFjdGl2ZSB9KSA9PiB7XG4gIGNvbnN0IGNhdExlbmd0aCA9IGNhdGVnb3JpZXMubGVuZ3RoO1xuICBjb25zdCBbZWxSZWZzLCBzZXRFbFJlZnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RWxSZWZzKChlbFJlZnMpID0+XG4gICAgICBBcnJheShjYXRMZW5ndGgpXG4gICAgICAgIC5maWxsKClcbiAgICAgICAgLm1hcCgoXywgaSkgPT4gZWxSZWZzW2ldIHx8IGNyZWF0ZVJlZigpKVxuICAgICk7XG4gICAgaWYgKGVsUmVmcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImFyciBzZXRcIik7XG4gICAgICBjb25zdCB3aWR0aHMgPVxuICAgICAgICBlbFJlZnNcbiAgICAgICAgICAubWFwKChlbCkgPT4gZWwuY3VycmVudC5vZmZzZXRXaWR0aClcbiAgICAgICAgICAucmVkdWNlKChhLCBiLCBpbmRleCkgPT4gYSArIGIgKyAxNiAqIGluZGV4KSA8PSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB9XG4gIH0sIFtlbFJlZnMubGVuZ3RoXSk7XG5cbiAgY29uc3QgY2F0VGl0bGVzID0gY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFxuICAgIDxDYXRlZ29yeVxuICAgICAgcmVmPXtlbFJlZnNbaW5kZXhdfVxuICAgICAga2V5PXtjYXRlZ29yeS5pZH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUNhdGVnb3J5KGNhdGVnb3J5LmlkKX1cbiAgICA+XG4gICAgICA8Q2F0ZWdvcnlUaXRsZSBhY3RpdmU9e2NhdGVnb3J5LmlkID09PSBhY3RpdmV9PlxuICAgICAgICB7Y2F0ZWdvcnkubGFiZWx9XG4gICAgICA8L0NhdGVnb3J5VGl0bGU+XG4gICAgPC9DYXRlZ29yeT5cbiAgKSk7XG4gIHJldHVybiA8Q2F0ZWdvcnlXcmFwcGVyPntjYXRUaXRsZXN9PC9DYXRlZ29yeVdyYXBwZXI+O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Products/Products.js\n");

/***/ })

})