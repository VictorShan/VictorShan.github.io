webpackHotUpdate_N_E("pages/index",{

/***/ "./src/ProjectSection/ProjectTile/ProjectTile.tsx":
/*!********************************************************!*\
  !*** ./src/ProjectSection/ProjectTile/ProjectTile.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProjectTile; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProjectTile_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectTile.module.sass */ \"./src/ProjectSection/ProjectTile/ProjectTile.module.sass\");\n/* harmony import */ var _ProjectTile_module_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ProjectTile_module_sass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _react_icons_all_files_vsc_VscGlobe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-icons/all-files/vsc/VscGlobe */ \"./node_modules/@react-icons/all-files/vsc/VscGlobe.js\");\n/* harmony import */ var _react_icons_all_files_vsc_VscGlobe__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_vsc_VscGlobe__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _react_icons_all_files_fa_FaGithub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-icons/all-files/fa/FaGithub */ \"./node_modules/@react-icons/all-files/fa/FaGithub.js\");\n/* harmony import */ var _react_icons_all_files_fa_FaGithub__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_fa_FaGithub__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/home/victor/Documents/personal_projects/VictorShan.github.io/src/ProjectSection/ProjectTile/ProjectTile.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction ProjectTile(_ref) {\n  _s();\n\n  var project = _ref.project,\n      id = _ref.id;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  return __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: _ProjectTile_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.card,\n    text: 'dark',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Img, {\n    variant: \"top\",\n    src: project.projImg,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Body, {\n    className: _ProjectTile_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.body,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Title, {\n    className: _ProjectTile_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, project.projName), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Text, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, project.projDesc), __jsx(\"div\", {\n    className: _ProjectTile_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.buttonContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    variant: \"primary\",\n    disabled: !project.website,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, __jsx(_react_icons_all_files_vsc_VscGlobe__WEBPACK_IMPORTED_MODULE_5__[\"VscGlobe\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }), \" Website\"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    variant: \"outline-primary\",\n    disabled: !project.github,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, __jsx(_react_icons_all_files_fa_FaGithub__WEBPACK_IMPORTED_MODULE_6__[\"FaGithub\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }), \" GitHub\"))));\n}\n\n_s(ProjectTile, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = ProjectTile;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectTile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1Byb2plY3RTZWN0aW9uL1Byb2plY3RUaWxlL1Byb2plY3RUaWxlLnRzeD9kODRkIl0sIm5hbWVzIjpbIlByb2plY3RUaWxlIiwicHJvamVjdCIsImlkIiwicm91dGVyIiwidXNlUm91dGVyIiwic3R5bGVzIiwiY2FyZCIsInByb2pJbWciLCJib2R5IiwidGl0bGUiLCJwcm9qTmFtZSIsInByb2pEZXNjIiwiYnV0dG9uQ29udGFpbmVyIiwid2Vic2l0ZSIsImdpdGh1YiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1lLFNBQVNBLFdBQVQsT0FBNkM7QUFBQTs7QUFBQSxNQUF0QkMsT0FBc0IsUUFBdEJBLE9BQXNCO0FBQUEsTUFBYkMsRUFBYSxRQUFiQSxFQUFhO0FBQzFELE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxTQUNFLE1BQUMsNERBQUQ7QUFDRSxhQUFTLEVBQUVDLCtEQUFNLENBQUNDLElBRHBCO0FBRUUsUUFBSSxFQUFFLE1BRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsNERBQUQsQ0FBTSxHQUFOO0FBQVUsV0FBTyxFQUFDLEtBQWxCO0FBQXdCLE9BQUcsRUFBRUwsT0FBTyxDQUFDTSxPQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRSxNQUFDLDREQUFELENBQU0sSUFBTjtBQUFXLGFBQVMsRUFBRUYsK0RBQU0sQ0FBQ0csSUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQsQ0FBTSxLQUFOO0FBQVksYUFBUyxFQUFFSCwrREFBTSxDQUFDSSxLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNDUixPQUFPLENBQUNTLFFBQTlDLENBREYsRUFFRSxNQUFDLDREQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVlULE9BQU8sQ0FBQ1UsUUFBcEIsQ0FGRixFQUdFO0FBQUssYUFBUyxFQUFFTiwrREFBTSxDQUFDTyxlQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixZQUFRLEVBQUUsQ0FBQ1gsT0FBTyxDQUFDWSxPQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsYUFERixFQUlFLE1BQUMsOERBQUQ7QUFBUSxXQUFPLEVBQUMsaUJBQWhCO0FBQWtDLFlBQVEsRUFBRSxDQUFDWixPQUFPLENBQUNhLE1BQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixZQUpGLENBSEYsQ0FMRixDQURGO0FBb0JEOztHQXRCdUJkLFc7VUFDUEkscUQ7OztLQURPSixXIiwiZmlsZSI6Ii4vc3JjL1Byb2plY3RTZWN0aW9uL1Byb2plY3RUaWxlL1Byb2plY3RUaWxlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9Qcm9qZWN0VGlsZS5tb2R1bGUuc2FzcydcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSAnLi4vcHJvamVjdHMnXG5pbXBvcnQgeyBWc2NHbG9iZSB9IGZyb20gJ0ByZWFjdC1pY29ucy9hbGwtZmlsZXMvdnNjL1ZzY0dsb2JlJ1xuaW1wb3J0IHsgRmFHaXRodWIgfSBmcm9tICdAcmVhY3QtaWNvbnMvYWxsLWZpbGVzL2ZhL0ZhR2l0aHViJ1xuXG50eXBlIHByb3BzID0ge1xuICBwcm9qZWN0OiBwcm9qZWN0XG4gIGlkPzogc3RyaW5nXG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0VGlsZSh7IHByb2plY3QsIGlkIH06IHByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICB0ZXh0PXsnZGFyayd9XG4gICAgPlxuICAgICAgPENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9e3Byb2plY3QucHJvakltZ30vPlxuICAgICAgPENhcmQuQm9keSBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cbiAgICAgICAgPENhcmQuVGl0bGUgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntwcm9qZWN0LnByb2pOYW1lfTwvQ2FyZC5UaXRsZT5cbiAgICAgICAgPENhcmQuVGV4dD57cHJvamVjdC5wcm9qRGVzY308L0NhcmQuVGV4dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Db250YWluZXJ9PlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBkaXNhYmxlZD17IXByb2plY3Qud2Vic2l0ZX0+XG4gICAgICAgICAgICA8VnNjR2xvYmUgLz4gV2Vic2l0ZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIGRpc2FibGVkPXshcHJvamVjdC5naXRodWJ9PlxuICAgICAgICAgICAgPEZhR2l0aHViIC8+IEdpdEh1YlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgIDwvQ2FyZD5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ProjectSection/ProjectTile/ProjectTile.tsx\n");

/***/ })

})