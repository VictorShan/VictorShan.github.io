webpackHotUpdate_N_E("pages/index",{

/***/ "./components/WaveBackground/WaveBackground.tsx":
/*!******************************************************!*\
  !*** ./components/WaveBackground/WaveBackground.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WaveBackground; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WaveBackground.module.sass */ \"./components/WaveBackground/WaveBackground.module.sass\");\n/* harmony import */ var _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\nvar _jsxFileName = \"/home/victor/Documents/personal-projects/VictorShan.github.io/components/WaveBackground/WaveBackground.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction WaveBackground(_ref) {\n  _s();\n\n  var className = _ref.className,\n      children = _ref.children;\n  var svgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log(svgRef.current);\n\n    if (svgRef.current) {\n      svgRef.current.style.backgroundColor = \"rgb(\".concat(Math.random() * 256, \", \").concat(Math.random() * 256, \", \").concat(Math.random() * 256, \")\");\n    }\n  }, [svgRef]);\n  return __jsx(\"div\", {\n    className: className || _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.waveBackground,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(\"svg\", {\n    ref: svgRef,\n    className: _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.svg,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.children,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, children));\n}\n\n_s(WaveBackground, \"89Ty783ABEwsfMbSOeu9vscWF34=\");\n\n_c = WaveBackground;\n\nfunction createWaveSVG(svgElement) {\n  var svg = d3__WEBPACK_IMPORTED_MODULE_2__[\"select\"](svgElement);\n  svg.style(\"border\", \"5px black solid\");\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"WaveBackground\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYXZlQmFja2dyb3VuZC9XYXZlQmFja2dyb3VuZC50c3g/MDM0NyJdLCJuYW1lcyI6WyJXYXZlQmFja2dyb3VuZCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwic3ZnUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIk1hdGgiLCJyYW5kb20iLCJzdHlsZXMiLCJ3YXZlQmFja2dyb3VuZCIsInN2ZyIsImNyZWF0ZVdhdmVTVkciLCJzdmdFbGVtZW50IiwiZDMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVFlLFNBQVNBLGNBQVQsT0FBNEQ7QUFBQTs7QUFBQSxNQUFsQ0MsU0FBa0MsUUFBbENBLFNBQWtDO0FBQUEsTUFBdkJDLFFBQXVCLFFBQXZCQSxRQUF1QjtBQUN2RSxNQUFJQyxNQUFNLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFuQjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVlKLE1BQU0sQ0FBQ0ssT0FBbkI7O0FBQ0EsUUFBSUwsTUFBTSxDQUFDSyxPQUFYLEVBQW9CO0FBQ2hCTCxZQUFNLENBQUNLLE9BQVAsQ0FBZUMsS0FBZixDQUFxQkMsZUFBckIsaUJBQThDQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBOUQsZUFBc0VELElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUF0RixlQUE4RkQsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQTlHO0FBQ0g7QUFHSixHQVBRLEVBT04sQ0FBQ1QsTUFBRCxDQVBNLENBQVQ7QUFRQSxTQUNJO0FBQUssYUFBUyxFQUFFRixTQUFTLElBQUlZLGtFQUFNLENBQUNDLGNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRVgsTUFBVjtBQUFrQixhQUFTLEVBQUVVLGtFQUFNLENBQUNFLEdBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFFRixrRUFBTSxDQUFDWCxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLFFBREwsQ0FGSixDQURKO0FBUUg7O0dBbkJ1QkYsYzs7S0FBQUEsYzs7QUFxQnhCLFNBQVNnQixhQUFULENBQXVCQyxVQUF2QixFQUFnRDtBQUM1QyxNQUFJRixHQUFHLEdBQUdHLHlDQUFBLENBQVVELFVBQVYsQ0FBVjtBQUNBRixLQUFHLENBQUNOLEtBQUosQ0FBVSxRQUFWLEVBQW9CLGlCQUFwQjtBQUNIIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XYXZlQmFja2dyb3VuZC9XYXZlQmFja2dyb3VuZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1dhdmVCYWNrZ3JvdW5kLm1vZHVsZS5zYXNzJ1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5cblxudHlwZSBwcm9wc1R5cGUgPSB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxuICAgIGNoaWxkcmVuPzogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhdmVCYWNrZ3JvdW5kKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9OiBwcm9wc1R5cGUpIHtcbiAgICBsZXQgc3ZnUmVmID0gdXNlUmVmKG51bGwpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhzdmdSZWYuY3VycmVudClcbiAgICAgICAgaWYgKHN2Z1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBzdmdSZWYuY3VycmVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgcmdiKCR7TWF0aC5yYW5kb20oKSAqIDI1Nn0sICR7TWF0aC5yYW5kb20oKSAqIDI1Nn0sICR7TWF0aC5yYW5kb20oKSAqIDI1Nn0pYFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9LCBbc3ZnUmVmXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lIHx8IHN0eWxlcy53YXZlQmFja2dyb3VuZH0+XG4gICAgICAgICAgICA8c3ZnIHJlZj17c3ZnUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5zdmd9Pjwvc3ZnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGlsZHJlbn0+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gY3JlYXRlV2F2ZVNWRyhzdmdFbGVtZW50OiBKU1guRWxlbWVudCkge1xuICAgIGxldCBzdmcgPSBkMy5zZWxlY3Qoc3ZnRWxlbWVudClcbiAgICBzdmcuc3R5bGUoXCJib3JkZXJcIiwgXCI1cHggYmxhY2sgc29saWRcIilcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/WaveBackground/WaveBackground.tsx\n");

/***/ })

})