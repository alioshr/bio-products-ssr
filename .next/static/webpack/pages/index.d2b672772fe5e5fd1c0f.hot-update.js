webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Products/ImagesModal.js":
/*!********************************************!*\
  !*** ./Components/Products/ImagesModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StyledComponents/productsItems */ \"./StyledComponents/productsItems.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Hooks/useWindowDimension */ \"./Hooks/useWindowDimension.js\");\n/* harmony import */ var _StyledComponents_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../StyledComponents/main */ \"./StyledComponents/main.js\");\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Products/ImagesModal.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar ImagesModal = function ImagesModal(_ref) {\n  _s();\n\n  var images = _ref.images,\n      state = _ref.state,\n      closeModal = _ref.closeModal;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      activePic = _useState[0],\n      setActivePic = _useState[1];\n\n  var _useWindowDimension = Object(_Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__[\"useWindowDimension\"])(),\n      _useWindowDimension2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useWindowDimension, 2),\n      width = _useWindowDimension2[0],\n      height = _useWindowDimension2[1];\n\n  var imgs = images.paths.map(function (img, i) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImageInnerWrapper\"], {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n      displayWidth: width,\n      displayHeight: height,\n      id: img,\n      src: img,\n      alt: images.alt,\n      modal: true,\n      slide: activePic,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 7\n      }\n    }));\n  });\n  var markers = images.paths.map(function (a, i) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImagesMarker\"], {\n      onClick: function onClick() {\n        return setActivePic(i);\n      },\n      active: i === activePic,\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 5\n      }\n    });\n  });\n\n  var swapPicturesHandler = function swapPicturesHandler(direction) {\n    if (activePic < images.paths.length - 1 && direction === \"right\") {\n      setActivePic(function (state) {\n        return state + 1;\n      });\n    }\n\n    if (activePic > 0 && direction === \"left\") {\n      setActivePic(function (state) {\n        return state - 1;\n      });\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ViewImages\"], {\n    displayWidth: width,\n    displayHeight: height,\n    state: state,\n    s: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImagesWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, imgs), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImagesMarkerWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, markers), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImageArrow\"], {\n    onClick: function onClick() {\n      return swapPicturesHandler(\"left\");\n    },\n    position: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faChevronLeft\"],\n    size: \"4x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  })), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImageArrow\"], {\n    onClick: function onClick() {\n      return swapPicturesHandler(\"right\");\n    },\n    position: \"right\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faChevronRight\"],\n    size: \"4x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }))), __jsx(_StyledComponents_main__WEBPACK_IMPORTED_MODULE_6__[\"Backdrop\"], {\n    forElement: false,\n    onClick: closeModal,\n    state: state,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(ImagesModal, \"UFINyO9cXf49+tCZ2ItsbhHngOE=\", false, function () {\n  return [_Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__[\"useWindowDimension\"]];\n});\n\n_c = ImagesModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagesModal);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImagesModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qcm9kdWN0cy9JbWFnZXNNb2RhbC5qcz9iZmUxIl0sIm5hbWVzIjpbIkltYWdlc01vZGFsIiwiaW1hZ2VzIiwic3RhdGUiLCJjbG9zZU1vZGFsIiwidXNlU3RhdGUiLCJhY3RpdmVQaWMiLCJzZXRBY3RpdmVQaWMiLCJ1c2VXaW5kb3dEaW1lbnNpb24iLCJ3aWR0aCIsImhlaWdodCIsImltZ3MiLCJwYXRocyIsIm1hcCIsImltZyIsImkiLCJhbHQiLCJtYXJrZXJzIiwiYSIsInN3YXBQaWN0dXJlc0hhbmRsZXIiLCJkaXJlY3Rpb24iLCJsZW5ndGgiLCJmYUNoZXZyb25MZWZ0IiwiZmFDaGV2cm9uUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBbUM7QUFBQTs7QUFBQSxNQUFoQ0MsTUFBZ0MsUUFBaENBLE1BQWdDO0FBQUEsTUFBeEJDLEtBQXdCLFFBQXhCQSxLQUF3QjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7O0FBQUEsa0JBQ25CQyxzREFBUSxDQUFDLENBQUQsQ0FEVztBQUFBLE1BQzlDQyxTQUQ4QztBQUFBLE1BQ25DQyxZQURtQzs7QUFBQSw0QkFFN0JDLG9GQUFrQixFQUZXO0FBQUE7QUFBQSxNQUU5Q0MsS0FGOEM7QUFBQSxNQUV2Q0MsTUFGdUM7O0FBSXJELE1BQU1DLElBQUksR0FBR1QsTUFBTSxDQUFDVSxLQUFQLENBQWFDLEdBQWIsQ0FBaUIsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOO0FBQUEsV0FDNUIsTUFBQyxpRkFBRDtBQUFtQixTQUFHLEVBQUVBLENBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHFFQUFEO0FBQ0Usa0JBQVksRUFBRU4sS0FEaEI7QUFFRSxtQkFBYSxFQUFFQyxNQUZq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RUFBZiIsImZpbGUiOiIuL0NvbXBvbmVudHMvUHJvZHVjdHMvSW1hZ2VzTW9kYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgRnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgSW1hZ2VJbm5lcldyYXBwZXIsXG4gIEltYWdlLFxuICBJbWFnZXNNYXJrZXIsXG4gIFZpZXdJbWFnZXMsXG4gIEltYWdlc1dyYXBwZXIsXG4gIEltYWdlc01hcmtlcldyYXBwZXIsXG4gIEltYWdlQXJyb3csXG59IGZyb20gXCIuLi8uLi9TdHlsZWRDb21wb25lbnRzL3Byb2R1Y3RzSXRlbXNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7XG4gIGZhQ2hldnJvblJpZ2h0LFxuICBmYUNoZXZyb25MZWZ0LFxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyB1c2VXaW5kb3dEaW1lbnNpb24gfSBmcm9tIFwiLi4vLi4vSG9va3MvdXNlV2luZG93RGltZW5zaW9uXCI7XG5pbXBvcnQgeyBCYWNrZHJvcCB9IGZyb20gXCIuLi8uLi9TdHlsZWRDb21wb25lbnRzL21haW5cIjtcbmltcG9ydCB7dXNlU2Nyb2xsUG9zaXRpb259IGZyb20gJy4uLy4uL0hvb2tzL3VzZVNjcm9sbFBvc2l0aW9uJ1xuXG5cblxuY29uc3QgSW1hZ2VzTW9kYWwgPSAoeyBpbWFnZXMsIHN0YXRlLCBjbG9zZU1vZGFsIH0pID0+IHtcbiAgY29uc3QgW2FjdGl2ZVBpYywgc2V0QWN0aXZlUGljXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSB1c2VXaW5kb3dEaW1lbnNpb24oKTtcblxuICBjb25zdCBpbWdzID0gaW1hZ2VzLnBhdGhzLm1hcCgoaW1nLCBpKSA9PiAoXG4gICAgPEltYWdlSW5uZXJXcmFwcGVyIGtleT17aX0+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgZGlzcGxheVdpZHRoPXt3aWR0aH1cbiAgICAgICAgZGlzcGxheUhlaWdodD17aGVpZ2h0fVxuICAgICAgICBpZD17aW1nfVxuICAgICAgICBzcmM9e2ltZ31cbiAgICAgICAgYWx0PXtpbWFnZXMuYWx0fVxuICAgICAgICBtb2RhbFxuICAgICAgICBzbGlkZT17YWN0aXZlUGljfVxuICAgICAgLz5cbiAgICA8L0ltYWdlSW5uZXJXcmFwcGVyPlxuICApKTtcblxuICBjb25zdCBtYXJrZXJzID0gaW1hZ2VzLnBhdGhzLm1hcCgoYSwgaSkgPT4gKFxuICAgIDxJbWFnZXNNYXJrZXJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVBpYyhpKX1cbiAgICAgIGFjdGl2ZT17aSA9PT0gYWN0aXZlUGljfVxuICAgICAga2V5PXtpfVxuICAgIC8+XG4gICkpO1xuXG4gIGNvbnN0IHN3YXBQaWN0dXJlc0hhbmRsZXIgPSAoZGlyZWN0aW9uKSA9PiB7XG4gICAgaWYgKGFjdGl2ZVBpYyA8IGltYWdlcy5wYXRocy5sZW5ndGggLSAxICYmIGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICBzZXRBY3RpdmVQaWMoKHN0YXRlKSA9PiBzdGF0ZSArIDEpO1xuICAgIH1cbiAgICBpZiAoYWN0aXZlUGljID4gMCAmJiBkaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICBzZXRBY3RpdmVQaWMoKHN0YXRlKSA9PiBzdGF0ZSAtIDEpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8Vmlld0ltYWdlcyBkaXNwbGF5V2lkdGg9e3dpZHRofSBkaXNwbGF5SGVpZ2h0PXtoZWlnaHR9IHN0YXRlPXtzdGF0ZX0gcz5cbiAgICAgICAgPEltYWdlc1dyYXBwZXI+e2ltZ3N9PC9JbWFnZXNXcmFwcGVyPlxuICAgICAgICA8SW1hZ2VzTWFya2VyV3JhcHBlcj57bWFya2Vyc308L0ltYWdlc01hcmtlcldyYXBwZXI+XG4gICAgICAgIDxJbWFnZUFycm93IG9uQ2xpY2s9eygpID0+IHN3YXBQaWN0dXJlc0hhbmRsZXIoXCJsZWZ0XCIpfSBwb3NpdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvbkxlZnR9IHNpemU9XCI0eFwiIC8+XG4gICAgICAgIDwvSW1hZ2VBcnJvdz5cbiAgICAgICAgPEltYWdlQXJyb3dcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzd2FwUGljdHVyZXNIYW5kbGVyKFwicmlnaHRcIil9XG4gICAgICAgICAgcG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgID5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzaXplPVwiNHhcIiAvPlxuICAgICAgICA8L0ltYWdlQXJyb3c+XG4gICAgICA8L1ZpZXdJbWFnZXM+XG4gICAgICA8QmFja2Ryb3AgZm9yRWxlbWVudD17ZmFsc2V9IG9uQ2xpY2s9e2Nsb3NlTW9kYWx9IHN0YXRlPXtzdGF0ZX0gLz5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VzTW9kYWw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Products/ImagesModal.js\n");

/***/ })

})