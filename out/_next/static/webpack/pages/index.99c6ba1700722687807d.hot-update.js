webpackHotUpdate_N_E("pages/index",{

/***/ "./components/WaveBackground/WaveBackground.tsx":
/*!******************************************************!*\
  !*** ./components/WaveBackground/WaveBackground.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WaveBackground; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WaveBackground.module.sass */ \"./components/WaveBackground/WaveBackground.module.sass\");\n/* harmony import */ var _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\nvar _jsxFileName = \"/home/victor/Documents/personal-projects/VictorShan.github.io/components/WaveBackground/WaveBackground.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction WaveBackground(_ref) {\n  _s();\n\n  var className = _ref.className,\n      children = _ref.children;\n  var svgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (svgRef.current) {\n      svgRef.current.style.backgroundColor = \"rgb(\".concat(Math.random() * 256, \", \").concat(Math.random() * 256, \", \").concat(Math.random() * 256, \")\");\n      createWaveSVG(svgRef.current);\n    }\n  }, [svgRef]);\n  return __jsx(\"div\", {\n    className: className || _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.waveBackground,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"svg\", {\n    ref: svgRef,\n    className: _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.svg,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.children,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, children));\n}\n\n_s(WaveBackground, \"89Ty783ABEwsfMbSOeu9vscWF34=\");\n\n_c = WaveBackground;\nvar PIXEL_INTERVAL = 50;\nvar TIME_INTERVAL = 50;\n\nfunction createWaveSVG(svgElement) {\n  // svg setup\n  var svg = d3__WEBPACK_IMPORTED_MODULE_2__[\"select\"](svgElement);\n  svg.style(\"border\", \"5px black solid\");\n  var height = svgElement.clientHeight;\n  var width = svgElement.clientWidth;\n  svg.attr(\"viewbox\", \"0 0 \".concat(width, \" \").concat(height)); // construct data\n\n  var data = [];\n\n  for (var i = 10; i < width; i += PIXEL_INTERVAL) {\n    for (var j = 10; j < height; j += PIXEL_INTERVAL) {\n      data.push({\n        x: i,\n        y: j,\n        z: 5\n      });\n    }\n  }\n\n  svg.selectAll(\"vertex\").data(data).enter().append(\"circle\").attr(\"class\", \"vertex\").attr(\"key\", function (d) {\n    return \"\".concat(d.x, \" \").concat(d.y);\n  }).attr(\"cx\", function (d) {\n    return d.x;\n  }).attr(\"cy\", function (d) {\n    return d.y;\n  }).attr(\"r\", 0).transition().duration(1000).delay(function (d) {\n    return d.x + d.y;\n  }).ease(d3__WEBPACK_IMPORTED_MODULE_2__[\"easeElasticOut\"]).attr('r', function (d) {\n    return zToRadius(+d.z);\n  });\n  svg.selectAll(\"vertex\").transition().duration(TIME_INTERVAL).ease(d3__WEBPACK_IMPORTED_MODULE_2__[\"easeLinear\"]).attr(\"cx\", function (d) {\n    return d.x;\n  }).attr(\"cy\", function (d) {\n    return d.y;\n  });\n}\n\nfunction zToRadius(z) {\n  return z / 100 * 5;\n}\n\nfunction getLinks(vertices) {\n  var links = [];\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"WaveBackground\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYXZlQmFja2dyb3VuZC9XYXZlQmFja2dyb3VuZC50c3g/MDM0NyJdLCJuYW1lcyI6WyJXYXZlQmFja2dyb3VuZCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwic3ZnUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiTWF0aCIsInJhbmRvbSIsImNyZWF0ZVdhdmVTVkciLCJzdHlsZXMiLCJ3YXZlQmFja2dyb3VuZCIsInN2ZyIsIlBJWEVMX0lOVEVSVkFMIiwiVElNRV9JTlRFUlZBTCIsInN2Z0VsZW1lbnQiLCJkMyIsImhlaWdodCIsImNsaWVudEhlaWdodCIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJhdHRyIiwiZGF0YSIsImkiLCJqIiwicHVzaCIsIngiLCJ5IiwieiIsInNlbGVjdEFsbCIsImVudGVyIiwiYXBwZW5kIiwiZCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwiZWFzZSIsInpUb1JhZGl1cyIsImdldExpbmtzIiwidmVydGljZXMiLCJsaW5rcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBUWUsU0FBU0EsY0FBVCxPQUE0RDtBQUFBOztBQUFBLE1BQWxDQyxTQUFrQyxRQUFsQ0EsU0FBa0M7QUFBQSxNQUF2QkMsUUFBdUIsUUFBdkJBLFFBQXVCO0FBQ3ZFLE1BQUlDLE1BQU0sR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQW5CO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlGLE1BQU0sQ0FBQ0csT0FBWCxFQUFvQjtBQUNoQkgsWUFBTSxDQUFDRyxPQUFQLENBQWVDLEtBQWYsQ0FBcUJDLGVBQXJCLGlCQUE4Q0MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQTlELGVBQXNFRCxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBdEYsZUFBOEZELElBQUksQ0FBQ0MsTUFBTCxLQUFn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RUFJZ0IsVUFBQVcsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ04sQ0FBTjtBQUFBLEdBSmpCLEVBS0tMLElBTEwsQ0FLVSxJQUxWLEVBS2dCLFVBQUFXLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNMLENBQU47QUFBQSxHQUxqQjtBQU9IOztBQUVELFNBQVNVLFNBQVQsQ0FBbUJULENBQW5CLEVBQXNCO0FBQ2xCLFNBQU9BLENBQUMsR0FBRyxHQUFKLEdBQVUsQ0FBakI7QUFDSDs7QUFFRCxTQUFTVSxRQUFULENBQWtCQyxRQUFsQixFQUE0QjtBQUN4QixNQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUVIIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XYXZlQmFja2dyb3VuZC9XYXZlQmFja2dyb3VuZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1dhdmVCYWNrZ3JvdW5kLm1vZHVsZS5zYXNzJ1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5cblxudHlwZSBwcm9wc1R5cGUgPSB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxuICAgIGNoaWxkcmVuPzogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhdmVCYWNrZ3JvdW5kKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9OiBwcm9wc1R5cGUpIHtcbiAgICBsZXQgc3ZnUmVmID0gdXNlUmVmKG51bGwpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc3ZnUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHN2Z1JlZi5jdXJyZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGByZ2IoJHtNYXRoLnJhbmRvbSgpICogMjU2fSwgJHtNYXRoLnJhbmRvbSgpICogMjU2fSwgJHtNYXRoLnJhbmRvbSgpICogMjU2fSlgXG4gICAgICAgICAgICBjcmVhdGVXYXZlU1ZHKHN2Z1JlZi5jdXJyZW50KVxuICAgICAgICB9XG4gICAgfSwgW3N2Z1JlZl0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZSB8fCBzdHlsZXMud2F2ZUJhY2tncm91bmR9PlxuICAgICAgICAgICAgPHN2ZyByZWY9e3N2Z1JlZn0gY2xhc3NOYW1lPXtzdHlsZXMuc3ZnfT48L3N2Zz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hpbGRyZW59PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IFBJWEVMX0lOVEVSVkFMID0gNTBcbmNvbnN0IFRJTUVfSU5URVJWQUwgPSA1MFxuXG5mdW5jdGlvbiBjcmVhdGVXYXZlU1ZHKHN2Z0VsZW1lbnQ6IFNWR0VsZW1lbnQpIHtcbiAgICAvLyBzdmcgc2V0dXBcbiAgICBsZXQgc3ZnID0gZDMuc2VsZWN0KHN2Z0VsZW1lbnQpXG4gICAgc3ZnLnN0eWxlKFwiYm9yZGVyXCIsIFwiNXB4IGJsYWNrIHNvbGlkXCIpXG4gICAgbGV0IGhlaWdodCA9IHN2Z0VsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgbGV0IHdpZHRoID0gc3ZnRWxlbWVudC5jbGllbnRXaWR0aFxuICAgIHN2Zy5hdHRyKFwidmlld2JveFwiLCBgMCAwICR7d2lkdGh9ICR7aGVpZ2h0fWApXG5cbiAgICAvLyBjb25zdHJ1Y3QgZGF0YVxuICAgIGxldCBkYXRhID0gW11cbiAgICBmb3IgKGxldCBpID0gMTA7IGkgPCB3aWR0aDsgaSArPSBQSVhFTF9JTlRFUlZBTCkge1xuICAgICAgICBmb3IgKGxldCBqID0gMTA7IGogPCBoZWlnaHQ7IGorPSBQSVhFTF9JTlRFUlZBTCkge1xuICAgICAgICAgICAgZGF0YS5wdXNoKHsgeDogaSwgeTogaiwgejogNSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3ZnLnNlbGVjdEFsbChcInZlcnRleFwiKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ2ZXJ0ZXhcIilcbiAgICAgICAgLmF0dHIoXCJrZXlcIiwgZCA9PiBgJHtkLnh9ICR7ZC55fWApXG4gICAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiBkLngpXG4gICAgICAgIC5hdHRyKFwiY3lcIiwgZCA9PiBkLnkpXG4gICAgICAgIC5hdHRyKFwiclwiLCAwKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAuZGVsYXkoZCA9PiBkLnggKyBkLnkpXG4gICAgICAgIC5lYXNlKGQzLmVhc2VFbGFzdGljT3V0KVxuICAgICAgICAuYXR0cigncicsIGQgPT4gelRvUmFkaXVzKCtkLnopKVxuICAgIHN2Zy5zZWxlY3RBbGwoXCJ2ZXJ0ZXhcIilcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oVElNRV9JTlRFUlZBTClcbiAgICAgICAgLmVhc2UoZDMuZWFzZUxpbmVhcilcbiAgICAgICAgLmF0dHIoXCJjeFwiLCBkID0+IGQueClcbiAgICAgICAgLmF0dHIoXCJjeVwiLCBkID0+IGQueSlcblxufVxuXG5mdW5jdGlvbiB6VG9SYWRpdXMoeikge1xuICAgIHJldHVybiB6IC8gMTAwICogNVxufVxuXG5mdW5jdGlvbiBnZXRMaW5rcyh2ZXJ0aWNlcykge1xuICAgIGxldCBsaW5rcyA9IFtdXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/WaveBackground/WaveBackground.tsx\n");

/***/ })

})