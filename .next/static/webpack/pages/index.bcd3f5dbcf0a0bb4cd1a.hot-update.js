webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Products/ImagesModal.js":
/*!********************************************!*\
  !*** ./Components/Products/ImagesModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StyledComponents/productsItems */ \"./StyledComponents/productsItems.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Hooks/useWindowDimension */ \"./Hooks/useWindowDimension.js\");\n/* harmony import */ var _StyledComponents_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../StyledComponents/main */ \"./StyledComponents/main.js\");\n/* harmony import */ var _UI_Swipeable_Swipeable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../UI/Swipeable/Swipeable */ \"./UI/Swipeable/Swipeable.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Products/ImagesModal.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar ImagesModal = function ImagesModal(_ref) {\n  _s();\n\n  var images = _ref.images,\n      state = _ref.state,\n      closeModal = _ref.closeModal;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      activePic = _useState[0],\n      setActivePic = _useState[1];\n\n  var _useWindowDimension = Object(_Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__[\"useWindowDimension\"])(),\n      _useWindowDimension2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useWindowDimension, 2),\n      width = _useWindowDimension2[0],\n      height = _useWindowDimension2[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      imgWidth = _useState2[0],\n      setImgWidth = _useState2[1];\n\n  var elRefs = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef([]);\n  var wrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var imgs = images.paths.map(function (img, i) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImageInnerWrapper\"], {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n      displayWidth: width,\n      displayHeight: height,\n      id: img,\n      src: img,\n      alt: images.alt,\n      modal: true,\n      slide: activePic,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }\n    }));\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var length = imgs.length;\n\n    if (elRefs.current.length !== length) {\n      elRefs.current = Array(length).fill().map(function (_, i) {\n        return elRefs.current[i] || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();\n      });\n    }\n\n    if (elRefs.current.length === length && elRefs.current[0].current !== null) {\n      setImgWidth(elRefs.current.map(function (el) {\n        return el.current.offsetWidth;\n      }));\n    }\n  }, [elRefs.current]);\n  console.log(\"refs\", elRefs);\n  var markers = images.paths.map(function (a, i) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImagesMarker\"], {\n      onClick: function onClick() {\n        return setActivePic(i);\n      },\n      active: i === activePic,\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 5\n      }\n    });\n  });\n\n  var swapPicturesHandler = function swapPicturesHandler(direction) {\n    if (activePic < images.paths.length - 1 && direction === \"right\") {\n      setActivePic(function (state) {\n        return state + 1;\n      });\n    }\n\n    if (activePic > 0 && direction === \"left\") {\n      setActivePic(function (state) {\n        return state - 1;\n      });\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ViewImages\"], {\n    displayWidth: width,\n    displayHeight: height,\n    state: state,\n    s: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }), __jsx(_StyledComponents_main__WEBPACK_IMPORTED_MODULE_6__[\"Backdrop\"], {\n    forElement: false,\n    onClick: closeModal,\n    state: state,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(ImagesModal, \"1JfibVIjEmr9ephT7sZxdzBK/L0=\", false, function () {\n  return [_Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__[\"useWindowDimension\"]];\n});\n\n_c = ImagesModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagesModal);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImagesModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qcm9kdWN0cy9JbWFnZXNNb2RhbC5qcz9iZmUxIl0sIm5hbWVzIjpbIkltYWdlc01vZGFsIiwiaW1hZ2VzIiwic3RhdGUiLCJjbG9zZU1vZGFsIiwidXNlU3RhdGUiLCJhY3RpdmVQaWMiLCJzZXRBY3RpdmVQaWMiLCJ1c2VXaW5kb3dEaW1lbnNpb24iLCJ3aWR0aCIsImhlaWdodCIsImltZ1dpZHRoIiwic2V0SW1nV2lkdGgiLCJlbFJlZnMiLCJSZWFjdCIsInVzZVJlZiIsIndyYXBwZXJSZWYiLCJpbWdzIiwicGF0aHMiLCJtYXAiLCJpbWciLCJpIiwiYWx0IiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiY3VycmVudCIsIkFycmF5IiwiZmlsbCIsIl8iLCJjcmVhdGVSZWYiLCJlbCIsIm9mZnNldFdpZHRoIiwiY29uc29sZSIsImxvZyIsIm1hcmtlcnMiLCJhIiwic3dhcFBpY3R1cmVzSGFuZGxlciIsImRpcmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFtQztBQUFBOztBQUFBLE1BQWhDQyxNQUFnQyxRQUFoQ0EsTUFBZ0M7QUFBQSxNQUF4QkMsS0FBd0IsUUFBeEJBLEtBQXdCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFBQSxrQkFDbkJDLHNEQUFRLENBQUMsQ0FBRCxDQURXO0FBQUEsTUFDOUNDLFNBRDhDO0FBQUEsTUFDbkNDLFlBRG1DOztBQUFBLDRCQUU3QkMsb0ZBQWtCLEVBRlc7QUFBQTtBQUFBLE1BRTlDQyxLQUY4QztBQUFBLE1BRXZDQyxNQUZ1Qzs7QUFBQSxtQkFHckJMLHNEQUFRLENBQUMsRUFBRCxDQUhhO0FBQUEsTUFHOUNNLFFBSDhDO0FBQUEsTUFHcENDLFdBSG9DOztBQUlyRCxNQUFNQyxNQUFNLEdBQUdDLDRDQUFL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S0FDRSxNQUFDLDBFQUFEO0FBQVksZ0JBQVksRUFBRU0sS0FBMUI7QUFBaUMsaUJBQWEsRUFBRUMsTUFBaEQ7QUFBd0QsU0FBSyxFQUFFUCxLQUEvRDtBQUFzRSxLQUFDLE1BQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUlFLE1BQUMsK0RBQUQ7QUFBVSxjQUFVLEVBQUUsS0FBdEI7QUFBNkIsV0FBTyxFQUFFQyxVQUF0QztBQUFrRCxTQUFLLEVBQUVELEtBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGO0FBUUQsQ0E5REQ7O0dBQU1GLFc7VUFFb0JPLDRFOzs7S0FGcEJQLFc7QUFnRVNBLDBFQUFmIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9Qcm9kdWN0cy9JbWFnZXNNb2RhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgRnJhZ21lbnQsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBJbWFnZUlubmVyV3JhcHBlcixcbiAgSW1hZ2UsXG4gIEltYWdlc01hcmtlcixcbiAgVmlld0ltYWdlcyxcbiAgSW1hZ2VzV3JhcHBlcixcbiAgSW1hZ2VzTWFya2VyV3JhcHBlcixcbiAgSW1hZ2VBcnJvdyxcbn0gZnJvbSBcIi4uLy4uL1N0eWxlZENvbXBvbmVudHMvcHJvZHVjdHNJdGVtc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHtcbiAgZmFDaGV2cm9uUmlnaHQsXG4gIGZhQ2hldnJvbkxlZnQsXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IHVzZVdpbmRvd0RpbWVuc2lvbiB9IGZyb20gXCIuLi8uLi9Ib29rcy91c2VXaW5kb3dEaW1lbnNpb25cIjtcbmltcG9ydCB7IEJhY2tkcm9wIH0gZnJvbSBcIi4uLy4uL1N0eWxlZENvbXBvbmVudHMvbWFpblwiO1xuaW1wb3J0IHt9IGZyb20gJy4uLy4uL1VJL1N3aXBlYWJsZS9Td2lwZWFibGUnO1xuXG5jb25zdCBJbWFnZXNNb2RhbCA9ICh7IGltYWdlcywgc3RhdGUsIGNsb3NlTW9kYWwgfSkgPT4ge1xuICBjb25zdCBbYWN0aXZlUGljLCBzZXRBY3RpdmVQaWNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt3aWR0aCwgaGVpZ2h0XSA9IHVzZVdpbmRvd0RpbWVuc2lvbigpO1xuICBjb25zdCBbaW1nV2lkdGgsIHNldEltZ1dpZHRoXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgZWxSZWZzID0gUmVhY3QudXNlUmVmKFtdKTtcbiAgY29uc3Qgd3JhcHBlclJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IGltZ3MgPSBpbWFnZXMucGF0aHMubWFwKChpbWcsIGkpID0+IChcbiAgICA8SW1hZ2VJbm5lcldyYXBwZXIga2V5PXtpfT5cbiAgICAgIDxJbWFnZVxuICAgICAgICBkaXNwbGF5V2lkdGg9e3dpZHRofVxuICAgICAgICBkaXNwbGF5SGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIGlkPXtpbWd9XG4gICAgICAgIHNyYz17aW1nfVxuICAgICAgICBhbHQ9e2ltYWdlcy5hbHR9XG4gICAgICAgIG1vZGFsXG4gICAgICAgIHNsaWRlPXthY3RpdmVQaWN9XG4gICAgICAvPlxuICAgIDwvSW1hZ2VJbm5lcldyYXBwZXI+XG4gICkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gaW1ncy5sZW5ndGg7XG4gICAgaWYgKGVsUmVmcy5jdXJyZW50Lmxlbmd0aCAhPT0gbGVuZ3RoKSB7XG4gICAgICBlbFJlZnMuY3VycmVudCA9IEFycmF5KGxlbmd0aClcbiAgICAgICAgLmZpbGwoKVxuICAgICAgICAubWFwKChfLCBpKSA9PiBlbFJlZnMuY3VycmVudFtpXSB8fCBSZWFjdC5jcmVhdGVSZWYoKSk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGVsUmVmcy5jdXJyZW50Lmxlbmd0aCA9PT0gbGVuZ3RoICYmXG4gICAgICBlbFJlZnMuY3VycmVudFswXS5jdXJyZW50ICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBzZXRJbWdXaWR0aChlbFJlZnMuY3VycmVudC5tYXAoKGVsKSA9PiBlbC5jdXJyZW50Lm9mZnNldFdpZHRoKSk7XG4gICAgfVxuICB9LCBbZWxSZWZzLmN1cnJlbnRdKTtcbiAgXG4gIGNvbnNvbGUubG9nKFwicmVmc1wiLCBlbFJlZnMpXG5cbiAgY29uc3QgbWFya2VycyA9IGltYWdlcy5wYXRocy5tYXAoKGEsIGkpID0+IChcbiAgICA8SW1hZ2VzTWFya2VyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVQaWMoaSl9XG4gICAgICBhY3RpdmU9e2kgPT09IGFjdGl2ZVBpY31cbiAgICAgIGtleT17aX1cbiAgICAvPlxuICApKTtcblxuICBjb25zdCBzd2FwUGljdHVyZXNIYW5kbGVyID0gKGRpcmVjdGlvbikgPT4ge1xuICAgIGlmIChhY3RpdmVQaWMgPCBpbWFnZXMucGF0aHMubGVuZ3RoIC0gMSAmJiBkaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgc2V0QWN0aXZlUGljKChzdGF0ZSkgPT4gc3RhdGUgKyAxKTtcbiAgICB9XG4gICAgaWYgKGFjdGl2ZVBpYyA+IDAgJiYgZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgc2V0QWN0aXZlUGljKChzdGF0ZSkgPT4gc3RhdGUgLSAxKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPFZpZXdJbWFnZXMgZGlzcGxheVdpZHRoPXt3aWR0aH0gZGlzcGxheUhlaWdodD17aGVpZ2h0fSBzdGF0ZT17c3RhdGV9IHM+XG4gICAgICAgIFxuICAgICAgPC9WaWV3SW1hZ2VzPlxuICAgICAgPEJhY2tkcm9wIGZvckVsZW1lbnQ9e2ZhbHNlfSBvbkNsaWNrPXtjbG9zZU1vZGFsfSBzdGF0ZT17c3RhdGV9IC8+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlc01vZGFsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Products/ImagesModal.js\n");

/***/ })

})