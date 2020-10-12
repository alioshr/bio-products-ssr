webpackHotUpdate_N_E("pages/product/[product]",{

/***/ "./pages/product/[product].js":
/*!************************************!*\
  !*** ./pages/product/[product].js ***!
  \************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StyledComponents/productDetails */ \"./StyledComponents/productDetails.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _StyledComponents_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../StyledComponents/main */ \"./StyledComponents/main.js\");\n/* harmony import */ var _DB_catalog_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../DB/catalog.json */ \"./DB/catalog.json\");\nvar _DB_catalog_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../DB/catalog.json */ \"./DB/catalog.json\", 1);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/.pnpm/registry.npmjs.org/styled-components/5.2.0_2aeffab7d644b928458b96d6399100c6/node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/pages/product/[product].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\npadding: 2rem;\\nfont-weight: bold;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  height: 100%;\\n  width: 100%;\\n  border: 1px solid black;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  grid-are\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nwidth: 100vw;\\nheight: 100vh;\\ndisplay: grid;\\ngrid-template-columns: 40px 1fr 1fr;\\ngrid-template-rows: 40px 1fr 1fr;\\ngrid-template-areas: \\\"col col col\\\"\\n                      \\\"row cel cel\\\"\\n                      \\\"row cel cel\\\";\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nvar Table = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject());\n_c = Table;\nvar Cel = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject2());\n_c2 = Cel;\nvar Span = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].span(_templateObject3());\n_c3 = Span;\n\nvar ProductDetails = function ProductDetails(_ref) {\n  _s();\n\n  var product = _ref.product,\n      category = _ref.category,\n      id = _ref.id;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      qty = _useState[0],\n      setQty = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      activeSpec = _useState2[0],\n      setActiveSpec = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      toggledSpec = _useState3[0],\n      setToggledSpec = _useState3[1];\n\n  var ProdDetails = _DB_catalog_json__WEBPACK_IMPORTED_MODULE_6__.details[product][category][id];\n\n  var qtyHandler = function qtyHandler(mode) {\n    if (mode === \"remove\" && qty > 1) {\n      setQty(function (qty) {\n        return qty - 1;\n      });\n    }\n\n    if (mode === \"add\") {\n      setQty(function (qty) {\n        return qty + 1;\n      });\n    }\n  };\n\n  var featureHandler = function featureHandler(index) {\n    index !== activeSpec && setToggledSpec(true);\n    index === activeSpec && setToggledSpec(function (state) {\n      return !state;\n    });\n    setActiveSpec(index);\n  };\n\n  var info = ['name', 'Gerlain', 'name', 'Aliosh'];\n  var data = info.map(function (i) {\n    return __jsx(Cel, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 5\n      }\n    }, __jsx(Span, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 7\n      }\n    }, i));\n  });\n  var feats = [\"Sobre\", \"Como usar\", \"Ingredientes\", \"Reviews\"];\n  var features = feats.map(function (feature, i) {\n    return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Feature\"], {\n      index: i,\n      active: i === activeSpec && toggledSpec,\n      inactive: i != activeSpec && toggledSpec,\n      onClick: function onClick() {\n        return featureHandler(i);\n      },\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 5\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 7\n      }\n    }, feature));\n  });\n  return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Wrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 5\n    }\n  }, __jsx(Table, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }\n  }, data));\n};\n\n_s(ProductDetails, \"ep3X3ZJZXgtmj6Goq/nJZwCkwKM=\");\n\n_c4 = ProductDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Table\");\n$RefreshReg$(_c2, \"Cel\");\n$RefreshReg$(_c3, \"Span\");\n$RefreshReg$(_c4, \"ProductDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bcHJvZHVjdF0uanM/Y2E1YSJdLCJuYW1lcyI6WyJUYWJsZSIsInN0eWxlZCIsImRpdiIsIkNlbCIsIlNwYW4iLCJzcGFuIiwiUHJvZHVjdERldGFpbHMiLCJwcm9kdWN0IiwiY2F0ZWdvcnkiLCJpZCIsInVzZVN0YXRlIiwicXR5Iiwic2V0UXR5IiwiYWN0aXZlU3BlYyIsInNldEFjdGl2ZVNwZWMiLCJ0b2dnbGVkU3BlYyIsInNldFRvZ2dsZWRTcGVjIiwiUHJvZERldGFpbHMiLCJGZWF0dXJlc0RCIiwiZGV0YWlscyIsInF0eUhhbmRsZXIiLCJtb2RlIiwiZmVhdHVyZUhhbmRsZXIiLCJpbmRleCIsInN0YXRlIiwiaW5mbyIsImRhdGEiLCJtYXAiLCJpIiwiZmVhdHMiLCJmZWF0dXJlcyIsImZlYXR1cmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxLQUFLLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQVg7S0FBTUYsSztBQVdOLElBQU1HLEdBQUcsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBVDtNQUFNQyxHO0FBVU4sSUFBTUMsSUFBSSxHQUFHSCx5REFBTSxDQUFDSSxJQUFWLG9CQUFWO01BQU1ELEk7O0FBTU4sSUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUErQjtBQUFBOztBQUFBLE1BQTVCQyxPQUE0QixRQUE1QkEsT0FBNEI7QUFBQSxNQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1CO0FBQUEsTUFBVEMsRUFBUyxRQUFUQSxFQUFTOztBQUFBLGtCQUM5QkMsc0RBQVEsQ0FBQyxDQUFELENBRHNCO0FBQUEsTUFDN0NDLEdBRDZDO0FBQUEsTUFDeENDLE1BRHdDOztBQUFBLG1CQUVoQkYsc0RBQVEsQ0FBQyxDQUFELENBRlE7QUFBQSxNQUU3Q0csVUFGNkM7QUFBQSxNQUVqQ0MsYUFGaUM7O0FBQUEsbUJBR2RKLHNEQUFRLENBQUMsS0FBRCxDQUhNO0FBQUEsTUFHN0NLLFdBSDZDO0FBQUEsTUFHaENDLGNBSGdDOztBQUtwRCxNQUFNQyxXQUFXLEdBQUdDLDZDQUFVLENBQUNDLE9BQVgsQ0FBbUJaLE9BQW5CLEVBQTRCQyxRQUE1QixFQUFzQ0MsRUFBdEMsQ0FBcEI7O0FBRUEsTUFBTVcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFVO0FBQzNCLFFBQUlBLElBQUksS0FBSyxRQUFULElBQXFCVixHQUFHLEdBQUcsQ0FBL0IsRUFBa0M7QUFDaENDLFlBQU0sQ0FBQyxVQUFDRCxHQUFEO0FBQUEsZUFBU0EsR0FBRyxHQUFHLENBQWY7QUFBQSxPQUFELENBQU47QUFDRDs7QUFDRCxRQUFJVSxJQUFJLEtBQUssS0FBYixFQUFvQjtBQUNsQlQsWUFBTSxDQUFDLFVBQUNELEdBQUQ7QUFBQSxlQUFTQSxHQUFHLEdBQUcsQ0FBZjtBQUFBLE9BQUQsQ0FBTjtBQUNEO0FBQ0YsR0FQRDs7QUFTQSxNQUFNVyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBVztBQUNoQ0EsU0FBSyxLQUFLVixVQUFWLElBQXdCRyxjQUFjLENBQUMsSUFBRCxDQUF0QztBQUNBTyxTQUFLLEtBQUtWLFVBQVYsSUFBd0JHLGNBQWMsQ0FBQyxVQUFDUSxLQUFEO0FBQUEsYUFBVyxDQUFDQSxLQUFaO0FBQUEsS0FBRCxDQUF0QztBQUNBVixpQkFBYSxDQUFDUyxLQUFELENBQWI7QUFDRCxHQUpEOztBQU1BLE1BQU1FLElBQUksR0FBRyxDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLE1BQXBCLEVBQTRCLFFBQTVCLENBQWI7QUFFQSxNQUFNQyxJQUFJLEdBQUdELElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUFDLENBQUM7QUFBQSxXQUNyQixNQUFDLEdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dBLENBREgsQ0FERixDQURxQjtBQUFBLEdBQVYsQ0FBYjtBQVFBLE1BQU1DLEtBQUssR0FBRyxDQUFDLE9BQUQsRUFBVSxXQUFWLEVBQXVCLGNBQXZCLEVBQXVDLFNBQXZDLENBQWQ7QUFDQSxNQUFNQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0YsR0FBTixDQUFVLFVBQUNJLE9BQUQsRUFBVUgsQ0FBVjtBQUFBLFdBQ3pCLE1BQUMsd0VBQUQ7QUFDRSxXQUFLLEVBQUVBLENBRFQ7QUFFRSxZQUFNLEVBQUVBLENBQUMsS0FBS2YsVUFBTixJQUFvQkUsV0FGOUI7QUFHRSxjQUFRLEVBQUVhLENBQUMsSUFBSWYsVUFBTCxJQUFtQkUsV0FIL0I7QUFJRSxhQUFPLEVBQUU7QUFBQSxlQUFNTyxjQUFjLENBQUNNLENBQUQsQ0FBcEI7QUFBQSxPQUpYO0FBS0UsU0FBRyxFQUFFQSxDQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9HLE9BQVAsQ0FQRixDQUR5QjtBQUFBLEdBQVYsQ0FBakI7QUFjQSxTQUNFLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLElBREgsQ0FGRixDQURGO0FBNEJELENBM0VEOztHQUFNcEIsYzs7TUFBQUEsYzs7QUE2RVNBLDZFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZHVjdC9bcHJvZHVjdF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFdyYXBwZXIsXG4gIEJhbm5lcixcbiAgQmFubmVySW1hZ2UsXG4gIERldGFpbHMsXG4gIFRpdGxlLFxuICBGZWF0dXJlcyxcbiAgRmVhdHVyZSxcbiAgUGFuZWwsXG4gIEFkZCxcbiAgUmVtb3ZlLFxuICBRdHksXG4gIENUQSxcbiAgUHVyY2hhc2UsXG59IGZyb20gXCIuLi8uLi9TdHlsZWRDb21wb25lbnRzL3Byb2R1Y3REZXRhaWxzXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYVBsdXNDaXJjbGUsIGZhTWludXNDaXJjbGUgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBCYWNrZHJvcCB9IGZyb20gXCIuLi8uLi9TdHlsZWRDb21wb25lbnRzL21haW5cIjtcbmltcG9ydCBGZWF0dXJlc0RCIGZyb20gXCIuLi8uLi9EQi9jYXRhbG9nLmpzb25cIjtcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cblxuY29uc3QgVGFibGUgPSBzdHlsZWQuZGl2YFxud2lkdGg6IDEwMHZ3O1xuaGVpZ2h0OiAxMDB2aDtcbmRpc3BsYXk6IGdyaWQ7XG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggMWZyIDFmcjtcbmdyaWQtdGVtcGxhdGUtcm93czogNDBweCAxZnIgMWZyO1xuZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJjb2wgY29sIGNvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb3cgY2VsIGNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb3cgY2VsIGNlbFwiO1xuYDtcblxuY29uc3QgQ2VsID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLWFyZVxuYFxuXG5jb25zdCBTcGFuID0gc3R5bGVkLnNwYW5gXG5wYWRkaW5nOiAycmVtO1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG5gXG5cblxuY29uc3QgUHJvZHVjdERldGFpbHMgPSAoeyBwcm9kdWN0LCBjYXRlZ29yeSwgaWQgfSkgPT4ge1xuICBjb25zdCBbcXR5LCBzZXRRdHldID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFthY3RpdmVTcGVjLCBzZXRBY3RpdmVTcGVjXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdG9nZ2xlZFNwZWMsIHNldFRvZ2dsZWRTcGVjXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBQcm9kRGV0YWlscyA9IEZlYXR1cmVzREIuZGV0YWlsc1twcm9kdWN0XVtjYXRlZ29yeV1baWRdO1xuXG4gIGNvbnN0IHF0eUhhbmRsZXIgPSAobW9kZSkgPT4ge1xuICAgIGlmIChtb2RlID09PSBcInJlbW92ZVwiICYmIHF0eSA+IDEpIHtcbiAgICAgIHNldFF0eSgocXR5KSA9PiBxdHkgLSAxKTtcbiAgICB9XG4gICAgaWYgKG1vZGUgPT09IFwiYWRkXCIpIHtcbiAgICAgIHNldFF0eSgocXR5KSA9PiBxdHkgKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmVhdHVyZUhhbmRsZXIgPSAoaW5kZXgpID0+IHtcbiAgICBpbmRleCAhPT0gYWN0aXZlU3BlYyAmJiBzZXRUb2dnbGVkU3BlYyh0cnVlKTtcbiAgICBpbmRleCA9PT0gYWN0aXZlU3BlYyAmJiBzZXRUb2dnbGVkU3BlYygoc3RhdGUpID0+ICFzdGF0ZSk7XG4gICAgc2V0QWN0aXZlU3BlYyhpbmRleCk7XG4gIH07XG5cbiAgY29uc3QgaW5mbyA9IFsnbmFtZScsICdHZXJsYWluJywgJ25hbWUnLCAnQWxpb3NoJ107XG5cbiAgY29uc3QgZGF0YSA9IGluZm8ubWFwKGkgPT4gKFxuICAgIDxDZWw+XG4gICAgICA8U3Bhbj5cbiAgICAgICAge2l9XG4gICAgICA8L1NwYW4+XG4gICAgPC9DZWw+XG4gICkpXG5cbiAgY29uc3QgZmVhdHMgPSBbXCJTb2JyZVwiLCBcIkNvbW8gdXNhclwiLCBcIkluZ3JlZGllbnRlc1wiLCBcIlJldmlld3NcIl07XG4gIGNvbnN0IGZlYXR1cmVzID0gZmVhdHMubWFwKChmZWF0dXJlLCBpKSA9PiAoXG4gICAgPEZlYXR1cmVcbiAgICAgIGluZGV4PXtpfVxuICAgICAgYWN0aXZlPXtpID09PSBhY3RpdmVTcGVjICYmIHRvZ2dsZWRTcGVjfVxuICAgICAgaW5hY3RpdmU9e2kgIT0gYWN0aXZlU3BlYyAmJiB0b2dnbGVkU3BlY31cbiAgICAgIG9uQ2xpY2s9eygpID0+IGZlYXR1cmVIYW5kbGVyKGkpfVxuICAgICAga2V5PXtpfVxuICAgID5cbiAgICAgIDxzcGFuPntmZWF0dXJlfTwvc3Bhbj5cbiAgICA8L0ZlYXR1cmU+XG4gICkpO1xuXG5cblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuXG4gICAgICA8VGFibGU+XG4gICAgICAgIHtkYXRhfVxuICAgICAgPC9UYWJsZT5cbiAgICAgIHsvKiA8QmFubmVyPlxuICAgICAgICA8QmFubmVySW1hZ2Ugc3JjPVwiL0RldGFpbHNUZXN0L3Rlc3QuanBnXCIgYWx0PVwiYmFubmVyIGxvZ29cIiAvPlxuICAgICAgICA8VGl0bGU+Q2Fmw6kgQmxhY2s8L1RpdGxlPlxuICAgICAgICA8QmFja2Ryb3Agc3R5bGU9e3sgekluZGV4OiAxIH19IGZvckVsZW1lbnQ9e3RydWV9IC8+XG4gICAgICA8L0Jhbm5lcj5cbiAgICAgIDxEZXRhaWxzPlxuICAgICAgICA8RmVhdHVyZXMgaW5kZXg9e2FjdGl2ZVNwZWN9IGFjdGl2ZUZlYXR1cmU9e3RvZ2dsZWRTcGVjfT57ZmVhdHVyZXN9PC9GZWF0dXJlcz5cbiAgICAgICAgPFBhbmVsPlxuICAgICAgICAgIDxDVEE+Q29tcHJlPC9DVEE+XG4gICAgICAgICAgPFB1cmNoYXNlPlxuICAgICAgICAgICAgPFJlbW92ZSBvbkNsaWNrPXsoKSA9PiBxdHlIYW5kbGVyKFwicmVtb3ZlXCIpfT5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYU1pbnVzQ2lyY2xlfSAvPlxuICAgICAgICAgICAgPC9SZW1vdmU+XG4gICAgICAgICAgICA8UXR5PntxdHl9PC9RdHk+XG4gICAgICAgICAgICA8QWRkIG9uQ2xpY2s9eygpID0+IHF0eUhhbmRsZXIoXCJhZGRcIil9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c0NpcmNsZX0gLz5cbiAgICAgICAgICAgIDwvQWRkPlxuICAgICAgICAgIDwvUHVyY2hhc2U+XG4gICAgICAgIDwvUGFuZWw+XG4gICAgICA8L0RldGFpbHM+ICovfVxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxzO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcHJvZHVjdCA9IGNvbnRleHQucXVlcnkucHJvZHVjdDtcbiAgY29uc3QgY2F0ZWdvcnkgPSBjb250ZXh0LnF1ZXJ5LmFjdGl2ZUNhdGVnb3J5O1xuICBjb25zdCBpZCA9IGNvbnRleHQucXVlcnkuaWQ7XG4gIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAvLyAgIGBodHRwczovL21lbGktOTk1MDkuZmlyZWJhc2Vpby5jb20vY2F0YWxvZy8ke3Byb2R1Y3R9LyR7Y2F0ZWdvcnl9LyR7aWR9Lmpzb25gXG4gIC8vICk7XG4gIC8vIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3QsXG4gICAgICBjYXRlZ29yeSxcbiAgICAgIGlkLFxuICAgIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[product].js\n");

/***/ })

})