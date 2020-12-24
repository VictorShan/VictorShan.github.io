webpackHotUpdate_N_E("pages/index",{

/***/ "./components/WaveBackground/WaveBackground.tsx":
/*!******************************************************!*\
  !*** ./components/WaveBackground/WaveBackground.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WaveBackground; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WaveBackground.module.sass */ \"./components/WaveBackground/WaveBackground.module.sass\");\n/* harmony import */ var _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\nvar _jsxFileName = \"/home/victor/Documents/personal-projects/VictorShan.github.io/components/WaveBackground/WaveBackground.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction WaveBackground(_ref) {\n  _s();\n\n  var className = _ref.className,\n      children = _ref.children;\n  var svgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (svgRef.current) {\n      svgRef.current.style.backgroundColor = \"rgb(\".concat(Math.random() * 256, \", \").concat(Math.random() * 256, \", \").concat(Math.random() * 256, \")\");\n      createWaveSVG(svgRef.current);\n    }\n  }, [svgRef]);\n  return __jsx(\"div\", {\n    className: className || _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.waveBackground,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"svg\", {\n    ref: svgRef,\n    className: _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.svg,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: _WaveBackground_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.children,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, children));\n}\n\n_s(WaveBackground, \"89Ty783ABEwsfMbSOeu9vscWF34=\");\n\n_c = WaveBackground;\nvar PIXEL_INTERVAL = 50;\nvar TIME_INTERVAL = 50;\n\nfunction createWaveSVG(svgElement) {\n  var svg = d3__WEBPACK_IMPORTED_MODULE_2__[\"select\"](svgElement);\n  svg.style(\"border\", \"5px black solid\");\n  var height = svgElement.clientHeight;\n  var width = svgElement.clientWidth;\n  svg.attr(\"viewbox\", \"0 0 \".concat(width, \" \").concat(height));\n\n  for (var i = 10; i < width; i += PIXEL_INTERVAL) {\n    for (var j = 10; j < height; j += PIXEL_INTERVAL) {\n      svg.append(\"circle\").attr(\"class\", \"vertex\") // .attr(\"x\", i)\n      // .attr(\"y\", j)\n      // .append(\"circle\")\n      .attr(\"cx\", i).attr(\"cy\", j).attr(\"r\", 3).style(\"fill\", \"black\");\n    }\n  }\n\n  var simulation = d3__WEBPACK_IMPORTED_MODULE_2__[\"forceSimulation\"](d3__WEBPACK_IMPORTED_MODULE_2__[\"selectAll\"](\".vertex\"));\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"WaveBackground\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYXZlQmFja2dyb3VuZC9XYXZlQmFja2dyb3VuZC50c3g/MDM0NyJdLCJuYW1lcyI6WyJXYXZlQmFja2dyb3VuZCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwic3ZnUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiTWF0aCIsInJhbmRvbSIsImNyZWF0ZVdhdmVTVkciLCJzdHlsZXMiLCJ3YXZlQmFja2dyb3VuZCIsInN2ZyIsIlBJWEVMX0lOVEVSVkFMIiwiVElNRV9JTlRFUlZBTCIsInN2Z0VsZW1lbnQiLCJkMyIsImhlaWdodCIsImNsaWVudEhlaWdodCIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJhdHRyIiwiaSIsImoiLCJhcHBlbmQiLCJzaW11bGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFRZSxTQUFTQSxjQUFULE9BQTREO0FBQUE7O0FBQUEsTUFBbENDLFNBQWtDLFFBQWxDQSxTQUFrQztBQUFBLE1BQXZCQyxRQUF1QixRQUF2QkEsUUFBdUI7QUFDdkUsTUFBSUMsTUFBTSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBbkI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSUYsTUFBTSxDQUFDRyxPQUFYLEVBQW9CO0FBQ2hCSCxZQUFNLENBQUNHLE9BQVAsQ0FBZUMsS0FBZixDQUFxQkMsZUFBckIsaUJBQThDQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBOUQsZUFBc0VELElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUF0RixlQUE4RkQsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQTlHO0FBQ0FDLG1CQUFhLENBQUNSLE1BQU0sQ0FBQ0csT0FBUixDQUFiO0FBQ0g7QUFDSixHQUxRLEVBS04sQ0FBQ0gsTUFBRCxDQUxNLENBQVQ7QUFNQSxTQUNJO0FBQUssYUFBUyxFQUFFRixTQUFTLElBQUlXLGtFQUFNLENBQUNDLGNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRVYsTUFBVjtBQUFrQixhQUFTLEVBQUVTLGtFQUFNLENBQUNFLEdBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFFRixrRUFBTSxDQUFDVixRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLFFBREwsQ0FGSixDQURKO0FBUUg7O0dBakJ1QkYsYzs7S0FBQUEsYztBQW1CeEIsSUFBTWUsY0FBYyxHQUFHLEVBQXZCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLEVBQXRCOztBQUVBLFNBQVNMLGFBQVQsQ0FBdUJNLFVBQXZCLEVBQStDO0FBQzNDLE1BQUlILEdBQUcsR0FBR0kseUNBQUEsQ0FBVUQsVUFBVixDQUFWO0FBQ0FILEtBQUcsQ0FBQ1AsS0FBSixDQUFVLFFBQVYsRUFBb0IsaUJBQXBCO0FBQ0EsTUFBSVksTUFBTSxHQUFHRixVQUFVLENBQUNHLFlBQXhCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHSixVQUFVLENBQUNLLFdBQXZCO0FBQ0FSLEtBQUcsQ0FBQ1MsSUFBSixDQUFTLFNBQVQsZ0JBQTJCRixLQUEzQixjQUFvQ0YsTUFBcEM7O0FBQ0EsT0FBSyxJQUFJSyxDQUFDLEdBQUcsRUFBYixFQUFpQkEsQ0FBQyxHQUFHSCxLQUFyQixFQUE0QkcsQ0FBQyxJQUFJVCxjQUFqQyxFQUFpRDtBQUM3QyxTQUFLLElBQUlVLENBQUMsR0FBRyxFQUFiLEVBQWlCQSxDQUFDLEdBQUdOLE1BQXJCLEVBQTZCTSxDQUFDLElBQUdWLGNBQWpDLEVBQWlEO0FBQzdDRCxTQUFHLENBQUNZLE1BQUosQ0FBVyxRQUFYLEVBQ0tILElBREwsQ0FDVSxPQURWLEVBQ21CLFFBRG5CLEVBRUk7QUFDQTtBQUNBO0FBSkosT0FLS0EsSUFMTCxDQUtVLElBTFYsRUFLZ0JDLENBTGhCLEVBTUtELElBTkwsQ0FNVSxJQU5WLEVBTWdCRSxDQU5oQixFQU9LRixJQVBMLENBT1UsR0FQVixFQU9lLENBUGYsRUFRS2hCLEtBUkwsQ0FRVyxNQVJYLEVBUW1CLE9BUm5CO0FBU0g7QUFDSjs7QUFFRCxNQUFJb0IsVUFBVSxHQUFHVCxrREFBQSxDQUFtQkEsNENBQUEsQ0FBYSxTQUFiLENBQW5CLENBQWpCO0FBQ0giLCJmaWxlIjoiLi9jb21wb25lbnRzL1dhdmVCYWNrZ3JvdW5kL1dhdmVCYWNrZ3JvdW5kLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vV2F2ZUJhY2tncm91bmQubW9kdWxlLnNhc3MnXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcblxuXG50eXBlIHByb3BzVHlwZSA9IHtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXG4gICAgY2hpbGRyZW4/OiBKU1guRWxlbWVudCB8IEpTWC5FbGVtZW50W11cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2F2ZUJhY2tncm91bmQoeyBjbGFzc05hbWUsIGNoaWxkcmVuIH06IHByb3BzVHlwZSkge1xuICAgIGxldCBzdmdSZWYgPSB1c2VSZWYobnVsbClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzdmdSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgc3ZnUmVmLmN1cnJlbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYHJnYigke01hdGgucmFuZG9tKCkgKiAyNTZ9LCAke01hdGgucmFuZG9tKCkgKiAyNTZ9LCAke01hdGgucmFuZG9tKCkgKiAyNTZ9KWBcbiAgICAgICAgICAgIGNyZWF0ZVdhdmVTVkcoc3ZnUmVmLmN1cnJlbnQpXG4gICAgICAgIH1cbiAgICB9LCBbc3ZnUmVmXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lIHx8IHN0eWxlcy53YXZlQmFja2dyb3VuZH0+XG4gICAgICAgICAgICA8c3ZnIHJlZj17c3ZnUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5zdmd9Pjwvc3ZnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGlsZHJlbn0+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgUElYRUxfSU5URVJWQUwgPSA1MFxuY29uc3QgVElNRV9JTlRFUlZBTCA9IDUwXG5cbmZ1bmN0aW9uIGNyZWF0ZVdhdmVTVkcoc3ZnRWxlbWVudDogU1ZHRWxlbWVudCkge1xuICAgIGxldCBzdmcgPSBkMy5zZWxlY3Qoc3ZnRWxlbWVudClcbiAgICBzdmcuc3R5bGUoXCJib3JkZXJcIiwgXCI1cHggYmxhY2sgc29saWRcIilcbiAgICBsZXQgaGVpZ2h0ID0gc3ZnRWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICBsZXQgd2lkdGggPSBzdmdFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgc3ZnLmF0dHIoXCJ2aWV3Ym94XCIsIGAwIDAgJHt3aWR0aH0gJHtoZWlnaHR9YClcbiAgICBmb3IgKGxldCBpID0gMTA7IGkgPCB3aWR0aDsgaSArPSBQSVhFTF9JTlRFUlZBTCkge1xuICAgICAgICBmb3IgKGxldCBqID0gMTA7IGogPCBoZWlnaHQ7IGorPSBQSVhFTF9JTlRFUlZBTCkge1xuICAgICAgICAgICAgc3ZnLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ2ZXJ0ZXhcIilcbiAgICAgICAgICAgICAgICAvLyAuYXR0cihcInhcIiwgaSlcbiAgICAgICAgICAgICAgICAvLyAuYXR0cihcInlcIiwgailcbiAgICAgICAgICAgICAgICAvLyAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjeFwiLCBpKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY3lcIiwgailcbiAgICAgICAgICAgICAgICAuYXR0cihcInJcIiwgMylcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiYmxhY2tcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKGQzLnNlbGVjdEFsbChcIi52ZXJ0ZXhcIikpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/WaveBackground/WaveBackground.tsx\n");

/***/ })

})