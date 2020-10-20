webpackHotUpdate_N_E("pages/product/[product]",{

/***/ "./pages/product/[product].js":
/*!************************************!*\
  !*** ./pages/product/[product].js ***!
  \************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../StyledComponents/productDetails */ \"./StyledComponents/productDetails.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _Hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Hooks/useScrollTo */ \"./Hooks/useScrollTo.js\");\n/* harmony import */ var _UI_Swipeable_Swipeable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../UI/Swipeable/Swipeable */ \"./UI/Swipeable/Swipeable.js\");\n/* harmony import */ var _Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Hooks/useClientWindow */ \"./Hooks/useClientWindow.js\");\n/* harmony import */ var _DB_catalog_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../DB/catalog.json */ \"./DB/catalog.json\");\nvar _DB_catalog_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../DB/catalog.json */ \"./DB/catalog.json\", 1);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/pages/product/[product].js\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar ProductDetails = function ProductDetails(_ref) {\n  _s2();\n\n  var product = _ref.product,\n      category = _ref.category,\n      id = _ref.id,\n      name = _ref.name;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      qty = _useState[0],\n      setQty = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      activeSpec = _useState2[0],\n      setActiveSpec = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      featureTouched = _useState3[0],\n      setFeatureTouched = _useState3[1];\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var window = Object(_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_6__[\"useClientWindow\"])(); //this will be replaced by an http request\n\n  var prodDetails = _DB_catalog_json__WEBPACK_IMPORTED_MODULE_7__.details[product][category][id];\n  console.log(prodDetails);\n\n  var qtyHandler = function qtyHandler(mode) {\n    if (mode === \"remove\" && qty > 1) {\n      setQty(function (qty) {\n        return qty - 1;\n      });\n    }\n\n    if (mode === \"add\") {\n      setQty(function (qty) {\n        return qty + 1;\n      });\n    }\n  };\n\n  var featureHandler = function featureHandler(index) {\n    var _s = $RefreshSig$();\n\n    index !== activeSpec && setFeatureTouched(true);\n    index === activeSpec && setFeatureTouched(function (state) {\n      return !state;\n    });\n    !featureTouched ? setTimeout(function () {\n      return window.scrollTo({\n        top: ref.current.offsetTop,\n        behavior: \"smooth\"\n      });\n    }, 500) : setTimeout(_s(function () {\n      _s();\n\n      return Object(_Hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_4__[\"useScrollTo\"])(0, 750);\n    }, \"fyxK3ETFb9geiSyxToLG+fb8BsI=\", false, function () {\n      return [_Hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_4__[\"useScrollTo\"]];\n    }), 390);\n    setActiveSpec(index);\n  };\n\n  var feats = [\"Sobre\", \"Como usar\", \"Ingredientes\", \"Reviews\"];\n  var features = feats.map(function (feature, i) {\n    return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Feature\"], {\n      index: i,\n      active: i === activeSpec && featureTouched,\n      inactive: i != activeSpec && featureTouched,\n      onClick: function onClick() {\n        return featureHandler(i);\n      },\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"FeatTitle\"], {\n      active: i === activeSpec && featureTouched,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 7\n      }\n    }, feature));\n  });\n  var dummy = [\"https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1280x1280/products/392/1235/Clarifying_gel_cleanser_front__96525.1594249352.jpg?c=2\", \"https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1280x1280/products/393/1238/Clear_Genius_Toner_Front__51597.1594249597.jpg?c=2\"];\n  return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Wrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Banner\"], {\n    maxWidth: window === null || window === void 0 ? void 0 : window.outerWidth,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }\n  }, __jsx(_UI_Swipeable_Swipeable__WEBPACK_IMPORTED_MODULE_5__[\"Gallery\"], {\n    rowWidth: \"100%\",\n    rowHeight: \"100%\",\n    markerActiveColor: \"orange\",\n    markerInactiveColor: \"lightgray\",\n    items: dummy,\n    childProps: {\n      alt: \"banner logo\"\n    },\n    withNav: false,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Details\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }, name), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Features\"], {\n    ref: ref,\n    index: activeSpec,\n    active: featureTouched,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }, features), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Panel\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"CTA\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 11\n    }\n  }, \"Compre\"), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Purchase\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 11\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Remove\"], {\n    onClick: function onClick() {\n      return qtyHandler(\"remove\");\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faMinusCircle\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 15\n    }\n  })), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Qty\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }, qty), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Add\"], {\n    onClick: function onClick() {\n      return qtyHandler(\"add\");\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faPlusCircle\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 15\n    }\n  }))))));\n};\n\n_s2(ProductDetails, \"WD71Fhjj6iieSp3Qy3aPDx1KugI=\", false, function () {\n  return [_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_6__[\"useClientWindow\"]];\n});\n\n_c = ProductDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bcHJvZHVjdF0uanM/Y2E1YSJdLCJuYW1lcyI6WyJQcm9kdWN0RGV0YWlscyIsInByb2R1Y3QiLCJjYXRlZ29yeSIsImlkIiwibmFtZSIsInVzZVN0YXRlIiwicXR5Iiwic2V0UXR5IiwiYWN0aXZlU3BlYyIsInNldEFjdGl2ZVNwZWMiLCJmZWF0dXJlVG91Y2hlZCIsInNldEZlYXR1cmVUb3VjaGVkIiwicmVmIiwidXNlUmVmIiwid2luZG93IiwidXNlQ2xpZW50V2luZG93IiwicHJvZERldGFpbHMiLCJGZWF0dXJlc0RCIiwiZGV0YWlscyIsImNvbnNvbGUiLCJsb2ciLCJxdHlIYW5kbGVyIiwibW9kZSIsImZlYXR1cmVIYW5kbGVyIiwiaW5kZXgiLCJzdGF0ZSIsInNldFRpbWVvdXQiLCJzY3JvbGxUbyIsInRvcCIsImN1cnJlbnQiLCJvZmZzZXRUb3AiLCJiZWhhdmlvciIsInVzZVNjcm9sbFRvIiwiZmVhdHMiLCJmZWF0dXJlcyIsIm1hcCIsImZlYXR1cmUiLCJpIiwiZHVtbXkiLCJvdXRlcldpZHRoIiwiYWx0IiwiZmFNaW51c0NpcmNsZSIsImZhUGx1c0NpcmNsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBcUM7QUFBQTs7QUFBQSxNQUFsQ0MsT0FBa0MsUUFBbENBLE9BQWtDO0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQWZDLEVBQWUsUUFBZkEsRUFBZTtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDcENDLHNEQUFRLENBQUMsQ0FBRCxDQUQ0QjtBQUFBLE1BQ25EQyxHQURtRDtBQUFBLE1BQzlDQyxNQUQ4Qzs7QUFBQSxtQkFFdEJGLHNEQUFRLENBQUMsQ0FBRCxDQUZjO0FBQUEsTUFFbkRH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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1uQyxHQUFOLENBSkYsRUFLRSxNQUFDLG9FQUFEO0FBQUssV0FBTyxFQUFFO0FBQUEsYUFBTWUsVUFBVSxDQUFDLEtBQUQsQ0FBaEI7QUFBQSxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRXFCLDhFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixDQUZGLENBTEYsQ0FkRixDQURGO0FBbUNELENBeEZEOztJQUFNMUMsYztVQUtXZSxzRTs7O0tBTFhmLGM7O0FBMEZTQSw2RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3QvW3Byb2R1Y3RdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFdyYXBwZXIsXG4gIEJhbm5lcixcbiAgRGV0YWlscyxcbiAgVGl0bGUsXG4gIEZlYXR1cmVzLFxuICBGZWF0dXJlLFxuICBQYW5lbCxcbiAgQWRkLFxuICBSZW1vdmUsXG4gIFF0eSxcbiAgQ1RBLFxuICBQdXJjaGFzZSxcbiAgRmVhdFRpdGxlLFxufSBmcm9tIFwiLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9wcm9kdWN0RGV0YWlsc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFQbHVzQ2lyY2xlLCBmYU1pbnVzQ2lyY2xlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgdXNlU2Nyb2xsVG8gfSBmcm9tIFwiLi4vLi4vSG9va3MvdXNlU2Nyb2xsVG9cIjtcbmltcG9ydCB7IEdhbGxlcnkgfSBmcm9tIFwiLi4vLi4vVUkvU3dpcGVhYmxlL1N3aXBlYWJsZVwiO1xuaW1wb3J0IHt1c2VDbGllbnRXaW5kb3d9IGZyb20gJy4uLy4uL0hvb2tzL3VzZUNsaWVudFdpbmRvdydcbmltcG9ydCBGZWF0dXJlc0RCIGZyb20gXCIuLi8uLi9EQi9jYXRhbG9nLmpzb25cIjtcblxuY29uc3QgUHJvZHVjdERldGFpbHMgPSAoeyBwcm9kdWN0LCBjYXRlZ29yeSwgaWQsIG5hbWUgfSkgPT4ge1xuICBjb25zdCBbcXR5LCBzZXRRdHldID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFthY3RpdmVTcGVjLCBzZXRBY3RpdmVTcGVjXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZmVhdHVyZVRvdWNoZWQsIHNldEZlYXR1cmVUb3VjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHdpbmRvdyA9IHVzZUNsaWVudFdpbmRvdygpO1xuXG4gIC8vdGhpcyB3aWxsIGJlIHJlcGxhY2VkIGJ5IGFuIGh0dHAgcmVxdWVzdFxuICBjb25zdCBwcm9kRGV0YWlscyA9IEZlYXR1cmVzREIuZGV0YWlsc1twcm9kdWN0XVtjYXRlZ29yeV1baWRdO1xuICBjb25zb2xlLmxvZyhwcm9kRGV0YWlscyk7XG5cbiAgY29uc3QgcXR5SGFuZGxlciA9IChtb2RlKSA9PiB7XG4gICAgaWYgKG1vZGUgPT09IFwicmVtb3ZlXCIgJiYgcXR5ID4gMSkge1xuICAgICAgc2V0UXR5KChxdHkpID0+IHF0eSAtIDEpO1xuICAgIH1cbiAgICBpZiAobW9kZSA9PT0gXCJhZGRcIikge1xuICAgICAgc2V0UXR5KChxdHkpID0+IHF0eSArIDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmZWF0dXJlSGFuZGxlciA9IChpbmRleCkgPT4ge1xuICAgIGluZGV4ICE9PSBhY3RpdmVTcGVjICYmIHNldEZlYXR1cmVUb3VjaGVkKHRydWUpO1xuICAgIGluZGV4ID09PSBhY3RpdmVTcGVjICYmIHNldEZlYXR1cmVUb3VjaGVkKChzdGF0ZSkgPT4gIXN0YXRlKTtcbiAgICAhZmVhdHVyZVRvdWNoZWRcbiAgICAgID8gc2V0VGltZW91dChcbiAgICAgICAgICAoKSA9PlxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiByZWYuY3VycmVudC5vZmZzZXRUb3AsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pLFxuICAgICAgICAgIDUwMFxuICAgICAgICApXG4gICAgICA6IHNldFRpbWVvdXQoKCkgPT4gdXNlU2Nyb2xsVG8oMCwgNzUwKSwgMzkwKTtcbiAgICBzZXRBY3RpdmVTcGVjKGluZGV4KTtcbiAgfTtcblxuICBjb25zdCBmZWF0cyA9IFtcIlNvYnJlXCIsIFwiQ29tbyB1c2FyXCIsIFwiSW5ncmVkaWVudGVzXCIsIFwiUmV2aWV3c1wiXTtcbiAgY29uc3QgZmVhdHVyZXMgPSBmZWF0cy5tYXAoKGZlYXR1cmUsIGkpID0+IChcbiAgICA8RmVhdHVyZVxuICAgICAgaW5kZXg9e2l9XG4gICAgICBhY3RpdmU9e2kgPT09IGFjdGl2ZVNwZWMgJiYgZmVhdHVyZVRvdWNoZWR9XG4gICAgICBpbmFjdGl2ZT17aSAhPSBhY3RpdmVTcGVjICYmIGZlYXR1cmVUb3VjaGVkfVxuICAgICAgb25DbGljaz17KCkgPT4gZmVhdHVyZUhhbmRsZXIoaSl9XG4gICAgICBrZXk9e2l9XG4gICAgPlxuICAgICAgPEZlYXRUaXRsZSBhY3RpdmU9e2kgPT09IGFjdGl2ZVNwZWMgJiYgZmVhdHVyZVRvdWNoZWR9PlxuICAgICAgICB7ZmVhdHVyZX1cbiAgICAgIDwvRmVhdFRpdGxlPlxuICAgIDwvRmVhdHVyZT5cbiAgKSk7XG5cbiAgY29uc3QgZHVtbXkgPSBbXG4gICAgYGh0dHBzOi8vY2RuMTEuYmlnY29tbWVyY2UuY29tL3MtOXA4ODlyeHBrYi9pbWFnZXMvc3RlbmNpbC8xMjgweDEyODAvcHJvZHVjdHMvMzkyLzEyMzUvQ2xhcmlmeWluZ19nZWxfY2xlYW5zZXJfZnJvbnRfXzk2NTI1LjE1OTQyNDkzNTIuanBnP2M9MmAsXG4gICAgYGh0dHBzOi8vY2RuMTEuYmlnY29tbWVyY2UuY29tL3MtOXA4ODlyeHBrYi9pbWFnZXMvc3RlbmNpbC8xMjgweDEyODAvcHJvZHVjdHMvMzkzLzEyMzgvQ2xlYXJfR2VuaXVzX1RvbmVyX0Zyb250X181MTU5Ny4xNTk0MjQ5NTk3LmpwZz9jPTJgLFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8QmFubmVyIG1heFdpZHRoPXt3aW5kb3c/Lm91dGVyV2lkdGh9PlxuICAgICAgICA8R2FsbGVyeVxuICAgICAgICAgIHJvd1dpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgcm93SGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgbWFya2VyQWN0aXZlQ29sb3I9XCJvcmFuZ2VcIlxuICAgICAgICAgIG1hcmtlckluYWN0aXZlQ29sb3I9XCJsaWdodGdyYXlcIlxuICAgICAgICAgIGl0ZW1zPXtkdW1teX1cbiAgICAgICAgICBjaGlsZFByb3BzPXt7XG4gICAgICAgICAgICBhbHQ6IFwiYmFubmVyIGxvZ29cIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIHdpdGhOYXY9e2ZhbHNlfVxuICAgICAgICAvPlxuICAgICAgPC9CYW5uZXI+XG4gICAgICA8RGV0YWlscz5cbiAgICAgICAgPFRpdGxlPntuYW1lfTwvVGl0bGU+XG4gICAgICAgIDxGZWF0dXJlcyByZWY9e3JlZn0gaW5kZXg9e2FjdGl2ZVNwZWN9IGFjdGl2ZT17ZmVhdHVyZVRvdWNoZWR9PlxuICAgICAgICAgIHtmZWF0dXJlc31cbiAgICAgICAgPC9GZWF0dXJlcz5cbiAgICAgICAgPFBhbmVsPlxuICAgICAgICAgIDxDVEE+Q29tcHJlPC9DVEE+XG4gICAgICAgICAgPFB1cmNoYXNlPlxuICAgICAgICAgICAgPFJlbW92ZSBvbkNsaWNrPXsoKSA9PiBxdHlIYW5kbGVyKFwicmVtb3ZlXCIpfT5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYU1pbnVzQ2lyY2xlfSAvPlxuICAgICAgICAgICAgPC9SZW1vdmU+XG4gICAgICAgICAgICA8UXR5PntxdHl9PC9RdHk+XG4gICAgICAgICAgICA8QWRkIG9uQ2xpY2s9eygpID0+IHF0eUhhbmRsZXIoXCJhZGRcIil9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c0NpcmNsZX0gLz5cbiAgICAgICAgICAgIDwvQWRkPlxuICAgICAgICAgIDwvUHVyY2hhc2U+XG4gICAgICAgIDwvUGFuZWw+XG4gICAgICA8L0RldGFpbHM+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbHM7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBwcm9kdWN0ID0gY29udGV4dC5xdWVyeS5wcm9kdWN0O1xuICBjb25zdCBjYXRlZ29yeSA9IGNvbnRleHQucXVlcnkuYWN0aXZlQ2F0ZWdvcnk7XG4gIGNvbnN0IGlkID0gY29udGV4dC5xdWVyeS5pZDtcbiAgY29uc3QgbmFtZSA9IGNvbnRleHQucXVlcnkubmFtZTtcbiAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gIC8vICAgYGh0dHBzOi8vbWVsaS05OTUwOS5maXJlYmFzZWlvLmNvbS9jYXRhbG9nLyR7cHJvZHVjdH0vJHtjYXRlZ29yeX0vJHtpZH0uanNvbmBcbiAgLy8gKTtcbiAgLy8gY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdCxcbiAgICAgIGNhdGVnb3J5LFxuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[product].js\n");

/***/ })

})