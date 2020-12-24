webpackHotUpdate_N_E("pages/index",{

/***/ "./components/WaveBackground/WaveBackground.tsx":
/*!******************************************************!*\
  !*** ./components/WaveBackground/WaveBackground.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WaveBackground; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WaveBackground.module.sass */ \"./components/WaveBackground/WaveBackground.module.sass\");\n/* harmony import */ var _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\nvar _jsxFileName = \"/home/victor/Documents/personal-projects/VictorShan.github.io/components/WaveBackground/WaveBackground.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction WaveBackground(_ref) {\n  _s();\n\n  var className = _ref.className,\n      children = _ref.children;\n  var svgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (svgRef.current) {\n      svgRef.current.style.backgroundColor = \"rgb(\".concat(Math.random() * 256, \", \").concat(Math.random() * 256, \", \").concat(Math.random() * 256, \")\");\n      createWaveSVG(svgRef.current);\n    }\n  }, [svgRef]);\n  return __jsx(\"div\", {\n    className: className || _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.waveBackground,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"svg\", {\n    ref: svgRef,\n    className: _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.svg,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.children,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, children));\n}\n\n_s(WaveBackground, \"89Ty783ABEwsfMbSOeu9vscWF34=\");\n\n_c = WaveBackground;\nvar PIXEL_INTERVAL = 50;\nvar TIME_INTERVAL = 50;\n\nfunction createWaveSVG(svgElement) {\n  // svg setup\n  var svg = d3__WEBPACK_IMPORTED_MODULE_2__[\"select\"](svgElement);\n  svg.style(\"border\", \"5px black solid\");\n  var height = svgElement.clientHeight;\n  var width = svgElement.clientWidth;\n  svg.attr(\"viewbox\", \"0 0 \".concat(width, \" \").concat(height)); // construct data\n\n  var data = [];\n\n  for (var i = 25; i < width; i += PIXEL_INTERVAL) {\n    for (var j = 25; j < height; j += PIXEL_INTERVAL) {\n      var vector = [Math.random(), Math.random(), Math.random()];\n      data.push({\n        id: \"\".concat(i, \" \").concat(j),\n        x: i,\n        y: j,\n        z: 5,\n        vector: vector\n      });\n    }\n  }\n\n  svg.selectAll(\"vertex\").data(data).join(function (enter) {\n    return enter.append(\"circle\").attr(\"class\", \"vertex\").attr(\"key\", function (d) {\n      return \"\".concat(d.x, \" \").concat(d.y);\n    }).attr(\"cx\", function (d) {\n      return d.x;\n    }).attr(\"cy\", function (d) {\n      return d.y;\n    }).attr(\"r\", 0) // .transition()\n    // .duration(1000)\n    // .delay(d => d.x + d.y)\n    // .ease(d3.easeElasticOut)\n    .attr('r', function (d) {\n      return zToRadius(+d.z);\n    });\n  }, function (update) {\n    return update;\n  }, // update.transition()\n  // .duration(TIME_INTERVAL)\n  // .attr(\"cx\", d => d.x)\n  // .attr(\"cy\", d => d.y)\n  // .attr(\"r\", zToRadius),\n  function (exit) {\n    return exit;\n  } // exit.transition()\n  // .duration(TIME_INTERVAL)\n  // .attr('r', 0)\n  // .remove()\n  );\n}\n\nfunction zToRadius(z) {\n  return z / 5 * 5;\n}\n\nfunction getLinks(vertices) {\n  var links = [];\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"WaveBackground\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYXZlQmFja2dyb3VuZC9XYXZlQmFja2dyb3VuZC50c3g/MDM0NyJdLCJuYW1lcyI6WyJXYXZlQmFja2dyb3VuZCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwic3ZnUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiTWF0aCIsInJhbmRvbSIsImNyZWF0ZVdhdmVTVkciLCJzdHlsZXMiLCJ3YXZlQmFja2dyb3VuZCIsInN2ZyIsIlBJWEVMX0lOVEVSVkFMIiwiVElNRV9JTlRFUlZBTCIsInN2Z0VsZW1lbnQiLCJkMyIsImhlaWdodCIsImNsaWVudEhlaWdodCIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJhdHRyIiwiZGF0YSIsImkiLCJqIiwidmVjdG9yIiwicHVzaCIsImlkIiwieCIsInkiLCJ6Iiwic2VsZWN0QWxsIiwiam9pbiIsImVudGVyIiwiYXBwZW5kIiwiZCIsInpUb1JhZGl1cyIsInVwZGF0ZSIsImV4aXQiLCJnZXRMaW5rcyIsInZlcnRpY2VzIiwibGlua3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVFlLFNBQVNBLGNBQVQsT0FBNEQ7QUFBQTs7QUFBQSxNQUFsQ0MsU0FBa0MsUUFBbENBLFNBQWtDO0FBQUEsTUFBdkJDLFFBQXVCLFFBQXZCQSxRQUF1QjtBQUN2RSxNQUFJQyxNQUFNLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFuQjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJRixNQUFNLENBQUNHLE9BQVgsRUFBb0I7QUFDaEJILFlBQU0sQ0FBQ0csT0FBUCxDQUFlQyxLQUFmLENBQXFCQyxlQUFyQixpQkFBOENDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUE5RCxlQUFzRUQsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQXRGLGVBQThGRCxJQUFJLENBQUNDLE1BQUwsS0FBZ0Is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QUFBLFdBQUlBLE1BQUo7QUFBQSxHQWRkLEVBZVk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNKLFlBQUFDLElBQUk7QUFBQSxXQUFJQSxJQUFKO0FBQUEsR0FwQlosQ0FxQlk7QUFDQTtBQUNBO0FBQ0E7QUF4Qlo7QUE0Qkg7O0FBRUQsU0FBU0YsU0FBVCxDQUFtQk4sQ0FBbkIsRUFBc0I7QUFDbEIsU0FBT0EsQ0FBQyxHQUFHLENBQUosR0FBUSxDQUFmO0FBQ0g7O0FBRUQsU0FBU1MsUUFBVCxDQUFrQkMsUUFBbEIsRUFBNEI7QUFDeEIsTUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFFSCIsImZpbGUiOiIuL2NvbXBvbmVudHMvV2F2ZUJhY2tncm91bmQvV2F2ZUJhY2tncm91bmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9XYXZlQmFja2dyb3VuZC5tb2R1bGUuc2FzcydcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuXG5cbnR5cGUgcHJvcHNUeXBlID0ge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcbiAgICBjaGlsZHJlbj86IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXYXZlQmFja2dyb3VuZCh7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfTogcHJvcHNUeXBlKSB7XG4gICAgbGV0IHN2Z1JlZiA9IHVzZVJlZihudWxsKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHN2Z1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBzdmdSZWYuY3VycmVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgcmdiKCR7TWF0aC5yYW5kb20oKSAqIDI1Nn0sICR7TWF0aC5yYW5kb20oKSAqIDI1Nn0sICR7TWF0aC5yYW5kb20oKSAqIDI1Nn0pYFxuICAgICAgICAgICAgY3JlYXRlV2F2ZVNWRyhzdmdSZWYuY3VycmVudClcbiAgICAgICAgfVxuICAgIH0sIFtzdmdSZWZdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWUgfHwgc3R5bGVzLndhdmVCYWNrZ3JvdW5kfT5cbiAgICAgICAgICAgIDxzdmcgcmVmPXtzdmdSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLnN2Z30+PC9zdmc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoaWxkcmVufT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBQSVhFTF9JTlRFUlZBTCA9IDUwXG5jb25zdCBUSU1FX0lOVEVSVkFMID0gNTBcblxuZnVuY3Rpb24gY3JlYXRlV2F2ZVNWRyhzdmdFbGVtZW50OiBTVkdFbGVtZW50KSB7XG4gICAgLy8gc3ZnIHNldHVwXG4gICAgbGV0IHN2ZyA9IGQzLnNlbGVjdChzdmdFbGVtZW50KVxuICAgIHN2Zy5zdHlsZShcImJvcmRlclwiLCBcIjVweCBibGFjayBzb2xpZFwiKVxuICAgIGxldCBoZWlnaHQgPSBzdmdFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIGxldCB3aWR0aCA9IHN2Z0VsZW1lbnQuY2xpZW50V2lkdGhcbiAgICBzdmcuYXR0cihcInZpZXdib3hcIiwgYDAgMCAke3dpZHRofSAke2hlaWdodH1gKVxuXG4gICAgLy8gY29uc3RydWN0IGRhdGFcbiAgICBsZXQgZGF0YSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDI1OyBpIDwgd2lkdGg7IGkgKz0gUElYRUxfSU5URVJWQUwpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDI1OyBqIDwgaGVpZ2h0OyBqKz0gUElYRUxfSU5URVJWQUwpIHtcbiAgICAgICAgICAgIGxldCB2ZWN0b3IgPSBbTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKV1cbiAgICAgICAgICAgIGRhdGEucHVzaCh7IGlkOiBgJHtpfSAke2p9YCwgeDogaSwgeTogaiwgejogNSwgdmVjdG9yOiB2ZWN0b3IgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN2Zy5zZWxlY3RBbGwoXCJ2ZXJ0ZXhcIilcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLmpvaW4oXG4gICAgICAgICAgICBlbnRlciA9PiBlbnRlci5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidmVydGV4XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJrZXlcIiwgZCA9PiBgJHtkLnh9ICR7ZC55fWApXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjeFwiLCBkID0+IGQueClcbiAgICAgICAgICAgICAgICAuYXR0cihcImN5XCIsIGQgPT4gZC55KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiclwiLCAwKVxuICAgICAgICAgICAgICAgIC8vIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAvLyAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgICAgICAvLyAuZGVsYXkoZCA9PiBkLnggKyBkLnkpXG4gICAgICAgICAgICAgICAgLy8gLmVhc2UoZDMuZWFzZUVsYXN0aWNPdXQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3InLCBkID0+IHpUb1JhZGl1cygrZC56KSksXG4gICAgICAgICAgICB1cGRhdGUgPT4gdXBkYXRlLFxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAvLyAuZHVyYXRpb24oVElNRV9JTlRFUlZBTClcbiAgICAgICAgICAgICAgICAvLyAuYXR0cihcImN4XCIsIGQgPT4gZC54KVxuICAgICAgICAgICAgICAgIC8vIC5hdHRyKFwiY3lcIiwgZCA9PiBkLnkpXG4gICAgICAgICAgICAgICAgLy8gLmF0dHIoXCJyXCIsIHpUb1JhZGl1cyksXG4gICAgICAgICAgICBleGl0ID0+IGV4aXRcbiAgICAgICAgICAgICAgICAvLyBleGl0LnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC8vIC5kdXJhdGlvbihUSU1FX0lOVEVSVkFMKVxuICAgICAgICAgICAgICAgIC8vIC5hdHRyKCdyJywgMClcbiAgICAgICAgICAgICAgICAvLyAucmVtb3ZlKClcbiAgICAgICAgKVxuICAgICAgICBcblxufVxuXG5mdW5jdGlvbiB6VG9SYWRpdXMoeikge1xuICAgIHJldHVybiB6IC8gNSAqIDVcbn1cblxuZnVuY3Rpb24gZ2V0TGlua3ModmVydGljZXMpIHtcbiAgICBsZXQgbGlua3MgPSBbXVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/WaveBackground/WaveBackground.tsx\n");

/***/ })

})