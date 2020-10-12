webpackHotUpdate_N_E("pages/product/[product]",{

/***/ "./pages/product/[product].js":
/*!************************************!*\
  !*** ./pages/product/[product].js ***!
  \************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StyledComponents/productDetails */ \"./StyledComponents/productDetails.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _StyledComponents_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../StyledComponents/main */ \"./StyledComponents/main.js\");\n/* harmony import */ var _DB_catalog_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../DB/catalog.json */ \"./DB/catalog.json\");\nvar _DB_catalog_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../DB/catalog.json */ \"./DB/catalog.json\", 1);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/.pnpm/registry.npmjs.org/styled-components/5.2.0_2aeffab7d644b928458b96d6399100c6/node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/pages/product/[product].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 2rem;\\n  font-weight: bold;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  height: 100%;\\n  width: 100%;\\n  border: 1px solid black;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  grid-area: cel;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: column;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nvar Column = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject());\nvar Cel = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject2());\n_c = Cel;\nvar Span = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].span(_templateObject3());\n_c2 = Span;\n\nvar ProductDetails = function ProductDetails(_ref) {\n  _s();\n\n  var product = _ref.product,\n      category = _ref.category,\n      id = _ref.id;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      qty = _useState[0],\n      setQty = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      activeSpec = _useState2[0],\n      setActiveSpec = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      toggledSpec = _useState3[0],\n      setToggledSpec = _useState3[1];\n\n  var ProdDetails = _DB_catalog_json__WEBPACK_IMPORTED_MODULE_6__.details[product][category][id];\n\n  var qtyHandler = function qtyHandler(mode) {\n    if (mode === \"remove\" && qty > 1) {\n      setQty(function (qty) {\n        return qty - 1;\n      });\n    }\n\n    if (mode === \"add\") {\n      setQty(function (qty) {\n        return qty + 1;\n      });\n    }\n  };\n\n  var featureHandler = function featureHandler(index) {\n    index !== activeSpec && setToggledSpec(true);\n    index === activeSpec && setToggledSpec(function (state) {\n      return !state;\n    });\n    setActiveSpec(index);\n  };\n\n  var info = [{\n    id: \"a\",\n    data: [\"a1\", \"a2\"]\n  }, {\n    id: \"b\",\n    data: [\"b1\", \"b2\"]\n  }];\n  var data = info.map(function (col) {\n    return __jsx(Cel, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 5\n      }\n    }, __jsx(Span, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 7\n      }\n    }, i));\n  });\n  var feats = [\"Sobre\", \"Como usar\", \"Ingredientes\", \"Reviews\"];\n  var features = feats.map(function (feature, i) {\n    return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Feature\"], {\n      index: i,\n      active: i === activeSpec && toggledSpec,\n      inactive: i != activeSpec && toggledSpec,\n      onClick: function onClick() {\n        return featureHandler(i);\n      },\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 5\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 7\n      }\n    }, feature));\n  });\n  return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Wrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 5\n    }\n  }, __jsx(Col, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }\n  }, data));\n};\n\n_s(ProductDetails, \"ep3X3ZJZXgtmj6Goq/nJZwCkwKM=\");\n\n_c3 = ProductDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Cel\");\n$RefreshReg$(_c2, \"Span\");\n$RefreshReg$(_c3, \"ProductDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bcHJvZHVjdF0uanM/Y2E1YSJdLCJuYW1lcyI6WyJDb2x1bW4iLCJzdHlsZWQiLCJkaXYiLCJDZWwiLCJTcGFuIiwic3BhbiIsIlByb2R1Y3REZXRhaWxzIiwicHJvZHVjdCIsImNhdGVnb3J5IiwiaWQiLCJ1c2VTdGF0ZSIsInF0eSIsInNldFF0eSIsImFjdGl2ZVNwZWMiLCJzZXRBY3RpdmVTcGVjIiwidG9nZ2xlZFNwZWMiLCJzZXRUb2dnbGVkU3BlYyIsIlByb2REZXRhaWxzIiwiRmVhdHVyZXNEQiIsImRldGFpbHMiLCJxdHlIYW5kbGVyIiwibW9kZSIsImZlYXR1cmVIYW5kbGVyIiwiaW5kZXgiLCJzdGF0ZSIsImluZm8iLCJkYXRhIiwibWFwIiwiY29sIiwiaSIsImZlYXRzIiwiZmVhdHVyZXMiLCJmZWF0dXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFaO0FBS0EsSUFBTUMsR0FBRyxHQUFHRix5REFBTSxDQUFDQyxHQUFWLG9CQUFUO0tBQU1DLEc7QUFVTixJQUFNQyxJQUFJLEdBQUdILHlEQUFNLENBQUNJLElBQVYsb0JBQVY7TUFBTUQsSTs7QUFLTixJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLE9BQTRCLFFBQTVCQSxPQUE0QjtBQUFBLE1BQW5CQyxRQUFtQixRQUFuQkEsUUFBbUI7QUFBQSxNQUFUQyxFQUFTLFFBQVRBLEVBQVM7O0FBQUEsa0JBQzlCQyxzREFBUSxDQUFDLENBQUQsQ0FEc0I7QUFBQSxNQUM3Q0MsR0FENkM7QUFBQSxNQUN4Q0MsTUFEd0M7O0FBQUEsbUJBRWhCRixzREFBUSxDQUFDLENBQUQsQ0FGUTtBQUFBLE1BRTdDRyxVQUY2QztBQUFBLE1BRWpDQyxhQUZpQzs7QUFBQSxtQkFHZEosc0RBQVEsQ0FBQyxLQUFELENBSE07QUFBQSxNQUc3Q0ssV0FINkM7QUFBQSxNQUdoQ0MsY0FIZ0M7O0FBS3BELE1BQU1DLFdBQVcsR0FBR0MsNkNBQVUsQ0FBQ0MsT0FBWCxDQUFtQlosT0FBbkIsRUFBNEJDLFFBQTVCLEVBQXNDQyxFQUF0QyxDQUFwQjs7QUFFQSxNQUFNVyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVBQVU7QUFDM0IsUUFBSUEsSUFBSSxLQUFLLFFBQVQsSUFBcUJWLEdBQUcsR0FBRyxDQUEvQixFQUFrQztBQUNoQ0MsWUFBTSxDQUFDLFVBQUNELEdBQUQ7QUFBQSxlQUFTQSxHQUFHLEdBQUcsQ0FBZjtBQUFBLE9BQUQsQ0FBTjtBQUNEOztBQUNELFFBQUlVLElBQUksS0FBSyxLQUFiLEVBQW9CO0FBQ2xCVCxZQUFNLENBQUMsVUFBQ0QsR0FBRDtBQUFBLGVBQVNBLEdBQUcsR0FBRyxDQUFmO0FBQUEsT0FBRCxDQUFOO0FBQ0Q7QUFDRixHQVBEOztBQVNBLE1BQU1XLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2hDQSxTQUFLLEtBQUtWLFVBQVYsSUFBd0JHLGNBQWMsQ0FBQyxJQUFELENBQXRDO0FBQ0FPLFNBQUssS0FBS1YsVUFBVixJQUF3QkcsY0FBYyxDQUFDLFVBQUNRLEtBQUQ7QUFBQSxhQUFXLENBQUNBLEtBQVo7QUFBQSxLQUFELENBQXRDO0FBQ0FWLGlCQUFhLENBQUNTLEtBQUQsQ0FBYjtBQUNELEdBSkQ7O0FBTUEsTUFBTUUsSUFBSSxHQUFHLENBQ1g7QUFBRWhCLE1BQUUsRUFBRSxHQUFOO0FBQVdpQixRQUFJLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUDtBQUFqQixHQURXLEVBRVg7QUFBRWpCLE1BQUUsRUFBRSxHQUFOO0FBQVdpQixRQUFJLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUDtBQUFqQixHQUZXLENBQWI7QUFLQSxNQUFNQSxJQUFJLEdBQUdELElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUNDLEdBQUQ7QUFBQSxXQUNwQixNQUFDLEdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9DLENBQVAsQ0FERixDQURvQjtBQUFBLEdBQVQsQ0FBYjtBQU1BLE1BQU1DLEtBQUssR0FBRyxDQUFDLE9BQUQsRUFBVSxXQUFWLEVBQXVCLGNBQXZCLEVBQXVDLFNBQXZDLENBQWQ7QUFDQSxNQUFNQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0gsR0FBTixDQUFVLFVBQUNLLE9BQUQsRUFBVUgsQ0FBVjtBQUFBLFdBQ3pCLE1BQUMsd0VBQUQ7QUFDRSxXQUFLLEVBQUVBLENBRFQ7QUFFRSxZQUFNLEVBQUVBLENBQUMsS0FBS2hCLFVBQU4sSUFBb0JFLFdBRjlCO0FBR0UsY0FBUSxFQUFFYyxDQUFDLElBQUloQixVQUFMLElBQW1CRSxXQUgvQjtBQUlFLGFBQU8sRUFBRTtBQUFBLGVBQU1PLGNBQWMsQ0FBQ08sQ0FBRCxDQUFwQjtBQUFBLE9BSlg7QUFLRSxTQUFHLEVBQUVBLENBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT0csT0FBUCxDQVBGLENBRHlCO0FBQUEsR0FBVixDQUFqQjtBQVlBLFNBQ0UsTUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTU4sSUFBTixDQURGLENBREY7QUF5QkQsQ0F2RUQ7O0dBQU1wQixjOztNQUFBQSxjOztBQXlFU0EsNkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1twcm9kdWN0XS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgV3JhcHBlcixcbiAgQmFubmVyLFxuICBCYW5uZXJJbWFnZSxcbiAgRGV0YWlscyxcbiAgVGl0bGUsXG4gIEZlYXR1cmVzLFxuICBGZWF0dXJlLFxuICBQYW5lbCxcbiAgQWRkLFxuICBSZW1vdmUsXG4gIFF0eSxcbiAgQ1RBLFxuICBQdXJjaGFzZSxcbn0gZnJvbSBcIi4uLy4uL1N0eWxlZENvbXBvbmVudHMvcHJvZHVjdERldGFpbHNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhUGx1c0NpcmNsZSwgZmFNaW51c0NpcmNsZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IEJhY2tkcm9wIH0gZnJvbSBcIi4uLy4uL1N0eWxlZENvbXBvbmVudHMvbWFpblwiO1xuaW1wb3J0IEZlYXR1cmVzREIgZnJvbSBcIi4uLy4uL0RCL2NhdGFsb2cuanNvblwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgQ29sdW1uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5cbmNvbnN0IENlbCA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC1hcmVhOiBjZWw7XG5gO1xuXG5jb25zdCBTcGFuID0gc3R5bGVkLnNwYW5gXG4gIHBhZGRpbmc6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYDtcblxuY29uc3QgUHJvZHVjdERldGFpbHMgPSAoeyBwcm9kdWN0LCBjYXRlZ29yeSwgaWQgfSkgPT4ge1xuICBjb25zdCBbcXR5LCBzZXRRdHldID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFthY3RpdmVTcGVjLCBzZXRBY3RpdmVTcGVjXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdG9nZ2xlZFNwZWMsIHNldFRvZ2dsZWRTcGVjXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBQcm9kRGV0YWlscyA9IEZlYXR1cmVzREIuZGV0YWlsc1twcm9kdWN0XVtjYXRlZ29yeV1baWRdO1xuXG4gIGNvbnN0IHF0eUhhbmRsZXIgPSAobW9kZSkgPT4ge1xuICAgIGlmIChtb2RlID09PSBcInJlbW92ZVwiICYmIHF0eSA+IDEpIHtcbiAgICAgIHNldFF0eSgocXR5KSA9PiBxdHkgLSAxKTtcbiAgICB9XG4gICAgaWYgKG1vZGUgPT09IFwiYWRkXCIpIHtcbiAgICAgIHNldFF0eSgocXR5KSA9PiBxdHkgKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmVhdHVyZUhhbmRsZXIgPSAoaW5kZXgpID0+IHtcbiAgICBpbmRleCAhPT0gYWN0aXZlU3BlYyAmJiBzZXRUb2dnbGVkU3BlYyh0cnVlKTtcbiAgICBpbmRleCA9PT0gYWN0aXZlU3BlYyAmJiBzZXRUb2dnbGVkU3BlYygoc3RhdGUpID0+ICFzdGF0ZSk7XG4gICAgc2V0QWN0aXZlU3BlYyhpbmRleCk7XG4gIH07XG5cbiAgY29uc3QgaW5mbyA9IFtcbiAgICB7IGlkOiBcImFcIiwgZGF0YTogW1wiYTFcIiwgXCJhMlwiXSB9LFxuICAgIHsgaWQ6IFwiYlwiLCBkYXRhOiBbXCJiMVwiLCBcImIyXCJdIH0sXG4gIF07XG5cbiAgY29uc3QgZGF0YSA9IGluZm8ubWFwKChjb2wpID0+IChcbiAgICA8Q2VsPlxuICAgICAgPFNwYW4+e2l9PC9TcGFuPlxuICAgIDwvQ2VsPlxuICApKTtcblxuICBjb25zdCBmZWF0cyA9IFtcIlNvYnJlXCIsIFwiQ29tbyB1c2FyXCIsIFwiSW5ncmVkaWVudGVzXCIsIFwiUmV2aWV3c1wiXTtcbiAgY29uc3QgZmVhdHVyZXMgPSBmZWF0cy5tYXAoKGZlYXR1cmUsIGkpID0+IChcbiAgICA8RmVhdHVyZVxuICAgICAgaW5kZXg9e2l9XG4gICAgICBhY3RpdmU9e2kgPT09IGFjdGl2ZVNwZWMgJiYgdG9nZ2xlZFNwZWN9XG4gICAgICBpbmFjdGl2ZT17aSAhPSBhY3RpdmVTcGVjICYmIHRvZ2dsZWRTcGVjfVxuICAgICAgb25DbGljaz17KCkgPT4gZmVhdHVyZUhhbmRsZXIoaSl9XG4gICAgICBrZXk9e2l9XG4gICAgPlxuICAgICAgPHNwYW4+e2ZlYXR1cmV9PC9zcGFuPlxuICAgIDwvRmVhdHVyZT5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxDb2w+e2RhdGF9PC9Db2w+XG4gICAgICB7LyogPEJhbm5lcj5cbiAgICAgICAgPEJhbm5lckltYWdlIHNyYz1cIi9EZXRhaWxzVGVzdC90ZXN0LmpwZ1wiIGFsdD1cImJhbm5lciBsb2dvXCIgLz5cbiAgICAgICAgPFRpdGxlPkNhZsOpIEJsYWNrPC9UaXRsZT5cbiAgICAgICAgPEJhY2tkcm9wIHN0eWxlPXt7IHpJbmRleDogMSB9fSBmb3JFbGVtZW50PXt0cnVlfSAvPlxuICAgICAgPC9CYW5uZXI+XG4gICAgICA8RGV0YWlscz5cbiAgICAgICAgPEZlYXR1cmVzIGluZGV4PXthY3RpdmVTcGVjfSBhY3RpdmVGZWF0dXJlPXt0b2dnbGVkU3BlY30+e2ZlYXR1cmVzfTwvRmVhdHVyZXM+XG4gICAgICAgIDxQYW5lbD5cbiAgICAgICAgICA8Q1RBPkNvbXByZTwvQ1RBPlxuICAgICAgICAgIDxQdXJjaGFzZT5cbiAgICAgICAgICAgIDxSZW1vdmUgb25DbGljaz17KCkgPT4gcXR5SGFuZGxlcihcInJlbW92ZVwiKX0+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFNaW51c0NpcmNsZX0gLz5cbiAgICAgICAgICAgIDwvUmVtb3ZlPlxuICAgICAgICAgICAgPFF0eT57cXR5fTwvUXR5PlxuICAgICAgICAgICAgPEFkZCBvbkNsaWNrPXsoKSA9PiBxdHlIYW5kbGVyKFwiYWRkXCIpfT5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXNDaXJjbGV9IC8+XG4gICAgICAgICAgICA8L0FkZD5cbiAgICAgICAgICA8L1B1cmNoYXNlPlxuICAgICAgICA8L1BhbmVsPlxuICAgICAgPC9EZXRhaWxzPiAqL31cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlscztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHByb2R1Y3QgPSBjb250ZXh0LnF1ZXJ5LnByb2R1Y3Q7XG4gIGNvbnN0IGNhdGVnb3J5ID0gY29udGV4dC5xdWVyeS5hY3RpdmVDYXRlZ29yeTtcbiAgY29uc3QgaWQgPSBjb250ZXh0LnF1ZXJ5LmlkO1xuICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgLy8gICBgaHR0cHM6Ly9tZWxpLTk5NTA5LmZpcmViYXNlaW8uY29tL2NhdGFsb2cvJHtwcm9kdWN0fS8ke2NhdGVnb3J5fS8ke2lkfS5qc29uYFxuICAvLyApO1xuICAvLyBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0LFxuICAgICAgY2F0ZWdvcnksXG4gICAgICBpZCxcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[product].js\n");

/***/ })

})