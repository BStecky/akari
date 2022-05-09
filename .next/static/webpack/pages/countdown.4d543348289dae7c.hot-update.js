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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countdown */ \"./node_modules/react-countdown/dist/index.es.js\");\n/* harmony import */ var _no_ssr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./no-ssr */ \"./components/no-ssr.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar fadeIn = {\n    end: {\n        opacity: 1,\n        transition: {\n            duration: 1.5,\n            delay: 2\n        }\n    },\n    start: {\n        opacity: 0\n    }\n};\nvar CountdownCard = function() {\n    var toggle = function toggle() {\n        setHidden(!hidden);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), hidden = ref[0], setHidden = ref[1];\n    var controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        controls.start('end');\n    }, [\n        controls\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-screen h-screen bg-gradient-to-r from-darkPurple to-[#171717] relative flex justify-center items-center font-acier text-[40px] sm:text-[78px] md:text-[120px] lg:text-[200px] text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.m.div, {\n                className: \"z-10 w-screen h-screen bg-black/30 flex justify-center items-center\",\n                variants: fadeIn,\n                initial: \"start\",\n                animate: controls,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_no_ssr__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        date: 1652666400000\n                    }, void 0, false, {\n                        fileName: \"/Users/jordanfreeman/Documents/GitHub/akari-1/components/Countdown.js\",\n                        lineNumber: 39,\n                        columnNumber: 6\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/jordanfreeman/Documents/GitHub/akari-1/components/Countdown.js\",\n                    lineNumber: 38,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/jordanfreeman/Documents/GitHub/akari-1/components/Countdown.js\",\n                lineNumber: 34,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"absolute bottom-1 right-2 z-20 text-xl\",\n                onClick: function() {\n                    return toggle();\n                },\n                children: hidden ? \"Show\" : \"Hide\"\n            }, void 0, false, {\n                fileName: \"/Users/jordanfreeman/Documents/GitHub/akari-1/components/Countdown.js\",\n                lineNumber: 42,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jordanfreeman/Documents/GitHub/akari-1/components/Countdown.js\",\n        lineNumber: 33,\n        columnNumber: 3\n    }, _this));\n};\n_s(CountdownCard, \"cSMhZgD7vPHo9NUUc8JZvPlxWO4=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation\n    ];\n});\n_c = CountdownCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountdownCard);\nvar _c;\n$RefreshReg$(_c, \"CountdownCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvdW50ZG93bi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtEO0FBQ1g7QUFDWDtBQUNpQjs7O0FBRTdDLEdBQUssQ0FBQ08sTUFBTSxHQUFHLENBQUM7SUFDZkMsR0FBRyxFQUFFLENBQUM7UUFDTEMsT0FBTyxFQUFFLENBQUM7UUFDVkMsVUFBVSxFQUFFLENBQUM7WUFDWkMsUUFBUSxFQUFFLEdBQUc7WUFDYkMsS0FBSyxFQUFFLENBQUM7UUFDVCxDQUFDO0lBQ0YsQ0FBQztJQUNEQyxLQUFLLEVBQUUsQ0FBQztRQUNQSixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7QUFDRixDQUFDO0FBR0QsR0FBSyxDQUFDSyxhQUFhLEdBQUcsUUFDdEIsR0FENEIsQ0FBQztRQUluQkMsTUFBTSxHQUFmLFFBQVEsQ0FBQ0EsTUFBTSxHQUFHLENBQUM7UUFDbEJDLFNBQVMsRUFBRUMsTUFBTTtJQUNsQixDQUFDOztJQUxELEdBQUssQ0FBdUJoQixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFuQ2dCLE1BQU0sR0FBZWhCLEdBQWUsS0FBNUJlLFNBQVMsR0FBSWYsR0FBZTtJQUMzQyxHQUFLLENBQUNpQixRQUFRLEdBQUdaLDJEQUFZO0lBTTdCSixnREFBUyxDQUFDLFFBQ1gsR0FEaUIsQ0FBQztRQUNoQmdCLFFBQVEsQ0FBQ0wsS0FBSyxDQUFDLENBQUs7SUFDckIsQ0FBQyxFQUFDLENBQUNLO1FBQUFBLFFBQVE7SUFBQSxDQUFDO0lBRVosTUFBTSw2RUFDSkMsQ0FBTztRQUFDQyxTQUFTLEVBQUMsQ0FBNEw7O3dGQUM3TWYsZ0RBQUs7Z0JBQUNlLFNBQVMsRUFBQyxDQUFxRTtnQkFDbEZFLFFBQVEsRUFBRWYsTUFBTTtnQkFDbkJnQixPQUFPLEVBQUMsQ0FBTztnQkFDZkMsT0FBTyxFQUFFTixRQUFRO3NHQUNoQmQsK0NBQUs7MEdBQ0pELHVEQUFTO3dCQUFDc0IsSUFBSSxFQUFFLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBRy9CQyxDQUFNO2dCQUFDTixTQUFTLEVBQUMsQ0FBd0M7Z0JBQUNPLE9BQU8sRUFBRSxRQUFRO29CQUFKWixNQUFNLENBQU5BLE1BQU07OzBCQUM1RUUsTUFBTSxHQUFHLENBQU0sUUFBRyxDQUFNOzs7Ozs7Ozs7Ozs7QUFJN0IsQ0FBQztHQTNCS0gsYUFBYTs7UUFFRFIsdURBQVk7OztLQUZ4QlEsYUFBYTtBQTZCbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvdW50ZG93bi5qcz8xMDIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ291bnRkb3duIGZyb20gJ3JlYWN0LWNvdW50ZG93bic7XG5pbXBvcnQgTm9Tc3IgZnJvbSAnLi9uby1zc3InXG5pbXBvcnQge20sIHVzZUFuaW1hdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuY29uc3QgZmFkZUluID0ge1xuXHRlbmQ6IHtcblx0XHRvcGFjaXR5OiAxLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdGR1cmF0aW9uOiAxLjUsXG5cdFx0XHRkZWxheTogMlxuXHRcdH1cblx0fSxcblx0c3RhcnQ6IHtcblx0XHRvcGFjaXR5OiAwXG5cdH1cbn1cblxuXG5jb25zdCBDb3VudGRvd25DYXJkID0gKCkgPT4ge1xuXHRjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cdGNvbnN0IGNvbnRyb2xzID0gdXNlQW5pbWF0aW9uKClcblxuXHRmdW5jdGlvbiB0b2dnbGUoKSB7XG5cdFx0c2V0SGlkZGVuKCFoaWRkZW4pXG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnRyb2xzLnN0YXJ0KCdlbmQnKVxuXHR9LFtjb250cm9sc10pXG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLXNjcmVlbiBiZy1ncmFkaWVudC10by1yIGZyb20tZGFya1B1cnBsZSB0by1bIzE3MTcxN10gcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZm9udC1hY2llciB0ZXh0LVs0MHB4XSBzbTp0ZXh0LVs3OHB4XSBtZDp0ZXh0LVsxMjBweF0gbGc6dGV4dC1bMjAwcHhdIHRleHQtd2hpdGVcIj5cblx0XHRcdDxtLmRpdiBjbGFzc05hbWU9J3otMTAgdy1zY3JlZW4gaC1zY3JlZW4gYmctYmxhY2svMzAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInXG5cdFx0XHQgICAgdmFyaWFudHM9e2ZhZGVJbn1cblx0XHRcdFx0aW5pdGlhbD0nc3RhcnQnXG5cdFx0XHRcdGFuaW1hdGU9e2NvbnRyb2xzfT5cblx0XHRcdFx0PE5vU3NyPlxuXHRcdFx0XHRcdDxDb3VudGRvd24gZGF0ZT17MTY1MjY2NjQwMDAwMH0gLz5cblx0XHRcdFx0PC9Ob1Nzcj5cblx0XHRcdDwvbS5kaXY+XG5cdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTEgcmlnaHQtMiB6LTIwIHRleHQteGwnIG9uQ2xpY2s9eygpPT50b2dnbGUoKX0+XG5cdFx0XHRcdHtoaWRkZW4gPyBcIlNob3dcIiA6IFwiSGlkZVwifVxuXHRcdFx0PC9idXR0b24+XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93bkNhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvdW50ZG93biIsIk5vU3NyIiwibSIsInVzZUFuaW1hdGlvbiIsImZhZGVJbiIsImVuZCIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInN0YXJ0IiwiQ291bnRkb3duQ2FyZCIsInRvZ2dsZSIsInNldEhpZGRlbiIsImhpZGRlbiIsImNvbnRyb2xzIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJkYXRlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Countdown.js\n");

/***/ })

});