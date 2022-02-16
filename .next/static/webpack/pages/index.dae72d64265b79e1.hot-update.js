"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _carouselmages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carouselmages */ \"./components/carouselmages.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Carousel = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), width = ref[0], setWidth = ref[1];\n    var carousel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"relative w-screen bg-darkPurple shadow-innerLg flex justify-center py-8 bg-carouselbg bg-center bg-cover border-yellow-300 border-t-2 border-b-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            ref: carousel,\n            className: \"cursor-grab overflow-x-hidden\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                drag: \"x\",\n                dragConstraints: {\n                    right: 0,\n                    left: -width\n                },\n                className: \"flex justify-between w-inherit\",\n                children: _carouselmages__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function(image) {\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        className: \"mx-4 z-2 overflow-hidden min-w-[400px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: image,\n                            width: 400,\n                            height: 400,\n                            layout: \"fixed\",\n                            alt: \"Akari Preview\",\n                            className: \"z-1 pointer-events-none\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Carousel.js\",\n                            lineNumber: 23,\n                            columnNumber: 33\n                        }, _this1)\n                    }, image.id, false, {\n                        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Carousel.js\",\n                        lineNumber: 20,\n                        columnNumber: 29\n                    }, _this1));\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Carousel.js\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Carousel.js\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Carousel.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, _this));\n};\n_s(Carousel, \"oifPnhUyOjk9zScmiNt2zN7dDl8=\");\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2I7QUFDUjtBQUNNOzs7QUFFcEMsR0FBSyxDQUFDTSxRQUFRLEdBQUcsUUFBUSxHQUFGLENBQUM7OztJQUNwQixHQUFLLENBQXFCTixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUE3Qk8sS0FBSyxHQUFjUCxHQUFXLEtBQXZCUSxRQUFRLEdBQUlSLEdBQVc7SUFDckMsR0FBSyxDQUFDUyxRQUFRLEdBQUdQLDZDQUFNO0lBRXZCRCxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2JPLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUNDLFdBQVcsR0FBR0YsUUFBUSxDQUFDQyxPQUFPLENBQUNFLFdBQVc7SUFDeEUsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUVKLE1BQU0sNkVBQ0RDLENBQU87UUFBQ0MsU0FBUyxFQUFDLENBQWtKOzhGQUNoS1gscURBQVU7WUFBQ2EsR0FBRyxFQUFFUCxRQUFRO1lBQUVLLFNBQVMsRUFBQyxDQUErQjtrR0FDL0RYLHFEQUFVO2dCQUFDYyxJQUFJLEVBQUMsQ0FBRztnQkFBQ0MsZUFBZSxFQUFFLENBQUNDO29CQUFBQSxLQUFLLEVBQUMsQ0FBQztvQkFBRUMsSUFBSSxHQUFHYixLQUFLO2dCQUFBLENBQUM7Z0JBQUVPLFNBQVMsRUFBQyxDQUFnQzswQkFDcEdULDBEQUFVLENBQUNpQixRQUFRLENBQVJBLEtBQUssRUFBSSxDQUFDO29CQUNsQixNQUFNLDZFQUNEbkIscURBQVU7d0JBQ1hXLFNBQVMsRUFBQyxDQUF3Qzs4R0FFN0NWLG1EQUFLOzRCQUFDbUIsR0FBRyxFQUFFRCxLQUFLOzRCQUFFZixLQUFLLEVBQUUsR0FBRzs0QkFBRWlCLE1BQU0sRUFBRSxHQUFHOzRCQUFFQyxNQUFNLEVBQUMsQ0FBTzs0QkFBQ0MsR0FBRyxFQUFDLENBQWU7NEJBQUNaLFNBQVMsRUFBQyxDQUF5Qjs7Ozs7O3VCQUhyR1EsS0FBSyxDQUFDSyxFQUFFOzs7OztnQkFNakMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQixDQUFDO0dBekJLckIsUUFBUTtLQUFSQSxRQUFRO0FBMkJkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanM/MjdiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBpbWFnZXMgZnJvbSAnLi9jYXJvdXNlbG1hZ2VzJ1xyXG5cclxuY29uc3QgQ2Fyb3VzZWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBjYXJvdXNlbCA9IHVzZVJlZigpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRXaWR0aChjYXJvdXNlbC5jdXJyZW50LnNjcm9sbFdpZHRoIC0gY2Fyb3VzZWwuY3VycmVudC5vZmZzZXRXaWR0aClcclxuICAgIH0sW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3JlbGF0aXZlIHctc2NyZWVuIGJnLWRhcmtQdXJwbGUgc2hhZG93LWlubmVyTGcgZmxleCBqdXN0aWZ5LWNlbnRlciBweS04IGJnLWNhcm91c2VsYmcgYmctY2VudGVyIGJnLWNvdmVyIGJvcmRlci15ZWxsb3ctMzAwIGJvcmRlci10LTIgYm9yZGVyLWItMic+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IHJlZj17Y2Fyb3VzZWx9IGNsYXNzTmFtZT0nY3Vyc29yLWdyYWIgb3ZlcmZsb3cteC1oaWRkZW4nPlxyXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgZHJhZz0neCcgZHJhZ0NvbnN0cmFpbnRzPXt7cmlnaHQ6MCwgbGVmdDogLXdpZHRofX0gY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWluaGVyaXQnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbWFnZXMubWFwKGltYWdlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGtleT17aW1hZ2UuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J214LTQgei0yIG92ZXJmbG93LWhpZGRlbiBtaW4tdy1bNDAwcHhdJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gd2lkdGg9ezQwMH0gaGVpZ2h0PXs0MDB9IGxheW91dD0nZml4ZWQnIGFsdD1cIkFrYXJpIFByZXZpZXdcIiBjbGFzc05hbWU9J3otMSBwb2ludGVyLWV2ZW50cy1ub25lJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWwiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJtb3Rpb24iLCJJbWFnZSIsImltYWdlcyIsIkNhcm91c2VsIiwid2lkdGgiLCJzZXRXaWR0aCIsImNhcm91c2VsIiwiY3VycmVudCIsInNjcm9sbFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwicmVmIiwiZHJhZyIsImRyYWdDb25zdHJhaW50cyIsInJpZ2h0IiwibGVmdCIsIm1hcCIsImltYWdlIiwic3JjIiwiaGVpZ2h0IiwibGF5b3V0IiwiYWx0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Carousel.js\n");

/***/ })

});