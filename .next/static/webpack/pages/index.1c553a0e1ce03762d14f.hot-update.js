webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Products/Products.js":
/*!*****************************************!*\
  !*** ./Components/Products/Products.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StyledComponents/productsItems */ \"./StyledComponents/productsItems.js\");\n/* harmony import */ var _UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/Dropdown/Dropdown */ \"./UI/Dropdown/Dropdown.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Products/Products.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar Products = function Products(_ref) {\n  _s();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref);\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n  var store = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    return state.products;\n  });\n  var productsOverview = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_5__[\"useProductsOverview\"])());\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      navProducts = _useState[0],\n      showNavProducts = _useState[1];\n\n  var navProductsToggleHandler = function navProductsToggleHandler() {\n    return showNavProducts(function (state) {\n      return !state;\n    });\n  };\n\n  console.log(\"active catalog\");\n  console.log(\"show categories\", dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_5__[\"useCategoryOverview\"])()));\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ProductsWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, \"Nossos Produtos\"), __jsx(_UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onProducts: true,\n    showDropDown: navProducts,\n    dropDownTogglerHandler: navProductsToggleHandler,\n    subItems: productsOverview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }), __jsx(Categories, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }));\n};\n\n_s(Products, \"nj0u+80Im9SIgXa9UY09QH+SFqY=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_5__[\"useProductsOverview\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_5__[\"useCategoryOverview\"]];\n});\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar Categories = function Categories(_ref2) {\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2);\n\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"CategoryWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"Category\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"CategoryTitle\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, \"k\")));\n};\n\n_c2 = Categories;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Products\");\n$RefreshReg$(_c2, \"Categories\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy5qcz9iYzZkIl0sIm5hbWVzIjpbIlByb2R1Y3RzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInN0b3JlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3RzIiwicHJvZHVjdHNPdmVydmlldyIsInVzZVByb2R1Y3RzT3ZlcnZpZXciLCJ1c2VTdGF0ZSIsIm5hdlByb2R1Y3RzIiwic2hvd05hdlByb2R1Y3RzIiwibmF2UHJvZHVjdHNUb2dnbGVIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsInVzZUNhdGVnb3J5T3ZlcnZpZXciLCJDYXRlZ29yaWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQVE7QUFBQTs7QUFBQTs7QUFDdkIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLEtBQUssR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxRQUFWO0FBQUEsR0FBTixDQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHTixRQUFRLENBQUNPLHVGQUFtQixFQUFwQixDQUFqQzs7QUFIdUIsa0JBSWdCQyxzREFBUSxDQUFDLEtBQUQsQ0FKeEI7QUFBQSxNQUloQkMsV0FKZ0I7QUFBQSxNQUlIQyxlQUpHOztBQUt2QixNQUFNQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCO0FBQUEsV0FBTUQsZUFBZSxDQUFDLFVBQUNOLEtBQUQ7QUFBQSxhQUFXLENBQUNBLEtBQVo7QUFBQSxLQUFELENBQXJCO0FBQUEsR0FBakM7O0FBQ0FRLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQThCYixRQUFRLENBQUNjLHVGQUFtQixFQUFwQixDQUF0QztBQUdBLFNBQ0UsTUFBQywrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLEVBRUUsTUFBQyw2REFBRDtBQUNFLGNBQVUsTUFEWjtBQUVFLGdCQUFZLEVBQUVMLFdBRmhCO0FBR0UsMEJBQXNCLEVBQUVFLHdCQUgxQjtBQUlFLFlBQVEsRUFBRUwsZ0JBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBUUEsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSQSxDQURGO0FBWUQsQ0F0QkQ7O0dBQU1QLFE7VUFDYUUsdUQsRUFDSEUsdUQsRUFDb0JJLCtFLEVBSUtPLCtFOzs7S0FQbkNmLFE7QUF1QlNBLHVFQUFmOztBQUVBLElBQU1nQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxRQUFRO0FBQUE7O0FBQ3pCLFNBQ0UsTUFBQywrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREYsQ0FERixDQURGO0FBT0QsQ0FSRDs7TUFBTUEsVSIsImZpbGUiOiIuL0NvbXBvbmVudHMvUHJvZHVjdHMvUHJvZHVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgUHJvZHVjdHNXcmFwcGVyLFxuICBDYXRlZ29yeSxcbiAgQ2F0ZWdvcnlUaXRsZSxcbiAgQ2F0ZWdvcnlXcmFwcGVyLFxuICBUaXRsZVxufSBmcm9tIFwiLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9wcm9kdWN0c0l0ZW1zXCI7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4uLy4uL1VJL0Ryb3Bkb3duL0Ryb3Bkb3duXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZVByb2R1Y3RzT3ZlcnZpZXcsIHVzZUNhdGVnb3J5T3ZlcnZpZXcgfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9hY3Rpb25zSW5kZXhcIjtcblxuY29uc3QgUHJvZHVjdHMgPSAoe30pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBzdG9yZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnByb2R1Y3RzKTtcbiAgY29uc3QgcHJvZHVjdHNPdmVydmlldyA9IGRpc3BhdGNoKHVzZVByb2R1Y3RzT3ZlcnZpZXcoKSk7XG4gIGNvbnN0IFtuYXZQcm9kdWN0cywgc2hvd05hdlByb2R1Y3RzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgbmF2UHJvZHVjdHNUb2dnbGVIYW5kbGVyID0gKCkgPT4gc2hvd05hdlByb2R1Y3RzKChzdGF0ZSkgPT4gIXN0YXRlKTtcbiAgY29uc29sZS5sb2coXCJhY3RpdmUgY2F0YWxvZ1wiKVxuICBjb25zb2xlLmxvZyhcInNob3cgY2F0ZWdvcmllc1wiLGRpc3BhdGNoKHVzZUNhdGVnb3J5T3ZlcnZpZXcoKSkpXG5cbiAgXG4gIHJldHVybiAoXG4gICAgPFByb2R1Y3RzV3JhcHBlcj5cbiAgICAgICAgPFRpdGxlPk5vc3NvcyBQcm9kdXRvczwvVGl0bGU+XG4gICAgICA8RHJvcGRvd25cbiAgICAgICAgb25Qcm9kdWN0c1xuICAgICAgICBzaG93RHJvcERvd249e25hdlByb2R1Y3RzfVxuICAgICAgICBkcm9wRG93blRvZ2dsZXJIYW5kbGVyPXtuYXZQcm9kdWN0c1RvZ2dsZUhhbmRsZXJ9XG4gICAgICAgIHN1Ykl0ZW1zPXtwcm9kdWN0c092ZXJ2aWV3fVxuICAgICAgLz5cbiAgICA8Q2F0ZWdvcmllcyAvPiAgXG4gICAgPC9Qcm9kdWN0c1dyYXBwZXI+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XG5cbmNvbnN0IENhdGVnb3JpZXMgPSAoe30pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q2F0ZWdvcnlXcmFwcGVyPlxuICAgICAgPENhdGVnb3J5PlxuICAgICAgICA8Q2F0ZWdvcnlUaXRsZT5rPC9DYXRlZ29yeVRpdGxlPlxuICAgICAgPC9DYXRlZ29yeT5cbiAgICA8L0NhdGVnb3J5V3JhcHBlcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Products/Products.js\n");

/***/ })

})