"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar Sidebar = function(param) {\n    var setMenuOpen = param.setMenuOpen, menuOpen = param.menuOpen;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n        children: menuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"container\", {\n            className: \"fixed w-screen h-screen z-50\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    className: \"fixed w-screen h-screen opacity-50 bg-black top-0 left-0\",\n                    onClick: function() {\n                        return setMenuOpen(false);\n                    },\n                    variants: {\n                        hidden: {\n                            opacity: 0\n                        },\n                        visible: {\n                            opacity: 0.75,\n                            transition: {\n                                duration: 0.1\n                            }\n                        }\n                    },\n                    initial: \"hidden\",\n                    animate: \"visible\",\n                    exit: \"hidden\"\n                }, \"background\", false, {\n                    fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.nav, {\n                    className: \"fixed top-0 right-0 h-screen w-screen sm:w-1/2 bg-gray-900 flex-col justify-center items-center text-center p-24\",\n                    initial: {\n                        x: '100vh'\n                    },\n                    animate: {\n                        x: 0\n                    },\n                    transition: {\n                        type: 'spring',\n                        damping: 25\n                    },\n                    exit: {\n                        x: '100vh'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineClose, {\n                            onClick: function() {\n                                return setMenuOpen(false);\n                            },\n                            className: \"absolute top-12 right-12 text-2xl\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n                            lineNumber: 37,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-4xl\",\n                                children: \"Akari\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n                            lineNumber: 38,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                            className: \"my-4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n                            lineNumber: 41,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"my-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"#home\",\n                                        className: \"transition-all hover:text-yellow-200\",\n                                        children: \"HOME\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 42\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"my-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\",\n                                        className: \"transition-all hover:text-yellow-200\",\n                                        children: \"ABOUT\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 42\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"my-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\",\n                                        className: \"transition-all hover:text-yellow-200\",\n                                        children: \"ROADMAP\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 42\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"my-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\",\n                                        className: \"transition-all hover:text-yellow-200\",\n                                        children: \"TEAM\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 42\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                        className: \"my-4\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 25\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-center text-3xl\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaDiscord, {\n                                                className: \"mx-2\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 29\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaTwitter, {\n                                                className: \"mx-2\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 29\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 25\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 21\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n                            lineNumber: 42,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, \"menu\", true, {\n                    fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n            lineNumber: 10,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Sidebar.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, _this));\n};\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q08sU0FBUyxFQUFDLENBQU07Ozs7Ozt3SEFDMUJOLHFEQUFTO2dEQUFDTSxTQUFTLEVBQUMsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQXJCbkMsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7OztBQThCMUIsQ0FBQztLQXRES0osT0FBTztBQXdEYiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGViYXIuanM/M2RhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCB7IEFpT3V0bGluZUNsb3NlIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXHJcbmltcG9ydCB7IEZhRGlzY29yZCwgRmFUd2l0dGVyIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoeyBzZXRNZW51T3BlbiwgbWVudU9wZW4gfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICAgIHsgbWVudU9wZW4gJiYgKFxyXG4gICAgICAgIDxjb250YWluZXIgY2xhc3NOYW1lPSdmaXhlZCB3LXNjcmVlbiBoLXNjcmVlbiB6LTUwJz5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPSdmaXhlZCB3LXNjcmVlbiBoLXNjcmVlbiBvcGFjaXR5LTUwIGJnLWJsYWNrIHRvcC0wIGxlZnQtMCdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1lbnVPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIGtleT0nYmFja2dyb3VuZCdcclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPSB7e1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogLjEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbD0naGlkZGVuJ1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT0ndmlzaWJsZSdcclxuICAgICAgICAgICAgICAgIGV4aXQ9J2hpZGRlbidcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG1vdGlvbi5uYXYgY2xhc3NOYW1lPSdmaXhlZCB0b3AtMCByaWdodC0wIGgtc2NyZWVuIHctc2NyZWVuIHNtOnctMS8yIGJnLWdyYXktOTAwIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBwLTI0J1xyXG4gICAgICAgICAgICAgICAga2V5PSdtZW51J1xyXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyB4OiAnMTAwdmgnIH19XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHg6IDAgfX1cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogJ3NwcmluZycsIGRhbXBpbmc6IDI1fX1cclxuICAgICAgICAgICAgICAgIGV4aXQ9e3sgeDogJzEwMHZoJyB9fVxyXG5cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEFpT3V0bGluZUNsb3NlIG9uQ2xpY2s9eygpID0+IHNldE1lbnVPcGVuKGZhbHNlKX0gY2xhc3NOYW1lPSdhYnNvbHV0ZSB0b3AtMTIgcmlnaHQtMTIgdGV4dC0yeGwnLz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC00eGwnPkFrYXJpPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9J215LTQnLz5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9Jyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbXktNCc+PExpbmsgaHJlZj1cIiNob21lXCIgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgaG92ZXI6dGV4dC15ZWxsb3ctMjAwXCI+SE9NRTwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J215LTQnPjxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgaG92ZXI6dGV4dC15ZWxsb3ctMjAwXCI+QUJPVVQ8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdteS00Jz48TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tYWxsIGhvdmVyOnRleHQteWVsbG93LTIwMFwiPlJPQURNQVA8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdteS00Jz48TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tYWxsIGhvdmVyOnRleHQteWVsbG93LTIwMFwiPlRFQU08L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGhyIGNsYXNzTmFtZT0nbXktNCcvPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LTN4bCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFEaXNjb3JkIGNsYXNzTmFtZT0nbXgtMicvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhVHdpdHRlciBjbGFzc05hbWU9J214LTInLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLm5hdj5cclxuICAgICAgICA8L2NvbnRhaW5lcj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIkFpT3V0bGluZUNsb3NlIiwiRmFEaXNjb3JkIiwiRmFUd2l0dGVyIiwiTGluayIsIlNpZGViYXIiLCJzZXRNZW51T3BlbiIsIm1lbnVPcGVuIiwiY29udGFpbmVyIiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayIsInZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInZpc2libGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJpbml0aWFsIiwiYW5pbWF0ZSIsImV4aXQiLCJuYXYiLCJ4IiwidHlwZSIsImRhbXBpbmciLCJocmVmIiwicGFzc0hyZWYiLCJoMiIsImhyIiwidWwiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n");

/***/ })

});