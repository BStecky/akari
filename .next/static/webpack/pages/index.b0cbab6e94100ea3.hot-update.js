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

/***/ "./components/Foreground.js":
/*!**********************************!*\
  !*** ./components/Foreground.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll-parallax */ \"./node_modules/react-scroll-parallax/dist/react-scroll-parallax.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar springIn = {\n    end: {\n        scale: 1,\n        transition: {\n            duration: 1.2,\n            delay: 0.1,\n            type: \"spring\",\n            bounce: 0.3\n        }\n    },\n    start: {\n        scale: 1.5\n    }\n};\nvar Foreground = function(param) {\n    var loading = param.loading, children = param.children, _speed = param.speed, speed = _speed === void 0 ? 10 : _speed;\n    _s();\n    var ref = (0,react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__.useParallax)({\n        speed: speed\n    }).ref;\n    var controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!loading) {\n            controls.start('end');\n        }\n    }, [\n        controls,\n        loading\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        ref: ref,\n        className: \"w-screen h-screen absolute top-0 left-0\",\n        variants: springIn,\n        initial: \"start\",\n        animate: controls,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Foreground.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, _this));\n};\n_s(Foreground, \"sZKmtAi5iQqQQNLiJ+rc9BIPNtU=\", false, function() {\n    return [\n        react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__.useParallax,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation\n    ];\n});\n_c = Foreground;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Foreground);\nvar _c;\n$RefreshReg$(_c, \"Foreground\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZvcmVncm91bmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBQ0M7QUFDbkI7OztBQUVqQyxHQUFLLENBQUNJLFFBQVEsR0FBRyxDQUFDO0lBQ2RDLEdBQUcsRUFBRSxDQUFDO1FBQ0ZDLEtBQUssRUFBRSxDQUFDO1FBQ1JDLFVBQVUsRUFBRSxDQUFDO1lBQ1RDLFFBQVEsRUFBRSxHQUFHO1lBQ2JDLEtBQUssRUFBRSxHQUFHO1lBQ1ZDLElBQUksRUFBRSxDQUFRO1lBQ2RDLE1BQU0sRUFBRSxHQUFFO1FBQ2QsQ0FBQztJQUNMLENBQUM7SUFDREMsS0FBSyxFQUFFLENBQUM7UUFDSk4sS0FBSyxFQUFFLEdBQUc7SUFDZCxDQUFDO0FBQ0wsQ0FBQztBQUVELEdBQUssQ0FBQ08sVUFBVSxHQUFHLFFBQVEsUUFBNkIsQ0FBQztRQUFwQ0MsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLFFBQVEsU0FBUkEsUUFBUSxpQkFBRUMsS0FBSyxFQUFMQSxLQUFLLHVCQUFHLEVBQUU7O0lBQzlDLEdBQUssQ0FBR0MsR0FBRyxHQUFLakIsa0VBQVcsQ0FBQyxDQUFDO1FBQUNnQixLQUFLLEVBQUVBLEtBQUs7SUFBQSxDQUFDLEVBQW5DQyxHQUFHO0lBQ1gsR0FBSyxDQUFDQyxRQUFRLEdBQUdoQiwyREFBWTtJQUU3QkMsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNiLEVBQUUsR0FBRVcsT0FBTyxFQUFFLENBQUM7WUFDVkksUUFBUSxDQUFDTixLQUFLLENBQUMsQ0FBSztRQUN4QixDQUFDO0lBQ0wsQ0FBQyxFQUFDLENBQUNNO1FBQUFBLFFBQVE7UUFBRUosT0FBTztJQUFBLENBQUM7SUFFckIsTUFBTSw2RUFDRGIscURBQVU7UUFBQ2dCLEdBQUcsRUFBRUEsR0FBRztRQUFFRyxTQUFTLEVBQUcsQ0FBdUM7UUFDckVDLFFBQVEsRUFBRWpCLFFBQVE7UUFDbEJrQixPQUFPLEVBQUMsQ0FBTztRQUNmQyxPQUFPLEVBQUVMLFFBQVE7a0JBRWhCSCxRQUFROzs7Ozs7QUFHckIsQ0FBQztHQW5CS0YsVUFBVTs7UUFDSWIsOERBQVc7UUFDVkUsdURBQVk7OztLQUYzQlcsVUFBVTtBQXFCaEIsK0RBQWVBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JlZ3JvdW5kLmpzP2YyNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUGFyYWxsYXggfSBmcm9tICdyZWFjdC1zY3JvbGwtcGFyYWxsYXgnXHJcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBzcHJpbmdJbiA9IHtcclxuICAgIGVuZDogeyBcclxuICAgICAgICBzY2FsZTogMSxcclxuICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxLjIsXHJcbiAgICAgICAgICAgIGRlbGF5OiAwLjEsXHJcbiAgICAgICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXHJcbiAgICAgICAgICAgIGJvdW5jZTogLjNcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3RhcnQ6IHtcclxuICAgICAgICBzY2FsZTogMS41XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IEZvcmVncm91bmQgPSAoe2xvYWRpbmcsIGNoaWxkcmVuLCBzcGVlZCA9IDEwfSkgPT4ge1xyXG4gICAgY29uc3QgeyByZWYgfSA9IHVzZVBhcmFsbGF4KHsgc3BlZWQ6IHNwZWVkfSlcclxuICAgIGNvbnN0IGNvbnRyb2xzID0gdXNlQW5pbWF0aW9uKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKCFsb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIGNvbnRyb2xzLnN0YXJ0KCdlbmQnKVxyXG4gICAgICAgIH1cclxuICAgIH0sW2NvbnRyb2xzLCBsb2FkaW5nXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtb3Rpb24uZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9e2B3LXNjcmVlbiBoLXNjcmVlbiBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTBgfVxyXG4gICAgICAgICAgICB2YXJpYW50cz17c3ByaW5nSW59XHJcbiAgICAgICAgICAgIGluaXRpYWw9J3N0YXJ0J1xyXG4gICAgICAgICAgICBhbmltYXRlPXtjb250cm9sc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcmVncm91bmQiXSwibmFtZXMiOlsidXNlUGFyYWxsYXgiLCJtb3Rpb24iLCJ1c2VBbmltYXRpb24iLCJ1c2VFZmZlY3QiLCJzcHJpbmdJbiIsImVuZCIsInNjYWxlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJ0eXBlIiwiYm91bmNlIiwic3RhcnQiLCJGb3JlZ3JvdW5kIiwibG9hZGluZyIsImNoaWxkcmVuIiwic3BlZWQiLCJyZWYiLCJjb250cm9scyIsImRpdiIsImNsYXNzTmFtZSIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImFuaW1hdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Foreground.js\n");

/***/ })

});