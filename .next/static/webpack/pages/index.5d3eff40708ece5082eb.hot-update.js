webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Products/ImagesModal.js":
/*!********************************************!*\
  !*** ./Components/Products/ImagesModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StyledComponents/productsItems */ \"./StyledComponents/productsItems.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Hooks/useWindowDimension */ \"./Hooks/useWindowDimension.js\");\n/* harmony import */ var _StyledComponents_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../StyledComponents/main */ \"./StyledComponents/main.js\");\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Products/ImagesModal.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar ImagesModal = function ImagesModal(_ref) {\n  _s();\n\n  var images = _ref.images,\n      state = _ref.state,\n      closeModal = _ref.closeModal;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      activePic = _useState[0],\n      setActivePic = _useState[1];\n\n  var _useWindowDimension = Object(_Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__[\"useWindowDimension\"])(),\n      _useWindowDimension2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useWindowDimension, 2),\n      width = _useWindowDimension2[0],\n      height = _useWindowDimension2[1];\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  console.log(ref.current);\n  Object(_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_7__[\"useScrollPosition\"])(function (_ref2) {\n    var prevPos = _ref2.prevPos,\n        currPos = _ref2.currPos;\n    console.log();\n  }, [], false, ref, 150);\n  var imgs = images.paths.map(function (img, i) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImageInnerWrapper\"], {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n      displayWidth: width,\n      displayHeight: height,\n      id: img,\n      src: img,\n      alt: images.alt,\n      modal: true,\n      slide: activePic,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 7\n      }\n    }));\n  });\n  var markers = images.paths.map(function (a, i) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImagesMarker\"], {\n      onClick: function onClick() {\n        return setActivePic(i);\n      },\n      active: i === activePic,\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 5\n      }\n    });\n  });\n\n  var swapPicturesHandler = function swapPicturesHandler(direction) {\n    if (activePic < images.paths.length - 1 && direction === \"right\") {\n      setActivePic(function (state) {\n        return state + 1;\n      });\n    }\n\n    if (activePic > 0 && direction === \"left\") {\n      setActivePic(function (state) {\n        return state - 1;\n      });\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ViewImages\"], {\n    displayWidth: width,\n    displayHeight: height,\n    state: state,\n    s: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImagesWrapper\"], {\n    ref: ref,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, imgs), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImagesMarkerWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, markers), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImageArrow\"], {\n    onClick: function onClick() {\n      return swapPicturesHandler(\"left\");\n    },\n    position: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faChevronLeft\"],\n    size: \"4x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 11\n    }\n  })), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImageArrow\"], {\n    onClick: function onClick() {\n      return swapPicturesHandler(\"right\");\n    },\n    position: \"right\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faChevronRight\"],\n    size: \"4x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }))), __jsx(_StyledComponents_main__WEBPACK_IMPORTED_MODULE_6__[\"Backdrop\"], {\n    forElement: false,\n    onClick: closeModal,\n    state: state,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(ImagesModal, \"eTqZTTzamQIAmXO8jX/+4K6hEZY=\", false, function () {\n  return [_Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__[\"useWindowDimension\"], _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_7__[\"useScrollPosition\"]];\n});\n\n_c = ImagesModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagesModal);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImagesModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qcm9kdWN0cy9JbWFnZXNNb2RhbC5qcz9iZmUxIl0sIm5hbWVzIjpbIkltYWdlc01vZGFsIiwiaW1hZ2VzIiwic3RhdGUiLCJjbG9zZU1vZGFsIiwidXNlU3RhdGUiLCJhY3RpdmVQaWMiLCJzZXRBY3RpdmVQaWMiLCJ1c2VXaW5kb3dEaW1lbnNpb24iLCJ3aWR0aCIsImhlaWdodCIsInJlZiIsInVzZVJlZiIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwidXNlU2Nyb2xsUG9zaXRpb24iLCJwcmV2UG9zIiwiY3VyclBvcyIsImltZ3MiLCJwYXRocyIsIm1hcCIsImltZyIsImkiLCJhbHQiLCJtYXJrZXJzIiwiYSIsInN3YXBQaWN0dXJlc0hhbmRsZXIiLCJkaXJlY3Rpb24iLCJsZW5ndGgiLCJmYUNoZXZyb25MZWZ0IiwiZmFDaGV2cm9uUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBbUM7QUFBQTs7QUFBQSxNQUFoQ0MsTUFBZ0MsUUFBaENBLE1BQWdDO0FBQUEsTUFBeEJDLEtBQXdCLFFBQXhCQSxLQUF3QjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7O0FBQUEsa0JBQ25CQyxzREFBUSxDQUFDLENBQUQsQ0FEVztBQUFBLE1BQzlDQyxTQUQ4QztBQUFBLE1BQ25DQyxZQURtQzs7QUFBQSw0QkFFN0JDLG9GQUFrQixFQUZXO0FBQUE7QUFBQSxNQUU5Q0MsS0FGOEM7QUFBQSxNQUV2Q0MsTUFGdUM7O0FBR3JELE1BQU1DLEdBQUcsR0FBR0Msb0RBQU0sRUFBbEI7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQUcsQ0FBQ0ksT0FBaEI7QUFFQUMsb0ZBQWlCLENBQ2YsaUJBQTBCO0FBQUEsUUFBdkJDLE9BQXVCLFNBQXZCQSxPQUF1QjtB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Q0FBekI7QUFBQSxLQURYO0FBRUUsWUFBUSxFQUFDLE9BRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFFSSxnRkFBdkI7QUFBdUMsUUFBSSxFQUFDLElBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQU5GLENBREYsRUFjRSxNQUFDLCtEQUFEO0FBQVUsY0FBVSxFQUFFLEtBQXRCO0FBQTZCLFdBQU8sRUFBRTNCLFVBQXRDO0FBQWtELFNBQUssRUFBRUQsS0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLENBREY7QUFrQkQsQ0FqRUQ7O0dBQU1GLFc7VUFFb0JPLDRFLEVBS3hCUSwwRTs7O0tBUElmLFc7QUFtRVNBLDBFQUFmIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9Qcm9kdWN0cy9JbWFnZXNNb2RhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCBGcmFnbWVudCwgdXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEltYWdlSW5uZXJXcmFwcGVyLFxuICBJbWFnZSxcbiAgSW1hZ2VzTWFya2VyLFxuICBWaWV3SW1hZ2VzLFxuICBJbWFnZXNXcmFwcGVyLFxuICBJbWFnZXNNYXJrZXJXcmFwcGVyLFxuICBJbWFnZUFycm93LFxufSBmcm9tIFwiLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9wcm9kdWN0c0l0ZW1zXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQge1xuICBmYUNoZXZyb25SaWdodCxcbiAgZmFDaGV2cm9uTGVmdCxcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgdXNlV2luZG93RGltZW5zaW9uIH0gZnJvbSBcIi4uLy4uL0hvb2tzL3VzZVdpbmRvd0RpbWVuc2lvblwiO1xuaW1wb3J0IHsgQmFja2Ryb3AgfSBmcm9tIFwiLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9tYWluXCI7XG5pbXBvcnQge3VzZVNjcm9sbFBvc2l0aW9ufSBmcm9tICcuLi8uLi9Ib29rcy91c2VTY3JvbGxQb3NpdGlvbidcblxuY29uc3QgSW1hZ2VzTW9kYWwgPSAoeyBpbWFnZXMsIHN0YXRlLCBjbG9zZU1vZGFsIH0pID0+IHtcbiAgY29uc3QgW2FjdGl2ZVBpYywgc2V0QWN0aXZlUGljXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSB1c2VXaW5kb3dEaW1lbnNpb24oKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKClcblxuICBjb25zb2xlLmxvZyhyZWYuY3VycmVudClcblxuICB1c2VTY3JvbGxQb3NpdGlvbihcbiAgICAoeyBwcmV2UG9zLCBjdXJyUG9zIH0pID0+IHtcbiAgICAgY29uc29sZS5sb2coKVxuICAgIH0sXG4gICAgW10sXG4gICAgZmFsc2UsXG4gICAgcmVmLFxuICAgIDE1MFxuICApO1xuXG4gIGNvbnN0IGltZ3MgPSBpbWFnZXMucGF0aHMubWFwKChpbWcsIGkpID0+IChcbiAgICA8SW1hZ2VJbm5lcldyYXBwZXIga2V5PXtpfT5cbiAgICAgIDxJbWFnZVxuICAgICAgICBkaXNwbGF5V2lkdGg9e3dpZHRofVxuICAgICAgICBkaXNwbGF5SGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIGlkPXtpbWd9XG4gICAgICAgIHNyYz17aW1nfVxuICAgICAgICBhbHQ9e2ltYWdlcy5hbHR9XG4gICAgICAgIG1vZGFsXG4gICAgICAgIHNsaWRlPXthY3RpdmVQaWN9XG4gICAgICAvPlxuICAgIDwvSW1hZ2VJbm5lcldyYXBwZXI+XG4gICkpO1xuXG4gIGNvbnN0IG1hcmtlcnMgPSBpbWFnZXMucGF0aHMubWFwKChhLCBpKSA9PiAoXG4gICAgPEltYWdlc01hcmtlclxuICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlUGljKGkpfVxuICAgICAgYWN0aXZlPXtpID09PSBhY3RpdmVQaWN9XG4gICAgICBrZXk9e2l9XG4gICAgLz5cbiAgKSk7XG5cbiAgY29uc3Qgc3dhcFBpY3R1cmVzSGFuZGxlciA9IChkaXJlY3Rpb24pID0+IHtcbiAgICBpZiAoYWN0aXZlUGljIDwgaW1hZ2VzLnBhdGhzLmxlbmd0aCAtIDEgJiYgZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgIHNldEFjdGl2ZVBpYygoc3RhdGUpID0+IHN0YXRlICsgMSk7XG4gICAgfVxuICAgIGlmIChhY3RpdmVQaWMgPiAwICYmIGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgIHNldEFjdGl2ZVBpYygoc3RhdGUpID0+IHN0YXRlIC0gMSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxWaWV3SW1hZ2VzIGRpc3BsYXlXaWR0aD17d2lkdGh9IGRpc3BsYXlIZWlnaHQ9e2hlaWdodH0gc3RhdGU9e3N0YXRlfSBzPlxuICAgICAgICA8SW1hZ2VzV3JhcHBlciByZWY9e3JlZn0+e2ltZ3N9PC9JbWFnZXNXcmFwcGVyPlxuICAgICAgICA8SW1hZ2VzTWFya2VyV3JhcHBlcj57bWFya2Vyc308L0ltYWdlc01hcmtlcldyYXBwZXI+XG4gICAgICAgIDxJbWFnZUFycm93IG9uQ2xpY2s9eygpID0+IHN3YXBQaWN0dXJlc0hhbmRsZXIoXCJsZWZ0XCIpfSBwb3NpdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvbkxlZnR9IHNpemU9XCI0eFwiIC8+XG4gICAgICAgIDwvSW1hZ2VBcnJvdz5cbiAgICAgICAgPEltYWdlQXJyb3dcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzd2FwUGljdHVyZXNIYW5kbGVyKFwicmlnaHRcIil9XG4gICAgICAgICAgcG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgID5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzaXplPVwiNHhcIiAvPlxuICAgICAgICA8L0ltYWdlQXJyb3c+XG4gICAgICA8L1ZpZXdJbWFnZXM+XG4gICAgICA8QmFja2Ryb3AgZm9yRWxlbWVudD17ZmFsc2V9IG9uQ2xpY2s9e2Nsb3NlTW9kYWx9IHN0YXRlPXtzdGF0ZX0gLz5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VzTW9kYWw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Products/ImagesModal.js\n");

/***/ })

})