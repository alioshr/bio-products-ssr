webpackHotUpdate_N_E("pages/product/[product]",{

/***/ "./pages/product/[product].js":
/*!************************************!*\
  !*** ./pages/product/[product].js ***!
  \************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StyledComponents/productDetails */ \"./StyledComponents/productDetails.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _Hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Hooks/useScrollTo */ \"./Hooks/useScrollTo.js\");\n/* harmony import */ var _UI_Swipeable_Swipeable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../UI/Swipeable/Swipeable */ \"./UI/Swipeable/Swipeable.js\");\n/* harmony import */ var _Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Hooks/useWindowDimension */ \"./Hooks/useWindowDimension.js\");\n/* harmony import */ var _DB_catalog_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../DB/catalog.json */ \"./DB/catalog.json\");\nvar _DB_catalog_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../DB/catalog.json */ \"./DB/catalog.json\", 1);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/pages/product/[product].js\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar ProductDetails = function ProductDetails(_ref) {\n  _s2();\n\n  var product = _ref.product,\n      category = _ref.category,\n      id = _ref.id,\n      name = _ref.name;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      qty = _useState[0],\n      setQty = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      activeSpec = _useState2[0],\n      setActiveSpec = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      featureTouched = _useState3[0],\n      setFeatureTouched = _useState3[1];\n\n  var _use = use(),\n      _use2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_use, 2),\n      width = _use2[0],\n      height = _use2[1];\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(); //this will be replaced by an http request\n\n  var prodDetails = _DB_catalog_json__WEBPACK_IMPORTED_MODULE_8__.details[product][category][id];\n  console.log(prodDetails);\n\n  var qtyHandler = function qtyHandler(mode) {\n    if (mode === \"remove\" && qty > 1) {\n      setQty(function (qty) {\n        return qty - 1;\n      });\n    }\n\n    if (mode === \"add\") {\n      setQty(function (qty) {\n        return qty + 1;\n      });\n    }\n  };\n\n  var featureHandler = function featureHandler(index) {\n    var _s = $RefreshSig$();\n\n    index !== activeSpec && setFeatureTouched(true);\n    index === activeSpec && setFeatureTouched(function (state) {\n      return !state;\n    });\n    !featureTouched ? setTimeout(function () {\n      return window.scrollTo({\n        top: ref.current.offsetTop,\n        behavior: \"smooth\"\n      });\n    }, 500) : setTimeout(_s(function () {\n      _s();\n\n      return Object(_Hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_5__[\"useScrollTo\"])(0, 750);\n    }, \"fyxK3ETFb9geiSyxToLG+fb8BsI=\", false, function () {\n      return [_Hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_5__[\"useScrollTo\"]];\n    }), 390);\n    setActiveSpec(index);\n  };\n\n  var feats = [\"Sobre\", \"Como usar\", \"Ingredientes\", \"Reviews\"];\n  var features = feats.map(function (feature, i) {\n    return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Feature\"], {\n      index: i,\n      active: i === activeSpec && featureTouched,\n      inactive: i != activeSpec && featureTouched,\n      onClick: function onClick() {\n        return featureHandler(i);\n      },\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"FeatTitle\"], {\n      active: i === activeSpec && featureTouched,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 7\n      }\n    }, feature));\n  });\n  var dummy = [\"https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1280x1280/products/392/1235/Clarifying_gel_cleanser_front__96525.1594249352.jpg?c=2\", \"https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1280x1280/products/393/1238/Clear_Genius_Toner_Front__51597.1594249597.jpg?c=2\"];\n  return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Wrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Banner\"], {\n    maxWidth: width,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }\n  }, __jsx(_UI_Swipeable_Swipeable__WEBPACK_IMPORTED_MODULE_6__[\"Gallery\"], {\n    rowWidth: \"100%\",\n    rowHeight: \"100%\",\n    markerActiveColor: \"orange\",\n    markerInactiveColor: \"lightgray\",\n    items: dummy,\n    childProps: {\n      alt: \"banner logo\"\n    },\n    withNav: false,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Details\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }, name), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Features\"], {\n    ref: ref,\n    index: activeSpec,\n    active: featureTouched,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }, features), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Panel\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"CTA\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 11\n    }\n  }, \"Compre\"), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Purchase\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 11\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Remove\"], {\n    onClick: function onClick() {\n      return qtyHandler(\"remove\");\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faMinusCircle\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 15\n    }\n  })), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Qty\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }, qty), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Add\"], {\n    onClick: function onClick() {\n      return qtyHandler(\"add\");\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faPlusCircle\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 15\n    }\n  }))))));\n};\n\n_s2(ProductDetails, \"ddKIo/0V3J0zS+oNracBcl90fMM=\");\n\n_c = ProductDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bcHJvZHVjdF0uanM/Y2E1YSJdLCJuYW1lcyI6WyJQcm9kdWN0RGV0YWlscyIsInByb2R1Y3QiLCJjYXRlZ29yeSIsImlkIiwibmFtZSIsInVzZVN0YXRlIiwicXR5Iiwic2V0UXR5IiwiYWN0aXZlU3BlYyIsInNldEFjdGl2ZVNwZWMiLCJmZWF0dXJlVG91Y2hlZCIsInNldEZlYXR1cmVUb3VjaGVkIiwidXNlIiwid2lkdGgiLCJoZWlnaHQiLCJyZWYiLCJ1c2VSZWYiLCJwcm9kRGV0YWlscyIsIkZlYXR1cmVzREIiLCJkZXRhaWxzIiwiY29uc29sZSIsImxvZyIsInF0eUhhbmRsZXIiLCJtb2RlIiwiZmVhdHVyZUhhbmRsZXIiLCJpbmRleCIsInN0YXRlIiwic2V0VGltZW91dCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiY3VycmVudCIsIm9mZnNldFRvcCIsImJlaGF2aW9yIiwidXNlU2Nyb2xsVG8iLCJmZWF0cyIsImZlYXR1cmVzIiwibWFwIiwiZmVhdHVyZSIsImkiLCJkdW1teSIsImFsdCIsImZhTWludXNDaXJjbGUiLCJmYVBsdXNDaXJjbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQXFDO0FBQUE7O0FBQUEsTUFBbENDLE9BQWtDLFFBQWxDQSxPQUFrQztBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFmQyxFQUFlLFFBQWZBLEVBQWU7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ3BDQyxzREFBUSxDQUFDLENBQUQsQ0FENEI7QUFBQSxNQUNuREMsR0FEbUQ7QUFBQSxNQUM5Q0MsTUFEOEM7O0FBQUEsbUJBRXRCRixzREFBUSxDQUFDLENBQUQsQ0FGYztBQUFBLE1BRW5ERyxVQUZt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QUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1wQyxHQUFOLENBSkYsRUFLRSxNQUFDLG9FQUFEO0FBQUssV0FBTyxFQUFFO0FBQUEsYUFBTWdCLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUEsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVxQiw4RUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTEYsQ0FGRixDQUxGLENBZEYsQ0FERjtBQW1DRCxDQXhGRDs7SUFBTTNDLGM7O0tBQUFBLGM7O0FBMEZTQSw2RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3QvW3Byb2R1Y3RdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFdyYXBwZXIsXG4gIEJhbm5lcixcbiAgRGV0YWlscyxcbiAgVGl0bGUsXG4gIEZlYXR1cmVzLFxuICBGZWF0dXJlLFxuICBQYW5lbCxcbiAgQWRkLFxuICBSZW1vdmUsXG4gIFF0eSxcbiAgQ1RBLFxuICBQdXJjaGFzZSxcbiAgRmVhdFRpdGxlLFxufSBmcm9tIFwiLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9wcm9kdWN0RGV0YWlsc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFQbHVzQ2lyY2xlLCBmYU1pbnVzQ2lyY2xlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgdXNlU2Nyb2xsVG8gfSBmcm9tIFwiLi4vLi4vSG9va3MvdXNlU2Nyb2xsVG9cIjtcbmltcG9ydCB7IEdhbGxlcnkgfSBmcm9tIFwiLi4vLi4vVUkvU3dpcGVhYmxlL1N3aXBlYWJsZVwiO1xuaW1wb3J0IHt1c2VXaW5kb3dEaW1lbnNpb259IGZyb20gJy4uLy4uL0hvb2tzL3VzZVdpbmRvd0RpbWVuc2lvbidcbmltcG9ydCBGZWF0dXJlc0RCIGZyb20gXCIuLi8uLi9EQi9jYXRhbG9nLmpzb25cIjtcblxuY29uc3QgUHJvZHVjdERldGFpbHMgPSAoeyBwcm9kdWN0LCBjYXRlZ29yeSwgaWQsIG5hbWUgfSkgPT4ge1xuICBjb25zdCBbcXR5LCBzZXRRdHldID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFthY3RpdmVTcGVjLCBzZXRBY3RpdmVTcGVjXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZmVhdHVyZVRvdWNoZWQsIHNldEZlYXR1cmVUb3VjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dpZHRoLCBoZWlnaHRdID0gdXNlKCk7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xuXG4gIC8vdGhpcyB3aWxsIGJlIHJlcGxhY2VkIGJ5IGFuIGh0dHAgcmVxdWVzdFxuICBjb25zdCBwcm9kRGV0YWlscyA9IEZlYXR1cmVzREIuZGV0YWlsc1twcm9kdWN0XVtjYXRlZ29yeV1baWRdO1xuICBjb25zb2xlLmxvZyhwcm9kRGV0YWlscyk7XG5cbiAgY29uc3QgcXR5SGFuZGxlciA9IChtb2RlKSA9PiB7XG4gICAgaWYgKG1vZGUgPT09IFwicmVtb3ZlXCIgJiYgcXR5ID4gMSkge1xuICAgICAgc2V0UXR5KChxdHkpID0+IHF0eSAtIDEpO1xuICAgIH1cbiAgICBpZiAobW9kZSA9PT0gXCJhZGRcIikge1xuICAgICAgc2V0UXR5KChxdHkpID0+IHF0eSArIDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmZWF0dXJlSGFuZGxlciA9IChpbmRleCkgPT4ge1xuICAgIGluZGV4ICE9PSBhY3RpdmVTcGVjICYmIHNldEZlYXR1cmVUb3VjaGVkKHRydWUpO1xuICAgIGluZGV4ID09PSBhY3RpdmVTcGVjICYmIHNldEZlYXR1cmVUb3VjaGVkKChzdGF0ZSkgPT4gIXN0YXRlKTtcbiAgICAhZmVhdHVyZVRvdWNoZWRcbiAgICAgID8gc2V0VGltZW91dChcbiAgICAgICAgICAoKSA9PlxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiByZWYuY3VycmVudC5vZmZzZXRUb3AsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pLFxuICAgICAgICAgIDUwMFxuICAgICAgICApXG4gICAgICA6IHNldFRpbWVvdXQoKCkgPT4gdXNlU2Nyb2xsVG8oMCwgNzUwKSwgMzkwKTtcbiAgICBzZXRBY3RpdmVTcGVjKGluZGV4KTtcbiAgfTtcblxuICBjb25zdCBmZWF0cyA9IFtcIlNvYnJlXCIsIFwiQ29tbyB1c2FyXCIsIFwiSW5ncmVkaWVudGVzXCIsIFwiUmV2aWV3c1wiXTtcbiAgY29uc3QgZmVhdHVyZXMgPSBmZWF0cy5tYXAoKGZlYXR1cmUsIGkpID0+IChcbiAgICA8RmVhdHVyZVxuICAgICAgaW5kZXg9e2l9XG4gICAgICBhY3RpdmU9e2kgPT09IGFjdGl2ZVNwZWMgJiYgZmVhdHVyZVRvdWNoZWR9XG4gICAgICBpbmFjdGl2ZT17aSAhPSBhY3RpdmVTcGVjICYmIGZlYXR1cmVUb3VjaGVkfVxuICAgICAgb25DbGljaz17KCkgPT4gZmVhdHVyZUhhbmRsZXIoaSl9XG4gICAgICBrZXk9e2l9XG4gICAgPlxuICAgICAgPEZlYXRUaXRsZSBhY3RpdmU9e2kgPT09IGFjdGl2ZVNwZWMgJiYgZmVhdHVyZVRvdWNoZWR9PlxuICAgICAgICB7ZmVhdHVyZX1cbiAgICAgIDwvRmVhdFRpdGxlPlxuICAgIDwvRmVhdHVyZT5cbiAgKSk7XG5cbiAgY29uc3QgZHVtbXkgPSBbXG4gICAgYGh0dHBzOi8vY2RuMTEuYmlnY29tbWVyY2UuY29tL3MtOXA4ODlyeHBrYi9pbWFnZXMvc3RlbmNpbC8xMjgweDEyODAvcHJvZHVjdHMvMzkyLzEyMzUvQ2xhcmlmeWluZ19nZWxfY2xlYW5zZXJfZnJvbnRfXzk2NTI1LjE1OTQyNDkzNTIuanBnP2M9MmAsXG4gICAgYGh0dHBzOi8vY2RuMTEuYmlnY29tbWVyY2UuY29tL3MtOXA4ODlyeHBrYi9pbWFnZXMvc3RlbmNpbC8xMjgweDEyODAvcHJvZHVjdHMvMzkzLzEyMzgvQ2xlYXJfR2VuaXVzX1RvbmVyX0Zyb250X181MTU5Ny4xNTk0MjQ5NTk3LmpwZz9jPTJgLFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8QmFubmVyIG1heFdpZHRoPXt3aWR0aH0+XG4gICAgICAgIDxHYWxsZXJ5XG4gICAgICAgICAgcm93V2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICByb3dIZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICBtYXJrZXJBY3RpdmVDb2xvcj1cIm9yYW5nZVwiXG4gICAgICAgICAgbWFya2VySW5hY3RpdmVDb2xvcj1cImxpZ2h0Z3JheVwiXG4gICAgICAgICAgaXRlbXM9e2R1bW15fVxuICAgICAgICAgIGNoaWxkUHJvcHM9e3tcbiAgICAgICAgICAgIGFsdDogXCJiYW5uZXIgbG9nb1wiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgd2l0aE5hdj17ZmFsc2V9XG4gICAgICAgIC8+XG4gICAgICA8L0Jhbm5lcj5cbiAgICAgIDxEZXRhaWxzPlxuICAgICAgICA8VGl0bGU+e25hbWV9PC9UaXRsZT5cbiAgICAgICAgPEZlYXR1cmVzIHJlZj17cmVmfSBpbmRleD17YWN0aXZlU3BlY30gYWN0aXZlPXtmZWF0dXJlVG91Y2hlZH0+XG4gICAgICAgICAge2ZlYXR1cmVzfVxuICAgICAgICA8L0ZlYXR1cmVzPlxuICAgICAgICA8UGFuZWw+XG4gICAgICAgICAgPENUQT5Db21wcmU8L0NUQT5cbiAgICAgICAgICA8UHVyY2hhc2U+XG4gICAgICAgICAgICA8UmVtb3ZlIG9uQ2xpY2s9eygpID0+IHF0eUhhbmRsZXIoXCJyZW1vdmVcIil9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTWludXNDaXJjbGV9IC8+XG4gICAgICAgICAgICA8L1JlbW92ZT5cbiAgICAgICAgICAgIDxRdHk+e3F0eX08L1F0eT5cbiAgICAgICAgICAgIDxBZGQgb25DbGljaz17KCkgPT4gcXR5SGFuZGxlcihcImFkZFwiKX0+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQbHVzQ2lyY2xlfSAvPlxuICAgICAgICAgICAgPC9BZGQ+XG4gICAgICAgICAgPC9QdXJjaGFzZT5cbiAgICAgICAgPC9QYW5lbD5cbiAgICAgIDwvRGV0YWlscz5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlscztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHByb2R1Y3QgPSBjb250ZXh0LnF1ZXJ5LnByb2R1Y3Q7XG4gIGNvbnN0IGNhdGVnb3J5ID0gY29udGV4dC5xdWVyeS5hY3RpdmVDYXRlZ29yeTtcbiAgY29uc3QgaWQgPSBjb250ZXh0LnF1ZXJ5LmlkO1xuICBjb25zdCBuYW1lID0gY29udGV4dC5xdWVyeS5uYW1lO1xuICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgLy8gICBgaHR0cHM6Ly9tZWxpLTk5NTA5LmZpcmViYXNlaW8uY29tL2NhdGFsb2cvJHtwcm9kdWN0fS8ke2NhdGVnb3J5fS8ke2lkfS5qc29uYFxuICAvLyApO1xuICAvLyBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0LFxuICAgICAgY2F0ZWdvcnksXG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/[product].js\n");

/***/ })

})