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

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Background */ \"./components/Background.js\");\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll-parallax */ \"./node_modules/react-scroll-parallax/dist/react-scroll-parallax.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loader */ \"./components/Loader.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Hero = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), loaded1 = ref1[0], setLoaded1 = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), loaded2 = ref2[0], setLoaded2 = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), loaded3 = ref3[0], setLoaded3 = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), loaded4 = ref4[0], setLoaded4 = ref4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (loaded1 && loaded2 && loaded3 && loaded4) {\n            return setLoading(false), console.log('hi');\n        }\n    }, [\n        loaded1,\n        loaded2,\n        loaded3,\n        loaded4\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                lineNumber: 26,\n                columnNumber: 21\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__.ParallaxProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    id: \"home\",\n                    className: \"w-screen h-screen overflow-hidden relative flex justify-center items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Background__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            speed: 1,\n                            dur: 0.7,\n                            initSize: 1.1,\n                            loading: loading,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                onLoadingComplete: function() {\n                                    return setLoaded1(true);\n                                },\n                                quality: 70,\n                                layout: \"fill\",\n                                src: \"/bg.png\",\n                                alt: \"background layer 1\",\n                                className: \"blur-md h-screen object-cover\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                lineNumber: 30,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Background__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            speed: 30,\n                            dur: 0.9,\n                            initSize: 1.3,\n                            loading: loading,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                onLoadingComplete: function() {\n                                    return setLoaded2(true);\n                                },\n                                quality: 80,\n                                layout: \"fill\",\n                                src: \"/layer2.png\",\n                                alt: \"background layer 2\",\n                                className: \"blur-sm h-screen w-full object-cover\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                lineNumber: 33,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Background__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            speed: 60,\n                            dur: 1.2,\n                            initSize: 1.5,\n                            loading: loading,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    onLoadingComplete: function() {\n                                        return setLoaded3(true);\n                                    },\n                                    unoptimized: \"true\",\n                                    quality: 100,\n                                    loading: \"eager\",\n                                    layout: \"fill\",\n                                    src: \"/layer3.png\",\n                                    alt: \"background layer 3\",\n                                    className: \"opacity-0 md:opacity-100 w-full z-40 h-screen object-cover object-center\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    onLoadingComplete: function() {\n                                        return setLoaded4(true);\n                                    },\n                                    unoptimized: \"true\",\n                                    quality: 100,\n                                    loading: \"eager\",\n                                    layout: \"fill\",\n                                    src: \"/layer3mobile.png\",\n                                    alt: \"background layer 3\",\n                                    className: \"opacity-100 md:opacity-0 w-full z-40 h-screen object-cover object-right\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute bottom-[-100%] w-screen h-screen bg-sitePurple\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute z-50 bottom-0 mb-[-1px] w-screen h-1/5 bg-gradient-to-b from-transparent to-sitePurple\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Background__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            speed: 70,\n                            dur: 1.35,\n                            initSize: 1.6,\n                            loading: loading,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"absolute bottom-12 left-12 rotate-270 text-white font-acierOutline text-5xl\",\n                                    children: [\n                                        \".0\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"1\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 113\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute bottom-0 right-12 w-2 text-white flex-col justify-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-acier text-sm rotate-90 w-1\",\n                                            children: '\"Scroll Down\"'\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 21\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            layout: \"fill\",\n                                            src: \"/Arrow 1.svg\",\n                                            alt: \"arrow vector\",\n                                            className: \"margin-0\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 21\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Background__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            speed: 70,\n                            dur: 1.35,\n                            initSize: 1.6,\n                            loading: loading,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative w-screen h-screen flex justify-center items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center font-acier text-white\",\n                                            children: \"Akari\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 25\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-40 sm:w-48 md:w-72 lg:w-96 mt-2 relative\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"/Vector.svg\",\n                                                    alt: \"svg\",\n                                                    className: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 29\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                                    className: \"w-full\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 29\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 25\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 21\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                lineNumber: 49,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Hero, \"eehW9aU6f/dIbbwEJeIYBP5EQOE=\");\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUMsUUFBUSxFQUFFLEdBQUc7NEJBQUVqQixPQUFPLEVBQUVBLE9BQU87a0hBQzVEd0IsQ0FBRztnQ0FBQ1YsU0FBUyxFQUFDLENBQTZEO3NIQUN2RVUsQ0FBRztvQ0FBQ1YsU0FBUyxFQUFDLENBQUU7O29IQUNaYyxDQUFFOzRDQUFDZCxTQUFTLEVBQUMsQ0FBaUY7c0RBQUMsQ0FBSzs7Ozs7O29IQUNwR1UsQ0FBRzs0Q0FBQ1YsU0FBUyxFQUFDLENBQTRDOzs0SEFDdERhLENBQUc7b0RBQUNOLEdBQUcsRUFBQyxDQUFhO29EQUFDQyxHQUFHLEVBQUMsQ0FBSztvREFBQ1IsU0FBUyxFQUFDLENBQUU7Ozs7Ozs0SEFDNUNlLENBQUU7b0RBQUNmLFNBQVMsRUFBQyxDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNsRCxDQUFDO0dBeERLZixJQUFJO0tBQUpBLElBQUk7QUEwRFYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZXJvLmpzP2Y2MDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi9CYWNrZ3JvdW5kJ1xyXG5pbXBvcnQge1BhcmFsbGF4UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcclxuXHJcbmNvbnN0IEhlcm8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW2xvYWRlZDEsIHNldExvYWRlZDFdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbbG9hZGVkMiwgc2V0TG9hZGVkMl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtsb2FkZWQzLCBzZXRMb2FkZWQzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2xvYWRlZDQsIHNldExvYWRlZDRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobG9hZGVkMSAmJiBsb2FkZWQyICYmIGxvYWRlZDMgJiYgbG9hZGVkNCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSksXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGknKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2xvYWRlZDEsIGxvYWRlZDIsIGxvYWRlZDMsIGxvYWRlZDRdKVxyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIHtsb2FkaW5nICYmIDxMb2FkZXIvPn1cclxuICAgICAgICA8UGFyYWxsYXhQcm92aWRlcj5cclxuICAgICAgICA8c2VjdGlvbiBpZD0naG9tZScgY2xhc3NOYW1lPSd3LXNjcmVlbiBoLXNjcmVlbiBvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICA8QmFja2dyb3VuZCBzcGVlZD17MX0gZHVyPXsuN30gaW5pdFNpemU9ezEuMX0gbG9hZGluZz17bG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugb25Mb2FkaW5nQ29tcGxldGU9eygpID0+IHNldExvYWRlZDEodHJ1ZSl9ICBxdWFsaXR5PXs3MH0gbGF5b3V0PSdmaWxsJyBzcmM9Jy9iZy5wbmcnIGFsdD0nYmFja2dyb3VuZCBsYXllciAxJyBjbGFzc05hbWU9J2JsdXItbWQgaC1zY3JlZW4gb2JqZWN0LWNvdmVyJy8+XHJcbiAgICAgICAgICAgIDwvQmFja2dyb3VuZD5cclxuICAgICAgICAgICAgPEJhY2tncm91bmQgc3BlZWQ9ezMwfSBkdXI9ey45fSBpbml0U2l6ZT17MS4zfSBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBvbkxvYWRpbmdDb21wbGV0ZT17KCkgPT4gc2V0TG9hZGVkMih0cnVlKX0gIHF1YWxpdHk9ezgwfSBsYXlvdXQ9J2ZpbGwnIHNyYz0nL2xheWVyMi5wbmcnIGFsdD0nYmFja2dyb3VuZCBsYXllciAyJyBjbGFzc05hbWU9J2JsdXItc20gaC1zY3JlZW4gdy1mdWxsIG9iamVjdC1jb3ZlcicvPlxyXG4gICAgICAgICAgICA8L0JhY2tncm91bmQ+XHJcbiAgICAgICAgICAgIDxCYWNrZ3JvdW5kIHNwZWVkPXs2MH0gZHVyPXsxLjJ9IGluaXRTaXplPXsxLjV9IGxvYWRpbmc9e2xvYWRpbmd9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIG9uTG9hZGluZ0NvbXBsZXRlPXsoKSA9PiBzZXRMb2FkZWQzKHRydWUpfSAgdW5vcHRpbWl6ZWQ9J3RydWUnIHF1YWxpdHk9ezEwMH0gbG9hZGluZz1cImVhZ2VyXCIgbGF5b3V0PSdmaWxsJyBzcmM9Jy9sYXllcjMucG5nJyBhbHQ9J2JhY2tncm91bmQgbGF5ZXIgMycgY2xhc3NOYW1lPSdvcGFjaXR5LTAgbWQ6b3BhY2l0eS0xMDAgdy1mdWxsIHotNDAgaC1zY3JlZW4gb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXInLz5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBvbkxvYWRpbmdDb21wbGV0ZT17KCkgPT4gc2V0TG9hZGVkNCh0cnVlKX0gIHVub3B0aW1pemVkPSd0cnVlJyBxdWFsaXR5PXsxMDB9IGxvYWRpbmc9XCJlYWdlclwiIGxheW91dD0nZmlsbCcgc3JjPScvbGF5ZXIzbW9iaWxlLnBuZycgYWx0PSdiYWNrZ3JvdW5kIGxheWVyIDMnIGNsYXNzTmFtZT0nb3BhY2l0eS0xMDAgbWQ6b3BhY2l0eS0wIHctZnVsbCB6LTQwIGgtc2NyZWVuIG9iamVjdC1jb3ZlciBvYmplY3QtcmlnaHQnLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSBib3R0b20tWy0xMDAlXSB3LXNjcmVlbiBoLXNjcmVlbiBiZy1zaXRlUHVycGxlJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSB6LTUwIGJvdHRvbS0wIG1iLVstMXB4XSB3LXNjcmVlbiBoLTEvNSBiZy1ncmFkaWVudC10by1iIGZyb20tdHJhbnNwYXJlbnQgdG8tc2l0ZVB1cnBsZScvPlxyXG4gICAgICAgICAgICA8L0JhY2tncm91bmQ+XHJcbiAgICAgICAgICAgIDxCYWNrZ3JvdW5kIHNwZWVkPXs3MH0gZHVyPXsxLjM1fSBpbml0U2l6ZT17MS42fSBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTEyIGxlZnQtMTIgcm90YXRlLTI3MCB0ZXh0LXdoaXRlIGZvbnQtYWNpZXJPdXRsaW5lIHRleHQtNXhsJz4uMDxzcGFuPjE8L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTEyICB3LTIgdGV4dC13aGl0ZSBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LWFjaWVyIHRleHQtc20gcm90YXRlLTkwIHctMSc+eydcIlNjcm9sbCBEb3duXCInfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGxheW91dD0nZmlsbCcgc3JjPVwiL0Fycm93IDEuc3ZnXCIgYWx0PSdhcnJvdyB2ZWN0b3InIGNsYXNzTmFtZT0nbWFyZ2luLTAnLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0JhY2tncm91bmQ+XHJcbiAgICAgICAgICAgIDxCYWNrZ3JvdW5kIHNwZWVkPXs3MH0gZHVyPXsxLjM1fSBpbml0U2l6ZT17MS42fSBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSB3LXNjcmVlbiBoLXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9Jyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtNnhsIHNtOnRleHQtN3hsIG1kOnRleHQtOHhsIGxnOnRleHQtOXhsIHRleHQtY2VudGVyICBmb250LWFjaWVyIHRleHQtd2hpdGUnPkFrYXJpPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctNDAgc206dy00OCBtZDp3LTcyIGxnOnctOTYgbXQtMiByZWxhdGl2ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL1ZlY3Rvci5zdmcnIGFsdD0nc3ZnJyBjbGFzc05hbWU9JycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIGNsYXNzTmFtZT0ndy1mdWxsJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQmFja2dyb3VuZD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9QYXJhbGxheFByb3ZpZGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvIl0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJQYXJhbGxheFByb3ZpZGVyIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxvYWRlciIsIkhlcm8iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxvYWRlZDEiLCJzZXRMb2FkZWQxIiwibG9hZGVkMiIsInNldExvYWRlZDIiLCJsb2FkZWQzIiwic2V0TG9hZGVkMyIsImxvYWRlZDQiLCJzZXRMb2FkZWQ0IiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJpZCIsImNsYXNzTmFtZSIsInNwZWVkIiwiZHVyIiwiaW5pdFNpemUiLCJvbkxvYWRpbmdDb21wbGV0ZSIsInF1YWxpdHkiLCJsYXlvdXQiLCJzcmMiLCJhbHQiLCJ1bm9wdGltaXplZCIsImRpdiIsInNwYW4iLCJwIiwiaW1nIiwiaDEiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Hero.js\n");

/***/ })

});