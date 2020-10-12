webpackHotUpdate_N_E("pages/product/[product]",{

/***/ "./pages/product/[product].js":
/*!************************************!*\
  !*** ./pages/product/[product].js ***!
  \************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StyledComponents/productDetails */ \"./StyledComponents/productDetails.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _StyledComponents_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../StyledComponents/main */ \"./StyledComponents/main.js\");\n/* harmony import */ var _DB_catalog_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../DB/catalog.json */ \"./DB/catalog.json\");\nvar _DB_catalog_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../DB/catalog.json */ \"./DB/catalog.json\", 1);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/.pnpm/registry.npmjs.org/styled-components/5.2.0_2aeffab7d644b928458b96d6399100c6/node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/pages/product/[product].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nwidth: 6rem;\\nheight: 2rem;\\ntext-align: center;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 2rem;\\n  font-weight: bold;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  height: 4rem;\\n  width: 6rem;\\n  border: 1px solid black;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: column;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nvar Column = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject());\n_c = Column;\nvar Cel = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject2());\n_c2 = Cel;\nvar Span = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].span(_templateObject3());\n_c3 = Span;\nvar ColTitle = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject4());\n\nvar ProductDetails = function ProductDetails(_ref) {\n  _s();\n\n  var product = _ref.product,\n      category = _ref.category,\n      id = _ref.id;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      qty = _useState[0],\n      setQty = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      activeSpec = _useState2[0],\n      setActiveSpec = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      toggledSpec = _useState3[0],\n      setToggledSpec = _useState3[1];\n\n  var ProdDetails = _DB_catalog_json__WEBPACK_IMPORTED_MODULE_6__.details[product][category][id];\n\n  var qtyHandler = function qtyHandler(mode) {\n    if (mode === \"remove\" && qty > 1) {\n      setQty(function (qty) {\n        return qty - 1;\n      });\n    }\n\n    if (mode === \"add\") {\n      setQty(function (qty) {\n        return qty + 1;\n      });\n    }\n  };\n\n  var featureHandler = function featureHandler(index) {\n    index !== activeSpec && setToggledSpec(true);\n    index === activeSpec && setToggledSpec(function (state) {\n      return !state;\n    });\n    setActiveSpec(index);\n  };\n\n  var info = [{\n    column: \"a\",\n    rows: [\"a1\", \"a2\"]\n  }, {\n    column: \"b\",\n    rows: [\"b1\", \"b2\"]\n  }];\n  var table = info.map(function (col) {\n    return __jsx(Column, {\n      key: col.column,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 4\n      }\n    }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Title\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 6\n      }\n    }, col.column), col.rows.map(function (row, index) {\n      return __jsx(Cel, {\n        key: index,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 9\n        }\n      }, __jsx(Span, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }\n      }, row));\n    }));\n  });\n  var feats = [\"Sobre\", \"Como usar\", \"Ingredientes\", \"Reviews\"];\n  var features = feats.map(function (feature, i) {\n    return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Feature\"], {\n      index: i,\n      active: i === activeSpec && toggledSpec,\n      inactive: i != activeSpec && toggledSpec,\n      onClick: function onClick() {\n        return featureHandler(i);\n      },\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 5\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 7\n      }\n    }, feature));\n  });\n  return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Wrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      width: \"100vw\",\n      height: \"100vh\",\n      justifyContent: \"center\",\n      alignItems: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }\n  }, table));\n};\n\n_s(ProductDetails, \"ep3X3ZJZXgtmj6Goq/nJZwCkwKM=\");\n\n_c4 = ProductDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Column\");\n$RefreshReg$(_c2, \"Cel\");\n$RefreshReg$(_c3, \"Span\");\n$RefreshReg$(_c4, \"ProductDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bcHJvZHVjdF0uanM/Y2E1YSJdLCJuYW1lcyI6WyJDb2x1bW4iLCJzdHlsZWQiLCJkaXYiLCJDZWwiLCJTcGFuIiwic3BhbiIsIkNvbFRpdGxlIiwiUHJvZHVjdERldGFpbHMiLCJwcm9kdWN0IiwiY2F0ZWdvcnkiLCJpZCIsInVzZVN0YXRlIiwicXR5Iiwic2V0UXR5IiwiYWN0aXZlU3BlYyIsInNldEFjdGl2ZVNwZWMiLCJ0b2dnbGVkU3BlYyIsInNldFRvZ2dsZWRTcGVjIiwiUHJvZERldGFpbHMiLCJGZWF0dXJlc0RCIiwiZGV0YWlscyIsInF0eUhhbmRsZXIiLCJtb2RlIiwiZmVhdHVyZUhhbmRsZXIiLCJpbmRleCIsInN0YXRlIiwiaW5mbyIsImNvbHVtbiIsInJvd3MiLCJ0YWJsZSIsIm1hcCIsImNvbCIsInJvdyIsImZlYXRzIiwiZmVhdHVyZXMiLCJmZWF0dXJlIiwiaSIsImRpc3BsYXkiLCJ3aWR0aCIsImhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQVo7S0FBTUYsTTtBQUtOLElBQU1HLEdBQUcsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBVDtNQUFNQyxHO0FBU04sSUFBTUMsSUFBSSxHQUFHSCx5REFBTSxDQUFDSSxJQUFWLG9CQUFWO01BQU1ELEk7QUFLTixJQUFNRSxRQUFRLEdBQUdMLHlEQUFNLENBQUNDLEdBQVYsb0JBQWQ7O0FBTUEsSUFBTUssY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUErQjtBQUFBOztBQUFBLE1BQTVCQyxPQUE0QixRQUE1QkEsT0FBNEI7QUFBQSxNQUFuQkMs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TyxjQUFjLENBQUNhLENBQUQsQ0FBcEI7QUFBQSxPQUpYO0FBS0UsU0FBRyxFQUFFQSxDQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9ELE9BQVAsQ0FQRixDQUR5QjtBQUFBLEdBQVYsQ0FBakI7QUFZQSxTQUNFLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssU0FBSyxFQUFFO0FBQUNFLGFBQU8sRUFBRSxNQUFWO0FBQWtCQyxXQUFLLEVBQUUsT0FBekI7QUFBa0NDLFlBQU0sRUFBRSxPQUExQztBQUFtREMsb0JBQWMsRUFBRSxRQUFuRTtBQUE2RUMsZ0JBQVUsRUFBRTtBQUF6RixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQ1osS0FERCxDQURGLENBREY7QUEyQkQsQ0FoRkQ7O0dBQU10QixjOztNQUFBQSxjOztBQWtGU0EsNkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1twcm9kdWN0XS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgV3JhcHBlcixcbiAgQmFubmVyLFxuICBCYW5uZXJJbWFnZSxcbiAgRGV0YWlscyxcbiAgVGl0bGUsXG4gIEZlYXR1cmVzLFxuICBGZWF0dXJlLFxuICBQYW5lbCxcbiAgQWRkLFxuICBSZW1vdmUsXG4gIFF0eSxcbiAgQ1RBLFxuICBQdXJjaGFzZSxcbn0gZnJvbSBcIi4uLy4uL1N0eWxlZENvbXBvbmVudHMvcHJvZHVjdERldGFpbHNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhUGx1c0NpcmNsZSwgZmFNaW51c0NpcmNsZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IEJhY2tkcm9wIH0gZnJvbSBcIi4uLy4uL1N0eWxlZENvbXBvbmVudHMvbWFpblwiO1xuaW1wb3J0IEZlYXR1cmVzREIgZnJvbSBcIi4uLy4uL0RCL2NhdGFsb2cuanNvblwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgQ29sdW1uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5cbmNvbnN0IENlbCA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogNHJlbTtcbiAgd2lkdGg6IDZyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFNwYW4gPSBzdHlsZWQuc3BhbmBcbiAgcGFkZGluZzogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gO1xuXG5jb25zdCBDb2xUaXRsZSA9IHN0eWxlZC5kaXZgXG53aWR0aDogNnJlbTtcbmhlaWdodDogMnJlbTtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmBcblxuY29uc3QgUHJvZHVjdERldGFpbHMgPSAoeyBwcm9kdWN0LCBjYXRlZ29yeSwgaWQgfSkgPT4ge1xuICBjb25zdCBbcXR5LCBzZXRRdHldID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFthY3RpdmVTcGVjLCBzZXRBY3RpdmVTcGVjXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdG9nZ2xlZFNwZWMsIHNldFRvZ2dsZWRTcGVjXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBQcm9kRGV0YWlscyA9IEZlYXR1cmVzREIuZGV0YWlsc1twcm9kdWN0XVtjYXRlZ29yeV1baWRdO1xuXG4gIGNvbnN0IHF0eUhhbmRsZXIgPSAobW9kZSkgPT4ge1xuICAgIGlmIChtb2RlID09PSBcInJlbW92ZVwiICYmIHF0eSA+IDEpIHtcbiAgICAgIHNldFF0eSgocXR5KSA9PiBxdHkgLSAxKTtcbiAgICB9XG4gICAgaWYgKG1vZGUgPT09IFwiYWRkXCIpIHtcbiAgICAgIHNldFF0eSgocXR5KSA9PiBxdHkgKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmVhdHVyZUhhbmRsZXIgPSAoaW5kZXgpID0+IHtcbiAgICBpbmRleCAhPT0gYWN0aXZlU3BlYyAmJiBzZXRUb2dnbGVkU3BlYyh0cnVlKTtcbiAgICBpbmRleCA9PT0gYWN0aXZlU3BlYyAmJiBzZXRUb2dnbGVkU3BlYygoc3RhdGUpID0+ICFzdGF0ZSk7XG4gICAgc2V0QWN0aXZlU3BlYyhpbmRleCk7XG4gIH07XG5cbiAgY29uc3QgaW5mbyA9IFtcbiAgICB7IGNvbHVtbjogXCJhXCIsIHJvd3M6IFtcImExXCIsIFwiYTJcIl0gfSxcbiAgICB7IGNvbHVtbjogXCJiXCIsIHJvd3M6IFtcImIxXCIsIFwiYjJcIl0gfSxcbiAgXTtcblxuIGNvbnN0IHRhYmxlID0gaW5mby5tYXAoY29sID0+IChcbiAgIDxDb2x1bW4ga2V5PXtjb2wuY29sdW1ufT5cbiAgICAgPFRpdGxlPntjb2wuY29sdW1ufTwvVGl0bGU+XG4gICAgICB7Y29sLnJvd3MubWFwKChyb3csIGluZGV4KSA9PiAoXG4gICAgICAgIDxDZWwga2V5PXtpbmRleH0+XG4gICAgICAgICAgPFNwYW4+XG4gICAgICAgICAgICB7cm93fVxuICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgPC9DZWw+XG4gICAgICApKX1cbiAgIDwvQ29sdW1uPlxuICkpXG5cbiAgY29uc3QgZmVhdHMgPSBbXCJTb2JyZVwiLCBcIkNvbW8gdXNhclwiLCBcIkluZ3JlZGllbnRlc1wiLCBcIlJldmlld3NcIl07XG4gIGNvbnN0IGZlYXR1cmVzID0gZmVhdHMubWFwKChmZWF0dXJlLCBpKSA9PiAoXG4gICAgPEZlYXR1cmVcbiAgICAgIGluZGV4PXtpfVxuICAgICAgYWN0aXZlPXtpID09PSBhY3RpdmVTcGVjICYmIHRvZ2dsZWRTcGVjfVxuICAgICAgaW5hY3RpdmU9e2kgIT0gYWN0aXZlU3BlYyAmJiB0b2dnbGVkU3BlY31cbiAgICAgIG9uQ2xpY2s9eygpID0+IGZlYXR1cmVIYW5kbGVyKGkpfVxuICAgICAga2V5PXtpfVxuICAgID5cbiAgICAgIDxzcGFuPntmZWF0dXJlfTwvc3Bhbj5cbiAgICA8L0ZlYXR1cmU+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIHdpZHRoOiBcIjEwMHZ3XCIsIGhlaWdodDogXCIxMDB2aFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIn19PlxuICAgICAge3RhYmxlfVxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPEJhbm5lcj5cbiAgICAgICAgPEJhbm5lckltYWdlIHNyYz1cIi9EZXRhaWxzVGVzdC90ZXN0LmpwZ1wiIGFsdD1cImJhbm5lciBsb2dvXCIgLz5cbiAgICAgICAgPFRpdGxlPkNhZsOpIEJsYWNrPC9UaXRsZT5cbiAgICAgICAgPEJhY2tkcm9wIHN0eWxlPXt7IHpJbmRleDogMSB9fSBmb3JFbGVtZW50PXt0cnVlfSAvPlxuICAgICAgPC9CYW5uZXI+XG4gICAgICA8RGV0YWlscz5cbiAgICAgICAgPEZlYXR1cmVzIGluZGV4PXthY3RpdmVTcGVjfSBhY3RpdmVGZWF0dXJlPXt0b2dnbGVkU3BlY30+e2ZlYXR1cmVzfTwvRmVhdHVyZXM+XG4gICAgICAgIDxQYW5lbD5cbiAgICAgICAgICA8Q1RBPkNvbXByZTwvQ1RBPlxuICAgICAgICAgIDxQdXJjaGFzZT5cbiAgICAgICAgICAgIDxSZW1vdmUgb25DbGljaz17KCkgPT4gcXR5SGFuZGxlcihcInJlbW92ZVwiKX0+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFNaW51c0NpcmNsZX0gLz5cbiAgICAgICAgICAgIDwvUmVtb3ZlPlxuICAgICAgICAgICAgPFF0eT57cXR5fTwvUXR5PlxuICAgICAgICAgICAgPEFkZCBvbkNsaWNrPXsoKSA9PiBxdHlIYW5kbGVyKFwiYWRkXCIpfT5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IC8+XG4gICAgICAgICAgICA8L0FkZD5cbiAgICAgICAgICA8L1B1cmNoYXNlPlxuICAgICAgICA8L1BhbmVsPlxuICAgICAgPC9EZXRhaWxzPiAqL31cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlscztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHByb2R1Y3QgPSBjb250ZXh0LnF1ZXJ5LnByb2R1Y3Q7XG4gIGNvbnN0IGNhdGVnb3J5ID0gY29udGV4dC5xdWVyeS5hY3RpdmVDYXRlZ29yeTtcbiAgY29uc3QgaWQgPSBjb250ZXh0LnF1ZXJ5LmlkO1xuICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgLy8gICBgaHR0cHM6Ly9tZWxpLTk5NTA5LmZpcmViYXNlaW8uY29tL2NhdGFsb2cvJHtwcm9kdWN0fS8ke2NhdGVnb3J5fS8ke2lkfS5qc29uYFxuICAvLyApO1xuICAvLyBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0LFxuICAgICAgY2F0ZWdvcnksXG4gICAgICBpZCxcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[product].js\n");

/***/ })

})