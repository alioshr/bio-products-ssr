webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Products/Products.js":
/*!*****************************************!*\
  !*** ./Components/Products/Products.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../StyledComponents/productsItems */ \"./StyledComponents/productsItems.js\");\n/* harmony import */ var _UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/Dropdown/Dropdown */ \"./UI/Dropdown/Dropdown.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n/* harmony import */ var _Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Hooks/useClientWindow */ \"./Hooks/useClientWindow.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Products/Products.js\",\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nvar Products = function Products(_ref) {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      navProducts = _useState[0],\n      showNavProducts = _useState[1];\n\n  var store = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    return state.products;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"])();\n  var productsOverview = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useProductsOverview\"])());\n  var activeCatalogCategories = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useCatalogCategories\"])());\n\n  var navProductsToggleHandler = function navProductsToggleHandler() {\n    return showNavProducts(function (state) {\n      return !state;\n    });\n  };\n\n  var toggleCategoryHandler = function toggleCategoryHandler(id) {\n    _s();\n\n    return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useToggleCategory\"])(id));\n  };\n\n  _s(toggleCategoryHandler, \"b8aGLn/Mzluh0akaKUo24RslKf0=\", false, function () {\n    return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useToggleCategory\"]];\n  });\n\n  console.log(\"active catalog\", store.activeCatalog);\n  console.log(\"active category\", store.activeCategory);\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"ProductsWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, \"Nossos Produtos\"), __jsx(_UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onProducts: true,\n    dropDownTitle: store.overview[store.activeCatalog].label,\n    showDropDown: navProducts,\n    dropDownTogglerHandler: navProductsToggleHandler,\n    subItems: productsOverview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }), __jsx(Categories, {\n    active: store.activeCategory,\n    categories: activeCatalogCategories,\n    toggleCategory: toggleCategoryHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s2(Products, \"tMCAGYtN+BV5rY7bufpIH8UYsyw=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useProductsOverview\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useCatalogCategories\"]];\n});\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar Categories = function Categories(_ref2) {\n  _s3();\n\n  var categories = _ref2.categories,\n      toggleCategory = _ref2.toggleCategory,\n      active = _ref2.active;\n  var catLength = categories.length;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      elRefs = _React$useState2[0],\n      setElRefs = _React$useState2[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      catFitDisplay = _useState2[0],\n      setCatFitDisplay = _useState2[1];\n\n  var window = Object(_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_7__[\"useClientWindow\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setElRefs(function (elRefs) {\n      return Array(catLength).fill().map(function (_, i) {\n        return elRefs[i] || /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createRef\"])();\n      });\n    }).map(function (el) {\n      return el.current.offsetWidth;\n    }).reduce(function (a, b, index) {\n      return a + b + 16 * index;\n    }) <= window.innerWidth;\n  }, [categories]);\n  console.log(elRefs);\n  var catTitles = categories.map(function (category, index) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Category\"], {\n      ref: elRefs[index],\n      key: category.id,\n      onClick: function onClick() {\n        return toggleCategory(category.id);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"CategoryTitle\"], {\n      active: category.id === active,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 7\n      }\n    }, category.label));\n  });\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"CategoryWrapper\"], {\n    fitDisplay: catFitDisplay,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 10\n    }\n  }, catTitles);\n};\n\n_s3(Categories, \"SGkpGWF3Ob9iI4L+0W2Kik3MP0Y=\", false, function () {\n  return [_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_7__[\"useClientWindow\"]];\n});\n\n_c2 = Categories;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Products\");\n$RefreshReg$(_c2, \"Categories\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy5qcz9iYzZkIl0sIm5hbWVzIjpbIlByb2R1Y3RzIiwidXNlU3RhdGUiLCJuYXZQcm9kdWN0cyIsInNob3dOYXZQcm9kdWN0cyIsInN0b3JlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3RzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInByb2R1Y3RzT3ZlcnZpZXciLCJ1c2VQcm9kdWN0c092ZXJ2aWV3IiwiYWN0aXZlQ2F0YWxvZ0NhdGVnb3JpZXMiLCJ1c2VDYXRhbG9nQ2F0ZWdvcmllcyIsIm5hdlByb2R1Y3RzVG9nZ2xlSGFuZGxlciIsInRvZ2dsZUNhdGVnb3J5SGFuZGxlciIsImlkIiwidXNlVG9nZ2xlQ2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlQ2F0YWxvZyIsImFjdGl2ZUNhdGVnb3J5Iiwib3ZlcnZpZXciLCJsYWJlbCIsIkNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwidG9nZ2xlQ2F0ZWdvcnkiLCJhY3RpdmUiLCJjYXRMZW5ndGgiLCJsZW5ndGgiLCJSZWFjdCIsImVsUmVmcyIsInNldEVsUmVmcyIsImNhdEZpdERpc3BsYXkiLCJzZXRDYXRGaXREaXNwbGF5Iiwid2luZG93IiwidXNlQ2xpZW50V2luZG93IiwidXNlRWZmZWN0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJjcmVhdGVSZWYiLCJlbCIsImN1cnJlbnQiLCJvZmZzZXRXaWR0aCIsInJlZHVjZSIsImEiLCJiIiwiaW5kZXgiLCJpbm5lcldpZHRoIiwiY2F0VGl0bGVzIiwiY2F0ZWdvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBS0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBUTtBQUFBOztBQUFBOztBQUFBOztBQUFBLGtCQUNnQkMsc0RBQVEsQ0FBQyxLQUFELENB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WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBQcm9kdWN0c1dyYXBwZXIsXG4gIENhdGVnb3J5LFxuICBDYXRlZ29yeVRpdGxlLFxuICBDYXRlZ29yeVdyYXBwZXIsXG4gIFRpdGxlLFxufSBmcm9tIFwiLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9wcm9kdWN0c0l0ZW1zXCI7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4uLy4uL1VJL0Ryb3Bkb3duL0Ryb3Bkb3duXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7XG4gIHVzZVByb2R1Y3RzT3ZlcnZpZXcsXG4gIHVzZUNhdGFsb2dDYXRlZ29yaWVzLFxuICB1c2VUb2dnbGVDYXRlZ29yeSxcbn0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvYWN0aW9uc0luZGV4XCI7XG5pbXBvcnQge3VzZUNsaWVudFdpbmRvd30gZnJvbSAnLi4vLi4vSG9va3MvdXNlQ2xpZW50V2luZG93J1xuXG5jb25zdCBQcm9kdWN0cyA9ICh7fSkgPT4ge1xuICBjb25zdCBbbmF2UHJvZHVjdHMsIHNob3dOYXZQcm9kdWN0c10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHN0b3JlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0cyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgcHJvZHVjdHNPdmVydmlldyA9IGRpc3BhdGNoKHVzZVByb2R1Y3RzT3ZlcnZpZXcoKSk7XG4gIGNvbnN0IGFjdGl2ZUNhdGFsb2dDYXRlZ29yaWVzID0gZGlzcGF0Y2godXNlQ2F0YWxvZ0NhdGVnb3JpZXMoKSk7XG5cbiAgY29uc3QgbmF2UHJvZHVjdHNUb2dnbGVIYW5kbGVyID0gKCkgPT4gc2hvd05hdlByb2R1Y3RzKChzdGF0ZSkgPT4gIXN0YXRlKTtcbiAgY29uc3QgdG9nZ2xlQ2F0ZWdvcnlIYW5kbGVyID0gKGlkKSA9PiBkaXNwYXRjaCh1c2VUb2dnbGVDYXRlZ29yeShpZCkpO1xuXG4gIGNvbnNvbGUubG9nKFwiYWN0aXZlIGNhdGFsb2dcIiwgc3RvcmUuYWN0aXZlQ2F0YWxvZyk7XG4gIGNvbnNvbGUubG9nKFwiYWN0aXZlIGNhdGVnb3J5XCIsIHN0b3JlLmFjdGl2ZUNhdGVnb3J5KTtcblxuICByZXR1cm4gKFxuICAgIDxQcm9kdWN0c1dyYXBwZXI+XG4gICAgICA8VGl0bGU+Tm9zc29zIFByb2R1dG9zPC9UaXRsZT5cbiAgICAgIDxEcm9wZG93blxuICAgICAgICBvblByb2R1Y3RzXG4gICAgICAgIGRyb3BEb3duVGl0bGU9e3N0b3JlLm92ZXJ2aWV3W3N0b3JlLmFjdGl2ZUNhdGFsb2ddLmxhYmVsfVxuICAgICAgICBzaG93RHJvcERvd249e25hdlByb2R1Y3RzfVxuICAgICAgICBkcm9wRG93blRvZ2dsZXJIYW5kbGVyPXtuYXZQcm9kdWN0c1RvZ2dsZUhhbmRsZXJ9XG4gICAgICAgIHN1Ykl0ZW1zPXtwcm9kdWN0c092ZXJ2aWV3fVxuICAgICAgLz5cbiAgICAgIDxDYXRlZ29yaWVzXG4gICAgICAgIGFjdGl2ZT17c3RvcmUuYWN0aXZlQ2F0ZWdvcnl9XG4gICAgICAgIGNhdGVnb3JpZXM9e2FjdGl2ZUNhdGFsb2dDYXRlZ29yaWVzfVxuICAgICAgICB0b2dnbGVDYXRlZ29yeT17dG9nZ2xlQ2F0ZWdvcnlIYW5kbGVyfVxuICAgICAgLz5cbiAgICA8L1Byb2R1Y3RzV3JhcHBlcj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcblxuY29uc3QgQ2F0ZWdvcmllcyA9ICh7IGNhdGVnb3JpZXMsIHRvZ2dsZUNhdGVnb3J5LCBhY3RpdmUgfSkgPT4ge1xuICBjb25zdCBjYXRMZW5ndGggPSBjYXRlZ29yaWVzLmxlbmd0aDtcbiAgY29uc3QgW2VsUmVmcywgc2V0RWxSZWZzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NhdEZpdERpc3BsYXksIHNldENhdEZpdERpc3BsYXldID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHdpbmRvdyA9IHVzZUNsaWVudFdpbmRvdygpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRFbFJlZnMoKGVsUmVmcykgPT5cbiAgICAgIEFycmF5KGNhdExlbmd0aClcbiAgICAgICAgLmZpbGwoKVxuICAgICAgICAubWFwKChfLCBpKSA9PiBlbFJlZnNbaV0gfHwgY3JlYXRlUmVmKCkpXG4gICAgKS5tYXAoKGVsKSA9PiBlbC5jdXJyZW50Lm9mZnNldFdpZHRoKVxuICAgIC5yZWR1Y2UoKGEsIGIsIGluZGV4KSA9PiBhICsgYiArIDE2ICogaW5kZXgpIDw9IHdpbmRvdy5pbm5lcldpZHRoOyAgIFxuICB9LCBbY2F0ZWdvcmllc10pO1xuXG4gIGNvbnNvbGUubG9nKGVsUmVmcylcblxuICBjb25zdCBjYXRUaXRsZXMgPSBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiAoXG4gICAgPENhdGVnb3J5XG4gICAgICByZWY9e2VsUmVmc1tpbmRleF19XG4gICAgICBrZXk9e2NhdGVnb3J5LmlkfVxuICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlQ2F0ZWdvcnkoY2F0ZWdvcnkuaWQpfVxuICAgID5cbiAgICAgIDxDYXRlZ29yeVRpdGxlIGFjdGl2ZT17Y2F0ZWdvcnkuaWQgPT09IGFjdGl2ZX0+XG4gICAgICAgIHtjYXRlZ29yeS5sYWJlbH1cbiAgICAgIDwvQ2F0ZWdvcnlUaXRsZT5cbiAgICA8L0NhdGVnb3J5PlxuICApKTtcbiAgcmV0dXJuIDxDYXRlZ29yeVdyYXBwZXIgZml0RGlzcGxheT17Y2F0Rml0RGlzcGxheX0+e2NhdFRpdGxlc308L0NhdGVnb3J5V3JhcHBlcj47XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Products/Products.js\n");

/***/ })

})