webpackHotUpdate_N_E("pages/index",{

/***/ "./components/WaveBackground/WaveBackground.tsx":
/*!******************************************************!*\
  !*** ./components/WaveBackground/WaveBackground.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WaveBackground; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WaveBackground.module.sass */ \"./components/WaveBackground/WaveBackground.module.sass\");\n/* harmony import */ var _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\nvar _jsxFileName = \"/home/victor/Documents/personal-projects/VictorShan.github.io/components/WaveBackground/WaveBackground.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction WaveBackground(_ref) {\n  _s();\n\n  var className = _ref.className,\n      children = _ref.children;\n  var svgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (svgRef.current) {\n      svgRef.current.style.backgroundColor = \"rgb(\".concat(Math.random() * 256, \", \").concat(Math.random() * 256, \", \").concat(Math.random() * 256, \")\");\n      createWaveSVG(svgRef.current);\n    }\n  }, [svgRef]);\n  return __jsx(\"div\", {\n    className: className || _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.waveBackground,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"svg\", {\n    ref: svgRef,\n    className: _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.svg,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.children,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, children));\n}\n\n_s(WaveBackground, \"89Ty783ABEwsfMbSOeu9vscWF34=\");\n\n_c = WaveBackground;\nvar PIXEL_INTERVAL = 50;\nvar TIME_INTERVAL = 50;\n\nfunction createWaveSVG(svgElement) {\n  var svg = d3__WEBPACK_IMPORTED_MODULE_2__[\"select\"](svgElement);\n  svg.style(\"border\", \"5px black solid\");\n  var height = svgElement.clientHeight;\n  var width = svgElement.clientWidth;\n  svg.attr(\"viewbox\", \"0 0 \".concat(width, \" \").concat(height));\n\n  for (var i = 10; i < width; i += PIXEL_INTERVAL) {\n    for (var _j = 10; _j < height; _j += PIXEL_INTERVAL) {\n      svg.append(\"d\").attr(\"class\", \"vertex\").attr(\"x\", i).attr(\"y\", _j).append(\"circle\").attr(\"cx\", 0).attr(\"cy\", 0).attr(\"r\", 3).style(\"fill\", \"black\");\n    }\n  }\n\n  var moveRight = d3__WEBPACK_IMPORTED_MODULE_2__[\"timer\"](function () {\n    svg.selectAll(\".vertex\").transition().duration(TIME_INTERVAL).attr(\"cx\").attr(\"cy\", j);\n  }, TIME_INTERVAL);\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"WaveBackground\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYXZlQmFja2dyb3VuZC9XYXZlQmFja2dyb3VuZC50c3g/MDM0NyJdLCJuYW1lcyI6WyJXYXZlQmFja2dyb3VuZCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwic3ZnUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiTWF0aCIsInJhbmRvbSIsImNyZWF0ZVdhdmVTVkciLCJzdHlsZXMiLCJ3YXZlQmFja2dyb3VuZCIsInN2ZyIsIlBJWEVMX0lOVEVSVkFMIiwiVElNRV9JTlRFUlZBTCIsInN2Z0VsZW1lbnQiLCJkMyIsImhlaWdodCIsImNsaWVudEhlaWdodCIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJhdHRyIiwiaSIsImoiLCJhcHBlbmQiLCJtb3ZlUmlnaHQiLCJzZWxlY3RBbGwiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVFlLFNBQVNBLGNBQVQsT0FBNEQ7QUFBQTs7QUFBQSxNQUFsQ0MsU0FBa0MsUUFBbENBLFNBQWtDO0FBQUEsTUFBdkJDLFFBQXVCLFFBQXZCQSxRQUF1QjtBQUN2RSxNQUFJQyxNQUFNLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFuQjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJRixNQUFNLENBQUNHLE9BQVgsRUFBb0I7QUFDaEJILFlBQU0sQ0FBQ0csT0FBUCxDQUFlQyxLQUFmLENBQXFCQyxlQUFyQixpQkFBOENDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUE5RCxlQUFzRUQsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQXRGLGVBQThGRCxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBOUc7QUFDQUMsbUJBQWEsQ0FBQ1IsTUFBTSxDQUFDRyxPQUFSLENBQWI7QUFDSDtBQUNKLEdBTFEsRUFLTixDQUFDSCxNQUFELENBTE0sQ0FBVDtBQU1BLFNBQ0k7QUFBSyxhQUFTLEVBQUVGLFNBQVMsSUFBSVcsa0VBQU0sQ0FBQ0MsY0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFFVixNQUFWO0FBQWtCLGFBQVMsRUFBRVMsa0VBQU0sQ0FBQ0UsR0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUVGLGtFQUFNLENBQUNWLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0EsUUFETCxDQUZKLENBREo7QUFRSDs7R0FqQnVCRixjOztLQUFBQSxjO0FBbUJ4QixJQUFNZSxjQUFjLEdBQUcsRUFBdkI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsRUFBdEI7O0FBRUEsU0FBU0wsYUFBVCxDQUF1Qk0sVUFBdkIsRUFBK0M7QUFDM0MsTUFBSUgsR0FBRyxHQUFHSSx5Q0FBQSxDQUFVRCxVQUFWLENBQVY7QUFDQUgsS0FBRyxDQUFDUCxLQUFKLENBQVUsUUFBVixFQUFvQixpQkFBcEI7QUFDQSxNQUFJWSxNQUFNLEdBQUdGLFVBQVUsQ0FBQ0csWUFBeEI7QUFDQSxNQUFJQyxLQUFLLEdBQUdKLFVBQVUsQ0FBQ0ssV0FBdkI7QUFDQVIsS0FBRyxDQUFDUyxJQUFKLENBQVMsU0FBVCxnQkFBMkJGLEtBQTNCLGNBQW9DRixNQUFwQzs7QUFDQSxPQUFLLElBQUlLLENBQUMsR0FBRyxFQUFiLEVBQWlCQSxDQUFDLEdBQUdILEtBQXJCLEVBQTRCRyxDQUFDLElBQUlULGNBQWpDLEVBQWlEO0FBQzdDLFNBQUssSUFBSVUsRUFBQyxHQUFHLEVBQWIsRUFBaUJBLEVBQUMsR0FBR04sTUFBckIsRUFBNkJNLEVBQUMsSUFBR1YsY0FBakMsRUFBaUQ7QUFDN0NELFNBQUcsQ0FBQ1ksTUFBSixDQUFXLEdBQVgsRUFDS0gsSUFETCxDQUNVLE9BRFYsRUFDbUIsUUFEbkIsRUFFS0EsSUFGTCxDQUVVLEdBRlYsRUFFZUMsQ0FGZixFQUdLRCxJQUhMLENBR1UsR0FIVixFQUdlRSxFQUhmLEVBSUtDLE1BSkwsQ0FJWSxRQUpaLEVBS0tILElBTEwsQ0FLVSxJQUxWLEVBS2dCLENBTGhCLEVBTUtBLElBTkwsQ0FNVSxJQU5WLEVBTWdCLENBTmhCLEVBT0tBLElBUEwsQ0FPVSxHQVBWLEVBT2UsQ0FQZixFQVFLaEIsS0FSTCxDQVFXLE1BUlgsRUFRbUIsT0FSbkI7QUFTSDtBQUNKOztBQUVELE1BQUlvQixTQUFTLEdBQUdULHdDQUFBLENBQVMsWUFBTTtBQUMzQkosT0FBRyxDQUFDYyxTQUFKLENBQWMsU0FBZCxFQUNLQyxVQURMLEdBRUtDLFFBRkwsQ0FFY2QsYUFGZCxFQUdLTyxJQUhMLENBR1UsSUFIVixFQUlLQSxJQUpMLENBSVUsSUFKVixFQUlnQkUsQ0FKaEI7QUFLSCxHQU5lLEVBTWJULGFBTmEsQ0FBaEI7QUFPSCIsImZpbGUiOiIuL2NvbXBvbmVudHMvV2F2ZUJhY2tncm91bmQvV2F2ZUJhY2tncm91bmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9XYXZlQmFja2dyb3VuZC5tb2R1bGUuc2FzcydcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuXG5cbnR5cGUgcHJvcHNUeXBlID0ge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcbiAgICBjaGlsZHJlbj86IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXYXZlQmFja2dyb3VuZCh7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfTogcHJvcHNUeXBlKSB7XG4gICAgbGV0IHN2Z1JlZiA9IHVzZVJlZihudWxsKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHN2Z1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBzdmdSZWYuY3VycmVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgcmdiKCR7TWF0aC5yYW5kb20oKSAqIDI1Nn0sICR7TWF0aC5yYW5kb20oKSAqIDI1Nn0sICR7TWF0aC5yYW5kb20oKSAqIDI1Nn0pYFxuICAgICAgICAgICAgY3JlYXRlV2F2ZVNWRyhzdmdSZWYuY3VycmVudClcbiAgICAgICAgfVxuICAgIH0sIFtzdmdSZWZdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWUgfHwgc3R5bGVzLndhdmVCYWNrZ3JvdW5kfT5cbiAgICAgICAgICAgIDxzdmcgcmVmPXtzdmdSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLnN2Z30+PC9zdmc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoaWxkcmVufT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBQSVhFTF9JTlRFUlZBTCA9IDUwXG5jb25zdCBUSU1FX0lOVEVSVkFMID0gNTBcblxuZnVuY3Rpb24gY3JlYXRlV2F2ZVNWRyhzdmdFbGVtZW50OiBTVkdFbGVtZW50KSB7XG4gICAgbGV0IHN2ZyA9IGQzLnNlbGVjdChzdmdFbGVtZW50KVxuICAgIHN2Zy5zdHlsZShcImJvcmRlclwiLCBcIjVweCBibGFjayBzb2xpZFwiKVxuICAgIGxldCBoZWlnaHQgPSBzdmdFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIGxldCB3aWR0aCA9IHN2Z0VsZW1lbnQuY2xpZW50V2lkdGhcbiAgICBzdmcuYXR0cihcInZpZXdib3hcIiwgYDAgMCAke3dpZHRofSAke2hlaWdodH1gKVxuICAgIGZvciAobGV0IGkgPSAxMDsgaSA8IHdpZHRoOyBpICs9IFBJWEVMX0lOVEVSVkFMKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAxMDsgaiA8IGhlaWdodDsgais9IFBJWEVMX0lOVEVSVkFMKSB7XG4gICAgICAgICAgICBzdmcuYXBwZW5kKFwiZFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ2ZXJ0ZXhcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInhcIiwgaSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInlcIiwgailcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjeFwiLCAwKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY3lcIiwgMClcbiAgICAgICAgICAgICAgICAuYXR0cihcInJcIiwgMylcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiYmxhY2tcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBtb3ZlUmlnaHQgPSBkMy50aW1lcigoKSA9PiB7XG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCIudmVydGV4XCIpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oVElNRV9JTlRFUlZBTClcbiAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgKVxuICAgICAgICAgICAgLmF0dHIoXCJjeVwiLCBqKVxuICAgIH0sIFRJTUVfSU5URVJWQUwpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/WaveBackground/WaveBackground.tsx\n");

/***/ })

})