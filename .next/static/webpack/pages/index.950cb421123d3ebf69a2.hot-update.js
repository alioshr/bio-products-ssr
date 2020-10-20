webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Products/ImagesModal.js":
/*!********************************************!*\
  !*** ./Components/Products/ImagesModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StyledComponents/productsItems */ \"./StyledComponents/productsItems.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Hooks/useWindowDimension */ \"./Hooks/useWindowDimension.js\");\n/* harmony import */ var _StyledComponents_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../StyledComponents/main */ \"./StyledComponents/main.js\");\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Products/ImagesModal.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar ImagesModal = function ImagesModal(_ref) {\n  _s();\n\n  var images = _ref.images,\n      state = _ref.state,\n      closeModal = _ref.closeModal;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      activePic = _useState[0],\n      setActivePic = _useState[1];\n\n  var _useWindowDimension = Object(_Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__[\"useWindowDimension\"])(),\n      _useWindowDimension2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useWindowDimension, 2),\n      width = _useWindowDimension2[0],\n      height = _useWindowDimension2[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      imgWidth = _useState2[0],\n      setImgWidth = _useState2[1];\n\n  var elRefs = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef([]);\n  var imgs = images.paths.map(function (img, i) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImageInnerWrapper\"], {\n      key: i,\n      ref: elRefs.current[i],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n      displayWidth: width,\n      displayHeight: height,\n      id: img,\n      src: img,\n      alt: images.alt,\n      modal: true,\n      slide: activePic,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 7\n      }\n    }));\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var length = imgs.length;\n\n    if (elRefs.current.length !== length) {\n      elRefs.current = Array(length).fill().map(function (_, i) {\n        return elRefs.current[i] || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();\n      });\n    }\n\n    if (elRefs.current.length === length && elRefs.current[0] !== \"null\") {\n      console.log(\"arr of widths\", elRefs.current.map(function (el) {\n        return el.current.offsetWidth;\n      }));\n    }\n  }, []);\n  console.log(\"el refs\", elRefs);\n  console.log(elRefs.current[0]);\n  var markers = images.paths.map(function (a, i) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImagesMarker\"], {\n      onClick: function onClick() {\n        return setActivePic(i);\n      },\n      active: i === activePic,\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 5\n      }\n    });\n  });\n\n  var swapPicturesHandler = function swapPicturesHandler(direction) {\n    if (activePic < images.paths.length - 1 && direction === \"right\") {\n      setActivePic(function (state) {\n        return state + 1;\n      });\n    }\n\n    if (activePic > 0 && direction === \"left\") {\n      setActivePic(function (state) {\n        return state - 1;\n      });\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ViewImages\"], {\n    displayWidth: width,\n    displayHeight: height,\n    state: state,\n    s: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImagesWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, imgs), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImagesMarkerWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }, markers), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImageArrow\"], {\n    onClick: function onClick() {\n      return swapPicturesHandler(\"left\");\n    },\n    position: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faChevronLeft\"],\n    size: \"4x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  })), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImageArrow\"], {\n    onClick: function onClick() {\n      return swapPicturesHandler(\"right\");\n    },\n    position: \"right\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faChevronRight\"],\n    size: \"4x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }))), __jsx(_StyledComponents_main__WEBPACK_IMPORTED_MODULE_6__[\"Backdrop\"], {\n    forElement: false,\n    onClick: closeModal,\n    state: state,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(ImagesModal, \"3X+58789hs2V5fmjzdXQWqEtvrI=\", false, function () {\n  return [_Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__[\"useWindowDimension\"]];\n});\n\n_c = ImagesModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagesModal);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImagesModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qcm9kdWN0cy9JbWFnZXNNb2RhbC5qcz9iZmUxIl0sIm5hbWVzIjpbIkltYWdlc01vZGFsIiwiaW1hZ2VzIiwic3RhdGUiLCJjbG9zZU1vZGFsIiwidXNlU3RhdGUiLCJhY3RpdmVQaWMiLCJzZXRBY3RpdmVQaWMiLCJ1c2VXaW5kb3dEaW1lbnNpb24iLCJ3aWR0aCIsImhlaWdodCIsImltZ1dpZHRoIiwic2V0SW1nV2lkdGgiLCJlbFJlZnMiLCJSZWFjdCIsInVzZVJlZiIsImltZ3MiLCJwYXRocyIsIm1hcCIsImltZyIsImkiLCJjdXJyZW50IiwiYWx0IiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiQXJyYXkiLCJmaWxsIiwiXyIsImNyZWF0ZVJlZiIsImNvbnNvbGUiLCJsb2ciLCJlbCIsIm9mZnNldFdpZHRoIiwibWFya2VycyIsImEiLCJzd2FwUGljdHVyZXNIYW5kbGVyIiwiZGlyZWN0aW9uIiwiZmFDaGV2cm9uTGVmdCIsImZhQ2hldnJvblJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBSUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQW1DO0FBQUE7O0FBQUEsTUFBaENDLE1BQWdDLFFBQWhDQSxNQUFnQztBQUFBLE1BQXhCQyxLQUF3QixRQUF4QkEsS0FBd0I7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLGtCQUNuQkMsc0RBQVEsQ0FBQyxDQUFELENBRFc7QUFBQSxNQUM5Q0MsU0FEOEM7QUFBQSxNQUNuQ0MsWUFEbUM7O0FBQUEsNEJBRTdCQyxvRkFBa0IsRUFGVztBQUFBO0FBQUEsTUFFOUNDLEtBRjhDO0FBQUEsTUFFdkNDLE1BRnVDOztBQUFBLG1CQUdyQkwsc0RBQVEsQ0FBQyxFQUFELENBSGE7QUFBQSxNQUc5Q00sUUFIOEM7QUFBQSxNQUdwQ0MsV0FIb0M7O0FBSXJELE1B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QUFBa0QsU0FBSyxFQUFFRCxLQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsQ0FERjtBQWtCRCxDQXBFRDs7R0FBTUYsVztVQUVvQk8sNEU7OztLQUZwQlAsVztBQXNFU0EsMEVBQWYiLCJmaWxlIjoiLi9Db21wb25lbnRzL1Byb2R1Y3RzL0ltYWdlc01vZGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIEZyYWdtZW50LCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBJbWFnZUlubmVyV3JhcHBlcixcbiAgSW1hZ2UsXG4gIEltYWdlc01hcmtlcixcbiAgVmlld0ltYWdlcyxcbiAgSW1hZ2VzV3JhcHBlcixcbiAgSW1hZ2VzTWFya2VyV3JhcHBlcixcbiAgSW1hZ2VBcnJvdyxcbn0gZnJvbSBcIi4uLy4uL1N0eWxlZENvbXBvbmVudHMvcHJvZHVjdHNJdGVtc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHtcbiAgZmFDaGV2cm9uUmlnaHQsXG4gIGZhQ2hldnJvbkxlZnQsXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IHVzZVdpbmRvd0RpbWVuc2lvbiB9IGZyb20gXCIuLi8uLi9Ib29rcy91c2VXaW5kb3dEaW1lbnNpb25cIjtcbmltcG9ydCB7IEJhY2tkcm9wIH0gZnJvbSBcIi4uLy4uL1N0eWxlZENvbXBvbmVudHMvbWFpblwiO1xuaW1wb3J0IHt1c2VTY3JvbGxQb3NpdGlvbn0gZnJvbSAnLi4vLi4vSG9va3MvdXNlU2Nyb2xsUG9zaXRpb24nXG5cbmNvbnN0IEltYWdlc01vZGFsID0gKHsgaW1hZ2VzLCBzdGF0ZSwgY2xvc2VNb2RhbCB9KSA9PiB7XG4gIGNvbnN0IFthY3RpdmVQaWMsIHNldEFjdGl2ZVBpY10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3dpZHRoLCBoZWlnaHRdID0gdXNlV2luZG93RGltZW5zaW9uKCk7XG4gIGNvbnN0IFtpbWdXaWR0aCwgc2V0SW1nV2lkdGhdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBlbFJlZnMgPSBSZWFjdC51c2VSZWYoW10pO1xuXG4gIGNvbnN0IGltZ3MgPSBpbWFnZXMucGF0aHMubWFwKChpbWcsIGkpID0+IChcbiAgICA8SW1hZ2VJbm5lcldyYXBwZXIga2V5PXtpfSByZWY9e2VsUmVmcy5jdXJyZW50W2ldfT5cbiAgICAgIDxJbWFnZVxuICAgICAgICBkaXNwbGF5V2lkdGg9e3dpZHRofVxuICAgICAgICBkaXNwbGF5SGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIGlkPXtpbWd9XG4gICAgICAgIHNyYz17aW1nfVxuICAgICAgICBhbHQ9e2ltYWdlcy5hbHR9XG4gICAgICAgIG1vZGFsXG4gICAgICAgIHNsaWRlPXthY3RpdmVQaWN9XG4gICAgICAvPlxuICAgIDwvSW1hZ2VJbm5lcldyYXBwZXI+XG4gICkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gaW1ncy5sZW5ndGg7XG4gICAgaWYgKGVsUmVmcy5jdXJyZW50Lmxlbmd0aCAhPT0gbGVuZ3RoKSB7XG4gICAgICBlbFJlZnMuY3VycmVudCA9IEFycmF5KGxlbmd0aCkuZmlsbCgpLm1hcCgoXywgaSkgPT4gZWxSZWZzLmN1cnJlbnRbaV0gfHwgUmVhY3QuY3JlYXRlUmVmKCkpXG4gICAgfVxuXG4gICAgaWYoZWxSZWZzLmN1cnJlbnQubGVuZ3RoID09PSBsZW5ndGggJiYgZWxSZWZzLmN1cnJlbnRbMF0gIT09IFwibnVsbFwiKSB7XG5jb25zb2xlLmxvZyhcImFyciBvZiB3aWR0aHNcIixlbFJlZnMuY3VycmVudC5tYXAoZWwgPT4gZWwuY3VycmVudC5vZmZzZXRXaWR0aCkpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zb2xlLmxvZyhcImVsIHJlZnNcIixlbFJlZnMpXG4gIGNvbnNvbGUubG9nKGVsUmVmcy5jdXJyZW50WzBdKVxuXG4gIGNvbnN0IG1hcmtlcnMgPSBpbWFnZXMucGF0aHMubWFwKChhLCBpKSA9PiAoXG4gICAgPEltYWdlc01hcmtlclxuICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlUGljKGkpfVxuICAgICAgYWN0aXZlPXtpID09PSBhY3RpdmVQaWN9XG4gICAgICBrZXk9e2l9XG4gICAgLz5cbiAgKSk7XG5cbiAgY29uc3Qgc3dhcFBpY3R1cmVzSGFuZGxlciA9IChkaXJlY3Rpb24pID0+IHtcbiAgICBpZiAoYWN0aXZlUGljIDwgaW1hZ2VzLnBhdGhzLmxlbmd0aCAtIDEgJiYgZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgIHNldEFjdGl2ZVBpYygoc3RhdGUpID0+IHN0YXRlICsgMSk7XG4gICAgfVxuICAgIGlmIChhY3RpdmVQaWMgPiAwICYmIGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgIHNldEFjdGl2ZVBpYygoc3RhdGUpID0+IHN0YXRlIC0gMSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxWaWV3SW1hZ2VzIGRpc3BsYXlXaWR0aD17d2lkdGh9IGRpc3BsYXlIZWlnaHQ9e2hlaWdodH0gc3RhdGU9e3N0YXRlfSBzPlxuICAgICAgICA8SW1hZ2VzV3JhcHBlcj57aW1nc308L0ltYWdlc1dyYXBwZXI+XG4gICAgICAgIDxJbWFnZXNNYXJrZXJXcmFwcGVyPnttYXJrZXJzfTwvSW1hZ2VzTWFya2VyV3JhcHBlcj5cbiAgICAgICAgPEltYWdlQXJyb3cgb25DbGljaz17KCkgPT4gc3dhcFBpY3R1cmVzSGFuZGxlcihcImxlZnRcIil9IHBvc2l0aW9uPVwibGVmdFwiPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uTGVmdH0gc2l6ZT1cIjR4XCIgLz5cbiAgICAgICAgPC9JbWFnZUFycm93PlxuICAgICAgICA8SW1hZ2VBcnJvd1xuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHN3YXBQaWN0dXJlc0hhbmRsZXIoXCJyaWdodFwiKX1cbiAgICAgICAgICBwb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHNpemU9XCI0eFwiIC8+XG4gICAgICAgIDwvSW1hZ2VBcnJvdz5cbiAgICAgIDwvVmlld0ltYWdlcz5cbiAgICAgIDxCYWNrZHJvcCBmb3JFbGVtZW50PXtmYWxzZX0gb25DbGljaz17Y2xvc2VNb2RhbH0gc3RhdGU9e3N0YXRlfSAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZXNNb2RhbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Products/ImagesModal.js\n");

/***/ })

})