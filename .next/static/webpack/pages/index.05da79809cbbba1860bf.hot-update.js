webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Products/ImagesModal.js":
/*!********************************************!*\
  !*** ./Components/Products/ImagesModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.11.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StyledComponents/productsItems */ \"./StyledComponents/productsItems.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-solid-svg-icons/5.14.0/node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Hooks/useWindowDimension */ \"./Hooks/useWindowDimension.js\");\n/* harmony import */ var _StyledComponents_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../StyledComponents/main */ \"./StyledComponents/main.js\");\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"./Hooks/useScrollPosition.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/Components/Products/ImagesModal.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar ImagesModal = function ImagesModal(_ref) {\n  _s();\n\n  var images = _ref.images,\n      state = _ref.state,\n      closeModal = _ref.closeModal;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      activePic = _useState[0],\n      setActivePic = _useState[1];\n\n  var _useWindowDimension = Object(_Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__[\"useWindowDimension\"])(),\n      _useWindowDimension2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useWindowDimension, 2),\n      width = _useWindowDimension2[0],\n      height = _useWindowDimension2[1];\n\n  var elRefs = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef([]);\n  var imgs = images.paths.map(function (img, i) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImageInnerWrapper\"], {\n      key: i,\n      ref: elRefs.current[i],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 5\n      }\n    }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n      displayWidth: width,\n      displayHeight: height,\n      id: img,\n      src: img,\n      alt: images.alt,\n      modal: true,\n      slide: activePic,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 7\n      }\n    }));\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var length = imgs.length;\n\n    if (elRefs.current.length !== length) {\n      elRefs.current = Array(length).fill().map(function (_, i) {\n        return elRefs.current[i] || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();\n      });\n    }\n\n    if (elRefs.current.length === length) {}\n  }, []);\n  console.log(elRefs);\n  var markers = images.paths.map(function (a, i) {\n    return __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImagesMarker\"], {\n      onClick: function onClick() {\n        return setActivePic(i);\n      },\n      active: i === activePic,\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 5\n      }\n    });\n  });\n\n  var swapPicturesHandler = function swapPicturesHandler(direction) {\n    if (activePic < images.paths.length - 1 && direction === \"right\") {\n      setActivePic(function (state) {\n        return state + 1;\n      });\n    }\n\n    if (activePic > 0 && direction === \"left\") {\n      setActivePic(function (state) {\n        return state - 1;\n      });\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ViewImages\"], {\n    displayWidth: width,\n    displayHeight: height,\n    state: state,\n    s: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImagesWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }, imgs), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImagesMarkerWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, markers), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImageArrow\"], {\n    onClick: function onClick() {\n      return swapPicturesHandler(\"left\");\n    },\n    position: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faChevronLeft\"],\n    size: \"4x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  })), __jsx(_StyledComponents_productsItems__WEBPACK_IMPORTED_MODULE_2__[\"ImageArrow\"], {\n    onClick: function onClick() {\n      return swapPicturesHandler(\"right\");\n    },\n    position: \"right\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faChevronRight\"],\n    size: \"4x\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }))), __jsx(_StyledComponents_main__WEBPACK_IMPORTED_MODULE_6__[\"Backdrop\"], {\n    forElement: false,\n    onClick: closeModal,\n    state: state,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(ImagesModal, \"i8WQ9aM5+OK+pHvse606+1MnwDE=\", false, function () {\n  return [_Hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_5__[\"useWindowDimension\"]];\n});\n\n_c = ImagesModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagesModal);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImagesModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qcm9kdWN0cy9JbWFnZXNNb2RhbC5qcz9iZmUxIl0sIm5hbWVzIjpbIkltYWdlc01vZGFsIiwiaW1hZ2VzIiwic3RhdGUiLCJjbG9zZU1vZGFsIiwidXNlU3RhdGUiLCJhY3RpdmVQaWMiLCJzZXRBY3RpdmVQaWMiLCJ1c2VXaW5kb3dEaW1lbnNpb24iLCJ3aWR0aCIsImhlaWdodCIsImVsUmVmcyIsIlJlYWN0IiwidXNlUmVmIiwiaW1ncyIsInBhdGhzIiwibWFwIiwiaW1nIiwiaSIsImN1cnJlbnQiLCJhbHQiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJBcnJheSIsImZpbGwiLCJfIiwiY3JlYXRlUmVmIiwiY29uc29sZSIsImxvZyIsIm1hcmtlcnMiLCJhIiwic3dhcFBpY3R1cmVzSGFuZGxlciIsImRpcmVjdGlvbiIsImZhQ2hldnJvbkxlZnQiLCJmYUNoZXZyb25SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFtQztBQUFBOztBQUFBLE1BQWhDQyxNQUFnQyxRQUFoQ0EsTUFBZ0M7QUFBQSxNQUF4QkMsS0FBd0IsUUFBeEJBLEtBQXdCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFBQSxrQkFDbkJDLHNEQUFRLENBQUMsQ0FBRCxDQURXO0FBQUEsTUFDOUNDLFNBRDhDO0FBQUEsTUFDbkNDLFlBRG1DOztBQUFBLDRCQUU3QkMsb0ZBQWtCLEVBRlc7QUFBQTtBQUFBLE1BRTlDQyxLQUY4QztBQUFBLE1BRXZDQyxNQUZ1Qzs7QUFJckQsTUFBTUMsTUFBTSxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWEsRUFBYixDQUFmO0FBRUEsTUFBTUMsSUFBSSxHQUFHWixNQUFNLENBQUNhLEtBQVAsQ0FBYUMsR0FBYixDQUFpQixVQUFDQyxHQUFELEVB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WSxXQUFPLEVBQUU7QUFBQSxhQUFNRSxtQkFBbUIsQ0FBQyxNQUFELENBQXpCO0FBQUEsS0FBckI7QUFBd0QsWUFBUSxFQUFDLE1BQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRUUsK0VBQXZCO0FBQXNDLFFBQUksRUFBQyxJQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FIRixFQU1FLE1BQUMsMEVBQUQ7QUFDRSxXQUFPLEVBQUU7QUFBQSxhQUFNRixtQkFBbUIsQ0FBQyxPQUFELENBQXpCO0FBQUEsS0FEWDtBQUVFLFlBQVEsRUFBQyxPQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRUcsZ0ZBQXZCO0FBQXVDLFFBQUksRUFBQyxJQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FORixDQURGLEVBY0UsTUFBQywrREFBRDtBQUFVLGNBQVUsRUFBRSxLQUF0QjtBQUE2QixXQUFPLEVBQUU5QixVQUF0QztBQUFrRCxTQUFLLEVBQUVELEtBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixDQURGO0FBa0JELENBbkVEOztHQUFNRixXO1VBRW9CTyw0RTs7O0tBRnBCUCxXO0FBcUVTQSwwRUFBZiIsImZpbGUiOiIuL0NvbXBvbmVudHMvUHJvZHVjdHMvSW1hZ2VzTW9kYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgRnJhZ21lbnQsIHVzZVJlZiwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEltYWdlSW5uZXJXcmFwcGVyLFxuICBJbWFnZSxcbiAgSW1hZ2VzTWFya2VyLFxuICBWaWV3SW1hZ2VzLFxuICBJbWFnZXNXcmFwcGVyLFxuICBJbWFnZXNNYXJrZXJXcmFwcGVyLFxuICBJbWFnZUFycm93LFxufSBmcm9tIFwiLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9wcm9kdWN0c0l0ZW1zXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQge1xuICBmYUNoZXZyb25SaWdodCxcbiAgZmFDaGV2cm9uTGVmdCxcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgdXNlV2luZG93RGltZW5zaW9uIH0gZnJvbSBcIi4uLy4uL0hvb2tzL3VzZVdpbmRvd0RpbWVuc2lvblwiO1xuaW1wb3J0IHsgQmFja2Ryb3AgfSBmcm9tIFwiLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9tYWluXCI7XG5pbXBvcnQge3VzZVNjcm9sbFBvc2l0aW9ufSBmcm9tICcuLi8uLi9Ib29rcy91c2VTY3JvbGxQb3NpdGlvbidcblxuY29uc3QgSW1hZ2VzTW9kYWwgPSAoeyBpbWFnZXMsIHN0YXRlLCBjbG9zZU1vZGFsIH0pID0+IHtcbiAgY29uc3QgW2FjdGl2ZVBpYywgc2V0QWN0aXZlUGljXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSB1c2VXaW5kb3dEaW1lbnNpb24oKTtcbiAgXG4gIGNvbnN0IGVsUmVmcyA9IFJlYWN0LnVzZVJlZihbXSk7XG5cbiAgY29uc3QgaW1ncyA9IGltYWdlcy5wYXRocy5tYXAoKGltZywgaSkgPT4gKFxuICAgIDxJbWFnZUlubmVyV3JhcHBlciBrZXk9e2l9IHJlZj17ZWxSZWZzLmN1cnJlbnRbaV19PlxuICAgICAgPEltYWdlXG4gICAgICAgIGRpc3BsYXlXaWR0aD17d2lkdGh9XG4gICAgICAgIGRpc3BsYXlIZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgaWQ9e2ltZ31cbiAgICAgICAgc3JjPXtpbWd9XG4gICAgICAgIGFsdD17aW1hZ2VzLmFsdH1cbiAgICAgICAgbW9kYWxcbiAgICAgICAgc2xpZGU9e2FjdGl2ZVBpY31cbiAgICAgIC8+XG4gICAgPC9JbWFnZUlubmVyV3JhcHBlcj5cbiAgKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBpbWdzLmxlbmd0aDtcbiAgICBpZiAoZWxSZWZzLmN1cnJlbnQubGVuZ3RoICE9PSBsZW5ndGgpIHtcbiAgICAgIGVsUmVmcy5jdXJyZW50ID0gQXJyYXkobGVuZ3RoKS5maWxsKCkubWFwKChfLCBpKSA9PiBlbFJlZnMuY3VycmVudFtpXSB8fCBSZWFjdC5jcmVhdGVSZWYoKSlcbiAgICB9XG5cbiAgICBpZihlbFJlZnMuY3VycmVudC5sZW5ndGggPT09IGxlbmd0aCkge1xuXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zb2xlLmxvZyhlbFJlZnMpXG5cbiAgY29uc3QgbWFya2VycyA9IGltYWdlcy5wYXRocy5tYXAoKGEsIGkpID0+IChcbiAgICA8SW1hZ2VzTWFya2VyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVQaWMoaSl9XG4gICAgICBhY3RpdmU9e2kgPT09IGFjdGl2ZVBpY31cbiAgICAgIGtleT17aX1cbiAgICAvPlxuICApKTtcblxuICBjb25zdCBzd2FwUGljdHVyZXNIYW5kbGVyID0gKGRpcmVjdGlvbikgPT4ge1xuICAgIGlmIChhY3RpdmVQaWMgPCBpbWFnZXMucGF0aHMubGVuZ3RoIC0gMSAmJiBkaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgc2V0QWN0aXZlUGljKChzdGF0ZSkgPT4gc3RhdGUgKyAxKTtcbiAgICB9XG4gICAgaWYgKGFjdGl2ZVBpYyA+IDAgJiYgZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgc2V0QWN0aXZlUGljKChzdGF0ZSkgPT4gc3RhdGUgLSAxKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPFZpZXdJbWFnZXMgZGlzcGxheVdpZHRoPXt3aWR0aH0gZGlzcGxheUhlaWdodD17aGVpZ2h0fSBzdGF0ZT17c3RhdGV9IHM+XG4gICAgICAgIDxJbWFnZXNXcmFwcGVyPntpbWdzfTwvSW1hZ2VzV3JhcHBlcj5cbiAgICAgICAgPEltYWdlc01hcmtlcldyYXBwZXI+e21hcmtlcnN9PC9JbWFnZXNNYXJrZXJXcmFwcGVyPlxuICAgICAgICA8SW1hZ2VBcnJvdyBvbkNsaWNrPXsoKSA9PiBzd2FwUGljdHVyZXNIYW5kbGVyKFwibGVmdFwiKX0gcG9zaXRpb249XCJsZWZ0XCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25MZWZ0fSBzaXplPVwiNHhcIiAvPlxuICAgICAgICA8L0ltYWdlQXJyb3c+XG4gICAgICAgIDxJbWFnZUFycm93XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc3dhcFBpY3R1cmVzSGFuZGxlcihcInJpZ2h0XCIpfVxuICAgICAgICAgIHBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICA+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gc2l6ZT1cIjR4XCIgLz5cbiAgICAgICAgPC9JbWFnZUFycm93PlxuICAgICAgPC9WaWV3SW1hZ2VzPlxuICAgICAgPEJhY2tkcm9wIGZvckVsZW1lbnQ9e2ZhbHNlfSBvbkNsaWNrPXtjbG9zZU1vZGFsfSBzdGF0ZT17c3RhdGV9IC8+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlc01vZGFsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Products/ImagesModal.js\n");

/***/ })

})