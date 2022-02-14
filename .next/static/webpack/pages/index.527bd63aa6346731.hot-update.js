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

/***/ "./components/Team.js":
/*!****************************!*\
  !*** ./components/Team.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TeamCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamCard */ \"./components/TeamCard.js\");\n/* harmony import */ var _FadeInRight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FadeInRight */ \"./components/FadeInRight.js\");\n/* harmony import */ var _assets_corvidd_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/corvidd.png */ \"./assets/corvidd.png\");\n/* harmony import */ var _assets_Aime_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/Aime.png */ \"./assets/Aime.png\");\n/* harmony import */ var _assets_Jaykwa_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/Jaykwa.png */ \"./assets/Jaykwa.png\");\n/* harmony import */ var _assets_Octillion_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/Octillion.png */ \"./assets/Octillion.png\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.m.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar fadeIn = {\n    visible: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            duration: 0.5,\n            delay: 0.3,\n            type: 'spring',\n            bounce: 0.25\n        }\n    },\n    hidden: {\n        opacity: 0,\n        y: 100\n    }\n};\nvar Team = function() {\n    _s();\n    var ref = _slicedToArray((0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__.useInView)(), 2), ref1 = ref[0], inView = ref[1];\n    var controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_9__.useAnimation)();\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        if (inView) {\n            controls.start('visible');\n        }\n    }, [\n        controls,\n        inView\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"team\",\n        className: \"z-10 relative w-screen bg-darkPurple shadow-innerLg flex justify-center py-8 bg-teambg bg-center bg-cover border-yellow-300 border-t-2 border-b-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-screen-xl w-full px-12 flex flex-col justify-start items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FadeInRight__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-4xl md:text-5xl lg:text-6xl w-full text-right\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-yellow-300\",\n                                    children: \"Our \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Team.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 96\n                                }, _this),\n                                \"Team\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Team.js\",\n                            lineNumber: 31,\n                            columnNumber: 29\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Team.js\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Team.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid gap-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full pb-6 py-20\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                            variants: fadeIn,\n                            initial: \"hidden\",\n                            animate: controls,\n                            ref: ref1,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TeamCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                name: \"Octillion\",\n                                image: _assets_Octillion_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                title: \"Founder\",\n                                children: \"Octillion is the Founder, keeping us on track for success and our community thriving.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Team.js\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Team.js\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                            variants: fadeIn,\n                            initial: \"hidden\",\n                            animate: controls,\n                            ref: ref1,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TeamCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                name: \"Aime\",\n                                image: _assets_Aime_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                title: \"Co-Founder / Developer\",\n                                children: \"Aime is the Co-Founder and Developer, working hard to ensure the continued growth of our community.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Team.js\",\n                                lineNumber: 41,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Team.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                            variants: fadeIn,\n                            initial: \"hidden\",\n                            animate: controls,\n                            ref: ref1,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TeamCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                name: \"Jaykwa\",\n                                image: _assets_Jaykwa_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                title: \"Artist\",\n                                children: \"Corvidd is the Frontend Web Developer at Akari, delivering our message in a sleek package.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Team.js\",\n                                lineNumber: 47,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Team.js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                            variants: fadeIn,\n                            initial: \"hidden\",\n                            animate: controls,\n                            ref: ref1,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TeamCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                name: \"Corvidd\",\n                                image: _assets_corvidd_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                title: \"Web Developer\",\n                                children: \"Corvidd is the Frontend Web Developer here at Akari.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Team.js\",\n                                lineNumber: 52,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Team.js\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Team.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Team.js\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Team.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, _this));\n};\n_s(Team, \"3svxJeIYMbbYsUK4ZaCJ9lB1xqw=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_9__.useAnimation\n    ];\n});\n_c = Team;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Team);\nvar _c;\n$RefreshReg$(_c, \"Team\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxFQUFDLENBQVE7NEJBQUNDLE9BQU8sRUFBRVYsUUFBUTs0QkFBRUYsR0FBRyxFQUFFQSxJQUFHO2tIQUNyRXJCLGlEQUFRO2dDQUFDa0MsSUFBSSxFQUFDLENBQVM7Z0NBQUNDLEtBQUssRUFBRWpDLDJEQUFPO2dDQUFFa0MsS0FBSyxFQUFDLENBQWU7MENBQUMsQ0FFL0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEIsQ0FBQztHQTVDS2hCLElBQUk7O1FBQ2tCZCxrRUFBUztRQUNoQkMsdURBQVk7OztLQUYzQmEsSUFBSTtBQThDViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RlYW0uanM/YzgxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGVhbUNhcmQgZnJvbSBcIi4vVGVhbUNhcmRcIlxyXG5pbXBvcnQgRmFkZUluUmlnaHQgZnJvbSAnLi9GYWRlSW5SaWdodCdcclxuaW1wb3J0IGNvcnZpZGQgZnJvbSAnLi4vYXNzZXRzL2NvcnZpZGQucG5nJ1xyXG5pbXBvcnQgYWltZSBmcm9tICcuLi9hc3NldHMvQWltZS5wbmcnXHJcbmltcG9ydCBqYXlrd2EgZnJvbSAnLi4vYXNzZXRzL0pheWt3YS5wbmcnXHJcbmltcG9ydCBvY3RpbGxpb24gZnJvbSAnLi4vYXNzZXRzL09jdGlsbGlvbi5wbmcnXHJcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcidcclxuaW1wb3J0IHsgdXNlQW5pbWF0aW9uLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IGZhZGVJbiA9IHtcclxuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeTogMCwgdHJhbnNpdGlvbjoge2R1cmF0aW9uOiAuNSwgZGVsYXk6IC4zLCB0eXBlOiAnc3ByaW5nJywgYm91bmNlOiAuMjV9fSxcclxuICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiAxMDB9XHJcbn1cclxuXHJcbmNvbnN0IFRlYW0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbIHJlZiwgaW5WaWV3IF0gPSB1c2VJblZpZXcoKVxyXG4gICAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGluVmlldykge1xyXG4gICAgICAgICAgICBjb250cm9scy5zdGFydCgndmlzaWJsZScpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NvbnRyb2xzLCBpblZpZXddKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9J3RlYW0nIGNsYXNzTmFtZT0nei0xMCByZWxhdGl2ZSB3LXNjcmVlbiBiZy1kYXJrUHVycGxlIHNoYWRvdy1pbm5lckxnIGZsZXgganVzdGlmeS1jZW50ZXIgcHktOCBiZy10ZWFtYmcgYmctY2VudGVyIGJnLWNvdmVyIGJvcmRlci15ZWxsb3ctMzAwIGJvcmRlci10LTIgYm9yZGVyLWItMic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXgtdy1zY3JlZW4teGwgdy1mdWxsIHB4LTEyIGZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZhZGVJblJpZ2h0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC00eGwgbWQ6dGV4dC01eGwgbGc6dGV4dC02eGwgdy1mdWxsIHRleHQtcmlnaHQnPjxzcGFuIGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctMzAwJz5PdXIgPC9zcGFuPlRlYW08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmFkZUluUmlnaHQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdhcC0xNCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCB3LWZ1bGwgcGItNiBweS0yMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e2ZhZGVJbn0gaW5pdGlhbD0naGlkZGVuJyBhbmltYXRlPXtjb250cm9sc30gcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVhbUNhcmQgbmFtZT0nT2N0aWxsaW9uJyBpbWFnZT17b2N0aWxsaW9ufSB0aXRsZT0nRm91bmRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPY3RpbGxpb24gaXMgdGhlIEZvdW5kZXIsIGtlZXBpbmcgdXMgb24gdHJhY2sgZm9yIHN1Y2Nlc3MgYW5kIG91ciBjb21tdW5pdHkgdGhyaXZpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGVhbUNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtmYWRlSW59IGluaXRpYWw9J2hpZGRlbicgYW5pbWF0ZT17Y29udHJvbHN9IHJlZj17cmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRlYW1DYXJkIG5hbWU9J0FpbWUnIGltYWdlPXthaW1lfSB0aXRsZT0nQ28tRm91bmRlciAvIERldmVsb3Blcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBaW1lIGlzIHRoZSBDby1Gb3VuZGVyIGFuZCBEZXZlbG9wZXIsIHdvcmtpbmcgaGFyZCB0byBlbnN1cmUgdGhlIGNvbnRpbnVlZCBncm93dGggb2YgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXIgY29tbXVuaXR5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RlYW1DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17ZmFkZUlufSBpbml0aWFsPSdoaWRkZW4nIGFuaW1hdGU9e2NvbnRyb2xzfSByZWY9e3JlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZWFtQ2FyZCBuYW1lPSdKYXlrd2EnIGltYWdlPXtqYXlrd2F9IHRpdGxlPSdBcnRpc3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ydmlkZCBpcyB0aGUgRnJvbnRlbmQgV2ViIERldmVsb3BlciBhdCBBa2FyaSwgZGVsaXZlcmluZyBvdXIgbWVzc2FnZSBpbiBhIHNsZWVrIHBhY2thZ2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGVhbUNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtmYWRlSW59IGluaXRpYWw9J2hpZGRlbicgYW5pbWF0ZT17Y29udHJvbHN9IHJlZj17cmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRlYW1DYXJkIG5hbWU9J0NvcnZpZGQnIGltYWdlPXtjb3J2aWRkfSB0aXRsZT0nV2ViIERldmVsb3Blcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3J2aWRkIGlzIHRoZSBGcm9udGVuZCBXZWIgRGV2ZWxvcGVyIGhlcmUgYXQgQWthcmkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGVhbUNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbSJdLCJuYW1lcyI6WyJUZWFtQ2FyZCIsIkZhZGVJblJpZ2h0IiwiY29ydmlkZCIsImFpbWUiLCJqYXlrd2EiLCJvY3RpbGxpb24iLCJ1c2VJblZpZXciLCJ1c2VBbmltYXRpb24iLCJtb3Rpb24iLCJ1c2VFZmZlY3QiLCJmYWRlSW4iLCJ2aXNpYmxlIiwib3BhY2l0eSIsInkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInR5cGUiLCJib3VuY2UiLCJoaWRkZW4iLCJUZWFtIiwicmVmIiwiaW5WaWV3IiwiY29udHJvbHMiLCJzdGFydCIsInNlY3Rpb24iLCJpZCIsImNsYXNzTmFtZSIsImRpdiIsImgzIiwic3BhbiIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJuYW1lIiwiaW1hZ2UiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Team.js\n");

/***/ })

});