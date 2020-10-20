webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Products/ImagesModal.js":
/*!********************************************!*\
  !*** ./Components/Products/ImagesModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StyledComponents/productsItems */ \"./StyledComponents/productsItems.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Hooks/useWindowDimension */ \"./Hooks/useWindowDimension.js\");\n/* harmony import */ var _StyledComponents_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../StyledComponents/main */ \"./StyledComponents/main.js\");\n/* harmony import */ var _UI_Swipeable_Swipeable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../UI/Swipeable/Swipeable */ \"./UI/Swipeable/Swipeable.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Products/ImagesModal.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar ImagesModal = function ImagesModal(_ref) {\n  _s();\n\n  var images = _ref.images,\n      state = _ref.state,\n      closeModal = _ref.closeModal;\n\n  var _useWindowDimension = Object(_Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__[\"useWindowDimension\"])(),\n      _useWindowDimension2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useWindowDimension, 2),\n      width = _useWindowDimension2[0],\n      height = _useWindowDimension2[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ViewImages\"], {\n    size: \"2\",\n    displayWidth: width,\n    displayHeight: height,\n    state: state,\n    s: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(_UI_Swipeable_Swipeable__WEBPACK_IMPORTED_MODULE_7__[\"Gallery\"], {\n    rowWidth: \"100%\",\n    rowHeight: \"100%\",\n    markerActiveColor: \"orange\",\n    markerInactiveColor: \"gray\",\n    items: images.paths,\n    childProps: {\n      alt: \"\".concat(images.alt)\n    },\n    navColor: \"black\",\n    navInnerColor: \"white\",\n    navSize: 4,\n    navInnerHoverColor: \"orange\",\n    withNav: true,\n    navPosX: -100,\n    navPosY: 50,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  })), __jsx(_StyledComponents_main__WEBPACK_IMPORTED_MODULE_6__[\"Backdrop\"], {\n    forElement: false,\n    onClick: closeModal,\n    state: state,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(ImagesModal, \"l08ietNHdrtGCkDAHXgGOGRaKIY=\", false, function () {\n  return [_Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__[\"useWindowDimension\"]];\n});\n\n_c = ImagesModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagesModal);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImagesModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qcm9kdWN0cy9JbWFnZXNNb2RhbC5qcz9iZmUxIl0sIm5hbWVzIjpbIkltYWdlc01vZGFsIiwiaW1hZ2VzIiwic3RhdGUiLCJjbG9zZU1vZGFsIiwidXNlV2luZG93RGltZW5zaW9uIiwid2lkdGgiLCJoZWlnaHQiLCJwYXRocyIsImFsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFtQztBQUFBOztBQUFBLE1BQWhDQyxNQUFnQyxRQUFoQ0EsTUFBZ0M7QUFBQSxNQUF4QkMsS0FBd0IsUUFBeEJBLEtBQXdCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFBQSw0QkFDN0JDLG9GQUFrQixFQURXO0FBQUE7QUFBQSxNQUM5Q0MsS0FEOEM7QUFBQSxNQUN2Q0MsTUFEdUM7O0FBR3JELFNBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwRUFBRDtBQUFZLFFBQUksRUFBQyxHQUFqQjtBQUFxQixnQkFBWSxFQUFFRCxLQUFuQztBQUEwQyxpQkFBYSxFQUFFQyxNQUF6RDtBQUFpRSxTQUFLLEVBQUVKLEtBQXhFO0FBQStFLEtBQUMsTUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFDQSxZQUFRLEVBQUMsTUFEVDtBQUVBLGFBQVMsRUFBQyxNQUZWO0FBR0EscUJBQWlCLEVBQUMsUUFIbEI7QUFJQSx1QkFBbUIsRUFBQyxNQUpwQjtBQUtBLFNBQUssRUFBRUQsTUFBTSxDQUFDTSxLQUxkO0FBTUEsY0FBVSxFQUFFO0FBQ1ZDLFNBQUcsWUFBS1AsTUFBTSxDQUFDTyxHQUFaO0FBRE8sS0FOWjtBQVNBLFlBQVEsRUFBQyxPQVRUO0FBVUEsaUJBQWEsRUFBQyxPQVZkO0FBV0EsV0FBTyxFQUFFLENBWFQ7QUFZQSxzQkFBa0IsRUFBQyxRQVpuQjtBQWFBLFdBQU8sRUFBRSxJQWJUO0FBY0EsV0FBTyxFQUFFLENBQUMsR0FkVjtBQWVBLFdBQU8sRUFBRSxFQWZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBbUJFLE1BQUMsK0RBQUQ7QUFBVSxjQUFVLEVBQUUsS0FBdEI7QUFBNkIsV0FBTyxFQUFFTCxVQUF0QztBQUFrRCxTQUFLLEVBQUVELEtBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQkYsQ0FERjtBQXVCRCxDQTFCRDs7R0FBTUYsVztVQUNvQkksNEU7OztLQURwQkosVztBQTRCU0EsMEVBQWYiLCJmaWxlIjoiLi9Db21wb25lbnRzL1Byb2R1Y3RzL0ltYWdlc01vZGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBGcmFnbWVudCwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFZpZXdJbWFnZXMsXG4gIEltYWdlc1dyYXBwZXIsXG4gIEltYWdlc01hcmtlcldyYXBwZXIsXG4gIEltYWdlQXJyb3csXG59IGZyb20gXCIuLi8uLi9TdHlsZWRDb21wb25lbnRzL3Byb2R1Y3RzSXRlbXNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7XG4gIGZhQ2hldnJvblJpZ2h0LFxuICBmYUNoZXZyb25MZWZ0LFxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyB1c2VXaW5kb3dEaW1lbnNpb24gfSBmcm9tIFwiLi4vLi4vSG9va3MvdXNlV2luZG93RGltZW5zaW9uXCI7XG5pbXBvcnQgeyBCYWNrZHJvcCB9IGZyb20gXCIuLi8uLi9TdHlsZWRDb21wb25lbnRzL21haW5cIjtcbmltcG9ydCB7IEdhbGxlcnkgfSBmcm9tICcuLi8uLi9VSS9Td2lwZWFibGUvU3dpcGVhYmxlJztcblxuY29uc3QgSW1hZ2VzTW9kYWwgPSAoeyBpbWFnZXMsIHN0YXRlLCBjbG9zZU1vZGFsIH0pID0+IHtcbiAgY29uc3QgW3dpZHRoLCBoZWlnaHRdID0gdXNlV2luZG93RGltZW5zaW9uKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8Vmlld0ltYWdlcyBzaXplPScyJyBkaXNwbGF5V2lkdGg9e3dpZHRofSBkaXNwbGF5SGVpZ2h0PXtoZWlnaHR9IHN0YXRlPXtzdGF0ZX0gcz5cbiAgICAgICAgPEdhbGxlcnkgXG4gICAgICAgIHJvd1dpZHRoPVwiMTAwJVwiXG4gICAgICAgIHJvd0hlaWdodD1cIjEwMCVcIlxuICAgICAgICBtYXJrZXJBY3RpdmVDb2xvcj1cIm9yYW5nZVwiXG4gICAgICAgIG1hcmtlckluYWN0aXZlQ29sb3I9XCJncmF5XCJcbiAgICAgICAgaXRlbXM9e2ltYWdlcy5wYXRoc31cbiAgICAgICAgY2hpbGRQcm9wcz17e1xuICAgICAgICAgIGFsdDogYCR7aW1hZ2VzLmFsdH1gLFxuICAgICAgICB9fVxuICAgICAgICBuYXZDb2xvcj1cImJsYWNrXCJcbiAgICAgICAgbmF2SW5uZXJDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgbmF2U2l6ZT17NH1cbiAgICAgICAgbmF2SW5uZXJIb3ZlckNvbG9yPVwib3JhbmdlXCJcbiAgICAgICAgd2l0aE5hdj17dHJ1ZX1cbiAgICAgICAgbmF2UG9zWD17LTEwMH1cbiAgICAgICAgbmF2UG9zWT17NTB9Lz5cbiAgICAgIDwvVmlld0ltYWdlcz5cbiAgICAgIDxCYWNrZHJvcCBmb3JFbGVtZW50PXtmYWxzZX0gb25DbGljaz17Y2xvc2VNb2RhbH0gc3RhdGU9e3N0YXRlfSAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZXNNb2RhbDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Products/ImagesModal.js\n");

/***/ })

})