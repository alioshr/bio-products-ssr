webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Products/Products.js":
/*!*****************************************!*\
  !*** ./Components/Products/Products.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../StyledComponents/productsItems */ \"./StyledComponents/productsItems.js\");\n/* harmony import */ var _UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/Dropdown/Dropdown */ \"./UI/Dropdown/Dropdown.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.1_react-dom@16.13.1+redux@4.0.5/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/actionsIndex */ \"./store/actions/actionsIndex.js\");\n/* harmony import */ var _Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Hooks/useClientWindow */ \"./Hooks/useClientWindow.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Products/Products.js\",\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Products = function Products(_ref) {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      navProducts = _useState[0],\n      showNavProducts = _useState[1];\n\n  var store = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    return state.products;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"])();\n  var productsOverview = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useProductsOverview\"])());\n  var activeCatalogCategories = dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useCatalogCategories\"])());\n\n  var navProductsToggleHandler = function navProductsToggleHandler() {\n    return showNavProducts(function (state) {\n      return !state;\n    });\n  };\n\n  var toggleCategoryHandler = function toggleCategoryHandler(id) {\n    _s();\n\n    return dispatch(Object(_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useToggleCategory\"])(id));\n  };\n\n  _s(toggleCategoryHandler, \"b8aGLn/Mzluh0akaKUo24RslKf0=\", false, function () {\n    return [_store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useToggleCategory\"]];\n  });\n\n  console.log(\"active catalog\", store.activeCatalog);\n  console.log(\"active category\", store.activeCategory);\n  console.log(\"active products\", store.catalog.activeCatalog.activeCategory);\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"ProductsWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, \"Nossos Produtos\"), __jsx(_UI_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onProducts: true,\n    dropDownTitle: store.overview[store.activeCatalog].label,\n    showDropDown: navProducts,\n    dropDownTogglerHandler: navProductsToggleHandler,\n    subItems: productsOverview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }), __jsx(Categories, {\n    active: store.activeCategory,\n    categories: activeCatalogCategories,\n    toggleCategory: toggleCategoryHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }), __jsx(ProductPanel, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s2(Products, \"tMCAGYtN+BV5rY7bufpIH8UYsyw=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useProductsOverview\"], _store_actions_actionsIndex__WEBPACK_IMPORTED_MODULE_6__[\"useCatalogCategories\"]];\n});\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar Categories = function Categories(_ref2) {\n  _s3();\n\n  var categories = _ref2.categories,\n      toggleCategory = _ref2.toggleCategory,\n      active = _ref2.active;\n  var catLength = categories.length;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      elRefs = _React$useState2[0],\n      setElRefs = _React$useState2[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      fitDevice = _useState2[0],\n      setFitDevice = _useState2[1];\n\n  var window = Object(_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_7__[\"useClientWindow\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setElRefs(function (elRefs) {\n      return Array(catLength).fill().map(function (_, i) {\n        return elRefs[i] || /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createRef\"])();\n      });\n    });\n  }, [categories]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (elRefs.length > 0 && elRefs[0].current !== null) {\n      var margin = window.innerWidth < 640 ? 8 : 32; //hardcoded the margins\n\n      setFitDevice(elRefs.map(function (el) {\n        return el.current.offsetWidth;\n      }).reduce(function (a, b, index) {\n        return a + b + margin * index;\n      }) <= window.innerWidth);\n    }\n  }, [elRefs]);\n  var catTitles = categories.map(function (category, index) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Category\"], {\n      ref: elRefs[index],\n      key: category.id,\n      onClick: function onClick() {\n        return toggleCategory(category.id);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"CategoryTitle\"], {\n      active: category.id === active,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 7\n      }\n    }, category.label));\n  });\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"CategoryWrapper\"], {\n    fitDisplay: fitDevice,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 10\n    }\n  }, catTitles);\n};\n\n_s3(Categories, \"qJexK/5XK/fUqny+UORKg7dhIcQ=\", false, function () {\n  return [_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_7__[\"useClientWindow\"]];\n});\n\n_c2 = Categories;\n\nvar ProductPanel = function ProductPanel(_ref3) {\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref3);\n\n  //get state and map it from firebase\n  var test = [];\n\n  for (var i = 0; i < 10; i++) {\n    test.push(__jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Product\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 7\n      }\n    }, __jsx(StockCTA, {\n      stock: 5,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }\n    }), __jsx(OffPrice, {\n      off: 10,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }\n    }), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n      src: \"/Products/soapWorks/soap/3/0.jpg\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 9\n      }\n    }), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Name\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 9\n      }\n    }, \"Nome\"), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Span\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }\n    }, \"Estoque: 20 unid\"), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Hr\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }\n    }), __jsx(Prices, {\n      price: 45,\n      off: 10,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 9\n      }\n    }), __jsx(IconPanel, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }\n    })));\n  }\n\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Panel\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 10\n    }\n  }, test);\n};\n\n_c3 = ProductPanel;\n\nvar IconPanel = function IconPanel(_ref4) {\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref4);\n\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Icons\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 3\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"IconInner\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 5\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__[\"faPlusCircle\"],\n    size: \"lg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }\n  }), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"IconSpan\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 7\n    }\n  }, \"Info\")), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__[\"faShoppingBag\"],\n    size: \"2x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c4 = IconPanel;\n\nvar StockCTA = function StockCTA(_ref5) {\n  var stock = _ref5.stock;\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"StockAlert\"], {\n    stock: stock,\n    t: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 3\n    }\n  }, \"\\xDAltimas Unidades!\");\n};\n\n_c5 = StockCTA;\n\nvar OffPrice = function OffPrice(_ref6) {\n  var off = _ref6.off;\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Off\"], {\n    off: off,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 31\n    }\n  }, off, \"% OFF!\");\n};\n\n_c6 = OffPrice;\n\nvar Prices = function Prices(_ref7) {\n  var price = _ref7.price,\n      off = _ref7.off;\n\n  var value = __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 15\n    }\n  }, \"10 BRL\");\n\n  if (off) {\n    var offPrice = (price - price * off / 100).toFixed(2);\n    value = __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 7\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"PriceSpan\"], {\n      off: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 150,\n        columnNumber: 9\n      }\n    }, price, \" BRL\"), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"PriceSpan\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 151,\n        columnNumber: 9\n      }\n    }, offPrice, \" BRL\"));\n  }\n\n  return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_3__[\"Price\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 10\n    }\n  }, value, \" / unid\");\n};\n\n_c7 = Prices;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"Products\");\n$RefreshReg$(_c2, \"Categories\");\n$RefreshReg$(_c3, \"ProductPanel\");\n$RefreshReg$(_c4, \"IconPanel\");\n$RefreshReg$(_c5, \"StockCTA\");\n$RefreshReg$(_c6, \"OffPrice\");\n$RefreshReg$(_c7, \"Prices\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy5qcz9iYzZkIl0sIm5hbWVzIjpbIlByb2R1Y3RzIiwidXNlU3RhdGUiLCJuYXZQcm9kdWN0cyIsInNob3dOYXZQcm9kdWN0cyIsInN0b3JlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3RzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInByb2R1Y3RzT3ZlcnZpZXciLCJ1c2VQcm9kdWN0c092ZXJ2aWV3IiwiYWN0aXZlQ2F0YWxvZ0NhdGVnb3JpZXMiLCJ1c2VDYXRhbG9nQ2F0ZWdvcmllcyIsIm5hdlByb2R1Y3RzVG9nZ2xlSGFuZGxlciIsInRvZ2dsZUNhdGVnb3J5SGFuZGxlciIsImlkIiwidXNlVG9nZ2xlQ2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlQ2F0YWxvZyIsImFjdGl2ZUNhdGVnb3J5IiwiY2F0YWxvZyIsIm92ZXJ2aWV3IiwibGFiZWwiLCJDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsInRvZ2dsZUNhdGVnb3J5IiwiYWN0aXZlIiwiY2F0TGVuZ3RoIiwibGVuZ3RoIiwiUmVhY3QiLCJlbFJlZnMiLCJzZXRFbFJlZnMiLCJmaXREZXZpY2UiLCJzZXRGaXREZXZpY2UiLCJ3aW5kb3ciLCJ1c2VDbGllbnRXaW5kb3ciLCJ1c2VFZmZlY3QiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImNyZWF0ZVJlZiIsImN1cnJlbnQiLCJtYXJnaW4iLCJpbm5lcldpZHRoIiwiZWwiLCJvZmZzZXRXaWR0aCIsInJlZHVjZSIsImEiLCJiIiwiaW5kZXgiLCJjYXRUaXRsZXMiLCJjYXRlZ29yeSIsIlByb2R1Y3RQYW5lbCIsInRlc3QiLCJwdXNoIiwiSWNvblBhbmVsIiwiZmFQbHVzQ2lyY2xlIiwiZmFTaG9wcGluZ0JhZyIsIlN0b2NrQ1RBIiwic3RvY2siLCJPZmZQcmljZSIsIm9mZiIsIlByaWNlcyIsInByaWNlIiwidmFsdWUiLCJvZmZQ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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFELEtBQVIsWUFBUDtBQUNELENBWkQ7O01BQU1GLE0iLCJmaWxlIjoiLi9Db21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGNyZWF0ZVJlZiwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFByb2R1Y3RzV3JhcHBlcixcbiAgQ2F0ZWdvcnksXG4gIENhdGVnb3J5VGl0bGUsXG4gIENhdGVnb3J5V3JhcHBlcixcbiAgVGl0bGUsXG4gIFBhbmVsLFxuICBQcm9kdWN0LFxuICBJbWFnZSxcbiAgTmFtZSxcbiAgU3BhbixcbiAgSHIsXG4gIFByaWNlLFxuICBJY29ucyxcbiAgSWNvbklubmVyLFxuICBJY29uU3BhbixcbiAgU3RvY2tBbGVydCxcbiAgT2ZmLFxuICBQcmljZVNwYW4sXG59IGZyb20gXCIuLi8uLi9TdHlsZWRDb21wb25lbnRzL3Byb2R1Y3RzSXRlbXNcIjtcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi4vLi4vVUkvRHJvcGRvd24vRHJvcGRvd25cIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcbiAgdXNlUHJvZHVjdHNPdmVydmlldyxcbiAgdXNlQ2F0YWxvZ0NhdGVnb3JpZXMsXG4gIHVzZVRvZ2dsZUNhdGVnb3J5LFxufSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9hY3Rpb25zSW5kZXhcIjtcbmltcG9ydCB7IHVzZUNsaWVudFdpbmRvdyB9IGZyb20gXCIuLi8uLi9Ib29rcy91c2VDbGllbnRXaW5kb3dcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhU2hvcHBpbmdCYWcsIGZhUGx1c0NpcmNsZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcblxuY29uc3QgUHJvZHVjdHMgPSAoe30pID0+IHtcbiAgY29uc3QgW25hdlByb2R1Y3RzLCBzaG93TmF2UHJvZHVjdHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzdG9yZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvZHVjdHMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHByb2R1Y3RzT3ZlcnZpZXcgPSBkaXNwYXRjaCh1c2VQcm9kdWN0c092ZXJ2aWV3KCkpO1xuICBjb25zdCBhY3RpdmVDYXRhbG9nQ2F0ZWdvcmllcyA9IGRpc3BhdGNoKHVzZUNhdGFsb2dDYXRlZ29yaWVzKCkpO1xuXG4gIGNvbnN0IG5hdlByb2R1Y3RzVG9nZ2xlSGFuZGxlciA9ICgpID0+IHNob3dOYXZQcm9kdWN0cygoc3RhdGUpID0+ICFzdGF0ZSk7XG4gIGNvbnN0IHRvZ2dsZUNhdGVnb3J5SGFuZGxlciA9IChpZCkgPT4gZGlzcGF0Y2godXNlVG9nZ2xlQ2F0ZWdvcnkoaWQpKTtcblxuICBjb25zb2xlLmxvZyhcImFjdGl2ZSBjYXRhbG9nXCIsIHN0b3JlLmFjdGl2ZUNhdGFsb2cpO1xuICBjb25zb2xlLmxvZyhcImFjdGl2ZSBjYXRlZ29yeVwiLCBzdG9yZS5hY3RpdmVDYXRlZ29yeSk7XG4gIGNvbnNvbGUubG9nKFwiYWN0aXZlIHByb2R1Y3RzXCIsIHN0b3JlLmNhdGFsb2cuYWN0aXZlQ2F0YWxvZy5hY3RpdmVDYXRlZ29yeSlcbiAgcmV0dXJuIChcbiAgICA8UHJvZHVjdHNXcmFwcGVyPlxuICAgICAgPFRpdGxlPk5vc3NvcyBQcm9kdXRvczwvVGl0bGU+XG4gICAgICA8RHJvcGRvd25cbiAgICAgICAgb25Qcm9kdWN0c1xuICAgICAgICBkcm9wRG93blRpdGxlPXtzdG9yZS5vdmVydmlld1tzdG9yZS5hY3RpdmVDYXRhbG9nXS5sYWJlbH1cbiAgICAgICAgc2hvd0Ryb3BEb3duPXtuYXZQcm9kdWN0c31cbiAgICAgICAgZHJvcERvd25Ub2dnbGVySGFuZGxlcj17bmF2UHJvZHVjdHNUb2dnbGVIYW5kbGVyfVxuICAgICAgICBzdWJJdGVtcz17cHJvZHVjdHNPdmVydmlld31cbiAgICAgIC8+XG4gICAgICA8Q2F0ZWdvcmllc1xuICAgICAgICBhY3RpdmU9e3N0b3JlLmFjdGl2ZUNhdGVnb3J5fVxuICAgICAgICBjYXRlZ29yaWVzPXthY3RpdmVDYXRhbG9nQ2F0ZWdvcmllc31cbiAgICAgICAgdG9nZ2xlQ2F0ZWdvcnk9e3RvZ2dsZUNhdGVnb3J5SGFuZGxlcn1cbiAgICAgIC8+XG4gICAgICA8UHJvZHVjdFBhbmVsIC8+XG4gICAgPC9Qcm9kdWN0c1dyYXBwZXI+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XG5cbmNvbnN0IENhdGVnb3JpZXMgPSAoeyBjYXRlZ29yaWVzLCB0b2dnbGVDYXRlZ29yeSwgYWN0aXZlIH0pID0+IHtcbiAgY29uc3QgY2F0TGVuZ3RoID0gY2F0ZWdvcmllcy5sZW5ndGg7XG4gIGNvbnN0IFtlbFJlZnMsIHNldEVsUmVmc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmaXREZXZpY2UsIHNldEZpdERldmljZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgd2luZG93ID0gdXNlQ2xpZW50V2luZG93KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRFbFJlZnMoKGVsUmVmcykgPT5cbiAgICAgIEFycmF5KGNhdExlbmd0aClcbiAgICAgICAgLmZpbGwoKVxuICAgICAgICAubWFwKChfLCBpKSA9PiBlbFJlZnNbaV0gfHwgY3JlYXRlUmVmKCkpXG4gICAgKTtcbiAgfSwgW2NhdGVnb3JpZXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChlbFJlZnMubGVuZ3RoID4gMCAmJiBlbFJlZnNbMF0uY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWFyZ2luID0gd2luZG93LmlubmVyV2lkdGggPCA2NDAgPyA4IDogMzI7IC8vaGFyZGNvZGVkIHRoZSBtYXJnaW5zXG4gICAgICBzZXRGaXREZXZpY2UoXG4gICAgICAgIGVsUmVmc1xuICAgICAgICAgIC5tYXAoKGVsKSA9PiBlbC5jdXJyZW50Lm9mZnNldFdpZHRoKVxuICAgICAgICAgIC5yZWR1Y2UoKGEsIGIsIGluZGV4KSA9PiBhICsgYiArIG1hcmdpbiAqIGluZGV4KSA8PSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgICAgKTtcbiAgICB9XG4gIH0sIFtlbFJlZnNdKTtcblxuICBjb25zdCBjYXRUaXRsZXMgPSBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiAoXG4gICAgPENhdGVnb3J5XG4gICAgICByZWY9e2VsUmVmc1tpbmRleF19XG4gICAgICBrZXk9e2NhdGVnb3J5LmlkfVxuICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlQ2F0ZWdvcnkoY2F0ZWdvcnkuaWQpfVxuICAgID5cbiAgICAgIDxDYXRlZ29yeVRpdGxlIGFjdGl2ZT17Y2F0ZWdvcnkuaWQgPT09IGFjdGl2ZX0+XG4gICAgICAgIHtjYXRlZ29yeS5sYWJlbH1cbiAgICAgIDwvQ2F0ZWdvcnlUaXRsZT5cbiAgICA8L0NhdGVnb3J5PlxuICApKTtcbiAgcmV0dXJuIDxDYXRlZ29yeVdyYXBwZXIgZml0RGlzcGxheT17Zml0RGV2aWNlfT57Y2F0VGl0bGVzfTwvQ2F0ZWdvcnlXcmFwcGVyPjtcbn07XG5cbmNvbnN0IFByb2R1Y3RQYW5lbCA9ICh7fSkgPT4ge1xuICAvL2dldCBzdGF0ZSBhbmQgbWFwIGl0IGZyb20gZmlyZWJhc2VcbiAgY29uc3QgdGVzdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICB0ZXN0LnB1c2goXG4gICAgICA8UHJvZHVjdD5cbiAgICAgICAgPFN0b2NrQ1RBIHN0b2NrPXs1fSAvPlxuICAgICAgICA8T2ZmUHJpY2Ugb2ZmPXsxMH0gLz5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9Qcm9kdWN0cy9zb2FwV29ya3Mvc29hcC8zLzAuanBnXCIgLz5cbiAgICAgICAgPE5hbWU+Tm9tZTwvTmFtZT5cbiAgICAgICAgPFNwYW4+RXN0b3F1ZTogMjAgdW5pZDwvU3Bhbj5cbiAgICAgICAgPEhyIC8+XG4gICAgICAgIDxQcmljZXMgcHJpY2U9ezQ1fSBvZmY9ezEwfSAvPlxuICAgICAgICA8SWNvblBhbmVsIC8+XG4gICAgICA8L1Byb2R1Y3Q+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gPFBhbmVsPnt0ZXN0fTwvUGFuZWw+O1xufTtcblxuY29uc3QgSWNvblBhbmVsID0gKHt9KSA9PiAoXG4gIDxJY29ucz5cbiAgICA8SWNvbklubmVyPlxuICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IHNpemU9XCJsZ1wiIC8+XG4gICAgICA8SWNvblNwYW4+SW5mbzwvSWNvblNwYW4+XG4gICAgPC9JY29uSW5uZXI+XG4gICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNob3BwaW5nQmFnfSBzaXplPVwiMnhcIiAvPlxuICA8L0ljb25zPlxuKTtcblxuY29uc3QgU3RvY2tDVEEgPSAoeyBzdG9jayB9KSA9PiAoXG4gIDxTdG9ja0FsZXJ0IHN0b2NrPXtzdG9ja30gdD5cbiAgICDDmmx0aW1hcyBVbmlkYWRlcyFcbiAgPC9TdG9ja0FsZXJ0PlxuKTtcblxuY29uc3QgT2ZmUHJpY2UgPSAoeyBvZmYgfSkgPT4gPE9mZiBvZmY9e29mZn0+e29mZn0lIE9GRiE8L09mZj47XG5cbmNvbnN0IFByaWNlcyA9ICh7IHByaWNlLCBvZmYgfSkgPT4ge1xuICBsZXQgdmFsdWUgPSA8c3Ryb25nPjEwIEJSTDwvc3Ryb25nPjtcbiAgaWYgKG9mZikge1xuICAgIGNvbnN0IG9mZlByaWNlID0gKHByaWNlIC0gKHByaWNlICogb2ZmKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICB2YWx1ZSA9IChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPFByaWNlU3BhbiBvZmY+e3ByaWNlfSBCUkw8L1ByaWNlU3Bhbj5cbiAgICAgICAgPFByaWNlU3Bhbj57b2ZmUHJpY2V9IEJSTDwvUHJpY2VTcGFuPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG4gIHJldHVybiA8UHJpY2U+e3ZhbHVlfSAvIHVuaWQ8L1ByaWNlPjtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Products/Products.js\n");

/***/ })

})