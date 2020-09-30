webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Products/Products.js":
/*!*****************************************!*\
  !*** ./Components/Products/Products.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../StyledComponents/productsItems */ \"./StyledComponents/productsItems.js\");\n/* harmony import */ var _UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../UI/Dropdown/Dropdown */ \"./UI/Dropdown/Dropdown.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n/* harmony import */ var _Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Hooks/useClientWindow */ \"./Hooks/useClientWindow.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/.pnpm/registry.npmjs.org/react-transition-group/4.4.1_react-dom@16.13.1/node_modules/react-transition-group/esm/index.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Products/Products.js\",\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\nvar Products = function Products(_ref) {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      navProducts = _useState[0],\n      showNavProducts = _useState[1];\n\n  var store = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"])(function (state) {\n    return state.products;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useDispatch\"])();\n  var productsOverview = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_7__[\"useProductsOverview\"])());\n  var activeCatalogCategories = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_7__[\"useCatalogCategories\"])());\n\n  var navProductsToggleHandler = function navProductsToggleHandler() {\n    return showNavProducts(function (state) {\n      return !state;\n    });\n  };\n\n  var toggleCategoryHandler = function toggleCategoryHandler(id) {\n    _s();\n\n    return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_7__[\"useToggleCategory\"])(id));\n  };\n\n  _s(toggleCategoryHandler, \"b8aGLn/Mzluh0akaKUo24RslKf0=\", false, function () {\n    return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_7__[\"useToggleCategory\"]];\n  });\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      activeProducts = _useState2[0],\n      setActiveProducts = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setActiveProducts(store.catalog[store.activeCatalog][store.activeCategory]);\n  }, [store.activeCategory, store.activeCatalog]);\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"ProductsWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, \"Nossos Produtos\"), __jsx(_UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onProducts: true,\n    dropDownTitle: store.overview[store.activeCatalog].label,\n    showDropDown: navProducts,\n    dropDownTogglerHandler: navProductsToggleHandler,\n    subItems: productsOverview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }), __jsx(Categories, {\n    active: store.activeCategory,\n    categories: activeCatalogCategories,\n    toggleCategory: toggleCategoryHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }), __jsx(ProductPanel, {\n    products: activeProducts,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s2(Products, \"D0V7nYY4W4cBs8nivLdlZZAzUoM=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useDispatch\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_7__[\"useProductsOverview\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_7__[\"useCatalogCategories\"]];\n});\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar Categories = function Categories(_ref2) {\n  _s3();\n\n  var categories = _ref2.categories,\n      toggleCategory = _ref2.toggleCategory,\n      active = _ref2.active;\n  var catLength = categories.length;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState([]),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      elRefs = _React$useState2[0],\n      setElRefs = _React$useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      fitDevice = _useState3[0],\n      setFitDevice = _useState3[1];\n\n  var window = Object(_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_8__[\"useClientWindow\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setElRefs(function (elRefs) {\n      return Array(catLength).fill().map(function (_, i) {\n        return elRefs[i] || /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__[\"createRef\"])();\n      });\n    });\n  }, [categories]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (elRefs.length > 0 && elRefs[0].current !== null) {\n      var margin = window.innerWidth < 640 ? 8 : 32; //hardcoded the margins\n\n      setFitDevice(elRefs.map(function (el) {\n        return el.current.offsetWidth;\n      }).reduce(function (a, b, index) {\n        return a + b + margin * index;\n      }) <= window.innerWidth);\n    }\n  }, [elRefs]);\n  var catTitles = categories.map(function (category, index) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"Category\"], {\n      ref: elRefs[index],\n      key: category.id,\n      onClick: function onClick() {\n        return toggleCategory(category.id);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"CategoryTitle\"], {\n      active: category.id === active,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 7\n      }\n    }, category.label));\n  });\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"CategoryWrapper\"], {\n    fitDisplay: fitDevice,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 10\n    }\n  }, catTitles);\n};\n\n_s3(Categories, \"qJexK/5XK/fUqny+UORKg7dhIcQ=\", false, function () {\n  return [_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_8__[\"useClientWindow\"]];\n});\n\n_c2 = Categories;\n\nvar ProductPanel = function ProductPanel(_ref3) {\n  var products = _ref3.products;\n  var prod = [];\n\n  for (var key in products) {\n    prod.push(_objectSpread(_objectSpread({\n      id: key\n    }, products[key]), {}, {\n      images: _objectSpread(_objectSpread({}, products[key].images), {}, {\n        paths: Object.values(products[key].images.paths)\n      })\n    }));\n  } //get state and map it from firebase\n\n\n  var prods = prod.map(function (p) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"Product\"], {\n      key: p.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 5\n      }\n    }, __jsx(StockCTA, {\n      stock: p.stock,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 7\n      }\n    }), __jsx(OffPrice, {\n      off: p.off,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 7\n      }\n    }), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"Image\"], {\n      src: p.images.paths[0],\n      alt: p.images.alt,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 7\n      }\n    }), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"Name\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 3\n      }\n    }, p.name), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"Span\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 7\n      }\n    }, \"Estoque: \", p.stock, \" unidades\"), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"Hr\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 7\n      }\n    }), __jsx(Prices, {\n      price: p.price,\n      off: p.off,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 7\n      }\n    }), __jsx(IconPanel, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 7\n      }\n    }));\n  });\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"Panel\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 10\n    }\n  }, prods);\n};\n\n_c3 = ProductPanel;\n\nvar IconPanel = function IconPanel(_ref4) {\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref4);\n\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"Icons\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 3\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"IconInner\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 5\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__[\"faPlusCircle\"],\n    size: \"lg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }\n  }), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"IconSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 7\n    }\n  }, \"Info\")), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__[\"faShoppingBag\"],\n    size: \"2x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c4 = IconPanel;\n\nvar StockCTA = function StockCTA(_ref5) {\n  var stock = _ref5.stock;\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"StockAlert\"], {\n    stock: stock,\n    t: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 3\n    }\n  }, \"\\xDAltimas Unidades!\");\n};\n\n_c5 = StockCTA;\n\nvar OffPrice = function OffPrice(_ref6) {\n  var off = _ref6.off;\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"Off\"], {\n    off: off,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 31\n    }\n  }, off, \"% OFF!\");\n};\n\n_c6 = OffPrice;\n\nvar Prices = function Prices(_ref7) {\n  var price = _ref7.price,\n      off = _ref7.off;\n\n  var value = __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 15\n    }\n  }, \"10 BRL\");\n\n  if (off) {\n    var offPrice = (price - price * off / 100).toFixed(2);\n    value = __jsx(react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 161,\n        columnNumber: 7\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"PriceSpan\"], {\n      off: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 162,\n        columnNumber: 9\n      }\n    }, price, \" BRL\"), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"PriceSpan\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 163,\n        columnNumber: 9\n      }\n    }, offPrice, \" BRL\"));\n  }\n\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_4__[\"Price\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 10\n    }\n  }, value, \" / unid\");\n};\n\n_c7 = Prices;\n\nvar ImagesModal = function ImagesModal() {};\n\n_c8 = ImagesModal;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"Products\");\n$RefreshReg$(_c2, \"Categories\");\n$RefreshReg$(_c3, \"ProductPanel\");\n$RefreshReg$(_c4, \"IconPanel\");\n$RefreshReg$(_c5, \"StockCTA\");\n$RefreshReg$(_c6, \"OffPrice\");\n$RefreshReg$(_c7, \"Prices\");\n$RefreshReg$(_c8, \"ImagesModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy5qcz9iYzZkIl0sIm5hbWVzIjpbIlByb2R1Y3RzIiwidXNlU3RhdGUiLCJuYXZQcm9kdWN0cyIsInNob3dOYXZQcm9kdWN0cyIsInN0b3JlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3RzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInByb2R1Y3RzT3ZlcnZpZXciLCJ1c2VQcm9kdWN0c092ZXJ2aWV3IiwiYWN0aXZlQ2F0YWxvZ0NhdGVnb3JpZXMiLCJ1c2VDYXRhbG9nQ2F0ZWdvcmllcyIsIm5hdlByb2R1Y3RzVG9nZ2xlSGFuZGxlciIsInRvZ2dsZUNhdGVnb3J5SGFuZGxlciIsImlkIiwidXNlVG9nZ2xlQ2F0ZWdvcnkiLCJhY3RpdmVQcm9kdWN0cyIsInNldEFjdGl2ZVByb2R1Y3RzIiwidXNlRWZmZWN0IiwiY2F0YWxvZyIsImFjdGl2ZUNhdGFsb2ciLCJhY3RpdmVDYXRlZ29yeSIsIm92ZXJ2aWV3IiwibGFiZWwiLCJDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsInRvZ2dsZUNhdGVnb3J5IiwiYWN0aXZlIiwiY2F0TGVuZ3RoIiwibGVuZ3RoIiwiUmVhY3QiLCJlbFJlZnMiLCJzZXRFbFJlZnMiLCJmaXREZXZpY2UiLCJzZXRGaXREZXZpY2UiLCJ3aW5kb3ciLCJ1c2VDbGllbnRXaW5kb3ciLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImNyZWF0ZVJlZiIsImN1cnJlbnQiLCJtYXJnaW4iLCJpbm5lcldpZHRoIiwiZWwiLCJvZmZzZXRXaWR0aCIsInJlZHVjZSIsImEiLCJiIiwiaW5kZXgiLCJjYXRUaXRsZXMiLCJjYXRlZ29yeSIsIlByb2R1Y3RQYW5lbCIsInByb2QiLCJrZXkiLCJwdXNoIiwiaW1hZ2VzIiwicGF0aHMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJwcm9kcyIsInAiLCJzdG9jayIsIm9mZiIsImFsdCIsIm5hbWUiLCJwcmljZSIsIkljb25QYW5lbCIsImZhUGx1c0NpcmNsZSIsImZhU2hvcHBpbmdCYWciLCJTdG9ja0NUQSIsIk9mZlByaWNlIiwiUHJpY2VzIiwidmFsdWUiLCJvZmZQcmljZSIsInRvRml4ZWQiLCJJbWFnZXNNb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQVE7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUMsS0FBRCxDQUR4QjtBQUFBLE1BQ2hCQyxXQURnQjtBQUFBLE1BQ0hDLGVBREc7O0FBRXZCLE1BQU1DLEtBQUssR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxRQUFqQjtBQUFBLEdBQUQsQ0FBekI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUdGLFFBQVEsQ0FBQ0csdUZBQW1CLEVBQXBCLENBQWpDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUdKLFFBQVEsQ0FBQ0ssd0ZBQW9CLEVBQXJCLENBQXhDOztBQUVBLE1BQU1DLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkI7QUFBQSxXQUFNWCxlQUFlLENBQUMsVUFBQ0csS0FBRDtBQUFBLGFBQVcsQ0FBQ0EsS0FBWjtBQUFBLEtBQUQsQ0FBckI7QUFBQSxHQUFqQzs7QUFDQSxNQUFNUyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLEVBQUQ7QUFBQTs7QUFBQSxXQUFRUixRQUFRLENBQUNTLHFGQUFpQixDQUFDRCxFQUFELENBQWxCLENBQWhCO0FBQUEsR0FBOUI7O0FBUnVCLEtBUWpCRCxxQkFSaUI7QUFBQSxZQVF3QkUsNkVBUnhCO0FBQUE7O0FBQUEsbUJBVXFCaEIsc0RBQVEsQ0FBQyxJQUFELENBVjdCO0FBQUEsTUFVaEJpQixjQVZnQjtB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TU4sSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxNQUFHUixHQUFILFNBQUdBLEdBQUg7QUFBQSxTQUFhLE1BQUMsbUVBQUQ7QUFBSyxPQUFHLEVBQUVBLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQkEsR0FBaEIsV0FBYjtBQUFBLENBQWpCOztNQUFNUSxROztBQUVOLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLFFBQW9CO0FBQUEsTUFBakJOLEtBQWlCLFNBQWpCQSxLQUFpQjtBQUFBLE1BQVZILEdBQVUsU0FBVkEsR0FBVTs7QUFDakMsTUFBSVUsS0FBSyxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBWjs7QUFDQSxNQUFJVixHQUFKLEVBQVM7QUFDUCxRQUFNVyxRQUFRLEdBQUcsQ0FBQ1IsS0FBSyxHQUFJQSxLQUFLLEdBQUdILEdBQVQsR0FBZ0IsR0FBekIsRUFBOEJZLE9BQTlCLENBQXNDLENBQXRDLENBQWpCO0FBQ0FGLFNBQUssR0FDSCxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHlFQUFEO0FBQVcsU0FBRyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0JQLEtBQWhCLFNBREYsRUFFRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBWVEsUUFBWixTQUZGLENBREY7QUFNRDs7QUFDRCxTQUFPLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRRCxLQUFSLFlBQVA7QUFDRCxDQVpEOztNQUFNRCxNOztBQWNOLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU0sQ0FFekIsQ0FGRDs7TUFBTUEsVyIsImZpbGUiOiIuL0NvbXBvbmVudHMvUHJvZHVjdHMvUHJvZHVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlUmVmLCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgUHJvZHVjdHNXcmFwcGVyLFxuICBDYXRlZ29yeSxcbiAgQ2F0ZWdvcnlUaXRsZSxcbiAgQ2F0ZWdvcnlXcmFwcGVyLFxuICBUaXRsZSxcbiAgUGFuZWwsXG4gIFByb2R1Y3QsXG4gIEltYWdlLFxuICBOYW1lLFxuICBTcGFuLFxuICBIcixcbiAgUHJpY2UsXG4gIEljb25zLFxuICBJY29uSW5uZXIsXG4gIEljb25TcGFuLFxuICBTdG9ja0FsZXJ0LFxuICBPZmYsXG4gIFByaWNlU3Bhbixcbn0gZnJvbSBcIi4uLy4uL1N0eWxlZENvbXBvbmVudHMvcHJvZHVjdHNJdGVtc1wiO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi8uLi9VSS9Ecm9wZG93bi9Ecm9wZG93blwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge1xuICB1c2VQcm9kdWN0c092ZXJ2aWV3LFxuICB1c2VDYXRhbG9nQ2F0ZWdvcmllcyxcbiAgdXNlVG9nZ2xlQ2F0ZWdvcnksXG59IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2FjdGlvbnNJbmRleFwiO1xuaW1wb3J0IHsgdXNlQ2xpZW50V2luZG93IH0gZnJvbSBcIi4uLy4uL0hvb2tzL3VzZUNsaWVudFdpbmRvd1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFTaG9wcGluZ0JhZywgZmFQbHVzQ2lyY2xlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHt9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnXG5cbmNvbnN0IFByb2R1Y3RzID0gKHt9KSA9PiB7XG4gIGNvbnN0IFtuYXZQcm9kdWN0cywgc2hvd05hdlByb2R1Y3RzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc3RvcmUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb2R1Y3RzKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBwcm9kdWN0c092ZXJ2aWV3ID0gZGlzcGF0Y2godXNlUHJvZHVjdHNPdmVydmlldygpKTtcbiAgY29uc3QgYWN0aXZlQ2F0YWxvZ0NhdGVnb3JpZXMgPSBkaXNwYXRjaCh1c2VDYXRhbG9nQ2F0ZWdvcmllcygpKTtcblxuICBjb25zdCBuYXZQcm9kdWN0c1RvZ2dsZUhhbmRsZXIgPSAoKSA9PiBzaG93TmF2UHJvZHVjdHMoKHN0YXRlKSA9PiAhc3RhdGUpO1xuICBjb25zdCB0b2dnbGVDYXRlZ29yeUhhbmRsZXIgPSAoaWQpID0+IGRpc3BhdGNoKHVzZVRvZ2dsZUNhdGVnb3J5KGlkKSk7XG5cbiAgY29uc3QgW2FjdGl2ZVByb2R1Y3RzLCBzZXRBY3RpdmVQcm9kdWN0c10gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEFjdGl2ZVByb2R1Y3RzKHN0b3JlLmNhdGFsb2dbc3RvcmUuYWN0aXZlQ2F0YWxvZ11bc3RvcmUuYWN0aXZlQ2F0ZWdvcnldKTtcbiAgfSwgW3N0b3JlLmFjdGl2ZUNhdGVnb3J5LCBzdG9yZS5hY3RpdmVDYXRhbG9nXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvZHVjdHNXcmFwcGVyPlxuICAgICAgPFRpdGxlPk5vc3NvcyBQcm9kdXRvczwvVGl0bGU+XG4gICAgICA8RHJvcGRvd25cbiAgICAgICAgb25Qcm9kdWN0c1xuICAgICAgICBkcm9wRG93blRpdGxlPXtzdG9yZS5vdmVydmlld1tzdG9yZS5hY3RpdmVDYXRhbG9nXS5sYWJlbH1cbiAgICAgICAgc2hvd0Ryb3BEb3duPXtuYXZQcm9kdWN0c31cbiAgICAgICAgZHJvcERvd25Ub2dnbGVySGFuZGxlcj17bmF2UHJvZHVjdHNUb2dnbGVIYW5kbGVyfVxuICAgICAgICBzdWJJdGVtcz17cHJvZHVjdHNPdmVydmlld31cbiAgICAgIC8+XG4gICAgICA8Q2F0ZWdvcmllc1xuICAgICAgICBhY3RpdmU9e3N0b3JlLmFjdGl2ZUNhdGVnb3J5fVxuICAgICAgICBjYXRlZ29yaWVzPXthY3RpdmVDYXRhbG9nQ2F0ZWdvcmllc31cbiAgICAgICAgdG9nZ2xlQ2F0ZWdvcnk9e3RvZ2dsZUNhdGVnb3J5SGFuZGxlcn1cbiAgICAgIC8+XG4gICAgICA8UHJvZHVjdFBhbmVsIHByb2R1Y3RzPXthY3RpdmVQcm9kdWN0c30gLz5cbiAgICA8L1Byb2R1Y3RzV3JhcHBlcj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcblxuY29uc3QgQ2F0ZWdvcmllcyA9ICh7IGNhdGVnb3JpZXMsIHRvZ2dsZUNhdGVnb3J5LCBhY3RpdmUgfSkgPT4ge1xuICBjb25zdCBjYXRMZW5ndGggPSBjYXRlZ29yaWVzLmxlbmd0aDtcbiAgY29uc3QgW2VsUmVmcywgc2V0RWxSZWZzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ZpdERldmljZSwgc2V0Rml0RGV2aWNlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCB3aW5kb3cgPSB1c2VDbGllbnRXaW5kb3coKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEVsUmVmcygoZWxSZWZzKSA9PlxuICAgICAgQXJyYXkoY2F0TGVuZ3RoKVxuICAgICAgICAuZmlsbCgpXG4gICAgICAgIC5tYXAoKF8sIGkpID0+IGVsUmVmc1tpXSB8fCBjcmVhdGVSZWYoKSlcbiAgICApO1xuICB9LCBbY2F0ZWdvcmllc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGVsUmVmcy5sZW5ndGggPiAwICYmIGVsUmVmc1swXS5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtYXJnaW4gPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDY0MCA/IDggOiAzMjsgLy9oYXJkY29kZWQgdGhlIG1hcmdpbnNcbiAgICAgIHNldEZpdERldmljZShcbiAgICAgICAgZWxSZWZzXG4gICAgICAgICAgLm1hcCgoZWwpID0+IGVsLmN1cnJlbnQub2Zmc2V0V2lkdGgpXG4gICAgICAgICAgLnJlZHVjZSgoYSwgYiwgaW5kZXgpID0+IGEgKyBiICsgbWFyZ2luICogaW5kZXgpIDw9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICApO1xuICAgIH1cbiAgfSwgW2VsUmVmc10pO1xuXG4gIGNvbnN0IGNhdFRpdGxlcyA9IGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IChcbiAgICA8Q2F0ZWdvcnlcbiAgICAgIHJlZj17ZWxSZWZzW2luZGV4XX1cbiAgICAgIGtleT17Y2F0ZWdvcnkuaWR9XG4gICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVDYXRlZ29yeShjYXRlZ29yeS5pZCl9XG4gICAgPlxuICAgICAgPENhdGVnb3J5VGl0bGUgYWN0aXZlPXtjYXRlZ29yeS5pZCA9PT0gYWN0aXZlfT5cbiAgICAgICAge2NhdGVnb3J5LmxhYmVsfVxuICAgICAgPC9DYXRlZ29yeVRpdGxlPlxuICAgIDwvQ2F0ZWdvcnk+XG4gICkpO1xuICByZXR1cm4gPENhdGVnb3J5V3JhcHBlciBmaXREaXNwbGF5PXtmaXREZXZpY2V9PntjYXRUaXRsZXN9PC9DYXRlZ29yeVdyYXBwZXI+O1xufTtcblxuY29uc3QgUHJvZHVjdFBhbmVsID0gKHsgcHJvZHVjdHMgfSkgPT4ge1xuICBjb25zdCBwcm9kID0gW107XG4gIGZvciAobGV0IGtleSBpbiBwcm9kdWN0cykge1xuICAgIHByb2QucHVzaCh7XG4gICAgICBpZDoga2V5LFxuICAgICAgLi4ucHJvZHVjdHNba2V5XSxcbiAgICAgIGltYWdlczoge1xuICAgICAgICAuLi5wcm9kdWN0c1trZXldLmltYWdlcyxcbiAgICAgICAgcGF0aHM6IE9iamVjdC52YWx1ZXMocHJvZHVjdHNba2V5XS5pbWFnZXMucGF0aHMpLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSAgXG4gIC8vZ2V0IHN0YXRlIGFuZCBtYXAgaXQgZnJvbSBmaXJlYmFzZVxuICBjb25zdCBwcm9kcyA9IHByb2QubWFwKChwKSA9PiAoXG4gICAgPFByb2R1Y3Qga2V5PXtwLmlkfT5cbiAgICAgIDxTdG9ja0NUQSBzdG9jaz17cC5zdG9ja30gLz5cbiAgICAgIDxPZmZQcmljZSBvZmY9e3Aub2ZmfSAvPlxuICAgICAgPEltYWdlIHNyYz17cC5pbWFnZXMucGF0aHNbMF19IGFsdD17cC5pbWFnZXMuYWx0fS8+XG4gIDxOYW1lPntwLm5hbWV9PC9OYW1lPlxuICAgICAgPFNwYW4+RXN0b3F1ZToge3Auc3RvY2t9IHVuaWRhZGVzPC9TcGFuPlxuICAgICAgPEhyIC8+XG4gICAgICA8UHJpY2VzIHByaWNlPXtwLnByaWNlfSBvZmY9e3Aub2ZmfSAvPlxuICAgICAgPEljb25QYW5lbCAvPlxuICAgIDwvUHJvZHVjdD5cbiAgKSk7XG4gIHJldHVybiA8UGFuZWw+e3Byb2RzfTwvUGFuZWw+O1xufTtcblxuY29uc3QgSWNvblBhbmVsID0gKHt9KSA9PiAoXG4gIDxJY29ucz5cbiAgICA8SWNvbklubmVyPlxuICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IHNpemU9XCJsZ1wiIC8+XG4gICAgICA8SWNvblNwYW4+SW5mbzwvSWNvblNwYW4+XG4gICAgPC9JY29uSW5uZXI+XG4gICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNob3BwaW5nQmFnfSBzaXplPVwiMnhcIiAvPlxuICA8L0ljb25zPlxuKTtcblxuY29uc3QgU3RvY2tDVEEgPSAoeyBzdG9jayB9KSA9PiAoXG4gIDxTdG9ja0FsZXJ0IHN0b2NrPXtzdG9ja30gdD5cbiAgICDDmmx0aW1hcyBVbmlkYWRlcyFcbiAgPC9TdG9ja0FsZXJ0PlxuKTtcblxuY29uc3QgT2ZmUHJpY2UgPSAoeyBvZmYgfSkgPT4gPE9mZiBvZmY9e29mZn0+e29mZn0lIE9GRiE8L09mZj47XG5cbmNvbnN0IFByaWNlcyA9ICh7IHByaWNlLCBvZmYgfSkgPT4ge1xuICBsZXQgdmFsdWUgPSA8c3Ryb25nPjEwIEJSTDwvc3Ryb25nPjtcbiAgaWYgKG9mZikge1xuICAgIGNvbnN0IG9mZlByaWNlID0gKHByaWNlIC0gKHByaWNlICogb2ZmKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICB2YWx1ZSA9IChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPFByaWNlU3BhbiBvZmY+e3ByaWNlfSBCUkw8L1ByaWNlU3Bhbj5cbiAgICAgICAgPFByaWNlU3Bhbj57b2ZmUHJpY2V9IEJSTDwvUHJpY2VTcGFuPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG4gIHJldHVybiA8UHJpY2U+e3ZhbHVlfSAvIHVuaWQ8L1ByaWNlPjtcbn07XG5cbmNvbnN0IEltYWdlc01vZGFsID0gKCkgPT4ge1xuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Products/Products.js\n");

/***/ })

})