webpackHotUpdate_N_E("pages/product/[product]",{

/***/ "./pages/product/[product].js":
/*!************************************!*\
  !*** ./pages/product/[product].js ***!
  \************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StyledComponents/productDetails */ \"./StyledComponents/productDetails.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _StyledComponents_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../StyledComponents/main */ \"./StyledComponents/main.js\");\n/* harmony import */ var _DB_catalog_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../DB/catalog.json */ \"./DB/catalog.json\");\nvar _DB_catalog_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../DB/catalog.json */ \"./DB/catalog.json\", 1);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/.pnpm/registry.npmjs.org/styled-components/5.2.0_2aeffab7d644b928458b96d6399100c6/node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/pages/product/[product].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 6rem;\\n  height: 2rem;\\n  text-align: center;\\n  border: 1px solid black;\\n  \", \";\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 2rem;\\n  font-weight: bold;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  height: 4rem;\\n  width: 6rem;\\n  border: 1px solid black;\\n  \", \";\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: column;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nvar flexMixin = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__[\"css\"])(_templateObject());\nvar Column = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject2());\n_c = Column;\nvar Cel = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject3(), flexMixin);\n_c2 = Cel;\nvar Span = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].span(_templateObject4());\n_c3 = Span;\nvar ColTitle = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject5(), flexMixin);\n_c4 = ColTitle;\n\nvar ProductDetails = function ProductDetails(_ref) {\n  _s();\n\n  var product = _ref.product,\n      category = _ref.category,\n      id = _ref.id;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      qty = _useState[0],\n      setQty = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      activeSpec = _useState2[0],\n      setActiveSpec = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      toggledSpec = _useState3[0],\n      setToggledSpec = _useState3[1];\n\n  var ProdDetails = _DB_catalog_json__WEBPACK_IMPORTED_MODULE_6__.details[product][category][id];\n\n  var qtyHandler = function qtyHandler(mode) {\n    if (mode === \"remove\" && qty > 1) {\n      setQty(function (qty) {\n        return qty - 1;\n      });\n    }\n\n    if (mode === \"add\") {\n      setQty(function (qty) {\n        return qty + 1;\n      });\n    }\n  };\n\n  var featureHandler = function featureHandler(index) {\n    index !== activeSpec && setToggledSpec(true);\n    index === activeSpec && setToggledSpec(function (state) {\n      return !state;\n    });\n    setActiveSpec(index);\n  };\n\n  var info = [{\n    column: \"A\",\n    rows: [\"a1\", \"a2\"]\n  }, {\n    column: \"B\",\n    rows: [\"b1\", \"b2\"]\n  }];\n  var table = info.map(function (col) {\n    return __jsx(Column, {\n      key: col.column,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 5\n      }\n    }, __jsx(ColTitle, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 7\n      }\n    }, __jsx(Span, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }\n    }, col.column)), col.rows.map(function (row, index) {\n      return __jsx(Cel, {\n        key: index,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 9\n        }\n      }, __jsx(Span, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 11\n        }\n      }, row));\n    }));\n  });\n  var feats = [\"Sobre\", \"Como usar\", \"Ingredientes\", \"Reviews\"];\n  var features = feats.map(function (feature, i) {\n    return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Feature\"], {\n      index: i,\n      active: i === activeSpec && toggledSpec,\n      inactive: i != activeSpec && toggledSpec,\n      onClick: function onClick() {\n        return featureHandler(i);\n      },\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 5\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 7\n      }\n    }, feature));\n  });\n  return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Wrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"flex\",\n      width: \"100vw\",\n      height: \"100vh\",\n      justifyContent: \"center\",\n      alignItems: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }\n  }, table));\n};\n\n_s(ProductDetails, \"ep3X3ZJZXgtmj6Goq/nJZwCkwKM=\");\n\n_c5 = ProductDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Column\");\n$RefreshReg$(_c2, \"Cel\");\n$RefreshReg$(_c3, \"Span\");\n$RefreshReg$(_c4, \"ColTitle\");\n$RefreshReg$(_c5, \"ProductDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bcHJvZHVjdF0uanM/Y2E1YSJdLCJuYW1lcyI6WyJmbGV4TWl4aW4iLCJjc3MiLCJDb2x1bW4iLCJzdHlsZWQiLCJkaXYiLCJDZWwiLCJTcGFuIiwic3BhbiIsIkNvbFRpdGxlIiwiUHJvZHVjdERldGFpbHMiLCJwcm9kdWN0IiwiY2F0ZWdvcnkiLCJpZCIsInVzZVN0YXRlIiwicXR5Iiwic2V0UXR5IiwiYWN0aXZlU3BlYyIsInNldEFjdGl2ZVNwZWMiLCJ0b2dnbGVkU3BlYyIsInNldFRvZ2dsZWRTcGVjIiwiUHJvZERldGFpbHMiLCJGZWF0dXJlc0RCIiwiZGV0YWlscyIsInF0eUhhbmRsZXIiLCJtb2RlIiwiZmVhdHVyZUhhbmRsZXIiLCJpbmRleCIsInN0YXRlIiwiaW5mbyIsImNvbHVtbiIsInJvd3MiLCJ0YWJsZSIsIm1hcCIsImNvbCIsInJvdyIsImZlYXRzIiwiZmVhdHVyZXMiLCJmZWF0dXJlIiwiaSIsImRpc3BsYXkiLCJ3aWR0aCIsImhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyw2REFBSCxtQkFBZjtBQU1BLElBQU1DLE1BQU0sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixvQkFBWjtLQUFNRixNO0FBS04sSUFBTUcsR0FBRyxHQUFHRix5REFBTSxDQUFDQyxHQUFWLHFCQUlMSixTQUpLLENBQVQ7TUFBTUssRztBQU9OLElBQU1DLElBQUksR0FBR0gseURBQU0sQ0FBQ0ksSUFBVixvQkFBVjtNQUFNRCxJO0FBS04sSUFBTUUsUUFBUSxHQUFHTCx5REFBTSxDQUFDQyxHQUFWLHFCQUtWSixTQUxVLENBQWQ7TUFBTVEs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Qyx3RUFBRDtBQUNFLFdBQUssRUFBRUEsQ0FEVDtBQUVFLFlBQU0sRUFBRUEsQ0FBQyxLQUFLdEIsVUFBTixJQUFvQkUsV0FGOUI7QUFHRSxjQUFRLEVBQUVvQixDQUFDLElBQUl0QixVQUFMLElBQW1CRSxXQUgvQjtBQUlFLGFBQU8sRUFBRTtBQUFBLGVBQU1PLGNBQWMsQ0FBQ2EsQ0FBRCxDQUFwQjtBQUFBLE9BSlg7QUFLRSxTQUFHLEVBQUVBLENBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT0QsT0FBUCxDQVBGLENBRHlCO0FBQUEsR0FBVixDQUFqQjtBQVlBLFNBQ0UsTUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDTEUsYUFBTyxFQUFFLE1BREo7QUFFTEMsV0FBSyxFQUFFLE9BRkY7QUFHTEMsWUFBTSxFQUFFLE9BSEg7QUFJTEMsb0JBQWMsRUFBRSxRQUpYO0FBS0xDLGdCQUFVLEVBQUU7QUFMUCxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTR1osS0FUSCxDQURGLENBREY7QUFtQ0QsQ0F4RkQ7O0dBQU10QixjOztNQUFBQSxjOztBQTBGU0EsNkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1twcm9kdWN0XS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgV3JhcHBlcixcbiAgQmFubmVyLFxuICBCYW5uZXJJbWFnZSxcbiAgRGV0YWlscyxcbiAgVGl0bGUsXG4gIEZlYXR1cmVzLFxuICBGZWF0dXJlLFxuICBQYW5lbCxcbiAgQWRkLFxuICBSZW1vdmUsXG4gIFF0eSxcbiAgQ1RBLFxuICBQdXJjaGFzZSxcbn0gZnJvbSBcIi4uLy4uL1N0eWxlZENvbXBvbmVudHMvcHJvZHVjdERldGFpbHNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhUGx1c0NpcmNsZSwgZmFNaW51c0NpcmNsZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IEJhY2tkcm9wIH0gZnJvbSBcIi4uLy4uL1N0eWxlZENvbXBvbmVudHMvbWFpblwiO1xuaW1wb3J0IEZlYXR1cmVzREIgZnJvbSBcIi4uLy4uL0RCL2NhdGFsb2cuanNvblwiO1xuaW1wb3J0IHN0eWxlZCwge2Nzc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IGZsZXhNaXhpbiA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBDb2x1bW4gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuY29uc3QgQ2VsID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiA0cmVtO1xuICB3aWR0aDogNnJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICR7ZmxleE1peGlufTtcbmA7XG5cbmNvbnN0IFNwYW4gPSBzdHlsZWQuc3BhbmBcbiAgcGFkZGluZzogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gO1xuXG5jb25zdCBDb2xUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA2cmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICR7ZmxleE1peGlufTtcbmA7XG5cbmNvbnN0IFByb2R1Y3REZXRhaWxzID0gKHsgcHJvZHVjdCwgY2F0ZWdvcnksIGlkIH0pID0+IHtcbiAgY29uc3QgW3F0eSwgc2V0UXR5XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbYWN0aXZlU3BlYywgc2V0QWN0aXZlU3BlY10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RvZ2dsZWRTcGVjLCBzZXRUb2dnbGVkU3BlY10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgUHJvZERldGFpbHMgPSBGZWF0dXJlc0RCLmRldGFpbHNbcHJvZHVjdF1bY2F0ZWdvcnldW2lkXTtcblxuICBjb25zdCBxdHlIYW5kbGVyID0gKG1vZGUpID0+IHtcbiAgICBpZiAobW9kZSA9PT0gXCJyZW1vdmVcIiAmJiBxdHkgPiAxKSB7XG4gICAgICBzZXRRdHkoKHF0eSkgPT4gcXR5IC0gMSk7XG4gICAgfVxuICAgIGlmIChtb2RlID09PSBcImFkZFwiKSB7XG4gICAgICBzZXRRdHkoKHF0eSkgPT4gcXR5ICsgMSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZlYXR1cmVIYW5kbGVyID0gKGluZGV4KSA9PiB7XG4gICAgaW5kZXggIT09IGFjdGl2ZVNwZWMgJiYgc2V0VG9nZ2xlZFNwZWModHJ1ZSk7XG4gICAgaW5kZXggPT09IGFjdGl2ZVNwZWMgJiYgc2V0VG9nZ2xlZFNwZWMoKHN0YXRlKSA9PiAhc3RhdGUpO1xuICAgIHNldEFjdGl2ZVNwZWMoaW5kZXgpO1xuICB9O1xuXG4gIGNvbnN0IGluZm8gPSBbXG4gICAgeyBjb2x1bW46IFwiQVwiLCByb3dzOiBbXCJhMVwiLCBcImEyXCJdIH0sXG4gICAgeyBjb2x1bW46IFwiQlwiLCByb3dzOiBbXCJiMVwiLCBcImIyXCJdIH0sXG4gIF07XG5cbiAgY29uc3QgdGFibGUgPSBpbmZvLm1hcCgoY29sKSA9PiAoXG4gICAgPENvbHVtbiBrZXk9e2NvbC5jb2x1bW59PlxuICAgICAgPENvbFRpdGxlPlxuICAgICAgICA8U3Bhbj57Y29sLmNvbHVtbn08L1NwYW4+XG4gICAgICA8L0NvbFRpdGxlPlxuICAgICAge2NvbC5yb3dzLm1hcCgocm93LCBpbmRleCkgPT4gKFxuICAgICAgICA8Q2VsIGtleT17aW5kZXh9PlxuICAgICAgICAgIDxTcGFuPntyb3d9PC9TcGFuPlxuICAgICAgICA8L0NlbD5cbiAgICAgICkpfVxuICAgIDwvQ29sdW1uPlxuICApKTtcblxuICBjb25zdCBmZWF0cyA9IFtcIlNvYnJlXCIsIFwiQ29tbyB1c2FyXCIsIFwiSW5ncmVkaWVudGVzXCIsIFwiUmV2aWV3c1wiXTtcbiAgY29uc3QgZmVhdHVyZXMgPSBmZWF0cy5tYXAoKGZlYXR1cmUsIGkpID0+IChcbiAgICA8RmVhdHVyZVxuICAgICAgaW5kZXg9e2l9XG4gICAgICBhY3RpdmU9e2kgPT09IGFjdGl2ZVNwZWMgJiYgdG9nZ2xlZFNwZWN9XG4gICAgICBpbmFjdGl2ZT17aSAhPSBhY3RpdmVTcGVjICYmIHRvZ2dsZWRTcGVjfVxuICAgICAgb25DbGljaz17KCkgPT4gZmVhdHVyZUhhbmRsZXIoaSl9XG4gICAgICBrZXk9e2l9XG4gICAgPlxuICAgICAgPHNwYW4+e2ZlYXR1cmV9PC9zcGFuPlxuICAgIDwvRmVhdHVyZT5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0YWJsZX1cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxCYW5uZXI+XG4gICAgICAgIDxCYW5uZXJJbWFnZSBzcmM9XCIvRGV0YWlsc1Rlc3QvdGVzdC5qcGdcIiBhbHQ9XCJiYW5uZXIgbG9nb1wiIC8+XG4gICAgICAgIDxUaXRsZT5DYWbDqSBCbGFjazwvVGl0bGU+XG4gICAgICAgIDxCYWNrZHJvcCBzdHlsZT17eyB6SW5kZXg6IDEgfX0gZm9yRWxlbWVudD17dHJ1ZX0gLz5cbiAgICAgIDwvQmFubmVyPlxuICAgICAgPERldGFpbHM+XG4gICAgICAgIDxGZWF0dXJlcyBpbmRleD17YWN0aXZlU3BlY30gYWN0aXZlRmVhdHVyZT17dG9nZ2xlZFNwZWN9PntmZWF0dXJlc308L0ZlYXR1cmVzPlxuICAgICAgICA8UGFuZWw+XG4gICAgICAgICAgPENUQT5Db21wcmU8L0NUQT5cbiAgICAgICAgICA8UHVyY2hhc2U+XG4gICAgICAgICAgICA8UmVtb3ZlIG9uQ2xpY2s9eygpID0+IHF0eUhhbmRsZXIoXCJyZW1vdmVcIil9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTWludXNDaXJjbGV9IC8+XG4gICAgICAgICAgICA8L1JlbW92ZT5cbiAgICAgICAgICAgIDxRdHk+e3F0eX08L1F0eT5cbiAgICAgICAgICAgIDxBZGQgb25DbGljaz17KCkgPT4gcXR5SGFuZGxlcihcImFkZFwiKX0+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQbHVzQ2lyY2xlfSAvPlxuICAgICAgICAgICAgPC9BZGQ+XG4gICAgICAgICAgPC9QdXJjaGFzZT5cbiAgICAgICAgPC9QYW5lbD5cbiAgICAgIDwvRGV0YWlscz4gKi99XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbHM7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBwcm9kdWN0ID0gY29udGV4dC5xdWVyeS5wcm9kdWN0O1xuICBjb25zdCBjYXRlZ29yeSA9IGNvbnRleHQucXVlcnkuYWN0aXZlQ2F0ZWdvcnk7XG4gIGNvbnN0IGlkID0gY29udGV4dC5xdWVyeS5pZDtcbiAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gIC8vICAgYGh0dHBzOi8vbWVsaS05OTUwOS5maXJlYmFzZWlvLmNvbS9jYXRhbG9nLyR7cHJvZHVjdH0vJHtjYXRlZ29yeX0vJHtpZH0uanNvbmBcbiAgLy8gKTtcbiAgLy8gY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdCxcbiAgICAgIGNhdGVnb3J5LFxuICAgICAgaWQsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/[product].js\n");

/***/ })

})