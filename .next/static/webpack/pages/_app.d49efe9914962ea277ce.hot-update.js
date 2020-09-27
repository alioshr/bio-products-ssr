webpackHotUpdate_N_E("pages/_app",{

/***/ "./UI/SocialMedia/SocialMedia.js":
/*!***************************************!*\
  !*** ./UI/SocialMedia/SocialMedia.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/react-fontawesome/0.1.11_5fd28985a220cda149fda67f0cfb6994/node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/.pnpm/registry.npmjs.org/@fortawesome/free-brands-svg-icons/5.14.0/node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var _StyledComponents_socialMediaItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../StyledComponents/socialMediaItems */ \"./StyledComponents/socialMediaItems.js\");\n/* harmony import */ var _Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Hooks/useClientWindow */ \"./Hooks/useClientWindow.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/UI/SocialMedia/SocialMedia.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar SocialMedia = function SocialMedia(_ref) {\n  _s();\n\n  var pattern = _ref.pattern;\n  var window = Object(_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_4__[\"useClientWindow\"])();\n  console.log('aaaa');\n  console.log('window', window);\n  var onMobile = window.innerWidth < 640;\n  var menuIconSize = onMobile ? '2x' : '4x';\n  var footerIconSize = onMobile ? '3x' : '4x';\n  var iconSize = pattern === 'menu' ? menuIconSize : pattern === 'footer' ? footerIconSize : null;\n  return __jsx(_StyledComponents_socialMediaItems__WEBPACK_IMPORTED_MODULE_3__[\"SocialMediaWrapper\"], {\n    pattern: pattern,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_socialMediaItems__WEBPACK_IMPORTED_MODULE_3__[\"LinkWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(_StyledComponents_socialMediaItems__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n    pattern: pattern,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__[\"faTwitter\"],\n    size: iconSize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }))), __jsx(_StyledComponents_socialMediaItems__WEBPACK_IMPORTED_MODULE_3__[\"LinkWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(_StyledComponents_socialMediaItems__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n    pattern: pattern,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__[\"faFacebook\"],\n    size: iconSize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }))), __jsx(_StyledComponents_socialMediaItems__WEBPACK_IMPORTED_MODULE_3__[\"LinkWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(_StyledComponents_socialMediaItems__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n    pattern: pattern,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__[\"faInstagram\"],\n    size: iconSize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(SocialMedia, \"rpqVMIlNFVi72Va4SCZ6i4RPHz4=\", false, function () {\n  return [_Hooks_useClientWindow__WEBPACK_IMPORTED_MODULE_4__[\"useClientWindow\"]];\n});\n\n_c = SocialMedia;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocialMedia);\n\nvar _c;\n\n$RefreshReg$(_c, \"SocialMedia\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/.pnpm/registry.npmjs.org/webpack/4.44.1_webpack@4.44.1/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvU29jaWFsTWVkaWEvU29jaWFsTWVkaWEuanM/NzFjZSJdLCJuYW1lcyI6WyJTb2NpYWxNZWRpYSIsInBhdHRlcm4iLCJ3aW5kb3ciLCJ1c2VDbGllbnRXaW5kb3ciLCJjb25zb2xlIiwibG9nIiwib25Nb2JpbGUiLCJpbm5lcldpZHRoIiwibWVudUljb25TaXplIiwiZm9vdGVySWNvblNpemUiLCJpY29uU2l6ZSIsImZhVHdpdHRlciIsImZhRmFjZWJvb2siLCJmYUluc3RhZ3JhbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFLQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFpQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUNuQyxNQUFNQyxNQUFNLEdBQUdDLDhFQUFlLEVBQTlCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFxQkgsTUFBckI7QUFDQSxNQUFNSSxRQUFRLEdBQUdKLE1BQU0sQ0FBQ0ssVUFBUCxHQUFvQixHQUFyQztBQUNBLE1BQU1DLFlBQVksR0FBR0YsUUFBUSxHQUFHLElBQUgsR0FBVSxJQUF2QztBQUNBLE1BQU1HLGNBQWMsR0FBR0gsUUFBUSxHQUFHLElBQUgsR0FBVSxJQUF6QztBQUNBLE1BQUlJLFFBQVEsR0FBR1QsT0FBTyxLQUFLLE1BQVosR0FBcUJPLFlBQXJCLEdBQW9DUCxPQUFPLEtBQUssUUFBWixHQUF1QlEsY0FBdkIsR0FBd0MsSUFBM0Y7QUFDQSxTQUNFLE1BQUMscUZBQUQ7QUFBb0IsV0FBTyxFQUFFUixPQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1RUFBRDtBQUFNLFdBQU8sRUFBRUEsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVVLDRFQUF2QjtBQUFrQyxRQUFJLEVBQUVELFFBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFNRSxNQUFDLDhFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVFQUFEO0FBQU0sV0FBTyxFQUFFVCxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRVcsNkVBQXZCO0FBQW1DLFFBQUksRUFBRUYsUUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FORixFQVdFLE1BQUMsOEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdUVBQUQ7QUFBTSxXQUFPLEVBQUVULE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFFWSw4RUFBdkI7QUFBb0MsUUFBSSxFQUFFSCxRQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQVhGLENBREY7QUFtQkQsQ0EzQkQ7O0dBQU1WLFc7VUFDV0csc0U7OztLQURYSCxXO0FBNkJTQSwwRUFBZiIsImZpbGUiOiIuL1VJL1NvY2lhbE1lZGlhL1NvY2lhbE1lZGlhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHtcbiAgZmFUd2l0dGVyLFxuICBmYUZhY2Vib29rLFxuICBmYUluc3RhZ3JhbSxcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcbmltcG9ydCB7XG4gIExpbmtXcmFwcGVyLFxuICBTb2NpYWxNZWRpYVdyYXBwZXIsXG4gIExpbmssXG59IGZyb20gXCIuLi8uLi9TdHlsZWRDb21wb25lbnRzL3NvY2lhbE1lZGlhSXRlbXNcIjtcbmltcG9ydCB7dXNlQ2xpZW50V2luZG93fSBmcm9tICcuLi8uLi9Ib29rcy91c2VDbGllbnRXaW5kb3cnXG5cbmNvbnN0IFNvY2lhbE1lZGlhID0gKHsgcGF0dGVybiB9KSA9PiB7XG4gIGNvbnN0IHdpbmRvdyA9IHVzZUNsaWVudFdpbmRvdygpO1xuICBjb25zb2xlLmxvZygnYWFhYScpXG4gIGNvbnNvbGUubG9nKCd3aW5kb3cnLHdpbmRvdylcbiAgY29uc3Qgb25Nb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDY0MDtcbiAgY29uc3QgbWVudUljb25TaXplID0gb25Nb2JpbGUgPyAnMngnIDogJzR4JztcbiAgY29uc3QgZm9vdGVySWNvblNpemUgPSBvbk1vYmlsZSA/ICczeCcgOiAnNHgnO1xuICBsZXQgaWNvblNpemUgPSBwYXR0ZXJuID09PSAnbWVudScgPyBtZW51SWNvblNpemUgOiBwYXR0ZXJuID09PSAnZm9vdGVyJyA/IGZvb3Rlckljb25TaXplIDogbnVsbDsgXG4gIHJldHVybiAoXG4gICAgPFNvY2lhbE1lZGlhV3JhcHBlciBwYXR0ZXJuPXtwYXR0ZXJufT5cbiAgICAgIDxMaW5rV3JhcHBlcj5cbiAgICAgICAgPExpbmsgcGF0dGVybj17cGF0dGVybn0+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVR3aXR0ZXJ9IHNpemU9e2ljb25TaXplfSAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0xpbmtXcmFwcGVyPlxuICAgICAgPExpbmtXcmFwcGVyPlxuICAgICAgICA8TGluayBwYXR0ZXJuPXtwYXR0ZXJufT5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRmFjZWJvb2t9IHNpemU9e2ljb25TaXplfSAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0xpbmtXcmFwcGVyPlxuICAgICAgPExpbmtXcmFwcGVyPlxuICAgICAgICA8TGluayBwYXR0ZXJuPXtwYXR0ZXJufT5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSW5zdGFncmFtfSBzaXplPXtpY29uU2l6ZX0gLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9MaW5rV3JhcHBlcj5cbiAgICA8L1NvY2lhbE1lZGlhV3JhcHBlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsTWVkaWE7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./UI/SocialMedia/SocialMedia.js\n");

/***/ })

})