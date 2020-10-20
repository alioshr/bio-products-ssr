webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Products/ImagesModal.js":
/*!********************************************!*\
  !*** ./Components/Products/ImagesModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StyledComponents/productsItems */ \"./StyledComponents/productsItems.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Hooks/useWindowDimension */ \"./Hooks/useWindowDimension.js\");\n/* harmony import */ var _StyledComponents_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../StyledComponents/main */ \"./StyledComponents/main.js\");\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Products/ImagesModal.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar ImagesModal = function ImagesModal(_ref) {\n  _s();\n\n  var images = _ref.images,\n      state = _ref.state,\n      closeModal = _ref.closeModal;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      activePic = _useState[0],\n      setActivePic = _useState[1];\n\n  var _useWindowDimension = Object(_Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__[\"useWindowDimension\"])(),\n      _useWindowDimension2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useWindowDimension, 2),\n      width = _useWindowDimension2[0],\n      height = _useWindowDimension2[1];\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  Object(_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_7__[\"useScrollPosition\"])(function (_ref2) {\n    var prevPos = _ref2.prevPos,\n        currPos = _ref2.currPos;\n    console.log(currPos);\n  }, [], false, ref, 150);\n  var imgs = images.paths.map(function (img, i) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImageInnerWrapper\"], {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n      displayWidth: width,\n      displayHeight: height,\n      id: img,\n      src: img,\n      alt: images.alt,\n      modal: true,\n      slide: activePic,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 7\n      }\n    }));\n  });\n  var markers = images.paths.map(function (a, i) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImagesMarker\"], {\n      onClick: function onClick() {\n        return setActivePic(i);\n      },\n      active: i === activePic,\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 5\n      }\n    });\n  });\n\n  var swapPicturesHandler = function swapPicturesHandler(direction) {\n    if (activePic < images.paths.length - 1 && direction === \"right\") {\n      setActivePic(function (state) {\n        return state + 1;\n      });\n    }\n\n    if (activePic > 0 && direction === \"left\") {\n      setActivePic(function (state) {\n        return state - 1;\n      });\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ViewImages\"], {\n    displayWidth: width,\n    displayHeight: height,\n    state: state,\n    s: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImagesWrapper\"], {\n    ref: ref,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, imgs), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImagesMarkerWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, markers), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImageArrow\"], {\n    onClick: function onClick() {\n      return swapPicturesHandler(\"left\");\n    },\n    position: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faChevronLeft\"],\n    size: \"4x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  })), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImageArrow\"], {\n    onClick: function onClick() {\n      return swapPicturesHandler(\"right\");\n    },\n    position: \"right\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faChevronRight\"],\n    size: \"4x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }))), __jsx(_StyledComponents_main__WEBPACK_IMPORTED_MODULE_6__[\"Backdrop\"], {\n    forElement: false,\n    onClick: closeModal,\n    state: state,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(ImagesModal, \"eTqZTTzamQIAmXO8jX/+4K6hEZY=\", false, function () {\n  return [_Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__[\"useWindowDimension\"], _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_7__[\"useScrollPosition\"]];\n});\n\n_c = ImagesModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagesModal);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImagesModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qcm9kdWN0cy9JbWFnZXNNb2RhbC5qcz9iZmUxIl0sIm5hbWVzIjpbIkltYWdlc01vZGFsIiwiaW1hZ2VzIiwic3RhdGUiLCJjbG9zZU1vZGFsIiwidXNlU3RhdGUiLCJhY3RpdmVQaWMiLCJzZXRBY3RpdmVQaWMiLCJ1c2VXaW5kb3dEaW1lbnNpb24iLCJ3aWR0aCIsImhlaWdodCIsInJlZiIsInVzZVJlZiIsInVzZVNjcm9sbFBvc2l0aW9uIiwicHJldlBvcyIsImN1cnJQb3MiLCJjb25zb2xlIiwibG9nIiwiaW1ncyIsInBhdGhzIiwibWFwIiwiaW1nIiwiaSIsImFsdCIsIm1hcmtlcnMiLCJhIiwic3dhcFBpY3R1cmVzSGFuZGxlciIsImRpcmVjdGlvbiIsImxlbmd0aCIsImZhQ2hldnJvbkxlZnQiLCJmYUNoZXZyb25SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFtQztBQUFBOztBQUFBLE1BQWhDQyxNQUFnQyxRQUFoQ0EsTUFBZ0M7QUFBQSxNQUF4QkMsS0FBd0IsUUFBeEJBLEtBQXdCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFBQSxrQkFDbkJDLHNEQUFRLENBQUMsQ0FBRCxDQURXO0FBQUEsTUFDOUNDLFNBRDhDO0FBQUEsTUFDbkNDLFlBRG1DOztBQUFBLDRCQUU3QkMsb0ZBQWtCLEVBRlc7QUFBQTtBQUFBLE1BRTlDQyxLQUY4QztBQUFBLE1BRXZDQyxNQUZ1Qzs7QUFHckQsTUFBTUMsR0FBRyxHQUFHQyxvREFBTSxFQUFsQjtBQUdBQyxvRkFBaUIsQ0FDZixpQkFBMEI7QUFBQSxRQUF2QkMsT0FBdUIsU0FBdkJBLE9BQXVCO0FBQUEsUUFBZEMsT0FBYyxTQUFkQSxPQUFjO0FBQ3pCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYs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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVJLGdGQUF2QjtBQUF1QyxRQUFJLEVBQUMsSUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBTkYsQ0FERixFQWNFLE1BQUMsK0RBQUQ7QUFBVSxjQUFVLEVBQUUsS0FBdEI7QUFBNkIsV0FBTyxFQUFFMUIsVUFBdEM7QUFBa0QsU0FBSyxFQUFFRCxLQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsQ0FERjtBQWtCRCxDQWhFRDs7R0FBTUYsVztVQUVvQk8sNEUsRUFJeEJLLDBFOzs7S0FOSVosVztBQWtFU0EsMEVBQWYiLCJmaWxlIjoiLi9Db21wb25lbnRzL1Byb2R1Y3RzL0ltYWdlc01vZGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIEZyYWdtZW50LCB1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgSW1hZ2VJbm5lcldyYXBwZXIsXG4gIEltYWdlLFxuICBJbWFnZXNNYXJrZXIsXG4gIFZpZXdJbWFnZXMsXG4gIEltYWdlc1dyYXBwZXIsXG4gIEltYWdlc01hcmtlcldyYXBwZXIsXG4gIEltYWdlQXJyb3csXG59IGZyb20gXCIuLi8uLi9TdHlsZWRDb21wb25lbnRzL3Byb2R1Y3RzSXRlbXNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7XG4gIGZhQ2hldnJvblJpZ2h0LFxuICBmYUNoZXZyb25MZWZ0LFxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyB1c2VXaW5kb3dEaW1lbnNpb24gfSBmcm9tIFwiLi4vLi4vSG9va3MvdXNlV2luZG93RGltZW5zaW9uXCI7XG5pbXBvcnQgeyBCYWNrZHJvcCB9IGZyb20gXCIuLi8uLi9TdHlsZWRDb21wb25lbnRzL21haW5cIjtcbmltcG9ydCB7dXNlU2Nyb2xsUG9zaXRpb259IGZyb20gJy4uLy4uL0hvb2tzL3VzZVNjcm9sbFBvc2l0aW9uJ1xuXG5jb25zdCBJbWFnZXNNb2RhbCA9ICh7IGltYWdlcywgc3RhdGUsIGNsb3NlTW9kYWwgfSkgPT4ge1xuICBjb25zdCBbYWN0aXZlUGljLCBzZXRBY3RpdmVQaWNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt3aWR0aCwgaGVpZ2h0XSA9IHVzZVdpbmRvd0RpbWVuc2lvbigpO1xuICBjb25zdCByZWYgPSB1c2VSZWYoKVxuXG5cbiAgdXNlU2Nyb2xsUG9zaXRpb24oXG4gICAgKHsgcHJldlBvcywgY3VyclBvcyB9KSA9PiB7XG4gICAgIGNvbnNvbGUubG9nKGN1cnJQb3MpXG4gICAgfSxcbiAgICBbXSxcbiAgICBmYWxzZSxcbiAgICByZWYsXG4gICAgMTUwXG4gICk7XG5cbiAgY29uc3QgaW1ncyA9IGltYWdlcy5wYXRocy5tYXAoKGltZywgaSkgPT4gKFxuICAgIDxJbWFnZUlubmVyV3JhcHBlciBrZXk9e2l9PlxuICAgICAgPEltYWdlXG4gICAgICAgIGRpc3BsYXlXaWR0aD17d2lkdGh9XG4gICAgICAgIGRpc3BsYXlIZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgaWQ9e2ltZ31cbiAgICAgICAgc3JjPXtpbWd9XG4gICAgICAgIGFsdD17aW1hZ2VzLmFsdH1cbiAgICAgICAgbW9kYWxcbiAgICAgICAgc2xpZGU9e2FjdGl2ZVBpY31cbiAgICAgIC8+XG4gICAgPC9JbWFnZUlubmVyV3JhcHBlcj5cbiAgKSk7XG5cbiAgY29uc3QgbWFya2VycyA9IGltYWdlcy5wYXRocy5tYXAoKGEsIGkpID0+IChcbiAgICA8SW1hZ2VzTWFya2VyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVQaWMoaSl9XG4gICAgICBhY3RpdmU9e2kgPT09IGFjdGl2ZVBpY31cbiAgICAgIGtleT17aX1cbiAgICAvPlxuICApKTtcblxuICBjb25zdCBzd2FwUGljdHVyZXNIYW5kbGVyID0gKGRpcmVjdGlvbikgPT4ge1xuICAgIGlmIChhY3RpdmVQaWMgPCBpbWFnZXMucGF0aHMubGVuZ3RoIC0gMSAmJiBkaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgc2V0QWN0aXZlUGljKChzdGF0ZSkgPT4gc3RhdGUgKyAxKTtcbiAgICB9XG4gICAgaWYgKGFjdGl2ZVBpYyA+IDAgJiYgZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgc2V0QWN0aXZlUGljKChzdGF0ZSkgPT4gc3RhdGUgLSAxKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPFZpZXdJbWFnZXMgZGlzcGxheVdpZHRoPXt3aWR0aH0gZGlzcGxheUhlaWdodD17aGVpZ2h0fSBzdGF0ZT17c3RhdGV9IHM+XG4gICAgICAgIDxJbWFnZXNXcmFwcGVyIHJlZj17cmVmfT57aW1nc308L0ltYWdlc1dyYXBwZXI+XG4gICAgICAgIDxJbWFnZXNNYXJrZXJXcmFwcGVyPnttYXJrZXJzfTwvSW1hZ2VzTWFya2VyV3JhcHBlcj5cbiAgICAgICAgPEltYWdlQXJyb3cgb25DbGljaz17KCkgPT4gc3dhcFBpY3R1cmVzSGFuZGxlcihcImxlZnRcIil9IHBvc2l0aW9uPVwibGVmdFwiPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uTGVmdH0gc2l6ZT1cIjR4XCIgLz5cbiAgICAgICAgPC9JbWFnZUFycm93PlxuICAgICAgICA8SW1hZ2VBcnJvd1xuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHN3YXBQaWN0dXJlc0hhbmRsZXIoXCJyaWdodFwiKX1cbiAgICAgICAgICBwb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IHNpemU9XCI0eFwiIC8+XG4gICAgICAgIDwvSW1hZ2VBcnJvdz5cbiAgICAgIDwvVmlld0ltYWdlcz5cbiAgICAgIDxCYWNrZHJvcCBmb3JFbGVtZW50PXtmYWxzZX0gb25DbGljaz17Y2xvc2VNb2RhbH0gc3RhdGU9e3N0YXRlfSAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZXNNb2RhbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Products/ImagesModal.js\n");

/***/ })

})