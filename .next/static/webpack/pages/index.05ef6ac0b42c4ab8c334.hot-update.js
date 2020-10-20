webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Products/ImagesModal.js":
/*!********************************************!*\
  !*** ./Components/Products/ImagesModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StyledComponents/productsItems */ \"./StyledComponents/productsItems.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Hooks/useWindowDimension */ \"./Hooks/useWindowDimension.js\");\n/* harmony import */ var _StyledComponents_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../StyledComponents/main */ \"./StyledComponents/main.js\");\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Products/ImagesModal.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar ImagesModal = function ImagesModal(_ref) {\n  _s();\n\n  var images = _ref.images,\n      state = _ref.state,\n      closeModal = _ref.closeModal;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      activePic = _useState[0],\n      setActivePic = _useState[1];\n\n  var _useWindowDimension = Object(_Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__[\"useWindowDimension\"])(),\n      _useWindowDimension2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useWindowDimension, 2),\n      width = _useWindowDimension2[0],\n      height = _useWindowDimension2[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      imgWidth = _useState2[0],\n      setImgWidth = _useState2[1];\n\n  var elRefs = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef([]);\n  var wrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var imgs = images.paths.map(function (img, i) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImageInnerWrapper\"], {\n      key: i,\n      ref: elRefs.current[i],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n      displayWidth: width,\n      displayHeight: height,\n      id: img,\n      src: img,\n      alt: images.alt,\n      modal: true,\n      slide: activePic,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }\n    }));\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log('curr', elRefs);\n    var length = imgs.length;\n\n    if (elRefs.current.length !== length) {\n      elRefs.current = Array(length).fill().map(function (_, i) {\n        return elRefs.current[i] || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();\n      });\n    }\n\n    if (elRefs.current.length === length && elRefs.current[0].current !== null) {\n      setImgWidth(elRefs.current.map(function (el) {\n        return el.current.offsetWidth;\n      }));\n    }\n  }, [elRefs.current]);\n  console.log(\"refs\", elRefs);\n  var markers = images.paths.map(function (a, i) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImagesMarker\"], {\n      onClick: function onClick() {\n        return setActivePic(i);\n      },\n      active: i === activePic,\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 5\n      }\n    });\n  });\n\n  var swapPicturesHandler = function swapPicturesHandler(direction) {\n    if (activePic < images.paths.length - 1 && direction === \"right\") {\n      setActivePic(function (state) {\n        return state + 1;\n      });\n    }\n\n    if (activePic > 0 && direction === \"left\") {\n      setActivePic(function (state) {\n        return state - 1;\n      });\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ViewImages\"], {\n    displayWidth: width,\n    displayHeight: height,\n    state: state,\n    s: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImagesWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }, imgs), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImagesMarkerWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, markers), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImageArrow\"], {\n    onClick: function onClick() {\n      return swapPicturesHandler(\"left\");\n    },\n    position: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faChevronLeft\"],\n    size: \"4x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  })), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImageArrow\"], {\n    onClick: function onClick() {\n      return swapPicturesHandler(\"right\");\n    },\n    position: \"right\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faChevronRight\"],\n    size: \"4x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }\n  }))), __jsx(_StyledComponents_main__WEBPACK_IMPORTED_MODULE_6__[\"Backdrop\"], {\n    forElement: false,\n    onClick: closeModal,\n    state: state,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(ImagesModal, \"1JfibVIjEmr9ephT7sZxdzBK/L0=\", false, function () {\n  return [_Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__[\"useWindowDimension\"]];\n});\n\n_c = ImagesModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagesModal);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImagesModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qcm9kdWN0cy9JbWFnZXNNb2RhbC5qcz9iZmUxIl0sIm5hbWVzIjpbIkltYWdlc01vZGFsIiwiaW1hZ2VzIiwic3RhdGUiLCJjbG9zZU1vZGFsIiwidXNlU3RhdGUiLCJhY3RpdmVQaWMiLCJzZXRBY3RpdmVQaWMiLCJ1c2VXaW5kb3dEaW1lbnNpb24iLCJ3aWR0aCIsImhlaWdodCIsImltZ1dpZHRoIiwic2V0SW1nV2lkdGgiLCJlbFJlZnMiLCJSZWFjdCIsInVzZVJlZiIsIndyYXBwZXJSZWYiLCJpbWdzIiwicGF0aHMiLCJtYXAiLCJpbWciLCJpIiwiY3VycmVudCIsImFsdCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJBcnJheSIsImZpbGwiLCJfIiwiY3JlYXRlUmVmIiwiZWwiLCJvZmZzZXRXaWR0aCIsIm1hcmtlcnMiLCJhIiwic3dhcFBpY3R1cmVzSGFuZGxlciIsImRpcmVjdGlvbiIsImZhQ2hldnJvbkxlZnQiLCJmYUNoZXZyb25SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFtQztBQUFBOztBQUFBLE1BQWhDQyxNQUFnQyxRQUFoQ0EsTUFBZ0M7QUFBQSxNQUF4QkMsS0FBd0IsUUFBeEJBLEtBQXdCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFBQSxrQkFDbkJDLHNEQUFRLENBQUMsQ0FBRCxDQURXO0FBQUEsTUFDOUNDLFNBRDhDO0FBQUEsTUFDbkNDLFlBRG1DOztBQUFBLDRCQUU3QkMsb0ZBQWtCLEVBRlc7QUFBQTtBQUFBLE1BRTlDQyxLQUY4QztBQUFBLE1BRXZDQyxNQUZ1Qzs7QUFBQSxtQkFHckJMLHNEQUFRLENBQUMsRUFBRCxDQUhhO0FBQUEsTUFHOUNNLFFBSDhDO0FBQUEsTUFHcENDLFdB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QUFEO0FBQVUsY0FBVSxFQUFFLEtBQXRCO0FBQTZCLFdBQU8sRUFBRW5DLFVBQXRDO0FBQWtELFNBQUssRUFBRUQsS0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLENBREY7QUFrQkQsQ0F6RUQ7O0dBQU1GLFc7VUFFb0JPLDRFOzs7S0FGcEJQLFc7QUEyRVNBLDBFQUFmIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9Qcm9kdWN0cy9JbWFnZXNNb2RhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgRnJhZ21lbnQsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBJbWFnZUlubmVyV3JhcHBlcixcbiAgSW1hZ2UsXG4gIEltYWdlc01hcmtlcixcbiAgVmlld0ltYWdlcyxcbiAgSW1hZ2VzV3JhcHBlcixcbiAgSW1hZ2VzTWFya2VyV3JhcHBlcixcbiAgSW1hZ2VBcnJvdyxcbn0gZnJvbSBcIi4uLy4uL1N0eWxlZENvbXBvbmVudHMvcHJvZHVjdHNJdGVtc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHtcbiAgZmFDaGV2cm9uUmlnaHQsXG4gIGZhQ2hldnJvbkxlZnQsXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IHVzZVdpbmRvd0RpbWVuc2lvbiB9IGZyb20gXCIuLi8uLi9Ib29rcy91c2VXaW5kb3dEaW1lbnNpb25cIjtcbmltcG9ydCB7IEJhY2tkcm9wIH0gZnJvbSBcIi4uLy4uL1N0eWxlZENvbXBvbmVudHMvbWFpblwiO1xuaW1wb3J0IHsgdXNlU2Nyb2xsUG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vSG9va3MvdXNlU2Nyb2xsUG9zaXRpb25cIjtcblxuY29uc3QgSW1hZ2VzTW9kYWwgPSAoeyBpbWFnZXMsIHN0YXRlLCBjbG9zZU1vZGFsIH0pID0+IHtcbiAgY29uc3QgW2FjdGl2ZVBpYywgc2V0QWN0aXZlUGljXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSB1c2VXaW5kb3dEaW1lbnNpb24oKTtcbiAgY29uc3QgW2ltZ1dpZHRoLCBzZXRJbWdXaWR0aF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGVsUmVmcyA9IFJlYWN0LnVzZVJlZihbXSk7XG4gIGNvbnN0IHdyYXBwZXJSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBpbWdzID0gaW1hZ2VzLnBhdGhzLm1hcCgoaW1nLCBpKSA9PiAoXG4gICAgPEltYWdlSW5uZXJXcmFwcGVyIGtleT17aX0gcmVmPXtlbFJlZnMuY3VycmVudFtpXX0+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgZGlzcGxheVdpZHRoPXt3aWR0aH1cbiAgICAgICAgZGlzcGxheUhlaWdodD17aGVpZ2h0fVxuICAgICAgICBpZD17aW1nfVxuICAgICAgICBzcmM9e2ltZ31cbiAgICAgICAgYWx0PXtpbWFnZXMuYWx0fVxuICAgICAgICBtb2RhbFxuICAgICAgICBzbGlkZT17YWN0aXZlUGljfVxuICAgICAgLz5cbiAgICA8L0ltYWdlSW5uZXJXcmFwcGVyPlxuICApKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjdXJyJywgZWxSZWZzKVxuICAgIGNvbnN0IGxlbmd0aCA9IGltZ3MubGVuZ3RoO1xuICAgIGlmIChlbFJlZnMuY3VycmVudC5sZW5ndGggIT09IGxlbmd0aCkge1xuICAgICAgZWxSZWZzLmN1cnJlbnQgPSBBcnJheShsZW5ndGgpXG4gICAgICAgIC5maWxsKClcbiAgICAgICAgLm1hcCgoXywgaSkgPT4gZWxSZWZzLmN1cnJlbnRbaV0gfHwgUmVhY3QuY3JlYXRlUmVmKCkpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBlbFJlZnMuY3VycmVudC5sZW5ndGggPT09IGxlbmd0aCAmJlxuICAgICAgZWxSZWZzLmN1cnJlbnRbMF0uY3VycmVudCAhPT0gbnVsbFxuICAgICkge1xuICAgICAgc2V0SW1nV2lkdGgoZWxSZWZzLmN1cnJlbnQubWFwKChlbCkgPT4gZWwuY3VycmVudC5vZmZzZXRXaWR0aCkpO1xuICAgIH1cbiAgfSwgW2VsUmVmcy5jdXJyZW50XSk7XG5cbiAgY29uc29sZS5sb2coXCJyZWZzXCIsIGVsUmVmcylcblxuICBjb25zdCBtYXJrZXJzID0gaW1hZ2VzLnBhdGhzLm1hcCgoYSwgaSkgPT4gKFxuICAgIDxJbWFnZXNNYXJrZXJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVBpYyhpKX1cbiAgICAgIGFjdGl2ZT17aSA9PT0gYWN0aXZlUGljfVxuICAgICAga2V5PXtpfVxuICAgIC8+XG4gICkpO1xuXG4gIGNvbnN0IHN3YXBQaWN0dXJlc0hhbmRsZXIgPSAoZGlyZWN0aW9uKSA9PiB7XG4gICAgaWYgKGFjdGl2ZVBpYyA8IGltYWdlcy5wYXRocy5sZW5ndGggLSAxICYmIGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICBzZXRBY3RpdmVQaWMoKHN0YXRlKSA9PiBzdGF0ZSArIDEpO1xuICAgIH1cbiAgICBpZiAoYWN0aXZlUGljID4gMCAmJiBkaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICBzZXRBY3RpdmVQaWMoKHN0YXRlKSA9PiBzdGF0ZSAtIDEpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8Vmlld0ltYWdlcyBkaXNwbGF5V2lkdGg9e3dpZHRofSBkaXNwbGF5SGVpZ2h0PXtoZWlnaHR9IHN0YXRlPXtzdGF0ZX0gcz5cbiAgICAgICAgPEltYWdlc1dyYXBwZXI+e2ltZ3N9PC9JbWFnZXNXcmFwcGVyPlxuICAgICAgICA8SW1hZ2VzTWFya2VyV3JhcHBlcj57bWFya2Vyc308L0ltYWdlc01hcmtlcldyYXBwZXI+XG4gICAgICAgIDxJbWFnZUFycm93IG9uQ2xpY2s9eygpID0+IHN3YXBQaWN0dXJlc0hhbmRsZXIoXCJsZWZ0XCIpfSBwb3NpdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvbkxlZnR9IHNpemU9XCI0eFwiIC8+XG4gICAgICAgIDwvSW1hZ2VBcnJvdz5cbiAgICAgICAgPEltYWdlQXJyb3dcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzd2FwUGljdHVyZXNIYW5kbGVyKFwicmlnaHRcIil9XG4gICAgICAgICAgcG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgID5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvblJpZ2h0fSBzaXplPVwiNHhcIiAvPlxuICAgICAgICA8L0ltYWdlQXJyb3c+XG4gICAgICA8L1ZpZXdJbWFnZXM+XG4gICAgICA8QmFja2Ryb3AgZm9yRWxlbWVudD17ZmFsc2V9IG9uQ2xpY2s9e2Nsb3NlTW9kYWx9IHN0YXRlPXtzdGF0ZX0gLz5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VzTW9kYWw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Products/ImagesModal.js\n");

/***/ })

})