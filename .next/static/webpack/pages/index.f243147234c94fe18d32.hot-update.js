webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Products/Products.js":
/*!*****************************************!*\
  !*** ./Components/Products/Products.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../StyledComponents/productsItems */ \"./StyledComponents/productsItems.js\");\n/* harmony import */ var _UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../UI/Dropdown/Dropdown */ \"./UI/Dropdown/Dropdown.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n/* harmony import */ var _Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Hooks/useClientWindow */ \"./Hooks/useClientWindow.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Products/Products.js\",\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar Products = function Products(_ref) {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      navProducts = _useState[0],\n      showNavProducts = _useState[1];\n\n  var store = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"])(function (state) {\n    return state.products;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useDispatch\"])();\n  var productsOverview = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_7__[\"useProductsOverview\"])());\n  var activeCatalogCategories = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_7__[\"useCatalogCategories\"])());\n\n  var navProductsToggleHandler = function navProductsToggleHandler() {\n    return showNavProducts(function (state) {\n      return !state;\n    });\n  };\n\n  var toggleCategoryHandler = function toggleCategoryHandler(id) {\n    _s();\n\n    return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_7__[\"useToggleCategory\"])(id));\n  };\n\n  _s(toggleCategoryHandler, \"b8aGLn/Mzluh0akaKUo24RslKf0=\", false, function () {\n    return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_7__[\"useToggleCategory\"]];\n  });\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      activeProducts = _useState2[0],\n      setActiveProducts = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setActiveProducts(store.catalog[store.activeCatalog][store.activeCategory]);\n  }, [store.activeCategory, store.activeCatalog]);\n  console.log(\"active catalog\", store.activeCatalog);\n  console.log(\"active category\", store.activeCategory);\n  console.log(\"active products\", activeProducts);\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"ProductsWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, \"Nossos Produtos\"), __jsx(_UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onProducts: true,\n    dropDownTitle: store.overview[store.activeCatalog].label,\n    showDropDown: navProducts,\n    dropDownTogglerHandler: navProductsToggleHandler,\n    subItems: productsOverview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }), __jsx(Categories, {\n    active: store.activeCategory,\n    categories: activeCatalogCategories,\n    toggleCategory: toggleCategoryHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }), __jsx(ProductPanel, {\n    products: activeProducts,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s2(Products, \"D0V7nYY4W4cBs8nivLdlZZAzUoM=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useDispatch\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_7__[\"useProductsOverview\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_7__[\"useCatalogCategories\"]];\n});\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar Categories = function Categories(_ref2) {\n  _s3();\n\n  var categories = _ref2.categories,\n      toggleCategory = _ref2.toggleCategory,\n      active = _ref2.active;\n  var catLength = categories.length;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState([]),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      elRefs = _React$useState2[0],\n      setElRefs = _React$useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      fitDevice = _useState3[0],\n      setFitDevice = _useState3[1];\n\n  var window = Object(_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_8__[\"useClientWindow\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setElRefs(function (elRefs) {\n      return Array(catLength).fill().map(function (_, i) {\n        return elRefs[i] || /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__[\"createRef\"])();\n      });\n    });\n  }, [categories]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (elRefs.length > 0 && elRefs[0].current !== null) {\n      var margin = window.innerWidth < 640 ? 8 : 32; //hardcoded the margins\n\n      setFitDevice(elRefs.map(function (el) {\n        return el.current.offsetWidth;\n      }).reduce(function (a, b, index) {\n        return a + b + margin * index;\n      }) <= window.innerWidth);\n    }\n  }, [elRefs]);\n  var catTitles = categories.map(function (category, index) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"Category\"], {\n      ref: elRefs[index],\n      key: category.id,\n      onClick: function onClick() {\n        return toggleCategory(category.id);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"CategoryTitle\"], {\n      active: category.id === active,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 7\n      }\n    }, category.label));\n  });\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"CategoryWrapper\"], {\n    fitDisplay: fitDevice,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 10\n    }\n  }, catTitles);\n};\n\n_s3(Categories, \"qJexK/5XK/fUqny+UORKg7dhIcQ=\", false, function () {\n  return [_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_8__[\"useClientWindow\"]];\n});\n\n_c2 = Categories;\n\nvar ProductPanel = function ProductPanel(_ref3) {\n  var products = _ref3.products;\n  var prod = [];\n\n  for (var key in products) {\n    console.log(Object.values(products[key].images.paths));\n    prod.push(_objectSpread({\n      id: key\n    }, products[key]));\n  }\n\n  console.log(prod); //get state and map it from firebase\n\n  var test = [];\n\n  for (var i = 0; i < 10; i++) {\n    test.push(__jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"Product\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 7\n      }\n    }, __jsx(StockCTA, {\n      stock: 5,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 9\n      }\n    }), __jsx(OffPrice, {\n      off: 10,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 9\n      }\n    }), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"Image\"], {\n      src: \"/Products/soapWorks/soap/3/0.jpg\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 9\n      }\n    }), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"Name\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 9\n      }\n    }, \"Nome\"), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"Span\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 9\n      }\n    }, \"Estoque: 20 unid\"), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"Hr\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 9\n      }\n    }), __jsx(Prices, {\n      price: 45,\n      off: 10,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 9\n      }\n    }), __jsx(IconPanel, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 9\n      }\n    })));\n  }\n\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"Panel\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 10\n    }\n  }, test);\n};\n\n_c3 = ProductPanel;\n\nvar IconPanel = function IconPanel(_ref4) {\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref4);\n\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"Icons\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 3\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"IconInner\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 5\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__[\"faPlusCircle\"],\n    size: \"lg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 7\n    }\n  }), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"IconSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 7\n    }\n  }, \"Info\")), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__[\"faShoppingBag\"],\n    size: \"2x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c4 = IconPanel;\n\nvar StockCTA = function StockCTA(_ref5) {\n  var stock = _ref5.stock;\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"StockAlert\"], {\n    stock: stock,\n    t: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 3\n    }\n  }, \"\\xDAltimas Unidades!\");\n};\n\n_c5 = StockCTA;\n\nvar OffPrice = function OffPrice(_ref6) {\n  var off = _ref6.off;\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"Off\"], {\n    off: off,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 31\n    }\n  }, off, \"% OFF!\");\n};\n\n_c6 = OffPrice;\n\nvar Prices = function Prices(_ref7) {\n  var price = _ref7.price,\n      off = _ref7.off;\n\n  var value = __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 15\n    }\n  }, \"10 BRL\");\n\n  if (off) {\n    var offPrice = (price - price * off / 100).toFixed(2);\n    value = __jsx(react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 165,\n        columnNumber: 7\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"PriceSpan\"], {\n      off: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 166,\n        columnNumber: 9\n      }\n    }, price, \" BRL\"), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"PriceSpan\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 167,\n        columnNumber: 9\n      }\n    }, offPrice, \" BRL\"));\n  }\n\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"Price\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 10\n    }\n  }, value, \" / unid\");\n};\n\n_c7 = Prices;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"Products\");\n$RefreshReg$(_c2, \"Categories\");\n$RefreshReg$(_c3, \"ProductPanel\");\n$RefreshReg$(_c4, \"IconPanel\");\n$RefreshReg$(_c5, \"StockCTA\");\n$RefreshReg$(_c6, \"OffPrice\");\n$RefreshReg$(_c7, \"Prices\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy5qcz9iYzZkIl0sIm5hbWVzIjpbIlByb2R1Y3RzIiwidXNlU3RhdGUiLCJuYXZQcm9kdWN0cyIsInNob3dOYXZQcm9kdWN0cyIsInN0b3JlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3RzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInByb2R1Y3RzT3ZlcnZpZXciLCJ1c2VQcm9kdWN0c092ZXJ2aWV3IiwiYWN0aXZlQ2F0YWxvZ0NhdGVnb3JpZXMiLCJ1c2VDYXRhbG9nQ2F0ZWdvcmllcyIsIm5hdlByb2R1Y3RzVG9nZ2xlSGFuZGxlciIsInRvZ2dsZUNhdGVnb3J5SGFuZGxlciIsImlkIiwidXNlVG9nZ2xlQ2F0ZWdvcnkiLCJhY3RpdmVQcm9kdWN0cyIsInNldEFjdGl2ZVByb2R1Y3RzIiwidXNlRWZmZWN0IiwiY2F0YWxvZyIsImFjdGl2ZUNhdGFsb2ciLCJhY3RpdmVDYXRlZ29yeSIsImNvbnNvbGUiLCJsb2ciLCJvdmVydmlldyIsImxhYmVsIiwiQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJ0b2dnbGVDYXRlZ29yeSIsImFjdGl2ZSIsImNhdExlbmd0aCIsImxlbmd0aCIsIlJlYWN0IiwiZWxSZWZzIiwic2V0RWxSZWZzIiwiZml0RGV2aWNlIiwic2V0Rml0RGV2aWNlIiwid2luZG93IiwidXNlQ2xpZW50V2luZG93IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJjcmVhdGVSZWYiLCJjdXJyZW50IiwibWFyZ2luIiwiaW5uZXJXaWR0aCIsImVsIiwib2Zmc2V0V2lkdGgiLCJyZWR1Y2UiLCJhIiwiYiIsImluZGV4IiwiY2F0VGl0bGVzIiwiY2F0ZWdvcnkiLCJQcm9kdWN0UGFuZWwiLCJwcm9kIiwia2V5IiwiT2JqZWN0IiwidmFsdWVzIiwiaW1hZ2VzIiwicGF0aHMiLCJwdXNoIiwidGVzdCIsIkljb25QYW5lbCIsImZhUGx1c0NpcmNsZSIsImZhU2hvcHBpbmdCYWciLCJTdG9ja0NUQSIsInN0b2NrIiwiT2ZmUHJpY2UiLCJvZmYiLCJQcmljZXMiLCJwcmljZSIsInZhbHVlIiwib2ZmUHJpY2UiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQW9CQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBUTtBQUFBOztBQUFBOztBQUFBOztBQUFBLGtCQUNnQkMsc0RBQVEsQ0FBQyxLQUFELENBRHhCO0FBQUEsTUFDaEJDLFdBRGdCO0FBQUEsTUFDSEMsZUFERzs7QUFFdkIsTUFBTUMsS0FBSyxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLFFBQWpCO0FBQUEsR0FBRCxDQUF6QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBR0YsUUFBUSxDQUFDRyx1RkFBbUIsRUFBcEIsQ0FBakM7QUFDQSxNQUFNQyx1QkFBdUIsR0FBR0osUUFBUSxDQUFDSyx3RkFBb0IsRUFBckIsQ0FBeEM7O0FBRUEsTUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQjtBQUFBLFdBQU1YLGVBQWUsQ0FBQyxVQUFDRyxLQUFEO0FBQUEsYUFBVyxDQUFDQSxLQUFaO0FBQUEsS0FBRCxDQUFyQjtBQUFBLEdBQWpDOztBQUNBLE1BQU1TLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsRUFBRDtBQUFBOztBQUFBLFdBQVFSLFFBQVEsQ0FBQ1MscUZBQWlCLENBQUNELEVBQUQsQ0FBbEIsQ0FBaEI7QUFBQSxHQUE5Qjs7QUFSdUIsS0FRakJELHFCQVJpQjtBQUFBLFlBUXdCRSw2RUFSeEI7QUFBQTs7QUFBQSxtQkFVcUJoQixzREFBUSxDQUFDLElBQUQsQ0FWN0I7QUFBQSxNQVVoQmlCLGNBVmdCO0FBQUEsTUFVQUMsaUJBVkE7O0FBWXZC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UUFBVztBQUFBLE1BQUdDLEdBQUgsU0FBR0EsR0FBSDtBQUFBLFNBQWEsTUFBQyxtRUFBRDtBQUFLLE9BQUcsRUFBRUEsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdCQSxHQUFoQixXQUFiO0FBQUEsQ0FBakI7O01BQU1ELFE7O0FBRU4sSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsUUFBb0I7QUFBQSxNQUFqQkMsS0FBaUIsU0FBakJBLEtBQWlCO0FBQUEsTUFBVkYsR0FBVSxTQUFWQSxHQUFVOztBQUNqQyxNQUFJRyxLQUFLLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFaOztBQUNBLE1BQUlILEdBQUosRUFBUztBQUNQLFFBQU1JLFFBQVEsR0FBRyxDQUFDRixLQUFLLEdBQUlBLEtBQUssR0FBR0YsR0FBVCxHQUFnQixHQUF6QixFQUE4QkssT0FBOUIsQ0FBc0MsQ0FBdEMsQ0FBakI7QUFDQUYsU0FBSyxHQUNILE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMseUVBQUQ7QUFBVyxTQUFHLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnQkQsS0FBaEIsU0FERixFQUVFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFZRSxRQUFaLFNBRkYsQ0FERjtBQU1EOztBQUNELFNBQU8sTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFELEtBQVIsWUFBUDtBQUNELENBWkQ7O01BQU1GLE0iLCJmaWxlIjoiLi9Db21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGNyZWF0ZVJlZiwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFByb2R1Y3RzV3JhcHBlcixcbiAgQ2F0ZWdvcnksXG4gIENhdGVnb3J5VGl0bGUsXG4gIENhdGVnb3J5V3JhcHBlcixcbiAgVGl0bGUsXG4gIFBhbmVsLFxuICBQcm9kdWN0LFxuICBJbWFnZSxcbiAgTmFtZSxcbiAgU3BhbixcbiAgSHIsXG4gIFByaWNlLFxuICBJY29ucyxcbiAgSWNvbklubmVyLFxuICBJY29uU3BhbixcbiAgU3RvY2tBbGVydCxcbiAgT2ZmLFxuICBQcmljZVNwYW4sXG59IGZyb20gXCIuLi8uLi9TdHlsZWRDb21wb25lbnRzL3Byb2R1Y3RzSXRlbXNcIjtcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi4vLi4vVUkvRHJvcGRvd24vRHJvcGRvd25cIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcbiAgdXNlUHJvZHVjdHNPdmVydmlldyxcbiAgdXNlQ2F0YWxvZ0NhdGVnb3JpZXMsXG4gIHVzZVRvZ2dsZUNhdGVnb3J5LFxufSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9hY3Rpb25zSW5kZXhcIjtcbmltcG9ydCB7IHVzZUNsaWVudFdpbmRvdyB9IGZyb20gXCIuLi8uLi9Ib29rcy91c2VDbGllbnRXaW5kb3dcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhU2hvcHBpbmdCYWcsIGZhUGx1c0NpcmNsZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcblxuY29uc3QgUHJvZHVjdHMgPSAoe30pID0+IHtcbiAgY29uc3QgW25hdlByb2R1Y3RzLCBzaG93TmF2UHJvZHVjdHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzdG9yZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvZHVjdHMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHByb2R1Y3RzT3ZlcnZpZXcgPSBkaXNwYXRjaCh1c2VQcm9kdWN0c092ZXJ2aWV3KCkpO1xuICBjb25zdCBhY3RpdmVDYXRhbG9nQ2F0ZWdvcmllcyA9IGRpc3BhdGNoKHVzZUNhdGFsb2dDYXRlZ29yaWVzKCkpO1xuXG4gIGNvbnN0IG5hdlByb2R1Y3RzVG9nZ2xlSGFuZGxlciA9ICgpID0+IHNob3dOYXZQcm9kdWN0cygoc3RhdGUpID0+ICFzdGF0ZSk7XG4gIGNvbnN0IHRvZ2dsZUNhdGVnb3J5SGFuZGxlciA9IChpZCkgPT4gZGlzcGF0Y2godXNlVG9nZ2xlQ2F0ZWdvcnkoaWQpKTtcblxuICBjb25zdCBbYWN0aXZlUHJvZHVjdHMsIHNldEFjdGl2ZVByb2R1Y3RzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0QWN0aXZlUHJvZHVjdHMoc3RvcmUuY2F0YWxvZ1tzdG9yZS5hY3RpdmVDYXRhbG9nXVtzdG9yZS5hY3RpdmVDYXRlZ29yeV0pO1xuICB9LCBbc3RvcmUuYWN0aXZlQ2F0ZWdvcnksIHN0b3JlLmFjdGl2ZUNhdGFsb2ddKTtcblxuICBjb25zb2xlLmxvZyhcImFjdGl2ZSBjYXRhbG9nXCIsIHN0b3JlLmFjdGl2ZUNhdGFsb2cpO1xuICBjb25zb2xlLmxvZyhcImFjdGl2ZSBjYXRlZ29yeVwiLCBzdG9yZS5hY3RpdmVDYXRlZ29yeSk7XG4gIGNvbnNvbGUubG9nKFwiYWN0aXZlIHByb2R1Y3RzXCIsIGFjdGl2ZVByb2R1Y3RzKTtcblxuICByZXR1cm4gKFxuICAgIDxQcm9kdWN0c1dyYXBwZXI+XG4gICAgICA8VGl0bGU+Tm9zc29zIFByb2R1dG9zPC9UaXRsZT5cbiAgICAgIDxEcm9wZG93blxuICAgICAgICBvblByb2R1Y3RzXG4gICAgICAgIGRyb3BEb3duVGl0bGU9e3N0b3JlLm92ZXJ2aWV3W3N0b3JlLmFjdGl2ZUNhdGFsb2ddLmxhYmVsfVxuICAgICAgICBzaG93RHJvcERvd249e25hdlByb2R1Y3RzfVxuICAgICAgICBkcm9wRG93blRvZ2dsZXJIYW5kbGVyPXtuYXZQcm9kdWN0c1RvZ2dsZUhhbmRsZXJ9XG4gICAgICAgIHN1Ykl0ZW1zPXtwcm9kdWN0c092ZXJ2aWV3fVxuICAgICAgLz5cbiAgICAgIDxDYXRlZ29yaWVzXG4gICAgICAgIGFjdGl2ZT17c3RvcmUuYWN0aXZlQ2F0ZWdvcnl9XG4gICAgICAgIGNhdGVnb3JpZXM9e2FjdGl2ZUNhdGFsb2dDYXRlZ29yaWVzfVxuICAgICAgICB0b2dnbGVDYXRlZ29yeT17dG9nZ2xlQ2F0ZWdvcnlIYW5kbGVyfVxuICAgICAgLz5cbiAgICAgIDxQcm9kdWN0UGFuZWwgcHJvZHVjdHM9e2FjdGl2ZVByb2R1Y3RzfS8+XG4gICAgPC9Qcm9kdWN0c1dyYXBwZXI+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XG5cbmNvbnN0IENhdGVnb3JpZXMgPSAoeyBjYXRlZ29yaWVzLCB0b2dnbGVDYXRlZ29yeSwgYWN0aXZlIH0pID0+IHtcbiAgY29uc3QgY2F0TGVuZ3RoID0gY2F0ZWdvcmllcy5sZW5ndGg7XG4gIGNvbnN0IFtlbFJlZnMsIHNldEVsUmVmc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmaXREZXZpY2UsIHNldEZpdERldmljZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgd2luZG93ID0gdXNlQ2xpZW50V2luZG93KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRFbFJlZnMoKGVsUmVmcykgPT5cbiAgICAgIEFycmF5KGNhdExlbmd0aClcbiAgICAgICAgLmZpbGwoKVxuICAgICAgICAubWFwKChfLCBpKSA9PiBlbFJlZnNbaV0gfHwgY3JlYXRlUmVmKCkpXG4gICAgKTtcbiAgfSwgW2NhdGVnb3JpZXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChlbFJlZnMubGVuZ3RoID4gMCAmJiBlbFJlZnNbMF0uY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWFyZ2luID0gd2luZG93LmlubmVyV2lkdGggPCA2NDAgPyA4IDogMzI7IC8vaGFyZGNvZGVkIHRoZSBtYXJnaW5zXG4gICAgICBzZXRGaXREZXZpY2UoXG4gICAgICAgIGVsUmVmc1xuICAgICAgICAgIC5tYXAoKGVsKSA9PiBlbC5jdXJyZW50Lm9mZnNldFdpZHRoKVxuICAgICAgICAgIC5yZWR1Y2UoKGEsIGIsIGluZGV4KSA9PiBhICsgYiArIG1hcmdpbiAqIGluZGV4KSA8PSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgICAgKTtcbiAgICB9XG4gIH0sIFtlbFJlZnNdKTtcblxuICBjb25zdCBjYXRUaXRsZXMgPSBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiAoXG4gICAgPENhdGVnb3J5XG4gICAgICByZWY9e2VsUmVmc1tpbmRleF19XG4gICAgICBrZXk9e2NhdGVnb3J5LmlkfVxuICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlQ2F0ZWdvcnkoY2F0ZWdvcnkuaWQpfVxuICAgID5cbiAgICAgIDxDYXRlZ29yeVRpdGxlIGFjdGl2ZT17Y2F0ZWdvcnkuaWQgPT09IGFjdGl2ZX0+XG4gICAgICAgIHtjYXRlZ29yeS5sYWJlbH1cbiAgICAgIDwvQ2F0ZWdvcnlUaXRsZT5cbiAgICA8L0NhdGVnb3J5PlxuICApKTtcbiAgcmV0dXJuIDxDYXRlZ29yeVdyYXBwZXIgZml0RGlzcGxheT17Zml0RGV2aWNlfT57Y2F0VGl0bGVzfTwvQ2F0ZWdvcnlXcmFwcGVyPjtcbn07XG5cbmNvbnN0IFByb2R1Y3RQYW5lbCA9ICh7cHJvZHVjdHN9KSA9PiB7XG4gIGNvbnN0IHByb2QgPSBbXTtcbiAgZm9yKGxldCBrZXkgaW4gcHJvZHVjdHMpIHtcbiAgICBjb25zb2xlLmxvZyhPYmplY3QudmFsdWVzKHByb2R1Y3RzW2tleV0uaW1hZ2VzLnBhdGhzKSlcbiAgICBwcm9kLnB1c2goe1xuICAgICAgaWQ6IGtleSxcbiAgICAgIC4uLnByb2R1Y3RzW2tleV1cbiAgICB9KVxuICB9XG4gIGNvbnNvbGUubG9nKHByb2QpXG4gIC8vZ2V0IHN0YXRlIGFuZCBtYXAgaXQgZnJvbSBmaXJlYmFzZVxuICBjb25zdCB0ZXN0ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIHRlc3QucHVzaChcbiAgICAgIDxQcm9kdWN0PlxuICAgICAgICA8U3RvY2tDVEEgc3RvY2s9ezV9IC8+XG4gICAgICAgIDxPZmZQcmljZSBvZmY9ezEwfSAvPlxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL1Byb2R1Y3RzL3NvYXBXb3Jrcy9zb2FwLzMvMC5qcGdcIiAvPlxuICAgICAgICA8TmFtZT5Ob21lPC9OYW1lPlxuICAgICAgICA8U3Bhbj5Fc3RvcXVlOiAyMCB1bmlkPC9TcGFuPlxuICAgICAgICA8SHIgLz5cbiAgICAgICAgPFByaWNlcyBwcmljZT17NDV9IG9mZj17MTB9IC8+XG4gICAgICAgIDxJY29uUGFuZWwgLz5cbiAgICAgIDwvUHJvZHVjdD5cbiAgICApO1xuICB9XG4gIHJldHVybiA8UGFuZWw+e3Rlc3R9PC9QYW5lbD47XG59O1xuXG5jb25zdCBJY29uUGFuZWwgPSAoe30pID0+IChcbiAgPEljb25zPlxuICAgIDxJY29uSW5uZXI+XG4gICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c0NpcmNsZX0gc2l6ZT1cImxnXCIgLz5cbiAgICAgIDxJY29uU3Bhbj5JbmZvPC9JY29uU3Bhbj5cbiAgICA8L0ljb25Jbm5lcj5cbiAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2hvcHBpbmdCYWd9IHNpemU9XCIyeFwiIC8+XG4gIDwvSWNvbnM+XG4pO1xuXG5jb25zdCBTdG9ja0NUQSA9ICh7IHN0b2NrIH0pID0+IChcbiAgPFN0b2NrQWxlcnQgc3RvY2s9e3N0b2NrfSB0PlxuICAgIMOabHRpbWFzIFVuaWRhZGVzIVxuICA8L1N0b2NrQWxlcnQ+XG4pO1xuXG5jb25zdCBPZmZQcmljZSA9ICh7IG9mZiB9KSA9PiA8T2ZmIG9mZj17b2ZmfT57b2ZmfSUgT0ZGITwvT2ZmPjtcblxuY29uc3QgUHJpY2VzID0gKHsgcHJpY2UsIG9mZiB9KSA9PiB7XG4gIGxldCB2YWx1ZSA9IDxzdHJvbmc+MTAgQlJMPC9zdHJvbmc+O1xuICBpZiAob2ZmKSB7XG4gICAgY29uc3Qgb2ZmUHJpY2UgPSAocHJpY2UgLSAocHJpY2UgKiBvZmYpIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgIHZhbHVlID0gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8UHJpY2VTcGFuIG9mZj57cHJpY2V9IEJSTDwvUHJpY2VTcGFuPlxuICAgICAgICA8UHJpY2VTcGFuPntvZmZQcmljZX0gQlJMPC9QcmljZVNwYW4+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIDxQcmljZT57dmFsdWV9IC8gdW5pZDwvUHJpY2U+O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Products/Products.js\n");

/***/ })

})