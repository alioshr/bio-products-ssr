webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Products/Products.js":
/*!*****************************************!*\
  !*** ./Components/Products/Products.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StyledComponents/productsItems */ \"./StyledComponents/productsItems.js\");\n/* harmony import */ var _UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/Dropdown/Dropdown */ \"./UI/Dropdown/Dropdown.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Products/Products.js\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar Products = function Products(_ref) {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      navProducts = _useState[0],\n      showNavProducts = _useState[1];\n\n  var store = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    return state.products;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n  var productsOverview = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_5__[\"useProductsOverview\"])());\n  var activeCatalogCategories = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_5__[\"useCatalogCategories\"])());\n\n  var navProductsToggleHandler = function navProductsToggleHandler() {\n    return showNavProducts(function (state) {\n      return !state;\n    });\n  };\n\n  var toggleCategoryHandler = function toggleCategoryHandler(id) {\n    _s();\n\n    return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_5__[\"useToggleCategory\"])(id));\n  };\n\n  _s(toggleCategoryHandler, \"b8aGLn/Mzluh0akaKUo24RslKf0=\", false, function () {\n    return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_5__[\"useToggleCategory\"]];\n  });\n\n  console.log(\"active catalog\", store.activeCatalog);\n  console.log(\"active category\", store.activeCategory);\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ProductsWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, \"Nossos Produtos\"), __jsx(_UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onProducts: true,\n    showDropDown: navProducts,\n    dropDownTogglerHandler: navProductsToggleHandler,\n    subItems: productsOverview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }), __jsx(Categories, {\n    categories: activeCatalogCategories,\n    toggledCategory: toggleCategoryHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s2(Products, \"tMCAGYtN+BV5rY7bufpIH8UYsyw=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_5__[\"useProductsOverview\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_5__[\"useCatalogCategories\"]];\n});\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar Categories = function Categories(_ref2) {\n  var categories = _ref2.categories,\n      toggleCategory = _ref2.toggleCategory;\n\n  var toggleCategoryLifter = function toggleCategoryLifter(id) {\n    return toggleCategory;\n  };\n\n  var catTitles = categories.map(function (category) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"Category\"], {\n      onClick: toggleCategory(category.id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"CategoryTitle\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 7\n      }\n    }, category.label));\n  });\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"CategoryWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 10\n    }\n  }, catTitles);\n};\n\n_c2 = Categories;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Products\");\n$RefreshReg$(_c2, \"Categories\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy5qcz9iYzZkIl0sIm5hbWVzIjpbIlByb2R1Y3RzIiwidXNlU3RhdGUiLCJuYXZQcm9kdWN0cyIsInNob3dOYXZQcm9kdWN0cyIsInN0b3JlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3RzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInByb2R1Y3RzT3ZlcnZpZXciLCJ1c2VQcm9kdWN0c092ZXJ2aWV3IiwiYWN0aXZlQ2F0YWxvZ0NhdGVnb3JpZXMiLCJ1c2VDYXRhbG9nQ2F0ZWdvcmllcyIsIm5hdlByb2R1Y3RzVG9nZ2xlSGFuZGxlciIsInRvZ2dsZUNhdGVnb3J5SGFuZGxlciIsImlkIiwidXNlVG9nZ2xlQ2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlQ2F0YWxvZyIsImFjdGl2ZUNhdGVnb3J5IiwiQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJ0b2dnbGVDYXRlZ29yeSIsInRvZ2dsZUNhdGVnb3J5TGlmdGVyIiwiY2F0VGl0bGVzIiwibWFwIiwiY2F0ZWdvcnkiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFRO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2dCQyxzREFBUSxDQUFDLEtBQUQsQ0FEeEI7QUFBQSxNQUNoQkMsV0FEZ0I7QUFBQSxNQUNIQyxlQURHOztBQUV2QixNQUFNQyxLQUFLLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsUUFBakI7QUFBQSxHQUFELENBQXpCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHRixRQUFRLENBQUNHLHVGQUFtQixFQUFwQixDQUFqQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHSixRQUFRLENBQUNLLHdGQUFvQixFQUFyQixDQUF4Qzs7QUFFQSxNQUFNQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCO0FBQUEsV0FBTVgsZUFBZSxDQUFDLFVBQUNHLEtBQUQ7QUFBQSxhQUFXLENBQUNBLEtBQVo7QUFBQSxLQUFELENBQXJCO0FBQUEsR0FBakM7O0FBQ0EsTUFBTVMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxFQUFEO0FBQUE7O0FBQUEsV0FBUVIsUUFBUSxDQUFDUyxxRkFBaUIsQ0FBQ0QsRUFBRCxDQUFsQixDQUFoQjtBQUFBLEdBQTlCOztBQVJ1QixLQVFqQkQscUJBUmlCO0FBQUEsWUFRd0JFLDZFQVJ4QjtBQUFBOztBQVV2QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJmLEtBQUssQ0FBQ2dCLGFBQXBDO0FBQ0FGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCZixLQUFLLENBQUNpQixjQUFyQztBQUVBLFNBQ0UsTUFBQywrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUUsTUFBQyw2REFBRDtBQUNFLGNBQVUsTUFEWjtBQUVFLGdCQUFZLEVBQUVuQixXQUZoQjtBQUdFLDBCQUFzQixFQUFFWSx3QkFIMUI7QUFJRSxZQUFRLEVBQUVKLGdCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQVFFLE1BQUMsVUFBRDtBQUFZLGNBQVUsRUFBRUUsdUJBQXhCO0FBQWlELG1CQUFlLEVBQUVHLHFCQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FERjtBQVlELENBekJEOztJQUFNZixRO1VBRVVLLHVELEVBQ0dJLHVELEVBQ2lCRSwrRSxFQUNPRSxnRjs7O0tBTHJDYixRO0FBMEJTQSx1RUFBZjs7QUFFQSxJQUFNc0IsVUFBVSxHQUFHLFNBQWJBLFVBQWEsUUFBb0M7QUFBQSxNQUFqQ0MsVUFBaUMsU0FBakNBLFVBQWlDO0FBQUEsTUFBckJDLGNBQXFCLFNBQXJCQSxjQUFxQjs7QUFDckQsTUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDVCxFQUFEO0FBQUEsV0FBUVEsY0FBUjtBQUFBLEdBQTdCOztBQUNBLE1BQU1FLFNBQVMsR0FBR0gsVUFBVSxDQUFDSSxHQUFYLENBQWUsVUFBQ0MsUUFBRDtBQUFBLFdBQy9CLE1BQUMsd0VBQUQ7QUFBVSxhQUFPLEVBQUVKLGNBQWMsQ0FBQ0ksUUFBUSxDQUFDWixFQUFWLENBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDZFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0JZLFFBQVEsQ0FBQ0MsS0FBekIsQ0FERixDQUQrQjtBQUFBLEdBQWYsQ0FBbEI7QUFLQSxTQUFPLE1BQUMsK0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNKSCxTQURJLENBQVA7QUFHRCxDQVZEOztNQUFNSixVIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBQcm9kdWN0c1dyYXBwZXIsXG4gIENhdGVnb3J5LFxuICBDYXRlZ29yeVRpdGxlLFxuICBDYXRlZ29yeVdyYXBwZXIsXG4gIFRpdGxlLFxufSBmcm9tIFwiLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9wcm9kdWN0c0l0ZW1zXCI7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4uLy4uL1VJL0Ryb3Bkb3duL0Ryb3Bkb3duXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7XG4gIHVzZVByb2R1Y3RzT3ZlcnZpZXcsXG4gIHVzZUNhdGFsb2dDYXRlZ29yaWVzLFxuICB1c2VUb2dnbGVDYXRlZ29yeVxufSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9hY3Rpb25zSW5kZXhcIjtcblxuY29uc3QgUHJvZHVjdHMgPSAoe30pID0+IHtcbiAgY29uc3QgW25hdlByb2R1Y3RzLCBzaG93TmF2UHJvZHVjdHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzdG9yZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvZHVjdHMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHByb2R1Y3RzT3ZlcnZpZXcgPSBkaXNwYXRjaCh1c2VQcm9kdWN0c092ZXJ2aWV3KCkpO1xuICBjb25zdCBhY3RpdmVDYXRhbG9nQ2F0ZWdvcmllcyA9IGRpc3BhdGNoKHVzZUNhdGFsb2dDYXRlZ29yaWVzKCkpO1xuXG4gIGNvbnN0IG5hdlByb2R1Y3RzVG9nZ2xlSGFuZGxlciA9ICgpID0+IHNob3dOYXZQcm9kdWN0cygoc3RhdGUpID0+ICFzdGF0ZSk7XG4gIGNvbnN0IHRvZ2dsZUNhdGVnb3J5SGFuZGxlciA9IChpZCkgPT4gZGlzcGF0Y2godXNlVG9nZ2xlQ2F0ZWdvcnkoaWQpKTtcblxuICBjb25zb2xlLmxvZyhcImFjdGl2ZSBjYXRhbG9nXCIsIHN0b3JlLmFjdGl2ZUNhdGFsb2cpO1xuICBjb25zb2xlLmxvZyhcImFjdGl2ZSBjYXRlZ29yeVwiLCBzdG9yZS5hY3RpdmVDYXRlZ29yeSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvZHVjdHNXcmFwcGVyPlxuICAgICAgPFRpdGxlPk5vc3NvcyBQcm9kdXRvczwvVGl0bGU+XG4gICAgICA8RHJvcGRvd25cbiAgICAgICAgb25Qcm9kdWN0c1xuICAgICAgICBzaG93RHJvcERvd249e25hdlByb2R1Y3RzfVxuICAgICAgICBkcm9wRG93blRvZ2dsZXJIYW5kbGVyPXtuYXZQcm9kdWN0c1RvZ2dsZUhhbmRsZXJ9XG4gICAgICAgIHN1Ykl0ZW1zPXtwcm9kdWN0c092ZXJ2aWV3fVxuICAgICAgLz5cbiAgICAgIDxDYXRlZ29yaWVzIGNhdGVnb3JpZXM9e2FjdGl2ZUNhdGFsb2dDYXRlZ29yaWVzfSB0b2dnbGVkQ2F0ZWdvcnk9e3RvZ2dsZUNhdGVnb3J5SGFuZGxlcn0vPlxuICAgIDwvUHJvZHVjdHNXcmFwcGVyPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xuXG5jb25zdCBDYXRlZ29yaWVzID0gKHsgY2F0ZWdvcmllcywgdG9nZ2xlQ2F0ZWdvcnkgfSkgPT4ge1xuICBjb25zdCB0b2dnbGVDYXRlZ29yeUxpZnRlciA9IChpZCkgPT4gdG9nZ2xlQ2F0ZWdvcnlcbiAgY29uc3QgY2F0VGl0bGVzID0gY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgPENhdGVnb3J5IG9uQ2xpY2s9e3RvZ2dsZUNhdGVnb3J5KGNhdGVnb3J5LmlkKX0+XG4gICAgICA8Q2F0ZWdvcnlUaXRsZT57Y2F0ZWdvcnkubGFiZWx9PC9DYXRlZ29yeVRpdGxlPlxuICAgIDwvQ2F0ZWdvcnk+XG4gICkpO1xuICByZXR1cm4gPENhdGVnb3J5V3JhcHBlcj5cbiAgICB7Y2F0VGl0bGVzfVxuICA8L0NhdGVnb3J5V3JhcHBlcj47XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Products/Products.js\n");

/***/ })

})