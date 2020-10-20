webpackHotUpdate_N_E("pages/product/[product]",{

/***/ "./pages/product/[product].js":
/*!************************************!*\
  !*** ./pages/product/[product].js ***!
  \************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../StyledComponents/productDetails */ \"./StyledComponents/productDetails.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _Hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Hooks/useScrollTo */ \"./Hooks/useScrollTo.js\");\n/* harmony import */ var _UI_Swipeable_Swipeable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../UI/Swipeable/Swipeable */ \"./UI/Swipeable/Swipeable.js\");\n/* harmony import */ var _Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Hooks/useClientWindow */ \"./Hooks/useClientWindow.js\");\n/* harmony import */ var _DB_catalog_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../DB/catalog.json */ \"./DB/catalog.json\");\nvar _DB_catalog_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../DB/catalog.json */ \"./DB/catalog.json\", 1);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/pages/product/[product].js\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar ProductDetails = function ProductDetails(_ref) {\n  _s2();\n\n  var product = _ref.product,\n      category = _ref.category,\n      id = _ref.id,\n      name = _ref.name;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      qty = _useState[0],\n      setQty = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      activeSpec = _useState2[0],\n      setActiveSpec = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      featureTouched = _useState3[0],\n      setFeatureTouched = _useState3[1];\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var window = Object(_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_6__[\"useClientWindow\"])(); //this will be replaced by an http request\n\n  var prodDetails = _DB_catalog_json__WEBPACK_IMPORTED_MODULE_7__.details[product][category][id];\n  console.log(window === null || window === void 0 ? void 0 : window.outerWidth);\n\n  var qtyHandler = function qtyHandler(mode) {\n    if (mode === \"remove\" && qty > 1) {\n      setQty(function (qty) {\n        return qty - 1;\n      });\n    }\n\n    if (mode === \"add\") {\n      setQty(function (qty) {\n        return qty + 1;\n      });\n    }\n  };\n\n  var featureHandler = function featureHandler(index) {\n    var _s = $RefreshSig$();\n\n    index !== activeSpec && setFeatureTouched(true);\n    index === activeSpec && setFeatureTouched(function (state) {\n      return !state;\n    });\n    !featureTouched ? setTimeout(function () {\n      return window.scrollTo({\n        top: ref.current.offsetTop,\n        behavior: \"smooth\"\n      });\n    }, 500) : setTimeout(_s(function () {\n      _s();\n\n      return Object(_Hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_4__[\"useScrollTo\"])(0, 750);\n    }, \"fyxK3ETFb9geiSyxToLG+fb8BsI=\", false, function () {\n      return [_Hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_4__[\"useScrollTo\"]];\n    }), 390);\n    setActiveSpec(index);\n  };\n\n  var feats = [\"Sobre\", \"Como usar\", \"Ingredientes\", \"Reviews\"];\n  var features = feats.map(function (feature, i) {\n    return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Feature\"], {\n      index: i,\n      active: i === activeSpec && featureTouched,\n      inactive: i != activeSpec && featureTouched,\n      onClick: function onClick() {\n        return featureHandler(i);\n      },\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"FeatTitle\"], {\n      active: i === activeSpec && featureTouched,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 7\n      }\n    }, feature));\n  });\n  var dummy = [\"https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1280x1280/products/392/1235/Clarifying_gel_cleanser_front__96525.1594249352.jpg?c=2\", \"https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1280x1280/products/393/1238/Clear_Genius_Toner_Front__51597.1594249597.jpg?c=2\"];\n  return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Wrapper\"], {\n    onStart: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Banner\"], {\n    maxWidth: window === null || window === void 0 ? void 0 : window.outerWidth,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }\n  }, __jsx(_UI_Swipeable_Swipeable__WEBPACK_IMPORTED_MODULE_5__[\"Gallery\"], {\n    rowWidth: \"100%\",\n    rowHeight: \"100%\",\n    markerActiveColor: \"orange\",\n    markerInactiveColor: \"lightgray\",\n    items: dummy,\n    childProps: {\n      alt: \"banner logo\"\n    },\n    withNav: false,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Details\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }, name), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Features\"], {\n    ref: ref,\n    index: activeSpec,\n    active: featureTouched,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }, features), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Panel\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"CTA\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 11\n    }\n  }, \"Compre\"), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Purchase\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 11\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Remove\"], {\n    onClick: function onClick() {\n      return qtyHandler(\"remove\");\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faMinusCircle\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 15\n    }\n  })), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Qty\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }, qty), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_1__[\"Add\"], {\n    onClick: function onClick() {\n      return qtyHandler(\"add\");\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faPlusCircle\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 15\n    }\n  }))))));\n};\n\n_s2(ProductDetails, \"WD71Fhjj6iieSp3Qy3aPDx1KugI=\", false, function () {\n  return [_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_6__[\"useClientWindow\"]];\n});\n\n_c = ProductDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bcHJvZHVjdF0uanM/Y2E1YSJdLCJuYW1lcyI6WyJQcm9kdWN0RGV0YWlscyIsInByb2R1Y3QiLCJjYXRlZ29yeSIsImlkIiwibmFtZSIsInVzZVN0YXRlIiwicXR5Iiwic2V0UXR5IiwiYWN0aXZlU3BlYyIsInNldEFjdGl2ZVNwZWMiLCJmZWF0dXJlVG91Y2hlZCIsInNldEZlYXR1cmVUb3VjaGVkIiwicmVmIiwidXNlUmVmIiwid2luZG93IiwidXNlQ2xpZW50V2luZG93IiwicHJvZERldGFpbHMiLCJGZWF0dXJlc0RCIiwiZGV0YWlscyIsImNvbnNvbGUiLCJsb2ciLCJvdXRlcldpZHRoIiwicXR5SGFuZGxlciIsIm1vZGUiLCJmZWF0dXJlSGFuZGxlciIsImluZGV4Iiwic3RhdGUiLCJzZXRUaW1lb3V0Iiwic2Nyb2xsVG8iLCJ0b3AiLCJjdXJyZW50Iiwib2Zmc2V0VG9wIiwiYmVoYXZpb3IiLCJ1c2VTY3JvbGxUbyIsImZlYXRzIiwiZmVhdHVyZXMiLCJtYXAiLCJmZWF0dXJlIiwiaSIsImR1bW15IiwiYWx0IiwiZmFNaW51c0NpcmNsZSIsImZhUGx1c0NpcmNsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBcUM7QUFBQTs7QUFBQSxNQUFsQ0MsT0FBa0MsUUFBbENBLE9BQWtDO0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQWZDLEVBQWUsUUFBZkEsRUFBZTtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDcENDLHNEQUFRLENBQUMsQ0FBRCxDQUQ0QjtBQUFBLE1BQ25EQyxHQURtRDtBQUFBLE1BQzlDQyxNQUQ4Qzs7QUFBQSxtQkFFdEJGLHNEQUFRLENBQUMsQ0FBRCxDQUZjO0FBQUEsTUFFbkRH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QUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1uQyxHQUFOLENBSkYsRUFLRSxNQUFDLG9FQUFEO0FBQUssV0FBTyxFQUFFO0FBQUEsYUFBTWdCLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUEsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVvQiw4RUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTEYsQ0FGRixDQUxGLENBZEYsQ0FERjtBQW1DRCxDQXhGRDs7SUFBTTFDLGM7VUFLV2Usc0U7OztLQUxYZixjOztBQTBGU0EsNkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1twcm9kdWN0XS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBXcmFwcGVyLFxuICBCYW5uZXIsXG4gIERldGFpbHMsXG4gIFRpdGxlLFxuICBGZWF0dXJlcyxcbiAgRmVhdHVyZSxcbiAgUGFuZWwsXG4gIEFkZCxcbiAgUmVtb3ZlLFxuICBRdHksXG4gIENUQSxcbiAgUHVyY2hhc2UsXG4gIEZlYXRUaXRsZSxcbn0gZnJvbSBcIi4uLy4uL1N0eWxlZENvbXBvbmVudHMvcHJvZHVjdERldGFpbHNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhUGx1c0NpcmNsZSwgZmFNaW51c0NpcmNsZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IHVzZVNjcm9sbFRvIH0gZnJvbSBcIi4uLy4uL0hvb2tzL3VzZVNjcm9sbFRvXCI7XG5pbXBvcnQgeyBHYWxsZXJ5IH0gZnJvbSBcIi4uLy4uL1VJL1N3aXBlYWJsZS9Td2lwZWFibGVcIjtcbmltcG9ydCB7dXNlQ2xpZW50V2luZG93fSBmcm9tICcuLi8uLi9Ib29rcy91c2VDbGllbnRXaW5kb3cnXG5pbXBvcnQgRmVhdHVyZXNEQiBmcm9tIFwiLi4vLi4vREIvY2F0YWxvZy5qc29uXCI7XG5cbmNvbnN0IFByb2R1Y3REZXRhaWxzID0gKHsgcHJvZHVjdCwgY2F0ZWdvcnksIGlkLCBuYW1lIH0pID0+IHtcbiAgY29uc3QgW3F0eSwgc2V0UXR5XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbYWN0aXZlU3BlYywgc2V0QWN0aXZlU3BlY10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2ZlYXR1cmVUb3VjaGVkLCBzZXRGZWF0dXJlVG91Y2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xuICBjb25zdCB3aW5kb3cgPSB1c2VDbGllbnRXaW5kb3coKTtcblxuICAvL3RoaXMgd2lsbCBiZSByZXBsYWNlZCBieSBhbiBodHRwIHJlcXVlc3RcbiAgY29uc3QgcHJvZERldGFpbHMgPSBGZWF0dXJlc0RCLmRldGFpbHNbcHJvZHVjdF1bY2F0ZWdvcnldW2lkXTtcbiAgY29uc29sZS5sb2cod2luZG93Py5vdXRlcldpZHRoKTtcblxuICBjb25zdCBxdHlIYW5kbGVyID0gKG1vZGUpID0+IHtcbiAgICBpZiAobW9kZSA9PT0gXCJyZW1vdmVcIiAmJiBxdHkgPiAxKSB7XG4gICAgICBzZXRRdHkoKHF0eSkgPT4gcXR5IC0gMSk7XG4gICAgfVxuICAgIGlmIChtb2RlID09PSBcImFkZFwiKSB7XG4gICAgICBzZXRRdHkoKHF0eSkgPT4gcXR5ICsgMSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZlYXR1cmVIYW5kbGVyID0gKGluZGV4KSA9PiB7XG4gICAgaW5kZXggIT09IGFjdGl2ZVNwZWMgJiYgc2V0RmVhdHVyZVRvdWNoZWQodHJ1ZSk7XG4gICAgaW5kZXggPT09IGFjdGl2ZVNwZWMgJiYgc2V0RmVhdHVyZVRvdWNoZWQoKHN0YXRlKSA9PiAhc3RhdGUpO1xuICAgICFmZWF0dXJlVG91Y2hlZFxuICAgICAgPyBzZXRUaW1lb3V0KFxuICAgICAgICAgICgpID0+XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IHJlZi5jdXJyZW50Lm9mZnNldFRvcCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSksXG4gICAgICAgICAgNTAwXG4gICAgICAgIClcbiAgICAgIDogc2V0VGltZW91dCgoKSA9PiB1c2VTY3JvbGxUbygwLCA3NTApLCAzOTApO1xuICAgIHNldEFjdGl2ZVNwZWMoaW5kZXgpO1xuICB9O1xuXG4gIGNvbnN0IGZlYXRzID0gW1wiU29icmVcIiwgXCJDb21vIHVzYXJcIiwgXCJJbmdyZWRpZW50ZXNcIiwgXCJSZXZpZXdzXCJdO1xuICBjb25zdCBmZWF0dXJlcyA9IGZlYXRzLm1hcCgoZmVhdHVyZSwgaSkgPT4gKFxuICAgIDxGZWF0dXJlXG4gICAgICBpbmRleD17aX1cbiAgICAgIGFjdGl2ZT17aSA9PT0gYWN0aXZlU3BlYyAmJiBmZWF0dXJlVG91Y2hlZH1cbiAgICAgIGluYWN0aXZlPXtpICE9IGFjdGl2ZVNwZWMgJiYgZmVhdHVyZVRvdWNoZWR9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBmZWF0dXJlSGFuZGxlcihpKX1cbiAgICAgIGtleT17aX1cbiAgICA+XG4gICAgICA8RmVhdFRpdGxlIGFjdGl2ZT17aSA9PT0gYWN0aXZlU3BlYyAmJiBmZWF0dXJlVG91Y2hlZH0+XG4gICAgICAgIHtmZWF0dXJlfVxuICAgICAgPC9GZWF0VGl0bGU+XG4gICAgPC9GZWF0dXJlPlxuICApKTtcblxuICBjb25zdCBkdW1teSA9IFtcbiAgICBgaHR0cHM6Ly9jZG4xMS5iaWdjb21tZXJjZS5jb20vcy05cDg4OXJ4cGtiL2ltYWdlcy9zdGVuY2lsLzEyODB4MTI4MC9wcm9kdWN0cy8zOTIvMTIzNS9DbGFyaWZ5aW5nX2dlbF9jbGVhbnNlcl9mcm9udF9fOTY1MjUuMTU5NDI0OTM1Mi5qcGc/Yz0yYCxcbiAgICBgaHR0cHM6Ly9jZG4xMS5iaWdjb21tZXJjZS5jb20vcy05cDg4OXJ4cGtiL2ltYWdlcy9zdGVuY2lsLzEyODB4MTI4MC9wcm9kdWN0cy8zOTMvMTIzOC9DbGVhcl9HZW5pdXNfVG9uZXJfRnJvbnRfXzUxNTk3LjE1OTQyNDk1OTcuanBnP2M9MmAsXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciBvblN0YXJ0PlxuICAgICAgPEJhbm5lciBtYXhXaWR0aD17d2luZG93Py5vdXRlcldpZHRofT5cbiAgICAgICAgPEdhbGxlcnlcbiAgICAgICAgICByb3dXaWR0aD1cIjEwMCVcIlxuICAgICAgICAgIHJvd0hlaWdodD1cIjEwMCVcIlxuICAgICAgICAgIG1hcmtlckFjdGl2ZUNvbG9yPVwib3JhbmdlXCJcbiAgICAgICAgICBtYXJrZXJJbmFjdGl2ZUNvbG9yPVwibGlnaHRncmF5XCJcbiAgICAgICAgICBpdGVtcz17ZHVtbXl9XG4gICAgICAgICAgY2hpbGRQcm9wcz17e1xuICAgICAgICAgICAgYWx0OiBcImJhbm5lciBsb2dvXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB3aXRoTmF2PXtmYWxzZX1cbiAgICAgICAgLz5cbiAgICAgIDwvQmFubmVyPlxuICAgICAgPERldGFpbHM+XG4gICAgICAgIDxUaXRsZT57bmFtZX08L1RpdGxlPlxuICAgICAgICA8RmVhdHVyZXMgcmVmPXtyZWZ9IGluZGV4PXthY3RpdmVTcGVjfSBhY3RpdmU9e2ZlYXR1cmVUb3VjaGVkfT5cbiAgICAgICAgICB7ZmVhdHVyZXN9XG4gICAgICAgIDwvRmVhdHVyZXM+XG4gICAgICAgIDxQYW5lbD5cbiAgICAgICAgICA8Q1RBPkNvbXByZTwvQ1RBPlxuICAgICAgICAgIDxQdXJjaGFzZT5cbiAgICAgICAgICAgIDxSZW1vdmUgb25DbGljaz17KCkgPT4gcXR5SGFuZGxlcihcInJlbW92ZVwiKX0+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFNaW51c0NpcmNsZX0gLz5cbiAgICAgICAgICAgIDwvUmVtb3ZlPlxuICAgICAgICAgICAgPFF0eT57cXR5fTwvUXR5PlxuICAgICAgICAgICAgPEFkZCBvbkNsaWNrPXsoKSA9PiBxdHlIYW5kbGVyKFwiYWRkXCIpfT5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IC8+XG4gICAgICAgICAgICA8L0FkZD5cbiAgICAgICAgICA8L1B1cmNoYXNlPlxuICAgICAgICA8L1BhbmVsPlxuICAgICAgPC9EZXRhaWxzPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxzO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcHJvZHVjdCA9IGNvbnRleHQucXVlcnkucHJvZHVjdDtcbiAgY29uc3QgY2F0ZWdvcnkgPSBjb250ZXh0LnF1ZXJ5LmFjdGl2ZUNhdGVnb3J5O1xuICBjb25zdCBpZCA9IGNvbnRleHQucXVlcnkuaWQ7XG4gIGNvbnN0IG5hbWUgPSBjb250ZXh0LnF1ZXJ5Lm5hbWU7XG4gIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAvLyAgIGBodHRwczovL21lbGktOTk1MDkuZmlyZWJhc2Vpby5jb20vY2F0YWxvZy8ke3Byb2R1Y3R9LyR7Y2F0ZWdvcnl9LyR7aWR9Lmpzb25gXG4gIC8vICk7XG4gIC8vIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3QsXG4gICAgICBjYXRlZ29yeSxcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[product].js\n");

/***/ })

})