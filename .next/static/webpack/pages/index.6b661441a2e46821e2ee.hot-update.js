webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Products/Products.js":
/*!*****************************************!*\
  !*** ./Components/Products/Products.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../StyledComponents/productsItems */ \"./StyledComponents/productsItems.js\");\n/* harmony import */ var _UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/Dropdown/Dropdown */ \"./UI/Dropdown/Dropdown.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n/* harmony import */ var _Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Hooks/useClientWindow */ \"./Hooks/useClientWindow.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Products/Products.js\",\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Products = function Products(_ref) {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      navProducts = _useState[0],\n      showNavProducts = _useState[1];\n\n  var store = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    return state.products;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"])();\n  var productsOverview = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useProductsOverview\"])());\n  var activeCatalogCategories = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useCatalogCategories\"])());\n\n  var navProductsToggleHandler = function navProductsToggleHandler() {\n    return showNavProducts(function (state) {\n      return !state;\n    });\n  };\n\n  var toggleCategoryHandler = function toggleCategoryHandler(id) {\n    _s();\n\n    return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useToggleCategory\"])(id));\n  };\n\n  _s(toggleCategoryHandler, \"b8aGLn/Mzluh0akaKUo24RslKf0=\", false, function () {\n    return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useToggleCategory\"]];\n  });\n\n  console.log(\"active catalog\", store.activeCatalog);\n  console.log(\"active category\", store.activeCategory);\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"ProductsWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, \"Nossos Produtos\"), __jsx(_UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onProducts: true,\n    dropDownTitle: store.overview[store.activeCatalog].label,\n    showDropDown: navProducts,\n    dropDownTogglerHandler: navProductsToggleHandler,\n    subItems: productsOverview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }), __jsx(Categories, {\n    active: store.activeCategory,\n    categories: activeCatalogCategories,\n    toggleCategory: toggleCategoryHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }), __jsx(ProductPanel, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s2(Products, \"tMCAGYtN+BV5rY7bufpIH8UYsyw=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useProductsOverview\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useCatalogCategories\"]];\n});\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar Categories = function Categories(_ref2) {\n  _s3();\n\n  var categories = _ref2.categories,\n      toggleCategory = _ref2.toggleCategory,\n      active = _ref2.active;\n  var catLength = categories.length;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      elRefs = _React$useState2[0],\n      setElRefs = _React$useState2[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      fitDevice = _useState2[0],\n      setFitDevice = _useState2[1];\n\n  var window = Object(_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_7__[\"useClientWindow\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setElRefs(function (elRefs) {\n      return Array(catLength).fill().map(function (_, i) {\n        return elRefs[i] || /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createRef\"])();\n      });\n    });\n  }, [categories]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (elRefs.length > 0 && elRefs[0].current !== null) {\n      var margin = window.innerWidth < 640 ? 8 : 32; //hardcoded the margins\n\n      setFitDevice(elRefs.map(function (el) {\n        return el.current.offsetWidth;\n      }).reduce(function (a, b, index) {\n        return a + b + margin * index;\n      }) <= window.innerWidth);\n    }\n  }, [elRefs]);\n  var catTitles = categories.map(function (category, index) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Category\"], {\n      ref: elRefs[index],\n      key: category.id,\n      onClick: function onClick() {\n        return toggleCategory(category.id);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"CategoryTitle\"], {\n      active: category.id === active,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 7\n      }\n    }, category.label));\n  });\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"CategoryWrapper\"], {\n    fitDisplay: fitDevice,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 10\n    }\n  }, catTitles);\n};\n\n_s3(Categories, \"qJexK/5XK/fUqny+UORKg7dhIcQ=\", false, function () {\n  return [_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_7__[\"useClientWindow\"]];\n});\n\n_c2 = Categories;\n\nvar ProductPanel = function ProductPanel(_ref3) {\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref3);\n\n  var test = [];\n\n  for (var i = 0; i < 10; i++) {\n    test.push(__jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Product\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 7\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 9\n      }\n    }), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Name\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }\n    }, \"Name\"), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Span\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }\n    }, \"Categoria\"), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Hr\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }\n    }), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Span\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }\n    }, \"Estoque: 20 unid\"), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Hr\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }\n    }), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Price\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }\n    }, __jsx(\"strong\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 16\n      }\n    }, \"10 BRL\"), \" / unid\"), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Icons\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 9\n      }\n    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__[\"FontAwesomeIcon\"], {\n      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__[\"faPlusCircle\"],\n      size: \"2x\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 11\n      }\n    }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__[\"FontAwesomeIcon\"], {\n      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__[\"faShoppingBag\"],\n      size: \"2x\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 11\n      }\n    }))));\n  }\n\n  console.log(test);\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Panel\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 5\n    }\n  }, test);\n};\n\n_c3 = ProductPanel;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Products\");\n$RefreshReg$(_c2, \"Categories\");\n$RefreshReg$(_c3, \"ProductPanel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy5qcz9iYzZkIl0sIm5hbWVzIjpbIlByb2R1Y3RzIiwidXNlU3RhdGUiLCJuYXZQcm9kdWN0cyIsInNob3dOYXZQcm9kdWN0cyIsInN0b3JlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3RzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInByb2R1Y3RzT3ZlcnZpZXciLCJ1c2VQcm9kdWN0c092ZXJ2aWV3IiwiYWN0aXZlQ2F0YWxvZ0NhdGVnb3JpZXMiLCJ1c2VDYXRhbG9nQ2F0ZWdvcmllcyIsIm5hdlByb2R1Y3RzVG9nZ2xlSGFuZGxlciIsInRvZ2dsZUNhdGVnb3J5SGFuZGxlciIsImlkIiwidXNlVG9nZ2xlQ2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlQ2F0YWxvZyIsImFjdGl2ZUNhdGVnb3J5Iiwib3ZlcnZpZXciLCJsYWJlbCIsIkNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwidG9nZ2xlQ2F0ZWdvcnkiLCJhY3RpdmUiLCJjYXRMZW5ndGgiLCJsZW5ndGgiLCJSZWFjdCIsImVsUmVmcyIsInNldEVsUmVmcyIsImZpdERldmljZSIsInNldEZpdERldmljZSIsIndpbmRvdyIsInVzZUNsaWVudFdpbmRvdyIsInVzZUVmZmVjdCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiY3JlYXRlUmVmIiwiY3VycmVudCIsIm1hcmdpbiIsImlubmVyV2lkdGgiLCJlbCIsIm9mZnNldFdpZHRoIiwicmVkdWNlIiwiYSIsImIiLCJpbmRleCIsImNhdFRpdGxlcyIsImNhdGVnb3J5IiwiUHJvZHVjdFBhbmVsIiwidGVzdCIsInB1c2giLCJmYVBsdXNDaXJjbGUiLCJmYVNob3BwaW5nQmFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVAsWUFQRixFQVFFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsOEVBQUQ7QUFBaUIsVUFBSSxFQUFFQyw4RUFBdkI7QUFBcUMsVUFBSSxFQUFDLElBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLE1BQUMsOEVBQUQ7QUFBaUIsVUFBSSxFQUFFQywrRUFBdkI7QUFBc0MsVUFBSSxFQUFDLElBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQVJGLENBREY7QUFlRDs7QUFDRHpDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZcUMsSUFBWjtBQUNBLFNBQ0UsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLElBREgsQ0FERjtBQUtELENBekJEOztNQUFNRCxZIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFByb2R1Y3RzV3JhcHBlcixcbiAgQ2F0ZWdvcnksXG4gIENhdGVnb3J5VGl0bGUsXG4gIENhdGVnb3J5V3JhcHBlcixcbiAgVGl0bGUsXG4gIFBhbmVsLFxuICBQcm9kdWN0LFxuICBJbWFnZSxcbiAgTmFtZSxcbiAgU3BhbixcbiAgSHIsXG4gIFByaWNlLFxuICBJY29uc1xufSBmcm9tIFwiLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9wcm9kdWN0c0l0ZW1zXCI7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4uLy4uL1VJL0Ryb3Bkb3duL0Ryb3Bkb3duXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7XG4gIHVzZVByb2R1Y3RzT3ZlcnZpZXcsXG4gIHVzZUNhdGFsb2dDYXRlZ29yaWVzLFxuICB1c2VUb2dnbGVDYXRlZ29yeSxcbn0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvYWN0aW9uc0luZGV4XCI7XG5pbXBvcnQgeyB1c2VDbGllbnRXaW5kb3cgfSBmcm9tIFwiLi4vLi4vSG9va3MvdXNlQ2xpZW50V2luZG93XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQge2ZhU2hvcHBpbmdCYWcsIGZhUGx1c0NpcmNsZX0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuXG5jb25zdCBQcm9kdWN0cyA9ICh7fSkgPT4ge1xuICBjb25zdCBbbmF2UHJvZHVjdHMsIHNob3dOYXZQcm9kdWN0c10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHN0b3JlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0cyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgcHJvZHVjdHNPdmVydmlldyA9IGRpc3BhdGNoKHVzZVByb2R1Y3RzT3ZlcnZpZXcoKSk7XG4gIGNvbnN0IGFjdGl2ZUNhdGFsb2dDYXRlZ29yaWVzID0gZGlzcGF0Y2godXNlQ2F0YWxvZ0NhdGVnb3JpZXMoKSk7XG5cbiAgY29uc3QgbmF2UHJvZHVjdHNUb2dnbGVIYW5kbGVyID0gKCkgPT4gc2hvd05hdlByb2R1Y3RzKChzdGF0ZSkgPT4gIXN0YXRlKTtcbiAgY29uc3QgdG9nZ2xlQ2F0ZWdvcnlIYW5kbGVyID0gKGlkKSA9PiBkaXNwYXRjaCh1c2VUb2dnbGVDYXRlZ29yeShpZCkpO1xuXG4gIGNvbnNvbGUubG9nKFwiYWN0aXZlIGNhdGFsb2dcIiwgc3RvcmUuYWN0aXZlQ2F0YWxvZyk7XG4gIGNvbnNvbGUubG9nKFwiYWN0aXZlIGNhdGVnb3J5XCIsIHN0b3JlLmFjdGl2ZUNhdGVnb3J5KTtcblxuICByZXR1cm4gKFxuICAgIDxQcm9kdWN0c1dyYXBwZXI+XG4gICAgICA8VGl0bGU+Tm9zc29zIFByb2R1dG9zPC9UaXRsZT5cbiAgICAgIDxEcm9wZG93blxuICAgICAgICBvblByb2R1Y3RzXG4gICAgICAgIGRyb3BEb3duVGl0bGU9e3N0b3JlLm92ZXJ2aWV3W3N0b3JlLmFjdGl2ZUNhdGFsb2ddLmxhYmVsfVxuICAgICAgICBzaG93RHJvcERvd249e25hdlByb2R1Y3RzfVxuICAgICAgICBkcm9wRG93blRvZ2dsZXJIYW5kbGVyPXtuYXZQcm9kdWN0c1RvZ2dsZUhhbmRsZXJ9XG4gICAgICAgIHN1Ykl0ZW1zPXtwcm9kdWN0c092ZXJ2aWV3fVxuICAgICAgLz5cbiAgICAgIDxDYXRlZ29yaWVzXG4gICAgICAgIGFjdGl2ZT17c3RvcmUuYWN0aXZlQ2F0ZWdvcnl9XG4gICAgICAgIGNhdGVnb3JpZXM9e2FjdGl2ZUNhdGFsb2dDYXRlZ29yaWVzfVxuICAgICAgICB0b2dnbGVDYXRlZ29yeT17dG9nZ2xlQ2F0ZWdvcnlIYW5kbGVyfVxuICAgICAgLz5cbiAgICAgIDxQcm9kdWN0UGFuZWwgLz5cbiAgICA8L1Byb2R1Y3RzV3JhcHBlcj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcblxuY29uc3QgQ2F0ZWdvcmllcyA9ICh7IGNhdGVnb3JpZXMsIHRvZ2dsZUNhdGVnb3J5LCBhY3RpdmUgfSkgPT4ge1xuICBjb25zdCBjYXRMZW5ndGggPSBjYXRlZ29yaWVzLmxlbmd0aDtcbiAgY29uc3QgW2VsUmVmcywgc2V0RWxSZWZzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ZpdERldmljZSwgc2V0Rml0RGV2aWNlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCB3aW5kb3cgPSB1c2VDbGllbnRXaW5kb3coKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEVsUmVmcygoZWxSZWZzKSA9PlxuICAgICAgQXJyYXkoY2F0TGVuZ3RoKVxuICAgICAgICAuZmlsbCgpXG4gICAgICAgIC5tYXAoKF8sIGkpID0+IGVsUmVmc1tpXSB8fCBjcmVhdGVSZWYoKSlcbiAgICApO1xuICB9LCBbY2F0ZWdvcmllc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGVsUmVmcy5sZW5ndGggPiAwICYmIGVsUmVmc1swXS5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtYXJnaW4gPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDY0MCA/IDggOiAzMjsgLy9oYXJkY29kZWQgdGhlIG1hcmdpbnNcbiAgICAgICBzZXRGaXREZXZpY2UoZWxSZWZzXG4gICAgICAgIC5tYXAoKGVsKSA9PiBlbC5jdXJyZW50Lm9mZnNldFdpZHRoKVxuICAgICAgICAucmVkdWNlKChhLCBiLCBpbmRleCkgPT4gKGEgKyBiKSArIChtYXJnaW4gKiBpbmRleCkpIDw9IHdpbmRvdy5pbm5lcldpZHRoKTsgICAgICAgXG4gICAgfVxuICB9LCBbZWxSZWZzXSk7XG5cbiAgY29uc3QgY2F0VGl0bGVzID0gY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFxuICAgIDxDYXRlZ29yeVxuICAgICAgcmVmPXtlbFJlZnNbaW5kZXhdfVxuICAgICAga2V5PXtjYXRlZ29yeS5pZH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUNhdGVnb3J5KGNhdGVnb3J5LmlkKX1cbiAgICA+XG4gICAgICA8Q2F0ZWdvcnlUaXRsZSBhY3RpdmU9e2NhdGVnb3J5LmlkID09PSBhY3RpdmV9PlxuICAgICAgICB7Y2F0ZWdvcnkubGFiZWx9XG4gICAgICA8L0NhdGVnb3J5VGl0bGU+XG4gICAgPC9DYXRlZ29yeT5cbiAgKSk7XG4gIHJldHVybiA8Q2F0ZWdvcnlXcmFwcGVyIGZpdERpc3BsYXk9e2ZpdERldmljZX0+e2NhdFRpdGxlc308L0NhdGVnb3J5V3JhcHBlcj47XG59O1xuXG5jb25zdCBQcm9kdWN0UGFuZWwgPSAoe30pID0+IHtcbiAgY29uc3QgdGVzdCA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIHRlc3QucHVzaChcbiAgICAgIDxQcm9kdWN0PlxuICAgICAgICA8SW1hZ2UgLz5cbiAgICAgICAgPE5hbWU+TmFtZTwvTmFtZT5cbiAgICAgICAgPFNwYW4+Q2F0ZWdvcmlhPC9TcGFuPlxuICAgICAgICA8SHIvPlxuICAgICAgICA8U3Bhbj5Fc3RvcXVlOiAyMCB1bmlkPC9TcGFuPlxuICAgICAgICA8SHIvPlxuICAgICAgICA8UHJpY2U+PHN0cm9uZz4xMCBCUkw8L3N0cm9uZz4gLyB1bmlkPC9QcmljZT5cbiAgICAgICAgPEljb25zPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQbHVzQ2lyY2xlfSBzaXplPVwiMnhcIi8+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNob3BwaW5nQmFnfSBzaXplPVwiMnhcIi8+XG4gICAgICAgIDwvSWNvbnM+XG4gICAgICAgIDwvUHJvZHVjdD5cbiAgICApXG4gIH1cbiAgY29uc29sZS5sb2codGVzdClcbiAgcmV0dXJuIChcbiAgICA8UGFuZWw+XG4gICAgICB7dGVzdH1cbiAgICA8L1BhbmVsPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Products/Products.js\n");

/***/ })

})