webpackHotUpdate_N_E("pages/product/[product]",{

/***/ "./pages/product/[product].js":
/*!************************************!*\
  !*** ./pages/product/[product].js ***!
  \************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../StyledComponents/productDetails */ \"./StyledComponents/productDetails.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _Hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Hooks/useScrollTo */ \"./Hooks/useScrollTo.js\");\n/* harmony import */ var _UI_Swipeable_Swipeable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../UI/Swipeable/Swipeable */ \"./UI/Swipeable/Swipeable.js\");\n/* harmony import */ var _Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Hooks/useClientWindow */ \"./Hooks/useClientWindow.js\");\n/* harmony import */ var _DB_catalog_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../DB/catalog.json */ \"./DB/catalog.json\");\nvar _DB_catalog_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../DB/catalog.json */ \"./DB/catalog.json\", 1);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/pages/product/[product].js\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar ProductDetails = function ProductDetails(_ref) {\n  _s2();\n\n  var product = _ref.product,\n      category = _ref.category,\n      id = _ref.id,\n      name = _ref.name;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      qty = _useState[0],\n      setQty = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      activeSpec = _useState2[0],\n      setActiveSpec = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      featureTouched = _useState3[0],\n      setFeatureTouched = _useState3[1];\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var window = Object(_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_6__[\"useClientWindow\"])(); //this will be replaced by an http request\n\n  var prodDetails = _DB_catalog_json__WEBPACK_IMPORTED_MODULE_7__.details[product][category][id];\n  console.log(window === null || window === void 0 ? void 0 : window.outerWidth);\n\n  var qtyHandler = function qtyHandler(mode) {\n    if (mode === \"remove\" && qty > 1) {\n      setQty(function (qty) {\n        return qty - 1;\n      });\n    }\n\n    if (mode === \"add\") {\n      setQty(function (qty) {\n        return qty + 1;\n      });\n    }\n  };\n\n  var featureHandler = function featureHandler(index) {\n    var _s = $RefreshSig$();\n\n    index !== activeSpec && setFeatureTouched(true);\n    index === activeSpec && setFeatureTouched(function (state) {\n      return !state;\n    });\n    !featureTouched ? setTimeout(function () {\n      return window.scrollTo({\n        top: ref.current.offsetTop,\n        behavior: \"smooth\"\n      });\n    }, 500) : setTimeout(_s(function () {\n      _s();\n\n      return Object(_Hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_4__[\"useScrollTo\"])(0, 750);\n    }, \"fyxK3ETFb9geiSyxToLG+fb8BsI=\", false, function () {\n      return [_Hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_4__[\"useScrollTo\"]];\n    }), 390);\n    setActiveSpec(index);\n  };\n\n  var feats = [\"Sobre\", \"Como usar\", \"Ingredientes\", \"Reviews\"];\n  var features = feats.map(function (feature, i) {\n    return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Feature\"], {\n      index: i,\n      active: i === activeSpec && featureTouched,\n      inactive: i != activeSpec && featureTouched,\n      onClick: function onClick() {\n        return featureHandler(i);\n      },\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"FeatTitle\"], {\n      active: i === activeSpec && featureTouched,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 7\n      }\n    }, feature));\n  });\n  var dummy = [\"https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1280x1280/products/392/1235/Clarifying_gel_cleanser_front__96525.1594249352.jpg?c=2\", \"https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1280x1280/products/393/1238/Clear_Genius_Toner_Front__51597.1594249597.jpg?c=2\"];\n  return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Wrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Banner\"], {\n    maxWidth: window === null || window === void 0 ? void 0 : window.outerWidth,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }\n  }, __jsx(_UI_Swipeable_Swipeable__WEBPACK_IMPORTED_MODULE_5__[\"Gallery\"], {\n    rowWidth: \"100%\",\n    rowHeight: \"100%\",\n    markerActiveColor: \"orange\",\n    markerInactiveColor: \"lightgray\",\n    items: dummy,\n    childProps: {\n      alt: \"banner logo\"\n    },\n    withNav: false,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Details\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }, name), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Features\"], {\n    ref: ref,\n    index: activeSpec,\n    active: featureTouched,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }, features), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Panel\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"CTA\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 11\n    }\n  }, \"Compre\"), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Purchase\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 11\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Remove\"], {\n    onClick: function onClick() {\n      return qtyHandler(\"remove\");\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faMinusCircle\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 15\n    }\n  })), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Qty\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }, qty), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Add\"], {\n    onClick: function onClick() {\n      return qtyHandler(\"add\");\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faPlusCircle\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 15\n    }\n  }))))));\n};\n\n_s2(ProductDetails, \"WD71Fhjj6iieSp3Qy3aPDx1KugI=\", false, function () {\n  return [_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_6__[\"useClientWindow\"]];\n});\n\n_c = ProductDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bcHJvZHVjdF0uanM/Y2E1YSJdLCJuYW1lcyI6WyJQcm9kdWN0RGV0YWlscyIsInByb2R1Y3QiLCJjYXRlZ29yeSIsImlkIiwibmFtZSIsInVzZVN0YXRlIiwicXR5Iiwic2V0UXR5IiwiYWN0aXZlU3BlYyIsInNldEFjdGl2ZVNwZWMiLCJmZWF0dXJlVG91Y2hlZCIsInNldEZlYXR1cmVUb3VjaGVkIiwicmVmIiwidXNlUmVmIiwid2luZG93IiwidXNlQ2xpZW50V2luZG93IiwicHJvZERldGFpbHMiLCJGZWF0dXJlc0RCIiwiZGV0YWlscyIsImNvbnNvbGUiLCJsb2ciLCJvdXRlcldpZHRoIiwicXR5SGFuZGxlciIsIm1vZGUiLCJmZWF0dXJlSGFuZGxlciIsImluZGV4Iiwic3RhdGUiLCJzZXRUaW1lb3V0Iiwic2Nyb2xsVG8iLCJ0b3AiLCJjdXJyZW50Iiwib2Zmc2V0VG9wIiwiYmVoYXZpb3IiLCJ1c2VTY3JvbGxUbyIsImZlYXRzIiwiZmVhdHVyZXMiLCJtYXAiLCJmZWF0dXJlIiwiaSIsImR1bW15IiwiYWx0IiwiZmFNaW51c0NpcmNsZSIsImZhUGx1c0NpcmNsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBcUM7QUFBQTs7QUFBQSxNQUFsQ0MsT0FBa0MsUUFBbENBLE9BQWtDO0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQWZDLEVBQWUsUUFBZkEsRUFBZTtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDcENDLHNEQUFRLENBQUMsQ0FBRCxDQUQ0QjtBQUFBLE1BQ25EQyxHQURtRDtBQUFBLE1BQzlDQyxNQUQ4Qzs7QUFBQSxtQkFFdEJGLHNEQUFRLENBQUMsQ0FBRCxDQUZjO0FBQUEsTUFFbkRH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QSxJQURGLENBREYsRUFJRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTW5DLEdBQU4sQ0FKRixFQUtFLE1BQUMsb0VBQUQ7QUFBSyxXQUFPLEVBQUU7QUFBQSxhQUFNZ0IsVUFBVSxDQUFDLEtBQUQsQ0FBaEI7QUFBQSxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRW9CLDhFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixDQUZGLENBTEYsQ0FkRixDQURGO0FBbUNELENBeEZEOztJQUFNMUMsYztVQUtXZSxzRTs7O0tBTFhmLGM7O0FBMEZTQSw2RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3QvW3Byb2R1Y3RdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFdyYXBwZXIsXG4gIEJhbm5lcixcbiAgRGV0YWlscyxcbiAgVGl0bGUsXG4gIEZlYXR1cmVzLFxuICBGZWF0dXJlLFxuICBQYW5lbCxcbiAgQWRkLFxuICBSZW1vdmUsXG4gIFF0eSxcbiAgQ1RBLFxuICBQdXJjaGFzZSxcbiAgRmVhdFRpdGxlLFxufSBmcm9tIFwiLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9wcm9kdWN0RGV0YWlsc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFQbHVzQ2lyY2xlLCBmYU1pbnVzQ2lyY2xlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgdXNlU2Nyb2xsVG8gfSBmcm9tIFwiLi4vLi4vSG9va3MvdXNlU2Nyb2xsVG9cIjtcbmltcG9ydCB7IEdhbGxlcnkgfSBmcm9tIFwiLi4vLi4vVUkvU3dpcGVhYmxlL1N3aXBlYWJsZVwiO1xuaW1wb3J0IHt1c2VDbGllbnRXaW5kb3d9IGZyb20gJy4uLy4uL0hvb2tzL3VzZUNsaWVudFdpbmRvdydcbmltcG9ydCBGZWF0dXJlc0RCIGZyb20gXCIuLi8uLi9EQi9jYXRhbG9nLmpzb25cIjtcblxuY29uc3QgUHJvZHVjdERldGFpbHMgPSAoeyBwcm9kdWN0LCBjYXRlZ29yeSwgaWQsIG5hbWUgfSkgPT4ge1xuICBjb25zdCBbcXR5LCBzZXRRdHldID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFthY3RpdmVTcGVjLCBzZXRBY3RpdmVTcGVjXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZmVhdHVyZVRvdWNoZWQsIHNldEZlYXR1cmVUb3VjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHdpbmRvdyA9IHVzZUNsaWVudFdpbmRvdygpO1xuXG4gIC8vdGhpcyB3aWxsIGJlIHJlcGxhY2VkIGJ5IGFuIGh0dHAgcmVxdWVzdFxuICBjb25zdCBwcm9kRGV0YWlscyA9IEZlYXR1cmVzREIuZGV0YWlsc1twcm9kdWN0XVtjYXRlZ29yeV1baWRdO1xuICBjb25zb2xlLmxvZyh3aW5kb3c/Lm91dGVyV2lkdGgpO1xuXG4gIGNvbnN0IHF0eUhhbmRsZXIgPSAobW9kZSkgPT4ge1xuICAgIGlmIChtb2RlID09PSBcInJlbW92ZVwiICYmIHF0eSA+IDEpIHtcbiAgICAgIHNldFF0eSgocXR5KSA9PiBxdHkgLSAxKTtcbiAgICB9XG4gICAgaWYgKG1vZGUgPT09IFwiYWRkXCIpIHtcbiAgICAgIHNldFF0eSgocXR5KSA9PiBxdHkgKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmVhdHVyZUhhbmRsZXIgPSAoaW5kZXgpID0+IHtcbiAgICBpbmRleCAhPT0gYWN0aXZlU3BlYyAmJiBzZXRGZWF0dXJlVG91Y2hlZCh0cnVlKTtcbiAgICBpbmRleCA9PT0gYWN0aXZlU3BlYyAmJiBzZXRGZWF0dXJlVG91Y2hlZCgoc3RhdGUpID0+ICFzdGF0ZSk7XG4gICAgIWZlYXR1cmVUb3VjaGVkXG4gICAgICA/IHNldFRpbWVvdXQoXG4gICAgICAgICAgKCkgPT5cbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogcmVmLmN1cnJlbnQub2Zmc2V0VG9wLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KSxcbiAgICAgICAgICA1MDBcbiAgICAgICAgKVxuICAgICAgOiBzZXRUaW1lb3V0KCgpID0+IHVzZVNjcm9sbFRvKDAsIDc1MCksIDM5MCk7XG4gICAgc2V0QWN0aXZlU3BlYyhpbmRleCk7XG4gIH07XG5cbiAgY29uc3QgZmVhdHMgPSBbXCJTb2JyZVwiLCBcIkNvbW8gdXNhclwiLCBcIkluZ3JlZGllbnRlc1wiLCBcIlJldmlld3NcIl07XG4gIGNvbnN0IGZlYXR1cmVzID0gZmVhdHMubWFwKChmZWF0dXJlLCBpKSA9PiAoXG4gICAgPEZlYXR1cmVcbiAgICAgIGluZGV4PXtpfVxuICAgICAgYWN0aXZlPXtpID09PSBhY3RpdmVTcGVjICYmIGZlYXR1cmVUb3VjaGVkfVxuICAgICAgaW5hY3RpdmU9e2kgIT0gYWN0aXZlU3BlYyAmJiBmZWF0dXJlVG91Y2hlZH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IGZlYXR1cmVIYW5kbGVyKGkpfVxuICAgICAga2V5PXtpfVxuICAgID5cbiAgICAgIDxGZWF0VGl0bGUgYWN0aXZlPXtpID09PSBhY3RpdmVTcGVjICYmIGZlYXR1cmVUb3VjaGVkfT5cbiAgICAgICAge2ZlYXR1cmV9XG4gICAgICA8L0ZlYXRUaXRsZT5cbiAgICA8L0ZlYXR1cmU+XG4gICkpO1xuXG4gIGNvbnN0IGR1bW15ID0gW1xuICAgIGBodHRwczovL2NkbjExLmJpZ2NvbW1lcmNlLmNvbS9zLTlwODg5cnhwa2IvaW1hZ2VzL3N0ZW5jaWwvMTI4MHgxMjgwL3Byb2R1Y3RzLzM5Mi8xMjM1L0NsYXJpZnlpbmdfZ2VsX2NsZWFuc2VyX2Zyb250X185NjUyNS4xNTk0MjQ5MzUyLmpwZz9jPTJgLFxuICAgIGBodHRwczovL2NkbjExLmJpZ2NvbW1lcmNlLmNvbS9zLTlwODg5cnhwa2IvaW1hZ2VzL3N0ZW5jaWwvMTI4MHgxMjgwL3Byb2R1Y3RzLzM5My8xMjM4L0NsZWFyX0dlbml1c19Ub25lcl9Gcm9udF9fNTE1OTcuMTU5NDI0OTU5Ny5qcGc/Yz0yYCxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyID5cbiAgICAgIDxCYW5uZXIgbWF4V2lkdGg9e3dpbmRvdz8ub3V0ZXJXaWR0aH0+XG4gICAgICAgIDxHYWxsZXJ5XG4gICAgICAgICAgcm93V2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICByb3dIZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICBtYXJrZXJBY3RpdmVDb2xvcj1cIm9yYW5nZVwiXG4gICAgICAgICAgbWFya2VySW5hY3RpdmVDb2xvcj1cImxpZ2h0Z3JheVwiXG4gICAgICAgICAgaXRlbXM9e2R1bW15fVxuICAgICAgICAgIGNoaWxkUHJvcHM9e3tcbiAgICAgICAgICAgIGFsdDogXCJiYW5uZXIgbG9nb1wiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgd2l0aE5hdj17ZmFsc2V9XG4gICAgICAgIC8+XG4gICAgICA8L0Jhbm5lcj5cbiAgICAgIDxEZXRhaWxzPlxuICAgICAgICA8VGl0bGU+e25hbWV9PC9UaXRsZT5cbiAgICAgICAgPEZlYXR1cmVzIHJlZj17cmVmfSBpbmRleD17YWN0aXZlU3BlY30gYWN0aXZlPXtmZWF0dXJlVG91Y2hlZH0+XG4gICAgICAgICAge2ZlYXR1cmVzfVxuICAgICAgICA8L0ZlYXR1cmVzPlxuICAgICAgICA8UGFuZWw+XG4gICAgICAgICAgPENUQT5Db21wcmU8L0NUQT5cbiAgICAgICAgICA8UHVyY2hhc2U+XG4gICAgICAgICAgICA8UmVtb3ZlIG9uQ2xpY2s9eygpID0+IHF0eUhhbmRsZXIoXCJyZW1vdmVcIil9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTWludXNDaXJjbGV9IC8+XG4gICAgICAgICAgICA8L1JlbW92ZT5cbiAgICAgICAgICAgIDxRdHk+e3F0eX08L1F0eT5cbiAgICAgICAgICAgIDxBZGQgb25DbGljaz17KCkgPT4gcXR5SGFuZGxlcihcImFkZFwiKX0+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQbHVzQ2lyY2xlfSAvPlxuICAgICAgICAgICAgPC9BZGQ+XG4gICAgICAgICAgPC9QdXJjaGFzZT5cbiAgICAgICAgPC9QYW5lbD5cbiAgICAgIDwvRGV0YWlscz5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlscztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHByb2R1Y3QgPSBjb250ZXh0LnF1ZXJ5LnByb2R1Y3Q7XG4gIGNvbnN0IGNhdGVnb3J5ID0gY29udGV4dC5xdWVyeS5hY3RpdmVDYXRlZ29yeTtcbiAgY29uc3QgaWQgPSBjb250ZXh0LnF1ZXJ5LmlkO1xuICBjb25zdCBuYW1lID0gY29udGV4dC5xdWVyeS5uYW1lO1xuICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgLy8gICBgaHR0cHM6Ly9tZWxpLTk5NTA5LmZpcmViYXNlaW8uY29tL2NhdGFsb2cvJHtwcm9kdWN0fS8ke2NhdGVnb3J5fS8ke2lkfS5qc29uYFxuICAvLyApO1xuICAvLyBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0LFxuICAgICAgY2F0ZWdvcnksXG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/[product].js\n");

/***/ })

})