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

/***/ "./components/Background.js":
/*!**********************************!*\
  !*** ./components/Background.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll-parallax */ \"./node_modules/react-scroll-parallax/dist/react-scroll-parallax.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Background = function(param) {\n    var loading = param.loading, children = param.children, _speed = param.speed, speed = _speed === void 0 ? 10 : _speed, initSize = param.initSize, dur = param.dur;\n    _s();\n    var animation = {\n        hidden: {\n            scale: initSize\n        },\n        visible: {\n            scale: 1,\n            transition: {\n                duration: dur,\n                delay: 0.2,\n                type: \"spring\",\n                bounce: 3\n            }\n        }\n    };\n    var ref = (0,react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__.useParallax)({\n        speed: speed\n    }).ref;\n    var controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (loading) {\n            controls.start(animation);\n        }\n    }, [\n        loading\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        ref: ref,\n        className: \"w-screen h-screen absolute top-0 left-0\",\n        variants: animation,\n        initial: \"hidden\",\n        animate: controls,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jordan\\\\Documents\\\\Projects\\\\akari\\\\components\\\\Background.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, _this));\n};\n_s(Background, \"sZKmtAi5iQqQQNLiJ+rc9BIPNtU=\", false, function() {\n    return [\n        react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__.useParallax,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation\n    ];\n});\n_c = Background;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Background);\nvar _c;\n$RefreshReg$(_c, \"Background\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JhY2tncm91bmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBQ1I7QUFDUzs7O0FBRXBELEdBQUssQ0FBQ0ssVUFBVSxHQUFHLFFBQVEsUUFBNkMsQ0FBQztRQUFwREMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLFFBQVEsU0FBUkEsUUFBUSxpQkFBRUMsS0FBSyxFQUFMQSxLQUFLLHVCQUFHLEVBQUUsV0FBRUMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLEdBQUcsU0FBSEEsR0FBRzs7SUFDN0QsR0FBSyxDQUFDQyxTQUFTLEdBQUcsQ0FBQztRQUNmQyxNQUFNLEVBQUUsQ0FBQ0M7WUFBQUEsS0FBSyxFQUFFSixRQUFRO1FBQUEsQ0FBQztRQUN6QkssT0FBTyxFQUFFLENBQUNEO1lBQUFBLEtBQUssRUFBRSxDQUFDO1lBQUVFLFVBQVUsRUFBQyxDQUFDO2dCQUFDQyxRQUFRLEVBQUVOLEdBQUc7Z0JBQUVPLEtBQUssRUFBRSxHQUFHO2dCQUFFQyxJQUFJLEVBQUUsQ0FBUTtnQkFBRUMsTUFBTSxFQUFFLENBQUM7WUFBQSxDQUFDO1FBQUEsQ0FBQztJQUMzRixDQUFDO0lBQ0QsR0FBSyxDQUFHQyxHQUFHLEdBQUtwQixrRUFBVyxDQUFDLENBQUM7UUFBQ1EsS0FBSyxFQUFFQSxLQUFLO0lBQUEsQ0FBQyxFQUFuQ1ksR0FBRztJQUNYLEdBQUssQ0FBQ0MsUUFBUSxHQUFHakIsMkRBQVk7SUFFN0JILGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYixFQUFFLEVBQUVLLE9BQU8sRUFBRSxDQUFDO1lBQ1ZlLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDWCxTQUFTO1FBQzVCLENBQUM7SUFDTCxDQUFDLEVBQUMsQ0FBQ0w7UUFBQUEsT0FBTztJQUFBLENBQUM7SUFFWCxNQUFNLDZFQUNESCxxREFBVTtRQUFDaUIsR0FBRyxFQUFFQSxHQUFHO1FBQUVJLFNBQVMsRUFBRyxDQUF1QztRQUNyRUMsUUFBUSxFQUFFZCxTQUFTO1FBQ25CZSxPQUFPLEVBQUMsQ0FBUTtRQUNoQkMsT0FBTyxFQUFFTixRQUFRO2tCQUVoQmQsUUFBUTs7Ozs7O0FBR3JCLENBQUM7R0F2QktGLFVBQVU7O1FBS0lMLDhEQUFXO1FBQ1ZJLHVEQUFZOzs7S0FOM0JDLFVBQVU7QUF5QmhCLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmFja2dyb3VuZC5qcz85OGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVBhcmFsbGF4IH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBhcmFsbGF4J1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuXHJcbmNvbnN0IEJhY2tncm91bmQgPSAoe2xvYWRpbmcsIGNoaWxkcmVuLCBzcGVlZCA9IDEwLCBpbml0U2l6ZSwgZHVyIH0pID0+IHtcclxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHtcclxuICAgICAgICBoaWRkZW46IHtzY2FsZTogaW5pdFNpemV9LFxyXG4gICAgICAgIHZpc2libGU6IHtzY2FsZTogMSwgdHJhbnNpdGlvbjp7IGR1cmF0aW9uOiBkdXIsIGRlbGF5OiAwLjIsIHR5cGU6IFwic3ByaW5nXCIsIGJvdW5jZTogM319XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IHJlZiB9ID0gdXNlUGFyYWxsYXgoeyBzcGVlZDogc3BlZWR9KVxyXG4gICAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICAgICAgY29udHJvbHMuc3RhcnQoYW5pbWF0aW9uKVxyXG4gICAgICAgIH1cclxuICAgIH0sW2xvYWRpbmddKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1vdGlvbi5kaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT17YHctc2NyZWVuIGgtc2NyZWVuIGFic29sdXRlIHRvcC0wIGxlZnQtMGB9XHJcbiAgICAgICAgICAgIHZhcmlhbnRzPXthbmltYXRpb259XHJcbiAgICAgICAgICAgIGluaXRpYWw9J2hpZGRlbidcclxuICAgICAgICAgICAgYW5pbWF0ZT17Y29udHJvbHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kIl0sIm5hbWVzIjpbInVzZVBhcmFsbGF4IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJ1c2VBbmltYXRpb24iLCJCYWNrZ3JvdW5kIiwibG9hZGluZyIsImNoaWxkcmVuIiwic3BlZWQiLCJpbml0U2l6ZSIsImR1ciIsImFuaW1hdGlvbiIsImhpZGRlbiIsInNjYWxlIiwidmlzaWJsZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwidHlwZSIsImJvdW5jZSIsInJlZiIsImNvbnRyb2xzIiwic3RhcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJhbmltYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Background.js\n");

/***/ })

});