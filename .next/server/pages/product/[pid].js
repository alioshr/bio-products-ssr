module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/product/[pid].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./StyledComponents/productDetails.js":
/*!********************************************!*\
  !*** ./StyledComponents/productDetails.js ***!
  \********************************************/
/*! exports provided: Wrapper, Banner, BannerImage, Details, Title, Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Banner\", function() { return Banner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BannerImage\", function() { return BannerImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Details\", function() { return Details; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Article\", function() { return Article; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section`\nheight: 100%;\nwidth: 100%;\n`;\nconst Banner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\nwidth: 100%;\nheight: 50vh;\n`;\nconst BannerImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img`\nobject-fit: cover;\nwidth: 100%;\nheight: 100%;\n`;\nconst Details = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section`\npadding-top: 2rem;\ndisplay: flex;\nflex-direction: column;\nalign-content: center;\ntext-align: center;\nmin-height: 100vh;\n`;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1`\nfont-size: 4rem;\nmargin-top: 0;\n`;\nconst Article = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article`\n\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9TdHlsZWRDb21wb25lbnRzL3Byb2R1Y3REZXRhaWxzLmpzPzExZTUiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsInNlY3Rpb24iLCJCYW5uZXIiLCJkaXYiLCJCYW5uZXJJbWFnZSIsImltZyIsIkRldGFpbHMiLCJUaXRsZSIsImgxIiwiQXJ0aWNsZSIsImFydGljbGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsT0FBTyxHQUFHQyx3REFBTSxDQUFDQyxPQUFROzs7Q0FBL0I7QUFLQSxNQUFNQyxNQUFNLEdBQUdGLHdEQUFNLENBQUNHLEdBQUk7OztDQUExQjtBQUtBLE1BQU1DLFdBQVcsR0FBR0osd0RBQU0sQ0FBQ0ssR0FBSTs7OztDQUEvQjtBQU1BLE1BQU1DLE9BQU8sR0FBR04sd0RBQU0sQ0FBQ0MsT0FBUTs7Ozs7OztDQUEvQjtBQVNBLE1BQU1NLEtBQUssR0FBR1Asd0RBQU0sQ0FBQ1EsRUFBRzs7O0NBQXhCO0FBS0EsTUFBTUMsT0FBTyxHQUFHVCx3REFBTSxDQUFDVSxPQUFROztDQUEvQiIsImZpbGUiOiIuL1N0eWxlZENvbXBvbmVudHMvcHJvZHVjdERldGFpbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7Y3NzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcbmhlaWdodDogMTAwJTtcbndpZHRoOiAxMDAlO1xuYFxuXG5leHBvcnQgY29uc3QgQmFubmVyID0gc3R5bGVkLmRpdmBcbndpZHRoOiAxMDAlO1xuaGVpZ2h0OiA1MHZoO1xuYFxuXG5leHBvcnQgY29uc3QgQmFubmVySW1hZ2UgPSBzdHlsZWQuaW1nYFxub2JqZWN0LWZpdDogY292ZXI7XG53aWR0aDogMTAwJTtcbmhlaWdodDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IERldGFpbHMgPSBzdHlsZWQuc2VjdGlvbmBcbnBhZGRpbmctdG9wOiAycmVtO1xuZGlzcGxheTogZmxleDtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5hbGlnbi1jb250ZW50OiBjZW50ZXI7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5taW4taGVpZ2h0OiAxMDB2aDtcbmBcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuZm9udC1zaXplOiA0cmVtO1xubWFyZ2luLXRvcDogMDtcbmBcblxuZXhwb3J0IGNvbnN0IEFydGljbGUgPSBzdHlsZWQuYXJ0aWNsZWBcblxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./StyledComponents/productDetails.js\n");

/***/ }),

