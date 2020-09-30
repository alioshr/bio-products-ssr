webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Products/Products.js":
/*!*****************************************!*\
  !*** ./Components/Products/Products.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../StyledComponents/productsItems */ \"./StyledComponents/productsItems.js\");\n/* harmony import */ var _UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/Dropdown/Dropdown */ \"./UI/Dropdown/Dropdown.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n/* harmony import */ var _Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Hooks/useClientWindow */ \"./Hooks/useClientWindow.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Products/Products.js\",\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Products = function Products(_ref) {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      navProducts = _useState[0],\n      showNavProducts = _useState[1];\n\n  var store = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    return state.products;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"])();\n  var productsOverview = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useProductsOverview\"])());\n  var activeCatalogCategories = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useCatalogCategories\"])());\n\n  var navProductsToggleHandler = function navProductsToggleHandler() {\n    return showNavProducts(function (state) {\n      return !state;\n    });\n  };\n\n  var toggleCategoryHandler = function toggleCategoryHandler(id) {\n    _s();\n\n    return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useToggleCategory\"])(id));\n  };\n\n  _s(toggleCategoryHandler, \"b8aGLn/Mzluh0akaKUo24RslKf0=\", false, function () {\n    return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useToggleCategory\"]];\n  });\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(store.catalog[store.activeCatalog][store.activeCategory]),\n      activeProducts = _useState2[0],\n      setActiveProducts = _useState2[1];\n\n  console.log(\"active catalog\", store.activeCatalog);\n  console.log(\"active category\", store.activeCategory);\n  console.log(\"active products\", store.catalog[store.activeCatalog][store.activeCategory]);\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"ProductsWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, \"Nossos Produtos\"), __jsx(_UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onProducts: true,\n    dropDownTitle: store.overview[store.activeCatalog].label,\n    showDropDown: navProducts,\n    dropDownTogglerHandler: navProductsToggleHandler,\n    subItems: productsOverview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }), __jsx(Categories, {\n    active: store.activeCategory,\n    categories: activeCatalogCategories,\n    toggleCategory: toggleCategoryHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }), __jsx(ProductPanel, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s2(Products, \"Kge6Shqfztm9KHzQmk17WL6YhEU=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useProductsOverview\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useCatalogCategories\"]];\n});\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar Categories = function Categories(_ref2) {\n  _s3();\n\n  var categories = _ref2.categories,\n      toggleCategory = _ref2.toggleCategory,\n      active = _ref2.active;\n  var catLength = categories.length;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      elRefs = _React$useState2[0],\n      setElRefs = _React$useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      fitDevice = _useState3[0],\n      setFitDevice = _useState3[1];\n\n  var window = Object(_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_7__[\"useClientWindow\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setElRefs(function (elRefs) {\n      return Array(catLength).fill().map(function (_, i) {\n        return elRefs[i] || /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createRef\"])();\n      });\n    });\n  }, [categories]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (elRefs.length > 0 && elRefs[0].current !== null) {\n      var margin = window.innerWidth < 640 ? 8 : 32; //hardcoded the margins\n\n      setFitDevice(elRefs.map(function (el) {\n        return el.current.offsetWidth;\n      }).reduce(function (a, b, index) {\n        return a + b + margin * index;\n      }) <= window.innerWidth);\n    }\n  }, [elRefs]);\n  var catTitles = categories.map(function (category, index) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Category\"], {\n      ref: elRefs[index],\n      key: category.id,\n      onClick: function onClick() {\n        return toggleCategory(category.id);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"CategoryTitle\"], {\n      active: category.id === active,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 7\n      }\n    }, category.label));\n  });\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"CategoryWrapper\"], {\n    fitDisplay: fitDevice,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 10\n    }\n  }, catTitles);\n};\n\n_s3(Categories, \"qJexK/5XK/fUqny+UORKg7dhIcQ=\", false, function () {\n  return [_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_7__[\"useClientWindow\"]];\n});\n\n_c2 = Categories;\n\nvar ProductPanel = function ProductPanel(_ref3) {\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref3);\n\n  //get state and map it from firebase\n  var test = [];\n\n  for (var i = 0; i < 10; i++) {\n    test.push(__jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Product\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 7\n      }\n    }, __jsx(StockCTA, {\n      stock: 5,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }\n    }), __jsx(OffPrice, {\n      off: 10,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }\n    }), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n      src: \"/Products/soapWorks/soap/3/0.jpg\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 9\n      }\n    }), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Name\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 9\n      }\n    }, \"Nome\"), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Span\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }\n    }, \"Estoque: 20 unid\"), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Hr\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }\n    }), __jsx(Prices, {\n      price: 45,\n      off: 10,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }\n    }), __jsx(IconPanel, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 9\n      }\n    })));\n  }\n\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Panel\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 10\n    }\n  }, test);\n};\n\n_c3 = ProductPanel;\n\nvar IconPanel = function IconPanel(_ref4) {\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref4);\n\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Icons\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 3\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"IconInner\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 5\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__[\"faPlusCircle\"],\n    size: \"lg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 7\n    }\n  }), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"IconSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 7\n    }\n  }, \"Info\")), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__[\"faShoppingBag\"],\n    size: \"2x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c4 = IconPanel;\n\nvar StockCTA = function StockCTA(_ref5) {\n  var stock = _ref5.stock;\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"StockAlert\"], {\n    stock: stock,\n    t: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 3\n    }\n  }, \"\\xDAltimas Unidades!\");\n};\n\n_c5 = StockCTA;\n\nvar OffPrice = function OffPrice(_ref6) {\n  var off = _ref6.off;\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Off\"], {\n    off: off,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 31\n    }\n  }, off, \"% OFF!\");\n};\n\n_c6 = OffPrice;\n\nvar Prices = function Prices(_ref7) {\n  var price = _ref7.price,\n      off = _ref7.off;\n\n  var value = __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 15\n    }\n  }, \"10 BRL\");\n\n  if (off) {\n    var offPrice = (price - price * off / 100).toFixed(2);\n    value = __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 156,\n        columnNumber: 7\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"PriceSpan\"], {\n      off: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 157,\n        columnNumber: 9\n      }\n    }, price, \" BRL\"), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"PriceSpan\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 158,\n        columnNumber: 9\n      }\n    }, offPrice, \" BRL\"));\n  }\n\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Price\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 10\n    }\n  }, value, \" / unid\");\n};\n\n_c7 = Prices;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"Products\");\n$RefreshReg$(_c2, \"Categories\");\n$RefreshReg$(_c3, \"ProductPanel\");\n$RefreshReg$(_c4, \"IconPanel\");\n$RefreshReg$(_c5, \"StockCTA\");\n$RefreshReg$(_c6, \"OffPrice\");\n$RefreshReg$(_c7, \"Prices\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy5qcz9iYzZkIl0sIm5hbWVzIjpbIlByb2R1Y3RzIiwidXNlU3RhdGUiLCJuYXZQcm9kdWN0cyIsInNob3dOYXZQcm9kdWN0cyIsInN0b3JlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3RzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInByb2R1Y3RzT3ZlcnZpZXciLCJ1c2VQcm9kdWN0c092ZXJ2aWV3IiwiYWN0aXZlQ2F0YWxvZ0NhdGVnb3JpZXMiLCJ1c2VDYXRhbG9nQ2F0ZWdvcmllcyIsIm5hdlByb2R1Y3RzVG9nZ2xlSGFuZGxlciIsInRvZ2dsZUNhdGVnb3J5SGFuZGxlciIsImlkIiwidXNlVG9nZ2xlQ2F0ZWdvcnkiLCJjYXRhbG9nIiwiYWN0aXZlQ2F0YWxvZyIsImFjdGl2ZUNhdGVnb3J5IiwiYWN0aXZlUHJvZHVjdHMiLCJzZXRBY3RpdmVQcm9kdWN0cyIsImNvbnNvbGUiLCJsb2ciLCJvdmVydmlldyIsImxhYmVsIiwiQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJ0b2dnbGVDYXRlZ29yeSIsImFjdGl2ZSIsImNhdExlbmd0aCIsImxlbmd0aCIsIlJlYWN0IiwiZWxSZWZzIiwic2V0RWxSZWZzIiwiZml0RGV2aWNlIiwic2V0Rml0RGV2aWNlIiwid2luZG93IiwidXNlQ2xpZW50V2luZG93IiwidXNlRWZmZWN0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJjcmVhdGVSZWYiLCJjdXJyZW50IiwibWFyZ2luIiwiaW5uZXJXaWR0aCIsImVsIiwib2Zmc2V0V2lkdGgiLCJyZWR1Y2UiLCJhIiwiYiIsImluZGV4IiwiY2F0VGl0bGVzIiwiY2F0ZWdvcnkiLCJQcm9kdWN0UGFuZWwiLCJ0ZXN0IiwicHVzaCIsIkljb25QYW5lbCIsImZhUGx1c0NpcmNsZSIsImZhU2hvcHBpbmdCYWciLCJTdG9ja0NUQSIsInN0b2NrIiwiT2ZmUHJpY2Ui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QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMseUVBQUQ7QUFBVyxTQUFHLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnQkQsS0FBaEIsU0FERixFQUVFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFZRSxRQUFaLFNBRkYsQ0FERjtBQU1EOztBQUNELFNBQU8sTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFELEtBQVIsWUFBUDtBQUNELENBWkQ7O01BQU1GLE0iLCJmaWxlIjoiLi9Db21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGNyZWF0ZVJlZiwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFByb2R1Y3RzV3JhcHBlcixcbiAgQ2F0ZWdvcnksXG4gIENhdGVnb3J5VGl0bGUsXG4gIENhdGVnb3J5V3JhcHBlcixcbiAgVGl0bGUsXG4gIFBhbmVsLFxuICBQcm9kdWN0LFxuICBJbWFnZSxcbiAgTmFtZSxcbiAgU3BhbixcbiAgSHIsXG4gIFByaWNlLFxuICBJY29ucyxcbiAgSWNvbklubmVyLFxuICBJY29uU3BhbixcbiAgU3RvY2tBbGVydCxcbiAgT2ZmLFxuICBQcmljZVNwYW4sXG59IGZyb20gXCIuLi8uLi9TdHlsZWRDb21wb25lbnRzL3Byb2R1Y3RzSXRlbXNcIjtcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi4vLi4vVUkvRHJvcGRvd24vRHJvcGRvd25cIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcbiAgdXNlUHJvZHVjdHNPdmVydmlldyxcbiAgdXNlQ2F0YWxvZ0NhdGVnb3JpZXMsXG4gIHVzZVRvZ2dsZUNhdGVnb3J5LFxufSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9hY3Rpb25zSW5kZXhcIjtcbmltcG9ydCB7IHVzZUNsaWVudFdpbmRvdyB9IGZyb20gXCIuLi8uLi9Ib29rcy91c2VDbGllbnRXaW5kb3dcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhU2hvcHBpbmdCYWcsIGZhUGx1c0NpcmNsZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcblxuY29uc3QgUHJvZHVjdHMgPSAoe30pID0+IHtcbiAgY29uc3QgW25hdlByb2R1Y3RzLCBzaG93TmF2UHJvZHVjdHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzdG9yZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvZHVjdHMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHByb2R1Y3RzT3ZlcnZpZXcgPSBkaXNwYXRjaCh1c2VQcm9kdWN0c092ZXJ2aWV3KCkpO1xuICBjb25zdCBhY3RpdmVDYXRhbG9nQ2F0ZWdvcmllcyA9IGRpc3BhdGNoKHVzZUNhdGFsb2dDYXRlZ29yaWVzKCkpO1xuXG4gIGNvbnN0IG5hdlByb2R1Y3RzVG9nZ2xlSGFuZGxlciA9ICgpID0+IHNob3dOYXZQcm9kdWN0cygoc3RhdGUpID0+ICFzdGF0ZSk7XG4gIGNvbnN0IHRvZ2dsZUNhdGVnb3J5SGFuZGxlciA9IChpZCkgPT4gZGlzcGF0Y2godXNlVG9nZ2xlQ2F0ZWdvcnkoaWQpKTtcblxuICBjb25zdCBbYWN0aXZlUHJvZHVjdHMsIHNldEFjdGl2ZVByb2R1Y3RzXSA9IHVzZVN0YXRlKFxuICAgIHN0b3JlLmNhdGFsb2dbc3RvcmUuYWN0aXZlQ2F0YWxvZ11bc3RvcmUuYWN0aXZlQ2F0ZWdvcnldXG4gICk7XG5cbiAgY29uc29sZS5sb2coXCJhY3RpdmUgY2F0YWxvZ1wiLCBzdG9yZS5hY3RpdmVDYXRhbG9nKTtcbiAgY29uc29sZS5sb2coXCJhY3RpdmUgY2F0ZWdvcnlcIiwgc3RvcmUuYWN0aXZlQ2F0ZWdvcnkpO1xuICBjb25zb2xlLmxvZyhcbiAgICBcImFjdGl2ZSBwcm9kdWN0c1wiLFxuICAgIHN0b3JlLmNhdGFsb2dbc3RvcmUuYWN0aXZlQ2F0YWxvZ11bc3RvcmUuYWN0aXZlQ2F0ZWdvcnldXG4gICk7XG4gIHJldHVybiAoXG4gICAgPFByb2R1Y3RzV3JhcHBlcj5cbiAgICAgIDxUaXRsZT5Ob3Nzb3MgUHJvZHV0b3M8L1RpdGxlPlxuICAgICAgPERyb3Bkb3duXG4gICAgICAgIG9uUHJvZHVjdHNcbiAgICAgICAgZHJvcERvd25UaXRsZT17c3RvcmUub3ZlcnZpZXdbc3RvcmUuYWN0aXZlQ2F0YWxvZ10ubGFiZWx9XG4gICAgICAgIHNob3dEcm9wRG93bj17bmF2UHJvZHVjdHN9XG4gICAgICAgIGRyb3BEb3duVG9nZ2xlckhhbmRsZXI9e25hdlByb2R1Y3RzVG9nZ2xlSGFuZGxlcn1cbiAgICAgICAgc3ViSXRlbXM9e3Byb2R1Y3RzT3ZlcnZpZXd9XG4gICAgICAvPlxuICAgICAgPENhdGVnb3JpZXNcbiAgICAgICAgYWN0aXZlPXtzdG9yZS5hY3RpdmVDYXRlZ29yeX1cbiAgICAgICAgY2F0ZWdvcmllcz17YWN0aXZlQ2F0YWxvZ0NhdGVnb3JpZXN9XG4gICAgICAgIHRvZ2dsZUNhdGVnb3J5PXt0b2dnbGVDYXRlZ29yeUhhbmRsZXJ9XG4gICAgICAvPlxuICAgICAgPFByb2R1Y3RQYW5lbCAvPlxuICAgIDwvUHJvZHVjdHNXcmFwcGVyPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xuXG5jb25zdCBDYXRlZ29yaWVzID0gKHsgY2F0ZWdvcmllcywgdG9nZ2xlQ2F0ZWdvcnksIGFjdGl2ZSB9KSA9PiB7XG4gIGNvbnN0IGNhdExlbmd0aCA9IGNhdGVnb3JpZXMubGVuZ3RoO1xuICBjb25zdCBbZWxSZWZzLCBzZXRFbFJlZnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICBjb25zdCBbZml0RGV2aWNlLCBzZXRGaXREZXZpY2VdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHdpbmRvdyA9IHVzZUNsaWVudFdpbmRvdygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RWxSZWZzKChlbFJlZnMpID0+XG4gICAgICBBcnJheShjYXRMZW5ndGgpXG4gICAgICAgIC5maWxsKClcbiAgICAgICAgLm1hcCgoXywgaSkgPT4gZWxSZWZzW2ldIHx8IGNyZWF0ZVJlZigpKVxuICAgICk7XG4gIH0sIFtjYXRlZ29yaWVzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZWxSZWZzLmxlbmd0aCA+IDAgJiYgZWxSZWZzWzBdLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1hcmdpbiA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNjQwID8gOCA6IDMyOyAvL2hhcmRjb2RlZCB0aGUgbWFyZ2luc1xuICAgICAgc2V0Rml0RGV2aWNlKFxuICAgICAgICBlbFJlZnNcbiAgICAgICAgICAubWFwKChlbCkgPT4gZWwuY3VycmVudC5vZmZzZXRXaWR0aClcbiAgICAgICAgICAucmVkdWNlKChhLCBiLCBpbmRleCkgPT4gYSArIGIgKyBtYXJnaW4gKiBpbmRleCkgPD0gd2luZG93LmlubmVyV2lkdGhcbiAgICAgICk7XG4gICAgfVxuICB9LCBbZWxSZWZzXSk7XG5cbiAgY29uc3QgY2F0VGl0bGVzID0gY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFxuICAgIDxDYXRlZ29yeVxuICAgICAgcmVmPXtlbFJlZnNbaW5kZXhdfVxuICAgICAga2V5PXtjYXRlZ29yeS5pZH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUNhdGVnb3J5KGNhdGVnb3J5LmlkKX1cbiAgICA+XG4gICAgICA8Q2F0ZWdvcnlUaXRsZSBhY3RpdmU9e2NhdGVnb3J5LmlkID09PSBhY3RpdmV9PlxuICAgICAgICB7Y2F0ZWdvcnkubGFiZWx9XG4gICAgICA8L0NhdGVnb3J5VGl0bGU+XG4gICAgPC9DYXRlZ29yeT5cbiAgKSk7XG4gIHJldHVybiA8Q2F0ZWdvcnlXcmFwcGVyIGZpdERpc3BsYXk9e2ZpdERldmljZX0+e2NhdFRpdGxlc308L0NhdGVnb3J5V3JhcHBlcj47XG59O1xuXG5jb25zdCBQcm9kdWN0UGFuZWwgPSAoe30pID0+IHtcbiAgLy9nZXQgc3RhdGUgYW5kIG1hcCBpdCBmcm9tIGZpcmViYXNlXG4gIGNvbnN0IHRlc3QgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgdGVzdC5wdXNoKFxuICAgICAgPFByb2R1Y3Q+XG4gICAgICAgIDxTdG9ja0NUQSBzdG9jaz17NX0gLz5cbiAgICAgICAgPE9mZlByaWNlIG9mZj17MTB9IC8+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvUHJvZHVjdHMvc29hcFdvcmtzL3NvYXAvMy8wLmpwZ1wiIC8+XG4gICAgICAgIDxOYW1lPk5vbWU8L05hbWU+XG4gICAgICAgIDxTcGFuPkVzdG9xdWU6IDIwIHVuaWQ8L1NwYW4+XG4gICAgICAgIDxIciAvPlxuICAgICAgICA8UHJpY2VzIHByaWNlPXs0NX0gb2ZmPXsxMH0gLz5cbiAgICAgICAgPEljb25QYW5lbCAvPlxuICAgICAgPC9Qcm9kdWN0PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIDxQYW5lbD57dGVzdH08L1BhbmVsPjtcbn07XG5cbmNvbnN0IEljb25QYW5lbCA9ICh7fSkgPT4gKFxuICA8SWNvbnM+XG4gICAgPEljb25Jbm5lcj5cbiAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQbHVzQ2lyY2xlfSBzaXplPVwibGdcIiAvPlxuICAgICAgPEljb25TcGFuPkluZm88L0ljb25TcGFuPlxuICAgIDwvSWNvbklubmVyPlxuICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaG9wcGluZ0JhZ30gc2l6ZT1cIjJ4XCIgLz5cbiAgPC9JY29ucz5cbik7XG5cbmNvbnN0IFN0b2NrQ1RBID0gKHsgc3RvY2sgfSkgPT4gKFxuICA8U3RvY2tBbGVydCBzdG9jaz17c3RvY2t9IHQ+XG4gICAgw5psdGltYXMgVW5pZGFkZXMhXG4gIDwvU3RvY2tBbGVydD5cbik7XG5cbmNvbnN0IE9mZlByaWNlID0gKHsgb2ZmIH0pID0+IDxPZmYgb2ZmPXtvZmZ9PntvZmZ9JSBPRkYhPC9PZmY+O1xuXG5jb25zdCBQcmljZXMgPSAoeyBwcmljZSwgb2ZmIH0pID0+IHtcbiAgbGV0IHZhbHVlID0gPHN0cm9uZz4xMCBCUkw8L3N0cm9uZz47XG4gIGlmIChvZmYpIHtcbiAgICBjb25zdCBvZmZQcmljZSA9IChwcmljZSAtIChwcmljZSAqIG9mZikgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgdmFsdWUgPSAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxQcmljZVNwYW4gb2ZmPntwcmljZX0gQlJMPC9QcmljZVNwYW4+XG4gICAgICAgIDxQcmljZVNwYW4+e29mZlByaWNlfSBCUkw8L1ByaWNlU3Bhbj5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gPFByaWNlPnt2YWx1ZX0gLyB1bmlkPC9QcmljZT47XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Products/Products.js\n");

/***/ })

})