"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmicro_host"] = self["webpackChunkmicro_host"] || []).push([["src_redux_slice_dashboardSlice_ts"],{

/***/ "./src/redux/slice/dashboardSlice.ts":
/*!*******************************************!*\
  !*** ./src/redux/slice/dashboardSlice.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   counterSlice: () => (/* binding */ counterSlice),\n/* harmony export */   decrement: () => (/* binding */ decrement),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   increment: () => (/* binding */ increment),\n/* harmony export */   incrementByAmount: () => (/* binding */ incrementByAmount)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nvar initialState = {\n  value: 0\n};\nvar counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'counter',\n  initialState: initialState,\n  reducers: {\n    increment: function increment(state) {\n      state.value += 1;\n    },\n    decrement: function decrement(state) {\n      state.value -= 1;\n    },\n    incrementByAmount: function incrementByAmount(state, action) {\n      state.value += action.payload;\n    }\n  }\n});\n\n// Action creators are generated for each case reducer function\nvar _counterSlice$actions = counterSlice.actions,\n  increment = _counterSlice$actions.increment,\n  decrement = _counterSlice$actions.decrement,\n  incrementByAmount = _counterSlice$actions.incrementByAmount;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);\n\n//# sourceURL=webpack://micro-host/./src/redux/slice/dashboardSlice.ts?");

/***/ })

}]);