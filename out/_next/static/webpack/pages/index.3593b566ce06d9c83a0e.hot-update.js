webpackHotUpdate_N_E("pages/index",{

/***/ "./components/WaveBackground/WaveBackground.tsx":
/*!******************************************************!*\
  !*** ./components/WaveBackground/WaveBackground.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WaveBackground; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WaveBackground.module.sass */ \"./components/WaveBackground/WaveBackground.module.sass\");\n/* harmony import */ var _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\nvar _jsxFileName = \"/home/victor/Documents/personal-projects/VictorShan.github.io/components/WaveBackground/WaveBackground.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction WaveBackground(_ref) {\n  _s();\n\n  var className = _ref.className,\n      children = _ref.children;\n  var svgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (svgRef.current) {\n      svgRef.current.style.backgroundColor = \"rgb(\".concat(Math.random() * 256, \", \").concat(Math.random() * 256, \", \").concat(Math.random() * 256, \")\");\n      createWaveSVG(svgRef.current);\n    }\n  }, [svgRef]);\n  return __jsx(\"div\", {\n    className: className || _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.waveBackground,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"svg\", {\n    ref: svgRef,\n    className: _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.svg,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.children,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, children));\n}\n\n_s(WaveBackground, \"89Ty783ABEwsfMbSOeu9vscWF34=\");\n\n_c = WaveBackground;\nvar PIXEL_INTERVAL = 50;\nvar TIME_INTERVAL = 50;\n\nfunction createWaveSVG(svgElement) {\n  // svg setup\n  var svg = d3__WEBPACK_IMPORTED_MODULE_2__[\"select\"](svgElement);\n  svg.style(\"border\", \"5px black solid\");\n  var height = svgElement.clientHeight;\n  var width = svgElement.clientWidth;\n  svg.attr(\"viewbox\", \"0 0 \".concat(width, \" \").concat(height)); // construct data\n\n  var data = [];\n\n  for (var i = 10; i < width; i += PIXEL_INTERVAL) {\n    for (var j = 10; j < height; j += PIXEL_INTERVAL) {\n      data.push({\n        x: i,\n        y: j\n      });\n    }\n  }\n\n  svg.selectAll(\"vertex\").data(data).enter().append(\"circle\").attr(\"class\", \"vertex\").attr(\"cx\", function (d) {\n    return d.x;\n  }).attr(\"cy\", function (d) {\n    return d.y;\n  }).attr(\"r\", 0).transition().duration(100).attr('r', function (d) {\n    console.log(\"point\");\n    return 3;\n  });\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"WaveBackground\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYXZlQmFja2dyb3VuZC9XYXZlQmFja2dyb3VuZC50c3g/MDM0NyJdLCJuYW1lcyI6WyJXYXZlQmFja2dyb3VuZCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwic3ZnUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiTWF0aCIsInJhbmRvbSIsImNyZWF0ZVdhdmVTVkciLCJzdHlsZXMiLCJ3YXZlQmFja2dyb3VuZCIsInN2ZyIsIlBJWEVMX0lOVEVSVkFMIiwiVElNRV9JTlRFUlZBTCIsInN2Z0VsZW1lbnQiLCJkMyIsImhlaWdodCIsImNsaWVudEhlaWdodCIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJhdHRyIiwiZGF0YSIsImkiLCJqIiwicHVzaCIsIngiLCJ5Iiwic2VsZWN0QWxsIiwiZW50ZXIiLCJhcHBlbmQiLCJkIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBUWUsU0FBU0EsY0FBVCxPQUE0RDtBQUFBOztBQUFBLE1BQWxDQyxTQUFrQyxRQUFsQ0EsU0FBa0M7QUFBQSxNQUF2QkMsUUFBdUIsUUFBdkJBLFFBQXVCO0FBQ3ZFLE1BQUlDLE1BQU0sR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQW5CO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlGLE1BQU0sQ0FBQ0csT0FBWCxFQUFvQjtBQUNoQkgsWUFBTSxDQUFDRyxPQUFQLENBQWVDLEtBQWYsQ0FBcUJDLGVBQXJCLGlCQUE4Q0MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQTlELGVBQXNFRCxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBdEYsZUFBOEZELElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUE5RztBQUNBQyxtQkFBYSxDQUFDUixNQUFNLENBQUNHLE9BQVIsQ0FBYjtBQUNIO0FBQ0osR0FMUSxFQUtOLENBQUNILE1BQUQsQ0FMTSxDQUFUO0FBTUEsU0FDSTtBQUFLLGFBQVMsRUFBRUYsU0FBUyxJQUFJVyxrRUFBTSxDQUFDQyxjQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUVWLE1BQVY7QUFBa0IsYUFBUyxFQUFFUyxrRUFBTSxDQUFDRSxHQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBRUYsa0VBQU0sQ0FBQ1YsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQSxRQURMLENBRkosQ0FESjtBQVFIOztHQWpCdUJGLGM7O0tBQUFBLGM7QUFtQnhCLElBQU1lLGNBQWMsR0FBRyxFQUF2QjtBQUNBLElBQU1DLGFBQWEsR0FBRyxFQUF0Qjs7QUFFQSxTQUFTTCxhQUFULENBQXVCTSxVQUF2QixFQUErQztBQUMzQztBQUNBLE1BQUlILEdBQUcsR0FBR0kseUNBQUEsQ0FBVUQsVUFBVixDQUFWO0FBQ0FILEtBQUcsQ0FBQ1AsS0FBSixDQUFVLFFBQVYsRUFBb0IsaUJBQXBCO0FBQ0EsTUFBSVksTUFBTSxHQUFHRixVQUFVLENBQUNHLFlBQXhCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHSixVQUFVLENBQUNLLFdBQXZCO0FBQ0FSLEtBQUcsQ0FBQ1MsSUFBSixDQUFTLFNBQVQsZ0JBQTJCRixLQUEzQixjQUFvQ0YsTUFBcEMsR0FOMkMsQ0FRM0M7O0FBQ0EsTUFBSUssSUFBSSxHQUFHLEVBQVg7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsRUFBYixFQUFpQkEsQ0FBQyxHQUFHSixLQUFyQixFQUE0QkksQ0FBQyxJQUFJVixjQUFqQyxFQUFpRDtBQUM3QyxTQUFLLElBQUlXLENBQUMsR0FBRyxFQUFiLEVBQWlCQSxDQUFDLEdBQUdQLE1BQXJCLEVBQTZCTyxDQUFDLElBQUdYLGNBQWpDLEVBQWlEO0FBQzdDUyxVQUFJLENBQUNHLElBQUwsQ0FBVTtBQUFFQyxTQUFDLEVBQUVILENBQUw7QUFBUUksU0FBQyxFQUFFSDtBQUFYLE9BQVY7QUFDSDtBQUNKOztBQUVEWixLQUFHLENBQUNnQixTQUFKLENBQWMsUUFBZCxFQUNLTixJQURMLENBQ1VBLElBRFYsRUFFS08sS0FGTCxHQUdLQyxNQUhMLENBR1ksUUFIWixFQUlLVCxJQUpMLENBSVUsT0FKVixFQUltQixRQUpuQixFQUtLQSxJQUxMLENBS1UsSUFMVixFQUtnQixVQUFBVSxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDTCxDQUFOO0FBQUEsR0FMakIsRUFNS0wsSUFOTCxDQU1VLElBTlYsRUFNZ0IsVUFBQVUsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0osQ0FBTjtBQUFBLEdBTmpCLEVBT0tOLElBUEwsQ0FPVSxHQVBWLEVBT2UsQ0FQZixFQVFLVyxVQVJMLEdBU0tDLFFBVEwsQ0FTYyxHQVRkLEVBVUtaLElBVkwsQ0FVVSxHQVZWLEVBVWUsVUFBQVUsQ0FBQyxFQUFJO0FBQUVHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFBc0IsV0FBTyxDQUFQO0FBQVMsR0FWckQ7QUFZSCIsImZpbGUiOiIuL2NvbXBvbmVudHMvV2F2ZUJhY2tncm91bmQvV2F2ZUJhY2tncm91bmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9XYXZlQmFja2dyb3VuZC5tb2R1bGUuc2FzcydcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuXG5cbnR5cGUgcHJvcHNUeXBlID0ge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcbiAgICBjaGlsZHJlbj86IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXYXZlQmFja2dyb3VuZCh7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfTogcHJvcHNUeXBlKSB7XG4gICAgbGV0IHN2Z1JlZiA9IHVzZVJlZihudWxsKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHN2Z1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBzdmdSZWYuY3VycmVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgcmdiKCR7TWF0aC5yYW5kb20oKSAqIDI1Nn0sICR7TWF0aC5yYW5kb20oKSAqIDI1Nn0sICR7TWF0aC5yYW5kb20oKSAqIDI1Nn0pYFxuICAgICAgICAgICAgY3JlYXRlV2F2ZVNWRyhzdmdSZWYuY3VycmVudClcbiAgICAgICAgfVxuICAgIH0sIFtzdmdSZWZdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWUgfHwgc3R5bGVzLndhdmVCYWNrZ3JvdW5kfT5cbiAgICAgICAgICAgIDxzdmcgcmVmPXtzdmdSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLnN2Z30+PC9zdmc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoaWxkcmVufT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBQSVhFTF9JTlRFUlZBTCA9IDUwXG5jb25zdCBUSU1FX0lOVEVSVkFMID0gNTBcblxuZnVuY3Rpb24gY3JlYXRlV2F2ZVNWRyhzdmdFbGVtZW50OiBTVkdFbGVtZW50KSB7XG4gICAgLy8gc3ZnIHNldHVwXG4gICAgbGV0IHN2ZyA9IGQzLnNlbGVjdChzdmdFbGVtZW50KVxuICAgIHN2Zy5zdHlsZShcImJvcmRlclwiLCBcIjVweCBibGFjayBzb2xpZFwiKVxuICAgIGxldCBoZWlnaHQgPSBzdmdFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIGxldCB3aWR0aCA9IHN2Z0VsZW1lbnQuY2xpZW50V2lkdGhcbiAgICBzdmcuYXR0cihcInZpZXdib3hcIiwgYDAgMCAke3dpZHRofSAke2hlaWdodH1gKVxuXG4gICAgLy8gY29uc3RydWN0IGRhdGFcbiAgICBsZXQgZGF0YSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDEwOyBpIDwgd2lkdGg7IGkgKz0gUElYRUxfSU5URVJWQUwpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDEwOyBqIDwgaGVpZ2h0OyBqKz0gUElYRUxfSU5URVJWQUwpIHtcbiAgICAgICAgICAgIGRhdGEucHVzaCh7IHg6IGksIHk6IGogfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN2Zy5zZWxlY3RBbGwoXCJ2ZXJ0ZXhcIilcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidmVydGV4XCIpXG4gICAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiBkLngpXG4gICAgICAgIC5hdHRyKFwiY3lcIiwgZCA9PiBkLnkpXG4gICAgICAgIC5hdHRyKFwiclwiLCAwKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbigxMDApXG4gICAgICAgIC5hdHRyKCdyJywgZCA9PiB7IGNvbnNvbGUubG9nKFwicG9pbnRcIik7IHJldHVybiAzfSlcblxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WaveBackground/WaveBackground.tsx\n");

/***/ })

})