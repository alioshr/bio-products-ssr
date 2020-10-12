webpackHotUpdate_N_E("pages/product/[product]",{

/***/ "./pages/product/[product].js":
/*!************************************!*\
  !*** ./pages/product/[product].js ***!
  \************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StyledComponents/productDetails */ \"./StyledComponents/productDetails.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _StyledComponents_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../StyledComponents/main */ \"./StyledComponents/main.js\");\n/* harmony import */ var _DB_catalog_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../DB/catalog.json */ \"./DB/catalog.json\");\nvar _DB_catalog_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../DB/catalog.json */ \"./DB/catalog.json\", 1);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/.pnpm/registry.npmjs.org/styled-components/5.2.0_2aeffab7d644b928458b96d6399100c6/node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/pages/product/[product].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nwidth: 100vw;\\nheight: 100vh;\\ndisplay: grid;\\ngrid-template-columns: 40px 1fr 1fr;\\ngrid-template-rows: 40px 1fr 1fr;\\ngrid-template-areas: \\\"col col col\\\"\\n                      \\\"row cell cell\\\"\\n                      \\\"row cell cell\\\";\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nvar Table = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject());\n_c = Table;\nvar Cell = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div;\n\nvar ProductDetails = function ProductDetails(_ref) {\n  _s();\n\n  var product = _ref.product,\n      category = _ref.category,\n      id = _ref.id;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      qty = _useState[0],\n      setQty = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      activeSpec = _useState2[0],\n      setActiveSpec = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      toggledSpec = _useState3[0],\n      setToggledSpec = _useState3[1];\n\n  var ProdDetails = _DB_catalog_json__WEBPACK_IMPORTED_MODULE_6__.details[product][category][id];\n\n  var qtyHandler = function qtyHandler(mode) {\n    if (mode === \"remove\" && qty > 1) {\n      setQty(function (qty) {\n        return qty - 1;\n      });\n    }\n\n    if (mode === \"add\") {\n      setQty(function (qty) {\n        return qty + 1;\n      });\n    }\n  };\n\n  var featureHandler = function featureHandler(index) {\n    index !== activeSpec && setToggledSpec(true);\n    index === activeSpec && setToggledSpec(function (state) {\n      return !state;\n    });\n    setActiveSpec(index);\n  };\n\n  var feats = [\"Sobre\", \"Como usar\", \"Ingredientes\", \"Reviews\"];\n  var features = feats.map(function (feature, i) {\n    return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Feature\"], {\n      index: i,\n      active: i === activeSpec && toggledSpec,\n      inactive: i != activeSpec && toggledSpec,\n      onClick: function onClick() {\n        return featureHandler(i);\n      },\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 5\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 7\n      }\n    }, feature));\n  });\n  return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Wrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 5\n    }\n  }, __jsx(Table, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(ProductDetails, \"ep3X3ZJZXgtmj6Goq/nJZwCkwKM=\");\n\n_c2 = ProductDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Table\");\n$RefreshReg$(_c2, \"ProductDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bcHJvZHVjdF0uanM/Y2E1YSJdLCJuYW1lcyI6WyJUYWJsZSIsInN0eWxlZCIsImRpdiIsIkNlbGwiLCJQcm9kdWN0RGV0YWlscyIsInByb2R1Y3QiLCJjYXRlZ29yeSIsImlkIiwidXNlU3RhdGUiLCJxdHkiLCJzZXRRdHkiLCJhY3RpdmVTcGVjIiwic2V0QWN0aXZlU3BlYyIsInRvZ2dsZWRTcGVjIiwic2V0VG9nZ2xlZFNwZWMiLCJQcm9kRGV0YWlscyIsIkZlYXR1cmVzREIiLCJkZXRhaWxzIiwicXR5SGFuZGxlciIsIm1vZGUiLCJmZWF0dXJlSGFuZGxlciIsImluZGV4Iiwic3RhdGUiLCJmZWF0cyIsImZlYXR1cmVzIiwibWFwIiwiZmVhdHVyZSIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsS0FBSyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFYO0tBQU1GLEs7QUFXTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNDLEdBQXBCOztBQUdBLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBK0I7QUFBQTs7QUFBQSxNQUE1QkMsT0FBNEIsUUFBNUJBLE9BQTRCO0FBQUEsTUFBbkJDLFFBQW1CLFFBQW5CQSxRQUFtQjtBQUFBLE1BQVRDLEVBQVMsUUFBVEEsRUFBUzs7QUFBQSxrQkFDOUJDLHNEQUFRLENBQUMsQ0FBRCxDQURzQjtBQUFBLE1BQzdDQyxHQUQ2QztBQUFBLE1BQ3hDQyxNQUR3Qzs7QUFBQSxtQkFFaEJGLHNEQUFRLENBQUMsQ0FBRCxDQUZRO0FBQUEsTUFFN0NHLFVBRjZDO0FBQUEsTUFFakNDLGFBRmlDOztBQUFBLG1CQUdkSixzREFBUSxDQUFDLEtBQUQsQ0FITTtBQUFBLE1BRzdDSyxXQUg2QztBQUFBLE1BR2hDQyxjQUhnQzs7QUFLcEQsTUFBTUMsV0FBVyxHQUFHQyw2Q0FBVSxDQUFDQyxPQUFYLENBQW1CWixPQUFuQixFQUE0QkMsUUFBNUIsRUFBc0NDLEVBQXRDLENBQXBCOztBQUVBLE1BQU1XLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBVTtBQUMzQixRQUFJQSxJQUFJLEtBQUssUUFBVCxJQUFxQlYsR0FBRyxHQUFHLENBQS9CLEVBQWtDO0FBQ2hDQyxZQUFNLENBQUMsVUFBQ0QsR0FBRDtBQUFBLGVBQVNBLEdBQUcsR0FBRyxDQUFmO0FBQUEsT0FBRCxDQUFOO0FBQ0Q7O0FBQ0QsUUFBSVUsSUFBSSxLQUFLLEtBQWIsRUFBb0I7QUFDbEJULFlBQU0sQ0FBQyxVQUFDRCxHQUFEO0FBQUEsZUFBU0EsR0FBRyxHQUFHLENBQWY7QUFBQSxPQUFELENBQU47QUFDRDtBQUNGLEdBUEQ7O0FBU0EsTUFBTVcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFDaENBLFNBQUssS0FBS1YsVUFBVixJQUF3QkcsY0FBYyxDQUFDLElBQUQsQ0FBdEM7QUFDQU8sU0FBSyxLQUFLVixVQUFWLElBQXdCRyxjQUFjLENBQUMsVUFBQ1EsS0FBRDtBQUFBLGFBQVcsQ0FBQ0EsS0FBWjtBQUFBLEtBQUQsQ0FBdEM7QUFDQVYsaUJBQWEsQ0FBQ1MsS0FBRCxDQUFiO0FBQ0QsR0FKRDs7QUFNQSxNQUFNRSxLQUFLLEdBQUcsQ0FBQyxPQUFELEVBQVUsV0FBVixFQUF1QixjQUF2QixFQUF1QyxTQUF2QyxDQUFkO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRCxLQUFLLENBQUNFLEdBQU4sQ0FBVSxVQUFDQyxPQUFELEVBQVVDLENBQVY7QUFBQSxXQUN6QixNQUFDLHdFQUFEO0FBQ0UsV0FBSyxFQUFFQSxDQURUO0FBRUUsWUFBTSxFQUFFQSxDQUFDLEtBQUtoQixVQUFOLElBQW9CRSxXQUY5QjtBQUdFLGNBQVEsRUFBRWMsQ0FBQyxJQUFJaEIsVUFBTCxJQUFtQkUsV0FIL0I7QUFJRSxhQUFPLEVBQUU7QUFBQSxlQUFNTyxjQUFjLENBQUNPLENBQUQsQ0FBcEI7QUFBQSxPQUpYO0FBS0UsU0FBRyxFQUFFQSxDQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9ELE9BQVAsQ0FQRixDQUR5QjtBQUFBLEdBQVYsQ0FBakI7QUFjQSxTQUNFLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQTRCRCxDQWpFRDs7R0FBTXRCLGM7O01BQUFBLGM7O0FBbUVTQSw2RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3QvW3Byb2R1Y3RdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBXcmFwcGVyLFxuICBCYW5uZXIsXG4gIEJhbm5lckltYWdlLFxuICBEZXRhaWxzLFxuICBUaXRsZSxcbiAgRmVhdHVyZXMsXG4gIEZlYXR1cmUsXG4gIFBhbmVsLFxuICBBZGQsXG4gIFJlbW92ZSxcbiAgUXR5LFxuICBDVEEsXG4gIFB1cmNoYXNlLFxufSBmcm9tIFwiLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9wcm9kdWN0RGV0YWlsc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFQbHVzQ2lyY2xlLCBmYU1pbnVzQ2lyY2xlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgQmFja2Ryb3AgfSBmcm9tIFwiLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9tYWluXCI7XG5pbXBvcnQgRmVhdHVyZXNEQiBmcm9tIFwiLi4vLi4vREIvY2F0YWxvZy5qc29uXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5cbmNvbnN0IFRhYmxlID0gc3R5bGVkLmRpdmBcbndpZHRoOiAxMDB2dztcbmhlaWdodDogMTAwdmg7XG5kaXNwbGF5OiBncmlkO1xuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDFmciAxZnI7XG5ncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyIDFmcjtcbmdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiY29sIGNvbCBjb2xcIlxuICAgICAgICAgICAgICAgICAgICAgIFwicm93IGNlbGwgY2VsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb3cgY2VsbCBjZWxsXCI7XG5gO1xuXG5jb25zdCBDZWxsID0gc3R5bGVkLmRpdlxuXG5cbmNvbnN0IFByb2R1Y3REZXRhaWxzID0gKHsgcHJvZHVjdCwgY2F0ZWdvcnksIGlkIH0pID0+IHtcbiAgY29uc3QgW3F0eSwgc2V0UXR5XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbYWN0aXZlU3BlYywgc2V0QWN0aXZlU3BlY10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RvZ2dsZWRTcGVjLCBzZXRUb2dnbGVkU3BlY10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgUHJvZERldGFpbHMgPSBGZWF0dXJlc0RCLmRldGFpbHNbcHJvZHVjdF1bY2F0ZWdvcnldW2lkXTtcblxuICBjb25zdCBxdHlIYW5kbGVyID0gKG1vZGUpID0+IHtcbiAgICBpZiAobW9kZSA9PT0gXCJyZW1vdmVcIiAmJiBxdHkgPiAxKSB7XG4gICAgICBzZXRRdHkoKHF0eSkgPT4gcXR5IC0gMSk7XG4gICAgfVxuICAgIGlmIChtb2RlID09PSBcImFkZFwiKSB7XG4gICAgICBzZXRRdHkoKHF0eSkgPT4gcXR5ICsgMSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZlYXR1cmVIYW5kbGVyID0gKGluZGV4KSA9PiB7XG4gICAgaW5kZXggIT09IGFjdGl2ZVNwZWMgJiYgc2V0VG9nZ2xlZFNwZWModHJ1ZSk7XG4gICAgaW5kZXggPT09IGFjdGl2ZVNwZWMgJiYgc2V0VG9nZ2xlZFNwZWMoKHN0YXRlKSA9PiAhc3RhdGUpO1xuICAgIHNldEFjdGl2ZVNwZWMoaW5kZXgpO1xuICB9O1xuXG4gIGNvbnN0IGZlYXRzID0gW1wiU29icmVcIiwgXCJDb21vIHVzYXJcIiwgXCJJbmdyZWRpZW50ZXNcIiwgXCJSZXZpZXdzXCJdO1xuICBjb25zdCBmZWF0dXJlcyA9IGZlYXRzLm1hcCgoZmVhdHVyZSwgaSkgPT4gKFxuICAgIDxGZWF0dXJlXG4gICAgICBpbmRleD17aX1cbiAgICAgIGFjdGl2ZT17aSA9PT0gYWN0aXZlU3BlYyAmJiB0b2dnbGVkU3BlY31cbiAgICAgIGluYWN0aXZlPXtpICE9IGFjdGl2ZVNwZWMgJiYgdG9nZ2xlZFNwZWN9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBmZWF0dXJlSGFuZGxlcihpKX1cbiAgICAgIGtleT17aX1cbiAgICA+XG4gICAgICA8c3Bhbj57ZmVhdHVyZX08L3NwYW4+XG4gICAgPC9GZWF0dXJlPlxuICApKTtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cblxuICAgICAgPFRhYmxlPlxuXG4gICAgICA8L1RhYmxlPlxuICAgICAgey8qIDxCYW5uZXI+XG4gICAgICAgIDxCYW5uZXJJbWFnZSBzcmM9XCIvRGV0YWlsc1Rlc3QvdGVzdC5qcGdcIiBhbHQ9XCJiYW5uZXIgbG9nb1wiIC8+XG4gICAgICAgIDxUaXRsZT5DYWbDqSBCbGFjazwvVGl0bGU+XG4gICAgICAgIDxCYWNrZHJvcCBzdHlsZT17eyB6SW5kZXg6IDEgfX0gZm9yRWxlbWVudD17dHJ1ZX0gLz5cbiAgICAgIDwvQmFubmVyPlxuICAgICAgPERldGFpbHM+XG4gICAgICAgIDxGZWF0dXJlcyBpbmRleD17YWN0aXZlU3BlY30gYWN0aXZlRmVhdHVyZT17dG9nZ2xlZFNwZWN9PntmZWF0dXJlc308L0ZlYXR1cmVzPlxuICAgICAgICA8UGFuZWw+XG4gICAgICAgICAgPENUQT5Db21wcmU8L0NUQT5cbiAgICAgICAgICA8UHVyY2hhc2U+XG4gICAgICAgICAgICA8UmVtb3ZlIG9uQ2xpY2s9eygpID0+IHF0eUhhbmRsZXIoXCJyZW1vdmVcIil9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTWludXNDaXJjbGV9IC8+XG4gICAgICAgICAgICA8L1JlbW92ZT5cbiAgICAgICAgICAgIDxRdHk+e3F0eX08L1F0eT5cbiAgICAgICAgICAgIDxBZGQgb25DbGljaz17KCkgPT4gcXR5SGFuZGxlcihcImFkZFwiKX0+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQbHVzQ2lyY2xlfSAvPlxuICAgICAgICAgICAgPC9BZGQ+XG4gICAgICAgICAgPC9QdXJjaGFzZT5cbiAgICAgICAgPC9QYW5lbD5cbiAgICAgIDwvRGV0YWlscz4gKi99XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbHM7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBwcm9kdWN0ID0gY29udGV4dC5xdWVyeS5wcm9kdWN0O1xuICBjb25zdCBjYXRlZ29yeSA9IGNvbnRleHQucXVlcnkuYWN0aXZlQ2F0ZWdvcnk7XG4gIGNvbnN0IGlkID0gY29udGV4dC5xdWVyeS5pZDtcbiAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gIC8vICAgYGh0dHBzOi8vbWVsaS05OTUwOS5maXJlYmFzZWlvLmNvbS9jYXRhbG9nLyR7cHJvZHVjdH0vJHtjYXRlZ29yeX0vJHtpZH0uanNvbmBcbiAgLy8gKTtcbiAgLy8gY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdCxcbiAgICAgIGNhdGVnb3J5LFxuICAgICAgaWQsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/[product].js\n");

/***/ })

})