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

/***/ "./components/Countdown.js":
/*!*********************************!*\
  !*** ./components/Countdown.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countdown */ \"./node_modules/react-countdown/dist/index.es.js\");\n/* harmony import */ var _no_ssr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./no-ssr */ \"./components/no-ssr.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar fadeIn = {\n    end: {\n        opacity: 1,\n        transition: {\n            duration: 1.5,\n            delay: 2\n        }\n    },\n    start: {\n        opacity: 0\n    }\n};\nvar CountdownCard = function() {\n    var toggle = function toggle() {\n        setHidden(!hidden);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), hidden = ref[0], setHidden = ref[1];\n    var controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        controls.start('end');\n    }, [\n        controls\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-screen h-screen bg-gradient-to-r from-darkPurple to-[#171717] relative flex justify-center items-center font-acier text-[40px] sm:text-[78px] md:text-[120px] lg:text-[200px] text-white\",\n        children: [\n            !hidden && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.m.div, {\n                className: \"z-10 w-screen h-screen bg-black/30 flex justify-center items-center\",\n                variants: fadeIn,\n                initial: \"start\",\n                animate: controls,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_no_ssr__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        date: 1652666400000\n                    }, void 0, false, {\n                        fileName: \"/Users/jordanfreeman/Documents/GitHub/akari-1/components/Countdown.js\",\n                        lineNumber: 44,\n                        columnNumber: 7\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/jordanfreeman/Documents/GitHub/akari-1/components/Countdown.js\",\n                    lineNumber: 43,\n                    columnNumber: 6\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/jordanfreeman/Documents/GitHub/akari-1/components/Countdown.js\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"absolute bottom-1 right-2 z-20 text-xl\",\n                onClick: function() {\n                    return toggle();\n                },\n                children: hidden ? \"Show\" : \"Hide\"\n            }, void 0, false, {\n                fileName: \"/Users/jordanfreeman/Documents/GitHub/akari-1/components/Countdown.js\",\n                lineNumber: 48,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jordanfreeman/Documents/GitHub/akari-1/components/Countdown.js\",\n        lineNumber: 37,\n        columnNumber: 3\n    }, _this));\n};\n_s(CountdownCard, \"y/9NCuoPTlf1Oik5c0IJaeOxRKk=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation\n    ];\n});\n_c = CountdownCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountdownCard);\nvar _c;\n$RefreshReg$(_c, \"CountdownCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvdW50ZG93bi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtEO0FBQ1g7QUFDWDtBQUNpQjs7O0FBRTdDLEdBQUssQ0FBQ08sTUFBTSxHQUFHLENBQUM7SUFDZkMsR0FBRyxFQUFFLENBQUM7UUFDTEMsT0FBTyxFQUFFLENBQUM7UUFDVkMsVUFBVSxFQUFFLENBQUM7WUFDWkMsUUFBUSxFQUFFLEdBQUc7WUFDYkMsS0FBSyxFQUFFLENBQUM7UUFDVCxDQUFDO0lBQ0YsQ0FBQztJQUNEQyxLQUFLLEVBQUUsQ0FBQztRQUNQSixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7QUFDRixDQUFDO0FBR0QsR0FBSyxDQUFDSyxhQUFhLEdBQUcsUUFDdEIsR0FENEIsQ0FBQztRQUluQkMsTUFBTSxHQUFmLFFBQVEsQ0FBQ0EsTUFBTSxHQUFHLENBQUM7UUFDbEJDLFNBQVMsRUFBRUMsTUFBTTtJQUNsQixDQUFDOztJQUxELEdBQUssQ0FBdUJoQixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFuQ2dCLE1BQU0sR0FBZWhCLEdBQWUsS0FBNUJlLFNBQVMsR0FBSWYsR0FBZTtJQUMzQyxHQUFLLENBQUNpQixRQUFRLEdBQUdaLDJEQUFZO0lBTTdCSixnREFBUyxDQUFDLFFBQ1gsR0FEaUIsQ0FBQyxDQUVoQjtJQUVEQSxnREFBUyxDQUFDLFFBQ1gsR0FEaUIsQ0FBQztRQUNoQmdCLFFBQVEsQ0FBQ0wsS0FBSyxDQUFDLENBQUs7SUFDckIsQ0FBQyxFQUFDLENBQUNLO1FBQUFBLFFBQVE7SUFBQSxDQUFDO0lBRVosTUFBTSw2RUFDSkMsQ0FBTztRQUFDQyxTQUFTLEVBQUMsQ0FBNEw7O2FBQzVNSCxNQUFNLGdGQUNOWixnREFBSztnQkFBQ2UsU0FBUyxFQUFDLENBQXFFO2dCQUNyRkUsUUFBUSxFQUFFZixNQUFNO2dCQUNoQmdCLE9BQU8sRUFBQyxDQUFPO2dCQUNmQyxPQUFPLEVBQUVOLFFBQVE7c0dBQ2hCZCwrQ0FBSzswR0FDSkQsdURBQVM7d0JBQUNzQixJQUFJLEVBQUUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFJaENDLENBQU07Z0JBQUNOLFNBQVMsRUFBQyxDQUF3QztnQkFBQ08sT0FBTyxFQUFFLFFBQVE7b0JBQUpaLE1BQU0sQ0FBTkEsTUFBTTs7MEJBQzVFRSxNQUFNLEdBQUcsQ0FBTSxRQUFHLENBQU07Ozs7Ozs7Ozs7OztBQUk3QixDQUFDO0dBakNLSCxhQUFhOztRQUVEUix1REFBWTs7O0tBRnhCUSxhQUFhO0FBbUNuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ291bnRkb3duLmpzPzEwMjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDb3VudGRvd24gZnJvbSAncmVhY3QtY291bnRkb3duJztcbmltcG9ydCBOb1NzciBmcm9tICcuL25vLXNzcidcbmltcG9ydCB7bSwgdXNlQW5pbWF0aW9ufSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5jb25zdCBmYWRlSW4gPSB7XG5cdGVuZDoge1xuXHRcdG9wYWNpdHk6IDEsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0ZHVyYXRpb246IDEuNSxcblx0XHRcdGRlbGF5OiAyXG5cdFx0fVxuXHR9LFxuXHRzdGFydDoge1xuXHRcdG9wYWNpdHk6IDBcblx0fVxufVxuXG5cbmNvbnN0IENvdW50ZG93bkNhcmQgPSAoKSA9PiB7XG5cdGNvbnN0IFtoaWRkZW4sIHNldEhpZGRlbl0gPSB1c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKVxuXG5cdGZ1bmN0aW9uIHRvZ2dsZSgpIHtcblx0XHRzZXRIaWRkZW4oIWhpZGRlbilcblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cblx0fSlcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnRyb2xzLnN0YXJ0KCdlbmQnKVxuXHR9LFtjb250cm9sc10pXG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLXNjcmVlbiBiZy1ncmFkaWVudC10by1yIGZyb20tZGFya1B1cnBsZSB0by1bIzE3MTcxN10gcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZm9udC1hY2llciB0ZXh0LVs0MHB4XSBzbTp0ZXh0LVs3OHB4XSBtZDp0ZXh0LVsxMjBweF0gbGc6dGV4dC1bMjAwcHhdIHRleHQtd2hpdGVcIj5cblx0XHRcdHshaGlkZGVuICYmIChcblx0XHRcdFx0PG0uZGl2IGNsYXNzTmFtZT0nei0xMCB3LXNjcmVlbiBoLXNjcmVlbiBiZy1ibGFjay8zMCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcidcblx0XHRcdFx0XHR2YXJpYW50cz17ZmFkZUlufVxuXHRcdFx0XHRcdGluaXRpYWw9J3N0YXJ0J1xuXHRcdFx0XHRcdGFuaW1hdGU9e2NvbnRyb2xzfT5cblx0XHRcdFx0XHQ8Tm9Tc3I+XG5cdFx0XHRcdFx0XHQ8Q291bnRkb3duIGRhdGU9ezE2NTI2NjY0MDAwMDB9IC8+XG5cdFx0XHRcdFx0PC9Ob1Nzcj5cblx0XHRcdFx0PC9tLmRpdj5cblx0XHRcdCl9XG5cdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTEgcmlnaHQtMiB6LTIwIHRleHQteGwnIG9uQ2xpY2s9eygpPT50b2dnbGUoKX0+XG5cdFx0XHRcdHtoaWRkZW4gPyBcIlNob3dcIiA6IFwiSGlkZVwifVxuXHRcdFx0PC9idXR0b24+XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93bkNhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvdW50ZG93biIsIk5vU3NyIiwibSIsInVzZUFuaW1hdGlvbiIsImZhZGVJbiIsImVuZCIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInN0YXJ0IiwiQ291bnRkb3duQ2FyZCIsInRvZ2dsZSIsInNldEhpZGRlbiIsImhpZGRlbiIsImNvbnRyb2xzIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJkYXRlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Countdown.js\n");

/***/ })

});