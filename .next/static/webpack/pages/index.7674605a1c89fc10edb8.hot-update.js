webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Products/Products.js":
/*!*****************************************!*\
  !*** ./Components/Products/Products.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../StyledComponents/productsItems */ \"./StyledComponents/productsItems.js\");\n/* harmony import */ var _UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/Dropdown/Dropdown */ \"./UI/Dropdown/Dropdown.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n/* harmony import */ var _Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Hooks/useClientWindow */ \"./Hooks/useClientWindow.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Products/Products.js\",\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Products = function Products(_ref) {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      navProducts = _useState[0],\n      showNavProducts = _useState[1];\n\n  var store = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    return state.products;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"])();\n  var productsOverview = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useProductsOverview\"])());\n  var activeCatalogCategories = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useCatalogCategories\"])());\n\n  var navProductsToggleHandler = function navProductsToggleHandler() {\n    return showNavProducts(function (state) {\n      return !state;\n    });\n  };\n\n  var toggleCategoryHandler = function toggleCategoryHandler(id) {\n    _s();\n\n    return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useToggleCategory\"])(id));\n  };\n\n  _s(toggleCategoryHandler, \"b8aGLn/Mzluh0akaKUo24RslKf0=\", false, function () {\n    return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useToggleCategory\"]];\n  });\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(store.catalog[store.activeCatalog][store.activeCategory]),\n      activeProducts = _useState2[0],\n      setActiveProducts = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {});\n  console.log(\"active catalog\", store.activeCatalog);\n  console.log(\"active category\", store.activeCategory);\n  console.log(\"active products\", store.catalog[store.activeCatalog][store.activeCategory]);\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"ProductsWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, \"Nossos Produtos\"), __jsx(_UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onProducts: true,\n    dropDownTitle: store.overview[store.activeCatalog].label,\n    showDropDown: navProducts,\n    dropDownTogglerHandler: navProductsToggleHandler,\n    subItems: productsOverview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }), __jsx(Categories, {\n    active: store.activeCategory,\n    categories: activeCatalogCategories,\n    toggleCategory: toggleCategoryHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }), __jsx(ProductPanel, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s2(Products, \"/t+nl0uGmmGVljedHLgoJQnnOfc=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useProductsOverview\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useCatalogCategories\"]];\n});\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar Categories = function Categories(_ref2) {\n  _s3();\n\n  var categories = _ref2.categories,\n      toggleCategory = _ref2.toggleCategory,\n      active = _ref2.active;\n  var catLength = categories.length;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      elRefs = _React$useState2[0],\n      setElRefs = _React$useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      fitDevice = _useState3[0],\n      setFitDevice = _useState3[1];\n\n  var window = Object(_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_7__[\"useClientWindow\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setElRefs(function (elRefs) {\n      return Array(catLength).fill().map(function (_, i) {\n        return elRefs[i] || /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createRef\"])();\n      });\n    });\n  }, [categories]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (elRefs.length > 0 && elRefs[0].current !== null) {\n      var margin = window.innerWidth < 640 ? 8 : 32; //hardcoded the margins\n\n      setFitDevice(elRefs.map(function (el) {\n        return el.current.offsetWidth;\n      }).reduce(function (a, b, index) {\n        return a + b + margin * index;\n      }) <= window.innerWidth);\n    }\n  }, [elRefs]);\n  var catTitles = categories.map(function (category, index) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Category\"], {\n      ref: elRefs[index],\n      key: category.id,\n      onClick: function onClick() {\n        return toggleCategory(category.id);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"CategoryTitle\"], {\n      active: category.id === active,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 7\n      }\n    }, category.label));\n  });\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"CategoryWrapper\"], {\n    fitDisplay: fitDevice,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 10\n    }\n  }, catTitles);\n};\n\n_s3(Categories, \"qJexK/5XK/fUqny+UORKg7dhIcQ=\", false, function () {\n  return [_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_7__[\"useClientWindow\"]];\n});\n\n_c2 = Categories;\n\nvar ProductPanel = function ProductPanel(_ref3) {\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref3);\n\n  //get state and map it from firebase\n  var test = [];\n\n  for (var i = 0; i < 10; i++) {\n    test.push(__jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Product\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 7\n      }\n    }, __jsx(StockCTA, {\n      stock: 5,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }\n    }), __jsx(OffPrice, {\n      off: 10,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }\n    }), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n      src: \"/Products/soapWorks/soap/3/0.jpg\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }\n    }), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Name\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 9\n      }\n    }, \"Nome\"), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Span\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 9\n      }\n    }, \"Estoque: 20 unid\"), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Hr\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 9\n      }\n    }), __jsx(Prices, {\n      price: 45,\n      off: 10,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 9\n      }\n    }), __jsx(IconPanel, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 9\n      }\n    })));\n  }\n\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Panel\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 10\n    }\n  }, test);\n};\n\n_c3 = ProductPanel;\n\nvar IconPanel = function IconPanel(_ref4) {\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref4);\n\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Icons\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 3\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"IconInner\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 5\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__[\"faPlusCircle\"],\n    size: \"lg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 7\n    }\n  }), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"IconSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }\n  }, \"Info\")), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__[\"faShoppingBag\"],\n    size: \"2x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c4 = IconPanel;\n\nvar StockCTA = function StockCTA(_ref5) {\n  var stock = _ref5.stock;\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"StockAlert\"], {\n    stock: stock,\n    t: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 3\n    }\n  }, \"\\xDAltimas Unidades!\");\n};\n\n_c5 = StockCTA;\n\nvar OffPrice = function OffPrice(_ref6) {\n  var off = _ref6.off;\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Off\"], {\n    off: off,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 31\n    }\n  }, off, \"% OFF!\");\n};\n\n_c6 = OffPrice;\n\nvar Prices = function Prices(_ref7) {\n  var price = _ref7.price,\n      off = _ref7.off;\n\n  var value = __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 15\n    }\n  }, \"10 BRL\");\n\n  if (off) {\n    var offPrice = (price - price * off / 100).toFixed(2);\n    value = __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 160,\n        columnNumber: 7\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"PriceSpan\"], {\n      off: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 161,\n        columnNumber: 9\n      }\n    }, price, \" BRL\"), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"PriceSpan\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 162,\n        columnNumber: 9\n      }\n    }, offPrice, \" BRL\"));\n  }\n\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Price\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 10\n    }\n  }, value, \" / unid\");\n};\n\n_c7 = Prices;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"Products\");\n$RefreshReg$(_c2, \"Categories\");\n$RefreshReg$(_c3, \"ProductPanel\");\n$RefreshReg$(_c4, \"IconPanel\");\n$RefreshReg$(_c5, \"StockCTA\");\n$RefreshReg$(_c6, \"OffPrice\");\n$RefreshReg$(_c7, \"Prices\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy5qcz9iYzZkIl0sIm5hbWVzIjpbIlByb2R1Y3RzIiwidXNlU3RhdGUiLCJuYXZQcm9kdWN0cyIsInNob3dOYXZQcm9kdWN0cyIsInN0b3JlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3RzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInByb2R1Y3RzT3ZlcnZpZXciLCJ1c2VQcm9kdWN0c092ZXJ2aWV3IiwiYWN0aXZlQ2F0YWxvZ0NhdGVnb3JpZXMiLCJ1c2VDYXRhbG9nQ2F0ZWdvcmllcyIsIm5hdlByb2R1Y3RzVG9nZ2xlSGFuZGxlciIsInRvZ2dsZUNhdGVnb3J5SGFuZGxlciIsImlkIiwidXNlVG9nZ2xlQ2F0ZWdvcnkiLCJjYXRhbG9nIiwiYWN0aXZlQ2F0YWxvZyIsImFjdGl2ZUNhdGVnb3J5IiwiYWN0aXZlUHJvZHVjdHMiLCJzZXRBY3RpdmVQcm9kdWN0cyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJvdmVydmlldyIsImxhYmVsIiwiQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJ0b2dnbGVDYXRlZ29yeSIsImFjdGl2ZSIsImNhdExlbmd0aCIsImxlbmd0aCIsIlJlYWN0IiwiZWxSZWZzIiwic2V0RWxSZWZzIiwiZml0RGV2aWNlIiwic2V0Rml0RGV2aWNlIiwid2luZG93IiwidXNlQ2xpZW50V2luZG93IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJjcmVhdGVSZWYiLCJjdXJyZW50IiwibWFyZ2luIiwiaW5uZXJXaWR0aCIsImVsIiwib2Zmc2V0V2lkdGgiLCJyZWR1Y2UiLCJhIiwiYiIsImluZGV4IiwiY2F0VGl0bGVzIiwiY2F0ZWdvcnkiLCJQcm9kdWN0UGFuZWwiLCJ0ZXN0IiwicHVzaCIsIkljb25QYW5lbCIsImZhUGx1c0NpcmNsZSIsImZhU2hvcHBpbmdCYWciLCJTdG9ja0NUQSIsInN0b2NrIiwiT2ZmUHJpY2Ui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RixTQUFLLEdBQ0gsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx5RUFBRDtBQUFXLFNBQUcsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWdCRCxLQUFoQixTQURGLEVBRUUsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVlFLFFBQVosU0FGRixDQURGO0FBTUQ7O0FBQ0QsU0FBTyxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUQsS0FBUixZQUFQO0FBQ0QsQ0FaRDs7TUFBTUYsTSIsImZpbGUiOiIuL0NvbXBvbmVudHMvUHJvZHVjdHMvUHJvZHVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlUmVmLCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgUHJvZHVjdHNXcmFwcGVyLFxuICBDYXRlZ29yeSxcbiAgQ2F0ZWdvcnlUaXRsZSxcbiAgQ2F0ZWdvcnlXcmFwcGVyLFxuICBUaXRsZSxcbiAgUGFuZWwsXG4gIFByb2R1Y3QsXG4gIEltYWdlLFxuICBOYW1lLFxuICBTcGFuLFxuICBIcixcbiAgUHJpY2UsXG4gIEljb25zLFxuICBJY29uSW5uZXIsXG4gIEljb25TcGFuLFxuICBTdG9ja0FsZXJ0LFxuICBPZmYsXG4gIFByaWNlU3Bhbixcbn0gZnJvbSBcIi4uLy4uL1N0eWxlZENvbXBvbmVudHMvcHJvZHVjdHNJdGVtc1wiO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi8uLi9VSS9Ecm9wZG93bi9Ecm9wZG93blwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge1xuICB1c2VQcm9kdWN0c092ZXJ2aWV3LFxuICB1c2VDYXRhbG9nQ2F0ZWdvcmllcyxcbiAgdXNlVG9nZ2xlQ2F0ZWdvcnksXG59IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2FjdGlvbnNJbmRleFwiO1xuaW1wb3J0IHsgdXNlQ2xpZW50V2luZG93IH0gZnJvbSBcIi4uLy4uL0hvb2tzL3VzZUNsaWVudFdpbmRvd1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFTaG9wcGluZ0JhZywgZmFQbHVzQ2lyY2xlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG5jb25zdCBQcm9kdWN0cyA9ICh7fSkgPT4ge1xuICBjb25zdCBbbmF2UHJvZHVjdHMsIHNob3dOYXZQcm9kdWN0c10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHN0b3JlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0cyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgcHJvZHVjdHNPdmVydmlldyA9IGRpc3BhdGNoKHVzZVByb2R1Y3RzT3ZlcnZpZXcoKSk7XG4gIGNvbnN0IGFjdGl2ZUNhdGFsb2dDYXRlZ29yaWVzID0gZGlzcGF0Y2godXNlQ2F0YWxvZ0NhdGVnb3JpZXMoKSk7XG5cbiAgY29uc3QgbmF2UHJvZHVjdHNUb2dnbGVIYW5kbGVyID0gKCkgPT4gc2hvd05hdlByb2R1Y3RzKChzdGF0ZSkgPT4gIXN0YXRlKTtcbiAgY29uc3QgdG9nZ2xlQ2F0ZWdvcnlIYW5kbGVyID0gKGlkKSA9PiBkaXNwYXRjaCh1c2VUb2dnbGVDYXRlZ29yeShpZCkpO1xuXG4gIGNvbnN0IFthY3RpdmVQcm9kdWN0cywgc2V0QWN0aXZlUHJvZHVjdHNdID0gdXNlU3RhdGUoXG4gICAgc3RvcmUuY2F0YWxvZ1tzdG9yZS5hY3RpdmVDYXRhbG9nXVtzdG9yZS5hY3RpdmVDYXRlZ29yeV1cbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFxuICB9KVxuXG4gIGNvbnNvbGUubG9nKFwiYWN0aXZlIGNhdGFsb2dcIiwgc3RvcmUuYWN0aXZlQ2F0YWxvZyk7XG4gIGNvbnNvbGUubG9nKFwiYWN0aXZlIGNhdGVnb3J5XCIsIHN0b3JlLmFjdGl2ZUNhdGVnb3J5KTtcbiAgY29uc29sZS5sb2coXG4gICAgXCJhY3RpdmUgcHJvZHVjdHNcIixcbiAgICBzdG9yZS5jYXRhbG9nW3N0b3JlLmFjdGl2ZUNhdGFsb2ddW3N0b3JlLmFjdGl2ZUNhdGVnb3J5XVxuICApO1xuICByZXR1cm4gKFxuICAgIDxQcm9kdWN0c1dyYXBwZXI+XG4gICAgICA8VGl0bGU+Tm9zc29zIFByb2R1dG9zPC9UaXRsZT5cbiAgICAgIDxEcm9wZG93blxuICAgICAgICBvblByb2R1Y3RzXG4gICAgICAgIGRyb3BEb3duVGl0bGU9e3N0b3JlLm92ZXJ2aWV3W3N0b3JlLmFjdGl2ZUNhdGFsb2ddLmxhYmVsfVxuICAgICAgICBzaG93RHJvcERvd249e25hdlByb2R1Y3RzfVxuICAgICAgICBkcm9wRG93blRvZ2dsZXJIYW5kbGVyPXtuYXZQcm9kdWN0c1RvZ2dsZUhhbmRsZXJ9XG4gICAgICAgIHN1Ykl0ZW1zPXtwcm9kdWN0c092ZXJ2aWV3fVxuICAgICAgLz5cbiAgICAgIDxDYXRlZ29yaWVzXG4gICAgICAgIGFjdGl2ZT17c3RvcmUuYWN0aXZlQ2F0ZWdvcnl9XG4gICAgICAgIGNhdGVnb3JpZXM9e2FjdGl2ZUNhdGFsb2dDYXRlZ29yaWVzfVxuICAgICAgICB0b2dnbGVDYXRlZ29yeT17dG9nZ2xlQ2F0ZWdvcnlIYW5kbGVyfVxuICAgICAgLz5cbiAgICAgIDxQcm9kdWN0UGFuZWwgLz5cbiAgICA8L1Byb2R1Y3RzV3JhcHBlcj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcblxuY29uc3QgQ2F0ZWdvcmllcyA9ICh7IGNhdGVnb3JpZXMsIHRvZ2dsZUNhdGVnb3J5LCBhY3RpdmUgfSkgPT4ge1xuICBjb25zdCBjYXRMZW5ndGggPSBjYXRlZ29yaWVzLmxlbmd0aDtcbiAgY29uc3QgW2VsUmVmcywgc2V0RWxSZWZzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ZpdERldmljZSwgc2V0Rml0RGV2aWNlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCB3aW5kb3cgPSB1c2VDbGllbnRXaW5kb3coKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEVsUmVmcygoZWxSZWZzKSA9PlxuICAgICAgQXJyYXkoY2F0TGVuZ3RoKVxuICAgICAgICAuZmlsbCgpXG4gICAgICAgIC5tYXAoKF8sIGkpID0+IGVsUmVmc1tpXSB8fCBjcmVhdGVSZWYoKSlcbiAgICApO1xuICB9LCBbY2F0ZWdvcmllc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGVsUmVmcy5sZW5ndGggPiAwICYmIGVsUmVmc1swXS5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtYXJnaW4gPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDY0MCA/IDggOiAzMjsgLy9oYXJkY29kZWQgdGhlIG1hcmdpbnNcbiAgICAgIHNldEZpdERldmljZShcbiAgICAgICAgZWxSZWZzXG4gICAgICAgICAgLm1hcCgoZWwpID0+IGVsLmN1cnJlbnQub2Zmc2V0V2lkdGgpXG4gICAgICAgICAgLnJlZHVjZSgoYSwgYiwgaW5kZXgpID0+IGEgKyBiICsgbWFyZ2luICogaW5kZXgpIDw9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICApO1xuICAgIH1cbiAgfSwgW2VsUmVmc10pO1xuXG4gIGNvbnN0IGNhdFRpdGxlcyA9IGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IChcbiAgICA8Q2F0ZWdvcnlcbiAgICAgIHJlZj17ZWxSZWZzW2luZGV4XX1cbiAgICAgIGtleT17Y2F0ZWdvcnkuaWR9XG4gICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVDYXRlZ29yeShjYXRlZ29yeS5pZCl9XG4gICAgPlxuICAgICAgPENhdGVnb3J5VGl0bGUgYWN0aXZlPXtjYXRlZ29yeS5pZCA9PT0gYWN0aXZlfT5cbiAgICAgICAge2NhdGVnb3J5LmxhYmVsfVxuICAgICAgPC9DYXRlZ29yeVRpdGxlPlxuICAgIDwvQ2F0ZWdvcnk+XG4gICkpO1xuICByZXR1cm4gPENhdGVnb3J5V3JhcHBlciBmaXREaXNwbGF5PXtmaXREZXZpY2V9PntjYXRUaXRsZXN9PC9DYXRlZ29yeVdyYXBwZXI+O1xufTtcblxuY29uc3QgUHJvZHVjdFBhbmVsID0gKHt9KSA9PiB7XG4gIC8vZ2V0IHN0YXRlIGFuZCBtYXAgaXQgZnJvbSBmaXJlYmFzZVxuICBjb25zdCB0ZXN0ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIHRlc3QucHVzaChcbiAgICAgIDxQcm9kdWN0PlxuICAgICAgICA8U3RvY2tDVEEgc3RvY2s9ezV9IC8+XG4gICAgICAgIDxPZmZQcmljZSBvZmY9ezEwfSAvPlxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL1Byb2R1Y3RzL3NvYXBXb3Jrcy9zb2FwLzMvMC5qcGdcIiAvPlxuICAgICAgICA8TmFtZT5Ob21lPC9OYW1lPlxuICAgICAgICA8U3Bhbj5Fc3RvcXVlOiAyMCB1bmlkPC9TcGFuPlxuICAgICAgICA8SHIgLz5cbiAgICAgICAgPFByaWNlcyBwcmljZT17NDV9IG9mZj17MTB9IC8+XG4gICAgICAgIDxJY29uUGFuZWwgLz5cbiAgICAgIDwvUHJvZHVjdD5cbiAgICApO1xuICB9XG4gIHJldHVybiA8UGFuZWw+e3Rlc3R9PC9QYW5lbD47XG59O1xuXG5jb25zdCBJY29uUGFuZWwgPSAoe30pID0+IChcbiAgPEljb25zPlxuICAgIDxJY29uSW5uZXI+XG4gICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c0NpcmNsZX0gc2l6ZT1cImxnXCIgLz5cbiAgICAgIDxJY29uU3Bhbj5JbmZvPC9JY29uU3Bhbj5cbiAgICA8L0ljb25Jbm5lcj5cbiAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2hvcHBpbmdCYWd9IHNpemU9XCIyeFwiIC8+XG4gIDwvSWNvbnM+XG4pO1xuXG5jb25zdCBTdG9ja0NUQSA9ICh7IHN0b2NrIH0pID0+IChcbiAgPFN0b2NrQWxlcnQgc3RvY2s9e3N0b2NrfSB0PlxuICAgIMOabHRpbWFzIFVuaWRhZGVzIVxuICA8L1N0b2NrQWxlcnQ+XG4pO1xuXG5jb25zdCBPZmZQcmljZSA9ICh7IG9mZiB9KSA9PiA8T2ZmIG9mZj17b2ZmfT57b2ZmfSUgT0ZGITwvT2ZmPjtcblxuY29uc3QgUHJpY2VzID0gKHsgcHJpY2UsIG9mZiB9KSA9PiB7XG4gIGxldCB2YWx1ZSA9IDxzdHJvbmc+MTAgQlJMPC9zdHJvbmc+O1xuICBpZiAob2ZmKSB7XG4gICAgY29uc3Qgb2ZmUHJpY2UgPSAocHJpY2UgLSAocHJpY2UgKiBvZmYpIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgIHZhbHVlID0gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8UHJpY2VTcGFuIG9mZj57cHJpY2V9IEJSTDwvUHJpY2VTcGFuPlxuICAgICAgICA8UHJpY2VTcGFuPntvZmZQcmljZX0gQlJMPC9QcmljZVNwYW4+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIDxQcmljZT57dmFsdWV9IC8gdW5pZDwvUHJpY2U+O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Products/Products.js\n");

/***/ })

})