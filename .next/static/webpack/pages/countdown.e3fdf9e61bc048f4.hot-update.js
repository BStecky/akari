"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/countdown",{

/***/ "./components/Box.js":
/*!***************************!*\
  !*** ./components/Box.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Box; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nvar springIn = {\n    end: {\n        scale: 1,\n        transition: {\n            duration: 2,\n            delay: 0.1,\n            type: \"spring\",\n            bounce: 0\n        }\n    },\n    start: {\n        scale: 3\n    }\n};\nvar Spline = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"node_modules_splinetool_react-spline_dist_react-spline_es_js\").then(__webpack_require__.bind(__webpack_require__, /*! @splinetool/react-spline */ \"./node_modules/@splinetool/react-spline/dist/react-spline.es.js\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"../components/Box.js -> \" + \"@splinetool/react-spline\"\n        ]\n    },\n    ssr: false\n});\n_c = Spline;\nfunction Box() {\n    _s();\n    var controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        controls.start('end');\n    }, [\n        controls\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.div, {\n        className: \"w-screen h-screen absolute top-0 left-0 -z-1 overflow-x-hidden\",\n        variants: springIn,\n        initial: \"start\",\n        animate: controls,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spline, {\n            scene: \"https://prod.spline.design/SKDDnKdOGDJiLBkU/scene.splinecode\"\n        }, void 0, false, {\n            fileName: \"/Users/jordanfreeman/Documents/GitHub/akari-1/components/Box.js\",\n            lineNumber: 35,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jordanfreeman/Documents/GitHub/akari-1/components/Box.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this));\n};\n_s(Box, \"6pZ2lBElA3YLtcQOKE/nS/LmH94=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation\n    ];\n});\n_c1 = Box;\nvar _c, _c1;\n$RefreshReg$(_c, \"Spline\");\n$RefreshReg$(_c1, \"Box\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JveC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ2E7QUFDaEI7O0FBRS9CLEdBQUssQ0FBQ0ksUUFBUSxHQUFHLENBQUM7SUFDaEJDLEdBQUcsRUFBRSxDQUFDO1FBQ0ZDLEtBQUssRUFBRSxDQUFDO1FBQ1JDLFVBQVUsRUFBRSxDQUFDO1lBQ1RDLFFBQVEsRUFBRSxDQUFDO1lBQ1hDLEtBQUssRUFBRSxHQUFHO1lBQ1ZDLElBQUksRUFBRSxDQUFRO1lBQ2RDLE1BQU0sRUFBRSxDQUFDO1FBQ2IsQ0FBQztJQUNMLENBQUM7SUFDREMsS0FBSyxFQUFFLENBQUM7UUFDSk4sS0FBSyxFQUFFLENBQUM7SUFDWixDQUFDO0FBQ0gsQ0FBQztBQUVELEdBQUssQ0FBQ08sTUFBTSxHQUFHYixtREFBTyxDQUFDLFFBQVE7SUFBRixNQUFNLENBQU4sNFBBQWlDOzs7Ozs7O0lBQzVEYyxHQUFHLEVBQUUsS0FBSzs7S0FETkQsTUFBTTtBQUlHLFFBQVEsQ0FBQ0UsR0FBRyxHQUFHLENBQUM7O0lBQzdCLEdBQUssQ0FBQ0MsUUFBUSxHQUFHZCwyREFBWTtJQUU3QkMsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDYmEsUUFBUSxDQUFDSixLQUFLLENBQUMsQ0FBSztJQUN4QixDQUFDLEVBQUMsQ0FBQ0k7UUFBQUEsUUFBUTtJQUFBLENBQUM7SUFDWixNQUFNLDZFQUNIZixnREFBSztRQUFDaUIsU0FBUyxFQUFDLENBQWdFO1FBQ2pGQyxRQUFRLEVBQUVmLFFBQVE7UUFDbEJnQixPQUFPLEVBQUMsQ0FBTztRQUNmQyxPQUFPLEVBQUVMLFFBQVE7OEZBQ1pILE1BQU07WUFBQ1MsS0FBSyxFQUFDLENBQThEOzs7Ozs7Ozs7OztBQUdwRixDQUFDO0dBZHVCUCxHQUFHOztRQUNSYix1REFBWTs7O01BRFBhLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb3guanM/NDJjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHsgbSwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuY29uc3Qgc3ByaW5nSW4gPSB7XG4gIGVuZDogeyBcbiAgICAgIHNjYWxlOiAxLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIGR1cmF0aW9uOiAyLFxuICAgICAgICAgIGRlbGF5OiAwLjEsXG4gICAgICAgICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICAgICAgICBib3VuY2U6IDBcbiAgICAgIH1cbiAgfSxcbiAgc3RhcnQ6IHtcbiAgICAgIHNjYWxlOiAzXG4gIH1cbn1cblxuY29uc3QgU3BsaW5lID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ0BzcGxpbmV0b29sL3JlYWN0LXNwbGluZScpLCB7XG4gIHNzcjogZmFsc2UsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm94KCkge1xuICBjb25zdCBjb250cm9scyA9IHVzZUFuaW1hdGlvbigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnRyb2xzLnN0YXJ0KCdlbmQnKVxuICB9LFtjb250cm9sc10pXG4gIHJldHVybiAoXG4gICAgPG0uZGl2IGNsYXNzTmFtZT0ndy1zY3JlZW4gaC1zY3JlZW4gYWJzb2x1dGUgdG9wLTAgbGVmdC0wIC16LTEgb3ZlcmZsb3cteC1oaWRkZW4nXG4gICAgdmFyaWFudHM9e3NwcmluZ0lufVxuICAgIGluaXRpYWw9J3N0YXJ0J1xuICAgIGFuaW1hdGU9e2NvbnRyb2xzfT5cbiAgICAgICAgPFNwbGluZSBzY2VuZT1cImh0dHBzOi8vcHJvZC5zcGxpbmUuZGVzaWduL1NLRERuS2RPR0RKaUxCa1Uvc2NlbmUuc3BsaW5lY29kZVwiIC8+XG4gICAgPC9tLmRpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiZHluYW1pYyIsIm0iLCJ1c2VBbmltYXRpb24iLCJ1c2VFZmZlY3QiLCJzcHJpbmdJbiIsImVuZCIsInNjYWxlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJ0eXBlIiwiYm91bmNlIiwic3RhcnQiLCJTcGxpbmUiLCJzc3IiLCJCb3giLCJjb250cm9scyIsImRpdiIsImNsYXNzTmFtZSIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJzY2VuZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Box.js\n");

/***/ })

});