/***/ "./pages/product/[pid].js":
/*!********************************!*\
  !*** ./pages/product/[pid].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../StyledComponents/productDetails */ \"./StyledComponents/productDetails.js\");\nvar _jsxFileName = \"/Users/Dev/Desktop/bio-products-ssr/pages/product/[pid].js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst ProductDetails = () => {\n  const store = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useStore\"])(state => state.products);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    fetch(`https://meli-345234234.firebaseio.com/catalog/${store.activeCatalog}/${store.activeCatagory}/${store.activeProduct}.json`).then(res => res.json()).then(data => console.log(data));\n  }, []);\n  return __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Wrapper\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Banner\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"BannerImage\"], {\n    src: \"/DetailsTest/test.jpg\",\n    alt: \"banner logo\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  })), __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Details\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(_StyledComponents_productDetails__WEBPACK_IMPORTED_MODULE_2__[\"Title\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }, \"Title!\"), \"details\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0L1twaWRdLmpzPzZjN2QiXSwibmFtZXMiOlsiUHJvZHVjdERldGFpbHMiLCJzdG9yZSIsInVzZVN0b3JlIiwic3RhdGUiLCJwcm9kdWN0cyIsInVzZUVmZmVjdCIsImZldGNoIiwiYWN0aXZlQ2F0YWxvZyIsImFjdGl2ZUNhdGFnb3J5IiwiYWN0aXZlUHJvZHVjdCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGNBQWMsR0FBRyxNQUFNO0FBQzNCLFFBQU1DLEtBQUssR0FBR0MsNERBQVEsQ0FBQ0MsS0FBSyxJQUFJQSxLQUFLLENBQUNDLFFBQWhCLENBQXRCO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNiQyxTQUFLLENBQUUsaURBQWdETCxLQUFLLENBQUNNLGFBQWMsSUFBR04sS0FBSyxDQUFDTyxjQUFlLElBQUdQLEtBQUssQ0FBQ1EsYUFBYyxPQUFySCxDQUFMLENBQ0NDLElBREQsQ0FDTUMsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQUosRUFEYixFQUVDRixJQUZELENBRU1HLElBQUksSUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosQ0FGZDtBQUdGLEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQSxTQUNFLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNEVBQUQ7QUFBYSxPQUFHLEVBQUMsdUJBQWpCO0FBQXlDLE9BQUcsRUFBQyxhQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLFlBSkosQ0FERjtBQVdELENBcEJEOztBQXNCZWIsNkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1twaWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlU3RvcmV9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtXcmFwcGVyLCBCYW5uZXIsIEJhbm5lckltYWdlLCBEZXRhaWxzLCBUaXRsZX0gZnJvbSAnLi4vLi4vU3R5bGVkQ29tcG9uZW50cy9wcm9kdWN0RGV0YWlscydcblxuY29uc3QgUHJvZHVjdERldGFpbHMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoc3RhdGUgPT4gc3RhdGUucHJvZHVjdHMpICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICBmZXRjaChgaHR0cHM6Ly9tZWxpLTM0NTIzNDIzNC5maXJlYmFzZWlvLmNvbS9jYXRhbG9nLyR7c3RvcmUuYWN0aXZlQ2F0YWxvZ30vJHtzdG9yZS5hY3RpdmVDYXRhZ29yeX0vJHtzdG9yZS5hY3RpdmVQcm9kdWN0fS5qc29uYClcbiAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICAgIDxCYW5uZXI+XG4gICAgICAgICAgICA8QmFubmVySW1hZ2Ugc3JjPVwiL0RldGFpbHNUZXN0L3Rlc3QuanBnXCIgYWx0PVwiYmFubmVyIGxvZ29cIi8+XG4gICAgICAgIDwvQmFubmVyPlxuICAgICAgICA8RGV0YWlscz5cbiAgICAgICAgICAgIDxUaXRsZT5UaXRsZSE8L1RpdGxlPlxuICAgICAgICAgICAgZGV0YWlsc1xuICAgICAgICA8L0RldGFpbHM+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[pid].js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });