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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _carouselmages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carouselmages */ \"./components/carouselmages.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Carousel = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), width = ref[0], setWidth = ref[1];\n    var carousel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 32);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"Showcase\",\n        className: \"relative w-screen bg-darkPurple shadow-innerLg flex justify-center py-8 bg-carouselbg bg-center bg-cover border-yellow-300 border-t-2 border-b-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            ref: carousel,\n            whileTap: {\n                pointer: 'grabbing'\n            },\n            className: \"cursor-grab overflow-x-hidden\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                drag: \"x\",\n                dragConstraints: {\n                    right: 0,\n                    left: -width\n                },\n                className: \"flex justify-between w-inherit pl-4\",\n                children: _carouselmages__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function(image) {\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        className: \"mx-4 z-2 relative overflow-hidden min-w-[200px] md:min-w-[300px] lg:min-w-[400px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: image,\n                                placeholder: \"blur\",\n                                width: 400,\n                                height: 400,\n                                layout: \"intrinsic\",\n                                alt: \"Akari Preview\",\n                                className: \"z-1 pointer-events-none rounded-md\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Carousel.js\",\n                                lineNumber: 23,\n                                columnNumber: 33\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full h-full absolute top-0 left-0\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Carousel.js\",\n                                lineNumber: 24,\n                                columnNumber: 33\n                            }, _this1)\n                        ]\n                    }, image.id, true, {\n                        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Carousel.js\",\n                        lineNumber: 20,\n                        columnNumber: 29\n                    }, _this1));\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Carousel.js\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Carousel.js\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Carousel.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, _this));\n};\n_s(Carousel, \"oifPnhUyOjk9zScmiNt2zN7dDl8=\");\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2I7QUFDUjtBQUNNOzs7QUFFcEMsR0FBSyxDQUFDTSxRQUFRLEdBQUcsUUFBUSxHQUFGLENBQUM7OztJQUNwQixHQUFLLENBQXFCTixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUE3Qk8sS0FBSyxHQUFjUCxHQUFXLEtBQXZCUSxRQUFRLEdBQUlSLEdBQVc7SUFDckMsR0FBSyxDQUFDUyxRQUFRLEdBQUdQLDZDQUFNO0lBRXZCRCxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2JPLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUNDLFdBQVcsR0FBR0YsUUFBUSxDQUFDQyxPQUFPLENBQUNFLFdBQVcsR0FBRyxFQUFFO0lBQzdFLENBQUMsRUFBQyxDQUFDLENBQUM7SUFFSixNQUFNLDZFQUNEQyxDQUFPO1FBQUNDLEVBQUUsRUFBQyxDQUFVO1FBQUNDLFNBQVMsRUFBQyxDQUFrSjs4RkFDOUtaLHFEQUFVO1lBQUNjLEdBQUcsRUFBRVIsUUFBUTtZQUFFUyxRQUFRLEVBQUUsQ0FBQ0M7Z0JBQUFBLE9BQU8sRUFBRSxDQUFVO1lBQUEsQ0FBQztZQUFFSixTQUFTLEVBQUMsQ0FBK0I7a0dBQ2hHWixxREFBVTtnQkFBQ2lCLElBQUksRUFBQyxDQUFHO2dCQUFDQyxlQUFlLEVBQUUsQ0FBQ0M7b0JBQUFBLEtBQUssRUFBQyxDQUFDO29CQUFFQyxJQUFJLEdBQUdoQixLQUFLO2dCQUFBLENBQUM7Z0JBQUVRLFNBQVMsRUFBQyxDQUFxQzswQkFDekdWLDBEQUFVLENBQUNvQixRQUFRLENBQVJBLEtBQUssRUFBSSxDQUFDO29CQUNsQixNQUFNLDZFQUNEdEIscURBQVU7d0JBQ1hZLFNBQVMsRUFBQyxDQUFtRjs7d0dBRXhGWCxtREFBSztnQ0FBQ3NCLEdBQUcsRUFBRUQsS0FBSztnQ0FBRUUsV0FBVyxFQUFDLENBQU07Z0NBQUNwQixLQUFLLEVBQUUsR0FBRztnQ0FBRXFCLE1BQU0sRUFBRSxHQUFHO2dDQUFFQyxNQUFNLEVBQUMsQ0FBVztnQ0FBQ0MsR0FBRyxFQUFDLENBQWU7Z0NBQUNmLFNBQVMsRUFBQyxDQUFvQzs7Ozs7O3dHQUNuSkMsQ0FBRztnQ0FBQ0QsU0FBUyxFQUFDLENBQXFDOzs7Ozs7O3VCQUp2Q1UsS0FBSyxDQUFDWCxFQUFFOzs7OztnQkFPakMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQixDQUFDO0dBMUJLUixRQUFRO0tBQVJBLFFBQVE7QUE0QmQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC5qcz8yN2I5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IGltYWdlcyBmcm9tICcuL2Nhcm91c2VsbWFnZXMnXHJcblxyXG5jb25zdCBDYXJvdXNlbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IGNhcm91c2VsID0gdXNlUmVmKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFdpZHRoKGNhcm91c2VsLmN1cnJlbnQuc2Nyb2xsV2lkdGggLSBjYXJvdXNlbC5jdXJyZW50Lm9mZnNldFdpZHRoICsgMzIpXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9J1Nob3djYXNlJyBjbGFzc05hbWU9J3JlbGF0aXZlIHctc2NyZWVuIGJnLWRhcmtQdXJwbGUgc2hhZG93LWlubmVyTGcgZmxleCBqdXN0aWZ5LWNlbnRlciBweS04IGJnLWNhcm91c2VsYmcgYmctY2VudGVyIGJnLWNvdmVyIGJvcmRlci15ZWxsb3ctMzAwIGJvcmRlci10LTIgYm9yZGVyLWItMic+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IHJlZj17Y2Fyb3VzZWx9IHdoaWxlVGFwPXt7cG9pbnRlcjogJ2dyYWJiaW5nJ319IGNsYXNzTmFtZT0nY3Vyc29yLWdyYWIgb3ZlcmZsb3cteC1oaWRkZW4nPlxyXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgZHJhZz0neCcgZHJhZ0NvbnN0cmFpbnRzPXt7cmlnaHQ6MCwgbGVmdDogLXdpZHRofX0gY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWluaGVyaXQgcGwtNCc+XHJcbiAgICAgICAgICAgICAgICAgICAge2ltYWdlcy5tYXAoaW1hZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYga2V5PXtpbWFnZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbXgtNCB6LTIgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIG1pbi13LVsyMDBweF0gbWQ6bWluLXctWzMwMHB4XSBsZzptaW4tdy1bNDAwcHhdJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gcGxhY2Vob2xkZXI9J2JsdXInIHdpZHRoPXs0MDB9IGhlaWdodD17NDAwfSBsYXlvdXQ9J2ludHJpbnNpYycgYWx0PVwiQWthcmkgUHJldmlld1wiIGNsYXNzTmFtZT0nei0xIHBvaW50ZXItZXZlbnRzLW5vbmUgcm91bmRlZC1tZCcvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsIGFic29sdXRlIHRvcC0wIGxlZnQtMCcvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwibW90aW9uIiwiSW1hZ2UiLCJpbWFnZXMiLCJDYXJvdXNlbCIsIndpZHRoIiwic2V0V2lkdGgiLCJjYXJvdXNlbCIsImN1cnJlbnQiLCJzY3JvbGxXaWR0aCIsIm9mZnNldFdpZHRoIiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwiZGl2IiwicmVmIiwid2hpbGVUYXAiLCJwb2ludGVyIiwiZHJhZyIsImRyYWdDb25zdHJhaW50cyIsInJpZ2h0IiwibGVmdCIsIm1hcCIsImltYWdlIiwic3JjIiwicGxhY2Vob2xkZXIiLCJoZWlnaHQiLCJsYXlvdXQiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Carousel.js\n");

/***/ })

});