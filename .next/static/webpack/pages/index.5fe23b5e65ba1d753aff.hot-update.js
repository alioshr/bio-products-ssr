webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Products/Products.js":
/*!*****************************************!*\
  !*** ./Components/Products/Products.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StyledComponents/productsItems */ \"./StyledComponents/productsItems.js\");\n/* harmony import */ var _UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/Dropdown/Dropdown */ \"./UI/Dropdown/Dropdown.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Products/Products.js\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar Products = function Products(_ref) {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      navProducts = _useState[0],\n      showNavProducts = _useState[1];\n\n  var store = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    return state.products;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n  var productsOverview = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_5__[\"useProductsOverview\"])());\n  var activeCatalogCategories = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_5__[\"useCatalogCategories\"])());\n\n  var navProductsToggleHandler = function navProductsToggleHandler() {\n    return showNavProducts(function (state) {\n      return !state;\n    });\n  };\n\n  var toggleCategoryHandler = function toggleCategoryHandler(id) {\n    _s();\n\n    return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_5__[\"useToggleCategory\"])(id));\n  };\n\n  _s(toggleCategoryHandler, \"b8aGLn/Mzluh0akaKUo24RslKf0=\", false, function () {\n    return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_5__[\"useToggleCategory\"]];\n  });\n\n  console.log(\"active catalog\", store.activeCatalog);\n  console.log(\"active category\", store.activeCategory);\n  var ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ProductsWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, \"Nossos Produtos\"), __jsx(_UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onProducts: true,\n    dropDownTitle: store.overview[store.activeCatalog].label,\n    showDropDown: navProducts,\n    dropDownTogglerHandler: navProductsToggleHandler,\n    subItems: productsOverview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }), __jsx(Categories, {\n    active: store.activeCategory,\n    categories: activeCatalogCategories,\n    toggleCategory: toggleCategoryHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s2(Products, \"tMCAGYtN+BV5rY7bufpIH8UYsyw=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_5__[\"useProductsOverview\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_5__[\"useCatalogCategories\"]];\n});\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar Categories = function Categories(_ref2) {\n  var categories = _ref2.categories,\n      toggleCategory = _ref2.toggleCategory,\n      active = _ref2.active;\n  var catTitles = categories.map(function (category) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"Category\"], {\n      key: category.id,\n      onClick: function onClick() {\n        return toggleCategory(category.id);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"CategoryTitle\"], {\n      active: category.id === active,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 7\n      }\n    }, category.label));\n  });\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"CategoryWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 10\n    }\n  }, catTitles);\n};\n\n_c2 = Categories;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Products\");\n$RefreshReg$(_c2, \"Categories\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy5qcz9iYzZkIl0sIm5hbWVzIjpbIlByb2R1Y3RzIiwidXNlU3RhdGUiLCJuYXZQcm9kdWN0cyIsInNob3dOYXZQcm9kdWN0cyIsInN0b3JlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3RzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInByb2R1Y3RzT3ZlcnZpZXciLCJ1c2VQcm9kdWN0c092ZXJ2aWV3IiwiYWN0aXZlQ2F0YWxvZ0NhdGVnb3JpZXMiLCJ1c2VDYXRhbG9nQ2F0ZWdvcmllcyIsIm5hdlByb2R1Y3RzVG9nZ2xlSGFuZGxlciIsInRvZ2dsZUNhdGVnb3J5SGFuZGxlciIsImlkIiwidXNlVG9nZ2xlQ2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlQ2F0YWxvZyIsImFjdGl2ZUNhdGVnb3J5IiwicmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJvdmVydmlldyIsImxhYmVsIiwiQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJ0b2dnbGVDYXRlZ29yeSIsImFjdGl2ZSIsImNhdFRpdGxlcyIsIm1hcCIsImNhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBOztBQU1BLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQVE7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUMsS0FBRCxDQUR4QjtBQUFBLE1BQ2hCQyxXQURnQjtBQUFBLE1BQ0hDLGVBREc7O0FBRXZCLE1BQU1DLEtBQUssR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxRQUFqQjtBQUFBLEdBQUQsQ0FBekI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUdGLFFBQVEsQ0FBQ0csdUZBQW1CLEVBQXBCLENBQWpDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUdKLFFBQVEsQ0FBQ0ssd0ZBQW9CLEVBQXJCLENBQXhDOztBQUVBLE1BQU1DLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkI7QUFBQSxXQUFNWCxlQUFlLENBQUMsVUFBQ0csS0FBRDtBQUFBLGFBQVcsQ0FBQ0EsS0FBWjtBQUFBLEtBQUQsQ0FBckI7QUFBQSxHQUFqQzs7QUFDQSxNQUFNUyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLEVBQUQ7QUFBQTs7QUFBQSxXQUFRUixRQUFRLENBQUNTLHFGQUFpQixDQUFDRCxFQUFELENBQWxCLENBQWhCO0FBQUEsR0FBOUI7O0FBUnVCLEtBUWpCRCxxQkFSaUI7QUFBQSxZQVF3QkUsNkVBUnhCO0FBQUE7O0FBVXZCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QmYsS0FBSyxDQUFDZ0IsYUFBcEM7QUFDQUYsU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JmLEtBQUssQ0FBQ2lCLGNBQXJDO0FBQ0EsTUFBTUMsR0FBRyxnQkFBR0MsNENBQUssQ0FBQ0MsU0FBTixFQUFaO0FBQ0EsU0FDRSxNQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFFRSxNQUFDLDZEQUFEO0FBQ0UsY0FBVSxNQURaO0FBRUUsaUJBQWEsRUFBRXBCLEtBQUssQ0FBQ3FCLFFBQU4sQ0FBZXJCLEtBQUssQ0FBQ2dCLGFBQXJCLEVBQW9DTSxLQUZyRDtBQUdFLGdCQUFZLEVBQUV4QixXQUhoQjtBQUlFLDBCQUFzQixFQUFFWSx3QkFKMUI7QUFLRSxZQUFRLEVBQUVKLGdCQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQVNFLE1BQUMsVUFBRDtBQUNFLFVBQU0sRUFBRU4sS0FBSyxDQUFDaUIsY0FEaEI7QUFFRSxjQUFVLEVBQUVULHVCQUZkO0FBR0Usa0JBQWMsRUFBRUcscUJBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGO0FBaUJELENBOUJEOztJQUFNZixRO1VBRVVLLHVELEVBQ0dJLHVELEVBQ2lCRSwrRSxFQUNPRSxnRjs7O0tBTHJDYixRO0FBK0JTQSx1RUFBZjs7QUFFQSxJQUFNMkIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsUUFBNEM7QUFBQSxNQUF6Q0MsVUFBeUMsU0FBekNBLFVBQXlDO0FBQUEsTUFBN0JDLGNBQTZCLFNBQTdCQSxjQUE2QjtBQUFBLE1BQWJDLE1BQWEsU0FBYkEsTUFBYTtBQUM3RCxNQUFNQyxTQUFTLEdBQUdILFVBQVUsQ0FBQ0ksR0FBWCxDQUFlLFVBQUNDLFFBQUQ7QUFBQSxXQUMvQixNQUFDLHdFQUFEO0FBQVUsU0FBRyxFQUFFQSxRQUFRLENBQUNqQixFQUF4QjtBQUE0QixhQUFPLEVBQUU7QUFBQSxlQUFNYSxjQUFjLENBQUNJLFFBQVEsQ0FBQ2pCLEVBQVYsQ0FBcEI7QUFBQSxPQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw2RUFBRDtBQUFlLFlBQU0sRUFBRWlCLFFBQVEsQ0FBQ2pCLEVBQVQsS0FBZ0JjLE1BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0csUUFBUSxDQUFDUCxLQURaLENBREYsQ0FEK0I7QUFBQSxHQUFmLENBQWxCO0FBT0EsU0FBTyxNQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0JLLFNBQWxCLENBQVA7QUFDRCxDQVREOztNQUFNSixVIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBQcm9kdWN0c1dyYXBwZXIsXG4gIENhdGVnb3J5LFxuICBDYXRlZ29yeVRpdGxlLFxuICBDYXRlZ29yeVdyYXBwZXIsXG4gIFRpdGxlLFxufSBmcm9tIFwiLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9wcm9kdWN0c0l0ZW1zXCI7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4uLy4uL1VJL0Ryb3Bkb3duL0Ryb3Bkb3duXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7XG4gIHVzZVByb2R1Y3RzT3ZlcnZpZXcsXG4gIHVzZUNhdGFsb2dDYXRlZ29yaWVzLFxuICB1c2VUb2dnbGVDYXRlZ29yeSxcbn0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvYWN0aW9uc0luZGV4XCI7XG5cbmNvbnN0IFByb2R1Y3RzID0gKHt9KSA9PiB7XG4gIGNvbnN0IFtuYXZQcm9kdWN0cywgc2hvd05hdlByb2R1Y3RzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc3RvcmUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb2R1Y3RzKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBwcm9kdWN0c092ZXJ2aWV3ID0gZGlzcGF0Y2godXNlUHJvZHVjdHNPdmVydmlldygpKTtcbiAgY29uc3QgYWN0aXZlQ2F0YWxvZ0NhdGVnb3JpZXMgPSBkaXNwYXRjaCh1c2VDYXRhbG9nQ2F0ZWdvcmllcygpKTtcblxuICBjb25zdCBuYXZQcm9kdWN0c1RvZ2dsZUhhbmRsZXIgPSAoKSA9PiBzaG93TmF2UHJvZHVjdHMoKHN0YXRlKSA9PiAhc3RhdGUpO1xuICBjb25zdCB0b2dnbGVDYXRlZ29yeUhhbmRsZXIgPSAoaWQpID0+IGRpc3BhdGNoKHVzZVRvZ2dsZUNhdGVnb3J5KGlkKSk7XG5cbiAgY29uc29sZS5sb2coXCJhY3RpdmUgY2F0YWxvZ1wiLCBzdG9yZS5hY3RpdmVDYXRhbG9nKTtcbiAgY29uc29sZS5sb2coXCJhY3RpdmUgY2F0ZWdvcnlcIiwgc3RvcmUuYWN0aXZlQ2F0ZWdvcnkpO1xuICBjb25zdCByZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgcmV0dXJuIChcbiAgICA8UHJvZHVjdHNXcmFwcGVyPlxuICAgICAgPFRpdGxlPk5vc3NvcyBQcm9kdXRvczwvVGl0bGU+XG4gICAgICA8RHJvcGRvd25cbiAgICAgICAgb25Qcm9kdWN0c1xuICAgICAgICBkcm9wRG93blRpdGxlPXtzdG9yZS5vdmVydmlld1tzdG9yZS5hY3RpdmVDYXRhbG9nXS5sYWJlbH1cbiAgICAgICAgc2hvd0Ryb3BEb3duPXtuYXZQcm9kdWN0c31cbiAgICAgICAgZHJvcERvd25Ub2dnbGVySGFuZGxlcj17bmF2UHJvZHVjdHNUb2dnbGVIYW5kbGVyfVxuICAgICAgICBzdWJJdGVtcz17cHJvZHVjdHNPdmVydmlld31cbiAgICAgIC8+XG4gICAgICA8Q2F0ZWdvcmllc1xuICAgICAgICBhY3RpdmU9e3N0b3JlLmFjdGl2ZUNhdGVnb3J5fVxuICAgICAgICBjYXRlZ29yaWVzPXthY3RpdmVDYXRhbG9nQ2F0ZWdvcmllc31cbiAgICAgICAgdG9nZ2xlQ2F0ZWdvcnk9e3RvZ2dsZUNhdGVnb3J5SGFuZGxlcn1cbiAgICAgIC8+XG4gICAgPC9Qcm9kdWN0c1dyYXBwZXI+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XG5cbmNvbnN0IENhdGVnb3JpZXMgPSAoeyBjYXRlZ29yaWVzLCB0b2dnbGVDYXRlZ29yeSwgYWN0aXZlIH0pID0+IHtcbiAgY29uc3QgY2F0VGl0bGVzID0gY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgPENhdGVnb3J5IGtleT17Y2F0ZWdvcnkuaWR9IG9uQ2xpY2s9eygpID0+IHRvZ2dsZUNhdGVnb3J5KGNhdGVnb3J5LmlkKX0+XG4gICAgICA8Q2F0ZWdvcnlUaXRsZSBhY3RpdmU9e2NhdGVnb3J5LmlkID09PSBhY3RpdmV9PlxuICAgICAgICB7Y2F0ZWdvcnkubGFiZWx9XG4gICAgICA8L0NhdGVnb3J5VGl0bGU+XG4gICAgPC9DYXRlZ29yeT5cbiAgKSk7XG4gIHJldHVybiA8Q2F0ZWdvcnlXcmFwcGVyPntjYXRUaXRsZXN9PC9DYXRlZ29yeVdyYXBwZXI+O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Products/Products.js\n");

/***/ })

})