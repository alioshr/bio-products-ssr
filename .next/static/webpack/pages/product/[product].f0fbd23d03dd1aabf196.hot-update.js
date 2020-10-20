webpackHotUpdate_N_E("pages/product/[product]",{

/***/ "./pages/product/[product].js":
/*!************************************!*\
  !*** ./pages/product/[product].js ***!
  \************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StyledComponents/productDetails */ \"./StyledComponents/productDetails.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _Hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Hooks/useScrollTo */ \"./Hooks/useScrollTo.js\");\n/* harmony import */ var _UI_Swipeable_Swipeable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../UI/Swipeable/Swipeable */ \"./UI/Swipeable/Swipeable.js\");\n/* harmony import */ var _Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Hooks/useWindowDimension */ \"./Hooks/useWindowDimension.js\");\n/* harmony import */ var _DB_catalog_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../DB/catalog.json */ \"./DB/catalog.json\");\nvar _DB_catalog_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../DB/catalog.json */ \"./DB/catalog.json\", 1);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/pages/product/[product].js\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar ProductDetails = function ProductDetails(_ref) {\n  _s2();\n\n  var product = _ref.product,\n      category = _ref.category,\n      id = _ref.id,\n      name = _ref.name;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      qty = _useState[0],\n      setQty = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      activeSpec = _useState2[0],\n      setActiveSpec = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      featureTouched = _useState3[0],\n      setFeatureTouched = _useState3[1];\n\n  var _useWindowDimension = useWindowDimension(),\n      _useWindowDimension2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useWindowDimension, 2),\n      width = _useWindowDimension2[0],\n      height = _useWindowDimension2[1];\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  console.log(width); //this will be replaced by an http request\n\n  var prodDetails = _DB_catalog_json__WEBPACK_IMPORTED_MODULE_8__.details[product][category][id];\n  console.log(prodDetails);\n\n  var qtyHandler = function qtyHandler(mode) {\n    if (mode === \"remove\" && qty > 1) {\n      setQty(function (qty) {\n        return qty - 1;\n      });\n    }\n\n    if (mode === \"add\") {\n      setQty(function (qty) {\n        return qty + 1;\n      });\n    }\n  };\n\n  var featureHandler = function featureHandler(index) {\n    var _s = $RefreshSig$();\n\n    index !== activeSpec && setFeatureTouched(true);\n    index === activeSpec && setFeatureTouched(function (state) {\n      return !state;\n    });\n    !featureTouched ? setTimeout(function () {\n      return window.scrollTo({\n        top: ref.current.offsetTop,\n        behavior: \"smooth\"\n      });\n    }, 500) : setTimeout(_s(function () {\n      _s();\n\n      return Object(_Hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_5__[\"useScrollTo\"])(0, 750);\n    }, \"fyxK3ETFb9geiSyxToLG+fb8BsI=\", false, function () {\n      return [_Hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_5__[\"useScrollTo\"]];\n    }), 390);\n    setActiveSpec(index);\n  };\n\n  var feats = [\"Sobre\", \"Como usar\", \"Ingredientes\", \"Reviews\"];\n  var features = feats.map(function (feature, i) {\n    return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Feature\"], {\n      index: i,\n      active: i === activeSpec && featureTouched,\n      inactive: i != activeSpec && featureTouched,\n      onClick: function onClick() {\n        return featureHandler(i);\n      },\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"FeatTitle\"], {\n      active: i === activeSpec && featureTouched,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 7\n      }\n    }, feature));\n  });\n  var dummy = [\"https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1280x1280/products/392/1235/Clarifying_gel_cleanser_front__96525.1594249352.jpg?c=2\", \"https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1280x1280/products/393/1238/Clear_Genius_Toner_Front__51597.1594249597.jpg?c=2\"];\n  return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Wrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Banner\"], {\n    maxWidth: width,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }\n  }, __jsx(_UI_Swipeable_Swipeable__WEBPACK_IMPORTED_MODULE_6__[\"Gallery\"], {\n    rowWidth: \"100%\",\n    rowHeight: \"100%\",\n    markerActiveColor: \"orange\",\n    markerInactiveColor: \"lightgray\",\n    items: dummy,\n    childProps: {\n      alt: \"banner logo\"\n    },\n    withNav: false,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Details\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  }, name), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Features\"], {\n    ref: ref,\n    index: activeSpec,\n    active: featureTouched,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }, features), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Panel\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"CTA\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 11\n    }\n  }, \"Compre\"), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Purchase\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 11\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Remove\"], {\n    onClick: function onClick() {\n      return qtyHandler(\"remove\");\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faMinusCircle\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 15\n    }\n  })), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Qty\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 13\n    }\n  }, qty), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Add\"], {\n    onClick: function onClick() {\n      return qtyHandler(\"add\");\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faPlusCircle\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 15\n    }\n  }))))));\n};\n\n_s2(ProductDetails, \"ASpRwMDa0OOk2wLDPl+9+8loARU=\", true);\n\n_c = ProductDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bcHJvZHVjdF0uanM/Y2E1YSJdLCJuYW1lcyI6WyJQcm9kdWN0RGV0YWlscyIsInByb2R1Y3QiLCJjYXRlZ29yeSIsImlkIiwibmFtZSIsInVzZVN0YXRlIiwicXR5Iiwic2V0UXR5IiwiYWN0aXZlU3BlYyIsInNldEFjdGl2ZVNwZWMiLCJmZWF0dXJlVG91Y2hlZCIsInNldEZlYXR1cmVUb3VjaGVkIiwidXNlV2luZG93RGltZW5zaW9uIiwid2lkdGgiLCJoZWlnaHQiLCJyZWYiLCJ1c2VSZWYiLCJjb25zb2xlIiwibG9nIiwicHJvZERldGFpbHMiLCJGZWF0dXJlc0RCIiwiZGV0YWlscyIsInF0eUhhbmRsZXIiLCJtb2RlIiwiZmVhdHVyZUhhbmRsZXIiLCJpbmRleCIsInN0YXRlIiwic2V0VGltZW91dCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiY3VycmVudCIsIm9mZnNldFRvcCIsImJlaGF2aW9yIiwidXNlU2Nyb2xsVG8iLCJmZWF0cyIsImZlYXR1cmVzIiwibWFwIiwiZmVhdHVyZSIsImkiLCJkdW1teSIsImFsdCIsImZhTWludXNDaXJjbGUiLCJmYVBsdXNDaXJjbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQXFDO0FBQUE7O0FBQUEsTUFBbENDLE9BQWtDLFFBQWxDQSxPQUFrQztBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFmQyxFQUFlLFFBQWZBLEVBQWU7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ3BDQyxzREFBUSxDQUFDLENBQUQsQ0FENEI7QUFBQSxNQUNuREMsR0FEbUQ7QUFBQSxNQUM5Q0MsTUFEOEM7O0FBQUEsbUJBRXRCRixzREFBUSxDQUFDLENBQUQsQ0FGYztB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QUE7QUFBQSxJQURGLENBREYsRUFJRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTXBDLEdBQU4sQ0FKRixFQUtFLE1BQUMsb0VBQUQ7QUFBSyxXQUFPLEVBQUU7QUFBQSxhQUFNZ0IsVUFBVSxDQUFDLEtBQUQsQ0FBaEI7QUFBQSxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRXFCLDhFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixDQUZGLENBTEYsQ0FkRixDQURGO0FBbUNELENBMUZEOztJQUFNM0MsYzs7S0FBQUEsYzs7QUE0RlNBLDZFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZHVjdC9bcHJvZHVjdF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgV3JhcHBlcixcbiAgQmFubmVyLFxuICBEZXRhaWxzLFxuICBUaXRsZSxcbiAgRmVhdHVyZXMsXG4gIEZlYXR1cmUsXG4gIFBhbmVsLFxuICBBZGQsXG4gIFJlbW92ZSxcbiAgUXR5LFxuICBDVEEsXG4gIFB1cmNoYXNlLFxuICBGZWF0VGl0bGUsXG59IGZyb20gXCIuLi8uLi9TdHlsZWRDb21wb25lbnRzL3Byb2R1Y3REZXRhaWxzXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYVBsdXNDaXJjbGUsIGZhTWludXNDaXJjbGUgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyB1c2VTY3JvbGxUbyB9IGZyb20gXCIuLi8uLi9Ib29rcy91c2VTY3JvbGxUb1wiO1xuaW1wb3J0IHsgR2FsbGVyeSB9IGZyb20gXCIuLi8uLi9VSS9Td2lwZWFibGUvU3dpcGVhYmxlXCI7XG5pbXBvcnQge30gZnJvbSAnLi4vLi4vSG9va3MvdXNlV2luZG93RGltZW5zaW9uJ1xuaW1wb3J0IEZlYXR1cmVzREIgZnJvbSBcIi4uLy4uL0RCL2NhdGFsb2cuanNvblwiO1xuXG5jb25zdCBQcm9kdWN0RGV0YWlscyA9ICh7IHByb2R1Y3QsIGNhdGVnb3J5LCBpZCwgbmFtZSB9KSA9PiB7XG4gIGNvbnN0IFtxdHksIHNldFF0eV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2FjdGl2ZVNwZWMsIHNldEFjdGl2ZVNwZWNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtmZWF0dXJlVG91Y2hlZCwgc2V0RmVhdHVyZVRvdWNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSB1c2VXaW5kb3dEaW1lbnNpb24oKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc29sZS5sb2cod2lkdGgpXG5cbiAgLy90aGlzIHdpbGwgYmUgcmVwbGFjZWQgYnkgYW4gaHR0cCByZXF1ZXN0XG4gIGNvbnN0IHByb2REZXRhaWxzID0gRmVhdHVyZXNEQi5kZXRhaWxzW3Byb2R1Y3RdW2NhdGVnb3J5XVtpZF07XG4gIGNvbnNvbGUubG9nKHByb2REZXRhaWxzKTtcblxuICBjb25zdCBxdHlIYW5kbGVyID0gKG1vZGUpID0+IHtcbiAgICBpZiAobW9kZSA9PT0gXCJyZW1vdmVcIiAmJiBxdHkgPiAxKSB7XG4gICAgICBzZXRRdHkoKHF0eSkgPT4gcXR5IC0gMSk7XG4gICAgfVxuICAgIGlmIChtb2RlID09PSBcImFkZFwiKSB7XG4gICAgICBzZXRRdHkoKHF0eSkgPT4gcXR5ICsgMSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZlYXR1cmVIYW5kbGVyID0gKGluZGV4KSA9PiB7XG4gICAgaW5kZXggIT09IGFjdGl2ZVNwZWMgJiYgc2V0RmVhdHVyZVRvdWNoZWQodHJ1ZSk7XG4gICAgaW5kZXggPT09IGFjdGl2ZVNwZWMgJiYgc2V0RmVhdHVyZVRvdWNoZWQoKHN0YXRlKSA9PiAhc3RhdGUpO1xuICAgICFmZWF0dXJlVG91Y2hlZFxuICAgICAgPyBzZXRUaW1lb3V0KFxuICAgICAgICAgICgpID0+XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IHJlZi5jdXJyZW50Lm9mZnNldFRvcCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSksXG4gICAgICAgICAgNTAwXG4gICAgICAgIClcbiAgICAgIDogc2V0VGltZW91dCgoKSA9PiB1c2VTY3JvbGxUbygwLCA3NTApLCAzOTApO1xuICAgIHNldEFjdGl2ZVNwZWMoaW5kZXgpO1xuICB9O1xuXG4gIGNvbnN0IGZlYXRzID0gW1wiU29icmVcIiwgXCJDb21vIHVzYXJcIiwgXCJJbmdyZWRpZW50ZXNcIiwgXCJSZXZpZXdzXCJdO1xuICBjb25zdCBmZWF0dXJlcyA9IGZlYXRzLm1hcCgoZmVhdHVyZSwgaSkgPT4gKFxuICAgIDxGZWF0dXJlXG4gICAgICBpbmRleD17aX1cbiAgICAgIGFjdGl2ZT17aSA9PT0gYWN0aXZlU3BlYyAmJiBmZWF0dXJlVG91Y2hlZH1cbiAgICAgIGluYWN0aXZlPXtpICE9IGFjdGl2ZVNwZWMgJiYgZmVhdHVyZVRvdWNoZWR9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBmZWF0dXJlSGFuZGxlcihpKX1cbiAgICAgIGtleT17aX1cbiAgICA+XG4gICAgICA8RmVhdFRpdGxlIGFjdGl2ZT17aSA9PT0gYWN0aXZlU3BlYyAmJiBmZWF0dXJlVG91Y2hlZH0+XG4gICAgICAgIHtmZWF0dXJlfVxuICAgICAgPC9GZWF0VGl0bGU+XG4gICAgPC9GZWF0dXJlPlxuICApKTtcblxuICBjb25zdCBkdW1teSA9IFtcbiAgICBgaHR0cHM6Ly9jZG4xMS5iaWdjb21tZXJjZS5jb20vcy05cDg4OXJ4cGtiL2ltYWdlcy9zdGVuY2lsLzEyODB4MTI4MC9wcm9kdWN0cy8zOTIvMTIzNS9DbGFyaWZ5aW5nX2dlbF9jbGVhbnNlcl9mcm9udF9fOTY1MjUuMTU5NDI0OTM1Mi5qcGc/Yz0yYCxcbiAgICBgaHR0cHM6Ly9jZG4xMS5iaWdjb21tZXJjZS5jb20vcy05cDg4OXJ4cGtiL2ltYWdlcy9zdGVuY2lsLzEyODB4MTI4MC9wcm9kdWN0cy8zOTMvMTIzOC9DbGVhcl9HZW5pdXNfVG9uZXJfRnJvbnRfXzUxNTk3LjE1OTQyNDk1OTcuanBnP2M9MmAsXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxCYW5uZXIgbWF4V2lkdGg9e3dpZHRofT5cbiAgICAgICAgPEdhbGxlcnlcbiAgICAgICAgICByb3dXaWR0aD1cIjEwMCVcIlxuICAgICAgICAgIHJvd0hlaWdodD1cIjEwMCVcIlxuICAgICAgICAgIG1hcmtlckFjdGl2ZUNvbG9yPVwib3JhbmdlXCJcbiAgICAgICAgICBtYXJrZXJJbmFjdGl2ZUNvbG9yPVwibGlnaHRncmF5XCJcbiAgICAgICAgICBpdGVtcz17ZHVtbXl9XG4gICAgICAgICAgY2hpbGRQcm9wcz17e1xuICAgICAgICAgICAgYWx0OiBcImJhbm5lciBsb2dvXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB3aXRoTmF2PXtmYWxzZX1cbiAgICAgICAgLz5cbiAgICAgIDwvQmFubmVyPlxuICAgICAgPERldGFpbHM+XG4gICAgICAgIDxUaXRsZT57bmFtZX08L1RpdGxlPlxuICAgICAgICA8RmVhdHVyZXMgcmVmPXtyZWZ9IGluZGV4PXthY3RpdmVTcGVjfSBhY3RpdmU9e2ZlYXR1cmVUb3VjaGVkfT5cbiAgICAgICAgICB7ZmVhdHVyZXN9XG4gICAgICAgIDwvRmVhdHVyZXM+XG4gICAgICAgIDxQYW5lbD5cbiAgICAgICAgICA8Q1RBPkNvbXByZTwvQ1RBPlxuICAgICAgICAgIDxQdXJjaGFzZT5cbiAgICAgICAgICAgIDxSZW1vdmUgb25DbGljaz17KCkgPT4gcXR5SGFuZGxlcihcInJlbW92ZVwiKX0+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFNaW51c0NpcmNsZX0gLz5cbiAgICAgICAgICAgIDwvUmVtb3ZlPlxuICAgICAgICAgICAgPFF0eT57cXR5fTwvUXR5PlxuICAgICAgICAgICAgPEFkZCBvbkNsaWNrPXsoKSA9PiBxdHlIYW5kbGVyKFwiYWRkXCIpfT5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IC8+XG4gICAgICAgICAgICA8L0FkZD5cbiAgICAgICAgICA8L1B1cmNoYXNlPlxuICAgICAgICA8L1BhbmVsPlxuICAgICAgPC9EZXRhaWxzPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxzO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcHJvZHVjdCA9IGNvbnRleHQucXVlcnkucHJvZHVjdDtcbiAgY29uc3QgY2F0ZWdvcnkgPSBjb250ZXh0LnF1ZXJ5LmFjdGl2ZUNhdGVnb3J5O1xuICBjb25zdCBpZCA9IGNvbnRleHQucXVlcnkuaWQ7XG4gIGNvbnN0IG5hbWUgPSBjb250ZXh0LnF1ZXJ5Lm5hbWU7XG4gIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAvLyAgIGBodHRwczovL21lbGktOTk1MDkuZmlyZWJhc2Vpby5jb20vY2F0YWxvZy8ke3Byb2R1Y3R9LyR7Y2F0ZWdvcnl9LyR7aWR9Lmpzb25gXG4gIC8vICk7XG4gIC8vIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3QsXG4gICAgICBjYXRlZ29yeSxcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[product].js\n");

/***/ })

})