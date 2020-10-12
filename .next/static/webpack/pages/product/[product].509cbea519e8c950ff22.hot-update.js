webpackHotUpdate_N_E("pages/product/[product]",{

/***/ "./pages/product/[product].js":
/*!************************************!*\
  !*** ./pages/product/[product].js ***!
  \************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../StyledComponents/productDetails */ \"./StyledComponents/productDetails.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _StyledComponents_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../StyledComponents/main */ \"./StyledComponents/main.js\");\n/* harmony import */ var _DB_catalog_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../DB/catalog.json */ \"./DB/catalog.json\");\nvar _DB_catalog_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../DB/catalog.json */ \"./DB/catalog.json\", 1);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/pages/product/[product].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar ProductDetails = function ProductDetails(_ref) {\n  _s();\n\n  var product = _ref.product,\n      category = _ref.category,\n      id = _ref.id;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      qty = _useState[0],\n      setQty = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      activeSpec = _useState2[0],\n      setActiveSpec = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      featureTouched = _useState3[0],\n      setFeatureTouched = _useState3[1];\n\n  var ProdDetails = _DB_catalog_json__WEBPACK_IMPORTED_MODULE_5__.details[product][category][id];\n\n  var qtyHandler = function qtyHandler(mode) {\n    if (mode === \"remove\" && qty > 1) {\n      setQty(function (qty) {\n        return qty - 1;\n      });\n    }\n\n    if (mode === \"add\") {\n      setQty(function (qty) {\n        return qty + 1;\n      });\n    }\n  };\n\n  var featureHandler = function featureHandler(index) {\n    index !== activeSpec && setFeatureTouched(true);\n    index === activeSpec && setFeatureTouched(function (state) {\n      return !state;\n    });\n    !featureTouched ? setTimeout(function () {\n      return window.scrollTo({\n        top: 266.8,\n        behavior: \"smooth\"\n      });\n    }, 500) : setTimeout(function () {\n      return window.scrollTo({\n        top: 0,\n        behavior: \"smooth\"\n      });\n    }, 400);\n    setActiveSpec(index);\n  };\n\n  var feats = [\"Sobre\", \"Como usar\", \"Ingredientes\", \"Reviews\"];\n  var features = feats.map(function (feature, i) {\n    return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Feature\"], {\n      index: i,\n      active: i === activeSpec && featureTouched,\n      inactive: i != activeSpec && featureTouched,\n      onClick: function onClick() {\n        return featureHandler(i);\n      },\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"FeatTitle\"], {\n      active: i === activeSpec && featureTouched,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 7\n      }\n    }, feature));\n  });\n  return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Wrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Banner\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"BannerImage\"], {\n    src: \"/DetailsTest/test.jpg\",\n    alt: \"banner logo\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, \"Caf\\xE9 Black\"), __jsx(_StyledComponents_main__WEBPACK_IMPORTED_MODULE_4__[\"Backdrop\"], {\n    style: {\n      zIndex: 1\n    },\n    forElement: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Details\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Features\"], {\n    index: activeSpec,\n    active: featureTouched,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, features), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Panel\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"CTA\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }, \"Compre\"), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Purchase\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Remove\"], {\n    onClick: function onClick() {\n      return qtyHandler(\"remove\");\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faMinusCircle\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 15\n    }\n  })), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Qty\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  }, qty), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Add\"], {\n    onClick: function onClick() {\n      return qtyHandler(\"add\");\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faPlusCircle\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 15\n    }\n  }))))));\n};\n\n_s(ProductDetails, \"v7IOQIfvG55cRg3JQEpqFk425pk=\");\n\n_c = ProductDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bcHJvZHVjdF0uanM/Y2E1YSJdLCJuYW1lcyI6WyJQcm9kdWN0RGV0YWlscyIsInByb2R1Y3QiLCJjYXRlZ29yeSIsImlkIiwidXNlU3RhdGUiLCJxdHkiLCJzZXRRdHkiLCJhY3RpdmVTcGVjIiwic2V0QWN0aXZlU3BlYyIsImZlYXR1cmVUb3VjaGVkIiwic2V0RmVhdHVyZVRvdWNoZWQiLCJQcm9kRGV0YWlscyIsIkZlYXR1cmVzREIiLCJkZXRhaWxzIiwicXR5SGFuZGxlciIsIm1vZGUiLCJmZWF0dXJlSGFuZGxlciIsImluZGV4Iiwic3RhdGUiLCJzZXRUaW1lb3V0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImZlYXRzIiwiZmVhdHVyZXMiLCJtYXAiLCJmZWF0dXJlIiwiaSIsInpJbmRleCIsImZhTWludXNDaXJjbGUiLCJmYVBsdXNDaXJjbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUErQjtBQUFBOztBQUFBLE1BQTVCQyxPQUE0QixRQUE1QkEsT0FBNEI7QUFBQSxNQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1CO0FBQUEsTUFBVEMsRUFBUyxRQUFUQSxFQUFTOztBQUFBLGtCQUM5QkMsc0RBQVEsQ0FBQyxDQUFELENBRHNCO0FBQUEsTUFDN0NDLEdBRDZDO0FBQUEsTUFDeENDLE1BRHdDOztBQUFBLG1CQUVoQkYsc0RBQVEsQ0FBQyxDQUFELENBRlE7QUFBQSxNQUU3Q0csVUFGNkM7QUFBQSxNQUVqQ0MsYUFGaUM7O0FBQUEsbUJBR1JKLHNEQUFRLENBQUMsS0FBRCxDQUhBO0FBQUEsTUFHN0NLLGNBSDZDO0FBQUEsTUFHN0JDLGlCQUg2Qjs7QUFLcEQsTUFBTUMsV0FBVyxHQUFHQyw2Q0FBVSxDQUFDQyxPQUFYLENBQW1CWixPQUFu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RSxNQUFDLHlFQUFEO0FBQVUsU0FBSyxFQUFFdEIsVUFBakI7QUFBNkIsVUFBTSxFQUFFRSxjQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dnQixRQURILENBREYsRUFJRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdUVBQUQ7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNWCxVQUFVLENBQUMsUUFBRCxDQUFoQjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRWdCLCtFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNekIsR0FBTixDQUpGLEVBS0UsTUFBQyxvRUFBRDtBQUFLLFdBQU8sRUFBRTtBQUFBLGFBQU1TLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUEsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVpQiw4RUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTEYsQ0FGRixDQUpGLENBTkYsQ0FERjtBQTBCRCxDQXhFRDs7R0FBTS9CLGM7O0tBQUFBLGM7O0FBMEVTQSw2RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3QvW3Byb2R1Y3RdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBXcmFwcGVyLFxuICBCYW5uZXIsXG4gIEJhbm5lckltYWdlLFxuICBEZXRhaWxzLFxuICBUaXRsZSxcbiAgRmVhdHVyZXMsXG4gIEZlYXR1cmUsXG4gIFBhbmVsLFxuICBBZGQsXG4gIFJlbW92ZSxcbiAgUXR5LFxuICBDVEEsXG4gIFB1cmNoYXNlLFxuICBGZWF0VGl0bGUsXG59IGZyb20gXCIuLi8uLi9TdHlsZWRDb21wb25lbnRzL3Byb2R1Y3REZXRhaWxzXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYVBsdXNDaXJjbGUsIGZhTWludXNDaXJjbGUgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBCYWNrZHJvcCB9IGZyb20gXCIuLi8uLi9TdHlsZWRDb21wb25lbnRzL21haW5cIjtcbmltcG9ydCBGZWF0dXJlc0RCIGZyb20gXCIuLi8uLi9EQi9jYXRhbG9nLmpzb25cIjtcblxuY29uc3QgUHJvZHVjdERldGFpbHMgPSAoeyBwcm9kdWN0LCBjYXRlZ29yeSwgaWQgfSkgPT4ge1xuICBjb25zdCBbcXR5LCBzZXRRdHldID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFthY3RpdmVTcGVjLCBzZXRBY3RpdmVTcGVjXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZmVhdHVyZVRvdWNoZWQsIHNldEZlYXR1cmVUb3VjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBQcm9kRGV0YWlscyA9IEZlYXR1cmVzREIuZGV0YWlsc1twcm9kdWN0XVtjYXRlZ29yeV1baWRdO1xuXG4gIGNvbnN0IHF0eUhhbmRsZXIgPSAobW9kZSkgPT4ge1xuICAgIGlmIChtb2RlID09PSBcInJlbW92ZVwiICYmIHF0eSA+IDEpIHtcbiAgICAgIHNldFF0eSgocXR5KSA9PiBxdHkgLSAxKTtcbiAgICB9XG4gICAgaWYgKG1vZGUgPT09IFwiYWRkXCIpIHtcbiAgICAgIHNldFF0eSgocXR5KSA9PiBxdHkgKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmVhdHVyZUhhbmRsZXIgPSAoaW5kZXgpID0+IHtcbiAgICBpbmRleCAhPT0gYWN0aXZlU3BlYyAmJiBzZXRGZWF0dXJlVG91Y2hlZCh0cnVlKTtcbiAgICBpbmRleCA9PT0gYWN0aXZlU3BlYyAmJiBzZXRGZWF0dXJlVG91Y2hlZCgoc3RhdGUpID0+ICFzdGF0ZSk7XG4gICAgIWZlYXR1cmVUb3VjaGVkXG4gICAgICA/IHNldFRpbWVvdXQoXG4gICAgICAgICAgKCkgPT4gd2luZG93LnNjcm9sbFRvKHsgdG9wOiAyNjYuOCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSksXG4gICAgICAgICAgNTAwXG4gICAgICAgIClcbiAgICAgIDogIHNldFRpbWVvdXQoXG4gICAgICAgICgpID0+IHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSksXG4gICAgICAgIDQwMFxuICAgICAgKVxuICAgIHNldEFjdGl2ZVNwZWMoaW5kZXgpO1xuICB9O1xuXG4gIGNvbnN0IGZlYXRzID0gW1wiU29icmVcIiwgXCJDb21vIHVzYXJcIiwgXCJJbmdyZWRpZW50ZXNcIiwgXCJSZXZpZXdzXCJdO1xuICBjb25zdCBmZWF0dXJlcyA9IGZlYXRzLm1hcCgoZmVhdHVyZSwgaSkgPT4gKFxuICAgIDxGZWF0dXJlXG4gICAgICBpbmRleD17aX1cbiAgICAgIGFjdGl2ZT17aSA9PT0gYWN0aXZlU3BlYyAmJiBmZWF0dXJlVG91Y2hlZH1cbiAgICAgIGluYWN0aXZlPXtpICE9IGFjdGl2ZVNwZWMgJiYgZmVhdHVyZVRvdWNoZWR9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBmZWF0dXJlSGFuZGxlcihpKX1cbiAgICAgIGtleT17aX1cbiAgICA+XG4gICAgICA8RmVhdFRpdGxlIGFjdGl2ZT17aSA9PT0gYWN0aXZlU3BlYyAmJiBmZWF0dXJlVG91Y2hlZH0+XG4gICAgICAgIHtmZWF0dXJlfVxuICAgICAgPC9GZWF0VGl0bGU+XG4gICAgPC9GZWF0dXJlPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPEJhbm5lcj5cbiAgICAgICAgPEJhbm5lckltYWdlIHNyYz1cIi9EZXRhaWxzVGVzdC90ZXN0LmpwZ1wiIGFsdD1cImJhbm5lciBsb2dvXCIgLz5cbiAgICAgICAgPFRpdGxlPkNhZsOpIEJsYWNrPC9UaXRsZT5cbiAgICAgICAgPEJhY2tkcm9wIHN0eWxlPXt7IHpJbmRleDogMSB9fSBmb3JFbGVtZW50PXt0cnVlfSAvPlxuICAgICAgPC9CYW5uZXI+XG4gICAgICA8RGV0YWlscz5cbiAgICAgICAgPEZlYXR1cmVzIGluZGV4PXthY3RpdmVTcGVjfSBhY3RpdmU9e2ZlYXR1cmVUb3VjaGVkfT5cbiAgICAgICAgICB7ZmVhdHVyZXN9XG4gICAgICAgIDwvRmVhdHVyZXM+XG4gICAgICAgIDxQYW5lbD5cbiAgICAgICAgICA8Q1RBPkNvbXByZTwvQ1RBPlxuICAgICAgICAgIDxQdXJjaGFzZT5cbiAgICAgICAgICAgIDxSZW1vdmUgb25DbGljaz17KCkgPT4gcXR5SGFuZGxlcihcInJlbW92ZVwiKX0+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFNaW51c0NpcmNsZX0gLz5cbiAgICAgICAgICAgIDwvUmVtb3ZlPlxuICAgICAgICAgICAgPFF0eT57cXR5fTwvUXR5PlxuICAgICAgICAgICAgPEFkZCBvbkNsaWNrPXsoKSA9PiBxdHlIYW5kbGVyKFwiYWRkXCIpfT5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IC8+XG4gICAgICAgICAgICA8L0FkZD5cbiAgICAgICAgICA8L1B1cmNoYXNlPlxuICAgICAgICA8L1BhbmVsPlxuICAgICAgPC9EZXRhaWxzPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxzO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcHJvZHVjdCA9IGNvbnRleHQucXVlcnkucHJvZHVjdDtcbiAgY29uc3QgY2F0ZWdvcnkgPSBjb250ZXh0LnF1ZXJ5LmFjdGl2ZUNhdGVnb3J5O1xuICBjb25zdCBpZCA9IGNvbnRleHQucXVlcnkuaWQ7XG4gIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAvLyAgIGBodHRwczovL21lbGktOTk1MDkuZmlyZWJhc2Vpby5jb20vY2F0YWxvZy8ke3Byb2R1Y3R9LyR7Y2F0ZWdvcnl9LyR7aWR9Lmpzb25gXG4gIC8vICk7XG4gIC8vIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3QsXG4gICAgICBjYXRlZ29yeSxcbiAgICAgIGlkLFxuICAgIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[product].js\n");

/***/ })

})