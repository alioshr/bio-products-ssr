webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Products/Products.js":
/*!*****************************************!*\
  !*** ./Components/Products/Products.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../StyledComponents/productsItems */ \"./StyledComponents/productsItems.js\");\n/* harmony import */ var _UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/Dropdown/Dropdown */ \"./UI/Dropdown/Dropdown.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n/* harmony import */ var _Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Hooks/useClientWindow */ \"./Hooks/useClientWindow.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Products/Products.js\",\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Products = function Products(_ref) {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      navProducts = _useState[0],\n      showNavProducts = _useState[1];\n\n  var store = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    return state.products;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"])();\n  var productsOverview = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useProductsOverview\"])());\n  var activeCatalogCategories = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useCatalogCategories\"])());\n\n  var navProductsToggleHandler = function navProductsToggleHandler() {\n    return showNavProducts(function (state) {\n      return !state;\n    });\n  };\n\n  var toggleCategoryHandler = function toggleCategoryHandler(id) {\n    _s();\n\n    return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useToggleCategory\"])(id));\n  };\n\n  _s(toggleCategoryHandler, \"b8aGLn/Mzluh0akaKUo24RslKf0=\", false, function () {\n    return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useToggleCategory\"]];\n  });\n\n  console.log(\"active catalog\", store.activeCatalog);\n  console.log(\"active category\", store.activeCategory);\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"ProductsWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, \"Nossos Produtos\"), __jsx(_UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onProducts: true,\n    dropDownTitle: store.overview[store.activeCatalog].label,\n    showDropDown: navProducts,\n    dropDownTogglerHandler: navProductsToggleHandler,\n    subItems: productsOverview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }), __jsx(Categories, {\n    active: store.activeCategory,\n    categories: activeCatalogCategories,\n    toggleCategory: toggleCategoryHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }), __jsx(ProductPanel, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s2(Products, \"tMCAGYtN+BV5rY7bufpIH8UYsyw=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useProductsOverview\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useCatalogCategories\"]];\n});\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar Categories = function Categories(_ref2) {\n  _s3();\n\n  var categories = _ref2.categories,\n      toggleCategory = _ref2.toggleCategory,\n      active = _ref2.active;\n  var catLength = categories.length;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      elRefs = _React$useState2[0],\n      setElRefs = _React$useState2[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      fitDevice = _useState2[0],\n      setFitDevice = _useState2[1];\n\n  var window = Object(_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_7__[\"useClientWindow\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setElRefs(function (elRefs) {\n      return Array(catLength).fill().map(function (_, i) {\n        return elRefs[i] || /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createRef\"])();\n      });\n    });\n  }, [categories]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (elRefs.length > 0 && elRefs[0].current !== null) {\n      var margin = window.innerWidth < 640 ? 8 : 32; //hardcoded the margins\n\n      setFitDevice(elRefs.map(function (el) {\n        return el.current.offsetWidth;\n      }).reduce(function (a, b, index) {\n        return a + b + margin * index;\n      }) <= window.innerWidth);\n    }\n  }, [elRefs]);\n  var catTitles = categories.map(function (category, index) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Category\"], {\n      ref: elRefs[index],\n      key: category.id,\n      onClick: function onClick() {\n        return toggleCategory(category.id);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"CategoryTitle\"], {\n      active: category.id === active,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 7\n      }\n    }, category.label));\n  });\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"CategoryWrapper\"], {\n    fitDisplay: fitDevice,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 10\n    }\n  }, catTitles);\n};\n\n_s3(Categories, \"qJexK/5XK/fUqny+UORKg7dhIcQ=\", false, function () {\n  return [_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_7__[\"useClientWindow\"]];\n});\n\n_c2 = Categories;\n\nvar ProductPanel = function ProductPanel(_ref3) {\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref3);\n\n  var test = [];\n\n  for (var i = 0; i < 10; i++) {\n    test.push(__jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Product\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 7\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }\n    }), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Name\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }\n    }, \"Nome\"), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Span\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }\n    }, \"Categoria\"), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Hr\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }\n    }), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Span\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }\n    }, \"Estoque: 20 unid\"), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Hr\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }\n    }), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Price\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 9\n      }\n    }, __jsx(\"strong\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 16\n      }\n    }, \"10 BRL\"), \" / unid\"), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Icons\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }\n    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__[\"FontAwesomeIcon\"], {\n      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__[\"faPlusCircle\"],\n      size: \"2x\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 11\n      }\n    }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__[\"FontAwesomeIcon\"], {\n      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__[\"faShoppingBag\"],\n      size: \"2x\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 11\n      }\n    }))));\n  }\n\n  console.log(test);\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Panel\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 5\n    }\n  }, test);\n};\n\n_c3 = ProductPanel;\n\nvar StockCTA = function StockCTA(_ref4) {\n  var stock = _ref4.stock;\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"StockAlert\"], {\n    stock: stock,\n    t: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 3\n    }\n  }, \"\\xDAltimas Unidades!\");\n};\n\n_c4 = StockCTA;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Products\");\n$RefreshReg$(_c2, \"Categories\");\n$RefreshReg$(_c3, \"ProductPanel\");\n$RefreshReg$(_c4, \"StockCTA\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy5qcz9iYzZkIl0sIm5hbWVzIjpbIlByb2R1Y3RzIiwidXNlU3RhdGUiLCJuYXZQcm9kdWN0cyIsInNob3dOYXZQcm9kdWN0cyIsInN0b3JlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3RzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInByb2R1Y3RzT3ZlcnZpZXciLCJ1c2VQcm9kdWN0c092ZXJ2aWV3IiwiYWN0aXZlQ2F0YWxvZ0NhdGVnb3JpZXMiLCJ1c2VDYXRhbG9nQ2F0ZWdvcmllcyIsIm5hdlByb2R1Y3RzVG9nZ2xlSGFuZGxlciIsInRvZ2dsZUNhdGVnb3J5SGFuZGxlciIsImlkIiwidXNlVG9nZ2xlQ2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlQ2F0YWxvZyIsImFjdGl2ZUNhdGVnb3J5Iiwib3ZlcnZpZXciLCJsYWJlbCIsIkNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwidG9nZ2xlQ2F0ZWdvcnkiLCJhY3RpdmUiLCJjYXRMZW5ndGgiLCJsZW5ndGgiLCJSZWFjdCIsImVsUmVmcyIsInNldEVsUmVmcyIsImZpdERldmljZSIsInNldEZpdERldmljZSIsIndpbmRvdyIsInVzZUNsaWVudFdpbmRvdyIsInVzZUVmZmVjdCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiY3JlYXRlUmVmIiwiY3VycmVudCIsIm1hcmdpbiIsImlubmVyV2lkdGgiLCJlbCIsIm9mZnNldFdpZHRoIiwicmVkdWNlIiwiYSIsImIiLCJpbmRleCIsImNhdFRpdGxlcyIsImNhdGVnb3J5IiwiUHJvZHVjdFBhbmVsIiwidGVzdCIsInB1c2giLCJmYVBsdXNDaXJjbGUiLCJmYVNob3BwaW5nQmFnIiwiU3RvY2tDVEEiLCJzdG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBUTtBQUFBOztBQUFBOztBQUFBOztBQUFBLGtCQUNnQkMsc0RBQVEsQ0FBQyxLQUFELENBRHhCO0FBQUEsTUFDaEJDLFdBRGdCO0FBQUEsTUFDSEMsZUFERzs7QUFFdkIsTUFBTUMsS0FBSyxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLFFBQWpCO0FBQUEsR0FBRCxDQUF6QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBR0YsUUFBUSxDQUFDRyx1RkFBbUIsRUFBcEIsQ0FBakM7QUFDQSxNQUFNQyx1QkFBdUIsR0FBR0osUUFBUSxDQUFDSyx3RkFBb0IsRUFBckIsQ0FBeEM7O0FBRUEsTUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQjtBQUFBLFdBQU1YLGVBQWUsQ0FBQyxVQUFDRyxLQUFEO0FBQUEsYUFBVyxDQUFDQSxLQUFaO0FBQUEsS0FBRCxDQUFyQjtBQUFBLEdBQWpDOztBQUNBLE1BQU1TLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsRUFBRDtBQUFBOztBQUFBLFdBQVFSLFFBQVEsQ0FBQ1MscUZBQWlCLENBQUNELEVBQUQsQ0FBbEIsQ0FBaEI7QUFBQSxHQUE5Qjs7QUFSdUIsS0FRakJELHFCQVJpQjtBQUFBLFlBUXdCRSw2RUFSeEI7QUFBQTs7QUFVdkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCZixLQUFLLENBQUNnQixhQUFwQztBQUNBRixTQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQmYsS0FBSyxDQUFDaUIsY0FBckM7QUFFQSxTQUNFLE1BQUMsK0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUVFLE1BQUMsNkRBQUQ7QUFDRSxjQUFVLE1BRFo7QUFFRSxpQkFBYSxFQUFFakIsS0FBSyxDQUFDa0IsUUFBTixDQUFlbEIsS0FBSyxDQUFDZ0IsYUFBckIsRUFBb0NHLEtBRnJEO0FBR0UsZ0JBQVksRUFBRXJCLFdBSGhCO0FBSUUsMEJBQXNCLEVBQUVZLHdCQUoxQjtBQUtFLFlBQVEsRUFBRUosZ0JBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBU0UsTUFBQyxVQUFEO0FBQ0UsVUFBTSxFQUFFTixLQUFLLENBQUNpQixjQURoQjtBQUVFLGNBQVUsRUFBRVQsdUJBRmQ7QUFHRSxrQkFBYyxFQUFFRyxxQkFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBY0UsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixDQURGO0FBa0JELENBL0JEOztJQUFNZixRO1VBRVVLLHVELEVBQ0dJLHVELEVBQ2lCRSwrRSxFQUNPRSxnRjs7O0tBTHJDYixRO0FBZ0NTQSx1RUFBZjs7QUFFQSxJQUFNd0IsVUFBVSxHQUFHLFNBQWJBLFVBQWEsUUFBNEM7QUFBQTs7QUFBQSxNQUF6Q0MsVUFBeUMsU0FBekNBLFVBQXlDO0FBQUEsTUFBN0JDLGNBQTZCLFNBQTdCQSxjQUE2QjtBQUFBLE1BQWJDLE1BQWEsU0FBYkEsTUFBYTtBQUM3RCxNQUFNQyxTQUFTLEdBQUdILFVBQVUsQ0FBQ0ksTUFBN0I7O0FBRDZELHdCQUVqQ0MsNENBQUssQ0FBQzdCLFFBQU4sQ0FBZSxFQUFmLENBRmlDO0FBQUE7QUFBQSxNQUV0RDhCLE1BRnNEO0FBQUEsTUFFOUNDLFNBRjhDOztBQUFBLG1CQUczQi9CLHNEQUFRLENBQUMsSUFBRCxDQUhtQjtBQUFBLE1BR3REZ0MsU0FIc0Q7QUFBQSxNQUczQ0MsWUFIMkM7O0FBSTdELE1BQU1DLE1BQU0sR0FBR0MsOEVBQWUsRUFBOUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RMLGFBQVMsQ0FBQyxVQUFDRCxNQUFEO0FBQUEsYUFDUk8sS0FBSyxDQUFDVixTQUFELENBQUwsQ0FDR1csSUFESCxHQUVHQyxHQUZILENBRU8sVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBVVgsTUFBTSxDQUFDVyxDQUFELENBQU4saUJBQWFDLHVEQUFTLEVBQWhDO0FBQUEsT0FGUCxDQURRO0FBQUEsS0FBRCxDQUFUO0FBS0QsR0FOUSxFQU1OLENBQUNsQixVQUFELENBTk0sQ0FBVDtBQVFBWSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTixNQUFNLENBQUNGLE1BQVAsR0FBZ0IsQ0FBaEIsSUFBcUJFLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVWEsT0FBVixLQUFzQixJQUEvQyxFQUFxRDtBQUNuRCxVQUFNQyxNQUFNLEdBQUdWLE1BQU0sQ0FBQ1csVUFBUCxHQUFvQixHQUFwQixHQUEwQixDQUExQixHQUE4QixFQUE3QyxDQURtRCxDQUNGOztBQUNoRFosa0JBQVksQ0FBQ0gsTUFBTSxDQUNqQlMsR0FEVyxDQUNQLFVBQUNPLEVBQUQ7QUFBQSxlQUFRQSxFQUFFLENBQUNILE9BQUgsQ0FBV0ksV0FBbkI7QUFBQSxPQURPLEVBRVhDLE1BRlcsQ0FFSixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0MsS0FBUDtBQUFBLGVBQWtCRixDQUFDLEdBQUdDLENBQUwsR0FBV04sTUFBTSxHQUFHTyxLQUFyQztBQUFBLE9BRkksS0FFNENqQixNQUFNLENBQUNXLFVBRnBELENBQVo7QUFHRjtBQUNGLEdBUFEsRUFPTixDQUFDZixNQUFELENBUE0sQ0FBVDtBQVNBLE1BQU1zQixTQUFTLEdBQUc1QixVQUFVLENBQUNlLEdBQVgsQ0FBZSxVQUFDYyxRQUFELEVBQVdGLEtBQVg7QUFBQSxXQUMvQixNQUFDLHdFQUFEO0FBQ0UsU0FBRyxFQUFFckIsTUFBTSxDQUFDcUIsS0FBRCxDQURiO0FBRUUsU0FBRyxFQUFFRSxRQUFRLENBQUN0QyxFQUZoQjtBQUdFLGFBQU8sRUFBRTtBQUFBLGVBQU1VLGNBQWMsQ0FBQzRCLFFBQVEsQ0FBQ3RDLEVBQVYsQ0FBcEI7QUFBQSxPQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLRSxNQUFDLDZFQUFEO0FBQWUsWUFBTSxFQUFFc0MsUUFBUSxDQUFDdEMsRUFBVCxLQUFnQlcsTUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHMkIsUUFBUSxDQUFDL0IsS0FEWixDQUxGLENBRCtCO0FBQUEsR0FBZixDQUFsQjtBQVdBLFNBQU8sTUFBQywrRUFBRDtBQUFpQixjQUFVLEVBQUVVLFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUNvQixTQUF6QyxDQUFQO0FBQ0QsQ0FuQ0Q7O0lBQU03QixVO1VBSVdZLHNFOzs7TUFKWFosVTs7QUFxQ04sSUFBTStCLFlBQVksR0FBRyxTQUFmQSxZQUFlLFFBQVE7QUFBQTs7QUFDM0IsTUFBTUMsSUFBSSxHQUFHLEVBQWI7O0FBQ0EsT0FBSSxJQUFJZCxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsRUFBbkIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUJjLFFBQUksQ0FBQ0MsSUFBTCxDQUNFLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUUsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsRUFHRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsRUFJRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRixFQUtFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFMRixFQU1FLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5GLEVBT0UsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUCxZQVBGLEVBUUUsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw4RUFBRDtBQUFpQixVQUFJLEVBQUVDLDhFQUF2QjtBQUFxQyxVQUFJLEVBQUMsSUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUUsTUFBQyw4RUFBRDtBQUFpQixVQUFJLEVBQUVDLCtFQUF2QjtBQUFzQyxVQUFJLEVBQUMsSUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBUkYsQ0FERjtBQWVEOztBQUNEekMsU0FBTyxDQUFDQyxHQUFSLENBQVlxQyxJQUFaO0FBQ0EsU0FDRSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsSUFESCxDQURGO0FBS0QsQ0F6QkQ7O01BQU1ELFk7O0FBMkJOLElBQU1LLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsTUFBRUMsS0FBRixTQUFFQSxLQUFGO0FBQUEsU0FDZixNQUFDLDBFQUFEO0FBQVksU0FBSyxFQUFFQSxLQUFuQjtBQUF5QixLQUFDLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRGU7QUFBQSxDQUFqQjs7TUFBTUQsUSIsImZpbGUiOiIuL0NvbXBvbmVudHMvUHJvZHVjdHMvUHJvZHVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBQcm9kdWN0c1dyYXBwZXIsXG4gIENhdGVnb3J5LFxuICBDYXRlZ29yeVRpdGxlLFxuICBDYXRlZ29yeVdyYXBwZXIsXG4gIFRpdGxlLFxuICBQYW5lbCxcbiAgUHJvZHVjdCxcbiAgSW1hZ2UsXG4gIE5hbWUsXG4gIFNwYW4sXG4gIEhyLFxuICBQcmljZSxcbiAgSWNvbnMsXG4gIFN0b2NrQWxlcnRcbn0gZnJvbSBcIi4uLy4uL1N0eWxlZENvbXBvbmVudHMvcHJvZHVjdHNJdGVtc1wiO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi8uLi9VSS9Ecm9wZG93bi9Ecm9wZG93blwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge1xuICB1c2VQcm9kdWN0c092ZXJ2aWV3LFxuICB1c2VDYXRhbG9nQ2F0ZWdvcmllcyxcbiAgdXNlVG9nZ2xlQ2F0ZWdvcnksXG59IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2FjdGlvbnNJbmRleFwiO1xuaW1wb3J0IHsgdXNlQ2xpZW50V2luZG93IH0gZnJvbSBcIi4uLy4uL0hvb2tzL3VzZUNsaWVudFdpbmRvd1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHtmYVNob3BwaW5nQmFnLCBmYVBsdXNDaXJjbGV9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcblxuY29uc3QgUHJvZHVjdHMgPSAoe30pID0+IHtcbiAgY29uc3QgW25hdlByb2R1Y3RzLCBzaG93TmF2UHJvZHVjdHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzdG9yZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvZHVjdHMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHByb2R1Y3RzT3ZlcnZpZXcgPSBkaXNwYXRjaCh1c2VQcm9kdWN0c092ZXJ2aWV3KCkpO1xuICBjb25zdCBhY3RpdmVDYXRhbG9nQ2F0ZWdvcmllcyA9IGRpc3BhdGNoKHVzZUNhdGFsb2dDYXRlZ29yaWVzKCkpO1xuXG4gIGNvbnN0IG5hdlByb2R1Y3RzVG9nZ2xlSGFuZGxlciA9ICgpID0+IHNob3dOYXZQcm9kdWN0cygoc3RhdGUpID0+ICFzdGF0ZSk7XG4gIGNvbnN0IHRvZ2dsZUNhdGVnb3J5SGFuZGxlciA9IChpZCkgPT4gZGlzcGF0Y2godXNlVG9nZ2xlQ2F0ZWdvcnkoaWQpKTtcblxuICBjb25zb2xlLmxvZyhcImFjdGl2ZSBjYXRhbG9nXCIsIHN0b3JlLmFjdGl2ZUNhdGFsb2cpO1xuICBjb25zb2xlLmxvZyhcImFjdGl2ZSBjYXRlZ29yeVwiLCBzdG9yZS5hY3RpdmVDYXRlZ29yeSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvZHVjdHNXcmFwcGVyPlxuICAgICAgPFRpdGxlPk5vc3NvcyBQcm9kdXRvczwvVGl0bGU+XG4gICAgICA8RHJvcGRvd25cbiAgICAgICAgb25Qcm9kdWN0c1xuICAgICAgICBkcm9wRG93blRpdGxlPXtzdG9yZS5vdmVydmlld1tzdG9yZS5hY3RpdmVDYXRhbG9nXS5sYWJlbH1cbiAgICAgICAgc2hvd0Ryb3BEb3duPXtuYXZQcm9kdWN0c31cbiAgICAgICAgZHJvcERvd25Ub2dnbGVySGFuZGxlcj17bmF2UHJvZHVjdHNUb2dnbGVIYW5kbGVyfVxuICAgICAgICBzdWJJdGVtcz17cHJvZHVjdHNPdmVydmlld31cbiAgICAgIC8+XG4gICAgICA8Q2F0ZWdvcmllc1xuICAgICAgICBhY3RpdmU9e3N0b3JlLmFjdGl2ZUNhdGVnb3J5fVxuICAgICAgICBjYXRlZ29yaWVzPXthY3RpdmVDYXRhbG9nQ2F0ZWdvcmllc31cbiAgICAgICAgdG9nZ2xlQ2F0ZWdvcnk9e3RvZ2dsZUNhdGVnb3J5SGFuZGxlcn1cbiAgICAgIC8+XG4gICAgICA8UHJvZHVjdFBhbmVsIC8+XG4gICAgPC9Qcm9kdWN0c1dyYXBwZXI+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XG5cbmNvbnN0IENhdGVnb3JpZXMgPSAoeyBjYXRlZ29yaWVzLCB0b2dnbGVDYXRlZ29yeSwgYWN0aXZlIH0pID0+IHtcbiAgY29uc3QgY2F0TGVuZ3RoID0gY2F0ZWdvcmllcy5sZW5ndGg7XG4gIGNvbnN0IFtlbFJlZnMsIHNldEVsUmVmc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmaXREZXZpY2UsIHNldEZpdERldmljZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgd2luZG93ID0gdXNlQ2xpZW50V2luZG93KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRFbFJlZnMoKGVsUmVmcykgPT5cbiAgICAgIEFycmF5KGNhdExlbmd0aClcbiAgICAgICAgLmZpbGwoKVxuICAgICAgICAubWFwKChfLCBpKSA9PiBlbFJlZnNbaV0gfHwgY3JlYXRlUmVmKCkpXG4gICAgKTtcbiAgfSwgW2NhdGVnb3JpZXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChlbFJlZnMubGVuZ3RoID4gMCAmJiBlbFJlZnNbMF0uY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWFyZ2luID0gd2luZG93LmlubmVyV2lkdGggPCA2NDAgPyA4IDogMzI7IC8vaGFyZGNvZGVkIHRoZSBtYXJnaW5zXG4gICAgICAgc2V0Rml0RGV2aWNlKGVsUmVmc1xuICAgICAgICAubWFwKChlbCkgPT4gZWwuY3VycmVudC5vZmZzZXRXaWR0aClcbiAgICAgICAgLnJlZHVjZSgoYSwgYiwgaW5kZXgpID0+IChhICsgYikgKyAobWFyZ2luICogaW5kZXgpKSA8PSB3aW5kb3cuaW5uZXJXaWR0aCk7ICAgICAgIFxuICAgIH1cbiAgfSwgW2VsUmVmc10pO1xuXG4gIGNvbnN0IGNhdFRpdGxlcyA9IGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IChcbiAgICA8Q2F0ZWdvcnlcbiAgICAgIHJlZj17ZWxSZWZzW2luZGV4XX1cbiAgICAgIGtleT17Y2F0ZWdvcnkuaWR9XG4gICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVDYXRlZ29yeShjYXRlZ29yeS5pZCl9XG4gICAgPlxuICAgICAgPENhdGVnb3J5VGl0bGUgYWN0aXZlPXtjYXRlZ29yeS5pZCA9PT0gYWN0aXZlfT5cbiAgICAgICAge2NhdGVnb3J5LmxhYmVsfVxuICAgICAgPC9DYXRlZ29yeVRpdGxlPlxuICAgIDwvQ2F0ZWdvcnk+XG4gICkpO1xuICByZXR1cm4gPENhdGVnb3J5V3JhcHBlciBmaXREaXNwbGF5PXtmaXREZXZpY2V9PntjYXRUaXRsZXN9PC9DYXRlZ29yeVdyYXBwZXI+O1xufTtcblxuY29uc3QgUHJvZHVjdFBhbmVsID0gKHt9KSA9PiB7XG4gIGNvbnN0IHRlc3QgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICB0ZXN0LnB1c2goXG4gICAgICA8UHJvZHVjdD5cbiAgICAgICAgPEltYWdlIC8+XG4gICAgICAgIDxOYW1lPk5vbWU8L05hbWU+XG4gICAgICAgIDxTcGFuPkNhdGVnb3JpYTwvU3Bhbj5cbiAgICAgICAgPEhyLz5cbiAgICAgICAgPFNwYW4+RXN0b3F1ZTogMjAgdW5pZDwvU3Bhbj5cbiAgICAgICAgPEhyLz5cbiAgICAgICAgPFByaWNlPjxzdHJvbmc+MTAgQlJMPC9zdHJvbmc+IC8gdW5pZDwvUHJpY2U+XG4gICAgICAgIDxJY29ucz5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c0NpcmNsZX0gc2l6ZT1cIjJ4XCIvPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaG9wcGluZ0JhZ30gc2l6ZT1cIjJ4XCIvPlxuICAgICAgICA8L0ljb25zPlxuICAgICAgICA8L1Byb2R1Y3Q+XG4gICAgKVxuICB9XG4gIGNvbnNvbGUubG9nKHRlc3QpXG4gIHJldHVybiAoXG4gICAgPFBhbmVsPlxuICAgICAge3Rlc3R9XG4gICAgPC9QYW5lbD5cbiAgKTtcbn1cblxuY29uc3QgU3RvY2tDVEEgPSAoe3N0b2NrfSkgPT4gKFxuICA8U3RvY2tBbGVydCBzdG9jaz17c3RvY2t9dD7Dmmx0aW1hcyBVbmlkYWRlcyE8L1N0b2NrQWxlcnQ+XG5cbilcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Products/Products.js\n");

/***/ })

})