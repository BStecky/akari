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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Background */ \"./components/Background.js\");\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll-parallax */ \"./node_modules/react-scroll-parallax/dist/react-scroll-parallax.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Hero = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), loaded1 = ref1[0], setLoaded1 = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), loaded2 = ref2[0], setLoaded2 = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), loaded3 = ref3[0], setLoaded3 = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), loaded4 = ref4[0], setLoaded4 = ref4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (loaded1 && loaded2 && loaded3 && loaded4) {\n            return setLoading(false), console.log('hi');\n        }\n    }, [\n        loaded1,\n        loaded2,\n        loaded3,\n        loaded4\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__.ParallaxProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"home\",\n                className: \"w-screen h-screen overflow-hidden relative flex justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Background__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        speed: 1,\n                        dur: 0.7,\n                        initSize: 1.1,\n                        controls: controls,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            onLoadingComplete: function() {\n                                return setLoaded1(true);\n                            },\n                            priority: true,\n                            quality: 70,\n                            layout: \"fill\",\n                            src: \"/bg.png\",\n                            alt: \"background layer 1\",\n                            className: \"blur-md h-screen object-cover\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                            lineNumber: 28,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Background__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        speed: 30,\n                        dur: 0.9,\n                        initSize: 1.3,\n                        controls: controls,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            onLoadingComplete: function() {\n                                return setLoaded2(true);\n                            },\n                            priority: true,\n                            quality: 80,\n                            layout: \"fill\",\n                            src: \"/layer2.png\",\n                            alt: \"background layer 2\",\n                            className: \"blur-sm h-screen w-full object-cover\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Background__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        speed: 60,\n                        dur: 1.2,\n                        initSize: 1.5,\n                        controls: controls,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                onLoadingComplete: function() {\n                                    return setLoaded3(true);\n                                },\n                                priority: true,\n                                unoptimized: \"true\",\n                                quality: 100,\n                                loading: \"eager\",\n                                layout: \"fill\",\n                                src: \"/layer3.png\",\n                                alt: \"background layer 3\",\n                                className: \"opacity-0 md:opacity-100 w-full z-40 h-screen object-cover object-center\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                lineNumber: 34,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                onLoadingComplete: function() {\n                                    return setLoaded4(true);\n                                },\n                                priority: true,\n                                unoptimized: \"true\",\n                                quality: 100,\n                                loading: \"eager\",\n                                layout: \"fill\",\n                                src: \"/layer3mobile.png\",\n                                alt: \"background layer 3\",\n                                className: \"opacity-100 md:opacity-0 w-full z-40 h-screen object-cover object-right\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                lineNumber: 35,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute bottom-[-100%] w-screen h-screen bg-sitePurple\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                lineNumber: 36,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute z-50 bottom-0 mb-[-1px] w-screen h-1/5 bg-gradient-to-b from-transparent to-sitePurple\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                lineNumber: 37,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Background__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        speed: 70,\n                        dur: 1.35,\n                        initSize: 1.6,\n                        controls: controls,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"absolute bottom-12 left-12 rotate-270 text-white font-acierOutline text-5xl\",\n                                children: [\n                                    \".0\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"1\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 113\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                lineNumber: 40,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute bottom-0 right-12 w-2 text-white flex-col justify-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-acier text-sm rotate-90 w-1\",\n                                        children: '\"Scroll Down\"'\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        layout: \"fill\",\n                                        src: \"/Arrow 1.svg\",\n                                        alt: \"arrow vector\",\n                                        className: \"margin-0\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 21\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                lineNumber: 41,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Background__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        speed: 70,\n                        dur: 1.35,\n                        initSize: 1.6,\n                        controls: controls,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-screen h-screen flex justify-center items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center font-acier text-white\",\n                                        children: \"Akari\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-40 sm:w-48 md:w-72 lg:w-96 mt-2 relative\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"/Vector.svg\",\n                                                alt: \"svg\",\n                                                className: \"\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 29\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                                className: \"w-full\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 29\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                            lineNumber: 47,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Hero.js\",\n            lineNumber: 25,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false));\n};\n_s(Hero, \"eehW9aU6f/dIbbwEJeIYBP5EQOE=\");\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUk7d0JBQUVDLFFBQVEsRUFBRSxHQUFHO3dCQUFFQyxRQUFRLEVBQUVBLFFBQVE7OEdBQzlEUSxDQUFHOzRCQUFDWixTQUFTLEVBQUMsQ0FBNkQ7a0hBQ3ZFWSxDQUFHO2dDQUFDWixTQUFTLEVBQUMsQ0FBRTs7Z0hBQ1pnQixDQUFFO3dDQUFDaEIsU0FBUyxFQUFDLENBQWlGO2tEQUFDLENBQUs7Ozs7OztnSEFDcEdZLENBQUc7d0NBQUNaLFNBQVMsRUFBQyxDQUE0Qzs7d0hBQ3REZSxDQUFHO2dEQUFDTixHQUFHLEVBQUMsQ0FBYTtnREFBQ0MsR0FBRyxFQUFDLENBQUs7Z0RBQUNWLFNBQVMsRUFBQyxDQUFFOzs7Ozs7d0hBQzVDaUIsQ0FBRTtnREFBQ2pCLFNBQVMsRUFBQyxDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2xELENBQUM7R0F2REtmLElBQUk7S0FBSkEsSUFBSTtBQXlEViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlcm8uanM/ZjYwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL0JhY2tncm91bmQnXHJcbmltcG9ydCB7UGFyYWxsYXhQcm92aWRlcn0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBhcmFsbGF4J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgSGVybyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbbG9hZGVkMSwgc2V0TG9hZGVkMV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtsb2FkZWQyLCBzZXRMb2FkZWQyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2xvYWRlZDMsIHNldExvYWRlZDNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbbG9hZGVkNCwgc2V0TG9hZGVkNF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChsb2FkZWQxICYmIGxvYWRlZDIgJiYgbG9hZGVkMyAmJiBsb2FkZWQ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaScpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9LCBbbG9hZGVkMSwgbG9hZGVkMiwgbG9hZGVkMywgbG9hZGVkNF0pXHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPFBhcmFsbGF4UHJvdmlkZXI+XHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9J2hvbWUnIGNsYXNzTmFtZT0ndy1zY3JlZW4gaC1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgPEJhY2tncm91bmQgc3BlZWQ9ezF9IGR1cj17Ljd9IGluaXRTaXplPXsxLjF9IGNvbnRyb2xzPXtjb250cm9sc30+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugb25Mb2FkaW5nQ29tcGxldGU9eygpID0+IHNldExvYWRlZDEodHJ1ZSl9IHByaW9yaXR5IHF1YWxpdHk9ezcwfSBsYXlvdXQ9J2ZpbGwnIHNyYz0nL2JnLnBuZycgYWx0PSdiYWNrZ3JvdW5kIGxheWVyIDEnIGNsYXNzTmFtZT0nYmx1ci1tZCBoLXNjcmVlbiBvYmplY3QtY292ZXInLz5cclxuICAgICAgICAgICAgPC9CYWNrZ3JvdW5kPlxyXG4gICAgICAgICAgICA8QmFja2dyb3VuZCBzcGVlZD17MzB9IGR1cj17Ljl9IGluaXRTaXplPXsxLjN9IGNvbnRyb2xzPXtjb250cm9sc30+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugb25Mb2FkaW5nQ29tcGxldGU9eygpID0+IHNldExvYWRlZDIodHJ1ZSl9IHByaW9yaXR5IHF1YWxpdHk9ezgwfSBsYXlvdXQ9J2ZpbGwnIHNyYz0nL2xheWVyMi5wbmcnIGFsdD0nYmFja2dyb3VuZCBsYXllciAyJyBjbGFzc05hbWU9J2JsdXItc20gaC1zY3JlZW4gdy1mdWxsIG9iamVjdC1jb3ZlcicvPlxyXG4gICAgICAgICAgICA8L0JhY2tncm91bmQ+XHJcbiAgICAgICAgICAgIDxCYWNrZ3JvdW5kIHNwZWVkPXs2MH0gZHVyPXsxLjJ9IGluaXRTaXplPXsxLjV9IGNvbnRyb2xzPXtjb250cm9sc30+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugb25Mb2FkaW5nQ29tcGxldGU9eygpID0+IHNldExvYWRlZDModHJ1ZSl9IHByaW9yaXR5IHVub3B0aW1pemVkPSd0cnVlJyBxdWFsaXR5PXsxMDB9IGxvYWRpbmc9XCJlYWdlclwiIGxheW91dD0nZmlsbCcgc3JjPScvbGF5ZXIzLnBuZycgYWx0PSdiYWNrZ3JvdW5kIGxheWVyIDMnIGNsYXNzTmFtZT0nb3BhY2l0eS0wIG1kOm9wYWNpdHktMTAwIHctZnVsbCB6LTQwIGgtc2NyZWVuIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyJy8+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugb25Mb2FkaW5nQ29tcGxldGU9eygpID0+IHNldExvYWRlZDQodHJ1ZSl9IHByaW9yaXR5IHVub3B0aW1pemVkPSd0cnVlJyBxdWFsaXR5PXsxMDB9IGxvYWRpbmc9XCJlYWdlclwiIGxheW91dD0nZmlsbCcgc3JjPScvbGF5ZXIzbW9iaWxlLnBuZycgYWx0PSdiYWNrZ3JvdW5kIGxheWVyIDMnIGNsYXNzTmFtZT0nb3BhY2l0eS0xMDAgbWQ6b3BhY2l0eS0wIHctZnVsbCB6LTQwIGgtc2NyZWVuIG9iamVjdC1jb3ZlciBvYmplY3QtcmlnaHQnLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSBib3R0b20tWy0xMDAlXSB3LXNjcmVlbiBoLXNjcmVlbiBiZy1zaXRlUHVycGxlJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSB6LTUwIGJvdHRvbS0wIG1iLVstMXB4XSB3LXNjcmVlbiBoLTEvNSBiZy1ncmFkaWVudC10by1iIGZyb20tdHJhbnNwYXJlbnQgdG8tc2l0ZVB1cnBsZScvPlxyXG4gICAgICAgICAgICA8L0JhY2tncm91bmQ+XHJcbiAgICAgICAgICAgIDxCYWNrZ3JvdW5kIHNwZWVkPXs3MH0gZHVyPXsxLjM1fSBpbml0U2l6ZT17MS42fSBjb250cm9scz17Y29udHJvbHN9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdhYnNvbHV0ZSBib3R0b20tMTIgbGVmdC0xMiByb3RhdGUtMjcwIHRleHQtd2hpdGUgZm9udC1hY2llck91dGxpbmUgdGV4dC01eGwnPi4wPHNwYW4+MTwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMTIgIHctMiB0ZXh0LXdoaXRlIGZsZXgtY29sIGp1c3RpZnktY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtYWNpZXIgdGV4dC1zbSByb3RhdGUtOTAgdy0xJz57J1wiU2Nyb2xsIERvd25cIid9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgbGF5b3V0PSdmaWxsJyBzcmM9XCIvQXJyb3cgMS5zdmdcIiBhbHQ9J2Fycm93IHZlY3RvcicgY2xhc3NOYW1lPSdtYXJnaW4tMCcvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQmFja2dyb3VuZD5cclxuICAgICAgICAgICAgPEJhY2tncm91bmQgc3BlZWQ9ezcwfSBkdXI9ezEuMzV9IGluaXRTaXplPXsxLjZ9IGNvbnRyb2xzPXtjb250cm9sc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgdy1zY3JlZW4gaC1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTZ4bCBzbTp0ZXh0LTd4bCBtZDp0ZXh0LTh4bCBsZzp0ZXh0LTl4bCB0ZXh0LWNlbnRlciAgZm9udC1hY2llciB0ZXh0LXdoaXRlJz5Ba2FyaTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTQwIHNtOnctNDggbWQ6dy03MiBsZzp3LTk2IG10LTIgcmVsYXRpdmUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9WZWN0b3Iuc3ZnJyBhbHQ9J3N2ZycgY2xhc3NOYW1lPScnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciBjbGFzc05hbWU9J3ctZnVsbCcvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0JhY2tncm91bmQ+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvUGFyYWxsYXhQcm92aWRlcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybyJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiUGFyYWxsYXhQcm92aWRlciIsIkltYWdlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZXJvIiwibG9hZGluZyIsInNldExvYWRpbmciLCJsb2FkZWQxIiwic2V0TG9hZGVkMSIsImxvYWRlZDIiLCJzZXRMb2FkZWQyIiwibG9hZGVkMyIsInNldExvYWRlZDMiLCJsb2FkZWQ0Iiwic2V0TG9hZGVkNCIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9uIiwiaWQiLCJjbGFzc05hbWUiLCJzcGVlZCIsImR1ciIsImluaXRTaXplIiwiY29udHJvbHMiLCJvbkxvYWRpbmdDb21wbGV0ZSIsInByaW9yaXR5IiwicXVhbGl0eSIsImxheW91dCIsInNyYyIsImFsdCIsInVub3B0aW1pemVkIiwiZGl2Iiwic3BhbiIsInAiLCJpbWciLCJoMSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Hero.js\n");

/***/ })

});